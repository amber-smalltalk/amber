/* ====================================================================
   |
   |   Amber Smalltalk
   |   http://amber-lang.net
   |
   ======================================================================

   ======================================================================
   |
   | Copyright (c) 2010-2011
   | Nicolas Petton <petton.nicolas@gmail.com>
   |
   | Amber is released under the MIT license
   |
   | Permission is hereby granted, free of charge, to any person obtaining
   | a copy of this software and associated documentation files (the 
   | 'Software'), to deal in the Software without restriction, including 
   | without limitation the rights to use, copy, modify, merge, publish, 
   | distribute, sublicense, and/or sell copies of the Software, and to 
   | permit persons to whom the Software is furnished to do so, subject to 
   | the following conditions:
   |
   | The above copyright notice and this permission notice shall be 
   | included in all copies or substantial portions of the Software.
   |
   | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, 
   | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
   | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
   | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
   | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
   | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
   | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  
   |
   ==================================================================== */

/* Make sure that console is defined */

if (typeof console === "undefined") {
	this.console = {
		log: function() {},
		warn: function() {},
		info: function() {},
		debug: function() {},
		error: function() {}
	};
}

/* Smalltalk constructors definition */

function SmalltalkObject(){};
function SmalltalkBehavior(){};
function SmalltalkClass(){};
function SmalltalkPackage(){};
function SmalltalkMetaclass(){
	this.meta = true;
};
function SmalltalkMethod(){};
function SmalltalkNil(){};

function SmalltalkSymbol(string){
	this.value = string;
};

function SmalltalkOrganizer() {
    this.elements = [];
};

SmalltalkOrganizer.prototype.addElement = function(el) {
    if(typeof el === 'undefined' || el === nil) {
        return false;
    }
    if(this.elements.indexOf(el) == -1) {
        this.elements.push(el);
    }
};

SmalltalkOrganizer.prototype.removeElement = function(el) {
    for(var i=0; i<this.elements.length; i++) {
        if(this.elements[i] == el) {
            this.elements.splice(i, 1);
            break;
        }
    }
};


function Smalltalk(){

	var st = this;

	/* This is the current call context object. While it is publicly available,
	   Use smalltalk.getThisContext() instead which will answer a safe copy of 
	   the current context */

	st.thisContext = undefined;

	/* List of all reserved words in JavaScript. They may not be used as variables
	   in Smalltalk. */

	// list of reserved JavaScript keywords as of
	//   http://es5.github.com/#x7.6.1.1
	// and
	//   http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.6.1
	st.reservedWords = ['break', 'case', 'catch', 'continue', 'debugger',
		'default', 'delete', 'do', 'else', 'finally', 'for', 'function',
		'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw',
		'try', 'typeof', 'var', 'void', 'while', 'with',
		// ES5: future use: http://es5.github.com/#x7.6.1.2
		'class', 'const', 'enum', 'export', 'extends', 'import', 'super',
		// ES5: future use in strict mode
		'implements', 'interface', 'let', 'package', 'private', 'protected',
		'public', 'static', 'yield'];

	/* The symbol table ensures symbol unicity */

	symbolTable = {};
	st.symbolFor = function(string) {
		if(symbolTable[string] === undefined) {
			symbolTable[string] = new SmalltalkSymbol(string);
		};

		return symbolTable[string];
	};

	/* Unique ID number generator */

	oid = 0;
	st.nextId = function() {
		oid += 1;
		return oid;
	};

	/* We hold all Packages in a separate Object */

	st.packages = {};

	/* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

	function pkg(spec) {
		var that = new SmalltalkPackage();
		that.pkgName = spec.pkgName;
        that.organization = new SmalltalkOrganizer();
		that.properties = spec.properties || {};
		return that;
	};

	/* Smalltalk class creation. A class is an instance of an automatically 
	   created metaclass object. Newly created classes (not their metaclass) 
	   should be added to the smalltalk object, see smalltalk.addClass().
	   Superclass linking is *not* handled here, see smalltalk.init()  */

	function klass(spec) {
		var spec = spec || {};
		var meta = metaclass();
		var that = setupClass(meta.instanceClass, spec);
		that.className = spec.className;
		meta.className = spec.className + ' class';
		if(spec.superclass) {
			that.superclass = spec.superclass;
			meta.superclass = spec.superclass.klass;
		}
		return that;
	}
	
	function metaclass() {
		var meta = setupClass(new SmalltalkMetaclass(), {})
		meta.instanceClass = new meta.fn;
		return meta;
	}
	
	function setupClass(that, spec) {
		that.fn = spec.fn || function(){};
		that.iVarNames = spec.iVarNames || [];
		Object.defineProperty(that, "toString", {
			value: function() { return 'Smalltalk ' + this.className; }, 
            configurable: true // no writable - in par with ES6 methods
		});
        that.organization = new SmalltalkOrganizer();
		that.pkg = spec.pkg;
		Object.defineProperties(that.fn.prototype, {
			methods: { value: {}, enumerable: false, configurable: true, writable: true },
			inheritedMethods: { value: {}, enumerable: false, configurable: true, writable: true },
			klass: { value: that, enumerable: false, configurable: true, writable: true }
		});
		return that;
	};

	/* Smalltalk method object. To add a method to a class,
	   use smalltalk.addMethod() */

	st.method = function(spec) {
		var that = new SmalltalkMethod();
		that.selector          = spec.selector;
		that.jsSelector        = spec.jsSelector;
		that.args              = spec.args || {};
		that.category          = spec.category;
		that.source            = spec.source;
		that.messageSends      = spec.messageSends || [];
		that.referencedClasses = spec.referencedClasses || [];
		that.fn                = spec.fn;
		return that;
	};

	/* Initialize a class in its class hierarchy. Handle both class and
	   metaclasses. */
	   
	st.init = function(klass) {
		st.initClass(klass);
		if(klass.klass && !klass.meta) {
			st.initClass(klass.klass);
		}
	};

	st.initClass = function(klass) {
		var subclasses = st.subclasses(klass);
		var methods, prototype = klass.fn.prototype;

		if(klass.superclass && klass.superclass !== nil) {
			methods = st.methods(klass.superclass);

			//Methods linking
			for(var keys = Object.keys(methods), i=0; i<keys.length; i++) {
				var key = keys[i];
				if(!prototype.methods[key]) {
					prototype.inheritedMethods[key] = methods[key];
					Object.defineProperty(prototype, methods[key].jsSelector, {
						value: methods[key].fn, configurable: true, writable: true
					});
				}
			}
		}

		for(var i=0; i<subclasses.length; i++) {
			st.initClass(subclasses[i]);
		}
	};


	/* Answer all registered Packages as Array */

	st.packages.all = function() {
		var packages = [];
		for(var i in st.packages) {
			if (!st.packages.hasOwnProperty(i) || typeof(st.packages[i]) === "function") continue;
			packages.push(st.packages[i]);
		}
		return packages
	};

	/* Answer all registered Smalltalk classes */

	st.classes = function() {
		var classes = [], names = Object.keys(st), l = names.length;
		for (var i=0; i<l; i++) {
			var name = names[i];
			if (name.search(/^[A-Z]/) !== -1) {
				classes.push(st[name]);
			}
		}
		return classes;
	};


	/* Answer all methods (included inherited ones) of klass. */

	st.methods = function(klass) {
		var methods = {};
		inheritedMethods = klass.fn.prototype.inheritedMethods;
		for(var i=0, keys=Object.keys(inheritedMethods); i<keys.length; i++) {
			methods[keys[i]] = inheritedMethods[keys[i]];
		}
		var inheritedMethods = klass.fn.prototype.methods;
		for(var i=0, keys=Object.keys(inheritedMethods); i<keys.length; i++) {
			methods[keys[i]] = inheritedMethods[keys[i]];
		}
		return methods;
	};


	/* Answer the direct subclasses of klass. */

	st.subclasses = function(klass) {
		var subclasses = [];
		var classes = st.classes();
		for(var i=0; i < classes.length; i++) {
			var c = classes[i];
			if(c.fn) {
				//Classes
				if(c.superclass === klass) {
					subclasses.push(c);
				}
				c = c.klass;
				//Metaclasses
				if(c && c.superclass === klass) {
					subclasses.push(c);
				}
			}
		}
		return subclasses;
	};

	/* Create a new class wrapping a JavaScript constructor, and add it to the 
	   global smalltalk object. Package is lazily created if it does not exist with given name. */

	st.wrapClassName = function(className, pkgName, fn, superclass) {
		var pkg = st.addPackage(pkgName);
		st[className] = klass({
			className:  className, 
			superclass: superclass,
			pkg:        pkg, 
			fn:         fn
		});
	};

	/* Create an alias for an existing class */
	st.alias = function(klass, alias) {
		st[alias] = klass;
	}

	/* Add a package to the smalltalk.packages object, creating a new one if needed.
	   If pkgName is null or empty we return nil, which is an allowed package for a class.
	   If package already exists we still update the properties of it. */

	st.addPackage = function(pkgName, properties) {
		if(!pkgName) {return nil;}
		if(!(st.packages[pkgName])) {
			st.packages[pkgName] = pkg({
				pkgName: pkgName,
				properties: properties
			});
		} else {
			if(properties) {
				st.packages[pkgName].properties = properties;
			}	
		}
		return st.packages[pkgName];
	};

	/* Add a class to the smalltalk object, creating a new one if needed.
	   A Package is lazily created if it does not exist with given name. */

	st.addClass = function(className, superclass, iVarNames, pkgName) {
		var pkg = st.addPackage(pkgName);
		if(st[className]) {
			st[className].superclass = superclass;
			st[className].iVarNames = iVarNames;
			st[className].pkg = pkg || st[className].pkg;
		} else {
			st[className] = klass({
				className: className, 
				superclass: superclass,
				pkg: pkg,
				iVarNames: iVarNames
			});
		}

        pkg.organization.addElement(st[className]);
	};

    st.removeClass = function(klass) {
        klass.pkg.organization.removeElement(klass);
        delete st[klass.className];
    };

	/* Add/remove a method to/from a class */

	st.addMethod = function(jsSelector, method, klass) {
		Object.defineProperty(klass.fn.prototype, jsSelector, {
			value: method.fn, configurable: true, writable: true
		});
		klass.fn.prototype.methods[method.selector] = method;
		method.methodClass = klass;
		method.jsSelector = jsSelector;

        klass.organization.addElement(method.category);
	};

    st.removeMethod = function(method) {
        var protocol = method.category;
        var klass = method.methodClass;
		var methods = klass.fn.prototype.methods;

		delete klass.fn.prototype[method.selector._asSelector()];
		delete methods[method.selector];

		var selectors = Object.keys(methods);
		var shouldDeleteProtocol = true;
		for(var i= 0, l = selectors.length; i<l; i++) {
            if(methods[selectors[i]].category === protocol) {
                shouldDeleteProtocol = false;
				break;
            };
        };
        if(shouldDeleteProtocol) {
            klass.organization.removeElement(protocol)
        };
    };

	/* Handles unhandled errors during message sends */

	st.send = function(receiver, selector, args, klass) {
		if(st.thisContext) {
			return withContextSend(receiver, selector, args, klass);
		} else {
			try {return withContextSend(receiver, selector, args, klass)}
			catch(error) {
				// Reset the context stack in any case
				st.thisContext = undefined;
				if(error.smalltalkError) {
					handleError(error);
				} else {
					throw(error);
				}
			}
		}
	};

	function withContextSend(receiver, selector, args, klass) {
		var call, method;
		if(receiver == null) {
			receiver = nil;
		}
		method = klass ? klass.fn.prototype[selector] : receiver.klass && receiver[selector];
		if(method) {
			var context = pushContext(receiver, selector, method, args);
			call = method.apply(receiver, args);
			popContext(context);
			return call;
		} else {
			return messageNotUnderstood(receiver, selector, args);
		}
	};

	/* Handles Smalltalk errors. Triggers the registered ErrorHandler 
	   (See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
        if(!error.cc) {
		    smalltalk.ErrorHandler._current()._handleError_(error);
        }
	};

	/* Handles #dnu: *and* JavaScript method calls.
	   if the receiver has no klass, we consider it a JS object (outside of the
	   Amber system). Else assume that the receiver understands #doesNotUnderstand: */

	function messageNotUnderstood(receiver, selector, args) {
		/* Handles JS method calls. */
		if(receiver.klass === undefined || receiver.allowJavaScriptCalls) {
			return callJavaScriptMethod(receiver, selector, args);
		}

		/* Handles not understood messages. Also see the Amber counter-part 
		   Object>>doesNotUnderstand: */

		return receiver._doesNotUnderstand_(
				st.Message._new()
				._selector_(st.convertSelector(selector))
				._arguments_(args)
				);
	};

	/* Call a method of a JS object, or answer a property if it exists.
	   Else try wrapping a JSObjectProxy around the receiver.

       If the object property is a function, then call it, except if it starts with
       an uppercase character (we probably want to answer the function itself in this 
       case and send it #new from Amber).

	   Converts keyword-based selectors by using the first
	   keyword only, but keeping all message arguments.

	   Example:
	   "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */

	function callJavaScriptMethod(receiver, selector, args) {
		var jsSelector = selector._asJavaScriptSelector();
		var jsProperty = receiver[jsSelector];
		if(typeof jsProperty === "function" && !/^[A-Z]/.test(jsSelector)) {
			return jsProperty.apply(receiver, args);
		} else if(jsProperty !== undefined) {
			if(args[0]) {
				receiver[jsSelector] = args[0];
				return nil;
			} else {
				return jsProperty;
			}
		}

		return st.send(st.JSObjectProxy._on_(receiver), selector, args);
	};


	/* Reuse one old context stored in oldContext */

	st.oldContext = null;


	/* Handle thisContext pseudo variable */

	st.getThisContext = function() {
		if(st.thisContext) {
			return st.thisContext.copy();
		}
	};

	function pushContext(receiver, selector, method, temps) {
		var c = st.oldContext, tc = st.thisContext;
		if (!c) {
			return st.thisContext = new SmalltalkMethodContext(receiver, selector, method, temps, tc);
		}
		st.oldContext = null;
		c.homeContext = tc;
        c.pc          = 1;
		c.receiver    = receiver;
        c.selector    = selector;
		c.method      = method;
		c.temps       = temps || {};
		return st.thisContext = c;
	};

	function popContext(context) {
		st.thisContext = context.homeContext;
		context.homeContext = undefined;
		st.oldContext = context;
	};

	/* Convert a string to a valid smalltalk selector.
	   if you modify the following functions, also change String>>asSelector
	   accordingly */

	st.convertSelector = function(selector) {
		if(selector.match(/__/)) {
			return convertBinarySelector(selector);
		} else {
			return convertKeywordSelector(selector);
		}
	};

	function convertKeywordSelector(selector) {
		return selector.replace(/^_/, '').replace(/_/g, ':');
	};

	function convertBinarySelector(selector) {
		return selector
			.replace(/^_/, '')
			.replace(/_plus/, '+')
			.replace(/_minus/, '-')
			.replace(/_star/, '*')
			.replace(/_slash/, '/')
			.replace(/_gt/, '>')
			.replace(/_lt/, '<')
			.replace(/_eq/, '=')
			.replace(/_comma/, ',')
			.replace(/_at/, '@')
	};

	/* Converts a JavaScript object to valid Smalltalk Object */
	st.readJSObject = function(js) {
		var object = js;
		var readObject = (js.constructor === Object);
		var readArray = (js.constructor === Array);

		if(readObject) {
			object = smalltalk.Dictionary._new();
		}
		for(var i in js) {
			if(readObject) {
				object._at_put_(i, st.readJSObject(js[i]));
			} 
			if(readArray) {
				object[i] = st.readJSObject(js[i]);
			}
		}
		return object;
	};

    /* Boolean assertion */
    st.assert = function(shouldBeBoolean) {
        if ((undefined !== shouldBeBoolean) && (shouldBeBoolean.klass === smalltalk.Boolean)) {
            return shouldBeBoolean;
        } else {
            smalltalk.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
        }
    }
};

function SmalltalkMethodContext(receiver, selector, method, temps, home) {
	this.receiver    = receiver;
    this.selector    = selector;
	this.method      = method;
	this.temps       = temps || {};
	this.homeContext = home;
};

SmalltalkMethodContext.prototype.copy = function() {
	var home = this.homeContext;
	if(home) {home = home.copy()}
	return new SmalltalkMethodContext(
		this.receiver, 
        this.selector,
		this.method, 
		this.temps, 
		home
	);
};

SmalltalkMethodContext.prototype.resume = function() {
    //Brutally set the receiver as thisContext, then re-enter the function
    smalltalk.thisContext = this;
    return this.method.apply(receiver, temps);
};

/* Global Smalltalk objects. */

var nil = new SmalltalkNil();
var smalltalk = new Smalltalk();

if(this.jQuery) {
	this.jQuery.allowJavaScriptCalls = true;
}

/****************************************************************************************/


/* Base classes wrapping. If you edit this part, do not forget to set the superclass of the
   object metaclass to Class after the definition of Object */

smalltalk.wrapClassName("Object", "Kernel", SmalltalkObject);
smalltalk.wrapClassName("Smalltalk", "Kernel", Smalltalk, smalltalk.Object);
smalltalk.wrapClassName("Package", "Kernel", SmalltalkPackage, smalltalk.Object);
smalltalk.wrapClassName("Behavior", "Kernel", SmalltalkBehavior, smalltalk.Object);
smalltalk.wrapClassName("Class", "Kernel", SmalltalkClass, smalltalk.Behavior);
smalltalk.wrapClassName("Metaclass", "Kernel", SmalltalkMetaclass, smalltalk.Behavior);
smalltalk.wrapClassName("CompiledMethod", "Kernel", SmalltalkMethod, smalltalk.Object);
smalltalk.wrapClassName("Organizer", "Kernel-Objects", SmalltalkOrganizer, smalltalk.Object);

smalltalk.Object.klass.superclass = smalltalk.Class;

smalltalk.wrapClassName("Number", "Kernel", Number, smalltalk.Object);
smalltalk.wrapClassName("BlockClosure", "Kernel", Function, smalltalk.Object);
smalltalk.wrapClassName("Boolean", "Kernel", Boolean, smalltalk.Object);
smalltalk.wrapClassName("Date", "Kernel", Date, smalltalk.Object);
smalltalk.wrapClassName("UndefinedObject", "Kernel", SmalltalkNil, smalltalk.Object);

smalltalk.wrapClassName("Collection", "Kernel", null, smalltalk.Object);
smalltalk.wrapClassName("SequenceableCollection", "Kernel", null, smalltalk.Collection);
smalltalk.wrapClassName("CharacterArray", "Kernel", null, smalltalk.SequenceableCollection);
smalltalk.wrapClassName("String", "Kernel", String, smalltalk.CharacterArray);
smalltalk.wrapClassName("Symbol", "Kernel", SmalltalkSymbol, smalltalk.CharacterArray);
smalltalk.wrapClassName("Array", "Kernel", Array, smalltalk.SequenceableCollection);
smalltalk.wrapClassName("RegularExpression", "Kernel", RegExp, smalltalk.String);

smalltalk.wrapClassName("Error", "Kernel", Error, smalltalk.Object);
smalltalk.wrapClassName("MethodContext", "Kernel", SmalltalkMethodContext, smalltalk.Object);

/* Alias definitions */

smalltalk.alias(smalltalk.Array, "OrderedCollection");
smalltalk.alias(smalltalk.Date, "Time");
smalltalk.addPackage('Kernel-Objects', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.Object.comment="*Object is the root of the Smalltalk class system*. All classes in the system are subclasses of Object.\x0a\x0aObject provides default behavior common to all normal objects, such as: \x0a\x0a- access\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aObject has no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `Object >> instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aObjects understand equality  `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a  Overriding this message can be useful to implement proxies for example."
smalltalk.addMethod(
"__minus_gt",
smalltalk.method({
selector: "->",
category: 'converting',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Association || Association, "_key_value_", [self, anObject]);
    return $1;
},
args: ["anObject"],
source: "-> anObject\x0a\x09^Association key: self value: anObject",
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq_eq", [anObject]);
    return $1;
},
args: ["anObject"],
source: "= anObject\x0a\x09^self == anObject",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_identityHash", []), "__eq", [smalltalk.send(anObject, "_identityHash", [])]);
    return $1;
},
args: ["anObject"],
source: "== anObject\x0a\x09^self identityHash = anObject identityHash",
messageSends: ["=", "identityHash"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    var variables;
    variables = smalltalk.send(smalltalk.HashedCollection || HashedCollection, "_new", []);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSON", [])]);}]);
    return variables;
},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [:each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON].\x0a\x09^variables",
messageSends: ["new", "do:", "at:put:", "asJSON", "instVarAt:", "allInstanceVariableNames", "class"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJSONString",
smalltalk.method({
selector: "asJSONString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.JSON || JSON, "_stringify_", [smalltalk.send(self, "_asJSON", [])]);
    return $1;
},
args: [],
source: "asJSONString\x0a\x09^JSON stringify: self asJSON",
messageSends: ["stringify:", "asJSON"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
},
args: [],
source: "asJavascript\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_",
smalltalk.method({
selector: "basicAt:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return self[aString];
    return self;
},
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicAt_put_",
smalltalk.method({
selector: "basicAt:put:",
category: 'accessing',
fn: function (aString, anObject) {
    var self = this;
    return self[aString] = anObject;
    return self;
},
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicDelete_",
smalltalk.method({
selector: "basicDelete:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    delete self[aString];
    return aString;
    return self;
},
args: ["aString"],
source: "basicDelete: aString\x0a    <delete self[aString]; return aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_",
smalltalk.method({
selector: "basicPerform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
    return $1;
},
args: ["aSymbol"],
source: "basicPerform: aSymbol \x0a\x09^self basicPerform: aSymbol withArguments: #()",
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_basicPerform_withArguments_",
smalltalk.method({
selector: "basicPerform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    return self[aSymbol].apply(self, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "basicPerform: aSymbol withArguments: aCollection\x0a\x09<return self[aSymbol].apply(self, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_class",
smalltalk.method({
selector: "class",
category: 'accessing',
fn: function () {
    var self = this;
    return self.klass;
    return self;
},
args: [],
source: "class\x0a\x09<return self.klass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
    return $1;
},
args: [],
source: "copy\x0a\x09^self shallowCopy postCopy",
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i]._deepCopy();
        }
    }
    return copy;
    return self;
},
args: [],
source: "deepCopy\x0a\x09<    \x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_deprecatedAPI",
smalltalk.method({
selector: "deprecatedAPI",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(console, "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_asString", []), "__comma", [" is deprecated! (in "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.getThisContext(), "_home", []), "_home", []), "_asString", [])]), "__comma", [")"])]);
    return self;
},
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'",
messageSends: ["warn:", ",", "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.MessageNotUnderstood || MessageNotUnderstood, "_new", []);
    smalltalk.send($1, "_receiver_", [self]);
    smalltalk.send($1, "_message_", [aMessage]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
messageSends: ["receiver:", "new", "message:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'error handling',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.Error || Error, "_signal_", [aString]);
    return self;
},
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_halt",
smalltalk.method({
selector: "halt",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Halt encountered"]);
    return self;
},
args: [],
source: "halt\x0a\x09self error: 'Halt encountered'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function () {
    var self = this;
    var hash = self.identityHash;
    if (hash) {
        return hash;
    }
    hash = smalltalk.nextId();
    Object.defineProperty(self, "identityHash", {value: hash});
    return hash;
    return self;
},
args: [],
source: "identityHash\x0a\x09<\x0a\x09var hash=self.identityHash;\x0a\x09if (hash) return hash;\x0a\x09hash=smalltalk.nextId();\x0a\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09return hash;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_",
smalltalk.method({
selector: "instVarAt:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    return self["@" + varname];
    return self;
},
args: ["aSymbol"],
source: "instVarAt: aSymbol\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<return self['@'+varname]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_instVarAt_put_",
smalltalk.method({
selector: "instVarAt:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var varname;
    varname = smalltalk.send(aSymbol, "_asString", []);
    self["@" + varname] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "instVarAt: aSymbol put: anObject\x0a\x09| varname |\x0a\x09varname := aSymbol asString.\x0a\x09<self['@' + varname] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isClass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isKindOf_",
smalltalk.method({
selector: "isKindOf:",
category: 'testing',
fn: function (aClass) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_isMemberOf_", [aClass]);
    if (smalltalk.assert($2)) {
        $1 = true;
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);
    }
    return $1;
},
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^(self isMemberOf: aClass)\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: [self class inheritsFrom: aClass]",
messageSends: ["ifTrue:ifFalse:", "inheritsFrom:", "class", "isMemberOf:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMemberOf_",
smalltalk.method({
selector: "isMemberOf:",
category: 'testing',
fn: function (aClass) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
    return $1;
},
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^self class = aClass",
messageSends: ["=", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isMetaclass\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isNumber\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isParseFailure",
smalltalk.method({
selector: "isParseFailure",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isParseFailure\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isString\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isSymbol\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_log_block_",
smalltalk.method({
selector: "log:block:",
category: 'printing',
fn: function (aString, aBlock) {
    var self = this;
    var result;
    smalltalk.send(console, "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [function () {result = smalltalk.send(aBlock, "_value", []);return result;}]), "_printString", [])])]);
    return result;
},
args: ["aString", "aBlock"],
source: "log: aString block: aBlock\x0a\x0a\x09| result |\x0a\x09console log:  aString,  ' time: ', (Date millisecondsToRun: [result := aBlock value]) printString.\x0a\x09^result",
messageSends: ["log:", ",", "printString", "millisecondsToRun:", "value"],
referencedClasses: ["Date"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
    return $1;
},
args: [],
source: "notNil\x0a\x09^self isNil not",
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_",
smalltalk.method({
selector: "perform:",
category: 'message handling',
fn: function (aSymbol) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
    return $1;
},
args: ["aSymbol"],
source: "perform: aSymbol\x0a\x09^self perform: aSymbol withArguments: #()",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_perform_withArguments_",
smalltalk.method({
selector: "perform:withArguments:",
category: 'message handling',
fn: function (aSymbol, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(aSymbol, "_asSelector", []);
    return smalltalk.send(self, selector, aCollection);
    return self;
},
args: ["aSymbol", "aCollection"],
source: "perform: aSymbol withArguments: aCollection\x0a\x09| selector |\x0a\x09selector := aSymbol asSelector.\x0a\x09<return smalltalk.send(self, selector, aCollection)>",
messageSends: ["asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_postCopy",
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "postCopy",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function () {
    var self = this;
    console.log(self);
    return self;
},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
    return $1;
},
args: [],
source: "printString\x0a\x09^'a ', self class name",
messageSends: [",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_respondsTo_",
smalltalk.method({
selector: "respondsTo:",
category: 'testing',
fn: function (aSelector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_canUnderstand_", [aSelector]);
    return $1;
},
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^self class canUnderstand: aSelector",
messageSends: ["canUnderstand:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    var copy = self.klass._new();
    for (var i in self) {
        if (/^@.+/.test(i)) {
            copy[i] = self[i];
        }
    }
    return copy;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09    var copy = self.klass._new();\x0a\x09    for(var i in self) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09    copy[i] = self[i];\x0a\x09\x09}\x0a\x09    }\x0a\x09    return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_shouldNotImplement",
smalltalk.method({
selector: "shouldNotImplement",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
    return self;
},
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["Object not indexable"]);
    return self;
},
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream) {
    var self = this;
    smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
    return self;
},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09aStream nextPutAll: self printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_storeString",
smalltalk.method({
selector: "storeString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(self, "_storeOn_", [s]);}]);
    return $1;
},
args: [],
source: "storeString\x0a\x09\x22Answer a String representation of the receiver from which the receiver \x0a\x09can be reconstructed.\x22\x0a\x0a\x09^ String streamContents: [:s | self storeOn: s]",
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
"_subclassResponsibility",
smalltalk.method({
selector: "subclassResponsibility",
category: 'error handling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
    return self;
},
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_throw_",
smalltalk.method({
selector: "throw:",
category: 'error handling',
fn: function (anObject) {
    var self = this;
    throw anObject;
    return self;
},
args: ["anObject"],
source: "throw: anObject\x0a\x09< throw anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_try_catch_",
smalltalk.method({
selector: "try:catch:",
category: 'error handling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    try {
        result = aBlock();
    } catch (e) {
        result = anotherBlock(e);
    }
    return result;
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{result = aBlock()} catch(e) {result = anotherBlock(e)};\x0a\x09return result;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "value\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "yourself\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~_eq",
smalltalk.method({
selector: "~=",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
    return $1;
},
args: ["anObject"],
source: "~= anObject\x0a\x09^(self = anObject) = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_~~",
smalltalk.method({
selector: "~~",
category: 'comparing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
    return $1;
},
args: ["anObject"],
source: "~~ anObject\x0a\x09^(self == anObject) = false",
messageSends: ["=", "=="],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "initialize\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment="Boolean wraps the JavaScript `Boolean()` constructor. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0aBoolean defines the protocol for logic testing operations and conditional control structures for the logical values.\x0aBoolean instances are weither `true` or `false`."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return aBoolean;
    } else {
        return false;
    }
    return self;
},
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09    } else {\x0a\x09\x09return false;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Boolean(self == true) == aBoolean;
    return self;
},
args: ["aBoolean"],
source: "= aBoolean\x0a\x09aBoolean class = self class ifFalse: [^false].\x0a\x09<return Boolean(self == true) == aBoolean>",
messageSends: ["ifFalse:", "=", "class"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aBoolean) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [aBoolean]);
    return $1;
},
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^self = aBoolean",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_and_",
smalltalk.method({
selector: "and:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [aBlock, function () {return false;}]);
    return $1;
},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: aBlock\x0a\x09    ifFalse: [false]",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [function () {}, aBlock]);
    return $1;
},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, function () {}]);
    return $1;
},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'controlling',
fn: function (aBlock, anotherBlock) {
    var self = this;
    if (self == true) {
        return aBlock();
    } else {
        return anotherBlock();
    }
    return self;
},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return aBlock();\x0a\x09    } else {\x0a\x09\x09return anotherBlock();\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_not",
smalltalk.method({
selector: "not",
category: 'controlling',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [false]);
    return $1;
},
args: [],
source: "not\x0a\x09^self = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_or_",
smalltalk.method({
selector: "or:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "__eq", [true]);
    $1 = smalltalk.send($2, "_ifTrue_ifFalse_", [function () {return true;}, aBlock]);
    return $1;
},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^self = true\x0a\x09    ifTrue: [true]\x0a\x09    ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "printString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'controlling',
fn: function (aBoolean) {
    var self = this;
    if (self == true) {
        return true;
    } else {
        return aBoolean;
    }
    return self;
},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09    if(self == true) {\x0a\x09\x09return true;\x0a\x09    } else {\x0a\x09\x09return aBoolean;\x0a\x09    }\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment="The Date class is used to work with dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate wraps the `Date()` JavaScript constructor, and Smalltalk date objects are JavaScript date objects."
smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self + aDate;
    return self;
},
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aDate) {
    var self = this;
    return self - aDate;
    return self;
},
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self < aDate;
    return self;
},
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self <= aDate;
    return self;
},
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self > aDate;
    return self;
},
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aDate) {
    var self = this;
    return self >= aDate;
    return self;
},
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asDateString",
smalltalk.method({
selector: "asDateString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toDateString();
    return self;
},
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asLocaleString",
smalltalk.method({
selector: "asLocaleString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toLocaleString();
    return self;
},
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asMilliseconds",
smalltalk.method({
selector: "asMilliseconds",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_time", []);
    return $1;
},
args: [],
source: "asMilliseconds\x0a\x09^self time",
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asMilliseconds", []);
    return $1;
},
args: [],
source: "asNumber\x0a\x09^self asMilliseconds",
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "asString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_asTimeString",
smalltalk.method({
selector: "asTimeString",
category: 'converting',
fn: function () {
    var self = this;
    return self.toTimeString();
    return self;
},
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day",
smalltalk.method({
selector: "day",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_dayOfWeek", []);
    return $1;
},
args: [],
source: "day\x0a\x09^self dayOfWeek",
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_day_",
smalltalk.method({
selector: "day:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    smalltalk.send(self, "_dayOfWeek_", [aNumber]);
    return self;
},
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
messageSends: ["dayOfWeek:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth",
smalltalk.method({
selector: "dayOfMonth",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDate();
    return self;
},
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfMonth_",
smalltalk.method({
selector: "dayOfMonth:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setDate(aNumber);
    return self;
},
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek",
smalltalk.method({
selector: "dayOfWeek",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getDay() + 1;
    return self;
},
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_dayOfWeek_",
smalltalk.method({
selector: "dayOfWeek:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    return self.setDay(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours",
smalltalk.method({
selector: "hours",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getHours();
    return self;
},
args: [],
source: "hours\x0a\x09<return self.getHours()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_hours_",
smalltalk.method({
selector: "hours:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setHours(aNumber);
    return self;
},
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds",
smalltalk.method({
selector: "milliseconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMilliseconds();
    return self;
},
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_milliseconds_",
smalltalk.method({
selector: "milliseconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMilliseconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes",
smalltalk.method({
selector: "minutes",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMinutes();
    return self;
},
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_minutes_",
smalltalk.method({
selector: "minutes:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMinutes(aNumber);
    return self;
},
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month",
smalltalk.method({
selector: "month",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getMonth() + 1;
    return self;
},
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_month_",
smalltalk.method({
selector: "month:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setMonth(aNumber - 1);
    return self;
},
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_asString", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds",
smalltalk.method({
selector: "seconds",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getSeconds();
    return self;
},
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_seconds_",
smalltalk.method({
selector: "seconds:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setSeconds(aNumber);
    return self;
},
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time",
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getTime();
    return self;
},
args: [],
source: "time\x0a\x09<return self.getTime()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_time_",
smalltalk.method({
selector: "time:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setTime(aNumber);
    return self;
},
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year",
smalltalk.method({
selector: "year",
category: 'accessing',
fn: function () {
    var self = this;
    return self.getFullYear();
    return self;
},
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
"_year_",
smalltalk.method({
selector: "year:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self.setFullYear(aNumber);
    return self;
},
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
"_fromMilliseconds_",
smalltalk.method({
selector: "fromMilliseconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aNumber]);
    return $1;
},
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^self new: aNumber",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromSeconds_",
smalltalk.method({
selector: "fromSeconds:",
category: 'instance creation',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_fromMilliseconds_", [smalltalk.send(aNumber, "__star", [1000])]);
    return $1;
},
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^self fromMilliseconds: aNumber * 1000",
messageSends: ["fromMilliseconds:", "*"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new_", [aString]);
    return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^self new: aString",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_millisecondsToRun_",
smalltalk.method({
selector: "millisecondsToRun:",
category: 'instance creation',
fn: function (aBlock) {
    var self = this;
    var $1;
    var t;
    t = smalltalk.send(smalltalk.Date || Date, "_now", []);
    smalltalk.send(aBlock, "_value", []);
    $1 = smalltalk.send(smalltalk.send(smalltalk.Date || Date, "_now", []), "__minus", [t]);
    return $1;
},
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^Date now - t",
messageSends: ["now", "value", "-"],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anObject) {
    var self = this;
    return new Date(anObject);
    return self;
},
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_now",
smalltalk.method({
selector: "now",
category: 'instance creation',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_today", []);
    return $1;
},
args: [],
source: "now\x0a\x09^self today",
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
category: 'instance creation',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new", []);
    return $1;
},
args: [],
source: "today\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel-Objects');
smalltalk.JSObjectProxy.comment="JSObjectProxy handles sending messages to JavaScript object, therefore accessing JavaScript objects from Amber is transparent.\x0aJSOjbectProxy makes intensive use of `#doesNotUnderstand:`.\x0a\x0a## Examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a    window alert: 'hello world'.\x0a    window inspect.\x0a    (window jQuery: 'body') append: 'hello world'\x0a\x0aSmalltalk messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown. \x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes  `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`."
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    return self['@jsObject'][attr];
    return self;
},
args: ["aSymbol"],
source: "at: aSymbol\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<return self['@jsObject'][attr]>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aSymbol, anObject) {
    var self = this;
    var attr;
    attr = smalltalk.send(aSymbol, "_asString", []);
    self['@jsObject'][attr] = anObject;
    return self;
},
args: ["aSymbol", "anObject"],
source: "at: aSymbol put: anObject\x0a\x09| attr |\x0a\x09attr := aSymbol asString.\x0a\x09<self['@jsObject'][attr] = anObject>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'proxy',
fn: function (aMessage) {
    var self = this;
    var obj;
    var selector;
    var jsSelector;
    var arguments;
    obj = smalltalk.send(self, "_jsObject", []);
    selector = smalltalk.send(aMessage, "_selector", []);
    jsSelector = smalltalk.send(selector, "_asJavaScriptSelector", []);
    arguments = smalltalk.send(aMessage, "_arguments", []);
    if (obj[jsSelector] != undefined) {
        return smalltalk.send(obj, jsSelector, arguments);
    }
    smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| obj selector jsSelector arguments |\x0a\x09obj := self jsObject.\x0a\x09selector := aMessage selector.\x0a\x09jsSelector := selector asJavaScriptSelector.\x0a\x09arguments := aMessage arguments.\x0a\x09<if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)}>.\x0a\x09super doesNotUnderstand: aMessage",
messageSends: ["jsObject", "selector", "asJavaScriptSelector", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
category: 'proxy',
fn: function (anInspector) {
    var self = this;
    var variables;
    variables = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(variables, "_at_put_", ["#self", smalltalk.send(self, "_jsObject", [])]);
    smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
    for (var i in self['@jsObject']) {
        variables._at_put_(i, self['@jsObject'][i]);
    }
    smalltalk.send(anInspector, "_setVariables_", [variables]);
    return self;
},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self jsObject.\x0a\x09anInspector setLabel: self printString.\x0a\x09<for(var i in self['@jsObject']) {\x0a\x09\x09variables._at_put_(i, self['@jsObject'][i]);\x0a\x09}>.\x0a\x09anInspector setVariables: variables",
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject",
smalltalk.method({
selector: "jsObject",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@jsObject'];
},
args: [],
source: "jsObject\x0a\x09^jsObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_jsObject_",
smalltalk.method({
selector: "jsObject:",
category: 'accessing',
fn: function (aJSObject) {
    var self = this;
    self['@jsObject'] = aJSObject;
    return self;
},
args: ["aJSObject"],
source: "jsObject: aJSObject\x0a\x09jsObject := aJSObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'proxy',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self jsObject toString",
messageSends: ["toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aJSObject) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_jsObject_", [aJSObject]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09^self new\x0a\x09\x09jsObject: aJSObject;\x0a\x09\x09yourself",
messageSends: ["jsObject:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Number.comment="Number holds the most general methods for dealing with numbers.  \x0aNumber is directly mapped to JavaScript Number.\x0a\x0aMost arithmetic methods like `#+` `#/` `#-` `#max:` are directly inlined into javascript. \x0a\x0a##Enumerating\x0aA Number can be used to evaluate a Block a fixed number of times:\x0a\x0a\x095 timesRepeat: [Transcript show: 'This will be printed 5 times'; cr].\x0a\x09\x0a\x091 to: 5 do: [:aNumber| Transcript show: aNumber asString; cr].\x0a\x09\x0a\x091 to: 10 by: 2 do: [:aNumber| Transcript show: aNumber asString; cr]."
smalltalk.addMethod(
"_&",
smalltalk.method({
selector: "&",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return self & aNumber;
    return self;
},
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self * aNumber;
    return self;
},
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self + aNumber;
    return self;
},
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self - aNumber;
    return self;
},
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self / aNumber;
    return self;
},
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self < aNumber;
    return self;
},
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self <= aNumber;
    return self;
},
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aNumber, "_isNumber", []);
    if (!smalltalk.assert($1)) {
        return false;
    }
    return Number(self) == aNumber;
    return self;
},
args: ["aNumber"],
source: "= aNumber\x0a\x09aNumber isNumber ifFalse: [^false]. \x0a\x09<return Number(self) == aNumber>",
messageSends: ["ifFalse:", "isNumber"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self > aNumber;
    return self;
},
args: ["aNumber"],
source: "> aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >> aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aNumber) {
    var self = this;
    return self >= aNumber;
    return self;
},
args: ["aNumber"],
source: ">= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >>= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"__at",
smalltalk.method({
selector: "@",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, aNumber]);
    return $1;
},
args: ["aNumber"],
source: "@ aNumber\x0a\x09^Point x: self y: aNumber",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_\x5c\x5c",
smalltalk.method({
selector: "\x5c\x5c",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return self % aNumber;
    return self;
},
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<return self % aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_abs",
smalltalk.method({
selector: "abs",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = Math.abs(self);
    return $1;
},
args: [],
source: "abs\x0a\x09^ <Math.abs(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [")"]);
    return $1;
},
args: [],
source: "asJavascript\x0a\x09^'(', self printString, ')'",
messageSends: [",", "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [self, self]);
    return $1;
},
args: [],
source: "asPoint\x0a\x09^Point x: self y: self",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_printString", []);
    return $1;
},
args: [],
source: "asString\x0a\x09^self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Random || Random, "_new", []), "_next", []), "__star", [self]), "_truncated", []), "__plus", [1]);
    return $1;
},
args: [],
source: "atRandom\x0a    ^(Random new next * self) truncated + 1",
messageSends: ["+", "truncated", "*", "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
category: 'timeouts/intervals',
fn: function () {
    var self = this;
    clearInterval(Number(self));
    return self;
},
args: [],
source: "clearInterval\x0a\x09<clearInterval(Number(self))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
category: 'timeouts/intervals',
fn: function () {
    var self = this;
    clearTimeout(Number(self));
    return self;
},
args: [],
source: "clearTimeout\x0a\x09<clearTimeout(Number(self))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_copy",
smalltalk.method({
selector: "copy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "copy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_copy", []);
    return $1;
},
args: [],
source: "deepCopy\x0a\x09^self copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_even",
smalltalk.method({
selector: "even",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__eq", [smalltalk.send(self, "_\\\\", [2])]);
    return $1;
},
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c\x5c\x5c"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_identityHash",
smalltalk.method({
selector: "identityHash",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_asString", []), "__comma", ["n"]);
    return $1;
},
args: [],
source: "identityHash\x0a\x09^self asString, 'n'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_isNumber",
smalltalk.method({
selector: "isNumber",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isNumber\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_isZero",
smalltalk.method({
selector: "isZero",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__eq", [0]);
    return $1;
},
args: [],
source: "isZero\x0a\x09^self = 0",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_max_",
smalltalk.method({
selector: "max:",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return Math.max(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "max: aNumber\x0a\x09<return Math.max(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_min_",
smalltalk.method({
selector: "min:",
category: 'arithmetic',
fn: function (aNumber) {
    var self = this;
    return Math.min(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "min: aNumber\x0a\x09<return Math.min(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_negated",
smalltalk.method({
selector: "negated",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(0, "__minus", [self]);
    return $1;
},
args: [],
source: "negated\x0a\x09^0 - self",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_negative",
smalltalk.method({
selector: "negative",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__lt", [0]);
    return $1;
},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
messageSends: ["<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_odd",
smalltalk.method({
selector: "odd",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
    return $1;
},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_positive",
smalltalk.method({
selector: "positive",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__gt_eq", [0]);
    return $1;
},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_printShowingDecimalPlaces_",
smalltalk.method({
selector: "printShowingDecimalPlaces:",
category: 'printing',
fn: function (placesDesired) {
    var self = this;
    return self.toFixed(placesDesired);
    return self;
},
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<return self.toFixed(placesDesired)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return String(self);
    return self;
},
args: [],
source: "printString\x0a\x09<return String(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_rounded",
smalltalk.method({
selector: "rounded",
category: 'converting',
fn: function () {
    var self = this;
    return Math.round(self);
    return self;
},
args: [],
source: "rounded\x0a\x09<return Math.round(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_sqrt",
smalltalk.method({
selector: "sqrt",
category: 'arithmetic',
fn: function () {
    var self = this;
    return Math.sqrt(self);
    return self;
},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_squared",
smalltalk.method({
selector: "squared",
category: 'arithmetic',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "__star", [self]);
    return $1;
},
args: [],
source: "squared\x0a\x09^self * self",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_timesRepeat_",
smalltalk.method({
selector: "timesRepeat:",
category: 'enumerating',
fn: function (aBlock) {
    var self = this;
    var integer;
    var count;
    integer = smalltalk.send(self, "_truncated", []);
    count = 1;
    smalltalk.send(function () {return smalltalk.send(count, "__gt", [self]);}, "_whileFalse_", [function () {smalltalk.send(aBlock, "_value", []);count = smalltalk.send(count, "__plus", [1]);return count;}]);
    return self;
},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| integer count |\x0a\x09integer := self truncated.\x0a\x09count := 1.\x0a\x09[count > self] whileFalse: [\x0a\x09    aBlock value.\x0a\x09    count := count + 1]",
messageSends: ["truncated", "whileFalse:", "value", "+", ">"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_",
smalltalk.method({
selector: "to:",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    var array;
    var first;
    var last;
    var count;
    first = smalltalk.send(self, "_truncated", []);
    last = smalltalk.send(smalltalk.send(aNumber, "_truncated", []), "__plus", [1]);
    count = 1;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(last, "__minus", [first]), "_timesRepeat_", [function () {smalltalk.send(array, "_at_put_", [count, first]);count = smalltalk.send(count, "__plus", [1]);count;first = smalltalk.send(first, "__plus", [1]);return first;}]);
    return array;
},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09    array at: count put: first.\x0a\x09    count := count + 1.\x0a\x09    first := first + 1].\x0a\x09^array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "at:put:", "-"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_",
smalltalk.method({
selector: "to:by:",
category: 'converting',
fn: function (stop, step) {
    var self = this;
    var $1, $2;
    var array;
    var value;
    var pos;
    value = self;
    array = smalltalk.send(smalltalk.Array || Array, "_new", []);
    pos = 1;
    $1 = smalltalk.send(step, "__eq", [0]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", ["step must be non-zero"]);
    }
    $2 = smalltalk.send(step, "__lt", [0]);
    if (smalltalk.assert($2)) {
        smalltalk.send(function () {return smalltalk.send(value, "__gt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = smalltalk.send(pos, "__plus", [1]);pos;value = smalltalk.send(value, "__plus", [step]);return value;}]);
    } else {
        smalltalk.send(function () {return smalltalk.send(value, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(array, "_at_put_", [pos, value]);pos = smalltalk.send(pos, "__plus", [1]);pos;value = smalltalk.send(value, "__plus", [step]);return value;}]);
    }
    return array;
},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09    \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09array at: pos put: value.\x0a\x09  \x09\x09\x09pos := pos + 1.\x0a\x09    \x09\x09\x09value := value + step]].\x0a\x09^array",
messageSends: ["new", "ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "at:put:", "+", ">=", "<=", "<"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_by_do_",
smalltalk.method({
selector: "to:by:do:",
category: 'enumerating',
fn: function (stop, step, aBlock) {
    var self = this;
    var $1, $2;
    var value;
    value = self;
    $1 = smalltalk.send(step, "__eq", [0]);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", ["step must be non-zero"]);
    }
    $2 = smalltalk.send(step, "__lt", [0]);
    if (smalltalk.assert($2)) {
        smalltalk.send(function () {return smalltalk.send(value, "__gt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [value]);value = smalltalk.send(value, "__plus", [step]);return value;}]);
    } else {
        smalltalk.send(function () {return smalltalk.send(value, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [value]);value = smalltalk.send(value, "__plus", [step]);return value;}]);
    }
    return self;
},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [self error: 'step must be non-zero'].\x0a\x09step < 0\x0a\x09\x09ifTrue: [[ value >= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]\x0a\x09\x09ifFalse: [[ value <= stop ] whileTrue: [\x0a\x09    \x09\x09\x09aBlock value: value.\x0a\x09    \x09\x09\x09value := value + step]]",
messageSends: ["ifTrue:", "error:", "=", "ifTrue:ifFalse:", "whileTrue:", "value:", "+", ">=", "<=", "<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_to_do_",
smalltalk.method({
selector: "to:do:",
category: 'enumerating',
fn: function (stop, aBlock) {
    var self = this;
    var nextValue;
    nextValue = self;
    smalltalk.send(function () {return smalltalk.send(nextValue, "__lt_eq", [stop]);}, "_whileTrue_", [function () {smalltalk.send(aBlock, "_value_", [nextValue]);nextValue = smalltalk.send(nextValue, "__plus", [1]);return nextValue;}]);
    return self;
},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[nextValue <= stop]\x0a\x09\x09whileTrue: \x0a\x09\x09\x09[aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1]",
messageSends: ["whileTrue:", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_truncated",
smalltalk.method({
selector: "truncated",
category: 'converting',
fn: function () {
    var self = this;
    var $1;
    var result;
    $1 = smalltalk.send(self, "__gt_eq", [0]);
    if (smalltalk.assert($1)) {
        result = Math.floor(self);
    } else {
        result = Math.floor(self * -1) * -1;
    }
    return result;
},
args: [],
source: "truncated\x0a|result|\x0a\x0a    self >= 0 \x0a        ifTrue: [<result = Math.floor(self);>]\x0a        ifFalse: [<result = (Math.floor(self * (-1)) * (-1));>].\x0a\x0a    ^ result",
messageSends: ["ifTrue:ifFalse:", ">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_|",
smalltalk.method({
selector: "|",
category: 'converting',
fn: function (aNumber) {
    var self = this;
    return self | aNumber;
    return self;
},
args: ["aNumber"],
source: "| aNumber\x0a\x09<return self | aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
"_pi",
smalltalk.method({
selector: "pi",
category: 'instance creation',
fn: function () {
    var self = this;
    return Math.PI;
    return self;
},
args: [],
source: "pi\x0a\x09<return Math.PI>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('Organizer', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.addMethod(
"_addElement_",
smalltalk.method({
selector: "addElement:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self.addElement(anObject);
    return self;
},
args: ["anObject"],
source: "addElement: anObject\x0a\x09<self.addElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_basicAt_", ["elements"]), "_copy", []);
    return $1;
},
args: [],
source: "elements\x0a\x09^ (self basicAt: 'elements') copy",
messageSends: ["copy", "basicAt:"],
referencedClasses: []
}),
smalltalk.Organizer);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    self.removeElement(anObject);
    return self;
},
args: ["anObject"],
source: "removeElement: anObject\x0a\x09<self.removeElement(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Organizer);



smalltalk.addClass('Package', smalltalk.Object, ['commitPathJs', 'commitPathSt'], 'Kernel-Objects');
smalltalk.Package.comment="A Package is similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aA Package has a name, an Array of \x22requires\x22, a comment and a Dictionary with other optional key value attributes. A Package can also be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name:\x0a\x0a\x09Smalltalk current packageAt: 'Kernel'\x0a\x0a...but you can also use:\x0a\x0a\x09Package named: 'Kernel'\x0a\x0aA Package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a Package supports \x22class extensions\x22 so a Package\x0acan define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows. This can easily be seen in for example class\x0aString where the method category \x22*IDE\x22 defines #inspectOn: which thus is a method belonging to the IDE package.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package fetch: 'Additional-Examples'"
smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_organization", []), "_elements", []);
    return $1;
},
args: [],
source: "classes\x0a\x09^ self organization elements",
messageSends: ["elements", "organization"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs",
smalltalk.method({
selector: "commitPathJs",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@commitPathJs']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathJs", []);
    } else {
        $1 = self['@commitPathJs'];
    }
    return $1;
},
args: [],
source: "commitPathJs\x0a\x09^ commitPathJs ifNil: [self class defaultCommitPathJs]",
messageSends: ["ifNil:", "defaultCommitPathJs", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathJs_",
smalltalk.method({
selector: "commitPathJs:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@commitPathJs'] = aString;
    return self;
},
args: ["aString"],
source: "commitPathJs: aString\x0a\x09commitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt",
smalltalk.method({
selector: "commitPathSt",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@commitPathSt']) == nil ||
        $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_defaultCommitPathSt", []);
    } else {
        $1 = self['@commitPathSt'];
    }
    return $1;
},
args: [],
source: "commitPathSt\x0a\x09^ commitPathSt ifNil: [self class defaultCommitPathSt]",
messageSends: ["ifNil:", "defaultCommitPathSt", "class"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_commitPathSt_",
smalltalk.method({
selector: "commitPathSt:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@commitPathSt'] = aString;
    return self;
},
args: ["aString"],
source: "commitPathSt: aString\x0a\x09commitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies",
smalltalk.method({
selector: "dependencies",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", function () {return [];}]);
    return $1;
},
args: [],
source: "dependencies\x0a\x09^self propertyAt: 'dependencies' ifAbsent: [#()]",
messageSends: ["propertyAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_dependencies_",
smalltalk.method({
selector: "dependencies:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
    return $1;
},
args: ["anArray"],
source: "dependencies: anArray\x0a\x09^self propertyAt: 'dependencies' put: anArray",
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties",
smalltalk.method({
selector: "jsProperties",
category: 'private',
fn: function () {
    var self = this;
    return self.properties;
    return self;
},
args: [],
source: "jsProperties\x0a\x09<return self.properties>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_jsProperties_",
smalltalk.method({
selector: "jsProperties:",
category: 'private',
fn: function (aJSObject) {
    var self = this;
    return self.properties = aJSObject;
    return self;
},
args: ["aJSObject"],
source: "jsProperties: aJSObject\x0a\x09<return self.properties = aJSObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
    var self = this;
    return self.pkgName;
    return self;
},
args: [],
source: "name\x0a\x09<return self.pkgName>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self.pkgName = aString;
    return self;
},
args: ["aString"],
source: "name: aString\x0a\x09<self.pkgName = aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_organization",
smalltalk.method({
selector: "organization",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["organization"]);
    return $1;
},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
},
args: [],
source: "printString\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_readJSObject_", [smalltalk.send(self, "_basicAt_", ["properties"])]);
    return $1;
},
args: [],
source: "properties\x0a\x09^Smalltalk current readJSObject: (self basicAt: 'properties')",
messageSends: ["readJSObject:", "basicAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
"_properties_",
smalltalk.method({
selector: "properties:",
category: 'accessing',
fn: function (aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return self.properties = object;
    return self;
},
args: ["aDict"],
source: "properties: aDict\x0a\x09\x22We store it as a javascript object.\x22\x0a\x09\x0a\x09| object |\x0a\x09<object = {};>.\x0a\x09aDict keysAndValuesDo: [:key :value |\x0a\x09\x09<object[key] = value>.\x0a\x09].\x0a\x09<return self.properties = object>",
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertiesAsJSON",
smalltalk.method({
selector: "propertiesAsJSON",
category: 'private',
fn: function () {
    var self = this;
    return JSON.stringify(self.properties);
    return self;
},
args: [],
source: "propertiesAsJSON\x0a\x09<return JSON.stringify(self.properties)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_",
smalltalk.method({
selector: "propertyAt:",
category: 'properties',
fn: function (key) {
    var self = this;
    return self.properties[key];
    return self;
},
args: ["key"],
source: "propertyAt: key\x0a\x0a\x09<return self.properties[key]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_ifAbsent_",
smalltalk.method({
selector: "propertyAt:ifAbsent:",
category: 'properties',
fn: function (key, block) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_propertyAt_", [key]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = smalltalk.send(block, "_value", []);
    } else {
        $1 = $2;
    }
    return $1;
},
args: ["key", "block"],
source: "propertyAt: key ifAbsent: block\x0a\x0a\x09^(self propertyAt: key) ifNil: [block value]",
messageSends: ["ifNil:", "value", "propertyAt:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_propertyAt_put_",
smalltalk.method({
selector: "propertyAt:put:",
category: 'properties',
fn: function (key, value) {
    var self = this;
    return self.properties[key] = value;
    return self;
},
args: ["key", "value"],
source: "propertyAt: key put: value\x0a\x0a\x09<return self.properties[key] = value>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
"_sortedClasses",
smalltalk.method({
selector: "sortedClasses",
category: 'classes',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_class", []), "_sortedClasses_", [smalltalk.send(self, "_classes", [])]);
    return $1;
},
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^self class sortedClasses: self classes",
messageSends: ["sortedClasses:", "classes", "class"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.Package.klass.iVarNames = ['defaultCommitPathJs','defaultCommitPathSt'];
smalltalk.addMethod(
"_commitToLocalStorage_",
smalltalk.method({
selector: "commitToLocalStorage:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    var key;
    var sourceCode;
    key = smalltalk.send("smalltalk.packages.", "__comma", [aPackageName]);
    sourceCode = smalltalk.send(smalltalk.send(smalltalk.Exporter || Exporter, "_new", []), "_exportPackage_", [aPackageName]);
    localStorage[key] = escape(sourceCode);
    return self;
},
args: ["aPackageName"],
source: "commitToLocalStorage: aPackageName\x0a\x09| key sourceCode |\x0a\x09key := 'smalltalk.packages.' , aPackageName.\x0a\x09sourceCode := Exporter new exportPackage: aPackageName.\x0a\x09<localStorage[key] = escape(sourceCode)>",
messageSends: [",", "exportPackage:", "new"],
referencedClasses: ["Exporter"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs",
smalltalk.method({
selector: "defaultCommitPathJs",
category: 'commit paths',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@defaultCommitPathJs']) == nil ||
        $receiver == undefined) {
        self['@defaultCommitPathJs'] = "js";
        $1 = self['@defaultCommitPathJs'];
    } else {
        $1 = self['@defaultCommitPathJs'];
    }
    return $1;
},
args: [],
source: "defaultCommitPathJs\x0a\x09^ defaultCommitPathJs ifNil: [ defaultCommitPathJs := 'js']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathJs_",
smalltalk.method({
selector: "defaultCommitPathJs:",
category: 'commit paths',
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathJs'] = aString;
    return self;
},
args: ["aString"],
source: "defaultCommitPathJs: aString\x0a\x09defaultCommitPathJs := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt",
smalltalk.method({
selector: "defaultCommitPathSt",
category: 'commit paths',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@defaultCommitPathSt']) == nil ||
        $receiver == undefined) {
        self['@defaultCommitPathSt'] = "st";
        $1 = self['@defaultCommitPathSt'];
    } else {
        $1 = self['@defaultCommitPathSt'];
    }
    return $1;
},
args: [],
source: "defaultCommitPathSt\x0a\x09^ defaultCommitPathSt ifNil: [ defaultCommitPathSt := 'st']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_defaultCommitPathSt_",
smalltalk.method({
selector: "defaultCommitPathSt:",
category: 'commit paths',
fn: function (aString) {
    var self = this;
    self['@defaultCommitPathSt'] = aString;
    return self;
},
args: ["aString"],
source: "defaultCommitPathSt: aString\x0a\x09defaultCommitPathSt := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_",
smalltalk.method({
selector: "fetch:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    smalltalk.send(self, "_fetch_prefix_", [aPackageName, smalltalk.send(smalltalk.send(self, "_defaultCommitPathJs", []), "__comma", ["/"])]);
    return self;
},
args: ["aPackageName"],
source: "fetch: aPackageName\x0a\x09self fetch: aPackageName prefix: self defaultCommitPathJs, '/'",
messageSends: ["fetch:prefix:", ",", "defaultCommitPathJs"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_fetch_prefix_",
smalltalk.method({
selector: "fetch:prefix:",
category: 'loading-storing',
fn: function (aPackageName, aPrefix) {
    var self = this;
    smalltalk.send(jQuery, "_getScript_onSuccess_", [smalltalk.send(smalltalk.send(aPrefix, "__comma", [aPackageName]), "__comma", [".js"]), function () {return smalltalk.send(smalltalk.Package || Package, "_init_", [aPackageName]);}]);
    return self;
},
args: ["aPackageName", "aPrefix"],
source: "fetch: aPackageName prefix: aPrefix\x0a\x09jQuery getScript: (aPrefix , aPackageName , '.js') onSuccess: [ Package init: aPackageName ]",
messageSends: ["getScript:onSuccess:", ",", "init:"],
referencedClasses: ["Package"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_init_",
smalltalk.method({
selector: "init:",
category: 'loading-storing',
fn: function (aPackageName) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(smalltalk, "_classes", []), "_select_", [function (each) {return each.pkg.pkgName == aPackageName;}]);
    smalltalk.send($1, "_do_", [function (each) {return smalltalk.init(each);}]);
    $2 = smalltalk.send($1, "_do_", [function (each) {return smalltalk.send(each, "_initialize", []);}]);
    return self;
},
args: ["aPackageName"],
source: "init: aPackageName\x0a\x09(smalltalk classes select: [ :each | <each.pkg.pkgName == aPackageName> ])\x0a\x09\x09do: [ :each | <smalltalk.init(each)> ];\x0a\x09\x09do: [ :each | each initialize ]",
messageSends: ["do:", "select:", "classes", "initialize"],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_",
smalltalk.method({
selector: "named:",
category: 'not yet classified',
fn: function (aPackageName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_", [aPackageName]);
    return $1;
},
args: ["aPackageName"],
source: "named: aPackageName\x0a\x0a\x09^Smalltalk current packageAt: aPackageName",
messageSends: ["packageAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_named_ifAbsent_",
smalltalk.method({
selector: "named:ifAbsent:",
category: 'not yet classified',
fn: function (aPackageName, aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
    return $1;
},
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x0a\x09^Smalltalk current packageAt: aPackageName ifAbsent: aBlock",
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_resetCommitPaths",
smalltalk.method({
selector: "resetCommitPaths",
category: 'commit paths',
fn: function () {
    var self = this;
    self['@defaultCommitPathJs'] = nil;
    self['@defaultCommitPathSt'] = nil;
    return self;
},
args: [],
source: "resetCommitPaths\x0a        defaultCommitPathJs := nil.\x0a        defaultCommitPathSt := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Package.klass);

smalltalk.addMethod(
"_sortedClasses_",
smalltalk.method({
selector: "sortedClasses:",
category: 'sorting',
fn: function (classes) {
    var self = this;
    var $1;
    var children;
    var others;
    var nodes;
    var expandedClasses;
    children = [];
    others = [];
    smalltalk.send(classes, "_do_", [function (each) {$1 = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])]);if (smalltalk.assert($1)) {return smalltalk.send(others, "_add_", [each]);} else {return smalltalk.send(children, "_add_", [each]);}}]);
    nodes = smalltalk.send(children, "_collect_", [function (each) {return smalltalk.send(smalltalk.ClassSorterNode || ClassSorterNode, "_on_classes_level_", [each, others, 0]);}]);
    nodes = smalltalk.send(nodes, "_sorted_", [function (a, b) {return smalltalk.send(smalltalk.send(smalltalk.send(a, "_theClass", []), "_name", []), "__lt_eq", [smalltalk.send(smalltalk.send(b, "_theClass", []), "_name", [])]);}]);
    expandedClasses = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(nodes, "_do_", [function (aNode) {return smalltalk.send(aNode, "_traverseClassesWith_", [expandedClasses]);}]);
    return expandedClasses;
},
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [:each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [children add: each]\x0a\x09\x09\x09ifTrue: [others add: each]].\x0a\x09nodes := children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0].\x0a\x09nodes := nodes sorted: [:a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses].\x0a\x09^expandedClasses",
messageSends: ["do:", "ifFalse:ifTrue:", "add:", "includes:", "superclass", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"],
referencedClasses: ["ClassSorterNode", "Array"]
}),
smalltalk.Package.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.Point.comment="A `Point` represents an x-y pair of numbers usually designating a geometric coordinate.\x0aPoints are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a Point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22\x0a\x0aAmber does not have much behavior in this class out-of-the-box."
smalltalk.addMethod(
"__star",
smalltalk.method({
selector: "*",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "* aPoint\x0a\x09^Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
messageSends: ["x:y:", "*", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__plus",
smalltalk.method({
selector: "+",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "+ aPoint\x0a\x09^Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
messageSends: ["x:y:", "+", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__minus",
smalltalk.method({
selector: "-",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "- aPoint\x0a\x09^Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
messageSends: ["x:y:", "-", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__slash",
smalltalk.method({
selector: "/",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Point || Point, "_x_y_", [smalltalk.send(smalltalk.send(self, "_x", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), smalltalk.send(smalltalk.send(self, "_y", []), "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
    return $1;
},
args: ["aPoint"],
source: "/ aPoint\x0a\x09^Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
messageSends: ["x:y:", "/", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'arithmetic',
fn: function (aPoint) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);}]);
    return $1;
},
args: ["aPoint"],
source: "= aPoint\x0a\x09^aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y)]",
messageSends: ["and:", "&", "=", "y", "x", "class"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_asPoint",
smalltalk.method({
selector: "asPoint",
category: 'converting',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "asPoint\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (stream) {smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@x'], "_printString", []), "__comma", ["@"])]);$2 = smalltalk.send(smalltalk.send(self['@y'], "_notNil", []), "_and_", [function () {return smalltalk.send(self['@y'], "_negative", []);}]);if (smalltalk.assert($2)) {smalltalk.send(stream, "_space", []);}return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self['@y'], "_printString", [])]);}]);
    return $1;
},
args: [],
source: "printString\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09^String streamContents: [:stream |\x0a\x09\x09stream nextPutAll: x printString, '@'.\x0a\x09\x09(y notNil and: [y negative])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09\x09stream space].\x0a\x09\x09stream nextPutAll: y printString]",
messageSends: ["streamContents:", "nextPutAll:", ",", "printString", "ifTrue:", "space", "and:", "negative", "notNil"],
referencedClasses: ["String"]
}),
smalltalk.Point);

smalltalk.addMethod(
"_translateBy_",
smalltalk.method({
selector: "translateBy:",
category: 'transforming',
fn: function (delta) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(delta, "_x", []), "__plus", [self['@x']]), "__at", [smalltalk.send(smalltalk.send(delta, "_y", []), "__plus", [self['@y']])]);
    return $1;
},
args: ["delta"],
source: "translateBy: delta \x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^(delta x + x) @ (delta y + y)",
messageSends: ["@", "+", "y", "x"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@x'];
},
args: [],
source: "x\x0a\x09^x",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@x'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@y'];
},
args: [],
source: "y\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@y'] = aNumber;
    return self;
},
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
"_x_y_",
smalltalk.method({
selector: "x:y:",
category: 'instance creation',
fn: function (aNumber, anotherNumber) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_x_", [aNumber]);
    smalltalk.send($2, "_y_", [anotherNumber]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
messageSends: ["x:", "new", "y:", "yourself"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Random.comment="`Random` is a random number generator and is implemented as a trivial wrapper around javascript `Math.random()` and is used like this:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0a...and if you want a random number in a specific interval this also works:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0a...but be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0a...or perhaps a letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`."
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function () {
    var self = this;
    return Math.random();
    return self;
},
args: [],
source: "next\x0a\x09<return Math.random()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (anInteger) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(1, "_to_", [anInteger]), "_collect_", [function (each) {return smalltalk.send(self, "_next", []);}]);
    return $1;
},
args: ["anInteger"],
source: "next: anInteger\x0a    ^(1 to: anInteger) collect: [:each | self next]",
messageSends: ["collect:", "next", "to:"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Smalltalk.comment="Smalltalk has only one instance, accessed with `Smalltalk current`. \x0aIt represents the global JavaScript variable `smalltalk` declared in `js/boot.js`.\x0a\x0aThe `smalltalk` object holds all class and packages defined in the system.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#at:` answers a specific class of `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific class of `nil`\x0a\x0a__note:__ classes and packages are accessed using strings, not symbols\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Smalltalk source code. \x0aIt requires the `Compiler` package and the `js/parser.js` parser file in order to work"
smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aSymbol) {
    var self = this;
    return self[aSymbol._asString()];
    return self;
},
args: ["aSymbol"],
source: "at: aSymbol\x0a\x09<return self[aSymbol._asString()]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_basicParse_",
smalltalk.method({
selector: "basicParse:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    return smalltalk.parser.parse(aString);
    return self;
},
args: ["aString"],
source: "basicParse: aString\x0a\x09<return smalltalk.parser.parse(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_classes",
smalltalk.method({
selector: "classes",
category: 'classes',
fn: function () {
    var self = this;
    return self.classes();
    return self;
},
args: [],
source: "classes\x0a\x09<return self.classes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_",
smalltalk.method({
selector: "createPackage:",
category: 'private',
fn: function (packageName) {
    var self = this;
    return smalltalk.addPackage(packageName, nil);
    return self;
},
args: ["packageName"],
source: "createPackage: packageName\x0a\x09\x22Create and bind a new package with given name and return it.\x22\x0a\x0a      <return smalltalk.addPackage(packageName, nil)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_createPackage_properties_",
smalltalk.method({
selector: "createPackage:properties:",
category: 'private',
fn: function (packageName, aDict) {
    var self = this;
    var object;
    object = {};
    smalltalk.send(aDict, "_keysAndValuesDo_", [function (key, value) {return object[key] = value;}]);
    return smalltalk.addPackage(packageName, object);
    return self;
},
args: ["packageName", "aDict"],
source: "createPackage: packageName properties: aDict\x0a\x09\x22Create and bind a new package with given name and return it.\x22\x0a\x0a\x09| object |\x0a\x09<object = {};>.\x0a\x09aDict keysAndValuesDo: [:key :value |\x0a\x09\x09<object[key] = value>.\x0a\x09].\x0a       <return smalltalk.addPackage(packageName, object)>",
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deleteClass_",
smalltalk.method({
selector: "deleteClass:",
category: 'private',
fn: function (aClass) {
    var self = this;
    self.removeClass(aClass);
    return self;
},
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a    \x0a\x09<self.removeClass(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_deletePackage_",
smalltalk.method({
selector: "deletePackage:",
category: 'private',
fn: function (packageName) {
    var self = this;
    delete smalltalk.packages[packageName];
    return self;
},
args: ["packageName"],
source: "deletePackage: packageName\x0a\x09\x22Deletes a package by deleting its binding, but does not check if it contains classes etc.\x0a\x09To remove a package, use #removePackage instead.\x22\x0a\x0a       <delete smalltalk.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_",
smalltalk.method({
selector: "packageAt:",
category: 'packages',
fn: function (packageName) {
    var self = this;
    return self.packages[packageName];
    return self;
},
args: ["packageName"],
source: "packageAt: packageName\x0a       <return self.packages[packageName]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packageAt_ifAbsent_",
smalltalk.method({
selector: "packageAt:ifAbsent:",
category: 'packages',
fn: function (packageName, aBlock) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_packageAt_", [packageName]);
    $1 = smalltalk.send($2, "_ifNil_", [aBlock]);
    return $1;
},
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a       ^(self packageAt: packageName) ifNil: aBlock",
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'packages',
fn: function () {
    var self = this;
    return self.packages.all();
    return self;
},
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09<return self.packages.all()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    var result;
    smalltalk.send(self, "_try_catch_", [function () {result = smalltalk.send(self, "_basicParse_", [aString]);return result;}, function (ex) {return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);}]);
    return result;
},
args: ["aString"],
source: "parse: aString\x0a\x09| result | \x0a\x09self try: [result := self basicParse: aString] catch: [:ex | (self parseError: ex parsing: aString) signal].\x0a\x09^result",
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_parseError_parsing_",
smalltalk.method({
selector: "parseError:parsing:",
category: 'accessing',
fn: function (anException, aString) {
    var self = this;
    var $1;
    var row;
    var col;
    var message;
    var lines;
    var badLine;
    var code;
    row = anException.line;
    col = anException.column;
    message = anException.message;
    lines = smalltalk.send(aString, "_lines", []);
    badLine = smalltalk.send(lines, "_at_", [row]);
    badLine = smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [1, smalltalk.send(col, "__minus", [1])]), "__comma", [" ===>"]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]);
    smalltalk.send(lines, "_at_put_", [row, badLine]);
    code = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (s) {return smalltalk.send(lines, "_withIndexDo_", [function (l, i) {return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])])]);}]);}]);
    $1 = smalltalk.send(smalltalk.send(smalltalk.ParseError || ParseError, "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [" Below is code with line numbers and ===> marker inserted:"]), "__comma", [smalltalk.send(smalltalk.String || String, "_lf", [])]), "__comma", [code])]);
    return $1;
},
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09| row col message lines badLine code |\x0a\x09<row = anException.line;\x0a\x09col = anException.column;\x0a\x09message = anException.message;>.\x0a\x09lines := aString lines.\x0a\x09badLine := lines at: row.\x0a\x09badLine := (badLine copyFrom: 1 to: col - 1), ' ===>', (badLine copyFrom:  col to: badLine size).\x0a\x09lines at: row put: badLine.\x0a\x09code := String streamContents: [:s |\x0a                  lines withIndexDo: [:l :i |\x0a                     s nextPutAll: i asString, ': ', l, String lf]].\x0a\x09^ ParseError new messageText: ('Parse error on line ' , row , ' column ' , col , ' : ' , message , ' Below is code with line numbers and ===> marker inserted:' , String lf, code)",
messageSends: ["lines", "at:", ",", "copyFrom:to:", "size", "-", "at:put:", "streamContents:", "withIndexDo:", "nextPutAll:", "lf", "asString", "messageText:", "new"],
referencedClasses: ["String", "ParseError"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_pseudoVariableNames",
smalltalk.method({
selector: "pseudoVariableNames",
category: 'packages',
fn: function () {
    var self = this;
    return ["self", "super", "nil", "true", "false", "thisContext"];
},
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_readJSObject_",
smalltalk.method({
selector: "readJSObject:",
category: 'accessing',
fn: function (anObject) {
    var self = this;
    return self.readJSObject(anObject);
    return self;
},
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<return self.readJSObject(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removeClass_",
smalltalk.method({
selector: "removeClass:",
category: 'classes',
fn: function (aClass) {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(aClass, "_isMetaclass", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [" is a Metaclass and cannot be removed!"])]);
    }
    smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [function (each) {return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);}]);
    smalltalk.send(self, "_deleteClass_", [aClass]);
    $2 = smalltalk.send(smalltalk.ClassRemoved || ClassRemoved, "_new", []);
    smalltalk.send($2, "_theClass_", [aClass]);
    $3 = smalltalk.send($2, "_yourself", []);
    smalltalk.send(smalltalk.send(smalltalk.SystemAnnouncer || SystemAnnouncer, "_current", []), "_announce_", [$3]);
    return self;
},
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [self error: aClass asString, ' is a Metaclass and cannot be removed!'].\x0a    \x0a\x09aClass methodDictionary values do: [:each |\x0a\x09\x09aClass removeCompiledMethod: each].\x0a        \x0a\x09aClass class methodDictionary values do: [:each |\x0a\x09\x09aClass class removeCompiledMethod: each].\x0a        \x0a\x09self deleteClass: aClass.\x0a    \x0a    SystemAnnouncer current\x0a    \x09announce: (ClassRemoved new\x0a        \x09theClass: aClass;\x0a            yourself)",
messageSends: ["ifTrue:", "error:", ",", "asString", "isMetaclass", "do:", "removeCompiledMethod:", "values", "methodDictionary", "class", "deleteClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassRemoved", "SystemAnnouncer"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_removePackage_",
smalltalk.method({
selector: "removePackage:",
category: 'packages',
fn: function (packageName) {
    var self = this;
    var pkg;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [function (each) {return smalltalk.send(self, "_removeClass_", [each]);}]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
},
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09pkg classes do: [:each |\x0a        \x09self removeClass: each].\x0a\x09self deletePackage: packageName",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "removeClass:", "classes", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_renamePackage_to_",
smalltalk.method({
selector: "renamePackage:to:",
category: 'packages',
fn: function (packageName, newName) {
    var self = this;
    var $1;
    var pkg;
    pkg = smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, function () {return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);}]);
    $1 = smalltalk.send(self, "_packageAt_", [newName]);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);
    }
    smalltalk.packages[newName] = smalltalk.packages[packageName];
    smalltalk.send(pkg, "_name_", [newName]);
    smalltalk.send(self, "_deletePackage_", [packageName]);
    return self;
},
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [self error: 'Missing package: ', packageName].\x0a\x09(self packageAt: newName) ifNotNil: [self error: 'Already exists a package called: ', newName].\x0a\x09<smalltalk.packages[newName] = smalltalk.packages[packageName]>.\x0a\x09pkg name: newName.\x0a\x09self deletePackage: packageName.",
messageSends: ["packageAt:ifAbsent:", "error:", ",", "ifNotNil:", "packageAt:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_reservedWords",
smalltalk.method({
selector: "reservedWords",
category: 'accessing',
fn: function () {
    var self = this;
    return self.reservedWords;
    return self;
},
args: [],
source: "reservedWords\x0a\x09\x22JavaScript reserved words\x22\x0a\x09<return self.reservedWords>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
"_send_to_arguments_",
smalltalk.method({
selector: "send:to:arguments:",
category: 'accessing',
fn: function (aSelector, anObject, aCollection) {
    var self = this;
    var selector;
    selector = smalltalk.send(smalltalk.send(aSelector, "_asString", []), "_asSelector", []);
    return self.send(anObject, selector, aCollection);
    return self;
},
args: ["aSelector", "anObject", "aCollection"],
source: "send: aSelector to: anObject arguments: aCollection\x0a\x09| selector |\x0a\x09selector := aSelector asString asSelector.\x0a\x09<return self.send(anObject, selector, aCollection)>",
messageSends: ["asSelector", "asString"],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk;
    return self;
},
args: [],
source: "current\x0a\x09<return smalltalk>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.UndefinedObject.comment="UndefinedObject describes the behavior of its sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk representation of the `undefined` JavaScript object."
smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function () {
    var self = this;
    return null;
},
args: [],
source: "asJSON\x0a\x09^null",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, function () {}]);
    return $1;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self ifNil: aBlock ifNotNil: []",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(aBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'testing',
fn: function (aBlock) {
    var self = this;
    return self;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'testing',
fn: function (aBlock, anotherBlock) {
    var self = this;
    var $1;
    $1 = smalltalk.send(anotherBlock, "_value", []);
    return $1;
},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_isNil",
smalltalk.method({
selector: "isNil",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isNil\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_notNil",
smalltalk.method({
selector: "notNil",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "notNil\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    return "nil";
},
args: [],
source: "printString\x0a    ^'nil'",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString, anotherString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
    return $1;
},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    smalltalk.send(self, "_deprecatedAPI", []);
    $1 = smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
    return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aString, aString2, aString3) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.ClassBuilder || ClassBuilder, "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
    return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09    superclass: self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function () {
    var self = this;
    smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
    return self;
},
args: [],
source: "new\x0a\x09    self error: 'You cannot create new instances of UndefinedObject. Use nil'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


smalltalk.addPackage('Kernel-Classes', {});
smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.Behavior.comment="Behavior is the superclass of all class objects. \x0a\x0aIt defines the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0aInstances know about the subclass/superclass relationships between classes, contain the description that instances are created from, \x0aand hold the method dictionary that's associated with each class.\x0a\x0aBehavior also  provides methods for compiling methods, examining the method dictionary, and iterating over the class hierarchy."
smalltalk.addMethod(
"_addCompiledMethod_",
smalltalk.method({
selector: "addCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
var $1,$2;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
;
$1=smalltalk.send((smalltalk.MethodAdded || MethodAdded),"_new",[]);
smalltalk.send($1,"_theClass_",[self]);
smalltalk.send($1,"_method_",[aMethod]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$2]);
return self},
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09<smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self)>.\x0a    \x0a    SystemAnnouncer current\x0a   \x09\x09announce: (MethodAdded new\x0a        \x09theClass: self;\x0a            method: aMethod;\x0a            yourself)",
messageSends: ["announce:", "theClass:", "new", "method:", "yourself", "current"],
referencedClasses: ["MethodAdded", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allInstanceVariableNames",
smalltalk.method({
selector: "allInstanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
var $1;
var result;
result=smalltalk.send(smalltalk.send(self,"_instanceVariableNames",[]),"_copy",[]);
$1=smalltalk.send(self,"_superclass",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(result,"_addAll_",[smalltalk.send(smalltalk.send(self,"_superclass",[]),"_allInstanceVariableNames",[])]);
};
return result;
},
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09    result addAll: self superclass allInstanceVariableNames].\x0a\x09^result",
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "addAll:", "allInstanceVariableNames", "superclass"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSubclasses",
smalltalk.method({
selector: "allSubclasses",
category: 'accessing',
fn: function (){
var self=this;
var result;
result=smalltalk.send(self,"_subclasses",[]);
smalltalk.send(smalltalk.send(self,"_subclasses",[]),"_do_",[(function(each){
return smalltalk.send(result,"_addAll_",[smalltalk.send(each,"_allSubclasses",[])]);
})]);
return result;
},
args: [],
source: "allSubclasses\x0a\x09| result |\x0a\x09result := self subclasses.\x0a\x09self subclasses do: [:each |\x0a\x09    result addAll: each allSubclasses].\x0a\x09^result",
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_allSuperclasses",
smalltalk.method({
selector: "allSuperclasses",
category: 'accessing',
fn: function (){
var self=this;
var $1,$3,$4,$2;
$1=smalltalk.send(self,"_superclass",[]);
if(($receiver = $1) == nil || $receiver == undefined){
return [];
} else {
$1;
};
$3=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_with_",[smalltalk.send(self,"_superclass",[])]);
smalltalk.send($3,"_addAll_",[smalltalk.send(smalltalk.send(self,"_superclass",[]),"_allSuperclasses",[])]);
$4=smalltalk.send($3,"_yourself",[]);
$2=$4;
return $2;
},
args: [],
source: "allSuperclasses\x0a\x09\x0a    self superclass ifNil: [ ^ #() ].\x0a    \x0a\x09^ (OrderedCollection with: self superclass) \x0a    \x09addAll: self superclass allSuperclasses;\x0a        yourself",
messageSends: ["ifNil:", "superclass", "addAll:", "allSuperclasses", "with:", "yourself"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
fn: function (){
var self=this;
return new self.fn();
;
return self},
args: [],
source: "basicNew\x0a\x09<return new self.fn()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_canUnderstand_",
smalltalk.method({
selector: "canUnderstand:",
category: 'testing',
fn: function (aSelector){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_keys",[]),"_includes_",[smalltalk.send(aSelector,"_asString",[])]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_superclass",[]),"_notNil",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_superclass",[]),"_canUnderstand_",[aSelector]);
})]);
})]);
return $1;
},
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^(self methodDictionary keys includes: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [self superclass canUnderstand: aSelector]]",
messageSends: ["or:", "and:", "canUnderstand:", "superclass", "notNil", "includes:", "asString", "keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment",
smalltalk.method({
selector: "comment",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_basicAt_",["comment"]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
},
args: [],
source: "comment\x0a    ^(self basicAt: 'comment') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_comment_",
smalltalk.method({
selector: "comment:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1,$2;
smalltalk.send(self,"_basicAt_put_",["comment",aString]);
$1=smalltalk.send((smalltalk.ClassCommentChanged || ClassCommentChanged),"_new",[]);
smalltalk.send($1,"_theClass_",[self]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$2]);
return self},
args: ["aString"],
source: "comment: aString\x0a    self basicAt: 'comment' put: aString.\x0a    SystemAnnouncer current\x0a    \x09announce: (ClassCommentChanged new\x0a        \x09theClass: self;\x0a            yourself)",
messageSends: ["basicAt:put:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassCommentChanged", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp",
smalltalk.method({
selector: "commentStamp",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader),"_new",[]);
smalltalk.send($2,"_class_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "commentStamp\x0a    ^ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
messageSends: ["class:", "new", "yourself"],
referencedClasses: ["ClassCommentReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_commentStamp_prior_",
smalltalk.method({
selector: "commentStamp:prior:",
category: 'accessing',
fn: function (aStamp,prior){
var self=this;
var $1;
$1=smalltalk.send(self,"_commentStamp",[]);
return $1;
},
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a        ^self commentStamp",
messageSends: ["commentStamp"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self,"_compile_category_",[aString,""]);
return self},
args: ["aString"],
source: "compile: aString\x0a\x09self compile: aString category: ''",
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_compile_category_",
smalltalk.method({
selector: "compile:category:",
category: 'compiling',
fn: function (aString,anotherString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[aString,self,anotherString]);
return self},
args: ["aString", "anotherString"],
source: "compile: aString category: anotherString\x0a\x09Compiler new\x0a\x09\x09install: aString \x0a        forClass: self \x0a        category: anotherString",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "definition\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_inheritsFrom_",
smalltalk.method({
selector: "inheritsFrom:",
category: 'testing',
fn: function (aClass){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aClass,"_allSubclasses",[]),"_includes_",[self]);
return $1;
},
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09^aClass allSubclasses includes: self",
messageSends: ["includes:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_instanceVariableNames",
smalltalk.method({
selector: "instanceVariableNames",
category: 'accessing',
fn: function (){
var self=this;
return self.iVarNames;
;
return self},
args: [],
source: "instanceVariableNames\x0a\x09<return self.iVarNames>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodAt_",
smalltalk.method({
selector: "methodAt:",
category: 'accessing',
fn: function (aSymbol){
var self=this;
return smalltalk.methods(self)[aSymbol._asString()];
;
return self},
args: ["aSymbol"],
source: "methodAt: aSymbol\x0a\x09<return smalltalk.methods(self)[aSymbol._asString()]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodDictionary",
smalltalk.method({
selector: "methodDictionary",
category: 'accessing',
fn: function (){
var self=this;
var dict = smalltalk.HashedCollection._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
;
return self},
args: [],
source: "methodDictionary\x0a\x09<var dict = smalltalk.HashedCollection._new();\x0a\x09var methods = self.fn.prototype.methods;\x0a\x09for(var i in methods) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09};\x0a\x09return dict>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methods",
smalltalk.method({
selector: "methods",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_values",[]);
return $1;
},
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
messageSends: ["values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_",
smalltalk.method({
selector: "methodsFor:",
category: 'accessing',
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader),"_new",[]);
smalltalk.send($2,"_class_category_",[self,aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ClassCategoryReader new\x0a\x09    class: self category: aString;\x0a\x09    yourself",
messageSends: ["class:category:", "new", "yourself"],
referencedClasses: ["ClassCategoryReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsFor_stamp_",
smalltalk.method({
selector: "methodsFor:stamp:",
category: 'accessing',
fn: function (aString,aStamp){
var self=this;
var $1;
$1=smalltalk.send(self,"_methodsFor_",[aString]);
return $1;
},
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for compatibility, right now ignores stamp.\x22\x0a\x09^self methodsFor: aString",
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_values",[]),"_select_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_protocol",[]),"__eq",[aString]);
})]);
return $1;
},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methodDictionary values select: [ :each | each protocol = aString ]",
messageSends: ["select:", "=", "protocol", "values", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return self.className || nil;
;
return self},
args: [],
source: "name\x0a\x09<return self.className || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_basicNew",[]),"_initialize",[]);
return $1;
},
args: [],
source: "new\x0a\x09^self basicNew initialize",
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_organization",
smalltalk.method({
selector: "organization",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_",["organization"]);
return $1;
},
args: [],
source: "organization\x0a\x09^ self basicAt: 'organization'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocols",
smalltalk.method({
selector: "protocols",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_organization",[]),"_elements",[]),"_sorted",[]);
return $1;
},
args: [],
source: "protocols\x0a   ^ self organization elements sorted",
messageSends: ["sorted", "elements", "organization"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_protocolsDo_",
smalltalk.method({
selector: "protocolsDo:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var methodsByCategory;
methodsByCategory=smalltalk.send((smalltalk.HashedCollection || HashedCollection),"_new",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_values",[]),"_do_",[(function(m){
return smalltalk.send(smalltalk.send(methodsByCategory,"_at_ifAbsentPut_",[smalltalk.send(m,"_category",[]),(function(){
return smalltalk.send((smalltalk.Array || Array),"_new",[]);
})]),"_add_",[m]);
})]);
smalltalk.send(smalltalk.send(self,"_protocols",[]),"_do_",[(function(category){
return smalltalk.send(aBlock,"_value_value_",[category,smalltalk.send(methodsByCategory,"_at_",[category])]);
})]);
return self},
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method category with\x0a\x09its collection of methods in the sort order of category name.\x22\x0a\x0a\x09| methodsByCategory |\x0a\x09methodsByCategory := HashedCollection new.\x0a\x09self methodDictionary values do: [:m |\x0a\x09\x09(methodsByCategory at: m category ifAbsentPut: [Array new])\x0a \x09\x09\x09add: m]. \x0a\x09self protocols do: [:category |\x0a\x09\x09aBlock value: category value: (methodsByCategory at: category)]",
messageSends: ["new", "do:", "add:", "at:ifAbsentPut:", "category", "values", "methodDictionary", "value:value:", "at:", "protocols"],
referencedClasses: ["HashedCollection", "Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_prototype",
smalltalk.method({
selector: "prototype",
category: 'accessing',
fn: function (){
var self=this;
return self.fn.prototype;
;
return self},
args: [],
source: "prototype\x0a\x09<return self.fn.prototype>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_removeCompiledMethod_",
smalltalk.method({
selector: "removeCompiledMethod:",
category: 'compiling',
fn: function (aMethod){
var self=this;
var $1,$2;

    	smalltalk.removeMethod(aMethod)
		smalltalk.init(self);
    ;
;
$1=smalltalk.send((smalltalk.MethodRemoved || MethodRemoved),"_new",[]);
smalltalk.send($1,"_theClass_",[self]);
smalltalk.send($1,"_method_",[aMethod]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$2]);
return self},
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09<\x0a    \x09smalltalk.removeMethod(aMethod)\x0a\x09\x09smalltalk.init(self);\x0a    >.\x0a    \x0a    SystemAnnouncer current\x0a   \x09\x09announce: (MethodRemoved new\x0a        \x09theClass: self;\x0a            method: aMethod;\x0a            yourself)",
messageSends: ["announce:", "theClass:", "new", "method:", "yourself", "current"],
referencedClasses: ["MethodRemoved", "SystemAnnouncer"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_selectors",
smalltalk.method({
selector: "selectors",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_methodDictionary",[]),"_keys",[]);
return $1;
},
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
messageSends: ["keys", "methodDictionary"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_subclasses",
smalltalk.method({
selector: "subclasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.subclasses(self);
;
return self},
args: [],
source: "subclasses\x0a\x09<return smalltalk.subclasses(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_superclass",
smalltalk.method({
selector: "superclass",
category: 'accessing',
fn: function (){
var self=this;
return self.superclass || nil;
;
return self},
args: [],
source: "superclass\x0a\x09<return self.superclass || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_class",[]);
return $1;
},
args: [],
source: "theMetaClass\x0a\x09^ self class",
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "theNonMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
"_withAllSubclasses",
smalltalk.method({
selector: "withAllSubclasses",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_with_",[self]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_allSubclasses",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "withAllSubclasses\x0a\x09^(Array with: self) addAll: self allSubclasses; yourself",
messageSends: ["addAll:", "allSubclasses", "with:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Class.comment="Class is __the__ class object. \x0a\x0aInstances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder`"
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("smalltalk.","__comma",[smalltalk.send(self,"_name",[])]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self name",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_package",[]);
if(($receiver = $2) == nil || $receiver == undefined){
$1="Unclassified";
} else {
$1=smalltalk.send(smalltalk.send(self,"_package",[]),"_name",[]);
};
return $1;
},
args: [],
source: "category\x0a\x09^self package ifNil: ['Unclassified'] ifNotNil: [self package name]",
messageSends: ["ifNil:ifNotNil:", "name", "package"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(smalltalk.send(self,"_superclass",[]),"_asString",[])]);
smalltalk.send(stream,"_nextPutAll_",[" subclass: #"]);
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_name",[])]);
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(smalltalk.send((smalltalk.String || String),"_lf",[]),"__comma",[smalltalk.send((smalltalk.String || String),"_tab",[])])]);
$2=smalltalk.send(stream,"_nextPutAll_",["instanceVariableNames: '"]);
$2;
smalltalk.send(smalltalk.send(self,"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(stream,"_nextPutAll_",[" "]);
})]);
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(smalltalk.send("'","__comma",[smalltalk.send((smalltalk.String || String),"_lf",[])]),"__comma",[smalltalk.send((smalltalk.String || String),"_tab",[])])]);
smalltalk.send(stream,"_nextPutAll_",["package: '"]);
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_category",[])]);
$3=smalltalk.send(stream,"_nextPutAll_",["'"]);
return $3;
})]);
return $1;
},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09    \x09nextPutAll: self superclass asString;\x0a\x09    \x09nextPutAll: ' subclass: #';\x0a\x09    \x09nextPutAll: self name;\x0a\x09    \x09nextPutAll: String lf, String tab;\x0a\x09    \x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames \x0a          \x09do: [ :each | stream nextPutAll: each ] \x0a\x09    \x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream\x0a\x09    \x09nextPutAll: '''', String lf, String tab;\x0a\x09    \x09nextPutAll: 'package: ''';\x0a\x09    \x09nextPutAll: self category;\x0a\x09    \x09nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "superclass", "name", ",", "tab", "lf", "do:separatedBy:", "instanceVariableNames", "category"],
referencedClasses: ["String"]
}),
smalltalk.Class);

smalltalk.addMethod(
"_isClass",
smalltalk.method({
selector: "isClass",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return self.pkg;
;
return self},
args: [],
source: "package\x0a\x09<return self.pkg>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
;
return self},
args: ["aPackage"],
source: "package: aPackage\x0a\x09<self.pkg = aPackage>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_name",[]);
return $1;
},
args: [],
source: "printString\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_rename_",
smalltalk.method({
selector: "rename:",
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_renameClass_to_",[self,aString]);
return self},
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
messageSends: ["renameClass:to:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_",
smalltalk.method({
selector: "subclass:instanceVariableNames:",
category: 'class creation',
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,anotherString,nil]);
return $1;
},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
var $1;
smalltalk.send(self,"_deprecatedAPI",[]);
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_",
smalltalk.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
category: 'class creation',
fn: function (aString,aString2,classVars,pools,aString3){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclass_instanceVariableNames_package_",[aString,aString2,aString3]);
return $1;
},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Just ignore class variables and pools. Added for compatibility.\x22\x0a\x09^self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
"_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_superclass_subclass_instanceVariableNames_package_",[self,smalltalk.send(aString,"_asString",[]),aString2,aString3]);
return $1;
},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ClassBuilder new\x0a\x09    superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "asString", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel-Classes');
smalltalk.Metaclass.comment="Metaclass is the root of the class hierarchy.\x0a\x0aMetaclass instances are metaclasses, one for each real class. \x0aMetaclass instances have a single instance, which they hold onto, which is the class that they are the metaclass of."
smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.","__comma",[smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[])]),"__comma",[".klass"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^ 'smalltalk.', self instanceClass name, '.klass'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_definition",
smalltalk.method({
selector: "definition",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(self,"_asString",[])]);
smalltalk.send(stream,"_nextPutAll_",[" class "]);
$2=smalltalk.send(stream,"_nextPutAll_",["instanceVariableNames: '"]);
$2;
smalltalk.send(smalltalk.send(self,"_instanceVariableNames",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(stream,"_nextPutAll_",[" "]);
})]);
return smalltalk.send(stream,"_nextPutAll_",["'"]);
})]);
return $1;
},
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09   \x09 \x09nextPutAll: self asString;\x0a\x09    \x09nextPutAll: ' class ';\x0a\x09    \x09nextPutAll: 'instanceVariableNames: '''.\x0a\x09\x09self instanceVariableNames\x0a\x09    \x09do: [ :each | stream nextPutAll: each ]\x0a\x09    \x09separatedBy: [ stream nextPutAll: ' ' ].\x0a\x09\x09stream nextPutAll: '''' ]",
messageSends: ["streamContents:", "nextPutAll:", "asString", "do:separatedBy:", "instanceVariableNames"],
referencedClasses: ["String"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceClass",
smalltalk.method({
selector: "instanceClass",
category: 'accessing',
fn: function (){
var self=this;
return self.instanceClass;
;
return self},
args: [],
source: "instanceClass\x0a\x09<return self.instanceClass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_instanceVariableNames_",
smalltalk.method({
selector: "instanceVariableNames:",
category: 'accessing',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder),"_new",[]),"_class_instanceVariableNames_",[self,aCollection]);
return self},
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09    class: self instanceVariableNames: aCollection",
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_isMetaclass",
smalltalk.method({
selector: "isMetaclass",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isMetaclass\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_instanceClass",[]),"_name",[]),"__comma",[" class"]);
return $1;
},
args: [],
source: "printString\x0a\x09^self instanceClass name, ' class'",
messageSends: [",", "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_theMetaClass",
smalltalk.method({
selector: "theMetaClass",
category: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "theMetaClass\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
"_theNonMetaClass",
smalltalk.method({
selector: "theNonMetaClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_instanceClass",[]);
return $1;
},
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
messageSends: ["instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel-Classes');
smalltalk.ClassBuilder.comment="ClassBuilder is responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using ClassBuilder directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`."
smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:",
category: 'private',
fn: function (aClass,aString,aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
;
return self},
args: ["aClass", "aString", "aCollection"],
source: "addSubclassOf: aClass named: aString instanceVariableNames: aCollection\x0a\x09<smalltalk.addClass(aString, aClass, aCollection);\x0a\x09    return smalltalk[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_addSubclassOf_named_instanceVariableNames_package_",
smalltalk.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
category: 'private',
fn: function (aClass,aString,aCollection,packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
;
return self},
args: ["aClass", "aString", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<smalltalk.addClass(aString, aClass, aCollection, packageName);\x0a\x09    return smalltalk[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_class_instanceVariableNames_",
smalltalk.method({
selector: "class:instanceVariableNames:",
category: 'class creation',
fn: function (aClass,aString){
var self=this;
var $1,$2,$3;
$1=smalltalk.send(aClass,"_isMetaclass",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send(aClass,"_name",[]),"__comma",[" is not a metaclass"])]);
};
smalltalk.send(aClass,"_basicAt_put_",["iVarNames",smalltalk.send(self,"_instanceVariableNamesFor_",[aString])]);
$2=smalltalk.send((smalltalk.ClassDefinitionChanged || ClassDefinitionChanged),"_new",[]);
smalltalk.send($2,"_theClass_",[aClass]);
$3=smalltalk.send($2,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$3]);
smalltalk.send(self,"_setupClass_",[aClass]);
return self},
args: ["aClass", "aString"],
source: "class: aClass instanceVariableNames: aString\x0a\x09aClass isMetaclass ifFalse: [self error: aClass name, ' is not a metaclass'].\x0a\x09aClass basicAt: 'iVarNames' put: (self instanceVariableNamesFor: aString).\x0a    \x0a    SystemAnnouncer current\x0a    \x09announce: (ClassDefinitionChanged new\x0a        \x09theClass: aClass;\x0a            yourself).\x0a    \x0a\x09self setupClass: aClass",
messageSends: ["ifFalse:", "error:", ",", "name", "isMetaclass", "basicAt:put:", "instanceVariableNamesFor:", "announce:", "theClass:", "new", "yourself", "current", "setupClass:"],
referencedClasses: ["ClassDefinitionChanged", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_copyClass_named_",
smalltalk.method({
selector: "copyClass:named:",
category: 'private',
fn: function (aClass,aString){
var self=this;
var newClass;
newClass=smalltalk.send(self,"_addSubclassOf_named_instanceVariableNames_package_",[smalltalk.send(aClass,"_superclass",[]),aString,smalltalk.send(aClass,"_instanceVariableNames",[]),smalltalk.send(smalltalk.send(aClass,"_package",[]),"_name",[])]);
smalltalk.send(self,"_setupClass_",[newClass]);
smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_values",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[smalltalk.send(each,"_source",[]),newClass,smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_class",[]),"_methodDictionary",[]),"_values",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[smalltalk.send(each,"_source",[]),smalltalk.send(newClass,"_class",[]),smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(self,"_setupClass_",[newClass]);
return newClass;
},
args: ["aClass", "aString"],
source: "copyClass: aClass named: aString\x0a\x09| newClass |\x0a\x0a\x09newClass := self \x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: aString \x0a\x09\x09instanceVariableNames: aClass instanceVariableNames \x0a\x09\x09package: aClass package name.\x0a\x0a\x09self setupClass: newClass.\x0a\x0a\x09aClass methodDictionary values do: [:each |\x0a\x09\x09Compiler new install: each source forClass: newClass category: each category].\x0a\x0a\x09aClass class methodDictionary values do: [:each |\x0a\x09\x09Compiler new install: each source forClass: newClass class category: each category].\x0a\x0a\x09self setupClass: newClass.\x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "setupClass:", "do:", "install:forClass:category:", "source", "category", "new", "values", "methodDictionary", "class"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_instanceVariableNamesFor_",
smalltalk.method({
selector: "instanceVariableNamesFor:",
category: 'private',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_tokenize_",[" "]),"_reject_",[(function(each){
return smalltalk.send(each,"_isEmpty",[]);
})]);
return $1;
},
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^(aString tokenize: ' ') reject: [:each | each isEmpty]",
messageSends: ["reject:", "isEmpty", "tokenize:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_renameClass_to_",
smalltalk.method({
selector: "renameClass:to:",
category: 'class creation',
fn: function (aClass,aString){
var self=this;
var $1,$2;

		smalltalk[aString] = aClass;
		delete smalltalk[aClass.className];
		aClass.className = aString;
	;
;
$1=smalltalk.send((smalltalk.ClassRenamed || ClassRenamed),"_new",[]);
smalltalk.send($1,"_theClass_",[aClass]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$2]);
return self},
args: ["aClass", "aString"],
source: "renameClass: aClass to: aString\x0a\x09<\x0a\x09\x09smalltalk[aString] = aClass;\x0a\x09\x09delete smalltalk[aClass.className];\x0a\x09\x09aClass.className = aString;\x0a\x09>.\x0a    \x0a    SystemAnnouncer current\x0a    \x09announce: (ClassRenamed new\x0a        \x09theClass: aClass;\x0a            yourself)\x0a    \x09",
messageSends: ["announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassRenamed", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
category: 'private',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
;
return self},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_",
smalltalk.method({
selector: "superclass:subclass:",
category: 'class creation',
fn: function (aClass,aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_superclass_subclass_instanceVariableNames_package_",[aClass,aString,"",nil]);
return $1;
},
args: ["aClass", "aString"],
source: "superclass: aClass subclass: aString\x0a\x09^self superclass: aClass subclass: aString instanceVariableNames: '' package: nil",
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
"_superclass_subclass_instanceVariableNames_package_",
smalltalk.method({
selector: "superclass:subclass:instanceVariableNames:package:",
category: 'class creation',
fn: function (aClass,aString,aString2,aString3){
var self=this;
var $1,$2,$3;
var newClass;
if(($receiver = aString3) == nil || $receiver == undefined){
$1="unclassified";
} else {
$1=aString3;
};
newClass=smalltalk.send(self,"_addSubclassOf_named_instanceVariableNames_package_",[aClass,aString,smalltalk.send(self,"_instanceVariableNamesFor_",[aString2]),$1]);
smalltalk.send(self,"_setupClass_",[newClass]);
$2=smalltalk.send((smalltalk.ClassAdded || ClassAdded),"_new",[]);
smalltalk.send($2,"_theClass_",[newClass]);
$3=smalltalk.send($2,"_yourself",[]);
smalltalk.send(smalltalk.send((smalltalk.SystemAnnouncer || SystemAnnouncer),"_current",[]),"_announce_",[$3]);
return newClass;
},
args: ["aClass", "aString", "aString2", "aString3"],
source: "superclass: aClass subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09| newClass |\x0a\x09\x0a    newClass := self addSubclassOf: aClass\x0a\x09\x09named: aString instanceVariableNames: (self instanceVariableNamesFor: aString2)\x0a\x09\x09package: (aString3 ifNil: ['unclassified']).\x0a\x09self setupClass: newClass.\x0a    \x0a    SystemAnnouncer current \x0a    \x09announce: (ClassAdded new\x0a        \x09theClass: newClass;\x0a            yourself).\x0a    \x0a\x09^newClass",
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:", "announce:", "theClass:", "new", "yourself", "current"],
referencedClasses: ["ClassAdded", "SystemAnnouncer"]
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel-Classes');
smalltalk.ClassCategoryReader.comment="ClassCategoryReader represents a mechanism for retrieving class descriptions stored on a file."
smalltalk.addMethod(
"_class_category_",
smalltalk.method({
selector: "class:category:",
category: 'accessing',
fn: function (aClass,aString){
var self=this;
self["@class"]=aClass;
self["@category"]=aString;
return self},
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_compileMethod_",
smalltalk.method({
selector: "compileMethod:",
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_install_forClass_category_",[aString,self["@class"],self["@category"]]);
return self},
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class category: category",
messageSends: ["install:forClass:category:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09chunkParser := ChunkParser new.",
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk;
smalltalk.send((function(){
chunk=smalltalk.send(aChunkParser,"_nextChunk",[]);
chunk;
return smalltalk.send(chunk,"_isEmpty",[]);
}),"_whileFalse_",[(function(){
return smalltalk.send(self,"_compileMethod_",[chunk]);
})]);
smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_setupClass_",[self["@class"]]);
return self},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty] whileFalse: [\x0a\x09    self compileMethod: chunk].\x0a\x09Compiler new setupClass: class",
messageSends: ["whileFalse:", "compileMethod:", "nextChunk", "isEmpty", "setupClass:", "new"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel-Classes');
smalltalk.ClassCommentReader.comment="ClassCommentReader represents a mechanism for retrieving class descriptions stored on a file.\x0aSee `ClassCategoryReader` too."
smalltalk.addMethod(
"_class_",
smalltalk.method({
selector: "class:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@class"]=aClass;
return self},
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@chunkParser"]=smalltalk.send((smalltalk.ChunkParser || ChunkParser),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09chunkParser := ChunkParser new.",
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_scanFrom_",
smalltalk.method({
selector: "scanFrom:",
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var $1;
var chunk;
chunk=smalltalk.send(aChunkParser,"_nextChunk",[]);
$1=smalltalk.send(chunk,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_setComment_",[chunk]);
};
return self},
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ifFalse: [\x0a\x09    self setComment: chunk].",
messageSends: ["nextChunk", "ifFalse:", "setComment:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
"_setComment_",
smalltalk.method({
selector: "setComment:",
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(self["@class"],"_comment_",[aString]);
return self},
args: ["aString"],
source: "setComment: aString\x0a    class comment: aString",
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('ClassSorterNode', smalltalk.Object, ['theClass', 'level', 'nodes'], 'Kernel-Classes');
smalltalk.addMethod(
"_getNodesFrom_",
smalltalk.method({
selector: "getNodesFrom:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var $1;
var children;
var others;
children=[];
others=[];
smalltalk.send(aCollection,"_do_",[(function(each){
$1=smalltalk.send(smalltalk.send(each,"_superclass",[]),"__eq",[smalltalk.send(self,"_theClass",[])]);
if(smalltalk.assert($1)){
return smalltalk.send(children,"_add_",[each]);
} else {
return smalltalk.send(others,"_add_",[each]);
};
})]);
self["@nodes"]=smalltalk.send(children,"_collect_",[(function(each){
return smalltalk.send((smalltalk.ClassSorterNode || ClassSorterNode),"_on_classes_level_",[each,others,smalltalk.send(smalltalk.send(self,"_level",[]),"__plus",[(1)])]);
})]);
return self},
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [:each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [children add: each]\x0a\x09\x09\x09ifFalse: [others add: each]].\x0a\x09nodes:= children collect: [:each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1]",
messageSends: ["do:", "ifTrue:ifFalse:", "add:", "=", "theClass", "superclass", "collect:", "on:classes:level:", "+", "level"],
referencedClasses: ["ClassSorterNode"]
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level",
smalltalk.method({
selector: "level",
category: 'accessing',
fn: function (){
var self=this;
return self["@level"];
},
args: [],
source: "level\x0a\x09^level",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_level_",
smalltalk.method({
selector: "level:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@level"]=anInteger;
return self},
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
return self["@nodes"];
},
args: [],
source: "nodes\x0a\x09^nodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@theClass"];
},
args: [],
source: "theClass\x0a\x09^theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassSorterNode);

smalltalk.addMethod(
"_traverseClassesWith_",
smalltalk.method({
selector: "traverseClassesWith:",
category: 'visiting',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_add_",[smalltalk.send(self,"_theClass",[])]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_nodes",[]),"_sorted_",[(function(a,b){
return smalltalk.send(smalltalk.send(smalltalk.send(a,"_theClass",[]),"_name",[]),"__lt_eq",[smalltalk.send(smalltalk.send(b,"_theClass",[]),"_name",[])]);
})]),"_do_",[(function(aNode){
return smalltalk.send(aNode,"_traverseClassesWith_",[aCollection]);
})]);
return self},
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [:a :b | a theClass name <= b theClass name ]) do: [:aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
messageSends: ["add:", "theClass", "do:", "traverseClassesWith:", "sorted:", "<=", "name", "nodes"],
referencedClasses: []
}),
smalltalk.ClassSorterNode);


smalltalk.addMethod(
"_on_classes_level_",
smalltalk.method({
selector: "on:classes:level:",
category: 'instance creation',
fn: function (aClass,aCollection,anInteger){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_theClass_",[aClass]);
smalltalk.send($2,"_level_",[anInteger]);
smalltalk.send($2,"_getNodesFrom_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"],
referencedClasses: []
}),
smalltalk.ClassSorterNode.klass);


smalltalk.addPackage('Kernel-Methods', {});
smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.BlockClosure.comment="A BlockClosure is a lexical closure.\x0aThe JavaScript representation is a function.\x0a\x0aA BlockClosure is evaluated with the `#value*` methods in the 'evaluating' protocol."
smalltalk.addMethod(
"_applyTo_arguments_",
smalltalk.method({
selector: "applyTo:arguments:",
category: 'evaluating',
fn: function (anObject, aCollection) {
    var self = this;
    return self.apply(anObject, aCollection);
    return self;
},
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<return self.apply(anObject, aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_compiledSource",
smalltalk.method({
selector: "compiledSource",
category: 'accessing',
fn: function () {
    var self = this;
    return self.toString();
    return self;
},
args: [],
source: "compiledSource\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_ensure_",
smalltalk.method({
selector: "ensure:",
category: 'evaluating',
fn: function (aBlock){
var self=this;
try{return self()}finally{aBlock._value()};
;
return self},
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<try{return self()}finally{aBlock._value()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_fork",
smalltalk.method({
selector: "fork",
category: 'timeout/interval',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ForkPool || ForkPool),"_default",[]),"_fork_",[self]);
return self},
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
messageSends: ["fork:", "default"],
referencedClasses: ["ForkPool"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'evaluating',
fn: function () {
    var self = this;
    return new self;
    return self;
},
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_",
smalltalk.method({
selector: "newValue:",
category: 'evaluating',
fn: function (anObject) {
    var self = this;
    return new self(anObject);
    return self;
},
args: ["anObject"],
source: "newValue: anObject\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_",
smalltalk.method({
selector: "newValue:value:",
category: 'evaluating',
fn: function (anObject, anObject2) {
    var self = this;
    return new self(anObject, anObject2);
    return self;
},
args: ["anObject", "anObject2"],
source: "newValue:  anObject value: anObject2\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_newValue_value_value_",
smalltalk.method({
selector: "newValue:value:value:",
category: 'evaluating',
fn: function (anObject, anObject2, anObject3) {
    var self = this;
    return new self(anObject, anObject2);
    return self;
},
args: ["anObject", "anObject2", "anObject3"],
source: "newValue:  anObject value: anObject2 value: anObject3\x0a\x09\x22Use the receiver as a JS constructor. \x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<return new self(anObject, anObject2)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_numArgs",
smalltalk.method({
selector: "numArgs",
category: 'accessing',
fn: function () {
    var self = this;
    return self.length;
    return self;
},
args: [],
source: "numArgs\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'error handling',
fn: function (anErrorClass, aBlock) {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(self, "_try_catch_", [self, function (error) {$2 = smalltalk.send(error, "_isKindOf_", [anErrorClass]);if (smalltalk.assert($2)) {return smalltalk.send(aBlock, "_value_", [error]);} else {return smalltalk.send(error, "_signal", []);}}]);
    return $1;
},
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09^self try: self catch: [:error |\x0a\x09    (error isKindOf: anErrorClass) \x0a\x09     ifTrue: [aBlock value: error]\x0a\x09     ifFalse: [error signal]]",
messageSends: ["try:catch:", "ifTrue:ifFalse:", "value:", "signal", "isKindOf:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_timeToRun",
smalltalk.method({
selector: "timeToRun",
category: 'evaluating',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.Date || Date, "_millisecondsToRun_", [self]);
    return $1;
},
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'evaluating',
fn: function () {
    var self = this;
    return self();
    return self;
},
args: [],
source: "value\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anArg) {
    var self = this;
    return self(anArg);
    return self;
},
args: ["anArg"],
source: "value: anArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(anArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_",
smalltalk.method({
selector: "value:value:",
category: 'evaluating',
fn: function (firstArg, secondArg) {
    var self = this;
    return self(firstArg, secondArg);
    return self;
},
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_value_value_value_",
smalltalk.method({
selector: "value:value:value:",
category: 'evaluating',
fn: function (firstArg, secondArg, thirdArg) {
    var self = this;
    return self(firstArg, secondArg, thirdArg);
    return self;
},
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<return self(firstArg, secondArg, thirdArg);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithInterval_",
smalltalk.method({
selector: "valueWithInterval:",
category: 'timeout/interval',
fn: function (aNumber) {
    var self = this;
    return setInterval(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<return setInterval(self, aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithPossibleArguments_",
smalltalk.method({
selector: "valueWithPossibleArguments:",
category: 'evaluating',
fn: function (aCollection) {
    var self = this;
    return self.apply(null, aCollection);
    return self;
},
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<return self.apply(null, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_valueWithTimeout_",
smalltalk.method({
selector: "valueWithTimeout:",
category: 'timeout/interval',
fn: function (aNumber) {
    var self = this;
    return setTimeout(self, aNumber);
    return self;
},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<return setTimeout(self, aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse",
smalltalk.method({
selector: "whileFalse",
category: 'controlling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_whileFalse_", [function () {}]);
    return self;
},
args: [],
source: "whileFalse\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileFalse: []",
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileFalse_",
smalltalk.method({
selector: "whileFalse:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    while (!self()) {
        aBlock();
    }
    return self;
},
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(!self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue",
smalltalk.method({
selector: "whileTrue",
category: 'controlling',
fn: function () {
    var self = this;
    smalltalk.send(self, "_whileTrue_", [function () {}]);
    return self;
},
args: [],
source: "whileTrue\x0a\x09\x22inlined in the Compiler\x22\x0a\x09self whileTrue: []",
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_whileTrue_",
smalltalk.method({
selector: "whileTrue:",
category: 'controlling',
fn: function (aBlock) {
    var self = this;
    while (self()) {
        aBlock();
    }
    return self;
},
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<while(self()) {aBlock()}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.CompiledMethod.comment="CompiledMethod hold the source and compiled code of a class method.\x0a\x0aYou can get a CompiledMethod using `Behavior>>methodAt:`\x0a\x0a\x09String methodAt: 'lines'\x0a\x0aand read the source code\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aSee referenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aor messages sent from this method:\x0a\x09\x0a\x09(String methodAt: 'lines')  messageSends"
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function () {
    var self = this;
    return self.args || [];
    return self;
},
args: [],
source: "arguments\x0a\x09<return self.args || []>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category",
smalltalk.method({
selector: "category",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_basicAt_", ["category"]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "category\x0a\x09^(self basicAt: 'category') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_category_",
smalltalk.method({
selector: "category:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
var oldCategory;
oldCategory=smalltalk.send(self,"_category",[]);
smalltalk.send(self,"_basicAt_put_",["category",aString]);
$1=smalltalk.send(self,"_methodClass",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_organization",[]),"_addElement_",[aString]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_methods",[]),"_select_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_category",[]),"__eq",[oldCategory]);
})]),"_ifEmpty_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_methodClass",[]),"_organization",[]),"_removeElement_",[oldCategory]);
})]);
};
return self},
args: ["aString"],
source: "category: aString\x0a\x09| oldCategory |\x0a    oldCategory := self category.\x0a\x09self basicAt: 'category' put: aString.\x0a    \x0a    self methodClass ifNotNil: [\x0a    \x09self methodClass organization addElement: aString.\x0a    \x0a\x09\x09(self methodClass methods \x0a    \x09\x09select: [ :each | each category = oldCategory ])\x0a        \x09ifEmpty: [ self methodClass organization removeElement: oldCategory ] ]",
messageSends: ["category", "basicAt:put:", "ifNotNil:", "addElement:", "organization", "methodClass", "ifEmpty:", "removeElement:", "select:", "=", "methods"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn",
smalltalk.method({
selector: "fn",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["fn"]);
    return $1;
},
args: [],
source: "fn\x0a\x09^self basicAt: 'fn'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_fn_",
smalltalk.method({
selector: "fn:",
category: 'accessing',
fn: function (aBlock) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
    return self;
},
args: ["aBlock"],
source: "fn: aBlock\x0a\x09self basicAt: 'fn' put: aBlock",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["messageSends"]);
    return $1;
},
args: [],
source: "messageSends\x0a\x09^self basicAt: 'messageSends'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_methodClass",
smalltalk.method({
selector: "methodClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["methodClass"]);
    return $1;
},
args: [],
source: "methodClass\x0a\x09^self basicAt: 'methodClass'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_category", []);
    return $1;
},
args: [],
source: "protocol\x0a\x09^ self category",
messageSends: ["category"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_referencedClasses",
smalltalk.method({
selector: "referencedClasses",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
    return $1;
},
args: [],
source: "referencedClasses\x0a\x09^self basicAt: 'referencedClasses'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_basicAt_", ["selector"]);
    return $1;
},
args: [],
source: "selector\x0a\x09^self basicAt: 'selector'",
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
    return self;
},
args: ["aString"],
source: "selector: aString\x0a\x09self basicAt: 'selector' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_basicAt_", ["source"]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = "";
    } else {
        $1 = $2;
    }
    return $1;
},
args: [],
source: "source\x0a\x09^(self basicAt: 'source') ifNil: ['']",
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    smalltalk.send(self, "_basicAt_put_", ["source", aString]);
    return self;
},
args: ["aString"],
source: "source: aString\x0a\x09self basicAt: 'source' put: aString",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('ForkPool', smalltalk.Object, ['poolSize', 'maxPoolSize', 'queue', 'worker'], 'Kernel-Methods');
smalltalk.addMethod(
"_addWorker",
smalltalk.method({
selector: "addWorker",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(self["@worker"],"_valueWithTimeout_",[(0)]);
self["@poolSize"]=smalltalk.send(self["@poolSize"],"__plus",[(1)]);
return self},
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a    poolSize := poolSize + 1",
messageSends: ["valueWithTimeout:", "+"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_fork_",
smalltalk.method({
selector: "fork:",
category: 'action',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self["@poolSize"],"__lt",[self["@maxPoolSize"]]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_addWorker",[]);
};
smalltalk.send(self["@queue"],"_back_",[aBlock]);
return self},
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue back: aBlock",
messageSends: ["ifTrue:", "addWorker", "<", "back:"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
var $1;
var sentinel;
self["@poolSize"]=(0);
self["@maxPoolSize"]=smalltalk.send(smalltalk.send(self,"_class",[]),"_defaultMaxPoolSize",[]);
self["@queue"]=smalltalk.send((smalltalk.Queue || Queue),"_new",[]);
sentinel=smalltalk.send((smalltalk.Object || Object),"_new",[]);
self["@worker"]=(function(){
var block;
self["@poolSize"]=smalltalk.send(self["@poolSize"],"__minus",[(1)]);
self["@poolSize"];
block=smalltalk.send(self["@queue"],"_frontIfAbsent_",[(function(){
return sentinel;
})]);
block;
$1=smalltalk.send(block,"__eq_eq",[sentinel]);
if(! smalltalk.assert($1)){
return smalltalk.send((function(){
return smalltalk.send(block,"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(self,"_addWorker",[]);
})]);
};
});
return self},
args: [],
source: "initialize\x0a\x09| sentinel |\x0a\x09poolSize := 0.\x0a    maxPoolSize := self class defaultMaxPoolSize.\x0a    queue := Queue new.\x0a    sentinel := Object new.\x0a    worker := [\x0a\x09\x09| block |\x0a        poolSize := poolSize - 1.\x0a\x09\x09block := queue frontIfAbsent: [ sentinel ].\x0a        block == sentinel ifFalse: [\x0a        \x09[ block value ] ensure: [ self addWorker ]]].",
messageSends: ["defaultMaxPoolSize", "class", "new", "-", "frontIfAbsent:", "ifFalse:", "ensure:", "addWorker", "value", "=="],
referencedClasses: ["Queue", "Object"]
}),
smalltalk.ForkPool);


smalltalk.ForkPool.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@default"]) == nil || $receiver == undefined){
self["@default"]=smalltalk.send(self,"_new",[]);
$1=self["@default"];
} else {
$1=self["@default"];
};
return $1;
},
args: [],
source: "default\x0a\x09^default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
return (100);
},
args: [],
source: "defaultMaxPoolSize\x0a\x09^100",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);

smalltalk.addMethod(
"_resetDefault",
smalltalk.method({
selector: "resetDefault",
category: 'accessing',
fn: function (){
var self=this;
self["@default"]=nil;
return self},
args: [],
source: "resetDefault\x0a\x09default := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.ForkPool.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel-Methods');
smalltalk.Message.comment="Generally, the system does not use instances of Message for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission. \x0aThis instance is sent it as an argument with the message `doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood`  and its counterpart `Object>>doesNotUnderstand:`"
smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@arguments'];
},
args: [],
source: "arguments\x0a\x09^arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (anArray) {
    var self = this;
    self['@arguments'] = anArray;
    return self;
},
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function () {
    var self = this;
    var $2, $1;
    $1 = smalltalk.send(smalltalk.String || String, "_streamContents_", [function (aStream) {smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send(aStream, "_nextPutAll_", ["("]);smalltalk.send(aStream, "_nextPutAll_", [self['@selector']]);$2 = smalltalk.send(aStream, "_nextPutAll_", [")"]);return $2;}]);
    return $1;
},
args: [],
source: "printString\x0a\x09^ String streamContents: [:aStream|  \x0a                                  \x09\x09\x09\x09aStream \x0a                                  \x09\x09\x09\x09\x09nextPutAll: super printString;\x0a                                  \x09\x09\x09\x09\x09nextPutAll: '(';\x0a                                  \x09\x09\x09\x09\x09nextPutAll: selector;\x0a                                  \x09\x09\x09\x09\x09nextPutAll: ')' \x09\x09\x09\x09]",
messageSends: ["streamContents:", "nextPutAll:", "printString"],
referencedClasses: ["String"]
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@selector'];
},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@selector'] = aString;
    return self;
},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
"_sendTo_",
smalltalk.method({
selector: "sendTo:",
category: 'printing',
fn: function (anObject) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_send_to_arguments_", [smalltalk.send(self, "_selector", []), anObject, smalltalk.send(self, "_arguments", [])]);
    return $1;
},
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ Smalltalk current send: self selector to: anObject arguments: self arguments",
messageSends: ["send:to:arguments:", "selector", "arguments", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Message);


smalltalk.addMethod(
"_selector_arguments_",
smalltalk.method({
selector: "selector:arguments:",
category: 'instance creation',
fn: function (aString, anArray) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_selector_", [aString]);
    smalltalk.send($2, "_arguments_", [anArray]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "arguments:", "yourself"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel-Methods');
smalltalk.MethodContext.comment="MethodContext holds all the dynamic state associated with the execution of either a method activation resulting from a message send. That is used to build the call stack while debugging.\x0a  \x0aMethodContext instances are JavaScript `SmalltalkMethodContext` objects defined in boot.js \x0a\x0aCurrent limitation: MethodContext instances are not created on Block evaluation. That means it's actually impossible to debug inside a Block."
smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [" >> "]), "__comma", [smalltalk.send(self, "_selector", [])]);
    return $1;
},
args: [],
source: "asString\x0a\x09^self receiver class printString, ' >> ', self selector",
messageSends: [",", "selector", "printString", "class", "receiver"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_home",
smalltalk.method({
selector: "home",
category: 'accessing',
fn: function () {
    var self = this;
    return self.homeContext;
    return self;
},
args: [],
source: "home\x0a\x09<return self.homeContext>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
category: 'accessing',
fn: function () {
    var self = this;
    return self.pc;
    return self;
},
args: [],
source: "pc\x0a\x09<return self.pc>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", ["("]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [")"]);
    return $1;
},
args: [],
source: "printString\x0a\x09^super printString, '(', self asString, ')'",
messageSends: [",", "asString", "printString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function () {
    var self = this;
    return self.receiver;
    return self;
},
args: [],
source: "receiver\x0a\x09<return self.receiver>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.convertSelector(self.selector);
    return self;
},
args: [],
source: "selector\x0a\x09<return smalltalk.convertSelector(self.selector)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function () {
    var self = this;
    return self.temps;
    return self;
},
args: [],
source: "temps\x0a\x09<return self.temps>",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addPackage('Kernel-Collections', {});
smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (anAssociation){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(anAssociation,"_class",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_key",[]),"__eq",[smalltalk.send(anAssociation,"_key",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_value",[]),"__eq",[smalltalk.send(anAssociation,"_value",[])]);
})]);
})]);
return $1;
},
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^self class = anAssociation class and: [\x0a\x09    self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value]]",
messageSends: ["and:", "=", "value", "key", "class"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return self["@key"];
},
args: [],
source: "key\x0a\x09^key",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_key_",
smalltalk.method({
selector: "key:",
category: 'accessing',
fn: function (aKey){
var self=this;
self["@key"]=aKey;
return self},
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
return smalltalk.send(self,"_storeOn_",[aStream]);
})]);
return $1;
},
args: [],
source: "printString\x0a\x09\x22print the contents of the Association into a string and return the string\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09self storeOn: aStream]",
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Association);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(self["@key"],"_storeOn_",[aStream]);
smalltalk.send(aStream,"_nextPutAll_",["->"]);
smalltalk.send(self["@value"],"_storeOn_",[aStream]);
return self},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09\x22Store in the format: key->value\x22\x0a\x0a\x09key storeOn: aStream.\x0a\x09aStream nextPutAll: '->'.\x0a\x09value storeOn: aStream.",
messageSends: ["storeOn:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return self["@value"];
},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aValue){
var self=this;
self["@value"]=aValue;
return self},
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
"_key_value_",
smalltalk.method({
selector: "key:value:",
category: 'instance creation',
fn: function (aKey,aValue){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_key_",[aKey]);
smalltalk.send($2,"_value_",[aValue]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09    ^self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
messageSends: ["key:", "new", "value:", "yourself"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: ", aCollection\x0a\x09^self copy \x0a\x09    addAll: aCollection; \x0a\x09    yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_add_",[each]);
})]);
return aCollection;
},
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09    self add: each].\x0a\x09^aCollection",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_withAll_",[self]);
return $1;
},
args: [],
source: "asArray\x0a\x09^Array withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_asJSON",[]);
})]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asArray collect: [:each | each asJSON]",
messageSends: ["collect:", "asJSON", "asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asOrderedCollection",
smalltalk.method({
selector: "asOrderedCollection",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_asArray",[]);
return $1;
},
args: [],
source: "asOrderedCollection\x0a\x09^self asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_asSet",
smalltalk.method({
selector: "asSet",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Set || Set),"_withAll_",[self]);
return $1;
},
args: [],
source: "asSet\x0a\x09^Set withAll: self",
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]),"_writeStream",[]);
smalltalk.send(self,"_do_",[(function(each){
return smalltalk.send(stream,"_nextPut_",[smalltalk.send(aBlock,"_value_",[each])]);
})]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWith_",
smalltalk.method({
selector: "copyWith:",
category: 'copying',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^self copy add: anObject; yourself",
messageSends: ["add:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithAll_",
smalltalk.method({
selector: "copyWithAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_copy",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09^self copy addAll: aCollection; yourself",
messageSends: ["addAll:", "copy", "yourself"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_copyWithoutAll_",
smalltalk.method({
selector: "copyWithoutAll:",
category: 'copying',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(self,"_reject_",[(function(each){
return smalltalk.send(aCollection,"_includes_",[each]);
})]);
return $1;
},
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements \x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [:each | aCollection includes: each]",
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_detect_ifNone_",[aBlock,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^self detect: aBlock ifNone: [self errorNotFound]",
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
;
return self},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
;
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i]);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_do_separatedBy_",
smalltalk.method({
selector: "do:separatedBy:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var first;
first=true;
smalltalk.send(self,"_do_",[(function(each){
if(smalltalk.assert(first)){
first=false;
first;
} else {
smalltalk.send(anotherBlock,"_value",[]);
};
return smalltalk.send(aBlock,"_value_",[each]);
})]);
return self},
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| first |\x0a\x09first := true.\x0a\x09self do: [:each |\x0a\x09    first\x0a\x09\x09ifTrue: [first := false]\x0a\x09\x09ifFalse: [anotherBlock value].\x0a\x09    aBlock value: each]",
messageSends: ["do:", "ifTrue:ifFalse:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_errorNotFound",
smalltalk.method({
selector: "errorNotFound",
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is not in the collection"]);
return self},
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifEmpty_",
smalltalk.method({
selector: "ifEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_isEmpty",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aBlock,"_value",[]);
} else {
$1=self;
};
return $1;
},
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: self classifyMethodAs: \x0a\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty \x0a\x09\x09ifTrue: [ aBlock value ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", "value", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_ifNotEmpty_",
smalltalk.method({
selector: "ifNotEmpty:",
category: 'testing',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_notEmpty",[]);
smalltalk.send($1,"_ifTrue_",[aBlock]);
return self},
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09self notEmpty ifTrue: aBlock.",
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
;
return self},
args: ["anObject"],
source: "includes: anObject\x0a\x09<\x0a\x09\x09var i = self.length;\x0a\x09\x09while (i--) {\x0a\x09\x09\x09if (smalltalk.send(self[i], \x22__eq\x22, [anObject])) {return true;}\x09\x0a\x09\x09}\x0a\x09\x09return false\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_inject_into_",
smalltalk.method({
selector: "inject:into:",
category: 'enumerating',
fn: function (anObject,aBlock){
var self=this;
var result;
result=anObject;
smalltalk.send(self,"_do_",[(function(each){
result=smalltalk.send(aBlock,"_value_value_",[result,each]);
return result;
})]);
return result;
},
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [:each | \x0a\x09    result := aBlock value: result value: each].\x0a\x09^result",
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_intersection_",
smalltalk.method({
selector: "intersection:",
category: 'enumerating',
fn: function (aCollection){
var self=this;
var $1,$2;
var set;
var outputSet;
set=smalltalk.send(self,"_asSet",[]);
outputSet=smalltalk.send((smalltalk.Set || Set),"_new",[]);
smalltalk.send(aCollection,"_do_",[(function(each){
$1=smalltalk.send(smalltalk.send(set,"_includes_",[each]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(outputSet,"_includes_",[each]),"_not",[]);
})]);
if(smalltalk.assert($1)){
return smalltalk.send(outputSet,"_add_",[each]);
};
})]);
$2=smalltalk.send(smalltalk.send(self,"_class",[]),"_withAll_",[smalltalk.send(outputSet,"_asArray",[])]);
return $2;
},
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [(outputSet includes: each) not])\x0a\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09outputSet add: each]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
messageSends: ["asSet", "new", "do:", "ifTrue:", "add:", "and:", "not", "includes:", "withAll:", "asArray", "class"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_notEmpty",
smalltalk.method({
selector: "notEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_isEmpty",[]),"_not",[]);
return $1;
},
args: [],
source: "notEmpty\x0a\x09^self isEmpty not",
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_occurrencesOf_",
smalltalk.method({
selector: "occurrencesOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
var tally;
tally=(0);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(anObject,"__eq",[each]);
if(smalltalk.assert($1)){
tally=smalltalk.send(tally,"__plus",[(1)]);
return tally;
};
})]);
return tally;
},
args: ["anObject"],
source: "occurrencesOf: anObject \x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [:each | anObject = each ifTrue: [tally := tally + 1]].\x0a\x09^tally",
messageSends: ["do:", "ifTrue:", "+", "="],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send(self,"_printString",[],smalltalk.Object),"__comma",[" ("])]);
smalltalk.send(self,"_do_separatedBy_",[(function(each){
return smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(each,"_printString",[])]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" "]);
})]);
return smalltalk.send(aStream,"_nextPutAll_",[")"]);
})]);
return $1;
},
args: [],
source: "printString\x0a\x09\x22print the contents of the Collection into a string and return it\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09aStream\x0a\x09\x09\x09nextPutAll: super printString, ' ('.\x0a\x09\x09self do: [:each | aStream nextPutAll: each printString]\x0a\x09\x09\x09separatedBy: [aStream nextPutAll: ' '].\x0a\x09\x09aStream nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "printString", "do:separatedBy:"],
referencedClasses: ["String"]
}),
smalltalk.Collection);

smalltalk.addMethod(
"_readStream",
smalltalk.method({
selector: "readStream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
},
args: [],
source: "readStream\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_reject_",
smalltalk.method({
selector: "reject:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_select_",[(function(each){
return smalltalk.send(smalltalk.send(aBlock,"_value_",[each]),"__eq",[false]);
})]);
return $1;
},
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^self select: [:each | (aBlock value: each) = false]",
messageSends: ["select:", "=", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anObject"],
source: "remove: anObject\x0a    ^self remove: anObject ifAbsent: [self errorNotFound]",
messageSends: ["remove:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a    self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1,$2;
var stream;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]),"_writeStream",[]);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(aBlock,"_value_",[each]);
if(smalltalk.assert($1)){
return smalltalk.send(stream,"_nextPut_",[each]);
};
})]);
$2=smalltalk.send(stream,"_contents",[]);
return $2;
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [:each |\x0a\x09    (aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each]].\x0a\x09^stream contents",
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "nextPut:", "value:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: [],
source: "size\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[self]);
return $1;
},
args: [],
source: "stream\x0a\x09^self streamClass on: self",
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_streamClass",[]);
return $1;
},
args: [],
source: "streamClass\x0a\x09^self class streamClass",
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
"_writeStream",
smalltalk.method({
selector: "writeStream",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_stream",[]);
return $1;
},
args: [],
source: "writeStream\x0a\x09^self stream",
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
var $1;
$1=smalltalk.send(self,"_new",[]);
return $1;
},
args: ["anInteger"],
source: "new: anInteger\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
},
args: [],
source: "streamClass\x0a\x09    ^Stream",
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "with: anObject\x0a\x09    ^self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anotherObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[anObject]);
smalltalk.send($2,"_add_",[anotherObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09    ^self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (firstObject,secondObject,thirdObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_add_",[firstObject]);
smalltalk.send($2,"_add_",[secondObject]);
smalltalk.send($2,"_add_",[thirdObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09    ^self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_addAll_",[aCollection]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09    ^self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
messageSends: ["addAll:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('HashedCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.HashedCollection.comment="A HashedCollection is a traditional JavaScript object, or a Smalltalk Dictionary.\x0a\x0aUnlike a Dictionary, it can only have strings as keys."
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aCollection){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: ["aCollection"],
source: ", aCollection\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aHashedCollection){
var self=this;
var $1,$2,$3;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aHashedCollection,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
$2=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[smalltalk.send(aHashedCollection,"_size",[])]);
if(! smalltalk.assert($2)){
return false;
};
$3=smalltalk.send(smalltalk.send(self,"_associations",[]),"__eq",[smalltalk.send(aHashedCollection,"_associations",[])]);
return $3;
},
args: ["aHashedCollection"],
source: "= aHashedCollection\x0a\x09self class = aHashedCollection class ifFalse: [^false].\x0a\x09self size = aHashedCollection size ifFalse: [^false].\x0a\x09^self associations = aHashedCollection associations",
messageSends: ["ifFalse:", "=", "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
smalltalk.send(self,"_at_put_",[smalltalk.send(anAssociation,"_key",[]),smalltalk.send(anAssociation,"_value",[])]);
return self},
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
category: 'adding/removing',
fn: function (aHashedCollection){
var self=this;
smalltalk.send(self,"_addAll_",[smalltalk.send(aHashedCollection,"_associations",[])],smalltalk.Collection);
return aHashedCollection;
},
args: ["aHashedCollection"],
source: "addAll: aHashedCollection\x0a\x09super addAll: aHashedCollection associations.\x0a\x09^aHashedCollection",
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asDictionary",
smalltalk.method({
selector: "asDictionary",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Dictionary || Dictionary),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
},
args: [],
source: "asDictionary\x0a\x09^Dictionary fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var c;
c=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(c,"_at_put_",[key,smalltalk.send(value,"_asJSON",[])]);
})]);
return c;
},
args: [],
source: "asJSON\x0a\x09| c |\x0a\x09c := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09\x09c at: key put: value asJSON].\x0a\x09^c",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asJSON"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associations",
smalltalk.method({
selector: "associations",
category: 'accessing',
fn: function (){
var self=this;
var associations;
associations=[];
smalltalk.send(smalltalk.send(self,"_keys",[]),"_do_",[(function(each){
return smalltalk.send(associations,"_add_",[smalltalk.send((smalltalk.Association || Association),"_key_value_",[each,smalltalk.send(self,"_at_",[each])])]);
})]);
return associations;
},
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self keys do: [:each |\x0a\x09    associations add: (Association key: each value: (self at: each))].\x0a\x09^associations",
messageSends: ["do:", "add:", "key:value:", "at:", "keys"],
referencedClasses: ["Association"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_associationsDo_",
smalltalk.method({
selector: "associationsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self associations do: aBlock",
messageSends: ["do:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["aKey"],
source: "at: aKey\x0a\x09^self at: aKey ifAbsent: [self errorNotFound]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(self,"_basicAt_",[aKey]);
}),aBlock]);
return $1;
},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [self basicAt: aKey]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "basicAt:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifAbsentPut_",
smalltalk.method({
selector: "at:ifAbsentPut:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[aKey,(function(){
return smalltalk.send(self,"_at_put_",[aKey,smalltalk.send(aBlock,"_value",[])]);
})]);
return $1;
},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^self at: aKey ifAbsent: [\x0a\x09    self at: aKey put: aBlock value]",
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_",
smalltalk.method({
selector: "at:ifPresent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_at_",[aKey])]);
} else {
$1=nil;
};
return $1;
},
args: ["aKey", "aBlock"],
source: "at: aKey ifPresent: aBlock\x0a\x09\x22Lookup the given key in the receiver. \x0a\x09If it is present, answer the value of evaluating the given block with the value associated with the key. \x0a\x09Otherwise, answer nil.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: [ nil ]",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_ifPresent_ifAbsent_",
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
$1=smalltalk.send($2,"_ifTrue_ifFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_at_",[aKey])]);
}),anotherBlock]);
return $1;
},
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver. \x0a\x09If it is present, answer the value of evaluating the oneArgBlock with the value associated with the key, \x0a\x09otherwise answer the value of absentBlock.\x22\x0a\x09^(self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: anotherBlock",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicAt_put_",[aKey,aValue]);
return $1;
},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^self basicAt: aKey put: aValue",
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict;
newDict=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
return smalltalk.send(newDict,"_at_put_",[key,smalltalk.send(aBlock,"_value_",[value])]);
})]);
return newDict;
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09    newDict at: key put: (aBlock value: value)].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(smalltalk.send(each,"_value",[]),"_deepCopy",[])]);
})]);
return copy;
},
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self associationsDo: [:each |\x0a\x09    copy at: each key  put: each value deepCopy].\x0a\x09^copy",
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "deepCopy", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^self values detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_values",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self values do: aBlock",
messageSends: ["do:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'enumerating',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_values",[]),"_includes_",[anObject]);
return $1;
},
args: ["anObject"],
source: "includes: anObject\x0a\x09^self values includes: anObject",
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
return self.hasOwnProperty(aKey);
;
return self},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<return self.hasOwnProperty(aKey)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;

		if ('function'===typeof Object.keys) return Object.keys(self);
		var keys = [];
		for(var i in self) {
			if(self.hasOwnProperty(i)) {
				keys.push(i);
			}
		};
		return keys;
	;
;
return self},
args: [],
source: "keys\x0a\x09<\x0a\x09\x09if ('function'===typeof Object.keys) return Object.keys(self);\x0a\x09\x09var keys = [];\x0a\x09\x09for(var i in self) {\x0a\x09\x09\x09if(self.hasOwnProperty(i)) {\x0a\x09\x09\x09\x09keys.push(i);\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09return keys;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(aBlock,"_value_value_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return self},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self associationsDo: [:each |\x0a\x09    aBlock value: each key value: each value]",
messageSends: ["associationsDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(aStream){
smalltalk.send(aStream,"_nextPutAll_",[smalltalk.send(smalltalk.send("a ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",["("])]);
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_storeOn_",[aStream]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[" , "]);
})]);
return smalltalk.send(aStream,"_nextPutAll_",[")"]);
})]);
return $1;
},
args: [],
source: "printString\x0a\x09\x22print the contents of the HashedCollection into a string and return the string\x22\x0a\x09^String streamContents: [:aStream |\x0a\x09\x09aStream nextPutAll: 'a ', self class name, '('.\x0a\x09\x09self associations\x0a\x09\x09\x09do: [:each | each storeOn: aStream]\x0a\x09\x09\x09separatedBy: [ aStream nextPutAll: ' , '].\x0a\x09\x09aStream nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "name", "class", "do:separatedBy:", "storeOn:", "associations"],
referencedClasses: ["String"]
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_removeKey_ifAbsent_",[aKey,aBlock]);
return $1;
},
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a    ^self removeKey: aKey ifAbsent: aBlock",
messageSends: ["removeKey:ifAbsent:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_",
smalltalk.method({
selector: "removeKey:",
category: 'adding/removing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self,"_remove_",[aKey]);
return $1;
},
args: ["aKey"],
source: "removeKey: aKey\x0a    ^self remove: aKey",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_includesKey_",[aKey]);
if(smalltalk.assert($2)){
$1=smalltalk.send(self,"_basicDelete_",[aKey]);
} else {
$1=smalltalk.send(aBlock,"_value",[]);
};
return $1;
},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^(self includesKey: aKey) \x0a\x09\x09ifFalse: [aBlock value]\x0a\x09\x09ifTrue: [self basicDelete: aKey]",
messageSends: ["ifFalse:ifTrue:", "value", "basicDelete:", "includesKey:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
var newDict;
newDict=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_keysAndValuesDo_",[(function(key,value){
$1=smalltalk.send(aBlock,"_value_",[value]);
if(smalltalk.assert($1)){
return smalltalk.send(newDict,"_at_put_",[key,value]);
};
})]);
return newDict;
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [:key :value |\x0a\x09    (aBlock value: value) ifTrue: [newDict at: key put: value]].\x0a\x09^newDict",
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var copy;
copy=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_associationsDo_",[(function(each){
return smalltalk.send(copy,"_at_put_",[smalltalk.send(each,"_key",[]),smalltalk.send(each,"_value",[])]);
})]);
return copy;
},
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self associationsDo: [:each |\x0a\x09    copy at: each key  put: each value].\x0a\x09^copy",
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self keys size",
messageSends: ["size", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_storeOn_",
smalltalk.method({
selector: "storeOn:",
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream,"_nextPutAll_",["#{"]);
smalltalk.send(smalltalk.send(self,"_associations",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_storeOn_",[aStream]);
}),(function(){
return smalltalk.send(aStream,"_nextPutAll_",[". "]);
})]);
smalltalk.send(aStream,"_nextPutAll_",["}"]);
return self},
args: ["aStream"],
source: "storeOn: aStream\x0a\x09aStream nextPutAll: '#{'.\x0a\x09self associations\x0a\x09\x09do: [:each | each storeOn: aStream]\x0a\x09\x09separatedBy: [ aStream nextPutAll: '. '].\x0a\x09aStream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "storeOn:", "associations"],
referencedClasses: []
}),
smalltalk.HashedCollection);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_keys",[]),"_collect_",[(function(each){
return smalltalk.send(self,"_at_",[each]);
})]);
return $1;
},
args: [],
source: "values\x0a\x09^self keys collect: [:each | self at: each]",
messageSends: ["collect:", "at:", "keys"],
referencedClasses: []
}),
smalltalk.HashedCollection);


smalltalk.addMethod(
"_fromPairs_",
smalltalk.method({
selector: "fromPairs:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var dict;
dict=smalltalk.send(self,"_new",[]);
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(dict,"_add_",[each]);
})]);
return dict;
},
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09| dict |\x0a\x09dict := self new.\x0a\x09aCollection do: [:each | dict add: each].\x0a\x09^dict",
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.HashedCollection.klass);


smalltalk.addClass('Dictionary', smalltalk.HashedCollection, ['keys', 'values'], 'Kernel-Collections');
smalltalk.addMethod(
"_asHashedCollection",
smalltalk.method({
selector: "asHashedCollection",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.HashedCollection || HashedCollection),"_fromPairs_",[smalltalk.send(self,"_associations",[])]);
return $1;
},
args: [],
source: "asHashedCollection\x0a\x09^HashedCollection fromPairs: self associations",
messageSends: ["fromPairs:", "associations"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asHashedCollection",[]),"_asJSON",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asHashedCollection asJSON",
messageSends: ["asJSON", "asHashedCollection"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (aKey,aBlock){
var self=this;

		var index;
		for(var i=0;i<self['@keys'].length;i++){
			if(self['@keys'][i].__eq(aKey)) {index = i;}
		};
		if(typeof index === 'undefined') {
			return aBlock();
		} else {
			return self['@values'][index];
		}
	;
;
return self},
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<\x0a\x09\x09var index;\x0a\x09\x09for(var i=0;i<self['@keys'].length;i++){\x0a\x09\x09\x09if(self['@keys'][i].__eq(aKey)) {index = i;}\x0a\x09\x09};\x0a\x09\x09if(typeof index === 'undefined') {\x0a\x09\x09\x09return aBlock();\x0a\x09\x09} else {\x0a\x09\x09\x09return self['@values'][index];\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (aKey,aValue){
var self=this;

		var index = self['@keys'].indexOf(aKey);
		if(index === -1) {
			self['@values'].push(aValue);
			self['@keys'].push(aKey);
		} else {
			self['@values'][index] = aValue;
		};

		return aValue;
	;
;
return self},
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<\x0a\x09\x09var index = self['@keys'].indexOf(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09self['@values'].push(aValue);\x0a\x09\x09\x09self['@keys'].push(aKey);\x0a\x09\x09} else {\x0a\x09\x09\x09self['@values'][index] = aValue;\x0a\x09\x09};\x0a\x0a\x09\x09return aValue;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_includesKey_",
smalltalk.method({
selector: "includesKey:",
category: 'testing',
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_includes_",[aKey]);
return $1;
},
args: ["aKey"],
source: "includesKey: aKey\x0a\x09^keys includes: aKey",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.HashedCollection);
self["@keys"]=[];
self["@values"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keyAtValue_",
smalltalk.method({
selector: "keyAtValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_associations",[]),"_detect_ifNone_",[(function(k,v){
return smalltalk.send(v,"__eq_eq",[anObject]);
}),(function(){
return smalltalk.send(self,"_error_",["Not found"]);
})]),"_key",[]);
return $1;
},
args: ["anObject"],
source: "keyAtValue: anObject\x0a\x0a\x09^ (self associations \x0a    \x09detect:[:k :v| v == anObject] \x0a    \x09ifNone:[self error: 'Not found']) key",
messageSends: ["key", "detect:ifNone:", "==", "error:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_keys",
smalltalk.method({
selector: "keys",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@keys"],"_copy",[]);
return $1;
},
args: [],
source: "keys\x0a\x09^keys copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_removeKey_ifAbsent_",
smalltalk.method({
selector: "removeKey:ifAbsent:",
category: 'adding/removing',
fn: function (aKey,aBlock){
var self=this;

            var index = self['@keys'].indexOf(aKey);
            if(index === -1) {
                return aBlock()
            } else {
                var value;
                self['@keys'].splice(index, 1);
                value = self['@values'].splice(index, 1);
                return value[0];
            };
    ;
;
return self},
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a    <\x0a            var index = self['@keys'].indexOf(aKey);\x0a            if(index === -1) {\x0a                return aBlock()\x0a            } else {\x0a                var value;\x0a                self['@keys'].splice(index, 1);\x0a                value = self['@values'].splice(index, 1);\x0a                return value[0];\x0a            };\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_valueAt_",
smalltalk.method({
selector: "valueAt:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_associationsDo_",[(2)]);
return $1;
},
args: ["anObject"],
source: "valueAt: anObject\x0a\x0a\x09^ self associationsDo:2",
messageSends: ["associationsDo:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
"_values",
smalltalk.method({
selector: "values",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@values"],"_copy",[]);
return $1;
},
args: [],
source: "values\x0a\x09^values copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);



smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
var $1,$2;
var $early={};
try {
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aCollection,"_class",[])]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[smalltalk.send(aCollection,"_size",[])]);
})]);
if(! smalltalk.assert($1)){
return false;
};
smalltalk.send(self,"_withIndexDo_",[(function(each,i){
$2=smalltalk.send(smalltalk.send(aCollection,"_at_",[i]),"__eq",[each]);
if(! smalltalk.assert($2)){
throw $early=[false];
};
})]);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size]) ifFalse: [^false].\x0a\x09self withIndexDo: [:each :i |\x0a                 (aCollection at: i) = each ifFalse: [^false]].\x0a\x09^true",
messageSends: ["ifFalse:", "and:", "=", "size", "class", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_addLast_",
smalltalk.method({
selector: "addLast:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_add_",[anObject]);
return self},
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButFirst",
smalltalk.method({
selector: "allButFirst",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(2),smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "allButFirst\x0a\x09^self copyFrom: 2 to: self size",
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_allButLast",
smalltalk.method({
selector: "allButLast",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),smalltalk.send(smalltalk.send(self,"_size",[]),"__minus",[(1)])]);
return $1;
},
args: [],
source: "allButLast\x0a\x09^self copyFrom: 1 to: self size - 1",
messageSends: ["copyFrom:to:", "-", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_",
smalltalk.method({
selector: "at:",
category: 'accessing',
fn: function (anIndex){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_ifAbsent_",[anIndex,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anIndex"],
source: "at: anIndex\x0a\x09^self at: anIndex ifAbsent: [\x0a\x09    self errorNotFound]",
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_atRandom",
smalltalk.method({
selector: "atRandom",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(smalltalk.send(self,"_size",[]),"_atRandom",[])]);
return $1;
},
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var range;
var newCollection;
range=smalltalk.send(anIndex,"_to_",[anotherIndex]);
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(range,"_size",[])]);
smalltalk.send(range,"_withIndexDo_",[(function(each,i){
return smalltalk.send(newCollection,"_at_put_",[i,smalltalk.send(self,"_at_",[each])]);
})]);
return newCollection;
},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09| range newCollection |\x0a\x09range := anIndex to: anotherIndex.\x0a\x09newCollection := self class new: range size.\x0a\x09range withIndexDo: [:each :i |\x0a\x09    newCollection at: i put: (self at: each)].\x0a\x09^newCollection",
messageSends: ["to:", "new:", "size", "class", "withIndexDo:", "at:put:", "at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,smalltalk.send(each,"_deepCopy",[])]);
})]);
return newCollection;
},
args: [],
source: "deepCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [:each :index | \x0a\x09\x09newCollection at: index put: each deepCopy].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(1)]);
return $1;
},
args: [],
source: "first\x0a\x09^self at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_first_",
smalltalk.method({
selector: "first:",
category: 'accessing',
fn: function (n){
var self=this;
var $1;
$1=smalltalk.send(self,"_copyFrom_to_",[(1),n]);
return $1;
},
args: ["n"],
source: "first: n\x0a\x09\x22Answer the first n elements of the receiver.\x0a\x09Raise an error if there are not enough elements.\x22\x0a\x0a\x09^ self copyFrom: 1 to: n",
messageSends: ["copyFrom:to:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_fourth",
smalltalk.method({
selector: "fourth",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(4)]);
return $1;
},
args: [],
source: "fourth\x0a\x09^self at: 4",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_",
smalltalk.method({
selector: "indexOf:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_ifAbsent_",[anObject,(function(){
return smalltalk.send(self,"_errorNotFound",[]);
})]);
return $1;
},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09^self indexOf: anObject ifAbsent: [self errorNotFound]",
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_ifAbsent_",
smalltalk.method({
selector: "indexOf:ifAbsent:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(smalltalk.send(self[i], '__eq', [anObject])) {return i+1}
		};
		return aBlock();
	;
;
return self},
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(smalltalk.send(self[i], '__eq', [anObject])) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_",
smalltalk.method({
selector: "indexOf:startingAt:",
category: 'accessing',
fn: function (anObject,start){
var self=this;
var $1;
$1=smalltalk.send(self,"_indexOf_startingAt_ifAbsent_",[anObject,start,(function(){
return (0);
})]);
return $1;
},
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement, \x0a\x09answer 0.\x22\x0a\x09^self indexOf: anObject startingAt: start ifAbsent: [0]",
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_indexOf_startingAt_ifAbsent_",
smalltalk.method({
selector: "indexOf:startingAt:ifAbsent:",
category: 'accessing',
fn: function (anObject,start,aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
;
return self},
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=start-1;i<self.length;i++){\x0a\x09\x09\x09if(self[i].__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock();\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "last\x0a\x09^self at: self size",
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_removeLast",
smalltalk.method({
selector: "removeLast",
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(self,"_remove_",[smalltalk.send(self,"_last",[])]);
return self},
args: [],
source: "removeLast\x0a\x09self remove: self last",
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_second",
smalltalk.method({
selector: "second",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(2)]);
return $1;
},
args: [],
source: "second\x0a\x09^self at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var newCollection;
newCollection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new_",[smalltalk.send(self,"_size",[])]);
smalltalk.send(self,"_withIndexDo_",[(function(each,index){
return smalltalk.send(newCollection,"_at_put_",[index,each]);
})]);
return newCollection;
},
args: [],
source: "shallowCopy\x0a\x09| newCollection |\x0a\x09newCollection := self class new: self size.\x0a\x09self withIndexDo: [ :each :index | \x0a\x09\x09newCollection at: index put: each].\x0a\x09^newCollection",
messageSends: ["new:", "size", "class", "withIndexDo:", "at:put:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_third",
smalltalk.method({
selector: "third",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_at_",[(3)]);
return $1;
},
args: [],
source: "third\x0a\x09^self at: 3",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
;
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self[i], i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
;
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09<self.push(anObject); return anObject;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("[","__comma",[smalltalk.send(smalltalk.send(self,"_collect_",[(function(each){
return smalltalk.send(each,"_asJavascript",[]);
})]),"_join_",[", "])]),"__comma",["]"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'",
messageSends: [",", "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;

		if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};
		return self[anIndex - 1];
	;
;
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<\x0a\x09\x09if((anIndex < 1) || (self.length < anIndex)) {return aBlock()};\x0a\x09\x09return self[anIndex - 1];\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return self[anIndex - 1] = anObject;
;
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<return self[anIndex - 1] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
category: 'enumerating',
fn: function (aString){
var self=this;
return self.join(aString);
;
return self},
args: ["aString"],
source: "join: aString\x0a\x09<return self.join(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_remove_ifAbsent_",
smalltalk.method({
selector: "remove:ifAbsent:",
category: 'adding/removing',
fn: function (anObject,aBlock){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				return self;
			}
		}
	;
;
smalltalk.send(aBlock,"_value",[]);
return self},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09<\x0a\x09\x09for(var i=0;i<self.length;i++) {\x0a\x09\x09\x09if(self[i] == anObject) {\x0a\x09\x09\x09\x09self.splice(i,1);\x0a\x09\x09\x09\x09return self;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09>.\x0a\x09aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_removeFrom_to_",
smalltalk.method({
selector: "removeFrom:to:",
category: 'adding/removing',
fn: function (aNumber,anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
;
return self},
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<self.splice(aNumber - 1,anotherNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return self._copy().reverse();
;
return self},
args: [],
source: "reversed\x0a\x09<return self._copy().reverse()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return self.length;
;
return self},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort",
smalltalk.method({
selector: "sort",
category: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_basicPerform_",["sort"]);
return $1;
},
args: [],
source: "sort\x0a    ^self basicPerform: 'sort'",
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sort_",
smalltalk.method({
selector: "sort:",
category: 'enumerating',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
;
return self},
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted",
smalltalk.method({
selector: "sorted",
category: 'enumerating',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort",[]);
return $1;
},
args: [],
source: "sorted\x0a\x09^self copy sort",
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
"_sorted_",
smalltalk.method({
selector: "sorted:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_copy",[]),"_sort_",[aBlock]);
return $1;
},
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^self copy sort: aBlock",
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);


smalltalk.addMethod(
"_new_",
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return new Array(anInteger);
;
return self},
args: ["anInteger"],
source: "new: anInteger\x0a\x09<return new Array(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(1)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "with: anObject\x0a\x09    ^(self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (anObject,anObject2){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(2)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
smalltalk.send($2,"_at_put_",[(2),anObject2]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09    ^(self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_with_with_with_",
smalltalk.method({
selector: "with:with:with:",
category: 'instance creation',
fn: function (anObject,anObject2,anObject3){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new_",[(3)]);
smalltalk.send($2,"_at_put_",[(1),anObject]);
smalltalk.send($2,"_at_put_",[(2),anObject2]);
smalltalk.send($2,"_at_put_",[(3),anObject3]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09    ^(self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: []
}),
smalltalk.Array.klass);

smalltalk.addMethod(
"_withAll_",
smalltalk.method({
selector: "withAll:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var instance;
var index;
index=(1);
instance=smalltalk.send(self,"_new_",[smalltalk.send(aCollection,"_size",[])]);
smalltalk.send(aCollection,"_do_",[(function(each){
smalltalk.send(instance,"_at_put_",[index,each]);
index=smalltalk.send(index,"__plus",[(1)]);
return index;
})]);
return instance;
},
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [:each  |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1].\x0a\x09^instance",
messageSends: ["new:", "size", "do:", "at:put:", "+"],
referencedClasses: []
}),
smalltalk.Array.klass);


smalltalk.addClass('CharacterArray', smalltalk.SequenceableCollection, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__comma",[smalltalk.send(aString,"_asString",[])]);
return $1;
},
args: ["aString"],
source: ", aString\x0a\x09^self asString, aString asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asLowercase",[])]);
return $1;
},
args: [],
source: "asLowercase\x0a\x09^self class fromString: self asString asLowercase",
messageSends: ["fromString:", "asLowercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asNumber",[]);
return $1;
},
args: [],
source: "asNumber\x0a\x09^self asString asNumber",
messageSends: ["asNumber", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: [],
source: "asString\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: [],
source: "asSymbol\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_asUppercase",[])]);
return $1;
},
args: [],
source: "asUppercase\x0a\x09^self class fromString: self asString asUppercase",
messageSends: ["fromString:", "asUppercase", "asString", "class"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_at_put_",
smalltalk.method({
selector: "at:put:",
category: 'accessing',
fn: function (anIndex,anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_errorReadOnly",
smalltalk.method({
selector: "errorReadOnly",
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self,"_error_",["Object is read-only"]);
return self},
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_printString",[]);
return $1;
},
args: [],
source: "printString\x0a\x09^self asString printString",
messageSends: ["printString", "asString"],
referencedClasses: []
}),
smalltalk.CharacterArray);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_errorReadOnly",[]);
return self},
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.CharacterArray);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["aString"],
source: "fromString: aString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CharacterArray.klass);


smalltalk.addClass('String', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__comma",
smalltalk.method({
selector: ",",
category: 'copying',
fn: function (aString){
var self=this;
return self + aString;
;
return self},
args: ["aString"],
source: ", aString\x0a\x09<return self + aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) < aString._asString();
;
return self},
args: ["aString"],
source: "< aString\x0a\x09<return String(self) < aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) <= aString._asString();
;
return self},
args: ["aString"],
source: "<= aString\x0a\x09<return String(self) <= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aString,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
return String(self) === String(aString);
;
return self},
args: ["aString"],
source: "= aString\x0a\x09aString class = self class ifFalse: [^false].\x0a\x09<return String(self) === String(aString)>",
messageSends: ["ifFalse:", "=", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__eq_eq",
smalltalk.method({
selector: "==",
category: 'comparing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"__eq",[aString]);
return $1;
},
args: ["aString"],
source: "== aString\x0a\x09^self = aString",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) > aString._asString();
;
return self},
args: ["aString"],
source: "> aString\x0a\x09<return String(self) >> aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) >= aString._asString();
;
return self},
args: ["aString"],
source: ">= aString\x0a\x09<return String(self) >>= aString._asString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asJSON\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavaScriptSelector",
smalltalk.method({
selector: "asJavaScriptSelector",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asSelector",[]),"_replace_with_",["^_",""]),"_replace_with_",["_.*",""]);
return $1;
},
args: [],
source: "asJavaScriptSelector\x0a\x09^(self asSelector replace: '^_' with: '') replace: '_.*' with: ''.",
messageSends: ["replace:with:", "asSelector"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
;
return self},
args: [],
source: "asJavascript\x0a\x09<\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asLowercase",
smalltalk.method({
selector: "asLowercase",
category: 'converting',
fn: function (){
var self=this;
return self.toLowerCase();
;
return self},
args: [],
source: "asLowercase\x0a\x09<return self.toLowerCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asNumber",
smalltalk.method({
selector: "asNumber",
category: 'converting',
fn: function (){
var self=this;
return Number(self);
;
return self},
args: [],
source: "asNumber\x0a\x09<return Number(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
category: 'converting',
fn: function (){
var self=this;
var selector;
selector=smalltalk.send("_","__comma",[self]);
selector=smalltalk.send(selector,"_replace_with_",[":","_"]);
selector=smalltalk.send(selector,"_replace_with_",["[+]","_plus"]);
selector=smalltalk.send(selector,"_replace_with_",["-","_minus"]);
selector=smalltalk.send(selector,"_replace_with_",["[*]","_star"]);
selector=smalltalk.send(selector,"_replace_with_",["[/]","_slash"]);
selector=smalltalk.send(selector,"_replace_with_",[">","_gt"]);
selector=smalltalk.send(selector,"_replace_with_",["<","_lt"]);
selector=smalltalk.send(selector,"_replace_with_",["=","_eq"]);
selector=smalltalk.send(selector,"_replace_with_",[",","_comma"]);
selector=smalltalk.send(selector,"_replace_with_",["[@]","_at"]);
return selector;
},
args: [],
source: "asSelector\x0a\x09\x22If you change this method, change smalltalk.convertSelector too (see js/boot.js file)\x22\x0a\x0a\x09| selector |\x0a\x09selector := '_', self.\x0a\x09selector := selector replace: ':' with: '_'.\x0a\x09selector := selector replace: '[+]' with: '_plus'.\x0a\x09selector := selector replace: '-' with: '_minus'.\x0a\x09selector := selector replace: '[*]' with: '_star'.\x0a\x09selector := selector replace: '[/]' with: '_slash'.\x0a\x09selector := selector replace: '>' with: '_gt'.\x0a\x09selector := selector replace: '<' with: '_lt'.\x0a\x09selector := selector replace: '=' with: '_eq'.\x0a\x09selector := selector replace: ',' with: '_comma'.\x0a\x09selector := selector replace: '[@]' with: '_at'.\x0a\x09^selector",
messageSends: [",", "replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asString\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Symbol || Symbol),"_lookup_",[self]);
return $1;
},
args: [],
source: "asSymbol\x0a\x09^Symbol lookup: self",
messageSends: ["lookup:"],
referencedClasses: ["Symbol"]
}),
smalltalk.String);

smalltalk.addMethod(
"_asUppercase",
smalltalk.method({
selector: "asUppercase",
category: 'converting',
fn: function (){
var self=this;
return self.toUpperCase();
;
return self},
args: [],
source: "asUppercase\x0a\x09<return self.toUpperCase()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_asciiValue",
smalltalk.method({
selector: "asciiValue",
category: 'accessing',
fn: function (){
var self=this;
return self.charCodeAt(0);;
;
return self},
args: [],
source: "asciiValue\x0a\x09<return self.charCodeAt(0);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
return String(self).charAt(anIndex - 1) || aBlock();
;
return self},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<return String(self).charAt(anIndex - 1) || aBlock()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
;
return self},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<return self.substring(anIndex - 1, anotherIndex)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_shallowCopy",[]);
return $1;
},
args: [],
source: "deepCopy\x0a\x09^self shallowCopy",
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i));};
;
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i));}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_escaped",
smalltalk.method({
selector: "escaped",
category: 'accessing',
fn: function (){
var self=this;
return escape(self);
;
return self},
args: [],
source: "escaped\x0a\x09<return escape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_includesSubString_",
smalltalk.method({
selector: "includesSubString:",
category: 'testing',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
;
return self},
args: ["subString"],
source: "includesSubString: subString\x0a\x09< return self.indexOf(subString) != -1 >",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_isString",
smalltalk.method({
selector: "isString",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isString\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_join_",
smalltalk.method({
selector: "join:",
category: 'split join',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(stream){
return smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(stream,"_nextPutAll_",[smalltalk.send(each,"_asString",[])]);
}),(function(){
return smalltalk.send(stream,"_nextPutAll_",[self]);
})]);
})]);
return $1;
},
args: ["aCollection"],
source: "join: aCollection \x0a\x09^ String\x0a\x09\x09streamContents: [:stream | aCollection\x0a\x09\x09\x09\x09do: [:each | stream nextPutAll: each asString] \x0a\x09\x09\x09\x09separatedBy: [stream nextPutAll: self]]",
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
"_lineIndicesDo_",
smalltalk.method({
selector: "lineIndicesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
var $1,$2,$3;
var $early={};
try {
var cr;
var lf;
var start;
var sz;
var nextLF;
var nextCR;
start=(1);
sz=smalltalk.send(self,"_size",[]);
cr=smalltalk.send((smalltalk.String || String),"_cr",[]);
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,(1)]);
lf=smalltalk.send((smalltalk.String || String),"_lf",[]);
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,(1)]);
smalltalk.send((function(){
return smalltalk.send(start,"__lt_eq",[sz]);
}),"_whileTrue_",[(function(){
$1=smalltalk.send(smalltalk.send(nextLF,"__eq",[(0)]),"_and_",[(function(){
return smalltalk.send(nextCR,"__eq",[(0)]);
})]);
if(smalltalk.assert($1)){
smalltalk.send(aBlock,"_value_value_value_",[start,sz,sz]);
throw $early=[self];
};
$2=smalltalk.send(smalltalk.send(nextCR,"__eq",[(0)]),"_or_",[(function(){
return smalltalk.send(smalltalk.send((0),"__lt",[nextLF]),"_and_",[(function(){
return smalltalk.send(nextLF,"__lt",[nextCR]);
})]);
})]);
if(smalltalk.assert($2)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextLF,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
$3=smalltalk.send(smalltalk.send((1),"__plus",[nextCR]),"__eq",[nextLF]);
if(smalltalk.assert($3)){
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextLF]);
start=smalltalk.send((1),"__plus",[nextLF]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
nextCR;
nextLF=smalltalk.send(self,"_indexOf_startingAt_",[lf,start]);
return nextLF;
} else {
smalltalk.send(aBlock,"_value_value_value_",[start,smalltalk.send(nextCR,"__minus",[(1)]),nextCR]);
start=smalltalk.send((1),"__plus",[nextCR]);
start;
nextCR=smalltalk.send(self,"_indexOf_startingAt_",[cr,start]);
return nextCR;
};
};
})]);
return self}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [\x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ]]]",
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "ifTrue:", "value:value:value:", "and:", "=", "ifTrue:ifFalse:", "-", "+", "or:", "<", "<="],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
"_lineNumber_",
smalltalk.method({
selector: "lineNumber:",
category: 'split join',
fn: function (anIndex){
var self=this;
var $1,$2;
var $early={};
try {
var lineCount;
lineCount=(0);
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
lineCount=smalltalk.send(lineCount,"__plus",[(1)]);
$1=smalltalk.send(lineCount,"__eq",[anIndex]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters]);
throw $early=[$2];
};
})]);
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [^self copyFrom: start to: endWithoutDelimiters]].\x0a\x09^nil",
messageSends: ["lineIndicesDo:", "ifTrue:", "copyFrom:to:", "=", "+"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_lines",
smalltalk.method({
selector: "lines",
category: 'split join',
fn: function (){
var self=this;
var lines;
lines=smalltalk.send((smalltalk.Array || Array),"_new",[]);
smalltalk.send(self,"_linesDo_",[(function(aLine){
return smalltalk.send(lines,"_add_",[aLine]);
})]);
return lines;
},
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a\x0a\x09| lines |\x0a\x09lines := Array new.\x0a\x09self linesDo: [:aLine | lines add: aLine].\x0a\x09^lines",
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
"_linesDo_",
smalltalk.method({
selector: "linesDo:",
category: 'split join',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_lineIndicesDo_",[(function(start,endWithoutDelimiters,end){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_copyFrom_to_",[start,endWithoutDelimiters])]);
})]);
return self},
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lineIndicesDo: [:start :endWithoutDelimiters :end |\x0a\x09\x09aBlock value: (self copyFrom: start to: endWithoutDelimiters)]",
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_match_",
smalltalk.method({
selector: "match:",
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
;
return self},
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<return self.search(aRegexp) != -1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_matchesOf_",
smalltalk.method({
selector: "matchesOf:",
category: 'regular expressions',
fn: function (aRegularExpression){
var self=this;
return self.match(aRegularExpression);
;
return self},
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a      <return self.match(aRegularExpression)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_printNl",
smalltalk.method({
selector: "printNl",
category: 'printing',
fn: function (){
var self=this;
console.log(self);
;
return self},
args: [],
source: "printNl\x0a\x09<console.log(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("'","__comma",[self]),"__comma",["'"]);
return $1;
},
args: [],
source: "printString\x0a\x09^'''', self, ''''",
messageSends: [","],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'regular expressions',
fn: function (aString,anotherString){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[aString,"g"]),anotherString]);
return $1;
},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_replaceRegexp_with_",
smalltalk.method({
selector: "replaceRegexp:with:",
category: 'regular expressions',
fn: function (aRegexp,aString){
var self=this;
return self.replace(aRegexp, aString);
;
return self},
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<return self.replace(aRegexp, aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reversed",
smalltalk.method({
selector: "reversed",
category: 'converting',
fn: function (){
var self=this;
return self.split("").reverse().join("");
;
return self},
args: [],
source: "reversed\x0a\x09<return self.split(\x22\x22).reverse().join(\x22\x22)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[self]);
return $1;
},
args: [],
source: "shallowCopy\x0a\x09^self class fromString: self",
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
return self.length;
;
return self},
args: [],
source: "size\x0a\x09<return self.length>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_tokenize_",
smalltalk.method({
selector: "tokenize:",
category: 'converting',
fn: function (aString){
var self=this;
return self.split(aString);
;
return self},
args: ["aString"],
source: "tokenize: aString\x0a\x09<return self.split(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth",
smalltalk.method({
selector: "trimBoth",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimBoth_",["\x5cs"]);
return $1;
},
args: [],
source: "trimBoth\x0a\x09^self trimBoth: '\x5cs'",
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimBoth_",
smalltalk.method({
selector: "trimBoth:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_trimLeft_",[separators]),"_trimRight_",[separators]);
return $1;
},
args: ["separators"],
source: "trimBoth: separators\x0a\x0a\x09^(self trimLeft: separators) trimRight: separators",
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft",
smalltalk.method({
selector: "trimLeft",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimLeft_",["\x5cs"]);
return $1;
},
args: [],
source: "trimLeft\x0a\x09^self trimLeft: '\x5cs'",
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimLeft_",
smalltalk.method({
selector: "trimLeft:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("^[","__comma",[separators]),"__comma",["]+"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimLeft: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight",
smalltalk.method({
selector: "trimRight",
category: 'regular expressions',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_trimRight_",["\x5cs"]);
return $1;
},
args: [],
source: "trimRight\x0a\x09^self trimRight: '\x5cs'",
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_trimRight_",
smalltalk.method({
selector: "trimRight:",
category: 'regular expressions',
fn: function (separators){
var self=this;
var $1;
$1=smalltalk.send(self,"_replaceRegexp_with_",[smalltalk.send((smalltalk.RegularExpression || RegularExpression),"_fromString_flag_",[smalltalk.send(smalltalk.send("[","__comma",[separators]),"__comma",["]+$"]),"g"]),""]);
return $1;
},
args: ["separators"],
source: "trimRight: separators\x0a\x0a\x09^self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
"_unescaped",
smalltalk.method({
selector: "unescaped",
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
;
return self},
args: [],
source: "unescaped\x0a\x09<return unescape(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);};
;
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<for(var i=0;i<self.length;i++){aBlock(self.charAt(i), i+1);}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'accessing',
fn: function (){
var self=this;
return '\r';
;
return self},
args: [],
source: "cr\x0a\x09<return '\x5cr'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
;
return self},
args: [],
source: "crlf\x0a\x09<return '\x5cr\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromCharCode_",
smalltalk.method({
selector: "fromCharCode:",
category: 'instance creation',
fn: function (anInteger){
var self=this;
return String.fromCharCode(anInteger);
;
return self},
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<return String.fromCharCode(anInteger)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
;
return self},
args: ["aString"],
source: "fromString: aString\x0a\x09    <return new self.fn(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'accessing',
fn: function (){
var self=this;
return '\n';
;
return self},
args: [],
source: "lf\x0a\x09<return '\x5cn'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
category: 'accessing',
fn: function (){
var self=this;
return ' ';
;
return self},
args: [],
source: "space\x0a\x09<return ' '>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamClass",
smalltalk.method({
selector: "streamClass",
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
},
args: [],
source: "streamClass\x0a\x09    ^StringStream",
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_streamContents_",
smalltalk.method({
selector: "streamContents:",
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var $1;
var stream;
stream=smalltalk.send(smalltalk.send(self,"_streamClass",[]),"_on_",[smalltalk.send((smalltalk.String || String),"_new",[])]);
smalltalk.send(blockWithArg,"_value_",[stream]);
$1=smalltalk.send(stream,"_contents",[]);
return $1;
},
args: ["blockWithArg"],
source: "streamContents: blockWithArg\x0a\x09|stream|\x0a\x09stream := (self streamClass on: String new).\x0a\x09blockWithArg value: stream.\x0a\x09^ stream contents",
messageSends: ["on:", "new", "streamClass", "value:", "contents"],
referencedClasses: ["String"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_tab",
smalltalk.method({
selector: "tab",
category: 'accessing',
fn: function (){
var self=this;
return '\t';
;
return self},
args: [],
source: "tab\x0a\x09<return '\x5ct'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
;
return self},
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<return String.fromCharCode(aUTFCharCode);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Symbol', smalltalk.CharacterArray, [], 'Kernel-Collections');
smalltalk.addMethod(
"__lt",
smalltalk.method({
selector: "<",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "< aSymbol\x0a\x09^self asString < aSymbol asString",
messageSends: ["<", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__lt_eq",
smalltalk.method({
selector: "<=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__lt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "<= aSymbol\x0a\x09^self asString <= aSymbol asString",
messageSends: ["<=", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1,$2;
$1=smalltalk.send(smalltalk.send(aSymbol,"_class",[]),"__eq",[smalltalk.send(self,"_class",[])]);
if(! smalltalk.assert($1)){
return false;
};
$2=smalltalk.send(smalltalk.send(self,"_asString",[]),"__eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $2;
},
args: ["aSymbol"],
source: "= aSymbol\x0a\x09aSymbol class = self class ifFalse: [^false].\x0a\x09^self asString = aSymbol asString",
messageSends: ["ifFalse:", "=", "class", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt",
smalltalk.method({
selector: ">",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: "> aSymbol\x0a\x09^self asString > aSymbol asString",
messageSends: [">", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"__gt_eq",
smalltalk.method({
selector: ">=",
category: 'comparing',
fn: function (aSymbol){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"__gt_eq",[smalltalk.send(aSymbol,"_asString",[])]);
return $1;
},
args: ["aSymbol"],
source: ">= aSymbol\x0a\x09^self asString >= aSymbol asString",
messageSends: [">=", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJSON",
smalltalk.method({
selector: "asJSON",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asJSON",[]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^self asString asJSON",
messageSends: ["asJSON", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asJavascript",
smalltalk.method({
selector: "asJavascript",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("smalltalk.symbolFor(\x22","__comma",[smalltalk.send(self,"_asString",[])]),"__comma",["\x22)"]);
return $1;
},
args: [],
source: "asJavascript\x0a\x09^'smalltalk.symbolFor(\x22', self asString, '\x22)'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSelector",
smalltalk.method({
selector: "asSelector",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_asSelector",[]);
return $1;
},
args: [],
source: "asSelector\x0a\x09^self asString asSelector",
messageSends: ["asSelector", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asString",
smalltalk.method({
selector: "asString",
category: 'converting',
fn: function (){
var self=this;
return self.value;
;
return self},
args: [],
source: "asString\x0a\x09<return self.value>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_asSymbol",
smalltalk.method({
selector: "asSymbol",
category: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asSymbol\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_at_ifAbsent_",
smalltalk.method({
selector: "at:ifAbsent:",
category: 'accessing',
fn: function (anIndex,aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_at_ifAbsent_",[anIndex,aBlock]);
return $1;
},
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09^self asString at: anIndex ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_collect_",
smalltalk.method({
selector: "collect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_collect_",[aBlock]),"_asSymbol",[]);
return $1;
},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^ (self asString collect: aBlock) asSymbol",
messageSends: ["asSymbol", "collect:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_copyFrom_to_",
smalltalk.method({
selector: "copyFrom:to:",
category: 'copying',
fn: function (anIndex,anotherIndex){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_fromString_",[smalltalk.send(smalltalk.send(self,"_asString",[]),"_copyFrom_to_",[anIndex,anotherIndex])]);
return $1;
},
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09^self class fromString: (self asString copyFrom: anIndex to: anotherIndex)",
messageSends: ["fromString:", "copyFrom:to:", "asString", "class"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_deepCopy",
smalltalk.method({
selector: "deepCopy",
category: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "deepCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_detect_",
smalltalk.method({
selector: "detect:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_detect_",[aBlock]);
return $1;
},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ self asString detect: aBlock",
messageSends: ["detect:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self asString do: aBlock",
messageSends: ["do:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_isSymbol",
smalltalk.method({
selector: "isSymbol",
category: 'printing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSymbol\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send("#","__comma",[smalltalk.send(self,"_asString",[])]);
return $1;
},
args: [],
source: "printString\x0a\x09^'#', self asString",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_asString",[]),"_select_",[aBlock]),"_asSymbol",[]);
return $1;
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09^ (self asString select: aBlock) asSymbol",
messageSends: ["asSymbol", "select:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_shallowCopy",
smalltalk.method({
selector: "shallowCopy",
category: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "shallowCopy\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_asString",[]),"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self asString size",
messageSends: ["size", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'evaluating',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_",[self]);
return $1;
},
args: ["anObject"],
source: "value: anObject \x0a\x09^anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_withIndexDo_",
smalltalk.method({
selector: "withIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_asString",[]),"_withIndexDo_",[aBlock]);
return self},
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self asString withIndexDo: aBlock",
messageSends: ["withIndexDo:", "asString"],
referencedClasses: []
}),
smalltalk.Symbol);


smalltalk.addMethod(
"_basicNew",
smalltalk.method({
selector: "basicNew",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "basicNew\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_lookup_",[aString]);
return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09^self lookup: aString",
messageSends: ["lookup:"],
referencedClasses: []
}),
smalltalk.Symbol.klass);

smalltalk.addMethod(
"_lookup_",
smalltalk.method({
selector: "lookup:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.symbolFor(aString);;
;
return self},
args: ["aString"],
source: "lookup: aString\x0a\x09<return smalltalk.symbolFor(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Symbol.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel-Collections');
smalltalk.addMethod(
"__eq",
smalltalk.method({
selector: "=",
category: 'comparing',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"__eq",[smalltalk.send(aCollection,"_class",[])]),"_and_",[(function(){
return smalltalk.send(self["@elements"],"__eq",[smalltalk.send(aCollection,"_asArray",[])]);
})]);
return $1;
},
args: ["aCollection"],
source: "= aCollection\x0a\x09^self class = aCollection class and: [\x0a\x09\x09elements = aCollection asArray]",
messageSends: ["and:", "=", "asArray", "class"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'adding/removing',
fn: function (anObject){
var self=this;

		var found;
		for(var i=0; i < self['@elements'].length; i++) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
;
return self},
args: ["anObject"],
source: "add: anObject\x0a\x09<\x0a\x09\x09var found;\x0a\x09\x09for(var i=0; i < self['@elements'].length; i++) {\x0a\x09\x09\x09if(anObject == self['@elements'][i]) {\x0a\x09\x09\x09\x09found = true;\x0a\x09\x09\x09\x09break;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09if(!found) {self['@elements'].push(anObject)}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
category: 'converting',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_copy",[]);
return $1;
},
args: [],
source: "asArray\x0a\x09^elements copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_detect_ifNone_",
smalltalk.method({
selector: "detect:ifNone:",
category: 'enumerating',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_detect_ifNone_",[aBlock,anotherBlock]);
return $1;
},
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^elements detect: aBlock ifNone: anotherBlock",
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@elements"],"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09elements do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_includes_",
smalltalk.method({
selector: "includes:",
category: 'testing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_includes_",[anObject]);
return $1;
},
args: ["anObject"],
source: "includes: anObject\x0a\x09^elements includes: anObject",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Collection);
self["@elements"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self["@elements"],"_remove_",[anObject]);
return self},
args: ["anObject"],
source: "remove: anObject\x0a\x09elements remove: anObject",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_select_",
smalltalk.method({
selector: "select:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
var $1;
var collection;
collection=smalltalk.send(smalltalk.send(self,"_class",[]),"_new",[]);
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(aBlock,"_value_",[each]);
if(smalltalk.assert($1)){
return smalltalk.send(collection,"_add_",[each]);
};
})]);
return collection;
},
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new. \x0a\x09self do: [:each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each]].\x0a\x09^collection",
messageSends: ["new", "class", "do:", "ifTrue:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@elements"],"_size",[]);
return $1;
},
args: [],
source: "size\x0a\x09^elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('Queue', smalltalk.Object, ['read', 'readIndex', 'write'], 'Kernel-Collections');
smalltalk.addMethod(
"_back_",
smalltalk.method({
selector: "back:",
category: 'accessing',
fn: function (anObject){
var self=this;
smalltalk.send(self["@write"],"_add_",[anObject]);
return self},
args: ["anObject"],
source: "back: anObject\x0a\x09write add: anObject\x0a",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.Queue);

smalltalk.addMethod(
"_front",
smalltalk.method({
selector: "front",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_frontIfAbsent_",[(function(){
return smalltalk.send(self,"_error_",["Cannot read from empty Queue."]);
})]);
return $1;
},
args: [],
source: "front\x0a    ^self frontIfAbsent: [ self error: 'Cannot read from empty Queue.']\x0a",
messageSends: ["frontIfAbsent:", "error:"],
referencedClasses: []
}),
smalltalk.Queue);

smalltalk.addMethod(
"_frontIfAbsent_",
smalltalk.method({
selector: "frontIfAbsent:",
category: 'accessing',
fn: function (aBlock){
var self=this;
var $1,$2,$3;
var $early={};
try {
var result;
result=smalltalk.send(self["@read"],"_at_ifAbsent_",[self["@readIndex"],(function(){
$1=smalltalk.send(self["@write"],"_isEmpty",[]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self["@readIndex"],"__gt",[(1)]);
if(smalltalk.assert($2)){
self["@read"]=[];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
};
$3=smalltalk.send(aBlock,"_value",[]);
throw $early=[$3];
};
self["@read"]=self["@write"];
self["@read"];
self["@readIndex"]=(1);
self["@readIndex"];
self["@write"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
self["@write"];
return smalltalk.send(self["@read"],"_first",[]);
})]);
smalltalk.send(self["@read"],"_at_put_",[self["@readIndex"],nil]);
self["@readIndex"]=smalltalk.send(self["@readIndex"],"__plus",[(1)]);
return result;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["aBlock"],
source: "frontIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write isEmpty ifTrue: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^aBlock value ].\x0a    \x09read := write.\x0a    \x09readIndex := 1.\x0a    \x09write := OrderedCollection new.\x0a    \x09read first ].\x0a    read at: readIndex put: nil.\x0a    readIndex := readIndex + 1.\x0a    ^result\x0a",
messageSends: ["at:ifAbsent:", "ifTrue:", ">", "value", "isEmpty", "new", "first", "at:put:", "+"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
self["@read"]=[];
self["@readIndex"]=(1);
self["@write"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09read := #().\x0a    readIndex := 1.\x0a    write := OrderedCollection new",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.Queue);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel-Collections');
smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.compile(aString);
;
return self},
args: ["aString"],
source: "compile: aString\x0a\x09<return self.compile(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_exec_",
smalltalk.method({
selector: "exec:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
;
return self},
args: ["aString"],
source: "exec: aString\x0a\x09<return self.exec(aString) || nil>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
"_test_",
smalltalk.method({
selector: "test:",
category: 'evaluating',
fn: function (aString){
var self=this;
return self.test(aString);
;
return self},
args: ["aString"],
source: "test: aString\x0a\x09<return self.test(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
"_fromString_",
smalltalk.method({
selector: "fromString:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_fromString_flag_",[aString,""]);
return $1;
},
args: ["aString"],
source: "fromString: aString\x0a\x09    ^self fromString: aString flag: ''",
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
"_fromString_flag_",
smalltalk.method({
selector: "fromString:flag:",
category: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return new RegExp(aString, anotherString);
;
return self},
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<return new RegExp(aString, anotherString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel-Collections');
smalltalk.addMethod(
"_atEnd",
smalltalk.method({
selector: "atEnd",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[smalltalk.send(self,"_size",[])]);
return $1;
},
args: [],
source: "atEnd\x0a\x09^self position = self size",
messageSends: ["=", "size", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_atStart",
smalltalk.method({
selector: "atStart",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_position",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "atStart\x0a\x09^self position = 0",
messageSends: ["=", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "close",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_collection",
smalltalk.method({
selector: "collection",
category: 'accessing',
fn: function (){
var self=this;
return self["@collection"];
},
args: [],
source: "collection\x0a\x09^collection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_streamSize",[])]);
return $1;
},
args: [],
source: "contents\x0a\x09^self collection\x0a\x09    copyFrom: 1 \x0a\x09    to: self streamSize",
messageSends: ["copyFrom:to:", "streamSize", "collection"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send((function(){
return smalltalk.send(self,"_atEnd",[]);
}),"_whileFalse_",[(function(){
return smalltalk.send(aBlock,"_value_",[smalltalk.send(self,"_next",[])]);
})]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09[self atEnd] whileFalse: [aBlock value: self next]",
messageSends: ["whileFalse:", "value:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "flush",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_isEmpty",
smalltalk.method({
selector: "isEmpty",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_size",[]),"__eq",[(0)]);
return $1;
},
args: [],
source: "isEmpty\x0a\x09^self size = 0",
messageSends: ["=", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'reading',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_atEnd",[]);
if(smalltalk.assert($2)){
$1=nil;
} else {
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
$1=smalltalk.send(self["@collection"],"_at_",[smalltalk.send(self,"_position",[])]);
};
return $1;
},
args: [],
source: "next\x0a\x09^self atEnd \x0a\x09\x09ifTrue: [nil]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1. \x0a\x09\x09\x09collection at: self position]",
messageSends: ["ifTrue:ifFalse:", "position:", "+", "position", "at:", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var $1;
var tempCollection;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_class",[]),"_new",[]);
smalltalk.send(anInteger,"_timesRepeat_",[(function(){
$1=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($1)){
return smalltalk.send(tempCollection,"_add_",[smalltalk.send(self,"_next",[])]);
};
})]);
return tempCollection;
},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09    self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "add:", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (anObject){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_put_",[smalltalk.send(self,"_position",[]),anObject]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self},
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_nextPut_",[each]);
})]);
return self},
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [:each |\x0a\x09    self nextPut: each]",
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_peek",
smalltalk.method({
selector: "peek",
category: 'reading',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_collection",[]),"_at_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)])]);
};
return $1;
},
args: [],
source: "peek\x0a\x09^self atEnd ifFalse: [\x0a\x09    self collection at: self position + 1]",
messageSends: ["ifFalse:", "at:", "+", "position", "collection", "atEnd"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position",
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@position"]) == nil || $receiver == undefined){
self["@position"]=(0);
$1=self["@position"];
} else {
$1=self["@position"];
};
return $1;
},
args: [],
source: "position\x0a\x09^position ifNil: [position := 0]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_position_",
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@position"]=anInteger;
return self},
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_reset",
smalltalk.method({
selector: "reset",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[(0)]);
return self},
args: [],
source: "reset\x0a\x09self position: 0",
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_resetContents",
smalltalk.method({
selector: "resetContents",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self,"_reset",[]);
smalltalk.send(self,"_setStreamSize_",[(0)]);
return self},
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setCollection_",
smalltalk.method({
selector: "setCollection:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@collection"]=aCollection;
return self},
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setStreamSize_",
smalltalk.method({
selector: "setStreamSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@streamSize"]=anInteger;
return self},
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_setToEnd",
smalltalk.method({
selector: "setToEnd",
category: 'positioning',
fn: function (){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(self,"_size",[])]);
return self},
args: [],
source: "setToEnd\x0a\x09self position: self size",
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_streamSize",[]);
return $1;
},
args: [],
source: "size\x0a\x09^self streamSize",
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_skip_",
smalltalk.method({
selector: "skip:",
category: 'positioning',
fn: function (anInteger){
var self=this;
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[anInteger]),"_min_max_",[smalltalk.send(self,"_size",[]),(0)])]);
return self},
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
messageSends: ["position:", "min:max:", "size", "+", "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
"_streamSize",
smalltalk.method({
selector: "streamSize",
category: 'accessing',
fn: function (){
var self=this;
return self["@streamSize"];
},
args: [],
source: "streamSize\x0a\x09^streamSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_setCollection_",[aCollection]);
smalltalk.send($2,"_setStreamSize_",[smalltalk.send(aCollection,"_size",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aCollection"],
source: "on: aCollection\x0a\x09    ^self new \x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel-Collections');
smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_cr",[])]);
return $1;
},
args: [],
source: "cr\x0a\x09^self nextPutAll: String cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_crlf",
smalltalk.method({
selector: "crlf",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_crlf",[])]);
return $1;
},
args: [],
source: "crlf\x0a\x09^self nextPutAll: String crlf",
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'writing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_nextPutAll_",[smalltalk.send((smalltalk.String || String),"_lf",[])]);
return $1;
},
args: [],
source: "lf\x0a\x09^self nextPutAll: String lf",
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'reading',
fn: function (anInteger){
var self=this;
var $1;
var tempCollection;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_class",[]),"_new",[]);
smalltalk.send(anInteger,"_timesRepeat_",[(function(){
$1=smalltalk.send(self,"_atEnd",[]);
if(! smalltalk.assert($1)){
tempCollection=smalltalk.send(tempCollection,"__comma",[smalltalk.send(self,"_next",[])]);
return tempCollection;
};
})]);
return tempCollection;
},
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09    self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next]].\x0a\x09^tempCollection",
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", ",", "next", "atEnd"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_nextPutAll_",[aString]);
return self},
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self,"_setCollection_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[(1),smalltalk.send(self,"_position",[])]),"__comma",[aString]),"__comma",[smalltalk.send(smalltalk.send(self,"_collection",[]),"_copyFrom_to_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[(1)]),"__plus",[smalltalk.send(aString,"_size",[])]),smalltalk.send(smalltalk.send(self,"_collection",[]),"_size",[])])])]);
smalltalk.send(self,"_position_",[smalltalk.send(smalltalk.send(self,"_position",[]),"__plus",[smalltalk.send(aString,"_size",[])])]);
smalltalk.send(self,"_setStreamSize_",[smalltalk.send(smalltalk.send(self,"_streamSize",[]),"_max_",[smalltalk.send(self,"_position",[])])]);
return self},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09self setCollection: \x0a\x09    (self collection copyFrom: 1 to: self position),\x0a\x09    aString,\x0a\x09    (self collection copyFrom: (self position + 1 + aString size) to: self collection size).\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
messageSends: ["setCollection:", ",", "copyFrom:to:", "+", "size", "position", "collection", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
"_space",
smalltalk.method({
selector: "space",
category: 'writing',
fn: function (){
var self=this;
smalltalk.send(self,"_nextPut_",[" "]);
return self},
args: [],
source: "space\x0a\x09self nextPut: ' '",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);



smalltalk.addPackage('Kernel-Exceptions', {});
smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return self.context;
;
return self},
args: [],
source: "context\x0a\x09<return self.context>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_isSmalltalkError",
smalltalk.method({
selector: "isSmalltalkError",
category: 'testing',
fn: function (){
var self=this;
return self.smalltalkError === true;
;
return self},
args: [],
source: "isSmalltalkError\x0a\x09<return self.smalltalkError === true>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_jsStack",
smalltalk.method({
selector: "jsStack",
category: 'accessing',
fn: function (){
var self=this;
return self.stack;
;
return self},
args: [],
source: "jsStack\x0a\x09<return self.stack>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return self["@messageText"];
},
args: [],
source: "messageText\x0a\x09^messageText",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_messageText_",
smalltalk.method({
selector: "messageText:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@messageText"]=aString;
return self},
args: ["aString"],
source: "messageText: aString\x0a\x09messageText := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
category: 'signaling',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
;
return self},
args: [],
source: "signal\x0a\x09<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
category: 'signaling',
fn: function (aString){
var self=this;
smalltalk.send(self,"_messageText_",[aString]);
smalltalk.send(self,"_signal",[]);
return self},
args: ["aString"],
source: "signal: aString\x0a\x09self messageText: aString.\x0a\x09self signal",
messageSends: ["messageText:", "signal"],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
"_signal",
smalltalk.method({
selector: "signal",
category: 'instance creation',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_signal",[]);
return $1;
},
args: [],
source: "signal\x0a\x09^self new signal",
messageSends: ["signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
category: 'instance creation',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_signal_",[aString]);
return $1;
},
args: ["aString"],
source: "signal: aString\x0a\x09    ^self new\x0a\x09\x09signal: aString",
messageSends: ["signal:", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return self["@message"];
},
args: [],
source: "message\x0a\x09^message",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_message_",
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (aMessage){
var self=this;
self["@message"]=aMessage;
return self},
args: ["aMessage"],
source: "message: aMessage\x0a\x09message := aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_receiver",[]),"_asString",[]),"__comma",[" does not understand #"]),"__comma",[smalltalk.send(smalltalk.send(self,"_message",[]),"_selector",[])]);
return $1;
},
args: [],
source: "messageText\x0a\x09^self receiver asString, ' does not understand #', self message selector",
messageSends: [",", "selector", "message", "asString", "receiver"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'accessing',
fn: function (){
var self=this;
return self["@receiver"];
},
args: [],
source: "receiver\x0a\x09^receiver",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('NonBooleanReceiver', smalltalk.Error, ['object'], 'Kernel-Exceptions');
smalltalk.addMethod(
"_object",
smalltalk.method({
selector: "object",
category: 'accessing',
fn: function (){
var self=this;
return self["@object"];
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);

smalltalk.addMethod(
"_object_",
smalltalk.method({
selector: "object:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.NonBooleanReceiver);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel-Exceptions');
smalltalk.addMethod(
"_handleError_",
smalltalk.method({
selector: "handleError:",
category: 'error handling',
fn: function (anError){
var self=this;
var $1;
$1=smalltalk.send(anError,"_context",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(self,"_logErrorContext_",[smalltalk.send(anError,"_context",[])]);
};
smalltalk.send(self,"_logError_",[anError]);
return self},
args: ["anError"],
source: "handleError: anError\x0a\x09anError context ifNotNil: [self logErrorContext: anError context].\x0a\x09self logError: anError",
messageSends: ["ifNotNil:", "logErrorContext:", "context", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_log_",
smalltalk.method({
selector: "log:",
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(console,"_log_",[aString]);
return self},
args: ["aString"],
source: "log: aString\x0a\x09console log: aString",
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logContext_",
smalltalk.method({
selector: "logContext:",
category: 'private',
fn: function (aContext){
var self=this;
var $1;
$1=smalltalk.send(aContext,"_home",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(self,"_logContext_",[smalltalk.send(aContext,"_home",[])]);
};
smalltalk.send(self,"_log_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext,"_receiver",[]),"_asString",[]),"__comma",[">>"]),"__comma",[smalltalk.send(aContext,"_selector",[])])]);
return self},
args: ["aContext"],
source: "logContext: aContext\x0a\x09aContext home ifNotNil: [\x0a\x09\x09self logContext: aContext home].\x0a\x09self log: aContext receiver asString, '>>', aContext selector",
messageSends: ["ifNotNil:", "logContext:", "home", "log:", ",", "selector", "asString", "receiver"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logError_",
smalltalk.method({
selector: "logError:",
category: 'private',
fn: function (anError){
var self=this;
smalltalk.send(self,"_log_",[smalltalk.send(anError,"_messageText",[])]);
return self},
args: ["anError"],
source: "logError: anError\x0a\x09self log: anError messageText",
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
"_logErrorContext_",
smalltalk.method({
selector: "logErrorContext:",
category: 'private',
fn: function (aContext){
var self=this;
var $1;
if(($receiver = aContext) == nil || $receiver == undefined){
aContext;
} else {
$1=smalltalk.send(aContext,"_home",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(self,"_logContext_",[smalltalk.send(aContext,"_home",[])]);
};
};
return self},
args: ["aContext"],
source: "logErrorContext: aContext\x0a\x09aContext ifNotNil: [\x0a\x09\x09aContext home ifNotNil: [\x0a\x09\x09\x09self logContext: aContext home]]",
messageSends: ["ifNotNil:", "logContext:", "home"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[]);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
},
args: [],
source: "current\x0a\x09^current ifNil: [current := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_register",[]);
return self},
args: [],
source: "initialize\x0a\x09self register",
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_register",
smalltalk.method({
selector: "register",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler),"_setCurrent_",[smalltalk.send(self,"_new",[])]);
return self},
args: [],
source: "register\x0a\x09ErrorHandler setCurrent: self new",
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
"_setCurrent_",
smalltalk.method({
selector: "setCurrent:",
category: 'accessing',
fn: function (anHandler){
var self=this;
self["@current"]=anHandler;
return self},
args: ["anHandler"],
source: "setCurrent: anHandler\x0a\x09current := anHandler",
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


smalltalk.addPackage('Kernel-Transcript', {});
smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "clear\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "cr\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "open",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
var string;
string=smalltalk.send(anObject,"_asString",[]);
console.log(String(string));
;
return self},
args: ["anObject"],
source: "show: anObject\x0a\x09| string |\x0a\x09string := anObject asString.\x0a\x09<console.log(String(string))>",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript),"_register_",[smalltalk.send(self,"_new",[])]);
return self},
args: [],
source: "initialize\x0a\x09Transcript register: self new",
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_clear",[]);
return self},
args: [],
source: "clear\x0a    self current clear",
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_cr",
smalltalk.method({
selector: "cr",
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_show_",[smalltalk.send((smalltalk.String || String),"_cr",[])]);
return self},
args: [],
source: "cr\x0a    self current show: String cr",
messageSends: ["show:", "cr", "current"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'instance creation',
fn: function (){
var self=this;
return self["@current"];
},
args: [],
source: "current\x0a    ^current",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "new\x0a    self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_open",[]);
return self},
args: [],
source: "open\x0a    self current open",
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
category: 'instance creation',
fn: function (aTranscript){
var self=this;
self["@current"]=aTranscript;
return self},
args: ["aTranscript"],
source: "register: aTranscript\x0a\x09current := aTranscript",
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
category: 'printing',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_show_",[anObject]);
return self},
args: ["anObject"],
source: "show: anObject\x0a    self current show: anObject",
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);


smalltalk.addPackage('Kernel-Announcements', {});
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@announcementClass"];
},
args: [],
source: "announcementClass\x0a\x09^announcementClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_announcementClass_",
smalltalk.method({
selector: "announcementClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@announcementClass"]=aClass;
return self},
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
category: 'accessing',
fn: function (){
var self=this;
return self["@block"];
},
args: [],
source: "block\x0a\x09^block",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@block"]=aBlock;
return self},
args: ["aBlock"],
source: "block: aBlock\x0a\x09block := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_deliver_",
smalltalk.method({
selector: "deliver:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
var $1;
$1=smalltalk.send(self,"_handlesAnnouncement_",[anAnnouncement]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_block",[]),"_value_",[anAnnouncement]);
};
return self},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [self block value: anAnnouncement]",
messageSends: ["ifTrue:", "value:", "block", "handlesAnnouncement:"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
var $1;
$1=smalltalk.send(anAnnouncement,"_isKindOf_",[smalltalk.send(self,"_announcementClass",[])]);
return $1;
},
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09^anAnnouncement isKindOf: self announcementClass",
messageSends: ["isKindOf:", "announcementClass"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
smalltalk.send(self["@subscriptions"],"_do_",[(function(each){
return smalltalk.send(each,"_deliver_",[anAnnouncement]);
})]);
return self},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [:each |\x0a\x09\x09each deliver: anAnnouncement]",
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@subscriptions"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.AnnouncementSubscription || AnnouncementSubscription),"_new",[]);
smalltalk.send($1,"_block_",[aBlock]);
smalltalk.send($1,"_announcementClass_",[aClass]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self["@subscriptions"],"_add_",[$2]);
return self},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09block: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');
smalltalk.SystemAnnouncer.comment="My unique instance #current is the global announcer handling all Amber system-related announces"

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[],smalltalk.Announcer.klass);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.SystemAnnouncement.comment="I am the superclass of all system announcements"
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@theClass"];
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods"


smalltalk.addClass('ClassCommentChanged', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)"


smalltalk.addClass('ClassDefinitionChanged', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassDefinitionChanged.comment="I am emitted when the defintion of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:"


smalltalk.addClass('ClassRemoved', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:"


smalltalk.addClass('ClassRenamed', smalltalk.SystemAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:"


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return self["@method"];
},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
self["@method"]=aCompiledMethod;
return self},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addPackage('FileServer', {});
smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'port', 'basePath', 'util', 'username', 'password'], 'FileServer');
smalltalk.addMethod(
"_basePath",
smalltalk.method({
selector: "basePath",
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@basePath']) == nil || $receiver == undefined) ? (function(){return "./";})() : $receiver;
return self;},
args: [],
source: "basePath\x0a\x09^basePath ifNil: ['./']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_basePath_",
smalltalk.method({
selector: "basePath:",
category: 'accessing',
fn: function (aString){
var self=this;
(self['@basePath']=aString);
return self;},
args: ["aString"],
source: "basePath: aString\x0a\x09basePath := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_checkDirectoryLayout",
smalltalk.method({
selector: "checkDirectoryLayout",
category: 'initialization',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@path'], "_existsSync_", [smalltalk.send(smalltalk.send(self, "_basePath", []), "__comma", ["index.html"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory does not contain index.html"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory does not contain index.html"]);})]));
((($receiver = smalltalk.send(self['@path'], "_existsSync_", [smalltalk.send(smalltalk.send(self, "_basePath", []), "__comma", ["st"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory is missing an \x22st\x22 directory"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory is missing an \x22st\x22 directory"]);})]));
((($receiver = smalltalk.send(self['@path'], "_existsSync_", [smalltalk.send(smalltalk.send(self, "_basePath", []), "__comma", ["js"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory is missing a \x22js\x22 directory"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["Warning: project directory is missing a \x22js\x22 directory"]);})]));
return self;},
args: [],
source: "checkDirectoryLayout\x0a\x09(path existsSync: self basePath, 'index.html') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory does not contain index.html'].\x0a\x09(path existsSync: self basePath, 'st') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing an \x22st\x22 directory'].\x0a\x09(path existsSync: self basePath, 'js') ifFalse: [\x0a\x09\x09console warn: 'Warning: project directory is missing a \x22js\x22 directory'].",
messageSends: ["ifFalse:", "existsSync:", ",", "basePath", "warn:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_handleGETRequest_respondTo_",
smalltalk.method({
selector: "handleGETRequest:respondTo:",
category: 'request handling',
fn: function (aRequest, aResponse){
var self=this;
var uri=nil;
var filename=nil;
(uri=smalltalk.send(smalltalk.send(self['@url'], "_parse_", [smalltalk.send(aRequest, "_url", [])]), "_pathname", []));
(filename=smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]));
smalltalk.send(self['@path'], "_exists_do_", [filename, (function(aBoolean){return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);})() : (function(){return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}), (function(){return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);})]));})]);
return self;},
args: ["aRequest", "aResponse"],
source: "handleGETRequest: aRequest respondTo: aResponse\x0a\x09| uri filename |\x0a\x09uri := (url parse: aRequest url) pathname.\x0a\x09filename := path join: self basePath with: uri.\x0a\x09path exists: filename do: [:aBoolean |\x0a\x09\x09aBoolean\x0a\x09\x09\x09ifFalse: [self respondNotFoundTo: aResponse]\x0a\x09\x09\x09ifTrue: [self respondFileNamed: filename to: aResponse]]",
messageSends: ["pathname", "parse:", "url", "join:with:", "basePath", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondFileNamed:to:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_handleOPTIONSRequest_respondTo_",
smalltalk.method({
selector: "handleOPTIONSRequest:respondTo:",
category: 'request handling',
fn: function (aRequest, aResponse){
var self=this;
smalltalk.send(aResponse, "_writeHead_options_", [(200), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Access-Control-Allow-Origin", "__minus_gt", ["*"]),smalltalk.send("Access-Control-Allow-Methods", "__minus_gt", ["GET, PUT, POST, DELETE, OPTIONS"]),smalltalk.send("Access-Control-Allow-Headers", "__minus_gt", ["Content-Type, Accept"]),smalltalk.send("Content-Length", "__minus_gt", [(0)]),smalltalk.send("Access-Control-Max-Age", "__minus_gt", [(10)])])]);
smalltalk.send(aResponse, "_end", []);
return self;},
args: ["aRequest", "aResponse"],
source: "handleOPTIONSRequest: aRequest respondTo: aResponse\x0a\x09aResponse writeHead: 200 options: #{'Access-Control-Allow-Origin' -> '*'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Methods' -> 'GET, PUT, POST, DELETE, OPTIONS'.\x0a\x09\x09\x09\x09\x09'Access-Control-Allow-Headers' -> 'Content-Type, Accept'.\x0a\x09\x09\x09\x09\x09'Content-Length' -> 0.\x0a\x09\x09\x09\x09\x09'Access-Control-Max-Age' -> 10}.\x0a\x09aResponse end",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_handlePUTRequest_respondTo_",
smalltalk.method({
selector: "handlePUTRequest:respondTo:",
category: 'request handling',
fn: function (aRequest, aResponse){
var self=this;
var file=nil;
var stream=nil;
((($receiver = smalltalk.send(self, "_isAuthenticated_response_", [aRequest, aResponse])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_respondAuthenticationRequiredTo_", [aResponse]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_respondAuthenticationRequiredTo_", [aResponse]);})]));
(file=smalltalk.send(".", "__comma", [smalltalk.send(aRequest, "_url", [])]));
(stream=smalltalk.send(self['@fs'], "_createWriteStream_", [file]));
smalltalk.send(stream, "_on_do_", ["error", (function(error){smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send("Error creating WriteStream for file ", "__comma", [file])]);smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", ["    Did you forget to create the necessary js/ or st/ directory in your project?"]);smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send("    The exact error is: ", "__comma", [error])]);return smalltalk.send(self, "_respondNotCreatedTo_", [aResponse]);})]);
smalltalk.send(stream, "_on_do_", ["close", (function(){return smalltalk.send(self, "_respondCreatedTo_", [aResponse]);})]);
smalltalk.send(aRequest, "_setEncoding_", ["utf8"]);
smalltalk.send(aRequest, "_on_do_", ["data", (function(data){return smalltalk.send(stream, "_write_", [data]);})]);
smalltalk.send(aRequest, "_on_do_", ["end", (function(){return ((($receiver = smalltalk.send(stream, "_writable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_end", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_end", []);})]));})]);
return self;},
args: ["aRequest", "aResponse"],
source: "handlePUTRequest: aRequest respondTo: aResponse\x0a\x09| file stream |\x0a\x09(self isAuthenticated: aRequest response: aResponse)\x0a\x09\x09ifFalse: [self respondAuthenticationRequiredTo: aResponse].\x0a\x0a\x09file := '.', aRequest url.\x0a\x09stream := fs createWriteStream: file.\x0a\x0a\x09stream on: 'error' do: [:error |\x0a\x09\x09console warn: 'Error creating WriteStream for file ', file.\x0a\x09\x09console warn: '    Did you forget to create the necessary js/ or st/ directory in your project?'.\x0a\x09\x09console warn: '    The exact error is: ', error.\x0a\x09\x09self respondNotCreatedTo: aResponse].\x0a\x0a\x09stream on: 'close' do: [\x0a\x09\x09self respondCreatedTo: aResponse].\x0a\x0a\x09aRequest setEncoding: 'utf8'.\x0a\x09aRequest on: 'data' do: [:data |\x0a\x09\x09stream write: data].\x0a\x0a\x09aRequest on: 'end' do: [\x0a\x09\x09stream writable ifTrue: [stream end]]",
messageSends: ["ifFalse:", "isAuthenticated:response:", "respondAuthenticationRequiredTo:", ",", "url", "createWriteStream:", "on:do:", "warn:", "respondNotCreatedTo:", "respondCreatedTo:", "setEncoding:", "write:", "ifTrue:", "writable", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_handleRequest_respondTo_",
smalltalk.method({
selector: "handleRequest:respondTo:",
category: 'request handling',
fn: function (aRequest, aResponse){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["PUT"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);})]));
((($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["GET"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);})]));
((($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["OPTIONS"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handleOPTIONSRequest_respondTo_", [aRequest, aResponse]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_handleOPTIONSRequest_respondTo_", [aRequest, aResponse]);})]));
return self;},
args: ["aRequest", "aResponse"],
source: "handleRequest: aRequest respondTo: aResponse\x0a\x09aRequest method = 'PUT'\x0a\x09\x09ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'GET'\x0a\x09\x09ifTrue:[self handleGETRequest: aRequest respondTo: aResponse].\x0a\x09aRequest method = 'OPTIONS'\x0a\x09\x09ifTrue:[self handleOPTIONSRequest: aRequest respondTo: aResponse]",
messageSends: ["ifTrue:", "=", "method", "handlePUTRequest:respondTo:", "handleGETRequest:respondTo:", "handleOPTIONSRequest:respondTo:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((typeof super_ == 'undefined' ? nil : super_), "_initialize", []);
(self['@path']=smalltalk.send(self, "_require_", ["path"]));
(self['@http']=smalltalk.send(self, "_require_", ["http"]));
(self['@fs']=smalltalk.send(self, "_require_", ["fs"]));
(self['@util']=smalltalk.send(self, "_require_", ["util"]));
(self['@url']=smalltalk.send(self, "_require_", ["url"]));
(self['@port']=smalltalk.send(smalltalk.send(self, "_class", []), "_defaultPort", []));
(self['@username']=nil);
(self['@password']=nil);
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09path := self require: 'path'.\x0a\x09http := self require: 'http'.\x0a\x09fs := self require: 'fs'.\x0a\x09util := self require: 'util'.\x0a\x09url := self require: 'url'.\x0a\x09port := self class defaultPort.\x0a\x09username := nil.\x0a\x09password := nil.",
messageSends: ["initialize", "require:", "defaultPort", "class"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_isAuthenticated_response_",
smalltalk.method({
selector: "isAuthenticated:response:",
category: 'private',
fn: function (aRequest, aResponse){
var self=this;
var $early={};
try{var header=nil;
var token=nil;
var auth=nil;
var parts=nil;
((($receiver = smalltalk.send(smalltalk.send(self['@username'], "_isNil", []), "_and_", [(function(){return smalltalk.send(self['@password'], "_isNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[true]})();})]));
(header=(($receiver = smalltalk.send(smalltalk.send(aRequest, "_headers", []), "_at_", ["authorization"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver);
((($receiver = smalltalk.send(header, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[false]})();})() : (function(){(token=(($receiver = smalltalk.send(header, "_tokenize_", [" "])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver);auth = new Buffer(token[1], 'base64').toString();(parts=smalltalk.send(auth, "_tokenize_", [":"]));return ((($receiver = smalltalk.send(smalltalk.send(self['@username'], "__eq", [smalltalk.send(parts, "_at_", [(1)])]), "_and_", [(function(){return smalltalk.send(self['@password'], "__eq", [smalltalk.send(parts, "_at_", [(2)])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[true]})();})() : (function(){return (function(){throw $early=[false]})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw $early=[true]})();}), (function(){return (function(){throw $early=[false]})();})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw $early=[false]})();}), (function(){(token=(($receiver = smalltalk.send(header, "_tokenize_", [" "])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver);auth = new Buffer(token[1], 'base64').toString();(parts=smalltalk.send(auth, "_tokenize_", [":"]));return ((($receiver = smalltalk.send(smalltalk.send(self['@username'], "__eq", [smalltalk.send(parts, "_at_", [(1)])]), "_and_", [(function(){return smalltalk.send(self['@password'], "__eq", [smalltalk.send(parts, "_at_", [(2)])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[true]})();})() : (function(){return (function(){throw $early=[false]})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw $early=[true]})();}), (function(){return (function(){throw $early=[false]})();})]));})]));
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aRequest", "aResponse"],
source: "isAuthenticated: aRequest response: aResponse\x0a\x09\x22Basic HTTP Auth: http://stackoverflow.com/a/5957629/293175\x0a\x09 and https://gist.github.com/1686663\x22\x0a\x09| header token auth parts|\x0a\x0a\x09(username isNil and: [password isNil]) ifTrue: [^true].\x0a\x0a\x09\x22get authentication header\x22\x0a\x09header := (aRequest headers at: 'authorization') ifNil:[''].\x0a\x09(header isEmpty)\x0a\x09ifTrue: [^false]\x0a\x09ifFalse: [\x0a\x09\x09\x22get authentication token\x22\x0a\x09\x09token := (header tokenize: ' ') ifNil:[''].\x0a\x09\x09\x22convert back from base64\x22\x0a\x09\x09<auth = new Buffer(token[1], 'base64').toString()>.\x0a\x09\x09\x22split token at colon\x22\x0a\x09\x09parts := auth tokenize: ':'.\x0a\x0a\x09\x09((username = (parts at: 1)) and: [password = (parts at: 2)])\x0a\x09\x09\x09ifTrue: [^true]\x0a\x09\x09\x09ifFalse: [^false]\x0a\x09].",
messageSends: ["ifTrue:", "and:", "isNil", "ifNil:", "at:", "headers", "ifTrue:ifFalse:", "isEmpty", "tokenize:", "="],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_password_",
smalltalk.method({
selector: "password:",
category: 'accessing',
fn: function (aPassword){
var self=this;
(self['@password']=aPassword);
return self;},
args: ["aPassword"],
source: "password: aPassword\x0a\x09password := aPassword.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_port",
smalltalk.method({
selector: "port",
category: 'accessing',
fn: function (){
var self=this;
return self['@port'];
return self;},
args: [],
source: "port\x0a\x09^port",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_port_",
smalltalk.method({
selector: "port:",
category: 'accessing',
fn: function (aNumber){
var self=this;
(self['@port']=aNumber);
return self;},
args: ["aNumber"],
source: "port: aNumber\x0a\x09port := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_require_",
smalltalk.method({
selector: "require:",
category: 'private',
fn: function (aModuleString){
var self=this;
return smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", [aModuleString]);
return self;},
args: ["aModuleString"],
source: "require: aModuleString\x0a\x09\x22call to the require function\x22\x0a\x09^require value: aModuleString",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondAuthenticationRequiredTo_",
smalltalk.method({
selector: "respondAuthenticationRequiredTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(401), smalltalk.HashedCollection._fromPairs_([smalltalk.send("WWW-Authenticate", "__minus_gt", ["Basic realm=\x22Secured Developer Area\x22"])])]);smalltalk.send($rec, "_write_", ["<html><body>Authentication needed</body></html>"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondAuthenticationRequiredTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 401 options: #{'WWW-Authenticate' -> 'Basic realm=\x22Secured Developer Area\x22'};\x0a\x09\x09write: '<html><body>Authentication needed</body></html>';\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondCreatedTo_",
smalltalk.method({
selector: "respondCreatedTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(201), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", ["text/plain"]),smalltalk.send("Access-Control-Allow-Origin", "__minus_gt", ["*"])])]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 201 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondFileNamed_to_",
smalltalk.method({
selector: "respondFileNamed:to:",
category: 'request handling',
fn: function (aFilename, aResponse){
var self=this;
var type=nil;
var filename=nil;
(filename=aFilename);
((($receiver = smalltalk.send(smalltalk.send(self['@fs'], "_statSync_", [aFilename]), "_isDirectory", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (filename=smalltalk.send(filename, "__comma", ["index.html"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (filename=smalltalk.send(filename, "__comma", ["index.html"]));})]));
smalltalk.send(self['@fs'], "_readFile_do_", [filename, (function(ex, file){return ((($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(filename, "__comma", [" does not exist"])]);return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);})() : (function(){(type=smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]));((($receiver = smalltalk.send(type, "__eq", ["application/javascript"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (type=smalltalk.send(type, "__comma", [";charset=utf-8"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (type=smalltalk.send(type, "__comma", [";charset=utf-8"]));})]));return (function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", [type])])]);smalltalk.send($rec, "_write_encoding_", [file, "binary"]);return smalltalk.send($rec, "_end", []);})(aResponse);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(filename, "__comma", [" does not exist"])]);return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}), (function(){(type=smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]));((($receiver = smalltalk.send(type, "__eq", ["application/javascript"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (type=smalltalk.send(type, "__comma", [";charset=utf-8"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (type=smalltalk.send(type, "__comma", [";charset=utf-8"]));})]));return (function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", [type])])]);smalltalk.send($rec, "_write_encoding_", [file, "binary"]);return smalltalk.send($rec, "_end", []);})(aResponse);})]));})]);
return self;},
args: ["aFilename", "aResponse"],
source: "respondFileNamed: aFilename to: aResponse\x0a\x09| type filename |\x0a\x0a\x09filename := aFilename.\x0a\x09(fs statSync: aFilename) isDirectory ifTrue: [\x0a        \x09filename := filename, 'index.html'].\x0a\x0a\x09fs readFile: filename do: [:ex :file |\x0a\x09\x09ex notNil \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09console log: filename, ' does not exist'.\x0a\x09\x09\x09\x09self respondInternalErrorTo: aResponse]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09type := self class mimeTypeFor: filename.\x0a\x09\x09\x09\x09type = 'application/javascript'\x0a\x09\x09\x09\x09\x09ifTrue: [ type:=type,';charset=utf-8' ].\x0a\x09\x09\x09\x09aResponse \x0a\x09\x09\x09\x09\x09writeHead: 200 options:  #{'Content-Type' -> type};\x0a\x09\x09\x09\x09\x09write: file encoding: 'binary';\x0a\x09\x09\x09\x09\x09end]]",
messageSends: ["ifTrue:", "isDirectory", "statSync:", ",", "readFile:do:", "ifTrue:ifFalse:", "notNil", "log:", "respondInternalErrorTo:", "mimeTypeFor:", "class", "=", "writeHead:options:", "->", "write:encoding:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondInternalErrorTo_",
smalltalk.method({
selector: "respondInternalErrorTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(500), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", ["text/plain"])])]);smalltalk.send($rec, "_write_", ["500 Internal server error"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondInternalErrorTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 500 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '500 Internal server error';\x0a\x09\x09end",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondNotCreatedTo_",
smalltalk.method({
selector: "respondNotCreatedTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(400), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", ["text/plain"])])]);smalltalk.send($rec, "_write_", ["File could not be created. Did you forget to create the st/js directories on the server?"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondNotCreatedTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 400 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: 'File could not be created. Did you forget to create the st/js directories on the server?';\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondNotFoundTo_",
smalltalk.method({
selector: "respondNotFoundTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(404), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", ["text/plain"])])]);smalltalk.send($rec, "_write_", ["404 Not found"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondNotFoundTo: aResponse\x0a\x09aResponse \x0a\x09\x09writeHead: 404 options: #{'Content-Type' -> 'text/plain'};\x0a\x09\x09write: '404 Not found';\x0a\x09\x09end",
messageSends: ["writeHead:options:", "->", "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_respondOKTo_",
smalltalk.method({
selector: "respondOKTo:",
category: 'request handling',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.HashedCollection._fromPairs_([smalltalk.send("Content-Type", "__minus_gt", ["text/plain"]),smalltalk.send("Access-Control-Allow-Origin", "__minus_gt", ["*"])])]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;},
args: ["aResponse"],
source: "respondOKTo: aResponse\x0a\x09aResponse\x0a\x09\x09writeHead: 200 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};\x0a\x09\x09end.",
messageSends: ["writeHead:options:", "->", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'starting',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_on_do_", ["error", (function(error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Error starting server: ", "__comma", [error])]);})]);smalltalk.send($rec, "_on_do_", ["listening", (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Starting file server on port ", "__comma", [smalltalk.send(smalltalk.send(self, "_port", []), "_asString", [])])]);})]);return smalltalk.send($rec, "_listen_", [smalltalk.send(self, "_port", [])]);})(smalltalk.send(self['@http'], "_createServer_", [(function(request, response){return smalltalk.send(self, "_handleRequest_respondTo_", [request, response]);})]));
return self;},
args: [],
source: "start\x0a\x09(http createServer: [:request :response |\x0a\x09      self handleRequest: request respondTo: response])\x0a\x09      on: 'error' do: [:error | console log: 'Error starting server: ', error];\x0a\x09      on: 'listening' do: [console log: 'Starting file server on port ', self port asString];\x0a\x09      listen: self port.",
messageSends: ["on:do:", "log:", ",", "asString", "port", "listen:", "createServer:", "handleRequest:respondTo:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_startOn_",
smalltalk.method({
selector: "startOn:",
category: 'starting',
fn: function (aPort){
var self=this;
smalltalk.send(self, "_port_", [aPort]);
smalltalk.send(self, "_start", []);
return self;},
args: ["aPort"],
source: "startOn: aPort\x0a\x09self port: aPort.\x0a\x09self start",
messageSends: ["port:", "start"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_username_",
smalltalk.method({
selector: "username:",
category: 'accessing',
fn: function (aUsername){
var self=this;
(self['@username']=aUsername);
return self;},
args: ["aUsername"],
source: "username: aUsername\x0a\x09username := aUsername.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_username_password_",
smalltalk.method({
selector: "username:password:",
category: 'accessing',
fn: function (aUsername, aPassword){
var self=this;
(self['@username']=aUsername);
(self['@password']=aPassword);
return self;},
args: ["aUsername", "aPassword"],
source: "username: aUsername password: aPassword\x0a\x09username := aUsername.\x0a\x09password := aPassword.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
"_writeData_toFileNamed_",
smalltalk.method({
selector: "writeData:toFileNamed:",
category: 'private',
fn: function (data, aFilename){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aFilename]);
return self;},
args: ["data", "aFilename"],
source: "writeData: data toFileNamed: aFilename\x0a\x09console log: aFilename",
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['mimeTypes'];
smalltalk.addMethod(
"_commandLineActions",
smalltalk.method({
selector: "commandLineActions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("-p", "__minus_gt", [(function(fileServer, value){return smalltalk.send(fileServer, "_port_", [value]);})]),smalltalk.send("--username", "__minus_gt", [(function(fileServer, value){return smalltalk.send(fileServer, "_username_", [value]);})]),smalltalk.send("--password", "__minus_gt", [(function(fileServer, value){return smalltalk.send(fileServer, "_password_", [value]);})])]);
return self;},
args: [],
source: "commandLineActions\x0a\x09^#{\x0a\x09\x09'-p' -> [:fileServer :value | fileServer port: value].\x0a\x09\x09'--username' -> [:fileServer :value | fileServer username: value].\x0a\x09\x09'--password' -> [:fileServer :value | fileServer password: value]\x0a\x09}",
messageSends: ["->", "port:", "username:", "password:"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_createServerWithArguments_",
smalltalk.method({
selector: "createServerWithArguments:",
category: 'initialization',
fn: function (options){
var self=this;
var $early={};
try{var server=nil;
var actions=nil;
var popFront=nil;
var front=nil;
var optionName=nil;
var optionValue=nil;
(actions=smalltalk.send((smalltalk.FileServer || FileServer), "_commandLineActions", []));
(popFront=(function(args){(front=smalltalk.send(args, "_first", []));smalltalk.send(args, "_remove_", [front]);return front;}));
(server=smalltalk.send(self, "_new", []));
smalltalk.send(options, "_ifEmpty_", [(function(){return (function(){throw $early=[server]})();})]);
((($receiver = smalltalk.send(smalltalk.send(options, "_size", []), "_even", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Using default parameters. Not enough arguments: ", "__comma", [options])]);return (function(){throw $early=[server]})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Using default parameters. Not enough arguments: ", "__comma", [options])]);return (function(){throw $early=[server]})();})]));
(function(){while((function(){return smalltalk.send(options, "_notEmpty", []);})()) {(function(){(optionName=smalltalk.send(popFront, "_value_", [options]));(optionValue=smalltalk.send(popFront, "_value_", [options]));return smalltalk.send(smalltalk.send(actions, "_at_ifAbsent_", [optionName, (function(){return nil;})]), "_value_value_", [server, optionValue]);})()}})();
return server;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["options"],
source: "createServerWithArguments: options\x0a\x09| server actions popFront front optionName optionValue |\x0a\x09actions := FileServer commandLineActions.\x0a\x0a\x09popFront := [:args |\x0a\x09\x09front := args first.\x0a\x09\x09args remove: front.\x0a\x09\x09front].\x0a\x09server := self new.\x0a\x0a\x09options ifEmpty: [^server].\x0a\x09(options size even) ifFalse: [console log: 'Using default parameters. Not enough arguments: ' , options. ^server].\x0a\x0a\x09[options notEmpty] whileTrue: [\x0a\x09\x09optionName  := popFront value: options.\x0a\x09\x09optionValue := popFront value: options.\x0a\x09\x09(actions at: optionName ifAbsent: []) value: server value: optionValue.\x0a\x09].\x0a\x0a\x09^server.",
messageSends: ["commandLineActions", "first", "remove:", "new", "ifEmpty:", "ifFalse:", "even", "size", "log:", ",", "whileTrue:", "notEmpty", "value:", "value:value:", "at:ifAbsent:"],
referencedClasses: ["FileServer"]
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_defaultMimeTypes",
smalltalk.method({
selector: "defaultMimeTypes",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("%", "__minus_gt", ["application/x-trash"]),smalltalk.send("323", "__minus_gt", ["text/h323"]),smalltalk.send("abw", "__minus_gt", ["application/x-abiword"]),smalltalk.send("ai", "__minus_gt", ["application/postscript"]),smalltalk.send("aif", "__minus_gt", ["audio/x-aiff"]),smalltalk.send("aifc", "__minus_gt", ["audio/x-aiff"]),smalltalk.send("aiff", "__minus_gt", ["audio/x-aiff"]),smalltalk.send("alc", "__minus_gt", ["chemical/x-alchemy"]),smalltalk.send("art", "__minus_gt", ["image/x-jg"]),smalltalk.send("asc", "__minus_gt", ["text/plain"]),smalltalk.send("asf", "__minus_gt", ["video/x-ms-asf"]),smalltalk.send("asn", "__minus_gt", ["chemical/x-ncbi-asn1-spec"]),smalltalk.send("aso", "__minus_gt", ["chemical/x-ncbi-asn1-binary"]),smalltalk.send("asx", "__minus_gt", ["video/x-ms-asf"]),smalltalk.send("au", "__minus_gt", ["audio/basic"]),smalltalk.send("avi", "__minus_gt", ["video/x-msvideo"]),smalltalk.send("b", "__minus_gt", ["chemical/x-molconn-Z"]),smalltalk.send("bak", "__minus_gt", ["application/x-trash"]),smalltalk.send("bat", "__minus_gt", ["application/x-msdos-program"]),smalltalk.send("bcpio", "__minus_gt", ["application/x-bcpio"]),smalltalk.send("bib", "__minus_gt", ["text/x-bibtex"]),smalltalk.send("bin", "__minus_gt", ["application/octet-stream"]),smalltalk.send("bmp", "__minus_gt", ["image/x-ms-bmp"]),smalltalk.send("book", "__minus_gt", ["application/x-maker"]),smalltalk.send("bsd", "__minus_gt", ["chemical/x-crossfire"]),smalltalk.send("c", "__minus_gt", ["text/x-csrc"]),smalltalk.send("c++", "__minus_gt", ["text/x-c++src"]),smalltalk.send("c3d", "__minus_gt", ["chemical/x-chem3d"]),smalltalk.send("cac", "__minus_gt", ["chemical/x-cache"]),smalltalk.send("cache", "__minus_gt", ["chemical/x-cache"]),smalltalk.send("cascii", "__minus_gt", ["chemical/x-cactvs-binary"]),smalltalk.send("cat", "__minus_gt", ["application/vnd.ms-pki.seccat"]),smalltalk.send("cbin", "__minus_gt", ["chemical/x-cactvs-binary"]),smalltalk.send("cc", "__minus_gt", ["text/x-c++src"]),smalltalk.send("cdf", "__minus_gt", ["application/x-cdf"]),smalltalk.send("cdr", "__minus_gt", ["image/x-coreldraw"]),smalltalk.send("cdt", "__minus_gt", ["image/x-coreldrawtemplate"]),smalltalk.send("cdx", "__minus_gt", ["chemical/x-cdx"]),smalltalk.send("cdy", "__minus_gt", ["application/vnd.cinderella"]),smalltalk.send("cef", "__minus_gt", ["chemical/x-cxf"]),smalltalk.send("cer", "__minus_gt", ["chemical/x-cerius"]),smalltalk.send("chm", "__minus_gt", ["chemical/x-chemdraw"]),smalltalk.send("chrt", "__minus_gt", ["application/x-kchart"]),smalltalk.send("cif", "__minus_gt", ["chemical/x-cif"]),smalltalk.send("class", "__minus_gt", ["application/java-vm"]),smalltalk.send("cls", "__minus_gt", ["text/x-tex"]),smalltalk.send("cmdf", "__minus_gt", ["chemical/x-cmdf"]),smalltalk.send("cml", "__minus_gt", ["chemical/x-cml"]),smalltalk.send("cod", "__minus_gt", ["application/vnd.rim.cod"]),smalltalk.send("com", "__minus_gt", ["application/x-msdos-program"]),smalltalk.send("cpa", "__minus_gt", ["chemical/x-compass"]),smalltalk.send("cpio", "__minus_gt", ["application/x-cpio"]),smalltalk.send("cpp", "__minus_gt", ["text/x-c++src"]),smalltalk.send("cpt", "__minus_gt", ["image/x-corelphotopaint"]),smalltalk.send("crl", "__minus_gt", ["application/x-pkcs7-crl"]),smalltalk.send("crt", "__minus_gt", ["application/x-x509-ca-cert"]),smalltalk.send("csf", "__minus_gt", ["chemical/x-cache-csf"]),smalltalk.send("csh", "__minus_gt", ["text/x-csh"]),smalltalk.send("csm", "__minus_gt", ["chemical/x-csml"]),smalltalk.send("csml", "__minus_gt", ["chemical/x-csml"]),smalltalk.send("css", "__minus_gt", ["text/css"]),smalltalk.send("csv", "__minus_gt", ["text/comma-separated-values"]),smalltalk.send("ctab", "__minus_gt", ["chemical/x-cactvs-binary"]),smalltalk.send("ctx", "__minus_gt", ["chemical/x-ctx"]),smalltalk.send("cu", "__minus_gt", ["application/cu-seeme"]),smalltalk.send("cub", "__minus_gt", ["chemical/x-gaussian-cube"]),smalltalk.send("cxf", "__minus_gt", ["chemical/x-cxf"]),smalltalk.send("cxx", "__minus_gt", ["text/x-c++src"]),smalltalk.send("dat", "__minus_gt", ["chemical/x-mopac-input"]),smalltalk.send("dcr", "__minus_gt", ["application/x-director"]),smalltalk.send("deb", "__minus_gt", ["application/x-debian-package"]),smalltalk.send("dif", "__minus_gt", ["video/dv"]),smalltalk.send("diff", "__minus_gt", ["text/plain"]),smalltalk.send("dir", "__minus_gt", ["application/x-director"]),smalltalk.send("djv", "__minus_gt", ["image/vnd.djvu"]),smalltalk.send("djvu", "__minus_gt", ["image/vnd.djvu"]),smalltalk.send("dl", "__minus_gt", ["video/dl"]),smalltalk.send("dll", "__minus_gt", ["application/x-msdos-program"]),smalltalk.send("dmg", "__minus_gt", ["application/x-apple-diskimage"]),smalltalk.send("dms", "__minus_gt", ["application/x-dms"]),smalltalk.send("doc", "__minus_gt", ["application/msword"]),smalltalk.send("dot", "__minus_gt", ["application/msword"]),smalltalk.send("dv", "__minus_gt", ["video/dv"]),smalltalk.send("dvi", "__minus_gt", ["application/x-dvi"]),smalltalk.send("dx", "__minus_gt", ["chemical/x-jcamp-dx"]),smalltalk.send("dxr", "__minus_gt", ["application/x-director"]),smalltalk.send("emb", "__minus_gt", ["chemical/x-embl-dl-nucleotide"]),smalltalk.send("embl", "__minus_gt", ["chemical/x-embl-dl-nucleotide"]),smalltalk.send("ent", "__minus_gt", ["chemical/x-pdb"]),smalltalk.send("eps", "__minus_gt", ["application/postscript"]),smalltalk.send("etx", "__minus_gt", ["text/x-setext"]),smalltalk.send("exe", "__minus_gt", ["application/x-msdos-program"]),smalltalk.send("ez", "__minus_gt", ["application/andrew-inset"]),smalltalk.send("fb", "__minus_gt", ["application/x-maker"]),smalltalk.send("fbdoc", "__minus_gt", ["application/x-maker"]),smalltalk.send("fch", "__minus_gt", ["chemical/x-gaussian-checkpoint"]),smalltalk.send("fchk", "__minus_gt", ["chemical/x-gaussian-checkpoint"]),smalltalk.send("fig", "__minus_gt", ["application/x-xfig"]),smalltalk.send("flac", "__minus_gt", ["application/x-flac"]),smalltalk.send("fli", "__minus_gt", ["video/fli"]),smalltalk.send("fm", "__minus_gt", ["application/x-maker"]),smalltalk.send("frame", "__minus_gt", ["application/x-maker"]),smalltalk.send("frm", "__minus_gt", ["application/x-maker"]),smalltalk.send("gal", "__minus_gt", ["chemical/x-gaussian-log"]),smalltalk.send("gam", "__minus_gt", ["chemical/x-gamess-input"]),smalltalk.send("gamin", "__minus_gt", ["chemical/x-gamess-input"]),smalltalk.send("gau", "__minus_gt", ["chemical/x-gaussian-input"]),smalltalk.send("gcd", "__minus_gt", ["text/x-pcs-gcd"]),smalltalk.send("gcf", "__minus_gt", ["application/x-graphing-calculator"]),smalltalk.send("gcg", "__minus_gt", ["chemical/x-gcg8-sequence"]),smalltalk.send("gen", "__minus_gt", ["chemical/x-genbank"]),smalltalk.send("gf", "__minus_gt", ["application/x-tex-gf"]),smalltalk.send("gif", "__minus_gt", ["image/gif"]),smalltalk.send("gjc", "__minus_gt", ["chemical/x-gaussian-input"]),smalltalk.send("gjf", "__minus_gt", ["chemical/x-gaussian-input"]),smalltalk.send("gl", "__minus_gt", ["video/gl"]),smalltalk.send("gnumeric", "__minus_gt", ["application/x-gnumeric"]),smalltalk.send("gpt", "__minus_gt", ["chemical/x-mopac-graph"]),smalltalk.send("gsf", "__minus_gt", ["application/x-font"]),smalltalk.send("gsm", "__minus_gt", ["audio/x-gsm"]),smalltalk.send("gtar", "__minus_gt", ["application/x-gtar"]),smalltalk.send("h", "__minus_gt", ["text/x-chdr"]),smalltalk.send("h++", "__minus_gt", ["text/x-c++hdr"]),smalltalk.send("hdf", "__minus_gt", ["application/x-hdf"]),smalltalk.send("hh", "__minus_gt", ["text/x-c++hdr"]),smalltalk.send("hin", "__minus_gt", ["chemical/x-hin"]),smalltalk.send("hpp", "__minus_gt", ["text/x-c++hdr"]),smalltalk.send("hqx", "__minus_gt", ["application/mac-binhex40"]),smalltalk.send("hs", "__minus_gt", ["text/x-haskell"]),smalltalk.send("hta", "__minus_gt", ["application/hta"]),smalltalk.send("htc", "__minus_gt", ["text/x-component"]),smalltalk.send("htm", "__minus_gt", ["text/html"]),smalltalk.send("html", "__minus_gt", ["text/html"]),smalltalk.send("hxx", "__minus_gt", ["text/x-c++hdr"]),smalltalk.send("ica", "__minus_gt", ["application/x-ica"]),smalltalk.send("ice", "__minus_gt", ["x-conference/x-cooltalk"]),smalltalk.send("ico", "__minus_gt", ["image/x-icon"]),smalltalk.send("ics", "__minus_gt", ["text/calendar"]),smalltalk.send("icz", "__minus_gt", ["text/calendar"]),smalltalk.send("ief", "__minus_gt", ["image/ief"]),smalltalk.send("iges", "__minus_gt", ["model/iges"]),smalltalk.send("igs", "__minus_gt", ["model/iges"]),smalltalk.send("iii", "__minus_gt", ["application/x-iphone"]),smalltalk.send("inp", "__minus_gt", ["chemical/x-gamess-input"]),smalltalk.send("ins", "__minus_gt", ["application/x-internet-signup"]),smalltalk.send("iso", "__minus_gt", ["application/x-iso9660-image"]),smalltalk.send("isp", "__minus_gt", ["application/x-internet-signup"]),smalltalk.send("ist", "__minus_gt", ["chemical/x-isostar"]),smalltalk.send("istr", "__minus_gt", ["chemical/x-isostar"]),smalltalk.send("jad", "__minus_gt", ["text/vnd.sun.j2me.app-descriptor"]),smalltalk.send("jar", "__minus_gt", ["application/java-archive"]),smalltalk.send("java", "__minus_gt", ["text/x-java"]),smalltalk.send("jdx", "__minus_gt", ["chemical/x-jcamp-dx"]),smalltalk.send("jmz", "__minus_gt", ["application/x-jmol"]),smalltalk.send("jng", "__minus_gt", ["image/x-jng"]),smalltalk.send("jnlp", "__minus_gt", ["application/x-java-jnlp-file"]),smalltalk.send("jpe", "__minus_gt", ["image/jpeg"]),smalltalk.send("jpeg", "__minus_gt", ["image/jpeg"]),smalltalk.send("jpg", "__minus_gt", ["image/jpeg"]),smalltalk.send("js", "__minus_gt", ["application/javascript"]),smalltalk.send("kar", "__minus_gt", ["audio/midi"]),smalltalk.send("key", "__minus_gt", ["application/pgp-keys"]),smalltalk.send("kil", "__minus_gt", ["application/x-killustrator"]),smalltalk.send("kin", "__minus_gt", ["chemical/x-kinemage"]),smalltalk.send("kpr", "__minus_gt", ["application/x-kpresenter"]),smalltalk.send("kpt", "__minus_gt", ["application/x-kpresenter"]),smalltalk.send("ksp", "__minus_gt", ["application/x-kspread"]),smalltalk.send("kwd", "__minus_gt", ["application/x-kword"]),smalltalk.send("kwt", "__minus_gt", ["application/x-kword"]),smalltalk.send("latex", "__minus_gt", ["application/x-latex"]),smalltalk.send("lha", "__minus_gt", ["application/x-lha"]),smalltalk.send("lhs", "__minus_gt", ["text/x-literate-haskell"]),smalltalk.send("lsf", "__minus_gt", ["video/x-la-asf"]),smalltalk.send("lsx", "__minus_gt", ["video/x-la-asf"]),smalltalk.send("ltx", "__minus_gt", ["text/x-tex"]),smalltalk.send("lzh", "__minus_gt", ["application/x-lzh"]),smalltalk.send("lzx", "__minus_gt", ["application/x-lzx"]),smalltalk.send("m3u", "__minus_gt", ["audio/x-mpegurl"]),smalltalk.send("m4a", "__minus_gt", ["audio/mpeg"]),smalltalk.send("maker", "__minus_gt", ["application/x-maker"]),smalltalk.send("man", "__minus_gt", ["application/x-troff-man"]),smalltalk.send("mcif", "__minus_gt", ["chemical/x-mmcif"]),smalltalk.send("mcm", "__minus_gt", ["chemical/x-macmolecule"]),smalltalk.send("mdb", "__minus_gt", ["application/msaccess"]),smalltalk.send("me", "__minus_gt", ["application/x-troff-me"]),smalltalk.send("mesh", "__minus_gt", ["model/mesh"]),smalltalk.send("mid", "__minus_gt", ["audio/midi"]),smalltalk.send("midi", "__minus_gt", ["audio/midi"]),smalltalk.send("mif", "__minus_gt", ["application/x-mif"]),smalltalk.send("mm", "__minus_gt", ["application/x-freemind"]),smalltalk.send("mmd", "__minus_gt", ["chemical/x-macromodel-input"]),smalltalk.send("mmf", "__minus_gt", ["application/vnd.smaf"]),smalltalk.send("mml", "__minus_gt", ["text/mathml"]),smalltalk.send("mmod", "__minus_gt", ["chemical/x-macromodel-input"]),smalltalk.send("mng", "__minus_gt", ["video/x-mng"]),smalltalk.send("moc", "__minus_gt", ["text/x-moc"]),smalltalk.send("mol", "__minus_gt", ["chemical/x-mdl-molfile"]),smalltalk.send("mol2", "__minus_gt", ["chemical/x-mol2"]),smalltalk.send("moo", "__minus_gt", ["chemical/x-mopac-out"]),smalltalk.send("mop", "__minus_gt", ["chemical/x-mopac-input"]),smalltalk.send("mopcrt", "__minus_gt", ["chemical/x-mopac-input"]),smalltalk.send("mov", "__minus_gt", ["video/quicktime"]),smalltalk.send("movie", "__minus_gt", ["video/x-sgi-movie"]),smalltalk.send("mp2", "__minus_gt", ["audio/mpeg"]),smalltalk.send("mp3", "__minus_gt", ["audio/mpeg"]),smalltalk.send("mp4", "__minus_gt", ["video/mp4"]),smalltalk.send("mpc", "__minus_gt", ["chemical/x-mopac-input"]),smalltalk.send("mpe", "__minus_gt", ["video/mpeg"]),smalltalk.send("mpeg", "__minus_gt", ["video/mpeg"]),smalltalk.send("mpega", "__minus_gt", ["audio/mpeg"]),smalltalk.send("mpg", "__minus_gt", ["video/mpeg"]),smalltalk.send("mpga", "__minus_gt", ["audio/mpeg"]),smalltalk.send("ms", "__minus_gt", ["application/x-troff-ms"]),smalltalk.send("msh", "__minus_gt", ["model/mesh"]),smalltalk.send("msi", "__minus_gt", ["application/x-msi"]),smalltalk.send("mvb", "__minus_gt", ["chemical/x-mopac-vib"]),smalltalk.send("mxu", "__minus_gt", ["video/vnd.mpegurl"]),smalltalk.send("nb", "__minus_gt", ["application/mathematica"]),smalltalk.send("nc", "__minus_gt", ["application/x-netcdf"]),smalltalk.send("nwc", "__minus_gt", ["application/x-nwc"]),smalltalk.send("o", "__minus_gt", ["application/x-object"]),smalltalk.send("oda", "__minus_gt", ["application/oda"]),smalltalk.send("odb", "__minus_gt", ["application/vnd.oasis.opendocument.database"]),smalltalk.send("odc", "__minus_gt", ["application/vnd.oasis.opendocument.chart"]),smalltalk.send("odf", "__minus_gt", ["application/vnd.oasis.opendocument.formula"]),smalltalk.send("odg", "__minus_gt", ["application/vnd.oasis.opendocument.graphics"]),smalltalk.send("odi", "__minus_gt", ["application/vnd.oasis.opendocument.image"]),smalltalk.send("odm", "__minus_gt", ["application/vnd.oasis.opendocument.text-master"]),smalltalk.send("odp", "__minus_gt", ["application/vnd.oasis.opendocument.presentation"]),smalltalk.send("ods", "__minus_gt", ["application/vnd.oasis.opendocument.spreadsheet"]),smalltalk.send("odt", "__minus_gt", ["application/vnd.oasis.opendocument.text"]),smalltalk.send("ogg", "__minus_gt", ["application/ogg"]),smalltalk.send("old", "__minus_gt", ["application/x-trash"]),smalltalk.send("oth", "__minus_gt", ["application/vnd.oasis.opendocument.text-web"]),smalltalk.send("oza", "__minus_gt", ["application/x-oz-application"]),smalltalk.send("p", "__minus_gt", ["text/x-pascal"]),smalltalk.send("p7r", "__minus_gt", ["application/x-pkcs7-certreqresp"]),smalltalk.send("pac", "__minus_gt", ["application/x-ns-proxy-autoconfig"]),smalltalk.send("pas", "__minus_gt", ["text/x-pascal"]),smalltalk.send("pat", "__minus_gt", ["image/x-coreldrawpattern"]),smalltalk.send("pbm", "__minus_gt", ["image/x-portable-bitmap"]),smalltalk.send("pcf", "__minus_gt", ["application/x-font"]),smalltalk.send("pcf.Z", "__minus_gt", ["application/x-font"]),smalltalk.send("pcx", "__minus_gt", ["image/pcx"]),smalltalk.send("pdb", "__minus_gt", ["chemical/x-pdb"]),smalltalk.send("pdf", "__minus_gt", ["application/pdf"]),smalltalk.send("pfa", "__minus_gt", ["application/x-font"]),smalltalk.send("pfb", "__minus_gt", ["application/x-font"]),smalltalk.send("pgm", "__minus_gt", ["image/x-portable-graymap"]),smalltalk.send("pgn", "__minus_gt", ["application/x-chess-pgn"]),smalltalk.send("pgp", "__minus_gt", ["application/pgp-signature"]),smalltalk.send("pk", "__minus_gt", ["application/x-tex-pk"]),smalltalk.send("pl", "__minus_gt", ["text/x-perl"]),smalltalk.send("pls", "__minus_gt", ["audio/x-scpls"]),smalltalk.send("pm", "__minus_gt", ["text/x-perl"]),smalltalk.send("png", "__minus_gt", ["image/png"]),smalltalk.send("pnm", "__minus_gt", ["image/x-portable-anymap"]),smalltalk.send("pot", "__minus_gt", ["text/plain"]),smalltalk.send("ppm", "__minus_gt", ["image/x-portable-pixmap"]),smalltalk.send("pps", "__minus_gt", ["application/vnd.ms-powerpoint"]),smalltalk.send("ppt", "__minus_gt", ["application/vnd.ms-powerpoint"]),smalltalk.send("prf", "__minus_gt", ["application/pics-rules"]),smalltalk.send("prt", "__minus_gt", ["chemical/x-ncbi-asn1-ascii"]),smalltalk.send("ps", "__minus_gt", ["application/postscript"]),smalltalk.send("psd", "__minus_gt", ["image/x-photoshop"]),smalltalk.send("psp", "__minus_gt", ["text/x-psp"]),smalltalk.send("py", "__minus_gt", ["text/x-python"]),smalltalk.send("pyc", "__minus_gt", ["application/x-python-code"]),smalltalk.send("pyo", "__minus_gt", ["application/x-python-code"]),smalltalk.send("qt", "__minus_gt", ["video/quicktime"]),smalltalk.send("qtl", "__minus_gt", ["application/x-quicktimeplayer"]),smalltalk.send("ra", "__minus_gt", ["audio/x-realaudio"]),smalltalk.send("ram", "__minus_gt", ["audio/x-pn-realaudio"]),smalltalk.send("rar", "__minus_gt", ["application/rar"]),smalltalk.send("ras", "__minus_gt", ["image/x-cmu-raster"]),smalltalk.send("rd", "__minus_gt", ["chemical/x-mdl-rdfile"]),smalltalk.send("rdf", "__minus_gt", ["application/rdf+xml"]),smalltalk.send("rgb", "__minus_gt", ["image/x-rgb"]),smalltalk.send("rm", "__minus_gt", ["audio/x-pn-realaudio"]),smalltalk.send("roff", "__minus_gt", ["application/x-troff"]),smalltalk.send("ros", "__minus_gt", ["chemical/x-rosdal"]),smalltalk.send("rpm", "__minus_gt", ["application/x-redhat-package-manager"]),smalltalk.send("rss", "__minus_gt", ["application/rss+xml"]),smalltalk.send("rtf", "__minus_gt", ["text/rtf"]),smalltalk.send("rtx", "__minus_gt", ["text/richtext"]),smalltalk.send("rxn", "__minus_gt", ["chemical/x-mdl-rxnfile"]),smalltalk.send("sct", "__minus_gt", ["text/scriptlet"]),smalltalk.send("sd", "__minus_gt", ["chemical/x-mdl-sdfile"]),smalltalk.send("sd2", "__minus_gt", ["audio/x-sd2"]),smalltalk.send("sda", "__minus_gt", ["application/vnd.stardivision.draw"]),smalltalk.send("sdc", "__minus_gt", ["application/vnd.stardivision.calc"]),smalltalk.send("sdd", "__minus_gt", ["application/vnd.stardivision.impress"]),smalltalk.send("sdf", "__minus_gt", ["chemical/x-mdl-sdfile"]),smalltalk.send("sdp", "__minus_gt", ["application/vnd.stardivision.impress"]),smalltalk.send("sdw", "__minus_gt", ["application/vnd.stardivision.writer"]),smalltalk.send("ser", "__minus_gt", ["application/java-serialized-object"]),smalltalk.send("sgf", "__minus_gt", ["application/x-go-sgf"]),smalltalk.send("sgl", "__minus_gt", ["application/vnd.stardivision.writer-global"]),smalltalk.send("sh", "__minus_gt", ["text/x-sh"]),smalltalk.send("shar", "__minus_gt", ["application/x-shar"]),smalltalk.send("shtml", "__minus_gt", ["text/html"]),smalltalk.send("sid", "__minus_gt", ["audio/prs.sid"]),smalltalk.send("sik", "__minus_gt", ["application/x-trash"]),smalltalk.send("silo", "__minus_gt", ["model/mesh"]),smalltalk.send("sis", "__minus_gt", ["application/vnd.symbian.install"]),smalltalk.send("sit", "__minus_gt", ["application/x-stuffit"]),smalltalk.send("skd", "__minus_gt", ["application/x-koan"]),smalltalk.send("skm", "__minus_gt", ["application/x-koan"]),smalltalk.send("skp", "__minus_gt", ["application/x-koan"]),smalltalk.send("skt", "__minus_gt", ["application/x-koan"]),smalltalk.send("smf", "__minus_gt", ["application/vnd.stardivision.math"]),smalltalk.send("smi", "__minus_gt", ["application/smil"]),smalltalk.send("smil", "__minus_gt", ["application/smil"]),smalltalk.send("snd", "__minus_gt", ["audio/basic"]),smalltalk.send("spc", "__minus_gt", ["chemical/x-galactic-spc"]),smalltalk.send("spl", "__minus_gt", ["application/x-futuresplash"]),smalltalk.send("src", "__minus_gt", ["application/x-wais-source"]),smalltalk.send("stc", "__minus_gt", ["application/vnd.sun.xml.calc.template"]),smalltalk.send("std", "__minus_gt", ["application/vnd.sun.xml.draw.template"]),smalltalk.send("sti", "__minus_gt", ["application/vnd.sun.xml.impress.template"]),smalltalk.send("stl", "__minus_gt", ["application/vnd.ms-pki.stl"]),smalltalk.send("stw", "__minus_gt", ["application/vnd.sun.xml.writer.template"]),smalltalk.send("sty", "__minus_gt", ["text/x-tex"]),smalltalk.send("sv4cpio", "__minus_gt", ["application/x-sv4cpio"]),smalltalk.send("sv4crc", "__minus_gt", ["application/x-sv4crc"]),smalltalk.send("svg", "__minus_gt", ["image/svg+xml"]),smalltalk.send("svgz", "__minus_gt", ["image/svg+xml"]),smalltalk.send("sw", "__minus_gt", ["chemical/x-swissprot"]),smalltalk.send("swf", "__minus_gt", ["application/x-shockwave-flash"]),smalltalk.send("swfl", "__minus_gt", ["application/x-shockwave-flash"]),smalltalk.send("sxc", "__minus_gt", ["application/vnd.sun.xml.calc"]),smalltalk.send("sxd", "__minus_gt", ["application/vnd.sun.xml.draw"]),smalltalk.send("sxg", "__minus_gt", ["application/vnd.sun.xml.writer.global"]),smalltalk.send("sxi", "__minus_gt", ["application/vnd.sun.xml.impress"]),smalltalk.send("sxm", "__minus_gt", ["application/vnd.sun.xml.math"]),smalltalk.send("sxw", "__minus_gt", ["application/vnd.sun.xml.writer"]),smalltalk.send("t", "__minus_gt", ["application/x-troff"]),smalltalk.send("tar", "__minus_gt", ["application/x-tar"]),smalltalk.send("taz", "__minus_gt", ["application/x-gtar"]),smalltalk.send("tcl", "__minus_gt", ["text/x-tcl"]),smalltalk.send("tex", "__minus_gt", ["text/x-tex"]),smalltalk.send("texi", "__minus_gt", ["application/x-texinfo"]),smalltalk.send("texinfo", "__minus_gt", ["application/x-texinfo"]),smalltalk.send("text", "__minus_gt", ["text/plain"]),smalltalk.send("tgf", "__minus_gt", ["chemical/x-mdl-tgf"]),smalltalk.send("tgz", "__minus_gt", ["application/x-gtar"]),smalltalk.send("tif", "__minus_gt", ["image/tiff"]),smalltalk.send("tiff", "__minus_gt", ["image/tiff"]),smalltalk.send("tk", "__minus_gt", ["text/x-tcl"]),smalltalk.send("tm", "__minus_gt", ["text/texmacs"]),smalltalk.send("torrent", "__minus_gt", ["application/x-bittorrent"]),smalltalk.send("tr", "__minus_gt", ["application/x-troff"]),smalltalk.send("ts", "__minus_gt", ["text/texmacs"]),smalltalk.send("tsp", "__minus_gt", ["application/dsptype"]),smalltalk.send("tsv", "__minus_gt", ["text/tab-separated-values"]),smalltalk.send("txt", "__minus_gt", ["text/plain"]),smalltalk.send("udeb", "__minus_gt", ["application/x-debian-package"]),smalltalk.send("uls", "__minus_gt", ["text/iuls"]),smalltalk.send("ustar", "__minus_gt", ["application/x-ustar"]),smalltalk.send("val", "__minus_gt", ["chemical/x-ncbi-asn1-binary"]),smalltalk.send("vcd", "__minus_gt", ["application/x-cdlink"]),smalltalk.send("vcf", "__minus_gt", ["text/x-vcard"]),smalltalk.send("vcs", "__minus_gt", ["text/x-vcalendar"]),smalltalk.send("vmd", "__minus_gt", ["chemical/x-vmd"]),smalltalk.send("vms", "__minus_gt", ["chemical/x-vamas-iso14976"]),smalltalk.send("vor", "__minus_gt", ["application/vnd.stardivision.writer"]),smalltalk.send("vrm", "__minus_gt", ["x-world/x-vrml"]),smalltalk.send("vrml", "__minus_gt", ["x-world/x-vrml"]),smalltalk.send("vsd", "__minus_gt", ["application/vnd.visio"]),smalltalk.send("wad", "__minus_gt", ["application/x-doom"]),smalltalk.send("wav", "__minus_gt", ["audio/x-wav"]),smalltalk.send("wax", "__minus_gt", ["audio/x-ms-wax"]),smalltalk.send("wbmp", "__minus_gt", ["image/vnd.wap.wbmp"]),smalltalk.send("wbxml", "__minus_gt", ["application/vnd.wap.wbxml"]),smalltalk.send("wk", "__minus_gt", ["application/x-123"]),smalltalk.send("wm", "__minus_gt", ["video/x-ms-wm"]),smalltalk.send("wma", "__minus_gt", ["audio/x-ms-wma"]),smalltalk.send("wmd", "__minus_gt", ["application/x-ms-wmd"]),smalltalk.send("wml", "__minus_gt", ["text/vnd.wap.wml"]),smalltalk.send("wmlc", "__minus_gt", ["application/vnd.wap.wmlc"]),smalltalk.send("wmls", "__minus_gt", ["text/vnd.wap.wmlscript"]),smalltalk.send("wmlsc", "__minus_gt", ["application/vnd.wap.wmlscriptc"]),smalltalk.send("wmv", "__minus_gt", ["video/x-ms-wmv"]),smalltalk.send("wmx", "__minus_gt", ["video/x-ms-wmx"]),smalltalk.send("wmz", "__minus_gt", ["application/x-ms-wmz"]),smalltalk.send("wp5", "__minus_gt", ["application/wordperfect5.1"]),smalltalk.send("wpd", "__minus_gt", ["application/wordperfect"]),smalltalk.send("wrl", "__minus_gt", ["x-world/x-vrml"]),smalltalk.send("wsc", "__minus_gt", ["text/scriptlet"]),smalltalk.send("wvx", "__minus_gt", ["video/x-ms-wvx"]),smalltalk.send("wz", "__minus_gt", ["application/x-wingz"]),smalltalk.send("xbm", "__minus_gt", ["image/x-xbitmap"]),smalltalk.send("xcf", "__minus_gt", ["application/x-xcf"]),smalltalk.send("xht", "__minus_gt", ["application/xhtml+xml"]),smalltalk.send("xhtml", "__minus_gt", ["application/xhtml+xml"]),smalltalk.send("xlb", "__minus_gt", ["application/vnd.ms-excel"]),smalltalk.send("xls", "__minus_gt", ["application/vnd.ms-excel"]),smalltalk.send("xlt", "__minus_gt", ["application/vnd.ms-excel"]),smalltalk.send("xml", "__minus_gt", ["application/xml"]),smalltalk.send("xpi", "__minus_gt", ["application/x-xpinstall"]),smalltalk.send("xpm", "__minus_gt", ["image/x-xpixmap"]),smalltalk.send("xsl", "__minus_gt", ["application/xml"]),smalltalk.send("xtel", "__minus_gt", ["chemical/x-xtel"]),smalltalk.send("xul", "__minus_gt", ["application/vnd.mozilla.xul+xml"]),smalltalk.send("xwd", "__minus_gt", ["image/x-xwindowdump"]),smalltalk.send("xyz", "__minus_gt", ["chemical/x-xyz"]),smalltalk.send("zip", "__minus_gt", ["application/zip"]),smalltalk.send("zmt", "__minus_gt", ["chemical/x-mopac-input"]),smalltalk.send("~", "__minus_gt", ["application/x-trash"])]);
return self;},
args: [],
source: "defaultMimeTypes\x0a\x09^ #{\x0a\x09\x09'%' -> 'application/x-trash'.\x0a\x09\x09'323' -> 'text/h323'.\x0a\x09\x09'abw' -> 'application/x-abiword'.\x0a\x09\x09'ai' -> 'application/postscript'.\x0a\x09\x09'aif' -> 'audio/x-aiff'.\x0a\x09\x09'aifc' -> 'audio/x-aiff'.\x0a\x09\x09'aiff' -> 'audio/x-aiff'.\x0a\x09\x09'alc' -> 'chemical/x-alchemy'.\x0a\x09\x09'art' -> 'image/x-jg'.\x0a\x09\x09'asc' -> 'text/plain'.\x0a\x09\x09'asf' -> 'video/x-ms-asf'.\x0a\x09\x09'asn' -> 'chemical/x-ncbi-asn1-spec'.\x0a\x09\x09'aso' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'asx' -> 'video/x-ms-asf'.\x0a\x09\x09'au' -> 'audio/basic'.\x0a\x09\x09'avi' -> 'video/x-msvideo'.\x0a\x09\x09'b' -> 'chemical/x-molconn-Z'.\x0a\x09\x09'bak' -> 'application/x-trash'.\x0a\x09\x09'bat' -> 'application/x-msdos-program'.\x0a\x09\x09'bcpio' -> 'application/x-bcpio'.\x0a\x09\x09'bib' -> 'text/x-bibtex'.\x0a\x09\x09'bin' -> 'application/octet-stream'.\x0a\x09\x09'bmp' -> 'image/x-ms-bmp'.\x0a\x09\x09'book' -> 'application/x-maker'.\x0a\x09\x09'bsd' -> 'chemical/x-crossfire'.\x0a\x09\x09'c' -> 'text/x-csrc'.\x0a\x09\x09'c++' -> 'text/x-c++src'.\x0a\x09\x09'c3d' -> 'chemical/x-chem3d'.\x0a\x09\x09'cac' -> 'chemical/x-cache'.\x0a\x09\x09'cache' -> 'chemical/x-cache'.\x0a\x09\x09'cascii' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cat' -> 'application/vnd.ms-pki.seccat'.\x0a\x09\x09'cbin' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'cc' -> 'text/x-c++src'.\x0a\x09\x09'cdf' -> 'application/x-cdf'.\x0a\x09\x09'cdr' -> 'image/x-coreldraw'.\x0a\x09\x09'cdt' -> 'image/x-coreldrawtemplate'.\x0a\x09\x09'cdx' -> 'chemical/x-cdx'.\x0a\x09\x09'cdy' -> 'application/vnd.cinderella'.\x0a\x09\x09'cef' -> 'chemical/x-cxf'.\x0a\x09\x09'cer' -> 'chemical/x-cerius'.\x0a\x09\x09'chm' -> 'chemical/x-chemdraw'.\x0a\x09\x09'chrt' -> 'application/x-kchart'.\x0a\x09\x09'cif' -> 'chemical/x-cif'.\x0a\x09\x09'class' -> 'application/java-vm'.\x0a\x09\x09'cls' -> 'text/x-tex'.\x0a\x09\x09'cmdf' -> 'chemical/x-cmdf'.\x0a\x09\x09'cml' -> 'chemical/x-cml'.\x0a\x09\x09'cod' -> 'application/vnd.rim.cod'.\x0a\x09\x09'com' -> 'application/x-msdos-program'.\x0a\x09\x09'cpa' -> 'chemical/x-compass'.\x0a\x09\x09'cpio' -> 'application/x-cpio'.\x0a\x09\x09'cpp' -> 'text/x-c++src'.\x0a\x09\x09'cpt' -> 'image/x-corelphotopaint'.\x0a\x09\x09'crl' -> 'application/x-pkcs7-crl'.\x0a\x09\x09'crt' -> 'application/x-x509-ca-cert'.\x0a\x09\x09'csf' -> 'chemical/x-cache-csf'.\x0a\x09\x09'csh' -> 'text/x-csh'.\x0a\x09\x09'csm' -> 'chemical/x-csml'.\x0a\x09\x09'csml' -> 'chemical/x-csml'.\x0a\x09\x09'css' -> 'text/css'.\x0a\x09\x09'csv' -> 'text/comma-separated-values'.\x0a\x09\x09'ctab' -> 'chemical/x-cactvs-binary'.\x0a\x09\x09'ctx' -> 'chemical/x-ctx'.\x0a\x09\x09'cu' -> 'application/cu-seeme'.\x0a\x09\x09'cub' -> 'chemical/x-gaussian-cube'.\x0a\x09\x09'cxf' -> 'chemical/x-cxf'.\x0a\x09\x09'cxx' -> 'text/x-c++src'.\x0a\x09\x09'dat' -> 'chemical/x-mopac-input'.\x0a\x09\x09'dcr' -> 'application/x-director'.\x0a\x09\x09'deb' -> 'application/x-debian-package'.\x0a\x09\x09'dif' -> 'video/dv'.\x0a\x09\x09'diff' -> 'text/plain'.\x0a\x09\x09'dir' -> 'application/x-director'.\x0a\x09\x09'djv' -> 'image/vnd.djvu'.\x0a\x09\x09'djvu' -> 'image/vnd.djvu'.\x0a\x09\x09'dl' -> 'video/dl'.\x0a\x09\x09'dll' -> 'application/x-msdos-program'.\x0a\x09\x09'dmg' -> 'application/x-apple-diskimage'.\x0a\x09\x09'dms' -> 'application/x-dms'.\x0a\x09\x09'doc' -> 'application/msword'.\x0a\x09\x09'dot' -> 'application/msword'.\x0a\x09\x09'dv' -> 'video/dv'.\x0a\x09\x09'dvi' -> 'application/x-dvi'.\x0a\x09\x09'dx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'dxr' -> 'application/x-director'.\x0a\x09\x09'emb' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'embl' -> 'chemical/x-embl-dl-nucleotide'.\x0a\x09\x09'ent' -> 'chemical/x-pdb'.\x0a\x09\x09'eps' -> 'application/postscript'.\x0a\x09\x09'etx' -> 'text/x-setext'.\x0a\x09\x09'exe' -> 'application/x-msdos-program'.\x0a\x09\x09'ez' -> 'application/andrew-inset'.\x0a\x09\x09'fb' -> 'application/x-maker'.\x0a\x09\x09'fbdoc' -> 'application/x-maker'.\x0a\x09\x09'fch' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fchk' -> 'chemical/x-gaussian-checkpoint'.\x0a\x09\x09'fig' -> 'application/x-xfig'.\x0a\x09\x09'flac' -> 'application/x-flac'.\x0a\x09\x09'fli' -> 'video/fli'.\x0a\x09\x09'fm' -> 'application/x-maker'.\x0a\x09\x09'frame' -> 'application/x-maker'.\x0a\x09\x09'frm' -> 'application/x-maker'.\x0a\x09\x09'gal' -> 'chemical/x-gaussian-log'.\x0a\x09\x09'gam' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gamin' -> 'chemical/x-gamess-input'.\x0a\x09\x09'gau' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gcd' -> 'text/x-pcs-gcd'.\x0a\x09\x09'gcf' -> 'application/x-graphing-calculator'.\x0a\x09\x09'gcg' -> 'chemical/x-gcg8-sequence'.\x0a\x09\x09'gen' -> 'chemical/x-genbank'.\x0a\x09\x09'gf' -> 'application/x-tex-gf'.\x0a\x09\x09'gif' -> 'image/gif'.\x0a\x09\x09'gjc' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gjf' -> 'chemical/x-gaussian-input'.\x0a\x09\x09'gl' -> 'video/gl'.\x0a\x09\x09'gnumeric' -> 'application/x-gnumeric'.\x0a\x09\x09'gpt' -> 'chemical/x-mopac-graph'.\x0a\x09\x09'gsf' -> 'application/x-font'.\x0a\x09\x09'gsm' -> 'audio/x-gsm'.\x0a\x09\x09'gtar' -> 'application/x-gtar'.\x0a\x09\x09'h' -> 'text/x-chdr'.\x0a\x09\x09'h++' -> 'text/x-c++hdr'.\x0a\x09\x09'hdf' -> 'application/x-hdf'.\x0a\x09\x09'hh' -> 'text/x-c++hdr'.\x0a\x09\x09'hin' -> 'chemical/x-hin'.\x0a\x09\x09'hpp' -> 'text/x-c++hdr'.\x0a\x09\x09'hqx' -> 'application/mac-binhex40'.\x0a\x09\x09'hs' -> 'text/x-haskell'.\x0a\x09\x09'hta' -> 'application/hta'.\x0a\x09\x09'htc' -> 'text/x-component'.\x0a\x09\x09'htm' -> 'text/html'.\x0a\x09\x09'html' -> 'text/html'.\x0a\x09\x09'hxx' -> 'text/x-c++hdr'.\x0a\x09\x09'ica' -> 'application/x-ica'.\x0a\x09\x09'ice' -> 'x-conference/x-cooltalk'.\x0a\x09\x09'ico' -> 'image/x-icon'.\x0a\x09\x09'ics' -> 'text/calendar'.\x0a\x09\x09'icz' -> 'text/calendar'.\x0a\x09\x09'ief' -> 'image/ief'.\x0a\x09\x09'iges' -> 'model/iges'.\x0a\x09\x09'igs' -> 'model/iges'.\x0a\x09\x09'iii' -> 'application/x-iphone'.\x0a\x09\x09'inp' -> 'chemical/x-gamess-input'.\x0a\x09\x09'ins' -> 'application/x-internet-signup'.\x0a\x09\x09'iso' -> 'application/x-iso9660-image'.\x0a\x09\x09'isp' -> 'application/x-internet-signup'.\x0a\x09\x09'ist' -> 'chemical/x-isostar'.\x0a\x09\x09'istr' -> 'chemical/x-isostar'.\x0a\x09\x09'jad' -> 'text/vnd.sun.j2me.app-descriptor'.\x0a\x09\x09'jar' -> 'application/java-archive'.\x0a\x09\x09'java' -> 'text/x-java'.\x0a\x09\x09'jdx' -> 'chemical/x-jcamp-dx'.\x0a\x09\x09'jmz' -> 'application/x-jmol'.\x0a\x09\x09'jng' -> 'image/x-jng'.\x0a\x09\x09'jnlp' -> 'application/x-java-jnlp-file'.\x0a\x09\x09'jpe' -> 'image/jpeg'.\x0a\x09\x09'jpeg' -> 'image/jpeg'.\x0a\x09\x09'jpg' -> 'image/jpeg'.\x0a\x09\x09'js' -> 'application/javascript'.\x0a\x09\x09'kar' -> 'audio/midi'.\x0a\x09\x09'key' -> 'application/pgp-keys'.\x0a\x09\x09'kil' -> 'application/x-killustrator'.\x0a\x09\x09'kin' -> 'chemical/x-kinemage'.\x0a\x09\x09'kpr' -> 'application/x-kpresenter'.\x0a\x09\x09'kpt' -> 'application/x-kpresenter'.\x0a\x09\x09'ksp' -> 'application/x-kspread'.\x0a\x09\x09'kwd' -> 'application/x-kword'.\x0a\x09\x09'kwt' -> 'application/x-kword'.\x0a\x09\x09'latex' -> 'application/x-latex'.\x0a\x09\x09'lha' -> 'application/x-lha'.\x0a\x09\x09'lhs' -> 'text/x-literate-haskell'.\x0a\x09\x09'lsf' -> 'video/x-la-asf'.\x0a\x09\x09'lsx' -> 'video/x-la-asf'.\x0a\x09\x09'ltx' -> 'text/x-tex'.\x0a\x09\x09'lzh' -> 'application/x-lzh'.\x0a\x09\x09'lzx' -> 'application/x-lzx'.\x0a\x09\x09'm3u' -> 'audio/x-mpegurl'.\x0a\x09\x09'm4a' -> 'audio/mpeg'.\x0a\x09\x09'maker' -> 'application/x-maker'.\x0a\x09\x09'man' -> 'application/x-troff-man'.\x0a\x09\x09'mcif' -> 'chemical/x-mmcif'.\x0a\x09\x09'mcm' -> 'chemical/x-macmolecule'.\x0a\x09\x09'mdb' -> 'application/msaccess'.\x0a\x09\x09'me' -> 'application/x-troff-me'.\x0a\x09\x09'mesh' -> 'model/mesh'.\x0a\x09\x09'mid' -> 'audio/midi'.\x0a\x09\x09'midi' -> 'audio/midi'.\x0a\x09\x09'mif' -> 'application/x-mif'.\x0a\x09\x09'mm' -> 'application/x-freemind'.\x0a\x09\x09'mmd' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mmf' -> 'application/vnd.smaf'.\x0a\x09\x09'mml' -> 'text/mathml'.\x0a\x09\x09'mmod' -> 'chemical/x-macromodel-input'.\x0a\x09\x09'mng' -> 'video/x-mng'.\x0a\x09\x09'moc' -> 'text/x-moc'.\x0a\x09\x09'mol' -> 'chemical/x-mdl-molfile'.\x0a\x09\x09'mol2' -> 'chemical/x-mol2'.\x0a\x09\x09'moo' -> 'chemical/x-mopac-out'.\x0a\x09\x09'mop' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mopcrt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mov' -> 'video/quicktime'.\x0a\x09\x09'movie' -> 'video/x-sgi-movie'.\x0a\x09\x09'mp2' -> 'audio/mpeg'.\x0a\x09\x09'mp3' -> 'audio/mpeg'.\x0a\x09\x09'mp4' -> 'video/mp4'.\x0a\x09\x09'mpc' -> 'chemical/x-mopac-input'.\x0a\x09\x09'mpe' -> 'video/mpeg'.\x0a\x09\x09'mpeg' -> 'video/mpeg'.\x0a\x09\x09'mpega' -> 'audio/mpeg'.\x0a\x09\x09'mpg' -> 'video/mpeg'.\x0a\x09\x09'mpga' -> 'audio/mpeg'.\x0a\x09\x09'ms' -> 'application/x-troff-ms'.\x0a\x09\x09'msh' -> 'model/mesh'.\x0a\x09\x09'msi' -> 'application/x-msi'.\x0a\x09\x09'mvb' -> 'chemical/x-mopac-vib'.\x0a\x09\x09'mxu' -> 'video/vnd.mpegurl'.\x0a\x09\x09'nb' -> 'application/mathematica'.\x0a\x09\x09'nc' -> 'application/x-netcdf'.\x0a\x09\x09'nwc' -> 'application/x-nwc'.\x0a\x09\x09'o' -> 'application/x-object'.\x0a\x09\x09'oda' -> 'application/oda'.\x0a\x09\x09'odb' -> 'application/vnd.oasis.opendocument.database'.\x0a\x09\x09'odc' -> 'application/vnd.oasis.opendocument.chart'.\x0a\x09\x09'odf' -> 'application/vnd.oasis.opendocument.formula'.\x0a\x09\x09'odg' -> 'application/vnd.oasis.opendocument.graphics'.\x0a\x09\x09'odi' -> 'application/vnd.oasis.opendocument.image'.\x0a\x09\x09'odm' -> 'application/vnd.oasis.opendocument.text-master'.\x0a\x09\x09'odp' -> 'application/vnd.oasis.opendocument.presentation'.\x0a\x09\x09'ods' -> 'application/vnd.oasis.opendocument.spreadsheet'.\x0a\x09\x09'odt' -> 'application/vnd.oasis.opendocument.text'.\x0a\x09\x09'ogg' -> 'application/ogg'.\x0a\x09\x09'old' -> 'application/x-trash'.\x0a\x09\x09'oth' -> 'application/vnd.oasis.opendocument.text-web'.\x0a\x09\x09'oza' -> 'application/x-oz-application'.\x0a\x09\x09'p' -> 'text/x-pascal'.\x0a\x09\x09'p7r' -> 'application/x-pkcs7-certreqresp'.\x0a\x09\x09'pac' -> 'application/x-ns-proxy-autoconfig'.\x0a\x09\x09'pas' -> 'text/x-pascal'.\x0a\x09\x09'pat' -> 'image/x-coreldrawpattern'.\x0a\x09\x09'pbm' -> 'image/x-portable-bitmap'.\x0a\x09\x09'pcf' -> 'application/x-font'.\x0a\x09\x09'pcf.Z' -> 'application/x-font'.\x0a\x09\x09'pcx' -> 'image/pcx'.\x0a\x09\x09'pdb' -> 'chemical/x-pdb'.\x0a\x09\x09'pdf' -> 'application/pdf'.\x0a\x09\x09'pfa' -> 'application/x-font'.\x0a\x09\x09'pfb' -> 'application/x-font'.\x0a\x09\x09'pgm' -> 'image/x-portable-graymap'.\x0a\x09\x09'pgn' -> 'application/x-chess-pgn'.\x0a\x09\x09'pgp' -> 'application/pgp-signature'.\x0a\x09\x09'pk' -> 'application/x-tex-pk'.\x0a\x09\x09'pl' -> 'text/x-perl'.\x0a\x09\x09'pls' -> 'audio/x-scpls'.\x0a\x09\x09'pm' -> 'text/x-perl'.\x0a\x09\x09'png' -> 'image/png'.\x0a\x09\x09'pnm' -> 'image/x-portable-anymap'.\x0a\x09\x09'pot' -> 'text/plain'.\x0a\x09\x09'ppm' -> 'image/x-portable-pixmap'.\x0a\x09\x09'pps' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'ppt' -> 'application/vnd.ms-powerpoint'.\x0a\x09\x09'prf' -> 'application/pics-rules'.\x0a\x09\x09'prt' -> 'chemical/x-ncbi-asn1-ascii'.\x0a\x09\x09'ps' -> 'application/postscript'.\x0a\x09\x09'psd' -> 'image/x-photoshop'.\x0a\x09\x09'psp' -> 'text/x-psp'.\x0a\x09\x09'py' -> 'text/x-python'.\x0a\x09\x09'pyc' -> 'application/x-python-code'.\x0a\x09\x09'pyo' -> 'application/x-python-code'.\x0a\x09\x09'qt' -> 'video/quicktime'.\x0a\x09\x09'qtl' -> 'application/x-quicktimeplayer'.\x0a\x09\x09'ra' -> 'audio/x-realaudio'.\x0a\x09\x09'ram' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'rar' -> 'application/rar'.\x0a\x09\x09'ras' -> 'image/x-cmu-raster'.\x0a\x09\x09'rd' -> 'chemical/x-mdl-rdfile'.\x0a\x09\x09'rdf' -> 'application/rdf+xml'.\x0a\x09\x09'rgb' -> 'image/x-rgb'.\x0a\x09\x09'rm' -> 'audio/x-pn-realaudio'.\x0a\x09\x09'roff' -> 'application/x-troff'.\x0a\x09\x09'ros' -> 'chemical/x-rosdal'.\x0a\x09\x09'rpm' -> 'application/x-redhat-package-manager'.\x0a\x09\x09'rss' -> 'application/rss+xml'.\x0a\x09\x09'rtf' -> 'text/rtf'.\x0a\x09\x09'rtx' -> 'text/richtext'.\x0a\x09\x09'rxn' -> 'chemical/x-mdl-rxnfile'.\x0a\x09\x09'sct' -> 'text/scriptlet'.\x0a\x09\x09'sd' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sd2' -> 'audio/x-sd2'.\x0a\x09\x09'sda' -> 'application/vnd.stardivision.draw'.\x0a\x09\x09'sdc' -> 'application/vnd.stardivision.calc'.\x0a\x09\x09'sdd' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdf' -> 'chemical/x-mdl-sdfile'.\x0a\x09\x09'sdp' -> 'application/vnd.stardivision.impress'.\x0a\x09\x09'sdw' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'ser' -> 'application/java-serialized-object'.\x0a\x09\x09'sgf' -> 'application/x-go-sgf'.\x0a\x09\x09'sgl' -> 'application/vnd.stardivision.writer-global'.\x0a\x09\x09'sh' -> 'text/x-sh'.\x0a\x09\x09'shar' -> 'application/x-shar'.\x0a\x09\x09'shtml' -> 'text/html'.\x0a\x09\x09'sid' -> 'audio/prs.sid'.\x0a\x09\x09'sik' -> 'application/x-trash'.\x0a\x09\x09'silo' -> 'model/mesh'.\x0a\x09\x09'sis' -> 'application/vnd.symbian.install'.\x0a\x09\x09'sit' -> 'application/x-stuffit'.\x0a\x09\x09'skd' -> 'application/x-koan'.\x0a\x09\x09'skm' -> 'application/x-koan'.\x0a\x09\x09'skp' -> 'application/x-koan'.\x0a\x09\x09'skt' -> 'application/x-koan'.\x0a\x09\x09'smf' -> 'application/vnd.stardivision.math'.\x0a\x09\x09'smi' -> 'application/smil'.\x0a\x09\x09'smil' -> 'application/smil'.\x0a\x09\x09'snd' -> 'audio/basic'.\x0a\x09\x09'spc' -> 'chemical/x-galactic-spc'.\x0a\x09\x09'spl' -> 'application/x-futuresplash'.\x0a\x09\x09'src' -> 'application/x-wais-source'.\x0a\x09\x09'stc' -> 'application/vnd.sun.xml.calc.template'.\x0a\x09\x09'std' -> 'application/vnd.sun.xml.draw.template'.\x0a\x09\x09'sti' -> 'application/vnd.sun.xml.impress.template'.\x0a\x09\x09'stl' -> 'application/vnd.ms-pki.stl'.\x0a\x09\x09'stw' -> 'application/vnd.sun.xml.writer.template'.\x0a\x09\x09'sty' -> 'text/x-tex'.\x0a\x09\x09'sv4cpio' -> 'application/x-sv4cpio'.\x0a\x09\x09'sv4crc' -> 'application/x-sv4crc'.\x0a\x09\x09'svg' -> 'image/svg+xml'.\x0a\x09\x09'svgz' -> 'image/svg+xml'.\x0a\x09\x09'sw' -> 'chemical/x-swissprot'.\x0a\x09\x09'swf' -> 'application/x-shockwave-flash'.\x0a\x09\x09'swfl' -> 'application/x-shockwave-flash'.\x0a\x09\x09'sxc' -> 'application/vnd.sun.xml.calc'.\x0a\x09\x09'sxd' -> 'application/vnd.sun.xml.draw'.\x0a\x09\x09'sxg' -> 'application/vnd.sun.xml.writer.global'.\x0a\x09\x09'sxi' -> 'application/vnd.sun.xml.impress'.\x0a\x09\x09'sxm' -> 'application/vnd.sun.xml.math'.\x0a\x09\x09'sxw' -> 'application/vnd.sun.xml.writer'.\x0a\x09\x09't' -> 'application/x-troff'.\x0a\x09\x09'tar' -> 'application/x-tar'.\x0a\x09\x09'taz' -> 'application/x-gtar'.\x0a\x09\x09'tcl' -> 'text/x-tcl'.\x0a\x09\x09'tex' -> 'text/x-tex'.\x0a\x09\x09'texi' -> 'application/x-texinfo'.\x0a\x09\x09'texinfo' -> 'application/x-texinfo'.\x0a\x09\x09'text' -> 'text/plain'.\x0a\x09\x09'tgf' -> 'chemical/x-mdl-tgf'.\x0a\x09\x09'tgz' -> 'application/x-gtar'.\x0a\x09\x09'tif' -> 'image/tiff'.\x0a\x09\x09'tiff' -> 'image/tiff'.\x0a\x09\x09'tk' -> 'text/x-tcl'.\x0a\x09\x09'tm' -> 'text/texmacs'.\x0a\x09\x09'torrent' -> 'application/x-bittorrent'.\x0a\x09\x09'tr' -> 'application/x-troff'.\x0a\x09\x09'ts' -> 'text/texmacs'.\x0a\x09\x09'tsp' -> 'application/dsptype'.\x0a\x09\x09'tsv' -> 'text/tab-separated-values'.\x0a\x09\x09'txt' -> 'text/plain'.\x0a\x09\x09'udeb' -> 'application/x-debian-package'.\x0a\x09\x09'uls' -> 'text/iuls'.\x0a\x09\x09'ustar' -> 'application/x-ustar'.\x0a\x09\x09'val' -> 'chemical/x-ncbi-asn1-binary'.\x0a\x09\x09'vcd' -> 'application/x-cdlink'.\x0a\x09\x09'vcf' -> 'text/x-vcard'.\x0a\x09\x09'vcs' -> 'text/x-vcalendar'.\x0a\x09\x09'vmd' -> 'chemical/x-vmd'.\x0a\x09\x09'vms' -> 'chemical/x-vamas-iso14976'.\x0a\x09\x09'vor' -> 'application/vnd.stardivision.writer'.\x0a\x09\x09'vrm' -> 'x-world/x-vrml'.\x0a\x09\x09'vrml' -> 'x-world/x-vrml'.\x0a\x09\x09'vsd' -> 'application/vnd.visio'.\x0a\x09\x09'wad' -> 'application/x-doom'.\x0a\x09\x09'wav' -> 'audio/x-wav'.\x0a\x09\x09'wax' -> 'audio/x-ms-wax'.\x0a\x09\x09'wbmp' -> 'image/vnd.wap.wbmp'.\x0a\x09\x09'wbxml' -> 'application/vnd.wap.wbxml'.\x0a\x09\x09'wk' -> 'application/x-123'.\x0a\x09\x09'wm' -> 'video/x-ms-wm'.\x0a\x09\x09'wma' -> 'audio/x-ms-wma'.\x0a\x09\x09'wmd' -> 'application/x-ms-wmd'.\x0a\x09\x09'wml' -> 'text/vnd.wap.wml'.\x0a\x09\x09'wmlc' -> 'application/vnd.wap.wmlc'.\x0a\x09\x09'wmls' -> 'text/vnd.wap.wmlscript'.\x0a\x09\x09'wmlsc' -> 'application/vnd.wap.wmlscriptc'.\x0a\x09\x09'wmv' -> 'video/x-ms-wmv'.\x0a\x09\x09'wmx' -> 'video/x-ms-wmx'.\x0a\x09\x09'wmz' -> 'application/x-ms-wmz'.\x0a\x09\x09'wp5' -> 'application/wordperfect5.1'.\x0a\x09\x09'wpd' -> 'application/wordperfect'.\x0a\x09\x09'wrl' -> 'x-world/x-vrml'.\x0a\x09\x09'wsc' -> 'text/scriptlet'.\x0a\x09\x09'wvx' -> 'video/x-ms-wvx'.\x0a\x09\x09'wz' -> 'application/x-wingz'.\x0a\x09\x09'xbm' -> 'image/x-xbitmap'.\x0a\x09\x09'xcf' -> 'application/x-xcf'.\x0a\x09\x09'xht' -> 'application/xhtml+xml'.\x0a\x09\x09'xhtml' -> 'application/xhtml+xml'.\x0a\x09\x09'xlb' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xls' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xlt' -> 'application/vnd.ms-excel'.\x0a\x09\x09'xml' -> 'application/xml'.\x0a\x09\x09'xpi' -> 'application/x-xpinstall'.\x0a\x09\x09'xpm' -> 'image/x-xpixmap'.\x0a\x09\x09'xsl' -> 'application/xml'.\x0a\x09\x09'xtel' -> 'chemical/x-xtel'.\x0a\x09\x09'xul' -> 'application/vnd.mozilla.xul+xml'.\x0a\x09\x09'xwd' -> 'image/x-xwindowdump'.\x0a\x09\x09'xyz' -> 'chemical/x-xyz'.\x0a\x09\x09'zip' -> 'application/zip'.\x0a\x09\x09'zmt' -> 'chemical/x-mopac-input'.\x0a\x09\x09'~' -> 'application/x-trash'\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_defaultPort",
smalltalk.method({
selector: "defaultPort",
category: 'accessing',
fn: function (){
var self=this;
return (4000);
return self;},
args: [],
source: "defaultPort\x0a\x09^4000",
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'initialization',
fn: function (){
var self=this;
var fileServer=nil;
var args=nil;
(args=smalltalk.send((typeof process == 'undefined' ? nil : process), "_argv", []));
smalltalk.send(args, "_removeFrom_to_", [(1), (3)]);
(fileServer=smalltalk.send((smalltalk.FileServer || FileServer), "_createServerWithArguments_", [args]));
smalltalk.send(fileServer, "_checkDirectoryLayout", []);
return smalltalk.send(fileServer, "_start", []);
return self;},
args: [],
source: "main\x0a\x09| fileServer args |\x0a\x09args := process argv.\x0a\x09args removeFrom: 1 to: 3.\x0a\x0a\x09fileServer := FileServer createServerWithArguments: args.\x0a\x0a\x09fileServer checkDirectoryLayout.\x0a\x09^fileServer start",
messageSends: ["argv", "removeFrom:to:", "createServerWithArguments:", "checkDirectoryLayout", "start"],
referencedClasses: ["FileServer"]
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_mimeTypeFor_",
smalltalk.method({
selector: "mimeTypeFor:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_mimeTypes", []), "_at_ifAbsent_", [smalltalk.send(aString, "_replace_with_", [".*[\x5c.]", ""]), (function(){return "text/plain";})]);
return self;},
args: ["aString"],
source: "mimeTypeFor: aString\x0a\x09^self mimeTypes at: (aString replace: '.*[\x5c.]' with: '') ifAbsent: ['text/plain']",
messageSends: ["at:ifAbsent:", "mimeTypes", "replace:with:"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
"_mimeTypes",
smalltalk.method({
selector: "mimeTypes",
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@mimeTypes']) == nil || $receiver == undefined) ? (function(){return (self['@mimeTypes']=smalltalk.send(self, "_defaultMimeTypes", []));})() : $receiver;
return self;},
args: [],
source: "mimeTypes\x0a\x09^mimeTypes ifNil: [mimeTypes := self defaultMimeTypes]",
messageSends: ["ifNil:", "defaultMimeTypes"],
referencedClasses: []
}),
smalltalk.FileServer.klass);


smalltalk.init(smalltalk.Object); //metaclasses are in through Class
smalltalk.classes()._do_(function(each) {
	each._initialize()});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}
smalltalk.FileServer._main()