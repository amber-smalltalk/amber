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
            return shouldBeBoolean == true;
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
fn: function (aBlock,anotherBlock){
var self=this;
try{return aBlock()} catch(e) {return anotherBlock(e)};
;
return self},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{return aBlock()} catch(e) {return anotherBlock(e)}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_value",
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return self.valueOf();
;
return self},
args: [],
source: "value\x0a\x09<return self.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_yourself",
smalltalk.method({
selector: "yourself",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self;
return $1;
},
args: [],
source: "yourself\x0a\x09^ self",
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
fn: function (aMessage){
var self=this;
var obj;
var selector;
var jsSelector;
var arguments;
obj=smalltalk.send(self,"_jsObject",[]);
selector=smalltalk.send(aMessage,"_selector",[]);
jsSelector=smalltalk.send(selector,"_asJavaScriptSelector",[]);
arguments=smalltalk.send(aMessage,"_arguments",[]);
if(jsSelector in obj) {return smalltalk.send(obj, jsSelector, arguments)};
;
smalltalk.send(self,"_doesNotUnderstand_",[aMessage],smalltalk.Object);
return self},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09| obj selector jsSelector arguments |\x0a\x09obj := self jsObject.\x0a\x09selector := aMessage selector.\x0a\x09jsSelector := selector asJavaScriptSelector.\x0a\x09arguments := aMessage arguments.\x0a\x09<if(jsSelector in obj) {return smalltalk.send(obj, jsSelector, arguments)}>.\x0a\x09super doesNotUnderstand: aMessage",
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
fn: function (aBlock){
var self=this;
var count;
count=(1);
smalltalk.send((function(){
return smalltalk.send(count,"__gt",[self]);
}),"_whileFalse_",[(function(){
smalltalk.send(aBlock,"_value",[]);
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
return self},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[count > self] whileFalse: [\x0a\x09    aBlock value.\x0a\x09    count := count + 1]",
messageSends: ["whileFalse:", "value", "+", ">"],
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
"_commitPathsFromLoader",
smalltalk.method({
selector: "commitPathsFromLoader",
category: 'commit paths',
fn: function (){
var self=this;
var $1,$2;
var js;
var st;
var cp = smalltalk['@@commitPath'];
        if (cp) { js = cp.js; st = cp.st; };
;
$1=js;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(self,"_defaultCommitPathJs_",[js]);
};
$2=st;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
smalltalk.send(self,"_defaultCommitPathSt_",[st]);
};
return self},
args: [],
source: "commitPathsFromLoader\x0a\x09| js st |\x0a    <var cp = smalltalk['@@commitPath'];\x0a        if (cp) { js = cp.js; st = cp.st; }>.\x0a    js ifNotNil: [ self defaultCommitPathJs: js ].\x0a    st ifNotNil: [ self defaultCommitPathSt: st ].",
messageSends: ["ifNotNil:", "defaultCommitPathJs:", "defaultCommitPathSt:"],
referencedClasses: []
}),
smalltalk.Package.klass);

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
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object.klass);
smalltalk.send(self,"_commitPathsFromLoader",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self commitPathsFromLoader",
messageSends: ["initialize", "commitPathsFromLoader"],
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


smalltalk.addClass('Timeout', smalltalk.Object, ['rawTimeout'], 'Kernel-Objects');
smalltalk.Timeout.comment="I am wrapping the returns from set{Timeout,Interval}.\x0a\x0aNumber suffices in browsers, but node.js returns an object."
smalltalk.addMethod(
"_clearInterval",
smalltalk.method({
selector: "clearInterval",
category: 'timeout/interval',
fn: function (){
var self=this;

    	var interval = self["@rawTimeout"];
		clearInterval(interval);
    ;
;
return self},
args: [],
source: "clearInterval\x0a\x09<\x0a    \x09var interval = self[\x22@rawTimeout\x22];\x0a\x09\x09clearInterval(interval);\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);

smalltalk.addMethod(
"_clearTimeout",
smalltalk.method({
selector: "clearTimeout",
category: 'timeout/interval',
fn: function (){
var self=this;

    	var timeout = self["@rawTimeout"];
		clearTimeout(timeout);
    ;
;
return self},
args: [],
source: "clearTimeout\x0a\x09<\x0a    \x09var timeout = self[\x22@rawTimeout\x22];\x0a\x09\x09clearTimeout(timeout);\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);

smalltalk.addMethod(
"_rawTimeout_",
smalltalk.method({
selector: "rawTimeout:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@rawTimeout"]=anObject;
return self},
args: ["anObject"],
source: "rawTimeout: anObject\x0a\x09rawTimeout := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Timeout);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_rawTimeout_",[anObject]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a\x09^self new rawTimeout: anObject; yourself",
messageSends: ["rawTimeout:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Timeout.klass);


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



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category'], 'Kernel-Classes');
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
return self},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
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



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class'], 'Kernel-Classes');
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
return self},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
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
fn: function (aNumber){
var self=this;

    	var interval = setInterval(self, aNumber);
    	return smalltalk.Timeout._on_(interval);
    ;
;
return self},
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<\x0a    \x09var interval = setInterval(self, aNumber);\x0a    \x09return smalltalk.Timeout._on_(interval);\x0a    >",
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
fn: function (aNumber){
var self=this;

    	var timeout = setTimeout(self, aNumber);
    	return smalltalk.Timeout._on_(timeout);
    ;
;
return self},
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<\x0a    \x09var timeout = setTimeout(self, aNumber);\x0a    \x09return smalltalk.Timeout._on_(timeout);\x0a    >",
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
smalltalk.ForkPool.comment="A ForkPool is responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0aThe default instance is accessed with `ForkPool default`"
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
"_defaultMaxPoolSize",
smalltalk.method({
selector: "defaultMaxPoolSize",
category: 'defaults',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_defaultMaxPoolSize",[]);
return $1;
},
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
messageSends: ["defaultMaxPoolSize", "class"],
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
$1=smalltalk.send(self["@poolSize"],"__lt",[smalltalk.send(self,"_maxPoolSize",[])]);
if(smalltalk.assert($1)){
smalltalk.send(self,"_addWorker",[]);
};
smalltalk.send(self["@queue"],"_back_",[aBlock]);
return self},
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue back: aBlock",
messageSends: ["ifTrue:", "addWorker", "<", "maxPoolSize", "back:"],
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@poolSize"]=(0);
self["@queue"]=smalltalk.send((smalltalk.Queue || Queue),"_new",[]);
self["@worker"]=smalltalk.send(self,"_makeWorker",[]);
return self},
args: [],
source: "initialize\x0a    super initialize.\x0a    \x0a\x09poolSize := 0.\x0a    queue := Queue new.\x0a    worker := self makeWorker",
messageSends: ["initialize", "new", "makeWorker"],
referencedClasses: ["Queue"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_makeWorker",
smalltalk.method({
selector: "makeWorker",
category: 'initialization',
fn: function (){
var self=this;
var $2,$1;
var sentinel;
sentinel=smalltalk.send((smalltalk.Object || Object),"_new",[]);
$1=(function(){
var block;
self["@poolSize"]=smalltalk.send(self["@poolSize"],"__minus",[(1)]);
self["@poolSize"];
block=smalltalk.send(self["@queue"],"_frontIfAbsent_",[(function(){
return sentinel;
})]);
block;
$2=smalltalk.send(block,"__eq_eq",[sentinel]);
if(! smalltalk.assert($2)){
return smalltalk.send((function(){
return smalltalk.send(block,"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(self,"_addWorker",[]);
})]);
};
});
return $1;
},
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a    sentinel := Object new.\x0a    ^[ | block |\x0a        poolSize := poolSize - 1.\x0a\x09\x09block := queue frontIfAbsent: [ sentinel ].\x0a        block == sentinel ifFalse: [\x0a        \x09[ block value ] ensure: [ self addWorker ]]]",
messageSends: ["new", "-", "frontIfAbsent:", "ifFalse:", "ensure:", "addWorker", "value", "=="],
referencedClasses: ["Object"]
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_maxPoolSize",
smalltalk.method({
selector: "maxPoolSize",
category: 'accessing',
fn: function (){
var self=this;
var $2,$1;
$2=self["@maxPoolSize"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=smalltalk.send(self,"_defaultMaxPoolSize",[]);
} else {
$1=$2;
};
return $1;
},
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
messageSends: ["ifNil:", "defaultMaxPoolSize"],
referencedClasses: []
}),
smalltalk.ForkPool);

smalltalk.addMethod(
"_maxPoolSize_",
smalltalk.method({
selector: "maxPoolSize:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@maxPoolSize"]=anInteger;
return self},
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
messageSends: [],
referencedClasses: []
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
smalltalk.Queue.comment="I am a one-sided Queue.\x0a\x0aI use two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me; write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to."
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@read"]=[];
self["@readIndex"]=(1);
self["@write"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := #().\x0a    readIndex := 1.\x0a    write := OrderedCollection new",
messageSends: ["initialize", "new"],
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
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_messageText_",[smalltalk.send("Errorclass: ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])])]);
return self},
args: [],
source: "initialize\x0a\x09self messageText: 'Errorclass: ', (self class name).",
messageSends: ["messageText:", ",", "name", "class"],
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


smalltalk.addPackage('Compiler-Core', {});
smalltalk.addClass('Compiler', smalltalk.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
smalltalk.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`. \x0aThe default code generator is an instance of `InlinedCodeGenerator`"
smalltalk.addMethod(
"_codeGeneratorClass",
smalltalk.method({
selector: "codeGeneratorClass",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@codeGeneratorClass"]) == nil || $receiver == undefined){
$1=(smalltalk.InliningCodeGenerator || InliningCodeGenerator);
} else {
$1=self["@codeGeneratorClass"];
};
return $1;
},
args: [],
source: "codeGeneratorClass\x0a\x09^codeGeneratorClass ifNil: [InliningCodeGenerator]",
messageSends: ["ifNil:"],
referencedClasses: ["InliningCodeGenerator"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_codeGeneratorClass_",
smalltalk.method({
selector: "codeGeneratorClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@codeGeneratorClass"]=aClass;
return self},
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_",
smalltalk.method({
selector: "compile:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[aString])]);
return $1;
},
args: ["aString"],
source: "compile: aString\x0a\x09^self compileNode: (self parse: aString)",
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compile_forClass_",
smalltalk.method({
selector: "compile:forClass:",
category: 'compiling',
fn: function (aString,aClass){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[aClass]);
smalltalk.send(self,"_source_",[aString]);
$1=smalltalk.send(self,"_compile_",[aString]);
return $1;
},
args: ["aString", "aClass"],
source: "compile: aString forClass: aClass\x0a\x09self currentClass: aClass.\x0a\x09self source: aString.\x0a\x09^self compile: aString",
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileExpression_",
smalltalk.method({
selector: "compileExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
smalltalk.send(self,"_currentClass_",[(smalltalk.DoIt || DoIt)]);
smalltalk.send(self,"_source_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
$1=smalltalk.send(self,"_compileNode_",[smalltalk.send(self,"_parse_",[smalltalk.send(self,"_source",[])])]);
return $1;
},
args: ["aString"],
source: "compileExpression: aString\x0a\x09self currentClass: DoIt.\x0a\x09self source: 'doIt ^[', aString, '] value'.\x0a\x09^self compileNode: (self parse: self source)",
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var $1;
var generator;
var result;
generator=smalltalk.send(smalltalk.send(self,"_codeGeneratorClass",[]),"_new",[]);
smalltalk.send(generator,"_source_",[smalltalk.send(self,"_source",[])]);
$1=smalltalk.send(generator,"_currentClass_",[smalltalk.send(self,"_currentClass",[])]);
result=smalltalk.send(generator,"_compileNode_",[aNode]);
smalltalk.send(self,"_unknownVariables_",[[]]);
return result;
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| generator result |\x0a\x09generator := self codeGeneratorClass new.\x0a\x09generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass.\x0a\x09result := generator compileNode: aNode.\x0a\x09self unknownVariables: #().\x0a\x09^result",
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@currentClass"];
},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'compiling',
fn: function (aString){
var self=this;
return eval(aString);
;
return self},
args: ["aString"],
source: "eval: aString\x0a\x09<return eval(aString)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_evaluateExpression_",
smalltalk.method({
selector: "evaluateExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var result;
smalltalk.send((smalltalk.DoIt || DoIt),"_addCompiledMethod_",[smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compileExpression_",[aString])])]);
result=smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_new",[]),"_doIt",[]);
smalltalk.send((smalltalk.DoIt || DoIt),"_removeCompiledMethod_",[smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt),"_methodDictionary",[]),"_at_",["doIt"])]);
return result;
},
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09| result |\x0a\x09DoIt addCompiledMethod: (self eval: (self compileExpression: aString)).\x0a\x09result := DoIt new doIt.\x0a\x09DoIt removeCompiledMethod: (DoIt methodDictionary at: 'doIt').\x0a\x09^result",
messageSends: ["addCompiledMethod:", "eval:", "compileExpression:", "doIt", "new", "removeCompiledMethod:", "at:", "methodDictionary"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_install_forClass_category_",
smalltalk.method({
selector: "install:forClass:category:",
category: 'compiling',
fn: function (aString,aBehavior,anotherString){
var self=this;
var compiled;
compiled=smalltalk.send(self,"_eval_",[smalltalk.send(self,"_compile_forClass_",[aString,aBehavior])]);
smalltalk.send(compiled,"_category_",[anotherString]);
smalltalk.send(aBehavior,"_addCompiledMethod_",[compiled]);
smalltalk.send(self,"_setupClass_",[aBehavior]);
return compiled;
},
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior category: anotherString\x0a\x09| compiled |\x0a\x09compiled := self eval: (self compile: aString forClass: aBehavior).\x0a\x09compiled category: anotherString.\x0a\x09aBehavior addCompiledMethod: compiled.\x0a    self setupClass: aBehavior.\x0a\x09^compiled",
messageSends: ["eval:", "compile:forClass:", "category:", "addCompiledMethod:", "setupClass:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_parse_",[aString]);
return $1;
},
args: ["aString"],
source: "parse: aString\x0a    ^Smalltalk current parse: aString",
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_parseExpression_",
smalltalk.method({
selector: "parseExpression:",
category: 'compiling',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self,"_parse_",[smalltalk.send(smalltalk.send("doIt ^[","__comma",[aString]),"__comma",["] value"])]);
return $1;
},
args: ["aString"],
source: "parseExpression: aString\x0a    ^self parse: 'doIt ^[', aString, '] value'",
messageSends: ["parse:", ","],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
category: 'compiling',
fn: function (aClass){
var self=this;
var $1;
smalltalk.send(smalltalk.send(aClass,"_methodDictionary",[]),"_do_",[(function(each){
smalltalk.send(console,"_log_",[smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_name",[]),"__comma",[" >> "]),"__comma",[smalltalk.send(each,"_selector",[])])]);
return smalltalk.send(self,"_install_forClass_category_",[smalltalk.send(each,"_source",[]),aClass,smalltalk.send(each,"_category",[])]);
})]);
smalltalk.send(self,"_setupClass_",[aClass]);
$1=smalltalk.send(aClass,"_isMetaclass",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_recompile_",[smalltalk.send(aClass,"_class",[])]);
};
return self},
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass methodDictionary do: [:each |\x0a\x09\x09console log: aClass name, ' >> ', each selector.\x0a\x09\x09self install: each source forClass: aClass category: each category].\x0a\x09self setupClass: aClass.\x0a\x09aClass isMetaclass ifFalse: [self recompile: aClass class]",
messageSends: ["do:", "log:", ",", "selector", "name", "install:forClass:category:", "source", "category", "methodDictionary", "setupClass:", "ifFalse:", "recompile:", "class", "isMetaclass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
fn: function (){
var self=this;
var $1;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[]),"_do_",[(function(each){
smalltalk.send((smalltalk.Transcript || Transcript),"_show_",[each]);
$1=smalltalk.send((smalltalk.Transcript || Transcript),"_cr",[]);
$1;
return smalltalk.send((function(){
return smalltalk.send(self,"_recompile_",[each]);
}),"_valueWithTimeout_",[(100)]);
})]);
return self},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09Transcript show: each; cr.\x0a\x09\x09[self recompile: each] valueWithTimeout: 100]",
messageSends: ["do:", "show:", "cr", "valueWithTimeout:", "recompile:", "classes", "current"],
referencedClasses: ["Transcript", "Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_setupClass_",
smalltalk.method({
selector: "setupClass:",
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
;
return self},
args: ["aClass"],
source: "setupClass: aClass\x0a\x09<smalltalk.init(aClass)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
return self["@unknownVariables"];
},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
"_unknownVariables_",
smalltalk.method({
selector: "unknownVariables:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@unknownVariables"]=aCollection;
return self},
args: ["aCollection"],
source: "unknownVariables: aCollection\x0a\x09unknownVariables := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);


smalltalk.addMethod(
"_recompile_",
smalltalk.method({
selector: "recompile:",
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_recompile_",[aClass]);
return self},
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
messageSends: ["recompile:", "new"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
"_recompileAll",
smalltalk.method({
selector: "recompileAll",
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_classes",[]),"_do_",[(function(each){
return smalltalk.send(self,"_recompile_",[each]);
})]);
return self},
args: [],
source: "recompileAll\x0a\x09Smalltalk current classes do: [:each |\x0a\x09\x09self recompile: each]",
messageSends: ["do:", "recompile:", "classes", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler-Core');
smalltalk.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`."


smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler-Core');
smalltalk.NodeVisitor.comment="I am the abstract super class of all AST node visitors."
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(aNode,"_accept_",[self]);
return $1;
},
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAll_",
smalltalk.method({
selector: "visitAll:",
category: 'visiting',
fn: function (aCollection){
var self=this;
var $1;
$1=smalltalk.send(aCollection,"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return $1;
},
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection do: [ :each | self visit: each ]",
messageSends: ["do:", "visit:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitSequenceNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitVariableNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09^ self visitVariableNode: aNode",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitNode_",
smalltalk.method({
selector: "visitNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitAll_",[smalltalk.send(aNode,"_nodes",[])]);
return $1;
},
args: ["aNode"],
source: "visitNode: aNode\x0a\x09^ self visitAll: aNode nodes",
messageSends: ["visitAll:", "nodes"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitNode_",[aNode]);
return $1;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('AbstractCodeGenerator', smalltalk.NodeVisitor, ['currentClass', 'source'], 'Compiler-Core');
smalltalk.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API."
smalltalk.addMethod(
"_classNameFor_",
smalltalk.method({
selector: "classNameFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(aClass,"_isMetaclass",[]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(smalltalk.send(aClass,"_instanceClass",[]),"_name",[]),"__comma",[".klass"]);
} else {
$3=smalltalk.send(aClass,"_isNil",[]);
if(smalltalk.assert($3)){
$1="nil";
} else {
$1=smalltalk.send(aClass,"_name",[]);
};
};
return $1;
},
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^aClass isMetaclass\x0a\x09    ifTrue: [aClass instanceClass name, '.klass']\x0a\x09    ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09    ifTrue: ['nil']\x0a\x09\x09    ifFalse: [aClass name]]",
messageSends: ["ifTrue:ifFalse:", ",", "name", "instanceClass", "isNil", "isMetaclass"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass",
smalltalk.method({
selector: "currentClass",
category: 'accessing',
fn: function (){
var self=this;
return self["@currentClass"];
},
args: [],
source: "currentClass\x0a\x09^currentClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_currentClass_",
smalltalk.method({
selector: "currentClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self},
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
category: 'accessing',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
},
args: [],
source: "pseudoVariables\x0a\x09^#('self' 'super' 'true' 'false' 'nil' 'thisContext')",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_safeVariableNameFor_",
smalltalk.method({
selector: "safeVariableNameFor:",
category: 'accessing',
fn: function (aString){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_reservedWords",[]),"_includes_",[aString]);
if(smalltalk.assert($2)){
$1=smalltalk.send(aString,"__comma",["_"]);
} else {
$1=aString;
};
return $1;
},
args: ["aString"],
source: "safeVariableNameFor: aString\x0a\x09^(Smalltalk current reservedWords includes: aString)\x0a\x09\x09ifTrue: [aString, '_']\x0a\x09\x09ifFalse: [aString]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractCodeGenerator);



smalltalk.addClass('CodeGenerator', smalltalk.AbstractCodeGenerator, [], 'Compiler-Core');
smalltalk.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation."
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var $2,$3,$1;
var ir;
var stream;
smalltalk.send(smalltalk.send(self,"_semanticAnalyzer",[]),"_visit_",[aNode]);
ir=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[aNode]);
$2=smalltalk.send(self,"_irTranslator",[]);
smalltalk.send($2,"_visit_",[ir]);
$3=smalltalk.send($2,"_contents",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "irTranslator", "contents"],
referencedClasses: []
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRJSTranslator || IRJSTranslator),"_new",[]);
return $1;
},
args: [],
source: "irTranslator\x0a\x09^ IRJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRJSTranslator"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_semanticAnalyzer",
smalltalk.method({
selector: "semanticAnalyzer",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.SemanticAnalyzer || SemanticAnalyzer),"_on_",[smalltalk.send(self,"_currentClass",[])]);
return $1;
},
args: [],
source: "semanticAnalyzer\x0a\x09^ SemanticAnalyzer on: self currentClass",
messageSends: ["on:", "currentClass"],
referencedClasses: ["SemanticAnalyzer"]
}),
smalltalk.CodeGenerator);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
category: 'compiling',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRASTTranslator || IRASTTranslator),"_new",[]);
smalltalk.send($2,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($2,"_theClass_",[smalltalk.send(self,"_currentClass",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "theClass:", "currentClass", "yourself"],
referencedClasses: ["IRASTTranslator"]
}),
smalltalk.CodeGenerator);



smalltalk.addClass('FunCodeGenerator', smalltalk.AbstractCodeGenerator, ['stream', 'nestedBlocks', 'earlyReturn', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'argVariables'], 'Compiler-Core');
smalltalk.addMethod(
"_argVariables",
smalltalk.method({
selector: "argVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@argVariables"],"_copy",[]);
return $1;
},
args: [],
source: "argVariables\x0a\x09^argVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_checkClass_for_",
smalltalk.method({
selector: "checkClass:for:",
category: 'optimizations',
fn: function (aClassName,receiver){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("((($receiver = ","__comma",[receiver]),"__comma",[").klass === smalltalk."]),"__comma",[aClassName]),"__comma",[") ? "])]);
return self},
args: ["aClassName", "receiver"],
source: "checkClass: aClassName for: receiver\x0a        stream nextPutAll: '((($receiver = ', receiver, ').klass === smalltalk.', aClassName, ') ? '",
messageSends: ["nextPutAll:", ","],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var $1;
self["@stream"]=smalltalk.send("","_writeStream",[]);
smalltalk.send(self,"_visit_",[aNode]);
$1=smalltalk.send(self["@stream"],"_contents",[]);
return $1;
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09stream := '' writeStream.\x0a\x09self visit: aNode.\x0a\x09^stream contents",
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.AbstractCodeGenerator);
self["@stream"]=smalltalk.send("","_writeStream",[]);
self["@unknownVariables"]=[];
self["@tempVariables"]=[];
self["@argVariables"]=[];
self["@messageSends"]=[];
self["@classReferenced"]=[];
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream. \x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09messageSends := #().\x0a\x09classReferenced := #()",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inline_receiver_argumentNodes_",
smalltalk.method({
selector: "inline:receiver:argumentNodes:",
category: 'optimizations',
fn: function (aSelector,receiver,aCollection){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
var inlined;
inlined=false;
$1=smalltalk.send(aSelector,"__eq",["ifFalse:"]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($2)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["(! $receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil)"]);
inlined=true;
inlined;
};
};
$3=smalltalk.send(aSelector,"__eq",["ifTrue:"]);
if(smalltalk.assert($3)){
$4=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($4)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["($receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil)"]);
inlined=true;
inlined;
};
};
$5=smalltalk.send(aSelector,"__eq",["ifTrue:ifFalse:"]);
if(smalltalk.assert($5)){
$6=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($6)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["($receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["())"]);
inlined=true;
inlined;
};
};
$7=smalltalk.send(aSelector,"__eq",["ifFalse:ifTrue:"]);
if(smalltalk.assert($7)){
$8=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($8)){
smalltalk.send(self,"_checkClass_for_",["Boolean",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["(! $receiver ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["())"]);
inlined=true;
inlined;
};
};
$9=smalltalk.send(aSelector,"__eq",["<"]);
if(smalltalk.assert($9)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver <"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$10=smalltalk.send(aSelector,"__eq",["<="]);
if(smalltalk.assert($10)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver <="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$11=smalltalk.send(aSelector,"__eq",[">"]);
if(smalltalk.assert($11)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver >"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$12=smalltalk.send(aSelector,"__eq",[">="]);
if(smalltalk.assert($12)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver >="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$13=smalltalk.send(aSelector,"__eq",["+"]);
if(smalltalk.assert($13)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver +"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$14=smalltalk.send(aSelector,"__eq",["-"]);
if(smalltalk.assert($14)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver -"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$15=smalltalk.send(aSelector,"__eq",["*"]);
if(smalltalk.assert($15)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver *"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
$16=smalltalk.send(aSelector,"__eq",["/"]);
if(smalltalk.assert($16)){
smalltalk.send(self,"_checkClass_for_",["Number",receiver]);
smalltalk.send(self["@stream"],"_nextPutAll_",["$receiver /"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
return inlined;
},
args: ["aSelector", "receiver", "aCollection"],
source: "inline: aSelector receiver: receiver argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a\x0a\x09\x22-- Booleans --\x22\x0a\x0a\x09(aSelector = 'ifFalse:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : nil)'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifTrue:ifFalse:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '($receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifFalse:ifTrue:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a                \x09self checkClass: 'Boolean' for: receiver.\x0a                \x09stream nextPutAll: '(! $receiver ? '.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '() : '.\x0a          \x09\x09self visit: aCollection second.\x0a          \x09\x09stream nextPutAll: '())'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver <='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>') ifTrue: [ \x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver >='.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '+') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver +'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '-') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver -'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '*') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver *'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        (aSelector = '/') ifTrue: [\x0a                self checkClass: 'Number' for: receiver.\x0a                stream nextPutAll: '$receiver /'.\x0a                self visit: aCollection first.\x0a                inlined := true].\x0a\x0a        ^inlined",
messageSends: ["ifTrue:", "checkClass:for:", "nextPutAll:", "visit:", "first", "isBlockNode", "=", "second", "and:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_inlineLiteral_receiverNode_argumentNodes_",
smalltalk.method({
selector: "inlineLiteral:receiverNode:argumentNodes:",
category: 'optimizations',
fn: function (aSelector,anObject,aCollection){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32;
var inlined;
inlined=false;
$1=smalltalk.send(aSelector,"__eq",["whileTrue:"]);
if(smalltalk.assert($1)){
$2=smalltalk.send(smalltalk.send(anObject,"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($2)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while("]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()}})()"]);
inlined=true;
inlined;
};
};
$3=smalltalk.send(aSelector,"__eq",["whileFalse:"]);
if(smalltalk.assert($3)){
$4=smalltalk.send(smalltalk.send(anObject,"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($4)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while(!"]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {"]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()}})()"]);
inlined=true;
inlined;
};
};
$5=smalltalk.send(aSelector,"__eq",["whileTrue"]);
if(smalltalk.assert($5)){
$6=smalltalk.send(anObject,"_isBlockNode",[]);
if(smalltalk.assert($6)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while("]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {}})()"]);
inlined=true;
inlined;
};
};
$7=smalltalk.send(aSelector,"__eq",["whileFalse"]);
if(smalltalk.assert($7)){
$8=smalltalk.send(anObject,"_isBlockNode",[]);
if(smalltalk.assert($8)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(function(){while(!"]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()) {}})()"]);
inlined=true;
inlined;
};
};
$9=smalltalk.send(aSelector,"__eq",["+"]);
if(smalltalk.assert($9)){
$10=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($10)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" + "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$11=smalltalk.send(aSelector,"__eq",["-"]);
if(smalltalk.assert($11)){
$12=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($12)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" - "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$13=smalltalk.send(aSelector,"__eq",["*"]);
if(smalltalk.assert($13)){
$14=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($14)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" * "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$15=smalltalk.send(aSelector,"__eq",["/"]);
if(smalltalk.assert($15)){
$16=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($16)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" / "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$17=smalltalk.send(aSelector,"__eq",["<"]);
if(smalltalk.assert($17)){
$18=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($18)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" < "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$19=smalltalk.send(aSelector,"__eq",["<="]);
if(smalltalk.assert($19)){
$20=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($20)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" <= "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$21=smalltalk.send(aSelector,"__eq",[">"]);
if(smalltalk.assert($21)){
$22=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($22)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" > "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$23=smalltalk.send(aSelector,"__eq",[">="]);
if(smalltalk.assert($23)){
$24=smalltalk.send(self,"_isNode_ofClass_",[anObject,(smalltalk.Number || Number)]);
if(smalltalk.assert($24)){
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[" >= "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
inlined=true;
inlined;
};
};
$25=smalltalk.send(aSelector,"__eq",["ifNil:"]);
if(smalltalk.assert($25)){
$26=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($26)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : $receiver"]);
inlined=true;
inlined;
};
};
$27=smalltalk.send(aSelector,"__eq",["ifNotNil:"]);
if(smalltalk.assert($27)){
$28=smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]);
if(smalltalk.assert($28)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") != nil && $receiver != undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : nil"]);
inlined=true;
inlined;
};
};
$29=smalltalk.send(aSelector,"__eq",["ifNil:ifNotNil:"]);
if(smalltalk.assert($29)){
$30=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($30)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()"]);
inlined=true;
inlined;
};
};
$31=smalltalk.send(aSelector,"__eq",["ifNotNil:ifNil:"]);
if(smalltalk.assert($31)){
$32=smalltalk.send(smalltalk.send(smalltalk.send(aCollection,"_first",[]),"_isBlockNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(aCollection,"_second",[]),"_isBlockNode",[]);
})]);
if(smalltalk.assert($32)){
smalltalk.send(self["@stream"],"_nextPutAll_",["(($receiver = "]);
smalltalk.send(self,"_visit_",[anObject]);
smalltalk.send(self["@stream"],"_nextPutAll_",[") == nil || $receiver == undefined) ? "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_second",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["() : "]);
smalltalk.send(self,"_visit_",[smalltalk.send(aCollection,"_first",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["()"]);
inlined=true;
inlined;
};
};
return inlined;
},
args: ["aSelector", "anObject", "aCollection"],
source: "inlineLiteral: aSelector receiverNode: anObject argumentNodes: aCollection\x0a        | inlined |\x0a        inlined := false.\x0a \x0a\x09\x22-- BlockClosures --\x22\x0a\x0a\x09(aSelector = 'whileTrue:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse:') ifTrue: [\x0a          \x09(anObject isBlockNode and: [aCollection first isBlockNode]) ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {'.\x0a                \x09self visit: aCollection first.\x0a          \x09\x09stream nextPutAll: '()}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileTrue') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while('.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = 'whileFalse') ifTrue: [\x0a          \x09anObject isBlockNode ifTrue: [\x0a                \x09stream nextPutAll: '(function(){while(!'.\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: '()) {}})()'.\x0a                \x09inlined := true]].\x0a\x0a\x09\x22-- Numbers --\x22\x0a\x0a\x09(aSelector = '+') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' + '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '-') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' - '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '*') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' * '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '/') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' / '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' < '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '<=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' <= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' > '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a\x0a\x09(aSelector = '>=') ifTrue: [\x0a          \x09(self isNode: anObject ofClass: Number) ifTrue: [\x0a                  \x09self visit: anObject.\x0a                  \x09stream nextPutAll: ' >= '.\x0a                \x09self visit: aCollection first.\x0a                \x09inlined := true]].\x0a                \x09   \x0a\x09\x22-- UndefinedObject --\x22\x0a\x0a\x09(aSelector = 'ifNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : $receiver'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:') ifTrue: [\x0a\x09\x09aCollection first isBlockNode ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') != nil && $receiver != undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : nil'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNil:ifNotNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a\x0a\x09(aSelector = 'ifNotNil:ifNil:') ifTrue: [\x0a\x09\x09(aCollection first isBlockNode and: [aCollection second isBlockNode]) ifTrue: [\x0a          \x09\x09stream nextPutAll: '(($receiver = '.\x0a          \x09\x09self visit: anObject.\x0a          \x09\x09stream nextPutAll: ') == nil || $receiver == undefined) ? '.\x0a                  \x09self visit: aCollection second.\x0a                  \x09stream nextPutAll: '() : '.\x0a                  \x09self visit: aCollection first.\x0a                  \x09stream nextPutAll: '()'.\x0a                  \x09inlined := true]].\x0a                 \x0a        ^inlined",
messageSends: ["ifTrue:", "nextPutAll:", "visit:", "first", "and:", "isBlockNode", "=", "isNode:ofClass:", "second"],
referencedClasses: ["Number"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_isNode_ofClass_",
smalltalk.method({
selector: "isNode:ofClass:",
category: 'optimizations',
fn: function (aNode,aClass){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(aNode,"_isValueNode",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_value",[]),"_class",[]),"__eq",[aClass]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_value",[]),"__eq",["self"]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(self,"_currentClass",[]),"__eq",[aClass]);
})]);
})]);
})]);
return $1;
},
args: ["aNode", "aClass"],
source: "isNode: aNode ofClass: aClass\x0a\x09^aNode isValueNode and: [\x0a          \x09aNode value class = aClass or: [\x0a          \x09\x09aNode value = 'self' and: [self currentClass = aClass]]]",
messageSends: ["and:", "or:", "=", "currentClass", "value", "class", "isValueNode"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_knownVariables",
smalltalk.method({
selector: "knownVariables",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_pseudoVariables",[]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_tempVariables",[])]);
smalltalk.send($2,"_addAll_",[smalltalk.send(self,"_argVariables",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "knownVariables\x0a\x09^self pseudoVariables \x0a\x09\x09addAll: self tempVariables;\x0a\x09\x09addAll: self argVariables;\x0a\x09\x09yourself",
messageSends: ["addAll:", "tempVariables", "pseudoVariables", "argVariables", "yourself"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_performOptimizations",[]);
return $1;
},
args: [],
source: "performOptimizations\x0a\x09^self class performOptimizations",
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_send_to_arguments_superSend_",
smalltalk.method({
selector: "send:to:arguments:superSend:",
category: 'visiting',
fn: function (aSelector,aReceiver,aCollection,aBoolean){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.String || String),"_streamContents_",[(function(str){
var tmp;
tmp=self["@stream"];
tmp;
smalltalk.send(str,"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(str,"_nextPutAll_",[aReceiver]);
smalltalk.send(str,"_nextPutAll_",[smalltalk.send(smalltalk.send(", \x22","__comma",[smalltalk.send(aSelector,"_asSelector",[])]),"__comma",["\x22, ["])]);
self["@stream"]=str;
self["@stream"];
smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[", "]);
})]);
self["@stream"]=tmp;
self["@stream"];
smalltalk.send(str,"_nextPutAll_",["]"]);
if(smalltalk.assert(aBoolean)){
smalltalk.send(str,"_nextPutAll_",[smalltalk.send(smalltalk.send(", smalltalk.","__comma",[smalltalk.send(self,"_classNameFor_",[smalltalk.send(self,"_currentClass",[])])]),"__comma",[".superclass || nil"])]);
};
return smalltalk.send(str,"_nextPutAll_",[")"]);
})]);
return $1;
},
args: ["aSelector", "aReceiver", "aCollection", "aBoolean"],
source: "send: aSelector to: aReceiver arguments: aCollection superSend: aBoolean\x0a\x09^String streamContents: [:str || tmp |\x0a        \x09tmp := stream.\x0a\x09\x09str nextPutAll: 'smalltalk.send('.\x0a\x09\x09str nextPutAll: aReceiver.\x0a\x09\x09str nextPutAll: ', \x22', aSelector asSelector, '\x22, ['.\x0a                stream := str.\x0a\x09\x09aCollection\x0a\x09    \x09\x09do: [:each | self visit: each]\x0a\x09    \x09\x09separatedBy: [stream nextPutAll: ', '].\x0a                stream := tmp.\x0a                str nextPutAll: ']'.\x0a\x09\x09aBoolean ifTrue: [\x0a\x09\x09\x09str nextPutAll: ', smalltalk.', (self classNameFor: self currentClass), '.superclass || nil'].\x0a\x09\x09str nextPutAll: ')']",
messageSends: ["streamContents:", "nextPutAll:", ",", "asSelector", "do:separatedBy:", "visit:", "ifTrue:", "classNameFor:", "currentClass"],
referencedClasses: ["String"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_tempVariables",
smalltalk.method({
selector: "tempVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@tempVariables"],"_copy",[]);
return $1;
},
args: [],
source: "tempVariables\x0a\x09^tempVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@unknownVariables"],"_copy",[]);
return $1;
},
args: [],
source: "unknownVariables\x0a\x09^unknownVariables copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode,"_accept_",[self]);
return self},
args: ["aNode"],
source: "visit: aNode\x0a\x09aNode accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["("]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[")"]);
return self},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09stream nextPutAll: '('.\x0a\x09self visit: aNode left.\x0a\x09stream nextPutAll: '='.\x0a\x09self visit: aNode right.\x0a\x09stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "visit:", "left", "right"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["(function("]);
smalltalk.send(smalltalk.send(aNode,"_parameters",[]),"_do_separatedBy_",[(function(each){
smalltalk.send(self["@tempVariables"],"_add_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[", "]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09stream nextPutAll: '(function('.\x0a\x09aNode parameters \x0a\x09    do: [:each |\x0a\x09\x09tempVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream nextPutAll: '){'.\x0a\x09aNode nodes do: [:each | self visit: each].\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "add:", "parameters", "do:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3;
var index;
self["@nestedBlocks"]=smalltalk.send(self["@nestedBlocks"],"__plus",[(1)]);
$1=smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_isEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return nil;"]);
} else {
smalltalk.send(smalltalk.send(aNode,"_temps",[]),"_do_",[(function(each){
var temp;
temp=smalltalk.send(self,"_safeVariableNameFor_",[each]);
temp;
smalltalk.send(self["@tempVariables"],"_add_",[temp]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("var ","__comma",[temp]),"__comma",["=nil;"])]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return $2;
})]);
index=(0);
index;
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
index=smalltalk.send(index,"__plus",[(1)]);
index;
$3=smalltalk.send(index,"__eq",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_size",[])]);
if(smalltalk.assert($3)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
};
smalltalk.send(self,"_visit_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
})]);
};
self["@nestedBlocks"]=smalltalk.send(self["@nestedBlocks"],"__minus",[(1)]);
return self},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09| index |\x0a\x09nestedBlocks := nestedBlocks + 1.\x0a\x09aNode nodes isEmpty\x0a\x09    ifTrue: [\x0a\x09\x09stream nextPutAll: 'return nil;']\x0a\x09    ifFalse: [\x0a\x09\x09aNode temps do: [:each | | temp |\x0a                    temp := self safeVariableNameFor: each.\x0a\x09\x09    tempVariables add: temp.\x0a\x09\x09    stream nextPutAll: 'var ', temp, '=nil;'; lf].\x0a\x09\x09index := 0.\x0a\x09\x09aNode nodes do: [:each |\x0a\x09\x09    index := index + 1.\x0a\x09\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09\x09stream nextPutAll: 'return '].\x0a\x09\x09    self visit: each.\x0a\x09\x09    stream nextPutAll: ';']].\x0a\x09nestedBlocks := nestedBlocks - 1",
messageSends: ["+", "ifTrue:ifFalse:", "nextPutAll:", "do:", "safeVariableNameFor:", "add:", ",", "lf", "temps", "ifTrue:", "=", "size", "nodes", "visit:", "isEmpty", "-"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var index;
index=(0);
$1=smalltalk.send(self["@tempVariables"],"_includes_",["$rec"]);
if(! smalltalk.assert($1)){
smalltalk.send(self["@tempVariables"],"_add_",["$rec"]);
};
smalltalk.send(self["@stream"],"_nextPutAll_",["(function($rec){"]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
index=smalltalk.send(index,"__plus",[(1)]);
index;
$2=smalltalk.send(index,"__eq",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_size",[])]);
if(smalltalk.assert($2)){
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
};
smalltalk.send(each,"_receiver_",[smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode),"_new",[]),"_value_",["$rec"])]);
smalltalk.send(self,"_visit_",[each]);
return smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})("]);
smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_receiver",[])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[")"]);
return self},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| index |\x0a\x09index := 0.\x0a\x09(tempVariables includes: '$rec') ifFalse: [\x0a\x09\x09tempVariables add: '$rec'].\x0a\x09stream nextPutAll: '(function($rec){'.\x0a\x09aNode nodes do: [:each |\x0a\x09    index := index + 1.\x0a\x09    index = aNode nodes size ifTrue: [\x0a\x09\x09stream nextPutAll: 'return '].\x0a\x09    each receiver: (VariableNode new value: '$rec').\x0a\x09    self visit: each.\x0a\x09    stream nextPutAll: ';'].\x0a\x09stream nextPutAll: '})('.\x0a\x09self visit: aNode receiver.\x0a\x09stream nextPutAll: ')'",
messageSends: ["ifFalse:", "add:", "includes:", "nextPutAll:", "do:", "+", "ifTrue:", "=", "size", "nodes", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: ["VariableNode"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
$1=smalltalk.send(self["@referencedClasses"],"_includes_",[smalltalk.send(aNode,"_value",[])]);
if(! smalltalk.assert($1)){
smalltalk.send(self["@referencedClasses"],"_add_",[smalltalk.send(aNode,"_value",[])]);
};
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.","__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[" || "]),"__comma",[smalltalk.send(aNode,"_value",[])]),"__comma",[")"])]);
return self},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09(referencedClasses includes: aNode value) ifFalse: [\x0a\x09\x09referencedClasses add: aNode value].\x0a\x09stream nextPutAll: '(smalltalk.', aNode value, ' || ', aNode value, ')'",
messageSends: ["ifFalse:", "add:", "value", "includes:", "nextPutAll:", ","],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09stream nextPutAll: '['.\x0a\x09aNode nodes \x0a\x09\x09do: [:each | self visit: each]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "do:separatedBy:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09aNode nodes \x0a\x09\x09\x09do: [:each | self visit: each]\x0a\x09\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "do:separatedBy:", "visit:", "nodes"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitFailure_",
smalltalk.method({
selector: "visitFailure:",
category: 'visiting',
fn: function (aFailure){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(aFailure,"_asString",[])]);
return self},
args: ["aFailure"],
source: "visitFailure: aFailure\x0a\x09self error: aFailure asString",
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(aNode,"_source",[])]);
return self},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09stream nextPutAll: aNode source",
messageSends: ["nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var str=nil;
var currentSelector=nil;
(self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []));
(self['@nestedBlocks']=(0));
(self['@earlyReturn']=false);
(self['@messageSends']=[]);
(self['@referencedClasses']=[]);
(self['@unknownVariables']=[]);
(self['@tempVariables']=[]);
(self['@argVariables']=[]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk.method({"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("selector: \x22", "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", ["\x22,"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("source: ", "__comma", [smalltalk.send(smalltalk.send(self, "_source", []), "_asJavascript", [])]), "__comma", [","])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", ["fn: function("]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@argVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [", "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["){"]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["var self=this;"]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(str=self['@stream']);
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["try{"]);})(str);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", ["var $early={};"]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["try{"]);})(str);})]));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
(self['@stream']=str);
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["return self;"]);})(self['@stream']);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["} catch(e) {if(e===$early)return e[0]; throw e}"]);})(self['@stream']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["} catch(e) {if(e===$early)return e[0]; throw e}"]);})(self['@stream']);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", ["}"]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(",", "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [","])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(self['@argVariables'], "_asJavascript", [])]), "__comma", [","])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", ["referencedClasses: ["]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [","]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["]"]);
smalltalk.send(self['@stream'], "_nextPutAll_", ["})"]);
return self;},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09| str currentSelector | \x0a\x09currentSelector := aNode selector asSelector.\x0a\x09nestedBlocks := 0.\x0a\x09earlyReturn := false.\x0a\x09messageSends := #().\x0a\x09referencedClasses := #().\x0a\x09unknownVariables := #().\x0a\x09tempVariables := #().\x0a\x09argVariables := #().\x0a\x09stream \x0a\x09    nextPutAll: 'smalltalk.method({'; lf;\x0a\x09    nextPutAll: 'selector: \x22', aNode selector, '\x22,'; lf.\x0a\x09stream nextPutAll: 'source: ', self source asJavascript, ',';lf.\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09aNode arguments \x0a\x09    do: [:each | \x0a\x09\x09argVariables add: each.\x0a\x09\x09stream nextPutAll: each]\x0a\x09    separatedBy: [stream nextPutAll: ', '].\x0a\x09stream \x0a\x09    nextPutAll: '){'; lf;\x0a\x09    nextPutAll: 'var self=this;'; lf.\x0a\x09str := stream.\x0a\x09stream := '' writeStream.\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each].\x0a\x09earlyReturn ifTrue: [\x0a\x09    str nextPutAll: 'var $early={};'; lf; nextPutAll: 'try{'].\x0a\x09str nextPutAll: stream contents.\x0a\x09stream := str.\x0a\x09stream \x0a\x09    lf; \x0a\x09    nextPutAll: 'return self;'.\x0a\x09earlyReturn ifTrue: [\x0a\x09    stream lf; nextPutAll: '} catch(e) {if(e===$early)return e[0]; throw e}'].\x0a\x09stream nextPutAll: '}'.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: messageSends asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', argVariables asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09referencedClasses \x0a\x09\x09do: [:each | stream nextPutAll: each printString]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream nextPutAll: ']'.\x0a\x09stream nextPutAll: '})'",
messageSends: ["asSelector", "selector", "nextPutAll:", "lf", ",", "asJavascript", "source", "do:separatedBy:", "arguments", "add:", "writeStream", "do:", "nodes", "visit:", "ifTrue:", "contents", "printString"],
referencedClasses: ["String"]
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@earlyReturn']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@earlyReturn']=true);})]));
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(function(){throw $early=["]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["]})()"]);})]));
return self;},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09nestedBlocks > 0 ifTrue: [\x0a\x09    earlyReturn := true].\x0a\x09nestedBlocks > 0\x0a\x09    ifTrue: [\x0a\x09\x09stream\x0a\x09\x09    nextPutAll: '(function(){throw $early=[']\x0a\x09    ifFalse: [stream nextPutAll: 'return '].\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each].\x0a\x09nestedBlocks > 0 ifTrue: [\x0a\x09    stream nextPutAll: ']})()']",
messageSends: ["ifTrue:", ">", "ifTrue:ifFalse:", "nextPutAll:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
(str=self['@stream']);
((($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]));
(self['@stream']=smalltalk.send("", "_writeStream", []));
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
(superSend=smalltalk.send(smalltalk.send(self['@stream'], "_contents", []), "__eq", ["super"]));
(receiver=((($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})])));
(self['@stream']=str);
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [")"])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));
return self;},
args: ["aNode"],
source: "visitSendNode: aNode\x0a        | str receiver superSend inlined |\x0a        str := stream.\x0a        (messageSends includes: aNode selector) ifFalse: [\x0a                messageSends add: aNode selector].\x0a        stream := '' writeStream.\x0a        self visit: aNode receiver.\x0a        superSend := stream contents = 'super'.\x0a        receiver := superSend ifTrue: ['self'] ifFalse: [stream contents].\x0a        stream := str.\x0a\x09\x0a\x09self performOptimizations \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(self inlineLiteral: aNode selector receiverNode: aNode receiver argumentNodes: aNode arguments) ifFalse: [\x0a\x09\x09\x09\x09(self inline: aNode selector receiver: receiver argumentNodes: aNode arguments)\x0a                \x09\x09\x09ifTrue: [stream nextPutAll: ' : ', (self send: aNode selector to: '$receiver' arguments: aNode arguments superSend: superSend), ')']\x0a                \x09\x09\x09ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]]]\x0a\x09\x09ifFalse: [stream nextPutAll: (self send: aNode selector to: receiver arguments: aNode arguments superSend: superSend)]",
messageSends: ["ifFalse:", "includes:", "selector", "add:", "writeStream", "visit:", "receiver", "=", "contents", "ifTrue:ifFalse:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "arguments", "inline:receiver:argumentNodes:", "nextPutAll:", ",", "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
(temp=smalltalk.send(self, "_safeVariableNameFor_", [each]));smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", ["=nil;"])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [";"]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [:each || temp |\x0a            temp := self safeVariableNameFor: each.\x0a\x09    tempVariables add: temp.\x0a\x09    stream nextPutAll: 'var ', temp, '=nil;'; lf].\x0a\x09aNode nodes do: [:each |\x0a\x09    self visit: each.\x0a\x09    stream nextPutAll: ';']\x0a\x09    separatedBy: [stream lf]",
messageSends: ["do:", "temps", "safeVariableNameFor:", "add:", "nextPutAll:", ",", "lf", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09stream nextPutAll: aNode value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);})() : (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send("self['@", "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", ["']"])]);}), (function(){(varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]));return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(typeof ", "__comma", [varName]), "__comma", [" == 'undefined' ? nil : "]), "__comma", [varName]), "__comma", [")"])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["(smalltalk.getThisContext())"]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})]));
return self;},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09| varName |\x0a\x09(self currentClass allInstanceVariableNames includes: aNode value) \x0a\x09\x09ifTrue: [stream nextPutAll: 'self[''@', aNode value, ''']']\x0a\x09\x09ifFalse: [\x0a                  \x09varName := self safeVariableNameFor: aNode value.\x0a\x09\x09\x09(self knownVariables includes: varName) \x0a                  \x09\x09ifFalse: [\x0a                                  \x09unknownVariables add: aNode value.\x0a                                  \x09aNode assigned \x0a                                  \x09\x09ifTrue: [stream nextPutAll: varName]\x0a                                  \x09\x09ifFalse: [stream nextPutAll: '(typeof ', varName, ' == ''undefined'' ? nil : ', varName, ')']]\x0a                  \x09\x09ifTrue: [\x0a                                  \x09aNode value = 'thisContext'\x0a                                  \x09\x09ifTrue: [stream nextPutAll: '(smalltalk.getThisContext())']\x0a                \x09\x09\x09\x09ifFalse: [stream nextPutAll: varName]]]",
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "nextPutAll:", ",", "safeVariableNameFor:", "ifFalse:ifTrue:", "knownVariables", "add:", "assigned", "="],
referencedClasses: []
}),
smalltalk.FunCodeGenerator);


smalltalk.FunCodeGenerator.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
"_performOptimizations",
smalltalk.method({
selector: "performOptimizations",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;},
args: [],
source: "performOptimizations\x0a\x09^performOptimizations ifNil: [true]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FunCodeGenerator.klass);

smalltalk.addMethod(
"_performOptimizations_",
smalltalk.method({
selector: "performOptimizations:",
category: 'accessing',
fn: function (aBoolean) {
var self=this;
(self['@performOptimizations']=aBoolean);
return self;},
args: ["aBoolean"],
source: "performOptimizations: aBoolean\x0a\x09performOptimizations := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.FunCodeGenerator.klass);


smalltalk.addPackage('Compiler-Exceptions', {});
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');
smalltalk.CompilerError.comment="I am the common superclass of all compiling errors."


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');
smalltalk.ParseError.comment="Instance of ParseError are signaled on any parsing error. \x0aSee `Smalltalk >> #parse:`"


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');
smalltalk.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling"


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler-Exceptions');
smalltalk.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`."


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(" Invalid assignment to variable: ","__comma",[smalltalk.send(self,"_variableName",[])]);
return $1;
},
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("Variable shadowing error: ","__comma",[smalltalk.send(self,"_variableName",[])]),"__comma",[" is already defined"]);
return $1;
},
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("Unknown Variable error: ","__comma",[smalltalk.send(self,"_variableName",[])]),"__comma",[" is not defined"]);
return $1;
},
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);



smalltalk.addPackage('Compiler-AST', {});
smalltalk.addClass('Node', smalltalk.Object, ['nodes', 'shouldBeInlined', 'shouldBeAliased'], 'Compiler-AST');
smalltalk.Node.comment="I am the abstract root class of the abstract syntax tree."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitNode: self",
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
category: 'accessing',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self,"_nodes",[]),"_add_",[aNode]);
return self},
args: ["aNode"],
source: "addNode: aNode\x0a\x09self nodes add: aNode",
messageSends: ["add:", "nodes"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isAssignmentNode\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isImmutable\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReturnNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSendNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isValueNode\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@nodes"]) == nil || $receiver == undefined){
self["@nodes"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@nodes"];
} else {
$1=self["@nodes"];
};
return $1;
},
args: [],
source: "nodes\x0a\x09^nodes ifNil: [nodes := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Node);

smalltalk.addMethod(
"_nodes_",
smalltalk.method({
selector: "nodes:",
category: 'building',
fn: function (aCollection){
var self=this;
self["@nodes"]=aCollection;
return self},
args: ["aCollection"],
source: "nodes: aCollection\x0a\x09nodes := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased",
smalltalk.method({
selector: "shouldBeAliased",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeAliased"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeAliased"];
};
return $1;
},
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeAliased_",
smalltalk.method({
selector: "shouldBeAliased:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined",
smalltalk.method({
selector: "shouldBeInlined",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@shouldBeInlined"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@shouldBeInlined"];
};
return $1;
},
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_shouldBeInlined_",
smalltalk.method({
selector: "shouldBeInlined:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self},
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_shouldBeAliased",[]),"_or_",[(function(){
return smalltalk.send(self,"_shouldBeInlined",[]);
})]),"_or_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self,"_nodes",[]),"_detect_ifNone_",[(function(node){
return smalltalk.send(node,"_subtreeNeedsAliasing",[]);
}),(function(){
return false;
})]),"_~_eq",[false]);
})]);
return $1;
},
args: [],
source: "subtreeNeedsAliasing\x0a    ^(self shouldBeAliased or: [ self shouldBeInlined ]) or: [\x0a        (self nodes detect: [ :node | node subtreeNeedsAliasing ] ifNone: [ false ]) ~= false\x0a    ]",
messageSends: ["or:", "~=", "detect:ifNone:", "subtreeNeedsAliasing", "nodes", "shouldBeInlined", "shouldBeAliased"],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitAssignmentNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_isAssignmentNode",
smalltalk.method({
selector: "isAssignmentNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isAssignmentNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left",
smalltalk.method({
selector: "left",
category: 'accessing',
fn: function (){
var self=this;
return self["@left"];
},
args: [],
source: "left\x0a\x09^left",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_left_",
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@left"]=aNode;
return self},
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.Array || Array),"_with_with_",[smalltalk.send(self,"_left",[]),smalltalk.send(self,"_right",[])]);
return $1;
},
args: [],
source: "nodes\x0a\x09^ Array with: self left with: self right",
messageSends: ["with:with:", "left", "right"],
referencedClasses: ["Array"]
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right",
smalltalk.method({
selector: "right",
category: 'accessing',
fn: function (){
var self=this;
return self["@right"];
},
args: [],
source: "right\x0a\x09^right",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
"_right_",
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@right"]=aNode;
return self},
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_isBlockNode",
smalltalk.method({
selector: "isBlockNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters",
smalltalk.method({
selector: "parameters",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@parameters"]) == nil || $receiver == undefined){
self["@parameters"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@parameters"];
} else {
$1=self["@parameters"];
};
return $1;
},
args: [],
source: "parameters\x0a\x09^parameters ifNil: [parameters := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_parameters_",
smalltalk.method({
selector: "parameters:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self},
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
"_subtreeNeedsAliasing",
smalltalk.method({
selector: "subtreeNeedsAliasing",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_shouldBeAliased",[]),"_or_",[(function(){
return smalltalk.send(self,"_shouldBeInlined",[]);
})]);
return $1;
},
args: [],
source: "subtreeNeedsAliasing\x0a    ^self shouldBeAliased or: [ self shouldBeInlined ]",
messageSends: ["or:", "shouldBeInlined", "shouldBeAliased"],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitCascadeNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);

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
smalltalk.CascadeNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicArrayNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitDynamicDictionaryNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitJSStatementNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@source"]) == nil || $receiver == undefined){
$1="";
} else {
$1=self["@source"];
};
return $1;
},
args: [],
source: "source\x0a\x09^source ifNil: ['']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'messageSends'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitMethodNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
},
args: [],
source: "arguments\x0a\x09^arguments ifNil: [#()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function (){
var self=this;
return self["@classReferences"];
},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return self["@messageSends"];
},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@messageSends"]=aCollection;
return self},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self},
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^source",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, ['scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitReturnNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_isReturnNode",
smalltalk.method({
selector: "isReturnNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReturnNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_scope",[]),"_isMethodScope",[]),"_not",[]);
return $1;
},
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
messageSends: ["not", "isMethodScope", "scope"],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver', 'superSend', 'index'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSendNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
self["@arguments"]=[];
$1=self["@arguments"];
} else {
$1=self["@arguments"];
};
return $1;
},
args: [],
source: "arguments\x0a\x09^arguments ifNil: [arguments := #()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_cascadeNodeWithMessages_",
smalltalk.method({
selector: "cascadeNodeWithMessages:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var $1,$2,$4,$5,$3;
var first;
$1=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
smalltalk.send($1,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$2=smalltalk.send($1,"_yourself",[]);
first=$2;
$4=smalltalk.send((smalltalk.CascadeNode || CascadeNode),"_new",[]);
smalltalk.send($4,"_receiver_",[smalltalk.send(self,"_receiver",[])]);
smalltalk.send($4,"_nodes_",[smalltalk.send(smalltalk.send((smalltalk.Array || Array),"_with_",[first]),"__comma",[aCollection])]);
$5=smalltalk.send($4,"_yourself",[]);
$3=$5;
return $3;
},
args: ["aCollection"],
source: "cascadeNodeWithMessages: aCollection\x0a\x09| first |\x0a\x09first := SendNode new\x0a\x09    selector: self selector;\x0a\x09    arguments: self arguments;\x0a\x09    yourself.\x0a\x09^CascadeNode new\x0a\x09    receiver: self receiver;\x0a\x09    nodes: (Array with: first), aCollection;\x0a\x09    yourself",
messageSends: ["selector:", "selector", "new", "arguments:", "arguments", "yourself", "receiver:", "receiver", "nodes:", ",", "with:"],
referencedClasses: ["SendNode", "CascadeNode", "Array"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return self["@index"];
},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_isSendNode",
smalltalk.method({
selector: "isSendNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSendNode\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_nodes",
smalltalk.method({
selector: "nodes",
category: 'accessing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.Array || Array),"_withAll_",[smalltalk.send(self,"_arguments",[])]);
smalltalk.send($2,"_add_",[smalltalk.send(self,"_receiver",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "nodes\x0a\x09^ (Array withAll: self arguments)\x0a\x09\x09add: self receiver;\x0a\x09\x09yourself",
messageSends: ["add:", "receiver", "withAll:", "arguments", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.SendNode);

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
smalltalk.SendNode);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self},
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend",
smalltalk.method({
selector: "superSend",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@superSend"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@superSend"];
};
return $1;
},
args: [],
source: "superSend\x0a\x09^ superSend ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_superSend_",
smalltalk.method({
selector: "superSend:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@superSend"]=aBoolean;
return self},
args: ["aBoolean"],
source: "superSend: aBoolean\x0a\x09superSend := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
"_valueForReceiver_",
smalltalk.method({
selector: "valueForReceiver:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $2,$4,$3,$5,$1;
$2=smalltalk.send((smalltalk.SendNode || SendNode),"_new",[]);
$4=smalltalk.send(self,"_receiver",[]);
if(($receiver = $4) == nil || $receiver == undefined){
$3=anObject;
} else {
$3=smalltalk.send(smalltalk.send(self,"_receiver",[]),"_valueForReceiver_",[anObject]);
};
smalltalk.send($2,"_receiver_",[$3]);
smalltalk.send($2,"_selector_",[smalltalk.send(self,"_selector",[])]);
smalltalk.send($2,"_arguments_",[smalltalk.send(self,"_arguments",[])]);
$5=smalltalk.send($2,"_yourself",[]);
$1=$5;
return $1;
},
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^SendNode new\x0a\x09    receiver: (self receiver \x0a\x09\x09ifNil: [anObject]\x0a\x09\x09ifNotNil: [self receiver valueForReceiver: anObject]);\x0a\x09    selector: self selector;\x0a\x09    arguments: self arguments;\x0a\x09    yourself",
messageSends: ["receiver:", "ifNil:ifNotNil:", "valueForReceiver:", "receiver", "new", "selector:", "selector", "arguments:", "arguments", "yourself"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps', 'scope'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitSequenceNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_asBlockSequenceNode",
smalltalk.method({
selector: "asBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.BlockSequenceNode || BlockSequenceNode),"_new",[]);
smalltalk.send($2,"_nodes_",[smalltalk.send(self,"_nodes",[])]);
smalltalk.send($2,"_temps_",[smalltalk.send(self,"_temps",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "asBlockSequenceNode\x0a\x09^BlockSequenceNode new\x0a\x09    nodes: self nodes;\x0a\x09    temps: self temps;\x0a\x09    yourself",
messageSends: ["nodes:", "nodes", "new", "temps:", "temps", "yourself"],
referencedClasses: ["BlockSequenceNode"]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self},
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@temps"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@temps"];
};
return $1;
},
args: [],
source: "temps\x0a\x09^temps ifNil: [#()]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
"_temps_",
smalltalk.method({
selector: "temps:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self},
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitBlockSequenceNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
"_isBlockSequenceNode",
smalltalk.method({
selector: "isBlockSequenceNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockSequenceNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitValueNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=true;
return $1;
},
args: [],
source: "isImmutable\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
"_isValueNode",
smalltalk.method({
selector: "isValueNode",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isValueNode\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

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
smalltalk.ValueNode);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self},
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitVariableNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_binding",[]),"_alias",[]);
return $1;
},
args: [],
source: "alias\x0a\x09^ self binding alias",
messageSends: ["alias", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned",
smalltalk.method({
selector: "assigned",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@assigned"]) == nil || $receiver == undefined){
$1=false;
} else {
$1=self["@assigned"];
};
return $1;
},
args: [],
source: "assigned\x0a\x09^assigned ifNil: [false]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_assigned_",
smalltalk.method({
selector: "assigned:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self},
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_beAssigned",
smalltalk.method({
selector: "beAssigned",
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_binding",[]),"_validateAssignment",[]);
self["@assigned"]=true;
return self},
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
messageSends: ["validateAssignment", "binding"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding",
smalltalk.method({
selector: "binding",
category: 'accessing',
fn: function (){
var self=this;
return self["@binding"];
},
args: [],
source: "binding\x0a\x09^ binding",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_binding_",
smalltalk.method({
selector: "binding:",
category: 'accessing',
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self},
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
"_isImmutable",
smalltalk.method({
selector: "isImmutable",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isImmutable\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler-AST');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitClassReferenceNode_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitClassReferenceNode: self",
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



smalltalk.addPackage('Compiler-IR', {});
smalltalk.addClass('IRASTTranslator', smalltalk.NodeVisitor, ['source', 'theClass', 'method', 'sequence', 'nextAlias'], 'Compiler-IR');
smalltalk.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.\x0aI rely on a builder object, instance of IRBuilder."
smalltalk.addMethod(
"_alias_",
smalltalk.method({
selector: "alias:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4,$5,$6;
var variable;
$1=smalltalk.send(aNode,"_isImmutable",[]);
if(smalltalk.assert($1)){
$2=smalltalk.send(self,"_visit_",[aNode]);
return $2;
};
$3=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($3,"_variable_",[smalltalk.send(smalltalk.send((smalltalk.AliasVar || AliasVar),"_new",[]),"_name_",[smalltalk.send("$","__comma",[smalltalk.send(self,"_nextAlias",[])])])]);
$4=smalltalk.send($3,"_yourself",[]);
variable=$4;
$5=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($5,"_add_",[variable]);
smalltalk.send($5,"_add_",[smalltalk.send(self,"_visit_",[aNode])]);
$6=smalltalk.send($5,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$6]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_internalVariables",[]),"_add_",[variable]);
return variable;
},
args: ["aNode"],
source: "alias: aNode\x0a\x09| variable |\x0a\x0a\x09aNode isImmutable ifTrue: [ ^ self visit: aNode ].\x0a\x0a\x09variable := IRVariable new \x0a\x09\x09variable: (AliasVar new name: '$', self nextAlias); \x0a\x09\x09yourself.\x0a\x0a\x09self sequence add: (IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: (self visit: aNode);\x0a\x09\x09yourself).\x0a\x0a\x09self method internalVariables add: variable.\x0a\x0a\x09^ variable",
messageSends: ["ifTrue:", "visit:", "isImmutable", "variable:", "name:", ",", "nextAlias", "new", "yourself", "add:", "sequence", "internalVariables", "method"],
referencedClasses: ["AliasVar", "IRVariable", "IRAssignment"]
}),
smalltalk.IRASTTranslator);

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
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (anIRMethod){
var self=this;
self["@method"]=anIRMethod;
return self},
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_nextAlias",
smalltalk.method({
selector: "nextAlias",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@nextAlias"]) == nil || $receiver == undefined){
self["@nextAlias"]=(0);
self["@nextAlias"];
} else {
self["@nextAlias"];
};
self["@nextAlias"]=smalltalk.send(self["@nextAlias"],"__plus",[(1)]);
$1=smalltalk.send(self["@nextAlias"],"_asString",[]);
return $1;
},
args: [],
source: "nextAlias\x0a\x09nextAlias ifNil: [ nextAlias := 0 ].\x0a\x09nextAlias := nextAlias + 1.\x0a\x09^ nextAlias asString",
messageSends: ["ifNil:", "+", "asString"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
return self["@sequence"];
},
args: [],
source: "sequence\x0a\x09^ sequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_sequence_",
smalltalk.method({
selector: "sequence:",
category: 'accessing',
fn: function (anIRSequence){
var self=this;
self["@sequence"]=anIRSequence;
return self},
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_temporallyDependentList_",
smalltalk.method({
selector: "temporallyDependentList:",
category: 'visiting',
fn: function (nodes){
var self=this;
var $1,$2,$4,$3,$5;
var threshold;
var result;
threshold=(0);
smalltalk.send(nodes,"_withIndexDo_",[(function(each,i){
$1=smalltalk.send(each,"_subtreeNeedsAliasing",[]);
if(smalltalk.assert($1)){
threshold=i;
return threshold;
};
})]);
result=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
smalltalk.send(nodes,"_withIndexDo_",[(function(each,i){
$2=result;
$4=smalltalk.send(i,"__lt_eq",[threshold]);
if(smalltalk.assert($4)){
$3=smalltalk.send(self,"_alias_",[each]);
} else {
$3=smalltalk.send(self,"_visit_",[each]);
};
return smalltalk.send($2,"_add_",[$3]);
})]);
$5=result;
return $5;
},
args: ["nodes"],
source: "temporallyDependentList: nodes\x0a\x09| threshold result |\x0a    threshold := 0.\x0a    \x0a    nodes withIndexDo: [ :each :i |\x0a        each subtreeNeedsAliasing\x0a\x09\x09    ifTrue: [ threshold := i ]].\x0a\x0a\x09result := OrderedCollection new.\x0a\x09nodes withIndexDo: [ :each :i | \x0a\x09\x09result add: (i <= threshold\x0a\x09\x09\x09ifTrue: [ self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ])].\x0a\x0a    ^result\x0a",
messageSends: ["withIndexDo:", "ifTrue:", "subtreeNeedsAliasing", "new", "add:", "ifTrue:ifFalse:", "alias:", "visit:", "<="],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRASTTranslator);

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
smalltalk.IRASTTranslator);

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
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var left;
var right;
var assignment;
right=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_right",[])]);
left=smalltalk.send(self,"_visit_",[smalltalk.send(aNode,"_left",[])]);
$1=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($1,"_add_",[left]);
smalltalk.send($1,"_add_",[right]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$2]);
return left;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self sequence add: (IRAssignment new \x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
messageSends: ["visit:", "right", "left", "add:", "new", "yourself", "sequence"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4;
var closure;
$1=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_parameters",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
closure=$2;
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(closure,"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(closure,"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
return closure;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new \x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x09aNode nodes do: [ :each | closure add: (self visit: each) ].\x0a\x09^ closure",
messageSends: ["arguments:", "parameters", "new", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "temps", "visit:", "nodes"],
referencedClasses: ["IRClosure", "IRTempDeclaration"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitBlockSequenceNode_",
smalltalk.method({
selector: "visitBlockSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$4,$1;
$1=smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$2=smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[]),"_isReturnNode",[]);
if(smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
} else {
$3=smalltalk.send((smalltalk.IRBlockReturn || IRBlockReturn),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[$4]);
};
})]);
})]);
return $1;
},
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [ \x0a\x09\x09\x09aNode nodes ifNotEmpty: [\x0a\x09\x09\x09\x09aNode nodes allButLast do: [ :each | \x0a\x09\x09\x09\x09\x09self sequence add: (self visit: each) ].\x0a\x09\x09\x09\x09aNode nodes last isReturnNode \x0a\x09\x09\x09\x09\x09ifFalse: [ self sequence add: (IRBlockReturn new add: (self visit: aNode nodes last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self sequence add: (self visit: aNode nodes last) ]]]",
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "do:", "add:", "visit:", "sequence", "allButLast", "nodes", "ifFalse:ifTrue:", "last", "yourself", "isReturnNode"],
referencedClasses: ["IRBlockSequence", "IRBlockReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var alias;
$1=smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_isImmutable",[]);
if(! smalltalk.assert($1)){
alias=smalltalk.send(self,"_alias_",[smalltalk.send(aNode,"_receiver",[])]);
alias;
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(each,"_receiver_",[smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode),"_new",[]),"_binding_",[smalltalk.send(alias,"_variable",[])])]);
})]);
};
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$2=smalltalk.send(self,"_alias_",[smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_last",[])]);
return $2;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| alias |\x0a\x0a\x09aNode receiver isImmutable ifFalse: [ \x0a\x09\x09alias := self alias: aNode receiver.\x0a\x09\x09aNode nodes do: [ :each |\x0a\x09\x09\x09each receiver: (VariableNode new binding: alias variable) ]].\x0a\x0a\x09aNode nodes allButLast do: [ :each |\x0a\x09\x09self sequence add: (self visit: each) ].\x0a\x0a\x09^ self alias: aNode nodes last",
messageSends: ["ifFalse:", "alias:", "receiver", "do:", "receiver:", "binding:", "variable", "new", "nodes", "isImmutable", "add:", "visit:", "sequence", "allButLast", "last"],
referencedClasses: ["VariableNode"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
var array;
array=smalltalk.send((smalltalk.IRDynamicArray || IRDynamicArray),"_new",[]);
smalltalk.send(smalltalk.send(self,"_temporallyDependentList_",[smalltalk.send(aNode,"_nodes",[])]),"_do_",[(function(each){
return smalltalk.send(array,"_add_",[each]);
})]);
$1=array;
return $1;
},
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self temporallyDependentList: aNode nodes) do: [:each | array add: each].\x0a\x09^ array",
messageSends: ["new", "do:", "add:", "temporallyDependentList:", "nodes"],
referencedClasses: ["IRDynamicArray"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
var dictionary;
dictionary=smalltalk.send((smalltalk.IRDynamicDictionary || IRDynamicDictionary),"_new",[]);
smalltalk.send(smalltalk.send(self,"_temporallyDependentList_",[smalltalk.send(aNode,"_nodes",[])]),"_do_",[(function(each){
return smalltalk.send(dictionary,"_add_",[each]);
})]);
$1=dictionary;
return $1;
},
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a    (self temporallyDependentList: aNode nodes) do: [:each | dictionary add: each].\x0a\x09^ dictionary",
messageSends: ["new", "do:", "add:", "temporallyDependentList:", "nodes"],
referencedClasses: ["IRDynamicDictionary"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRVerbatim || IRVerbatim),"_new",[]);
smalltalk.send($2,"_source_",[smalltalk.send(aNode,"_source",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source;\x0a\x09\x09yourself",
messageSends: ["source:", "source", "new", "yourself"],
referencedClasses: ["IRVerbatim"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=smalltalk.send((smalltalk.IRMethod || IRMethod),"_new",[]);
smalltalk.send($1,"_source_",[smalltalk.send(self,"_source",[])]);
smalltalk.send($1,"_arguments_",[smalltalk.send(aNode,"_arguments",[])]);
smalltalk.send($1,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
smalltalk.send($1,"_messageSends_",[smalltalk.send(aNode,"_messageSends",[])]);
smalltalk.send($1,"_classReferences_",[smalltalk.send(aNode,"_classReferences",[])]);
smalltalk.send($1,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
$2=smalltalk.send($1,"_yourself",[]);
smalltalk.send(self,"_method_",[$2]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_temps",[]),"_do_",[(function(each){
$3=smalltalk.send((smalltalk.IRTempDeclaration || IRTempDeclaration),"_new",[]);
smalltalk.send($3,"_name_",[smalltalk.send(each,"_name",[])]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[$4]);
})]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send(self,"_visit_",[each])]);
})]);
$5=smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_hasLocalReturn",[]);
if(! smalltalk.assert($5)){
$6=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($6,"_variable_",[smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_scope",[]),"_pseudoVars",[]),"_at_",["self"])]);
$7=smalltalk.send($6,"_yourself",[]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_method",[]),"_add_",[smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[])]),"_add_",[$7]);
};
$8=smalltalk.send(self,"_method",[]);
return $8;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09messageSends: aNode messageSends;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09aNode nodes do: [ :each | self method add: (self visit: each) ].\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [\x0a\x09\x09(self method add: IRReturn new) add: (IRVariable new\x0a\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
messageSends: ["method:", "source:", "source", "new", "arguments:", "arguments", "selector:", "selector", "messageSends:", "messageSends", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "add:", "name:", "name", "method", "temps", "visit:", "nodes", "ifFalse:", "variable:", "at:", "pseudoVars", "hasLocalReturn"],
referencedClasses: ["IRMethod", "IRTempDeclaration", "IRVariable", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1;
var return_;
$1=smalltalk.send(aNode,"_nonLocalReturn",[]);
if(smalltalk.assert($1)){
return_=smalltalk.send((smalltalk.IRNonLocalReturn || IRNonLocalReturn),"_new",[]);
} else {
return_=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
};
smalltalk.send(return_,"_scope_",[smalltalk.send(aNode,"_scope",[])]);
smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
return smalltalk.send(return_,"_add_",[smalltalk.send(self,"_alias_",[each])]);
})]);
return return_;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09| return |\x0a\x09return := aNode nonLocalReturn \x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ].\x0a\x09return scope: aNode scope.\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09return add: (self alias: each) ].\x0a\x09^ return",
messageSends: ["ifTrue:ifFalse:", "new", "nonLocalReturn", "scope:", "scope", "do:", "add:", "alias:", "nodes"],
referencedClasses: ["IRNonLocalReturn", "IRReturn"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
var send;
var all;
var receiver;
var arguments;
send=smalltalk.send((smalltalk.IRSend || IRSend),"_new",[]);
smalltalk.send(send,"_selector_",[smalltalk.send(aNode,"_selector",[])]);
$1=smalltalk.send(send,"_index_",[smalltalk.send(aNode,"_index",[])]);
$2=smalltalk.send(aNode,"_superSend",[]);
if(smalltalk.assert($2)){
smalltalk.send(send,"_classSend_",[smalltalk.send(smalltalk.send(self,"_theClass",[]),"_superclass",[])]);
};
all=smalltalk.send(self,"_temporallyDependentList_",[smalltalk.send([smalltalk.send(aNode,"_receiver",[])],"__comma",[smalltalk.send(aNode,"_arguments",[])])]);
receiver=smalltalk.send(all,"_first",[]);
arguments=smalltalk.send(all,"_allButFirst",[]);
smalltalk.send(send,"_add_",[receiver]);
smalltalk.send(arguments,"_do_",[(function(each){
return smalltalk.send(send,"_add_",[each]);
})]);
return send;
},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send all receiver arguments |\x0a\x09send := IRSend new.\x0a\x09send \x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09aNode superSend ifTrue: [ send classSend: self theClass superclass ].\x0a    \x0a    all := self temporallyDependentList: { aNode receiver }, aNode arguments.\x0a\x09receiver := all first.\x0a\x09arguments := all allButFirst.\x0a\x0a\x09send add: receiver.\x0a\x09arguments do: [ :each | send add: each ].\x0a\x0a\x09^ send\x0a",
messageSends: ["new", "selector:", "selector", "index:", "index", "ifTrue:", "classSend:", "superclass", "theClass", "superSend", "temporallyDependentList:", ",", "arguments", "receiver", "first", "allButFirst", "add:", "do:"],
referencedClasses: ["IRSend"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$1;
$1=smalltalk.send(self,"_withSequence_do_",[smalltalk.send((smalltalk.IRSequence || IRSequence),"_new",[]),(function(){
return smalltalk.send(smalltalk.send(aNode,"_nodes",[]),"_do_",[(function(each){
var instruction;
instruction=smalltalk.send(self,"_visit_",[each]);
instruction;
$2=smalltalk.send(instruction,"_isVariable",[]);
if(! smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_sequence",[]),"_add_",[instruction]);
};
})]);
})]);
return $1;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self \x0a\x09\x09withSequence: IRSequence new \x09\x0a\x09\x09do: [\x0a\x09\x09\x09aNode nodes do: [ :each | | instruction |\x0a\x09\x09\x09\x09instruction := self visit: each.\x0a\x09\x09\x09\x09instruction isVariable ifFalse: [\x0a\x09\x09\x09\x09\x09self sequence add: instruction ]]]",
messageSends: ["withSequence:do:", "new", "do:", "visit:", "ifFalse:", "add:", "sequence", "isVariable", "nodes"],
referencedClasses: ["IRSequence"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRValue || IRValue),"_new",[]);
smalltalk.send($2,"_value_",[smalltalk.send(aNode,"_value",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new \x0a\x09\x09value: aNode value; \x0a\x09\x09yourself",
messageSends: ["value:", "value", "new", "yourself"],
referencedClasses: ["IRValue"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRVariable || IRVariable),"_new",[]);
smalltalk.send($2,"_variable_",[smalltalk.send(aNode,"_binding",[])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new \x0a\x09\x09variable: aNode binding; \x0a\x09\x09yourself",
messageSends: ["variable:", "binding", "new", "yourself"],
referencedClasses: ["IRVariable"]
}),
smalltalk.IRASTTranslator);

smalltalk.addMethod(
"_withSequence_do_",
smalltalk.method({
selector: "withSequence:do:",
category: 'accessing',
fn: function (aSequence,aBlock){
var self=this;
var outerSequence;
outerSequence=smalltalk.send(self,"_sequence",[]);
smalltalk.send(self,"_sequence_",[aSequence]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self,"_sequence_",[outerSequence]);
return aSequence;
},
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
messageSends: ["sequence", "sequence:", "value"],
referencedClasses: []
}),
smalltalk.IRASTTranslator);



smalltalk.addClass('IRInstruction', smalltalk.Object, ['parent', 'instructions'], 'Compiler-IR');
smalltalk.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInstruction_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInstruction: self",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'building',
fn: function (anObject){
var self=this;
var $1;
smalltalk.send(anObject,"_parent_",[self]);
$1=smalltalk.send(smalltalk.send(self,"_instructions",[]),"_add_",[anObject]);
return $1;
},
args: ["anObject"],
source: "add: anObject\x0a\x09anObject parent: self.\x0a\x09^ self instructions add: anObject",
messageSends: ["parent:", "add:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "canBeAssigned\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_instructions",
smalltalk.method({
selector: "instructions",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@instructions"]) == nil || $receiver == undefined){
self["@instructions"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
$1=self["@instructions"];
} else {
$1=self["@instructions"];
};
return $1;
},
args: [],
source: "instructions\x0a\x09^ instructions ifNil: [ instructions := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isClosure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isInlined\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSend\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSequence\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isTempDeclaration\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isVariable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent",
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return self["@parent"];
},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_parent_",
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@parent"]=anIRInstruction;
return self},
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
category: 'building',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_remove_",[self]);
return self},
args: [],
source: "remove\x0a\x09self parent remove: self",
messageSends: ["remove:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_remove_",
smalltalk.method({
selector: "remove:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_remove_",[anIRInstruction]);
return self},
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self instructions remove: anIRInstruction",
messageSends: ["remove:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replace_with_",
smalltalk.method({
selector: "replace:with:",
category: 'building',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
smalltalk.send(anotherIRInstruction,"_parent_",[self]);
smalltalk.send(smalltalk.send(self,"_instructions",[]),"_at_put_",[smalltalk.send(smalltalk.send(self,"_instructions",[]),"_indexOf_",[anIRInstruction]),anotherIRInstruction]);
return self},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self instructions \x0a\x09\x09at: (self instructions indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
messageSends: ["parent:", "at:put:", "indexOf:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInstruction);

smalltalk.addMethod(
"_replaceWith_",
smalltalk.method({
selector: "replaceWith:",
category: 'building',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(self,"_parent",[]),"_replace_with_",[self,anIRInstruction]);
return self},
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
messageSends: ["replace:with:", "parent"],
referencedClasses: []
}),
smalltalk.IRInstruction);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBuilder){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_builder_",[aBuilder]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
messageSends: ["builder:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.IRInstruction.klass);


smalltalk.addClass('IRAssignment', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRAssignment_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
messageSends: ["visitIRAssignment:"],
referencedClasses: []
}),
smalltalk.IRAssignment);



smalltalk.addClass('IRDynamicArray', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRDynamicArray_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
messageSends: ["visitIRDynamicArray:"],
referencedClasses: []
}),
smalltalk.IRDynamicArray);



smalltalk.addClass('IRDynamicDictionary', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRDynamicDictionary_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
messageSends: ["visitIRDynamicDictionary:"],
referencedClasses: []
}),
smalltalk.IRDynamicDictionary);



smalltalk.addClass('IRScopedInstruction', smalltalk.IRInstruction, ['scope'], 'Compiler-IR');
smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function (){
var self=this;
return self["@scope"];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
self["@scope"]=aScope;
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRScopedInstruction);



smalltalk.addClass('IRClosure', smalltalk.IRScopedInstruction, ['arguments'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRClosure_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@arguments"]) == nil || $receiver == undefined){
$1=[];
} else {
$1=self["@arguments"];
};
return $1;
},
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_isClosure",
smalltalk.method({
selector: "isClosure",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isClosure\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRClosure);

smalltalk.addMethod(
"_sequence",
smalltalk.method({
selector: "sequence",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_instructions",[]),"_last",[]);
return $1;
},
args: [],
source: "sequence\x0a\x09^ self instructions last",
messageSends: ["last", "instructions"],
referencedClasses: []
}),
smalltalk.IRClosure);



smalltalk.addClass('IRMethod', smalltalk.IRScopedInstruction, ['source', 'selector', 'classReferences', 'messageSends', 'arguments', 'internalVariables'], 'Compiler-IR');
smalltalk.IRMethod.comment="I am a method instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRMethod_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
messageSends: ["visitIRMethod:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments",
smalltalk.method({
selector: "arguments",
category: 'accessing',
fn: function (){
var self=this;
return self["@arguments"];
},
args: [],
source: "arguments\x0a\x09^ arguments",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_arguments_",
smalltalk.method({
selector: "arguments:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self},
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function (){
var self=this;
return self["@classReferences"];
},
args: [],
source: "classReferences\x0a\x09^ classReferences",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_classReferences_",
smalltalk.method({
selector: "classReferences:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self},
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_internalVariables",
smalltalk.method({
selector: "internalVariables",
category: 'accessing',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@internalVariables"]) == nil || $receiver == undefined){
self["@internalVariables"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@internalVariables"];
} else {
$1=self["@internalVariables"];
};
return $1;
},
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function (){
var self=this;
return self["@messageSends"];
},
args: [],
source: "messageSends\x0a\x09^ messageSends",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_messageSends_",
smalltalk.method({
selector: "messageSends:",
category: 'accessing',
fn: function (aCollection){
var self=this;
self["@messageSends"]=aCollection;
return self},
args: ["aCollection"],
source: "messageSends: aCollection\x0a\x09messageSends := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope){
var self=this;
smalltalk.send(self,"_scope_",[aScope],smalltalk.IRScopedInstruction);
smalltalk.send(aScope,"_instruction_",[self]);
return self},
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
messageSends: ["scope:", "instruction:"],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRMethod);



smalltalk.addClass('IRReturn', smalltalk.IRScopedInstruction, [], 'Compiler-IR');
smalltalk.IRReturn.comment="I am a local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_canBeAssigned",
smalltalk.method({
selector: "canBeAssigned",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "canBeAssigned\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBlockReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isLocalReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isNonLocalReturn",
smalltalk.method({
selector: "isNonLocalReturn",
category: 'testing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_isLocalReturn",[]),"_not",[]);
return $1;
},
args: [],
source: "isNonLocalReturn\x0a\x09^ self isLocalReturn not",
messageSends: ["not", "isLocalReturn"],
referencedClasses: []
}),
smalltalk.IRReturn);

smalltalk.addMethod(
"_isReturn",
smalltalk.method({
selector: "isReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRReturn);



smalltalk.addClass('IRBlockReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRBlockReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
messageSends: ["visitIRBlockReturn:"],
referencedClasses: []
}),
smalltalk.IRBlockReturn);

smalltalk.addMethod(
"_isBlockReturn",
smalltalk.method({
selector: "isBlockReturn",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBlockReturn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRBlockReturn);



smalltalk.addClass('IRNonLocalReturn', smalltalk.IRReturn, [], 'Compiler-IR');
smalltalk.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JS statement.\x0a\x0aSee IRNonLocalReturnHandling class"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRNonLocalReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
messageSends: ["visitIRNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);

smalltalk.addMethod(
"_isLocalReturn",
smalltalk.method({
selector: "isLocalReturn",
category: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isLocalReturn\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRNonLocalReturn);



smalltalk.addClass('IRSend', smalltalk.IRInstruction, ['selector', 'classSend', 'index'], 'Compiler-IR');
smalltalk.IRSend.comment="I am a message send instruction. "
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRSend_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
messageSends: ["visitIRSend:"],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend",
smalltalk.method({
selector: "classSend",
category: 'accessing',
fn: function (){
var self=this;
return self["@classSend"];
},
args: [],
source: "classSend\x0a\x09^ classSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_classSend_",
smalltalk.method({
selector: "classSend:",
category: 'accessing',
fn: function (aClass){
var self=this;
self["@classSend"]=aClass;
return self},
args: ["aClass"],
source: "classSend: aClass\x0a\x09classSend := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index",
smalltalk.method({
selector: "index",
category: 'accessing',
fn: function (){
var self=this;
return self["@index"];
},
args: [],
source: "index\x0a\x09^ index",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_index_",
smalltalk.method({
selector: "index:",
category: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self},
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_isSend",
smalltalk.method({
selector: "isSend",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSend\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
category: 'accessing',
fn: function (){
var self=this;
return self["@selector"];
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSend);



smalltalk.addClass('IRSequence', smalltalk.IRInstruction, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRSequence_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRSequence);

smalltalk.addMethod(
"_isSequence",
smalltalk.method({
selector: "isSequence",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isSequence\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSequence);



smalltalk.addClass('IRBlockSequence', smalltalk.IRSequence, [], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRBlockSequence_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
messageSends: ["visitIRBlockSequence:"],
referencedClasses: []
}),
smalltalk.IRBlockSequence);



smalltalk.addClass('IRTempDeclaration', smalltalk.IRInstruction, ['name'], 'Compiler-IR');
smalltalk.IRTempDeclaration.comment="I am a temporary variable declaration instruction"
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRTempDeclaration_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
messageSends: ["visitIRTempDeclaration:"],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_isTempDeclaration",
smalltalk.method({
selector: "isTempDeclaration",
category: 'visiting',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isTempDeclaration\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return self["@name"];
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRTempDeclaration);



smalltalk.addClass('IRValue', smalltalk.IRInstruction, ['value'], 'Compiler-IR');
smalltalk.IRValue.comment="I am the simplest possible instruction. I represent a value."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRValue_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
messageSends: ["visitIRValue:"],
referencedClasses: []
}),
smalltalk.IRValue);

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
smalltalk.IRValue);

smalltalk.addMethod(
"_value_",
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@value"]=aString;
return self},
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRValue);



smalltalk.addClass('IRVariable', smalltalk.IRInstruction, ['variable'], 'Compiler-IR');
smalltalk.IRVariable.comment="I am a variable instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRVariable_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
messageSends: ["visitIRVariable:"],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_isVariable",
smalltalk.method({
selector: "isVariable",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isVariable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable",
smalltalk.method({
selector: "variable",
category: 'accessing',
fn: function (){
var self=this;
return self["@variable"];
},
args: [],
source: "variable\x0a\x09^ variable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);

smalltalk.addMethod(
"_variable_",
smalltalk.method({
selector: "variable:",
category: 'accessing',
fn: function (aScopeVariable){
var self=this;
self["@variable"]=aScopeVariable;
return self},
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVariable);



smalltalk.addClass('IRVerbatim', smalltalk.IRInstruction, ['source'], 'Compiler-IR');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRVerbatim_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
messageSends: ["visitIRVerbatim:"],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source",
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return self["@source"];
},
args: [],
source: "source\x0a\x09^ source",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);

smalltalk.addMethod(
"_source_",
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self},
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRVerbatim);



smalltalk.addClass('IRVisitor', smalltalk.Object, [], 'Compiler-IR');
smalltalk.addMethod(
"_visit_",
smalltalk.method({
selector: "visit:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(anIRInstruction,"_accept_",[self]);
return $1;
},
args: ["anIRInstruction"],
source: "visit: anIRInstruction\x0a\x09^ anIRInstruction accept: self",
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRAssignment]);
return $1;
},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitIRInstruction: anIRAssignment",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockReturn_",
smalltalk.method({
selector: "visitIRBlockReturn:",
category: 'visiting',
fn: function (anIRBlockReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRReturn_",[anIRBlockReturn]);
return $1;
},
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
messageSends: ["visitIRReturn:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRBlockSequence_",
smalltalk.method({
selector: "visitIRBlockSequence:",
category: 'visiting',
fn: function (anIRBlockSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRSequence_",[anIRBlockSequence]);
return $1;
},
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRClosure]);
return $1;
},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitIRInstruction: anIRClosure",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicArray]);
return $1;
},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitIRInstruction: anIRDynamicArray",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRDynamicDictionary]);
return $1;
},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitIRInstruction: anIRDynamicDictionary",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRClosure_",[anIRInlinedClosure]);
return $1;
},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
messageSends: ["visitIRClosure:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRSequence_",[anIRInlinedSequence]);
return $1;
},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
messageSends: ["visitIRSequence:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRInstruction_",
smalltalk.method({
selector: "visitIRInstruction:",
category: 'visiting',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return anIRInstruction;
},
args: ["anIRInstruction"],
source: "visitIRInstruction: anIRInstruction\x0a\x09anIRInstruction instructions do: [ :each | self visit: each ].\x0a\x09^ anIRInstruction",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRMethod]);
return $1;
},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitIRInstruction: anIRMethod",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturn]);
return $1;
},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitIRInstruction: anIRNonLocalReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRNonLocalReturnHandling_",
smalltalk.method({
selector: "visitIRNonLocalReturnHandling:",
category: 'visiting',
fn: function (anIRNonLocalReturnHandling){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRNonLocalReturnHandling]);
return $1;
},
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitIRInstruction: anIRNonLocalReturnHandling",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRReturn]);
return $1;
},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitIRInstruction: anIRReturn",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRSend]);
return $1;
},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitIRInstruction: anIRSend",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRSequence]);
return $1;
},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitIRInstruction: anIRSequence",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRTempDeclaration]);
return $1;
},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitIRInstruction: anIRTempDeclaration",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRValue]);
return $1;
},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitIRInstruction: anIRValue",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRVariable]);
return $1;
},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitIRInstruction: anIRVariable",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
var $1;
$1=smalltalk.send(self,"_visitIRInstruction_",[anIRVerbatim]);
return $1;
},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitIRInstruction: anIRVerbatim",
messageSends: ["visitIRInstruction:"],
referencedClasses: []
}),
smalltalk.IRVisitor);



smalltalk.addClass('IRJSTranslator', smalltalk.IRVisitor, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_stream",[]),"_contents",[]);
return $1;
},
args: [],
source: "contents\x0a\x09^ self stream contents",
messageSends: ["contents", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.IRVisitor);
self["@stream"]=smalltalk.send((smalltalk.JSStream || JSStream),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
messageSends: ["initialize", "new"],
referencedClasses: ["JSStream"]
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream",
smalltalk.method({
selector: "stream",
category: 'accessing',
fn: function (){
var self=this;
return self["@stream"];
},
args: [],
source: "stream\x0a\x09^ stream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_stream_",
smalltalk.method({
selector: "stream:",
category: 'accessing',
fn: function (aStream){
var self=this;
self["@stream"]=aStream;
return self},
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAssignment",[]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
return self},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self visit: anIRAssignment instructions first.\x0a\x09self stream nextPutAssignment.\x0a\x09self visit: anIRAssignment instructions last.",
messageSends: ["visit:", "first", "instructions", "nextPutAssignment", "stream", "last"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRClosure_",
smalltalk.method({
selector: "visitIRClosure:",
category: 'visiting',
fn: function (anIRClosure){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutClosureWith_arguments_",[(function(){
return smalltalk.send(self,"_visitIRClosure_",[anIRClosure],smalltalk.IRVisitor);
}),smalltalk.send(anIRClosure,"_arguments",[])]);
return self},
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream \x0a\x09\x09nextPutClosureWith: [ super visitIRClosure: anIRClosure ] \x0a\x09\x09arguments: anIRClosure arguments",
messageSends: ["nextPutClosureWith:arguments:", "visitIRClosure:", "arguments", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicArray_",
smalltalk.method({
selector: "visitIRDynamicArray:",
category: 'visiting',
fn: function (anIRDynamicArray){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["["]);
smalltalk.send(smalltalk.send(anIRDynamicArray,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self stream nextPutAll: '['.\x0a\x09anIRDynamicArray instructions\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRDynamicDictionary_",
smalltalk.method({
selector: "visitIRDynamicDictionary:",
category: 'visiting',
fn: function (anIRDynamicDictionary){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.HashedCollection._fromPairs_(["]);
smalltalk.send(smalltalk.send(anIRDynamicDictionary,"_instructions",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["])"]);
return self},
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self stream nextPutAll: 'smalltalk.HashedCollection._fromPairs_(['.\x0a\x09\x09anIRDynamicDictionary instructions \x0a\x09\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09\x09separatedBy: [self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRMethod_",
smalltalk.method({
selector: "visitIRMethod:",
category: 'visiting',
fn: function (anIRMethod){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutMethodDeclaration_with_",[anIRMethod,(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutFunctionWith_arguments_",[(function(){
$1=smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_notEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVars_",[smalltalk.send(smalltalk.send(smalltalk.send(anIRMethod,"_internalVariables",[]),"_asArray",[]),"_collect_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_variable",[]),"_alias",[]);
})])]);
};
$2=smalltalk.send(smalltalk.send(anIRMethod,"_scope",[]),"_hasNonLocalReturn",[]);
if(smalltalk.assert($2)){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnHandlingWith_",[(function(){
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
})]);
} else {
return smalltalk.send(self,"_visitIRMethod_",[anIRMethod],smalltalk.IRVisitor);
};
}),smalltalk.send(anIRMethod,"_arguments",[])]);
})]);
return self},
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09self stream\x0a\x09\x09nextPutMethodDeclaration: anIRMethod \x0a\x09\x09with: [ self stream \x0a\x09\x09\x09nextPutFunctionWith: [ \x0a\x09\x09\x09\x09anIRMethod internalVariables notEmpty ifTrue: [\x0a\x09\x09\x09\x09\x09self stream nextPutVars: (anIRMethod internalVariables asArray collect: [ :each |\x0a\x09\x09\x09\x09\x09\x09each variable alias ]) ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn \x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ]]\x0a\x09\x09\x09arguments: anIRMethod arguments ]",
messageSends: ["nextPutMethodDeclaration:with:", "nextPutFunctionWith:arguments:", "ifTrue:", "nextPutVars:", "collect:", "alias", "variable", "asArray", "internalVariables", "stream", "notEmpty", "ifTrue:ifFalse:", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "hasNonLocalReturn", "scope", "arguments"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
})]);
return self},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["nextPutNonLocalReturnWith:", "visitIRNonLocalReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutReturnWith_",[(function(){
return smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
})]);
return self},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
messageSends: ["nextPutReturnWith:", "visitIRReturn:", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var $1;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_first",[])]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_selector",[]),"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_instructions",[]),"_allButFirst",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
}),(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[","]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["]"]);
$1=smalltalk.send(anIRSend,"_classSend",[]);
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(",","__comma",[smalltalk.send(smalltalk.send(anIRSend,"_classSend",[]),"_asJavascript",[])])]);
};
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
return self},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09self stream nextPutAll: 'smalltalk.send('.\x0a\x09self visit: anIRSend instructions first.\x0a\x09self stream nextPutAll:  ',\x22', anIRSend selector asSelector, '\x22,['.\x0a\x09anIRSend instructions allButFirst\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09self stream nextPutAll: ']'.\x0a\x09\x22anIRSend index > 1 \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09anIRSend classSend \x0a\x09\x09\x09\x09ifNil: [ self stream nextPutAll: ',undefined' ]\x0a\x09\x09\x09\x09ifNotNil: [ self stream nextPutAll: ',', anIRSend classSend asJavascript ].\x0a\x09\x09\x09self stream nextPutAll: ',', anIRSend index asString ]\x0a\x09\x09ifFalse: [\x22\x0a\x09\x09\x09anIRSend classSend ifNotNil: [  \x0a\x09\x09\x09\x09self stream nextPutAll: ',', anIRSend classSend asJavascript ]\x22]\x22.\x0a\x09self stream nextPutAll: ')'",
messageSends: ["nextPutAll:", "stream", "visit:", "first", "instructions", ",", "asSelector", "selector", "do:separatedBy:", "allButFirst", "ifNotNil:", "asJavascript", "classSend"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRSequence_",
smalltalk.method({
selector: "visitIRSequence:",
category: 'visiting',
fn: function (anIRSequence){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutSequenceWith_",[(function(){
return smalltalk.send(smalltalk.send(anIRSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[smalltalk.send(self,"_visit_",[each])]);
})]);
})]);
return self},
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09self stream nextPutSequenceWith: [\x0a\x09\x09anIRSequence instructions do: [ :each |\x0a\x09\x09\x09self stream nextPutStatementWith: (self visit: each) ]]",
messageSends: ["nextPutSequenceWith:", "do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRTempDeclaration_",
smalltalk.method({
selector: "visitIRTempDeclaration:",
category: 'visiting',
fn: function (anIRTempDeclaration){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutVar_",[smalltalk.send(smalltalk.send(anIRTempDeclaration,"_name",[]),"_asVariableName",[])]);
return self},
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09self stream nextPutVar: anIRTempDeclaration name asVariableName",
messageSends: ["nextPutVar:", "asVariableName", "name", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRValue_",
smalltalk.method({
selector: "visitIRValue:",
category: 'visiting',
fn: function (anIRValue){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRValue,"_value",[]),"_asJavascript",[])]);
return self},
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavascript",
messageSends: ["nextPutAll:", "asJavascript", "value", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVariable_",
smalltalk.method({
selector: "visitIRVariable:",
category: 'visiting',
fn: function (anIRVariable){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRVariable,"_variable",[]),"_name",[]),"__eq",["thisContext"]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.getThisContext()"]);
} else {
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(smalltalk.send(anIRVariable,"_variable",[]),"_alias",[])]);
};
return self},
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09anIRVariable variable name = 'thisContext'\x0a    \x09ifTrue: [ self stream nextPutAll: 'smalltalk.getThisContext()' ]\x0a      \x09ifFalse: [ self stream nextPutAll: anIRVariable variable alias ]",
messageSends: ["ifTrue:ifFalse:", "nextPutAll:", "stream", "alias", "variable", "=", "name"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);

smalltalk.addMethod(
"_visitIRVerbatim_",
smalltalk.method({
selector: "visitIRVerbatim:",
category: 'visiting',
fn: function (anIRVerbatim){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[smalltalk.send(anIRVerbatim,"_source",[])]);
})]);
return self},
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self stream nextPutAll: anIRVerbatim source ]",
messageSends: ["nextPutStatementWith:", "nextPutAll:", "source", "stream"],
referencedClasses: []
}),
smalltalk.IRJSTranslator);



smalltalk.addClass('JSStream', smalltalk.Object, ['stream'], 'Compiler-IR');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@stream"],"_contents",[]);
return $1;
},
args: [],
source: "contents\x0a\x09^ stream contents",
messageSends: ["contents"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@stream"]=smalltalk.send("","_writeStream",[]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_lf",
smalltalk.method({
selector: "lf",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: [],
source: "lf\x0a\x09stream lf",
messageSends: ["lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPut_",
smalltalk.method({
selector: "nextPut:",
category: 'streaming',
fn: function (aString){
var self=this;
smalltalk.send(self["@stream"],"_nextPut_",[aString]);
return self},
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAll_",
smalltalk.method({
selector: "nextPutAll:",
category: 'streaming',
fn: function (aString){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",[aString]);
return self},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutAssignment",
smalltalk.method({
selector: "nextPutAssignment",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["="]);
return self},
args: [],
source: "nextPutAssignment\x0a\x09stream nextPutAll: '='",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutClosureWith_arguments_",
smalltalk.method({
selector: "nextPutClosureWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["(function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self},
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '})'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutFunctionWith_arguments_",
smalltalk.method({
selector: "nextPutFunctionWith:arguments:",
category: 'streaming',
fn: function (aBlock,anArray){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["fn: function("]);
smalltalk.send(anArray,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asVariableName",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPut_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["var self=this;"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'fn: function('.\x0a\x09anArray \x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIf_with_",
smalltalk.method({
selector: "nextPutIf:with:",
category: 'streaming',
fn: function (aBlock,anotherBlock){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(anotherBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock with: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutIfElse_with_with_",
smalltalk.method({
selector: "nextPutIfElse:with:with:",
category: 'streaming',
fn: function (aBlock,ifBlock,elseBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["if("]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["){"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(ifBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["} else {"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(elseBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
return self},
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIfElse: aBlock with: ifBlock with: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'",
messageSends: ["nextPutAll:", "value", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutMethodDeclaration_with_",
smalltalk.method({
selector: "nextPutMethodDeclaration:with:",
category: 'streaming',
fn: function (aMethod,aBlock){
var self=this;
var $1,$2,$3;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.method({"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("selector: \x22","__comma",[smalltalk.send(aMethod,"_selector",[])]),"__comma",["\x22,"])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("source: ","__comma",[smalltalk.send(smalltalk.send(aMethod,"_source",[]),"_asJavascript",[])]),"__comma",[","])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",","__comma",[smalltalk.send((smalltalk.String || String),"_lf",[])]),"__comma",["messageSends: "])]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_messageSends",[]),"_asArray",[]),"_asJavascript",[]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("args: ","__comma",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aMethod,"_arguments",[]),"_collect_",[(function(each){
return smalltalk.send(each,"_value",[]);
})]),"_asArray",[]),"_asJavascript",[])]),"__comma",[","])]);
smalltalk.send(self["@stream"],"_lf",[]);
$2=smalltalk.send(self["@stream"],"_nextPutAll_",["referencedClasses: ["]);
smalltalk.send(smalltalk.send(aMethod,"_classReferences",[]),"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(each,"_asJavascript",[])]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
$3=smalltalk.send(self["@stream"],"_nextPutAll_",["})"]);
return self},
args: ["aMethod", "aBlock"],
source: "nextPutMethodDeclaration: aMethod with: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'smalltalk.method({'; lf;\x0a\x09\x09nextPutAll: 'selector: \x22', aMethod selector, '\x22,'; lf;\x0a\x09\x09nextPutAll: 'source: ', aMethod source asJavascript, ',';lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: ',', String lf, 'messageSends: ';\x0a\x09\x09nextPutAll: aMethod messageSends asArray asJavascript, ','; lf;\x0a          \x09nextPutAll: 'args: ', (aMethod arguments collect: [ :each | each value ]) asArray asJavascript, ','; lf;\x0a\x09\x09nextPutAll: 'referencedClasses: ['.\x0a\x09aMethod classReferences \x0a\x09\x09do: [:each | stream nextPutAll: each asJavascript]\x0a\x09\x09separatedBy: [stream nextPutAll: ','].\x0a\x09stream \x0a\x09\x09nextPutAll: ']';\x0a\x09\x09nextPutAll: '})'",
messageSends: ["nextPutAll:", "lf", ",", "selector", "asJavascript", "source", "value", "asArray", "messageSends", "collect:", "arguments", "do:separatedBy:", "classReferences"],
referencedClasses: ["String"]
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnHandlingWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnHandlingWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",["var $early={};"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["try {"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["}"]);
smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["catch(e) {if(e===$early)return e[0]; throw e}"]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream \x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream \x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
messageSends: ["nextPutAll:", "lf", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutNonLocalReturnWith_",
smalltalk.method({
selector: "nextPutNonLocalReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["throw $early=["]);
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",["]"]);
return self},
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturn",
smalltalk.method({
selector: "nextPutReturn",
category: 'streaming',
fn: function (){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["return "]);
return self},
args: [],
source: "nextPutReturn\x0a\x09stream nextPutAll: 'return '",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutReturnWith_",
smalltalk.method({
selector: "nextPutReturnWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(self,"_nextPutReturn",[]);
smalltalk.send(aBlock,"_value",[]);
return self},
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09self nextPutReturn.\x0a\x09aBlock value",
messageSends: ["nextPutReturn", "value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSendTo_selector_arguments_",
smalltalk.method({
selector: "nextPutSendTo:selector:arguments:",
category: 'streaming',
fn: function (receiver,selector,arguments){
var self=this;
smalltalk.send(self["@stream"],"_nextPutAll_",["smalltalk.send("]);
smalltalk.send(receiver,"_emitOn_",[self]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send(",\x22","__comma",[smalltalk.send(selector,"_asSelector",[])]),"__comma",["\x22,["])]);
smalltalk.send(arguments,"_do_separatedBy_",[(function(each){
return smalltalk.send(each,"_emitOn_",[self]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",["])"]);
return self},
args: ["receiver", "selector", "arguments"],
source: "nextPutSendTo: receiver selector: selector arguments: arguments\x0a\x09stream nextPutAll: 'smalltalk.send('.\x0a\x09receiver emitOn: self. \x0a\x09stream nextPutAll: ',\x22', selector asSelector, '\x22,['.\x0a\x09arguments \x0a\x09\x09do: [ :each | each emitOn: self ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: '])'",
messageSends: ["nextPutAll:", "emitOn:", ",", "asSelector", "do:separatedBy:"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutSequenceWith_",
smalltalk.method({
selector: "nextPutSequenceWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
smalltalk.send(aBlock,"_value",[]);
return self},
args: ["aBlock"],
source: "nextPutSequenceWith: aBlock\x0a\x09\x22stream \x0a\x09\x09nextPutAll: 'switch(smalltalk.thisContext.pc){'; lf.\x22\x0a\x09aBlock value.\x0a\x09\x22stream \x0a\x09\x09nextPutAll: '};'; lf\x22",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatement_with_",
smalltalk.method({
selector: "nextPutStatement:with:",
category: 'streaming',
fn: function (anInteger,aBlock){
var self=this;
var $1,$2;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("case ","__comma",[smalltalk.send(anInteger,"_asString",[])]),"__comma",[":"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
smalltalk.send(self,"_nextPutStatementWith_",[aBlock]);
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("smalltalk.thisContext.pc=","__comma",[smalltalk.send(smalltalk.send(anInteger,"__plus",[(1)]),"_asString",[])]),"__comma",[";"])]);
$2=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["anInteger", "aBlock"],
source: "nextPutStatement: anInteger with: aBlock\x0a\x09stream nextPutAll: 'case ', anInteger asString, ':'; lf.\x0a\x09self nextPutStatementWith: aBlock.\x0a\x09stream nextPutAll: 'smalltalk.thisContext.pc=', (anInteger + 1) asString, ';'; lf",
messageSends: ["nextPutAll:", ",", "asString", "lf", "nextPutStatementWith:", "+"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutStatementWith_",
smalltalk.method({
selector: "nextPutStatementWith:",
category: 'streaming',
fn: function (aBlock){
var self=this;
var $1;
smalltalk.send(aBlock,"_value",[]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["value", "nextPutAll:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVar_",
smalltalk.method({
selector: "nextPutVar:",
category: 'streaming',
fn: function (aString){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",[smalltalk.send(smalltalk.send("var ","__comma",[aString]),"__comma",[";"])]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aString"],
source: "nextPutVar: aString\x0a\x09stream nextPutAll: 'var ', aString, ';'; lf",
messageSends: ["nextPutAll:", ",", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);

smalltalk.addMethod(
"_nextPutVars_",
smalltalk.method({
selector: "nextPutVars:",
category: 'streaming',
fn: function (aCollection){
var self=this;
var $1;
smalltalk.send(self["@stream"],"_nextPutAll_",["var "]);
smalltalk.send(aCollection,"_do_separatedBy_",[(function(each){
return smalltalk.send(self["@stream"],"_nextPutAll_",[each]);
}),(function(){
return smalltalk.send(self["@stream"],"_nextPutAll_",[","]);
})]);
smalltalk.send(self["@stream"],"_nextPutAll_",[";"]);
$1=smalltalk.send(self["@stream"],"_lf",[]);
return self},
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09stream nextPutAll: 'var '.\x0a\x09aCollection \x0a\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: ';'; lf",
messageSends: ["nextPutAll:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.JSStream);



smalltalk.addMethod(
"_appendToInstruction_",
smalltalk.method({
selector: "appendToInstruction:",
category: '*Compiler-IR',
fn: function (anIRInstruction){
var self=this;
smalltalk.send(anIRInstruction,"_appendBlock_",[self]);
return self},
args: ["anIRInstruction"],
source: "appendToInstruction: anIRInstruction\x0a    anIRInstruction appendBlock: self",
messageSends: ["appendBlock:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
"_asVariableName",
smalltalk.method({
selector: "asVariableName",
category: '*Compiler-IR',
fn: function (){
var self=this;
var $2,$1;
$2=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_reservedWords",[]),"_includes_",[self]);
if(smalltalk.assert($2)){
$1=smalltalk.send(self,"__comma",["_"]);
} else {
$1=self;
};
return $1;
},
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk current reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
messageSends: ["ifTrue:ifFalse:", ",", "includes:", "reservedWords", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.String);

smalltalk.addPackage('Compiler-Inlining', {});
smalltalk.addClass('IRInlinedAssignment', smalltalk.IRAssignment, [], 'Compiler-Inlining');
smalltalk.IRInlinedAssignment.comment="I represent an inlined assignment instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedAssignment_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
messageSends: ["visitIRInlinedAssignment:"],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedAssignment);



smalltalk.addClass('IRInlinedClosure', smalltalk.IRClosure, [], 'Compiler-Inlining');
smalltalk.IRInlinedClosure.comment="I represent an inlined closure instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedClosure_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
messageSends: ["visitIRInlinedClosure:"],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedClosure);



smalltalk.addClass('IRInlinedReturn', smalltalk.IRReturn, [], 'Compiler-Inlining');
smalltalk.IRInlinedReturn.comment="I represent an inlined local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
messageSends: ["visitIRInlinedReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedReturn);



smalltalk.addClass('IRInlinedNonLocalReturn', smalltalk.IRInlinedReturn, [], 'Compiler-Inlining');
smalltalk.IRInlinedNonLocalReturn.comment="I represent an inlined non local return instruction."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
var $1;
$1=smalltalk.send(aVisitor,"_visitIRInlinedNonLocalReturn_",[self]);
return $1;
},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitIRInlinedNonLocalReturn: self",
messageSends: ["visitIRInlinedNonLocalReturn:"],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedNonLocalReturn);



smalltalk.addClass('IRInlinedSend', smalltalk.IRSend, [], 'Compiler-Inlining');
smalltalk.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitInlinedSend_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
messageSends: ["visitInlinedSend:"],
referencedClasses: []
}),
smalltalk.IRInlinedSend);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSend);



smalltalk.addClass('IRInlinedIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfFalse_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
messageSends: ["visitIRInlinedIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfFalse);



smalltalk.addClass('IRInlinedIfNilIfNotNil', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfNilIfNotNil_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
messageSends: ["visitIRInlinedIfNilIfNotNil:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfNilIfNotNil);



smalltalk.addClass('IRInlinedIfTrue', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrue_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
messageSends: ["visitIRInlinedIfTrue:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrue);



smalltalk.addClass('IRInlinedIfTrueIfFalse', smalltalk.IRInlinedSend, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedIfTrueIfFalse_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
messageSends: ["visitIRInlinedIfTrueIfFalse:"],
referencedClasses: []
}),
smalltalk.IRInlinedIfTrueIfFalse);



smalltalk.addClass('IRInlinedSequence', smalltalk.IRBlockSequence, [], 'Compiler-Inlining');
smalltalk.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`)."
smalltalk.addMethod(
"_accept_",
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor,"_visitIRInlinedSequence_",[self]);
return self},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
messageSends: ["visitIRInlinedSequence:"],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isInlined\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRInlinedSequence);



smalltalk.addClass('IRInliner', smalltalk.IRVisitor, [], 'Compiler-Inlining');
smalltalk.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`"
smalltalk.addMethod(
"_assignmentInliner",
smalltalk.method({
selector: "assignmentInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRAssignmentInliner || IRAssignmentInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRAssignmentInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_nonLocalReturnInliner",
smalltalk.method({
selector: "nonLocalReturnInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRNonLocalReturnInliner || IRNonLocalReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRNonLocalReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_returnInliner",
smalltalk.method({
selector: "returnInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRReturnInliner || IRReturnInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRReturnInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_sendInliner",
smalltalk.method({
selector: "sendInliner",
category: 'factory',
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_new",[]);
smalltalk.send($2,"_translator_",[self]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new \x0a\x09\x09translator: self;\x0a\x09\x09yourself",
messageSends: ["translator:", "new", "yourself"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineAssignment_",
smalltalk.method({
selector: "shouldInlineAssignment:",
category: 'testing',
fn: function (anIRAssignment){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_last",[])]);
})]);
})]);
return $1;
},
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [ \x0a\x09\x09anIRAssignment instructions last isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRAssignment instructions last) ]]",
messageSends: ["and:", "shouldInlineSend:", "last", "instructions", "isSend", "not", "isInlined"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineReturn_",
smalltalk.method({
selector: "shouldInlineReturn:",
category: 'testing',
fn: function (anIRReturn){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[]),"_isSend",[]),"_and_",[(function(){
return smalltalk.send(self,"_shouldInlineSend_",[smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_first",[])]);
})]);
})]);
return $1;
},
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [ \x0a\x09\x09anIRReturn instructions first isSend and: [\x09\x0a\x09\x09\x09self shouldInlineSend: (anIRReturn instructions first) ]]",
messageSends: ["and:", "shouldInlineSend:", "first", "instructions", "isSend", "not", "isInlined"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_shouldInlineSend_",
smalltalk.method({
selector: "shouldInlineSend:",
category: 'testing',
fn: function (anIRSend){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(anIRSend,"_isInlined",[]),"_not",[]),"_and_",[(function(){
return smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_shouldInline_",[anIRSend]);
})]);
return $1;
},
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
messageSends: ["and:", "shouldInline:", "not", "isInlined"],
referencedClasses: ["IRSendInliner"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_transformNonLocalReturn_",
smalltalk.method({
selector: "transformNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var $1,$2,$3,$4;
var localReturn;
$1=smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_canInlineNonLocalReturns",[]);
if(smalltalk.assert($1)){
smalltalk.send(smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_scope",[]),"_methodScope",[]),"_removeNonLocalReturn_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$2=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(anIRNonLocalReturn,"_scope",[])]);
$3=smalltalk.send($2,"_yourself",[]);
localReturn=$3;
localReturn;
smalltalk.send(smalltalk.send(anIRNonLocalReturn,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(localReturn,"_add_",[each]);
})]);
smalltalk.send(anIRNonLocalReturn,"_replaceWith_",[localReturn]);
return localReturn;
};
$4=smalltalk.send(self,"_visitIRNonLocalReturn_",[anIRNonLocalReturn],smalltalk.IRVisitor);
return $4;
},
args: ["anIRNonLocalReturn"],
source: "transformNonLocalReturn: anIRNonLocalReturn\x0a\x09\x22Replace a non local return into a local return\x22\x0a\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn instructions do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
messageSends: ["ifTrue:", "removeNonLocalReturn:", "scope", "methodScope", "scope:", "new", "yourself", "do:", "add:", "instructions", "replaceWith:", "canInlineNonLocalReturns", "visitIRNonLocalReturn:"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRAssignment_",
smalltalk.method({
selector: "visitIRAssignment:",
category: 'visiting',
fn: function (anIRAssignment){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineAssignment_",[anIRAssignment]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_assignmentInliner",[]),"_inlineAssignment_",[anIRAssignment]);
} else {
$1=smalltalk.send(self,"_visitIRAssignment_",[anIRAssignment],smalltalk.IRVisitor);
};
return $1;
},
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment) \x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
messageSends: ["ifTrue:ifFalse:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:", "shouldInlineAssignment:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRNonLocalReturn_",
smalltalk.method({
selector: "visitIRNonLocalReturn:",
category: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineReturn_",[anIRNonLocalReturn]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_nonLocalReturnInliner",[]),"_inlineReturn_",[anIRNonLocalReturn]);
} else {
$1=smalltalk.send(self,"_transformNonLocalReturn_",[anIRNonLocalReturn]);
};
return $1;
},
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn) \x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ self transformNonLocalReturn: anIRNonLocalReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "nonLocalReturnInliner", "transformNonLocalReturn:", "shouldInlineReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRReturn_",
smalltalk.method({
selector: "visitIRReturn:",
category: 'visiting',
fn: function (anIRReturn){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineReturn_",[anIRReturn]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_returnInliner",[]),"_inlineReturn_",[anIRReturn]);
} else {
$1=smalltalk.send(self,"_visitIRReturn_",[anIRReturn],smalltalk.IRVisitor);
};
return $1;
},
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn) \x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
messageSends: ["ifTrue:ifFalse:", "inlineReturn:", "returnInliner", "visitIRReturn:", "shouldInlineReturn:"],
referencedClasses: []
}),
smalltalk.IRInliner);

smalltalk.addMethod(
"_visitIRSend_",
smalltalk.method({
selector: "visitIRSend:",
category: 'visiting',
fn: function (anIRSend){
var self=this;
var $2,$1;
$2=smalltalk.send(self,"_shouldInlineSend_",[anIRSend]);
if(smalltalk.assert($2)){
$1=smalltalk.send(smalltalk.send(self,"_sendInliner",[]),"_inlineSend_",[anIRSend]);
} else {
$1=smalltalk.send(self,"_visitIRSend_",[anIRSend],smalltalk.IRVisitor);
};
return $1;
},
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
messageSends: ["ifTrue:ifFalse:", "inlineSend:", "sendInliner", "visitIRSend:", "shouldInlineSend:"],
referencedClasses: []
}),
smalltalk.IRInliner);



smalltalk.addClass('IRInliningJSTranslator', smalltalk.IRJSTranslator, [], 'Compiler-Inlining');
smalltalk.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance)."
smalltalk.addMethod(
"_visitIRInlinedAssignment_",
smalltalk.method({
selector: "visitIRInlinedAssignment:",
category: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedAssignment,"_instructions",[]),"_last",[])]);
return self},
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedClosure_",
smalltalk.method({
selector: "visitIRInlinedClosure:",
category: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedClosure,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(self,"_visit_",[each]);
})]);
return self},
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09anIRInlinedClosure instructions do: [ :each |\x0a\x09\x09self visit: each ]",
messageSends: ["do:", "visit:", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["! smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfFalse,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '! smalltalk.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfFalse instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNil_",
smalltalk.method({
selector: "visitIRInlinedIfNil:",
category: 'visiting',
fn: function (anIRInlinedIfNil){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNil,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfNil"],
source: "visitIRInlinedIfNil: anIRInlinedIfNil\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09self visit: anIRInlinedIfNil instructions first.\x0a\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNil instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfNilIfNotNil_",
smalltalk.method({
selector: "visitIRInlinedIfNilIfNotNil:",
category: 'visiting',
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIfElse_with_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["($receiver = "]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[") == nil || $receiver == undefined"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_second",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfNilIfNotNil,"_instructions",[]),"_third",[])]);
})]);
return self},
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: '($receiver = '. \x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil instructions first.\x0a\x09\x09\x09self stream nextPutAll: ') == nil || $receiver == undefined' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfNilIfNotNil instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrue_",
smalltalk.method({
selector: "visitIRInlinedIfTrue:",
category: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIf_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrue,"_instructions",[]),"_last",[])]);
})]);
return self},
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [ \x0a\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09self visit: anIRInlinedIfTrue instructions first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrue instructions last ]",
messageSends: ["nextPutIf:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "last"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedIfTrueIfFalse_",
smalltalk.method({
selector: "visitIRInlinedIfTrueIfFalse:",
category: 'visiting',
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutIfElse_with_with_",[(function(){
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",["smalltalk.assert("]);
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_first",[])]);
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutAll_",[")"]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_second",[])]);
}),(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedIfTrueIfFalse,"_instructions",[]),"_third",[])]);
})]);
return self},
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream \x0a\x09\x09nextPutIfElse: [ \x0a\x09\x09\x09self stream nextPutAll: 'smalltalk.assert('. \x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse instructions first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions second ]\x0a\x09\x09with: [ self visit: anIRInlinedIfTrueIfFalse instructions third ]",
messageSends: ["nextPutIfElse:with:with:", "nextPutAll:", "stream", "visit:", "first", "instructions", "second", "third"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedNonLocalReturn_",
smalltalk.method({
selector: "visitIRInlinedNonLocalReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
})]);
smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutNonLocalReturnWith_",[(function(){
})]);
return self},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedNonLocalReturn: anIRInlinedReturn\x0a\x09self stream nextPutStatementWith: [\x0a\x09\x09self visit: anIRInlinedReturn instructions last ].\x0a\x09self stream nextPutNonLocalReturnWith: [ ]",
messageSends: ["nextPutStatementWith:", "visit:", "last", "instructions", "stream", "nextPutNonLocalReturnWith:"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedReturn_",
smalltalk.method({
selector: "visitIRInlinedReturn:",
category: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
smalltalk.send(self,"_visit_",[smalltalk.send(smalltalk.send(anIRInlinedReturn,"_instructions",[]),"_last",[])]);
return self},
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn instructions last",
messageSends: ["visit:", "last", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);

smalltalk.addMethod(
"_visitIRInlinedSequence_",
smalltalk.method({
selector: "visitIRInlinedSequence:",
category: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
smalltalk.send(smalltalk.send(anIRInlinedSequence,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(smalltalk.send(self,"_stream",[]),"_nextPutStatementWith_",[(function(){
return smalltalk.send(self,"_visit_",[each]);
})]);
})]);
return self},
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence instructions do: [ :each | \x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
messageSends: ["do:", "nextPutStatementWith:", "visit:", "stream", "instructions"],
referencedClasses: []
}),
smalltalk.IRInliningJSTranslator);



smalltalk.addClass('IRSendInliner', smalltalk.Object, ['send', 'translator'], 'Compiler-Inlining');
smalltalk.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods."
smalltalk.addMethod(
"_ifFalse_",
smalltalk.method({
selector: "ifFalse:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfFalse || IRInlinedIfFalse),"_new",[]),anIRInstruction]);
return $1;
},
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifFalse_ifTrue_",
smalltalk.method({
selector: "ifFalse:ifTrue:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.symbolFor("ifTrue:ifFalse:"),[anotherIRInstruction,anIRInstruction]]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_",
smalltalk.method({
selector: "ifNil:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var $2,$3,$4,$5,$1;
$2=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(smalltalk.send(anIRInstruction,"_scope",[]),"_copy",[])]);
$3=smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$4=smalltalk.send($3,"_yourself",[]);
smalltalk.send($2,"_add_",[$4]);
$5=smalltalk.send($2,"_yourself",[]);
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anIRInstruction,$5]);
return $1;
},
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new \x0a\x09\x09with: anIRInstruction\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNil_ifNotNil_",
smalltalk.method({
selector: "ifNil:ifNotNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_",
smalltalk.method({
selector: "ifNotNil:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var $2,$3,$4,$5,$1;
$2=smalltalk.send((smalltalk.IRClosure || IRClosure),"_new",[]);
smalltalk.send($2,"_scope_",[smalltalk.send(smalltalk.send(anIRInstruction,"_scope",[]),"_copy",[])]);
$3=smalltalk.send((smalltalk.IRBlockSequence || IRBlockSequence),"_new",[]);
smalltalk.send($3,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$4=smalltalk.send($3,"_yourself",[]);
smalltalk.send($2,"_add_",[$4]);
$5=smalltalk.send($2,"_yourself",[]);
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),$5,anIRInstruction]);
return $1;
},
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self \x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09with: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send instructions first;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new", "scope:", "copy", "scope", "add:", "first", "instructions", "send", "yourself"],
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifNotNil_ifNil_",
smalltalk.method({
selector: "ifNotNil:ifNil:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfNilIfNotNil || IRInlinedIfNilIfNotNil),"_new",[]),anotherIRInstruction,anIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new with: anotherIRInstruction with: anIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfNilIfNotNil"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_",
smalltalk.method({
selector: "ifTrue:",
category: 'inlining',
fn: function (anIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_",[smalltalk.send((smalltalk.IRInlinedIfTrue || IRInlinedIfTrue),"_new",[]),anIRInstruction]);
return $1;
},
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new with: anIRInstruction",
messageSends: ["inlinedSend:with:", "new"],
referencedClasses: ["IRInlinedIfTrue"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_ifTrue_ifFalse_",
smalltalk.method({
selector: "ifTrue:ifFalse:",
category: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlinedSend_with_with_",[smalltalk.send((smalltalk.IRInlinedIfTrueIfFalse || IRInlinedIfTrueIfFalse),"_new",[]),anIRInstruction,anotherIRInstruction]);
return $1;
},
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new with: anIRInstruction with: anotherIRInstruction",
messageSends: ["inlinedSend:with:with:", "new"],
referencedClasses: ["IRInlinedIfTrueIfFalse"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var $1,$2;
var inlinedClosure;
var sequence;
var statements;
inlinedClosure=smalltalk.send(self,"_inlinedClosure",[]);
smalltalk.send(inlinedClosure,"_scope_",[smalltalk.send(anIRClosure,"_scope",[])]);
smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_do_",[(function(each){
$1=smalltalk.send(each,"_isSequence",[]);
if(! smalltalk.assert($1)){
return smalltalk.send(inlinedClosure,"_add_",[each]);
};
})]);
sequence=smalltalk.send(self,"_inlinedSequence",[]);
smalltalk.send(inlinedClosure,"_add_",[sequence]);
statements=smalltalk.send(smalltalk.send(smalltalk.send(anIRClosure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
smalltalk.send(smalltalk.send(statements,"_allButLast",[]),"_do_",[(function(each){
return smalltalk.send(sequence,"_add_",[each]);
})]);
$2=smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_isReturn",[]),"_and_",[(function(){
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_isBlockReturn",[]);
})]);
if(smalltalk.assert($2)){
return smalltalk.send(sequence,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(statements,"_last",[]),"_instructions",[]),"_first",[])]);
} else {
return smalltalk.send(sequence,"_add_",[smalltalk.send(statements,"_last",[])]);
};
})]);
return inlinedClosure;
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure scope: anIRClosure scope.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure instructions do: [ :each | \x0a\x09\x09each isSequence ifFalse: [\x0a\x09\x09\x09inlinedClosure add: each ]].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures don't have implicit local returns\x22\x0a\x09\x09(statements last isReturn and: [ statements last isBlockReturn ])\x0a\x09\x09\x09ifTrue: [ sequence add: statements last instructions first ]\x0a\x09\x09\x09ifFalse: [ sequence add: statements last ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlinedClosure", "scope:", "scope", "do:", "ifFalse:", "add:", "isSequence", "instructions", "inlinedSequence", "last", "ifNotEmpty:", "allButLast", "ifTrue:ifFalse:", "first", "and:", "isBlockReturn", "isReturn"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlineSend_",
smalltalk.method({
selector: "inlineSend:",
category: 'inlining',
fn: function (anIRSend){
var self=this;
var $1;
smalltalk.send(self,"_send_",[anIRSend]);
$1=smalltalk.send(self,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"_send",[]),"_selector",[]),smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_allButFirst",[])]);
return $1;
},
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self \x0a\x09\x09perform: self send selector \x0a\x09\x09withArguments: self send instructions allButFirst",
messageSends: ["send:", "perform:withArguments:", "selector", "send", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedClosure",
smalltalk.method({
selector: "inlinedClosure",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedClosure || IRInlinedClosure),"_new",[]);
return $1;
},
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
messageSends: ["new"],
referencedClasses: ["IRInlinedClosure"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_",
smalltalk.method({
selector: "inlinedSend:with:",
category: 'inlining',
fn: function (inlinedSend,anIRInstruction){
var self=this;
var $1,$2,$3;
var inlinedClosure;
$1=smalltalk.send(anIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$2=smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($2)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anIRInstruction])]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
$3=smalltalk.send(inlinedSend,"_add_",[inlinedClosure]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
},
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSend_with_with_",
smalltalk.method({
selector: "inlinedSend:with:with:",
category: 'inlining',
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var $1,$2,$3,$4,$5;
var inlinedClosure1;
var inlinedClosure2;
$1=smalltalk.send(anIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$2=smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($2)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
$3=smalltalk.send(anotherIRInstruction,"_isClosure",[]);
if(! smalltalk.assert($3)){
smalltalk.send(self,"_inliningError_",["Message argument should be a block"]);
};
$4=smalltalk.send(smalltalk.send(smalltalk.send(anotherIRInstruction,"_arguments",[]),"_size",[]),"__eq",[(0)]);
if(! smalltalk.assert($4)){
smalltalk.send(self,"_inliningError_",["Inlined block should have zero argument"]);
};
inlinedClosure1=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anIRInstruction])]);
inlinedClosure2=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[smalltalk.send(self,"_inlineClosure_",[anotherIRInstruction])]);
smalltalk.send(inlinedSend,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_send",[]),"_instructions",[]),"_first",[])]);
smalltalk.send(inlinedSend,"_add_",[inlinedClosure1]);
$5=smalltalk.send(inlinedSend,"_add_",[inlinedClosure2]);
smalltalk.send(smalltalk.send(self,"_send",[]),"_replaceWith_",[inlinedSend]);
return inlinedSend;
},
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend with: anIRInstruction with: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send instructions first;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09^ inlinedSend",
messageSends: ["ifFalse:", "inliningError:", "isClosure", "=", "size", "arguments", "visit:", "inlineClosure:", "translator", "add:", "first", "instructions", "send", "replaceWith:"],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inlinedSequence",
smalltalk.method({
selector: "inlinedSequence",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedSequence || IRInlinedSequence),"_new",[]);
return $1;
},
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
messageSends: ["new"],
referencedClasses: ["IRInlinedSequence"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_inliningError_",
smalltalk.method({
selector: "inliningError:",
category: 'error handling',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.InliningError || InliningError),"_signal_",[aString]);
return self},
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
messageSends: ["signal:"],
referencedClasses: ["InliningError"]
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send",
smalltalk.method({
selector: "send",
category: 'accessing',
fn: function (){
var self=this;
return self["@send"];
},
args: [],
source: "send\x0a\x09^ send",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_send_",
smalltalk.method({
selector: "send:",
category: 'accessing',
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self},
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator",
smalltalk.method({
selector: "translator",
category: 'accessing',
fn: function (){
var self=this;
return self["@translator"];
},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);

smalltalk.addMethod(
"_translator_",
smalltalk.method({
selector: "translator:",
category: 'accessing',
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self},
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner);


smalltalk.addMethod(
"_inlinedSelectors",
smalltalk.method({
selector: "inlinedSelectors",
category: 'accessing',
fn: function (){
var self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil"];
},
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil')",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);

smalltalk.addMethod(
"_shouldInline_",
smalltalk.method({
selector: "shouldInline:",
category: 'accessing',
fn: function (anIRInstruction){
var self=this;
var $1,$2;
var $early={};
try {
$1=smalltalk.send(smalltalk.send(self,"_inlinedSelectors",[]),"_includes_",[smalltalk.send(anIRInstruction,"_selector",[])]);
if(! smalltalk.assert($1)){
return false;
};
smalltalk.send(smalltalk.send(smalltalk.send(anIRInstruction,"_instructions",[]),"_allButFirst",[]),"_do_",[(function(each){
$2=smalltalk.send(each,"_isClosure",[]);
if(! smalltalk.assert($2)){
throw $early=[false];
};
})]);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["anIRInstruction"],
source: "shouldInline: anIRInstruction\x0a\x09(self inlinedSelectors includes: anIRInstruction selector) ifFalse: [ ^ false ].\x0a\x09anIRInstruction instructions allButFirst do: [ :each |\x0a\x09\x09each isClosure ifFalse: [ ^ false ]].\x0a\x09^ true",
messageSends: ["ifFalse:", "includes:", "selector", "inlinedSelectors", "do:", "isClosure", "allButFirst", "instructions"],
referencedClasses: []
}),
smalltalk.IRSendInliner.klass);


smalltalk.addClass('IRAssignmentInliner', smalltalk.IRSendInliner, ['assignment'], 'Compiler-Inlining');
smalltalk.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions. \x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if(smalltalk.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};"
smalltalk.addMethod(
"_assignment",
smalltalk.method({
selector: "assignment",
category: 'accessing',
fn: function (){
var self=this;
return self["@assignment"];
},
args: [],
source: "assignment\x0a\x09^ assignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_assignment_",
smalltalk.method({
selector: "assignment:",
category: 'accessing',
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self},
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineAssignment_",
smalltalk.method({
selector: "inlineAssignment:",
category: 'inlining',
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
smalltalk.send(self,"_assignment_",[anIRAssignment]);
inlinedAssignment=smalltalk.send((smalltalk.IRInlinedAssignment || IRInlinedAssignment),"_new",[]);
smalltalk.send(smalltalk.send(anIRAssignment,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(inlinedAssignment,"_add_",[each]);
})]);
smalltalk.send(anIRAssignment,"_replaceWith_",[inlinedAssignment]);
smalltalk.send(self,"_inlineSend_",[smalltalk.send(smalltalk.send(inlinedAssignment,"_instructions",[]),"_last",[])]);
return inlinedAssignment;
},
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment instructions do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment instructions last.\x0a\x09^ inlinedAssignment",
messageSends: ["assignment:", "new", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: ["IRInlinedAssignment"]
}),
smalltalk.IRAssignmentInliner);

smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var $1,$2,$3;
var inlinedClosure;
var statements;
inlinedClosure=smalltalk.send(self,"_inlineClosure_",[anIRClosure],smalltalk.IRSendInliner);
statements=smalltalk.send(smalltalk.send(smalltalk.send(inlinedClosure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
$1=smalltalk.send(smalltalk.send(statements,"_last",[]),"_canBeAssigned",[]);
if(smalltalk.assert($1)){
$2=smalltalk.send((smalltalk.IRAssignment || IRAssignment),"_new",[]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_assignment",[]),"_instructions",[]),"_first",[])]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(statements,"_last",[]),"_copy",[])]);
$3=smalltalk.send($2,"_yourself",[]);
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_replaceWith_",[$3]);
};
})]);
return inlinedClosure;
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last canBeAssigned ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment instructions first;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ inlinedClosure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifTrue:", "replaceWith:", "add:", "first", "assignment", "new", "copy", "yourself", "canBeAssigned"],
referencedClasses: ["IRAssignment"]
}),
smalltalk.IRAssignmentInliner);



smalltalk.addClass('IRNonLocalReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var $1;
$1=smalltalk.send(self,"_inlineCLosure_",[anIRClosure],smalltalk.IRSendInliner);
return $1;
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09\x22| inlinedClosure statements |\x0a\x0a\x09inlinedClosure := super inlineClosure: anIRClosure.\x0a\x09statements := inlinedClosure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last replaceWith: (IRNonLocalReturn new\x0a\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ inlinedClosure\x22\x0a\x0a\x09^ super inlineCLosure: anIRClosure",
messageSends: ["inlineCLosure:"],
referencedClasses: []
}),
smalltalk.IRNonLocalReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedNonLocalReturn || IRInlinedNonLocalReturn),"_new",[]);
return $1;
},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedNonLocalReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedNonLocalReturn"]
}),
smalltalk.IRNonLocalReturnInliner);



smalltalk.addClass('IRReturnInliner', smalltalk.IRSendInliner, [], 'Compiler-Inlining');
smalltalk.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction."
smalltalk.addMethod(
"_inlineClosure_",
smalltalk.method({
selector: "inlineClosure:",
category: 'inlining',
fn: function (anIRClosure){
var self=this;
var $1,$2,$3;
var closure;
var statements;
closure=smalltalk.send(self,"_inlineClosure_",[anIRClosure],smalltalk.IRSendInliner);
statements=smalltalk.send(smalltalk.send(smalltalk.send(closure,"_instructions",[]),"_last",[]),"_instructions",[]);
smalltalk.send(statements,"_ifNotEmpty_",[(function(){
$1=smalltalk.send(smalltalk.send(statements,"_last",[]),"_isReturn",[]);
if(! smalltalk.assert($1)){
$2=smalltalk.send((smalltalk.IRReturn || IRReturn),"_new",[]);
smalltalk.send($2,"_add_",[smalltalk.send(smalltalk.send(statements,"_last",[]),"_copy",[])]);
$3=smalltalk.send($2,"_yourself",[]);
return smalltalk.send(smalltalk.send(statements,"_last",[]),"_replaceWith_",[$3]);
};
})]);
return closure;
},
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure instructions last instructions.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last isReturn\x0a\x09\x09\x09ifFalse: [ statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
messageSends: ["inlineClosure:", "instructions", "last", "ifNotEmpty:", "ifFalse:", "replaceWith:", "add:", "copy", "new", "yourself", "isReturn"],
referencedClasses: ["IRReturn"]
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlineReturn_",
smalltalk.method({
selector: "inlineReturn:",
category: 'inlining',
fn: function (anIRReturn){
var self=this;
var return_;
return_=smalltalk.send(self,"_inlinedReturn",[]);
smalltalk.send(smalltalk.send(anIRReturn,"_instructions",[]),"_do_",[(function(each){
return smalltalk.send(return_,"_add_",[each]);
})]);
smalltalk.send(anIRReturn,"_replaceWith_",[return_]);
smalltalk.send(self,"_inlineSend_",[smalltalk.send(smalltalk.send(return_,"_instructions",[]),"_last",[])]);
return return_;
},
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn instructions do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return instructions last.\x0a\x09^ return",
messageSends: ["inlinedReturn", "do:", "add:", "instructions", "replaceWith:", "inlineSend:", "last"],
referencedClasses: []
}),
smalltalk.IRReturnInliner);

smalltalk.addMethod(
"_inlinedReturn",
smalltalk.method({
selector: "inlinedReturn",
category: 'factory',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInlinedReturn || IRInlinedReturn),"_new",[]);
return $1;
},
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
messageSends: ["new"],
referencedClasses: ["IRInlinedReturn"]
}),
smalltalk.IRReturnInliner);



smalltalk.addClass('InliningCodeGenerator', smalltalk.CodeGenerator, [], 'Compiler-Inlining');
smalltalk.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output"
smalltalk.addMethod(
"_compileNode_",
smalltalk.method({
selector: "compileNode:",
category: 'compiling',
fn: function (aNode){
var self=this;
var $2,$3,$1;
var ir;
var stream;
smalltalk.send(smalltalk.send(self,"_semanticAnalyzer",[]),"_visit_",[aNode]);
ir=smalltalk.send(smalltalk.send(self,"_translator",[]),"_visit_",[aNode]);
smalltalk.send(smalltalk.send(self,"_inliner",[]),"_visit_",[ir]);
$2=smalltalk.send(self,"_irTranslator",[]);
smalltalk.send($2,"_visit_",[ir]);
$3=smalltalk.send($2,"_contents",[]);
$1=$3;
return $1;
},
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "irTranslator", "contents"],
referencedClasses: []
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_inliner",
smalltalk.method({
selector: "inliner",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInliner || IRInliner),"_new",[]);
return $1;
},
args: [],
source: "inliner\x0a\x09^ IRInliner new",
messageSends: ["new"],
referencedClasses: ["IRInliner"]
}),
smalltalk.InliningCodeGenerator);

smalltalk.addMethod(
"_irTranslator",
smalltalk.method({
selector: "irTranslator",
category: 'compiling',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send((smalltalk.IRInliningJSTranslator || IRInliningJSTranslator),"_new",[]);
return $1;
},
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
messageSends: ["new"],
referencedClasses: ["IRInliningJSTranslator"]
}),
smalltalk.InliningCodeGenerator);



smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'instruction', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope."
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_args", []), "_at_put_", [aString, smalltalk.send(smalltalk.ArgVar || ArgVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
messageSends: ["at:put:", "on:", "args", "scope:", "at:"],
referencedClasses: ["ArgVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_temps", []), "_at_put_", [aString, smalltalk.send(smalltalk.TempVar || TempVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_temps", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
messageSends: ["at:put:", "on:", "temps", "scope:", "at:"],
referencedClasses: ["TempVar"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_keys", []), "__comma", [smalltalk.send(smalltalk.send(self, "_temps", []), "_keys", [])]);
    return $1;
},
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
messageSends: [",", "keys", "temps", "args"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@args']) == nil || $receiver == undefined) {
        self['@args'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@args'];
    } else {
        $1 = self['@args'];
    }
    return $1;
},
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aStringOrNode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_pseudoVars", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_args", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return smalltalk.send(smalltalk.send(self, "_temps", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), function () {return nil;}]);}]);}]);
    return $1;
},
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [ \x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
messageSends: ["at:ifAbsent:", "value", "temps", "args", "pseudoVars"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isInlined", []), "_and_", [function () {return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_canInlineNonLocalReturns", []);}]);
    return $1;
},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
messageSends: ["and:", "canInlineNonLocalReturns", "outerScope", "isInlined"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction",
smalltalk.method({
selector: "instruction",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@instruction'];
},
args: [],
source: "instruction\x0a\x09^ instruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_instruction_",
smalltalk.method({
selector: "instruction:",
category: 'accessing',
fn: function (anIRInstruction) {
    var self = this;
    self['@instruction'] = anIRInstruction;
    return self;
},
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isBlockScope",
smalltalk.method({
selector: "isBlockScope",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_isMethodScope", []), "_not", []);
    return $1;
},
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
messageSends: ["not", "isMethodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isInlined",
smalltalk.method({
selector: "isInlined",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_instruction", []), "_isInlined", []);
    return $1;
},
args: [],
source: "isInlined\x0a\x09^ self instruction isInlined",
messageSends: ["isInlined", "instruction"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isMethodScope\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    var $1;
    var lookup;
    lookup = smalltalk.send(self, "_bindingFor_", [aNode]);
    if (($receiver = lookup) == nil || $receiver == undefined) {
        $1 = smalltalk.send(self, "_outerScope", []);
        if (($receiver = $1) == nil || $receiver == undefined) {
            lookup = $1;
        } else {
            lookup = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_lookupVariable_", [aNode]);
        }
    } else {
    }
    return lookup;
},
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [ \x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "lookupVariable:", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function () {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_outerScope", []);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = $2;
    } else {
        $1 = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_methodScope", []);
    }
    return $1;
},
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
messageSends: ["ifNotNil:", "methodScope", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@node'];
},
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@outerScope'];
},
args: [],
source: "outerScope\x0a\x09^ outerScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
category: 'accessing',
fn: function (aLexicalScope) {
    var self = this;
    self['@outerScope'] = aLexicalScope;
    return self;
},
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_methodScope", []), "_pseudoVars", []);
    return $1;
},
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
messageSends: ["pseudoVars", "methodScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
category: 'accessing',
fn: function () {
    var self = this;
    var $3, $2, $1;
    $3 = smalltalk.send(self, "_outerScope", []);
    if (($receiver = $3) == nil || $receiver == undefined) {
        $2 = 0;
    } else {
        $2 = smalltalk.send(smalltalk.send(self, "_outerScope", []), "_scopeLevel", []);
    }
    $1 = smalltalk.send($2, "__plus", [1]);
    return $1;
},
args: [],
source: "scopeLevel\x0a\x09^ (self outerScope \x0a\x09\x09ifNil: [ 0 ]\x0a\x09\x09ifNotNil: [ self outerScope scopeLevel ]) + 1",
messageSends: ["+", "ifNil:ifNotNil:", "scopeLevel", "outerScope"],
referencedClasses: []
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@temps']) == nil || $receiver == undefined) {
        self['@temps'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@temps'];
    } else {
        $1 = self['@temps'];
    }
    return $1;
},
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
smalltalk.MethodLexicalScope.comment="I represent a method scope."
smalltalk.addMethod(
"_addIVar_",
smalltalk.method({
selector: "addIVar:",
category: 'adding',
fn: function (aString) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_put_", [aString, smalltalk.send(smalltalk.InstanceVar || InstanceVar, "_on_", [aString])]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_", [aString]), "_scope_", [self]);
    return self;
},
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
messageSends: ["at:put:", "on:", "iVars", "scope:", "at:"],
referencedClasses: ["InstanceVar"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_addNonLocalReturn_",
smalltalk.method({
selector: "addNonLocalReturn:",
category: 'adding',
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_add_", [aScope]);
    return self;
},
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
messageSends: ["add:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_allVariableNames", [], smalltalk.LexicalScope), "__comma", [smalltalk.send(smalltalk.send(self, "_iVars", []), "_keys", [])]);
    return $1;
},
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
messageSends: [",", "keys", "iVars", "allVariableNames"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    var $2, $1;
    $2 = smalltalk.send(self, "_bindingFor_", [aNode], smalltalk.LexicalScope);
    if (($receiver = $2) == nil || $receiver == undefined) {
        $1 = smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_ifAbsent_", [smalltalk.send(aNode, "_value", []), function () {return nil;}]);
    } else {
        $1 = $2;
    }
    return $1;
},
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
messageSends: ["ifNil:", "at:ifAbsent:", "value", "iVars", "bindingFor:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_canInlineNonLocalReturns",
smalltalk.method({
selector: "canInlineNonLocalReturns",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasLocalReturn",
smalltalk.method({
selector: "hasLocalReturn",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_localReturn", []);
    return $1;
},
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
messageSends: ["localReturn"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_notEmpty", []);
    return $1;
},
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
messageSends: ["notEmpty", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@iVars']) == nil || $receiver == undefined) {
        self['@iVars'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@iVars'];
    } else {
        $1 = self['@iVars'];
    }
    return $1;
},
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isMethodScope\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn",
smalltalk.method({
selector: "localReturn",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@localReturn']) == nil || $receiver == undefined) {
        $1 = false;
    } else {
        $1 = self['@localReturn'];
    }
    return $1;
},
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_localReturn_",
smalltalk.method({
selector: "localReturn:",
category: 'accessing',
fn: function (aBoolean) {
    var self = this;
    self['@localReturn'] = aBoolean;
    return self;
},
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
category: 'accessing',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "methodScope\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturns",
smalltalk.method({
selector: "nonLocalReturns",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@nonLocalReturns']) == nil ||
        $receiver == undefined) {
        self['@nonLocalReturns'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
        $1 = self['@nonLocalReturns'];
    } else {
        $1 = self['@nonLocalReturns'];
    }
    return $1;
},
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_pseudoVars",
smalltalk.method({
selector: "pseudoVars",
category: 'accessing',
fn: function () {
    var self = this;
    var $1, $2;
    if (($receiver = self['@pseudoVars']) == nil || $receiver == undefined) {
        self['@pseudoVars'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        self['@pseudoVars'];
        smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_pseudoVariableNames", []), "_do_", [function (each) {$1 = smalltalk.send(smalltalk.PseudoVar || PseudoVar, "_on_", [each]);smalltalk.send($1, "_scope_", [smalltalk.send(self, "_methodScope", [])]);$2 = smalltalk.send($1, "_yourself", []);return smalltalk.send(self['@pseudoVars'], "_at_put_", [each, $2]);}]);
    } else {
        self['@pseudoVars'];
    }
    return self['@pseudoVars'];
},
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk current pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
messageSends: ["ifNil:", "new", "do:", "at:put:", "scope:", "methodScope", "on:", "yourself", "pseudoVariableNames", "current"],
referencedClasses: ["Dictionary", "PseudoVar", "Smalltalk"]
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_removeNonLocalReturn_",
smalltalk.method({
selector: "removeNonLocalReturn:",
category: 'adding',
fn: function (aScope) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_nonLocalReturns", []), "_remove_ifAbsent_", [aScope, function () {}]);
    return self;
},
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
messageSends: ["remove:ifAbsent:", "nonLocalReturns"],
referencedClasses: []
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@unknownVariables']) == nil ||
        $receiver == undefined) {
        self['@unknownVariables'] = smalltalk.send(smalltalk.OrderedCollection || OrderedCollection, "_new", []);
        $1 = self['@unknownVariables'];
    } else {
        $1 = self['@unknownVariables'];
    }
    return $1;
},
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.  \x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_name", []), "_asVariableName", []);
    return $1;
},
args: [],
source: "alias\x0a\x09^ self name asVariableName",
messageSends: ["asVariableName", "name"],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isArgVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isClassRefVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isInstanceVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isPseudoVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isTempVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isUnknownVar\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@name'];
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@name'] = aString;
    return self;
},
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@scope'];
},
args: [],
source: "scope\x0a\x09^ scope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
category: 'accessing',
fn: function (aScope) {
    var self = this;
    self['@scope'] = aScope;
    return self;
},
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_validateAssignment",
smalltalk.method({
selector: "validateAssignment",
category: 'testing',
fn: function () {
    var self = this;
    var $1, $2, $3;
    $1 = smalltalk.send(smalltalk.send(self, "_isArgVar", []), "_or_", [function () {return smalltalk.send(self, "_isPseudoVar", []);}]);
    if (smalltalk.assert($1)) {
        $2 = smalltalk.send(smalltalk.InvalidAssignmentError || InvalidAssignmentError, "_new", []);
        smalltalk.send($2, "_variableName_", [smalltalk.send(self, "_name", [])]);
        $3 = smalltalk.send($2, "_signal", []);
    }
    return self;
},
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
messageSends: ["ifTrue:", "variableName:", "name", "new", "signal", "or:", "isPseudoVar", "isArgVar"],
referencedClasses: ["InvalidAssignmentError"]
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aString) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_name_", [aString]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aString"],
source: "on: aString\x0a\x09^ self new \x0a\x09\x09name: aString;\x0a\x09\x09yourself",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, ['node'], 'Compiler-Semantic');
smalltalk.AliasVar.comment="I am an internally defined variable by the compiler"
smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@node'];
},
args: [],
source: "node\x0a\x09^ node",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
category: 'accessing',
fn: function (aNode) {
    var self = this;
    self['@node'] = aNode;
    return self;
},
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.AliasVar);



smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ArgVar.comment="I am an argument of a method or block."
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isArgVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.ClassRefVar.comment="I am an class reference variable"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(smalltalk.", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [")"]);
    return $1;
},
args: [],
source: "alias\x0a\x09^ '(smalltalk.', self name, ' || ', self name, ')'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.ClassRefVar);

smalltalk.addMethod(
"_isClassRefVar",
smalltalk.method({
selector: "isClassRefVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isClassRefVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.InstanceVar.comment="I am an instance variable of a method or block."
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'testing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send("self[\"@", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", ["\"]"]);
    return $1;
},
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
messageSends: [",", "name"],
referencedClasses: []
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isInstanceVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.InstanceVar);



smalltalk.addClass('PseudoVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'"
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_name", []);
    return $1;
},
args: [],
source: "alias\x0a\x09^ self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.PseudoVar);

smalltalk.addMethod(
"_isPseudoVar",
smalltalk.method({
selector: "isPseudoVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isPseudoVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.PseudoVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.TempVar.comment="I am an temporary variable of a method or block."
smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isTempVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals"
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isUnknownVar\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends'], 'Compiler-Semantic');
smalltalk.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes."
smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@classReferences']) == nil ||
        $receiver == undefined) {
        self['@classReferences'] = smalltalk.send(smalltalk.Set || Set, "_new", []);
        $1 = self['@classReferences'];
    } else {
        $1 = self['@classReferences'];
    }
    return $1;
},
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
category: 'error handling',
fn: function (aString) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.ShadowingVariableError || ShadowingVariableError, "_new", []);
    smalltalk.send($1, "_variableName_", [aString]);
    $2 = smalltalk.send($1, "_signal", []);
    return self;
},
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
messageSends: ["variableName:", "new", "signal"],
referencedClasses: ["ShadowingVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
category: 'error handling',
fn: function (aNode) {
    var self = this;
    var $1, $2;
    var notDefined;
    notDefined = eval("typeof " + aNode._value() + " == \"undefined\"");
    if (smalltalk.assert(notDefined)) {
        $1 = smalltalk.send(smalltalk.UnknownVariableError || UnknownVariableError, "_new", []);
        smalltalk.send($1, "_variableName_", [smalltalk.send(aNode, "_value", [])]);
        $2 = smalltalk.send($1, "_signal", []);
    } else {
        smalltalk.send(smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_unknownVariables", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
    }
    return self;
},
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window)\x22\x0a\x0a\x09| notDefined |\x0a\x0a\x09notDefined := <eval('typeof ' + aNode._value() + ' == \x22undefined\x22')>.\x0a\x0a\x09notDefined\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09signal ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09currentScope methodScope unknownVariables add: aNode value. ]",
messageSends: ["ifTrue:ifFalse:", "variableName:", "value", "new", "signal", "add:", "unknownVariables", "methodScope"],
referencedClasses: ["UnknownVariableError"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    if (($receiver = self['@messageSends']) == nil ||
        $receiver == undefined) {
        self['@messageSends'] = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
        $1 = self['@messageSends'];
    } else {
        $1 = self['@messageSends'];
    }
    return $1;
},
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
category: 'factory',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.LexicalScope || LexicalScope]);
    return $1;
},
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["LexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
category: 'factory',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_newScopeOfClass_", [smalltalk.MethodLexicalScope || MethodLexicalScope]);
    return $1;
},
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
messageSends: ["newScopeOfClass:"],
referencedClasses: ["MethodLexicalScope"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
category: 'factory',
fn: function (aLexicalScopeClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(aLexicalScopeClass, "_new", []);
    smalltalk.send($2, "_outerScope_", [self['@currentScope']]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new \x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
messageSends: ["outerScope:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
category: 'scope',
fn: function () {
    var self = this;
    if (($receiver = self['@currentScope']) == nil ||
        $receiver == undefined) {
        self['@currentScope'];
    } else {
        self['@currentScope'] = smalltalk.send(self['@currentScope'], "_outerScope", []);
        self['@currentScope'];
    }
    return self;
},
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
messageSends: ["ifNotNil:", "outerScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
category: 'scope',
fn: function (aScope) {
    var self = this;
    smalltalk.send(aScope, "_outerScope_", [self['@currentScope']]);
    self['@currentScope'] = aScope;
    return self;
},
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
messageSends: ["outerScope:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@theClass'];
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass) {
    var self = this;
    self['@theClass'] = aClass;
    return self;
},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
category: 'scope',
fn: function (aString) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aString]);
    if (($receiver = $1) == nil || $receiver == undefined) {
    } else {
        smalltalk.send(self, "_errorShadowingVariable_", [aString]);
    }
    return self;
},
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
messageSends: ["ifNotNil:", "errorShadowingVariable:", "lookupVariable:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_visitAssignmentNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(smalltalk.send(aNode, "_left", []), "_beAssigned", []);
    return self;
},
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
messageSends: ["visitAssignmentNode:", "beAssigned", "left"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newBlockScope", [])]);
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    smalltalk.send(self['@currentScope'], "_node_", [aNode]);
    smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);}]);
    smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(self, "_popScope", []);
    return self;
},
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09\x0a\x09aNode parameters do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "do:", "validateVariableScope:", "addArg:", "parameters", "visitBlockNode:", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_receiver_", [smalltalk.send(aNode, "_receiver", [])]);}]);
    smalltalk.send(self, "_visitCascadeNode_", [aNode], smalltalk.NodeVisitor);
    $1 = smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), "_superSend", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [function (each) {return smalltalk.send(each, "_superSend_", [true]);}]);
    }
    return self;
},
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09\x22Populate the receiver into all children\x22\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09each receiver: aNode receiver ].\x0a\x09super visitCascadeNode: aNode.\x0a\x09aNode nodes first superSend ifTrue: [\x0a\x09\x09aNode nodes do: [ :each | each superSend: true ]]",
messageSends: ["do:", "receiver:", "receiver", "nodes", "visitCascadeNode:", "ifTrue:", "superSend:", "superSend", "first"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1, $2;
    smalltalk.send(smalltalk.send(self, "_classReferences", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
    $1 = smalltalk.send(smalltalk.ClassRefVar || ClassRefVar, "_new", []);
    smalltalk.send($1, "_name_", [smalltalk.send(aNode, "_value", [])]);
    $2 = smalltalk.send($1, "_yourself", []);
    smalltalk.send(aNode, "_binding_", [$2]);
    return self;
},
args: ["aNode"],
source: "visitClassReferenceNode: aNode\x0a\x09self classReferences add: aNode value.\x0a\x09aNode binding: (ClassRefVar new name: aNode value; yourself)",
messageSends: ["add:", "value", "classReferences", "binding:", "name:", "new", "yourself"],
referencedClasses: ["ClassRefVar"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newMethodScope", [])]);
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    smalltalk.send(self['@currentScope'], "_node_", [aNode]);
    smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_allInstanceVariableNames", []), "_do_", [function (each) {return smalltalk.send(self['@currentScope'], "_addIVar_", [each]);}]);
    smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);}]);
    smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.NodeVisitor);
    smalltalk.send(aNode, "_classReferences_", [smalltalk.send(self, "_classReferences", [])]);
    $1 = smalltalk.send(aNode, "_messageSends_", [smalltalk.send(smalltalk.send(self, "_messageSends", []), "_keys", [])]);
    smalltalk.send(self, "_popScope", []);
    return self;
},
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [:each | \x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode \x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09messageSends: self messageSends keys.\x0a\x09self popScope",
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "addIVar:", "allInstanceVariableNames", "theClass", "validateVariableScope:", "addArg:", "arguments", "visitMethodNode:", "classReferences:", "classReferences", "messageSends:", "keys", "messageSends", "popScope"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $1;
    smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
    $1 = smalltalk.send(self['@currentScope'], "_isMethodScope", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(self['@currentScope'], "_localReturn_", [true]);
    } else {
        smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_addNonLocalReturn_", [self['@currentScope']]);
    }
    smalltalk.send(self, "_visitReturnNode_", [aNode], smalltalk.NodeVisitor);
    return self;
},
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
messageSends: ["scope:", "ifTrue:ifFalse:", "localReturn:", "addNonLocalReturn:", "methodScope", "isMethodScope", "visitReturnNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
category: 'visiting',
fn: function (aNode){
var self=this;
var $1,$2;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_value",[]),"__eq",["super"]);
if(smalltalk.assert($1)){
smalltalk.send(aNode,"_superSend_",[true]);
smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_value_",["self"]);
} else {
$2=smalltalk.send(smalltalk.send((smalltalk.IRSendInliner || IRSendInliner),"_inlinedSelectors",[]),"_includes_",[smalltalk.send(aNode,"_selector",[])]);
if(smalltalk.assert($2)){
smalltalk.send(aNode,"_shouldBeInlined_",[true]);
smalltalk.send(smalltalk.send(aNode,"_receiver",[]),"_shouldBeAliased_",[true]);
};
};
smalltalk.send(smalltalk.send(self,"_messageSends",[]),"_at_ifAbsentPut_",[smalltalk.send(aNode,"_selector",[]),(function(){
return smalltalk.send((smalltalk.Set || Set),"_new",[]);
})]);
smalltalk.send(smalltalk.send(smalltalk.send(self,"_messageSends",[]),"_at_",[smalltalk.send(aNode,"_selector",[])]),"_add_",[aNode]);
smalltalk.send(aNode,"_index_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_messageSends",[]),"_at_",[smalltalk.send(aNode,"_selector",[])]),"_size",[])]);
smalltalk.send(self,"_visitSendNode_",[aNode],smalltalk.NodeVisitor);
return self},
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super' \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aNode superSend: true.\x0a\x09\x09\x09aNode receiver value: 'self' ]\x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver shouldBeAliased: true ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
messageSends: ["ifTrue:ifFalse:", "superSend:", "value:", "receiver", "ifTrue:", "shouldBeInlined:", "shouldBeAliased:", "includes:", "selector", "inlinedSelectors", "=", "value", "at:ifAbsentPut:", "new", "messageSends", "add:", "at:", "index:", "size", "visitSendNode:"],
referencedClasses: ["IRSendInliner", "Set"]
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [function (each) {smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addTemp_", [each]);}]);
    smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.NodeVisitor);
    return self;
},
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each | \x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
messageSends: ["do:", "validateVariableScope:", "addTemp:", "temps", "visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
category: 'visiting',
fn: function (aNode) {
    var self = this;
    var $2, $3, $4, $1;
    $2 = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aNode]);
    if (($receiver = $2) == nil || $receiver == undefined) {
        smalltalk.send(self, "_errorUnknownVariable_", [aNode]);
        $3 = smalltalk.send(smalltalk.UnknownVar || UnknownVar, "_new", []);
        smalltalk.send($3, "_name_", [smalltalk.send(aNode, "_value", [])]);
        $4 = smalltalk.send($3, "_yourself", []);
        $1 = $4;
    } else {
        $1 = $2;
    }
    smalltalk.send(aNode, "_binding_", [$1]);
    return self;
},
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error\x22\x0a\x0a\x09aNode binding: ((currentScope lookupVariable: aNode) ifNil: [ \x0a\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09UnknownVar new name: aNode value; yourself ])",
messageSends: ["binding:", "ifNil:", "errorUnknownVariable:", "name:", "value", "new", "yourself", "lookupVariable:"],
referencedClasses: ["UnknownVar"]
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_theClass_", [aClass]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
messageSends: ["theClass:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.SemanticAnalyzer.klass);


smalltalk.parser = (function(){
  /*
   * Generated by PEG.js 0.7.0.
   *
   * http://pegjs.majda.cz/
   */
  
  function quote(s) {
    /*
     * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
     * string literal except for the closing quote character, backslash,
     * carriage return, line separator, paragraph separator, and line feed.
     * Any character may appear in the form of an escape sequence.
     *
     * For portability, we also escape escape all control and non-ASCII
     * characters. Note that "\0" and "\v" escape sequences are not used
     * because JSHint does not like the first and IE the second.
     */
     return '"' + s
      .replace(/\\/g, '\\\\')  // backslash
      .replace(/"/g, '\\"')    // closing quote character
      .replace(/\x08/g, '\\b') // backspace
      .replace(/\t/g, '\\t')   // horizontal tab
      .replace(/\n/g, '\\n')   // line feed
      .replace(/\f/g, '\\f')   // form feed
      .replace(/\r/g, '\\r')   // carriage return
      .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape)
      + '"';
  }
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "separator": parse_separator,
        "comments": parse_comments,
        "ws": parse_ws,
        "identifier": parse_identifier,
        "varIdentifier": parse_varIdentifier,
        "keyword": parse_keyword,
        "className": parse_className,
        "string": parse_string,
        "symbol": parse_symbol,
        "number": parse_number,
        "hex": parse_hex,
        "float": parse_float,
        "integer": parse_integer,
        "literalArray": parse_literalArray,
        "dynamicArray": parse_dynamicArray,
        "dynamicDictionary": parse_dynamicDictionary,
        "pseudoVariable": parse_pseudoVariable,
        "literal": parse_literal,
        "variable": parse_variable,
        "classReference": parse_classReference,
        "reference": parse_reference,
        "keywordPair": parse_keywordPair,
        "binarySelector": parse_binarySelector,
        "keywordPattern": parse_keywordPattern,
        "binaryPattern": parse_binaryPattern,
        "unaryPattern": parse_unaryPattern,
        "expression": parse_expression,
        "expressionList": parse_expressionList,
        "expressions": parse_expressions,
        "assignment": parse_assignment,
        "ret": parse_ret,
        "temps": parse_temps,
        "blockParamList": parse_blockParamList,
        "subexpression": parse_subexpression,
        "statements": parse_statements,
        "sequence": parse_sequence,
        "block": parse_block,
        "operand": parse_operand,
        "unaryMessage": parse_unaryMessage,
        "unaryTail": parse_unaryTail,
        "unarySend": parse_unarySend,
        "binaryMessage": parse_binaryMessage,
        "binaryTail": parse_binaryTail,
        "binarySend": parse_binarySend,
        "keywordMessage": parse_keywordMessage,
        "keywordSend": parse_keywordSend,
        "message": parse_message,
        "cascade": parse_cascade,
        "jsStatement": parse_jsStatement,
        "method": parse_method
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "method";
      }
      
      var pos = { offset: 0, line: 1, column: 1, seenCR: false };
      var reportFailures = 0;
      var rightmostFailuresPos = { offset: 0, line: 1, column: 1, seenCR: false };
      var rightmostFailuresExpected = [];
      var cache = {};
      
      function padLeft(input, padding, length) {
        var result = input;
        
        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }
        
        return result;
      }
      
      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        var escapeChar;
        var length;
        
        if (charCode <= 0xFF) {
          escapeChar = 'x';
          length = 2;
        } else {
          escapeChar = 'u';
          length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function clone(object) {
        var result = {};
        for (var key in object) {
          result[key] = object[key];
        }
        return result;
      }
      
      function advance(pos, n) {
        var endOffset = pos.offset + n;
        
        for (var offset = pos.offset; offset < endOffset; offset++) {
          var ch = input.charAt(offset);
          if (ch === "\n") {
            if (!pos.seenCR) { pos.line++; }
            pos.column = 1;
            pos.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            pos.line++;
            pos.column = 1;
            pos.seenCR = true;
          } else {
            pos.column++;
            pos.seenCR = false;
          }
        }
        
        pos.offset += n;
      }
      
      function matchFailed(failure) {
        if (pos.offset < rightmostFailuresPos.offset) {
          return;
        }
        
        if (pos.offset > rightmostFailuresPos.offset) {
          rightmostFailuresPos = clone(pos);
          rightmostFailuresExpected = [];
        }
        
        rightmostFailuresExpected.push(failure);
      }
      
      function parse_separator() {
        var cacheKey = "separator@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        
        if (/^[ \t\x0B\f\xA0\uFEFF\n\r\u2028\u2029]/.test(input.charAt(pos.offset))) {
          result1 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("[ \\t\\x0B\\f\\xA0\\uFEFF\\n\\r\\u2028\\u2029]");
          }
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            if (/^[ \t\x0B\f\xA0\uFEFF\n\r\u2028\u2029]/.test(input.charAt(pos.offset))) {
              result1 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("[ \\t\\x0B\\f\\xA0\\uFEFF\\n\\r\\u2028\\u2029]");
              }
            }
          }
        } else {
          result0 = null;
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_comments() {
        var cacheKey = "comments@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0;
        
        pos0 = clone(pos);
        if (/^["]/.test(input.charAt(pos.offset))) {
          result1 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("[\"]");
          }
        }
        if (result1 !== null) {
          result2 = [];
          if (/^[^"]/.test(input.charAt(pos.offset))) {
            result3 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result3 = null;
            if (reportFailures === 0) {
              matchFailed("[^\"]");
            }
          }
          while (result3 !== null) {
            result2.push(result3);
            if (/^[^"]/.test(input.charAt(pos.offset))) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("[^\"]");
              }
            }
          }
          if (result2 !== null) {
            if (/^["]/.test(input.charAt(pos.offset))) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("[\"]");
              }
            }
            if (result3 !== null) {
              result1 = [result1, result2, result3];
            } else {
              result1 = null;
              pos = clone(pos0);
            }
          } else {
            result1 = null;
            pos = clone(pos0);
          }
        } else {
          result1 = null;
          pos = clone(pos0);
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            pos0 = clone(pos);
            if (/^["]/.test(input.charAt(pos.offset))) {
              result1 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("[\"]");
              }
            }
            if (result1 !== null) {
              result2 = [];
              if (/^[^"]/.test(input.charAt(pos.offset))) {
                result3 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("[^\"]");
                }
              }
              while (result3 !== null) {
                result2.push(result3);
                if (/^[^"]/.test(input.charAt(pos.offset))) {
                  result3 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result3 = null;
                  if (reportFailures === 0) {
                    matchFailed("[^\"]");
                  }
                }
              }
              if (result2 !== null) {
                if (/^["]/.test(input.charAt(pos.offset))) {
                  result3 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result3 = null;
                  if (reportFailures === 0) {
                    matchFailed("[\"]");
                  }
                }
                if (result3 !== null) {
                  result1 = [result1, result2, result3];
                } else {
                  result1 = null;
                  pos = clone(pos0);
                }
              } else {
                result1 = null;
                pos = clone(pos0);
              }
            } else {
              result1 = null;
              pos = clone(pos0);
            }
          }
        } else {
          result0 = null;
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_ws() {
        var cacheKey = "ws@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        
        result0 = [];
        result1 = parse_separator();
        if (result1 === null) {
          result1 = parse_comments();
        }
        while (result1 !== null) {
          result0.push(result1);
          result1 = parse_separator();
          if (result1 === null) {
            result1 = parse_comments();
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_identifier() {
        var cacheKey = "identifier@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[a-zA-Z]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[a-zA-Z]");
          }
        }
        if (result0 !== null) {
          result1 = [];
          if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, first, others) {return first + others.join("")})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_varIdentifier() {
        var cacheKey = "varIdentifier@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[a-z]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[a-z]");
          }
        }
        if (result0 !== null) {
          result1 = [];
          if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, first, others) {return first + others.join("")})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_keyword() {
        var cacheKey = "keyword@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_identifier();
        if (result0 !== null) {
          if (/^[:]/.test(input.charAt(pos.offset))) {
            result1 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("[:]");
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, first, last) {return first + last})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_className() {
        var cacheKey = "className@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[A-Z]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[A-Z]");
          }
        }
        if (result0 !== null) {
          result1 = [];
          if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[a-zA-Z0-9]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, first, others) {return first + others.join("")})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_string() {
        var cacheKey = "string@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1, pos2;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[']/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[']");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          if (input.substr(pos.offset, 2) === "''") {
            result2 = "''";
            advance(pos, 2);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\"''\"");
            }
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column) {return "'"})(pos2.offset, pos2.line, pos2.column);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          if (result2 === null) {
            if (/^[^']/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[^']");
              }
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            if (input.substr(pos.offset, 2) === "''") {
              result2 = "''";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"''\"");
              }
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column) {return "'"})(pos2.offset, pos2.line, pos2.column);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
            if (result2 === null) {
              if (/^[^']/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[^']");
                }
              }
            }
          }
          if (result1 !== null) {
            if (/^[']/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[']");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, val) {
                             return smalltalk.ValueNode._new()
                                    ._value_(val.join("").replace(/\"/ig, '"'))
                         })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_symbol() {
        var cacheKey = "symbol@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1, pos2;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 35) {
          result0 = "#";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"#\"");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          if (/^[a-zA-Z0-9:]/.test(input.charAt(pos.offset))) {
            result3 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result3 = null;
            if (reportFailures === 0) {
              matchFailed("[a-zA-Z0-9:]");
            }
          }
          if (result3 !== null) {
            result2 = [];
            while (result3 !== null) {
              result2.push(result3);
              if (/^[a-zA-Z0-9:]/.test(input.charAt(pos.offset))) {
                result3 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("[a-zA-Z0-9:]");
                }
              }
            }
          } else {
            result2 = null;
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column, digits) {return digits.join("")})(pos2.offset, pos2.line, pos2.column, result2);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          if (result2 === null) {
            pos2 = clone(pos);
            result2 = parse_string();
            if (result2 !== null) {
              result2 = (function(offset, line, column, node) {return node._value()})(pos2.offset, pos2.line, pos2.column, result2);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            if (/^[a-zA-Z0-9:]/.test(input.charAt(pos.offset))) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("[a-zA-Z0-9:]");
              }
            }
            if (result3 !== null) {
              result2 = [];
              while (result3 !== null) {
                result2.push(result3);
                if (/^[a-zA-Z0-9:]/.test(input.charAt(pos.offset))) {
                  result3 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result3 = null;
                  if (reportFailures === 0) {
                    matchFailed("[a-zA-Z0-9:]");
                  }
                }
              }
            } else {
              result2 = null;
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column, digits) {return digits.join("")})(pos2.offset, pos2.line, pos2.column, result2);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
            if (result2 === null) {
              pos2 = clone(pos);
              result2 = parse_string();
              if (result2 !== null) {
                result2 = (function(offset, line, column, node) {return node._value()})(pos2.offset, pos2.line, pos2.column, result2);
              }
              if (result2 === null) {
                pos = clone(pos2);
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, val) {
                              return smalltalk.ValueNode._new()
                                     ._value_(smalltalk.symbolFor(val.join("").replace(/\"/ig, '"')))
                          })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_number() {
        var cacheKey = "number@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        var pos0;
        
        pos0 = clone(pos);
        result0 = parse_hex();
        if (result0 === null) {
          result0 = parse_float();
          if (result0 === null) {
            result0 = parse_integer();
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, n) {
                             return smalltalk.ValueNode._new()
                                    ._value_(n)
                         })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_hex() {
        var cacheKey = "hex@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[\-]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[\\-]");
          }
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          if (input.substr(pos.offset, 3) === "16r") {
            result1 = "16r";
            advance(pos, 3);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"16r\"");
            }
          }
          if (result1 !== null) {
            if (/^[0-9a-fA-F]/.test(input.charAt(pos.offset))) {
              result3 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("[0-9a-fA-F]");
              }
            }
            if (result3 !== null) {
              result2 = [];
              while (result3 !== null) {
                result2.push(result3);
                if (/^[0-9a-fA-F]/.test(input.charAt(pos.offset))) {
                  result3 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result3 = null;
                  if (reportFailures === 0) {
                    matchFailed("[0-9a-fA-F]");
                  }
                }
              }
            } else {
              result2 = null;
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, neg, num) {return parseInt((neg + num.join("")), 16)})(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_float() {
        var cacheKey = "float@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[\-]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[\\-]");
          }
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          if (/^[0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              if (/^[0-9]/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[0-9]");
                }
              }
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            if (input.charCodeAt(pos.offset) === 46) {
              result2 = ".";
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\".\"");
              }
            }
            if (result2 !== null) {
              if (/^[0-9]/.test(input.charAt(pos.offset))) {
                result4 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result4 = null;
                if (reportFailures === 0) {
                  matchFailed("[0-9]");
                }
              }
              if (result4 !== null) {
                result3 = [];
                while (result4 !== null) {
                  result3.push(result4);
                  if (/^[0-9]/.test(input.charAt(pos.offset))) {
                    result4 = input.charAt(pos.offset);
                    advance(pos, 1);
                  } else {
                    result4 = null;
                    if (reportFailures === 0) {
                      matchFailed("[0-9]");
                    }
                  }
                }
              } else {
                result3 = null;
              }
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, neg, int, dec) {return parseFloat((neg + int.join("") + "." + dec.join("")), 10)})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1], result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_integer() {
        var cacheKey = "integer@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (/^[\-]/.test(input.charAt(pos.offset))) {
          result0 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[\\-]");
          }
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          if (/^[0-9]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              if (/^[0-9]/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[0-9]");
                }
              }
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, neg, digits) {return (parseInt(neg+digits.join(""), 10))})(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_literalArray() {
        var cacheKey = "literalArray@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1, pos2, pos3;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.substr(pos.offset, 2) === "#(") {
          result0 = "#(";
          advance(pos, 2);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"#(\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = [];
            pos2 = clone(pos);
            pos3 = clone(pos);
            result3 = parse_literal();
            if (result3 !== null) {
              result4 = parse_ws();
              if (result4 !== null) {
                result3 = [result3, result4];
              } else {
                result3 = null;
                pos = clone(pos3);
              }
            } else {
              result3 = null;
              pos = clone(pos3);
            }
            if (result3 !== null) {
              result3 = (function(offset, line, column, lit) {return lit._value()})(pos2.offset, pos2.line, pos2.column, result3[0]);
            }
            if (result3 === null) {
              pos = clone(pos2);
            }
            while (result3 !== null) {
              result2.push(result3);
              pos2 = clone(pos);
              pos3 = clone(pos);
              result3 = parse_literal();
              if (result3 !== null) {
                result4 = parse_ws();
                if (result4 !== null) {
                  result3 = [result3, result4];
                } else {
                  result3 = null;
                  pos = clone(pos3);
                }
              } else {
                result3 = null;
                pos = clone(pos3);
              }
              if (result3 !== null) {
                result3 = (function(offset, line, column, lit) {return lit._value()})(pos2.offset, pos2.line, pos2.column, result3[0]);
              }
              if (result3 === null) {
                pos = clone(pos2);
              }
            }
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                if (input.charCodeAt(pos.offset) === 41) {
                  result4 = ")";
                  advance(pos, 1);
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\")\"");
                  }
                }
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, lits) {
                             return smalltalk.ValueNode._new()
                                    ._value_(lits)
                         })(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_dynamicArray() {
        var cacheKey = "dynamicArray@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4, result5;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 123) {
          result0 = "{";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"{\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_expressions();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                if (input.charCodeAt(pos.offset) === 46) {
                  result4 = ".";
                  advance(pos, 1);
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\".\"");
                  }
                }
                result4 = result4 !== null ? result4 : "";
                if (result4 !== null) {
                  if (input.charCodeAt(pos.offset) === 125) {
                    result5 = "}";
                    advance(pos, 1);
                  } else {
                    result5 = null;
                    if (reportFailures === 0) {
                      matchFailed("\"}\"");
                    }
                  }
                  if (result5 !== null) {
                    result0 = [result0, result1, result2, result3, result4, result5];
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, expressions) {
                             return smalltalk.DynamicArrayNode._new()
                                    ._nodes_(expressions)
                         })(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_dynamicDictionary() {
        var cacheKey = "dynamicDictionary@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.substr(pos.offset, 2) === "#{") {
          result0 = "#{";
          advance(pos, 2);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"#{\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_expressions();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                if (input.charCodeAt(pos.offset) === 125) {
                  result4 = "}";
                  advance(pos, 1);
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\"}\"");
                  }
                }
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, expressions) {
                                return smalltalk.DynamicDictionaryNode._new()
                                       ._nodes_(expressions)
                            })(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_pseudoVariable() {
        var cacheKey = "pseudoVariable@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.substr(pos.offset, 4) === "true") {
          result0 = "true";
          advance(pos, 4);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"true\"");
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column) {return true})(pos1.offset, pos1.line, pos1.column);
        }
        if (result0 === null) {
          pos = clone(pos1);
        }
        if (result0 === null) {
          pos1 = clone(pos);
          if (input.substr(pos.offset, 5) === "false") {
            result0 = "false";
            advance(pos, 5);
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"false\"");
            }
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column) {return false})(pos1.offset, pos1.line, pos1.column);
          }
          if (result0 === null) {
            pos = clone(pos1);
          }
          if (result0 === null) {
            pos1 = clone(pos);
            if (input.substr(pos.offset, 3) === "nil") {
              result0 = "nil";
              advance(pos, 3);
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\"nil\"");
              }
            }
            if (result0 !== null) {
              result0 = (function(offset, line, column) {return nil})(pos1.offset, pos1.line, pos1.column);
            }
            if (result0 === null) {
              pos = clone(pos1);
            }
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, val) {
                               return smalltalk.ValueNode._new()
                                      ._value_(val)
                           })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_literal() {
        var cacheKey = "literal@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        
        result0 = parse_pseudoVariable();
        if (result0 === null) {
          result0 = parse_number();
          if (result0 === null) {
            result0 = parse_literalArray();
            if (result0 === null) {
              result0 = parse_dynamicDictionary();
              if (result0 === null) {
                result0 = parse_dynamicArray();
                if (result0 === null) {
                  result0 = parse_string();
                  if (result0 === null) {
                    result0 = parse_symbol();
                    if (result0 === null) {
                      result0 = parse_block();
                    }
                  }
                }
              }
            }
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_variable() {
        var cacheKey = "variable@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        var pos0;
        
        pos0 = clone(pos);
        result0 = parse_varIdentifier();
        if (result0 !== null) {
          result0 = (function(offset, line, column, identifier) {
                             return smalltalk.VariableNode._new()
                                    ._value_(identifier)
                         })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_classReference() {
        var cacheKey = "classReference@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        var pos0;
        
        pos0 = clone(pos);
        result0 = parse_className();
        if (result0 !== null) {
          result0 = (function(offset, line, column, className) {
                             return smalltalk.ClassReferenceNode._new()
                                    ._value_(className)
                         })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_reference() {
        var cacheKey = "reference@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        
        result0 = parse_variable();
        if (result0 === null) {
          result0 = parse_classReference();
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordPair() {
        var cacheKey = "keywordPair@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_keyword();
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_binarySend();
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, key, arg) {return {key:key, arg: arg}})(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_binarySelector() {
        var cacheKey = "binarySelector@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0;
        
        pos0 = clone(pos);
        if (/^[\\+*\/=><,@%~|&\-]/.test(input.charAt(pos.offset))) {
          result1 = input.charAt(pos.offset);
          advance(pos, 1);
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("[\\\\+*\\/=><,@%~|&\\-]");
          }
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            if (/^[\\+*\/=><,@%~|&\-]/.test(input.charAt(pos.offset))) {
              result1 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("[\\\\+*\\/=><,@%~|&\\-]");
              }
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, bin) {return bin.join("").replace(/\\/g, '\\\\')})(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordPattern() {
        var cacheKey = "keywordPattern@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1, pos2;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        result1 = parse_ws();
        if (result1 !== null) {
          result2 = parse_keyword();
          if (result2 !== null) {
            result3 = parse_ws();
            if (result3 !== null) {
              result4 = parse_identifier();
              if (result4 !== null) {
                result1 = [result1, result2, result3, result4];
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
          } else {
            result1 = null;
            pos = clone(pos2);
          }
        } else {
          result1 = null;
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, key, arg) {return {key:key, arg: arg}})(pos1.offset, pos1.line, pos1.column, result1[1], result1[3]);
        }
        if (result1 === null) {
          pos = clone(pos1);
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            pos1 = clone(pos);
            pos2 = clone(pos);
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_keyword();
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  result4 = parse_identifier();
                  if (result4 !== null) {
                    result1 = [result1, result2, result3, result4];
                  } else {
                    result1 = null;
                    pos = clone(pos2);
                  }
                } else {
                  result1 = null;
                  pos = clone(pos2);
                }
              } else {
                result1 = null;
                pos = clone(pos2);
              }
            } else {
              result1 = null;
              pos = clone(pos2);
            }
            if (result1 !== null) {
              result1 = (function(offset, line, column, key, arg) {return {key:key, arg: arg}})(pos1.offset, pos1.line, pos1.column, result1[1], result1[3]);
            }
            if (result1 === null) {
              pos = clone(pos1);
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, pairs) {
                             var keywords = [];
                             var params = [];
                             for(var i=0;i<pairs.length;i++){
                                 keywords.push(pairs[i].key);
                             }
                             for(var i=0;i<pairs.length;i++){
                                 params.push(pairs[i].arg);
                             }
                             return [keywords.join(""), params]
                         })(pos0.offset, pos0.line, pos0.column, result0);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryPattern() {
        var cacheKey = "binaryPattern@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_binarySelector();
          if (result1 !== null) {
            result2 = parse_ws();
            if (result2 !== null) {
              result3 = parse_identifier();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, selector, arg) {return [selector, [arg]]})(pos0.offset, pos0.line, pos0.column, result0[1], result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryPattern() {
        var cacheKey = "unaryPattern@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_identifier();
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, selector) {return [selector, []]})(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_expression() {
        var cacheKey = "expression@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        
        result0 = parse_assignment();
        if (result0 === null) {
          result0 = parse_cascade();
          if (result0 === null) {
            result0 = parse_keywordSend();
            if (result0 === null) {
              result0 = parse_binarySend();
              if (result0 === null) {
                result0 = parse_jsStatement();
              }
            }
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_expressionList() {
        var cacheKey = "expressionList@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          if (input.charCodeAt(pos.offset) === 46) {
            result1 = ".";
            advance(pos, 1);
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\".\"");
            }
          }
          if (result1 !== null) {
            result2 = parse_ws();
            if (result2 !== null) {
              result3 = parse_expression();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, expression) {return expression})(pos0.offset, pos0.line, pos0.column, result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_expressions() {
        var cacheKey = "expressions@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_expression();
        if (result0 !== null) {
          result1 = [];
          result2 = parse_expressionList();
          while (result2 !== null) {
            result1.push(result2);
            result2 = parse_expressionList();
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, first, others) {
                             var result = [first];
                             for(var i=0;i<others.length;i++) {
                                 result.push(others[i]);
                             }
                             return result;
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_assignment() {
        var cacheKey = "assignment@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_variable();
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            if (input.substr(pos.offset, 2) === ":=") {
              result2 = ":=";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\":=\"");
              }
            }
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                result4 = parse_expression();
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, variable, expression) {
                             return smalltalk.AssignmentNode._new()
                                    ._left_(variable)
                                    ._right_(expression)
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[4]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_ret() {
        var cacheKey = "ret@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 94) {
          result0 = "^";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"^\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_expression();
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                if (input.charCodeAt(pos.offset) === 46) {
                  result4 = ".";
                  advance(pos, 1);
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\".\"");
                  }
                }
                result4 = result4 !== null ? result4 : "";
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, expression) {
                             return smalltalk.ReturnNode._new()
                                    ._nodes_([expression])
                         })(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_temps() {
        var cacheKey = "temps@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1, pos2, pos3;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 124) {
          result0 = "|";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"|\"");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          pos3 = clone(pos);
          result2 = parse_ws();
          if (result2 !== null) {
            result3 = parse_identifier();
            if (result3 !== null) {
              result4 = parse_ws();
              if (result4 !== null) {
                result2 = [result2, result3, result4];
              } else {
                result2 = null;
                pos = clone(pos3);
              }
            } else {
              result2 = null;
              pos = clone(pos3);
            }
          } else {
            result2 = null;
            pos = clone(pos3);
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column, variable) {return variable})(pos2.offset, pos2.line, pos2.column, result2[1]);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            pos3 = clone(pos);
            result2 = parse_ws();
            if (result2 !== null) {
              result3 = parse_identifier();
              if (result3 !== null) {
                result4 = parse_ws();
                if (result4 !== null) {
                  result2 = [result2, result3, result4];
                } else {
                  result2 = null;
                  pos = clone(pos3);
                }
              } else {
                result2 = null;
                pos = clone(pos3);
              }
            } else {
              result2 = null;
              pos = clone(pos3);
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column, variable) {return variable})(pos2.offset, pos2.line, pos2.column, result2[1]);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
          }
          if (result1 !== null) {
            if (input.charCodeAt(pos.offset) === 124) {
              result2 = "|";
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"|\"");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, vars) {return vars})(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_blockParamList() {
        var cacheKey = "blockParamList@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1, pos2, pos3;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        pos2 = clone(pos);
        pos3 = clone(pos);
        result1 = parse_ws();
        if (result1 !== null) {
          if (input.charCodeAt(pos.offset) === 58) {
            result2 = ":";
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\":\"");
            }
          }
          if (result2 !== null) {
            result3 = parse_ws();
            if (result3 !== null) {
              result4 = parse_identifier();
              if (result4 !== null) {
                result1 = [result1, result2, result3, result4];
              } else {
                result1 = null;
                pos = clone(pos3);
              }
            } else {
              result1 = null;
              pos = clone(pos3);
            }
          } else {
            result1 = null;
            pos = clone(pos3);
          }
        } else {
          result1 = null;
          pos = clone(pos3);
        }
        if (result1 !== null) {
          result1 = (function(offset, line, column, param) {return param})(pos2.offset, pos2.line, pos2.column, result1[3]);
        }
        if (result1 === null) {
          pos = clone(pos2);
        }
        if (result1 !== null) {
          result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            pos2 = clone(pos);
            pos3 = clone(pos);
            result1 = parse_ws();
            if (result1 !== null) {
              if (input.charCodeAt(pos.offset) === 58) {
                result2 = ":";
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("\":\"");
                }
              }
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  result4 = parse_identifier();
                  if (result4 !== null) {
                    result1 = [result1, result2, result3, result4];
                  } else {
                    result1 = null;
                    pos = clone(pos3);
                  }
                } else {
                  result1 = null;
                  pos = clone(pos3);
                }
              } else {
                result1 = null;
                pos = clone(pos3);
              }
            } else {
              result1 = null;
              pos = clone(pos3);
            }
            if (result1 !== null) {
              result1 = (function(offset, line, column, param) {return param})(pos2.offset, pos2.line, pos2.column, result1[3]);
            }
            if (result1 === null) {
              pos = clone(pos2);
            }
          }
        } else {
          result0 = null;
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            if (input.charCodeAt(pos.offset) === 124) {
              result2 = "|";
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"|\"");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, params) {return params})(pos0.offset, pos0.line, pos0.column, result0[0]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_subexpression() {
        var cacheKey = "subexpression@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 40) {
          result0 = "(";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"(\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_expression();
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                if (input.charCodeAt(pos.offset) === 41) {
                  result4 = ")";
                  advance(pos, 1);
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\")\"");
                  }
                }
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, expression) {return expression})(pos0.offset, pos0.line, pos0.column, result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_statements() {
        var cacheKey = "statements@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4, result5, result6;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ret();
        if (result0 !== null) {
          result1 = [];
          if (/^[.]/.test(input.charAt(pos.offset))) {
            result2 = input.charAt(pos.offset);
            advance(pos, 1);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[.]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[.]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[.]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, ret) {return [ret]})(pos0.offset, pos0.line, pos0.column, result0[0]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        if (result0 === null) {
          pos0 = clone(pos);
          pos1 = clone(pos);
          result0 = parse_expressions();
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              if (/^[.]/.test(input.charAt(pos.offset))) {
                result3 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("[.]");
                }
              }
              if (result3 !== null) {
                result2 = [];
                while (result3 !== null) {
                  result2.push(result3);
                  if (/^[.]/.test(input.charAt(pos.offset))) {
                    result3 = input.charAt(pos.offset);
                    advance(pos, 1);
                  } else {
                    result3 = null;
                    if (reportFailures === 0) {
                      matchFailed("[.]");
                    }
                  }
                }
              } else {
                result2 = null;
              }
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  result4 = parse_ret();
                  if (result4 !== null) {
                    result5 = [];
                    if (/^[.]/.test(input.charAt(pos.offset))) {
                      result6 = input.charAt(pos.offset);
                      advance(pos, 1);
                    } else {
                      result6 = null;
                      if (reportFailures === 0) {
                        matchFailed("[.]");
                      }
                    }
                    while (result6 !== null) {
                      result5.push(result6);
                      if (/^[.]/.test(input.charAt(pos.offset))) {
                        result6 = input.charAt(pos.offset);
                        advance(pos, 1);
                      } else {
                        result6 = null;
                        if (reportFailures === 0) {
                          matchFailed("[.]");
                        }
                      }
                    }
                    if (result5 !== null) {
                      result0 = [result0, result1, result2, result3, result4, result5];
                    } else {
                      result0 = null;
                      pos = clone(pos1);
                    }
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
          if (result0 !== null) {
            result0 = (function(offset, line, column, exps, ret) {
                                 var expressions = exps;
                                 expressions.push(ret);
                                 return expressions
                             })(pos0.offset, pos0.line, pos0.column, result0[0], result0[4]);
          }
          if (result0 === null) {
            pos = clone(pos0);
          }
          if (result0 === null) {
            pos0 = clone(pos);
            pos1 = clone(pos);
            result0 = parse_expressions();
            result0 = result0 !== null ? result0 : "";
            if (result0 !== null) {
              result1 = [];
              if (/^[.]/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[.]");
                }
              }
              while (result2 !== null) {
                result1.push(result2);
                if (/^[.]/.test(input.charAt(pos.offset))) {
                  result2 = input.charAt(pos.offset);
                  advance(pos, 1);
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("[.]");
                  }
                }
              }
              if (result1 !== null) {
                result0 = [result0, result1];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
            if (result0 !== null) {
              result0 = (function(offset, line, column, expressions) {
                                   return expressions || []
                               })(pos0.offset, pos0.line, pos0.column, result0[0]);
            }
            if (result0 === null) {
              pos = clone(pos0);
            }
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_sequence() {
        var cacheKey = "sequence@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_temps();
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_statements();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, temps, statements) {
                             return smalltalk.SequenceNode._new()
                                    ._temps_(temps || [])
                                    ._nodes_(statements || [])
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_block() {
        var cacheKey = "block@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4, result5, result6;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 91) {
          result0 = "[";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"[\"");
          }
        }
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_blockParamList();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                result4 = parse_sequence();
                result4 = result4 !== null ? result4 : "";
                if (result4 !== null) {
                  result5 = parse_ws();
                  if (result5 !== null) {
                    if (input.charCodeAt(pos.offset) === 93) {
                      result6 = "]";
                      advance(pos, 1);
                    } else {
                      result6 = null;
                      if (reportFailures === 0) {
                        matchFailed("\"]\"");
                      }
                    }
                    if (result6 !== null) {
                      result0 = [result0, result1, result2, result3, result4, result5, result6];
                    } else {
                      result0 = null;
                      pos = clone(pos1);
                    }
                  } else {
                    result0 = null;
                    pos = clone(pos1);
                  }
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, params, sequence) {
                             return smalltalk.BlockNode._new()
                                    ._parameters_(params || [])
                                    ._nodes_([sequence._asBlockSequenceNode()])
                         })(pos0.offset, pos0.line, pos0.column, result0[2], result0[4]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_operand() {
        var cacheKey = "operand@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        
        result0 = parse_literal();
        if (result0 === null) {
          result0 = parse_reference();
          if (result0 === null) {
            result0 = parse_subexpression();
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryMessage() {
        var cacheKey = "unaryMessage@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1, pos2;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_identifier();
          if (result1 !== null) {
            pos2 = clone(pos);
            reportFailures++;
            if (/^[:]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[:]");
              }
            }
            reportFailures--;
            if (result2 === null) {
              result2 = "";
            } else {
              result2 = null;
              pos = clone(pos2);
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, selector) {
                             return smalltalk.SendNode._new()
                                    ._selector_(selector)
                         })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryTail() {
        var cacheKey = "unaryTail@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_unaryMessage();
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_unaryTail();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = parse_ws();
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, message, tail) {
                             if(tail) {
                                 return tail._valueForReceiver_(message);
                             }
                             else {
                                 return message;
                             }
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_unarySend() {
        var cacheKey = "unarySend@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_operand();
        if (result0 !== null) {
          result1 = parse_ws();
          if (result1 !== null) {
            result2 = parse_unaryTail();
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, receiver, tail) {
                             if(tail) {
                                 return tail._valueForReceiver_(receiver);
                             }
                             else {
                                 return receiver;
                             }
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryMessage() {
        var cacheKey = "binaryMessage@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_binarySelector();
          if (result1 !== null) {
            result2 = parse_ws();
            if (result2 !== null) {
              result3 = parse_unarySend();
              if (result3 === null) {
                result3 = parse_operand();
              }
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, selector, arg) {
                             return smalltalk.SendNode._new()
                                    ._selector_(selector)
                                    ._arguments_([arg])
                         })(pos0.offset, pos0.line, pos0.column, result0[1], result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryTail() {
        var cacheKey = "binaryTail@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_binaryMessage();
        if (result0 !== null) {
          result1 = parse_binaryTail();
          result1 = result1 !== null ? result1 : "";
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, message, tail) {
                             if(tail) {
                                 return tail._valueForReceiver_(message);
                              }
                             else {
                                 return message;
                             }
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_binarySend() {
        var cacheKey = "binarySend@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_unarySend();
        if (result0 !== null) {
          result1 = parse_binaryTail();
          result1 = result1 !== null ? result1 : "";
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, receiver, tail) {
                             if(tail) {
                                 return tail._valueForReceiver_(receiver);
                             }
                             else {
                                 return receiver;
                             }
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordMessage() {
        var cacheKey = "keywordMessage@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3;
        var pos0, pos1, pos2, pos3;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          pos2 = clone(pos);
          pos3 = clone(pos);
          result2 = parse_keywordPair();
          if (result2 !== null) {
            result3 = parse_ws();
            if (result3 !== null) {
              result2 = [result2, result3];
            } else {
              result2 = null;
              pos = clone(pos3);
            }
          } else {
            result2 = null;
            pos = clone(pos3);
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column, pair) {return pair})(pos2.offset, pos2.line, pos2.column, result2[0]);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          if (result2 !== null) {
            result1 = [];
            while (result2 !== null) {
              result1.push(result2);
              pos2 = clone(pos);
              pos3 = clone(pos);
              result2 = parse_keywordPair();
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  result2 = [result2, result3];
                } else {
                  result2 = null;
                  pos = clone(pos3);
                }
              } else {
                result2 = null;
                pos = clone(pos3);
              }
              if (result2 !== null) {
                result2 = (function(offset, line, column, pair) {return pair})(pos2.offset, pos2.line, pos2.column, result2[0]);
              }
              if (result2 === null) {
                pos = clone(pos2);
              }
            }
          } else {
            result1 = null;
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, pairs) {
                             var selector = [];
                             var args = [];
                              for(var i=0;i<pairs.length;i++) {
                                  selector.push(pairs[i].key);
                                  args.push(pairs[i].arg);
                              }
                              return smalltalk.SendNode._new()
                                     ._selector_(selector.join(""))
                                     ._arguments_(args)
                         })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordSend() {
        var cacheKey = "keywordSend@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_binarySend();
        if (result0 !== null) {
          result1 = parse_keywordMessage();
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, receiver, tail) {
                             return tail._valueForReceiver_(receiver);
                         })(pos0.offset, pos0.line, pos0.column, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_message() {
        var cacheKey = "message@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0;
        
        result0 = parse_binaryMessage();
        if (result0 === null) {
          result0 = parse_unaryMessage();
          if (result0 === null) {
            result0 = parse_keywordMessage();
          }
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_cascade() {
        var cacheKey = "cascade@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4, result5, result6, result7;
        var pos0, pos1, pos2, pos3;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_keywordSend();
          if (result1 === null) {
            result1 = parse_binarySend();
          }
          if (result1 !== null) {
            pos2 = clone(pos);
            pos3 = clone(pos);
            result3 = parse_ws();
            if (result3 !== null) {
              if (input.charCodeAt(pos.offset) === 59) {
                result4 = ";";
                advance(pos, 1);
              } else {
                result4 = null;
                if (reportFailures === 0) {
                  matchFailed("\";\"");
                }
              }
              if (result4 !== null) {
                result5 = parse_ws();
                if (result5 !== null) {
                  result6 = parse_message();
                  if (result6 !== null) {
                    result7 = parse_ws();
                    if (result7 !== null) {
                      result3 = [result3, result4, result5, result6, result7];
                    } else {
                      result3 = null;
                      pos = clone(pos3);
                    }
                  } else {
                    result3 = null;
                    pos = clone(pos3);
                  }
                } else {
                  result3 = null;
                  pos = clone(pos3);
                }
              } else {
                result3 = null;
                pos = clone(pos3);
              }
            } else {
              result3 = null;
              pos = clone(pos3);
            }
            if (result3 !== null) {
              result3 = (function(offset, line, column, mess) {return mess})(pos2.offset, pos2.line, pos2.column, result3[3]);
            }
            if (result3 === null) {
              pos = clone(pos2);
            }
            if (result3 !== null) {
              result2 = [];
              while (result3 !== null) {
                result2.push(result3);
                pos2 = clone(pos);
                pos3 = clone(pos);
                result3 = parse_ws();
                if (result3 !== null) {
                  if (input.charCodeAt(pos.offset) === 59) {
                    result4 = ";";
                    advance(pos, 1);
                  } else {
                    result4 = null;
                    if (reportFailures === 0) {
                      matchFailed("\";\"");
                    }
                  }
                  if (result4 !== null) {
                    result5 = parse_ws();
                    if (result5 !== null) {
                      result6 = parse_message();
                      if (result6 !== null) {
                        result7 = parse_ws();
                        if (result7 !== null) {
                          result3 = [result3, result4, result5, result6, result7];
                        } else {
                          result3 = null;
                          pos = clone(pos3);
                        }
                      } else {
                        result3 = null;
                        pos = clone(pos3);
                      }
                    } else {
                      result3 = null;
                      pos = clone(pos3);
                    }
                  } else {
                    result3 = null;
                    pos = clone(pos3);
                  }
                } else {
                  result3 = null;
                  pos = clone(pos3);
                }
                if (result3 !== null) {
                  result3 = (function(offset, line, column, mess) {return mess})(pos2.offset, pos2.line, pos2.column, result3[3]);
                }
                if (result3 === null) {
                  pos = clone(pos2);
                }
              }
            } else {
              result2 = null;
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, send, messages) {
                             var cascade = [];
                             cascade.push(send);
                             for(var i=0;i<messages.length;i++) {
                                 cascade.push(messages[i]);
                             }
                             return smalltalk.CascadeNode._new()
                                    ._receiver_(send._receiver())
                                    ._nodes_(cascade)
                         })(pos0.offset, pos0.line, pos0.column, result0[1], result0[2]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_jsStatement() {
        var cacheKey = "jsStatement@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2;
        var pos0, pos1, pos2;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        if (input.charCodeAt(pos.offset) === 60) {
          result0 = "<";
          advance(pos, 1);
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"<\"");
          }
        }
        if (result0 !== null) {
          result1 = [];
          pos2 = clone(pos);
          if (input.substr(pos.offset, 2) === ">>") {
            result2 = ">>";
            advance(pos, 2);
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("\">>\"");
            }
          }
          if (result2 !== null) {
            result2 = (function(offset, line, column) {return ">"})(pos2.offset, pos2.line, pos2.column);
          }
          if (result2 === null) {
            pos = clone(pos2);
          }
          if (result2 === null) {
            if (/^[^>]/.test(input.charAt(pos.offset))) {
              result2 = input.charAt(pos.offset);
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[^>]");
              }
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            pos2 = clone(pos);
            if (input.substr(pos.offset, 2) === ">>") {
              result2 = ">>";
              advance(pos, 2);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\">>\"");
              }
            }
            if (result2 !== null) {
              result2 = (function(offset, line, column) {return ">"})(pos2.offset, pos2.line, pos2.column);
            }
            if (result2 === null) {
              pos = clone(pos2);
            }
            if (result2 === null) {
              if (/^[^>]/.test(input.charAt(pos.offset))) {
                result2 = input.charAt(pos.offset);
                advance(pos, 1);
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[^>]");
                }
              }
            }
          }
          if (result1 !== null) {
            if (input.charCodeAt(pos.offset) === 62) {
              result2 = ">";
              advance(pos, 1);
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\">\"");
              }
            }
            if (result2 !== null) {
              result0 = [result0, result1, result2];
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, val) {
                             return smalltalk.JSStatementNode._new()
                                    ._source_(val.join(""))
                         })(pos0.offset, pos0.line, pos0.column, result0[1]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      function parse_method() {
        var cacheKey = "method@" + pos.offset;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = clone(cachedResult.nextPos);
          return cachedResult.result;
        }
        
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = clone(pos);
        pos1 = clone(pos);
        result0 = parse_ws();
        if (result0 !== null) {
          result1 = parse_keywordPattern();
          if (result1 === null) {
            result1 = parse_binaryPattern();
            if (result1 === null) {
              result1 = parse_unaryPattern();
            }
          }
          if (result1 !== null) {
            result2 = parse_ws();
            if (result2 !== null) {
              result3 = parse_sequence();
              result3 = result3 !== null ? result3 : "";
              if (result3 !== null) {
                result4 = parse_ws();
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = clone(pos1);
                }
              } else {
                result0 = null;
                pos = clone(pos1);
              }
            } else {
              result0 = null;
              pos = clone(pos1);
            }
          } else {
            result0 = null;
            pos = clone(pos1);
          }
        } else {
          result0 = null;
          pos = clone(pos1);
        }
        if (result0 !== null) {
          result0 = (function(offset, line, column, pattern, sequence) {
                              return smalltalk.MethodNode._new()
                                     ._selector_(pattern[0])
                                     ._arguments_(pattern[1])
                                     ._nodes_([sequence])
                         })(pos0.offset, pos0.line, pos0.column, result0[1], result0[3]);
        }
        if (result0 === null) {
          pos = clone(pos0);
        }
        
        cache[cacheKey] = {
          nextPos: clone(pos),
          result:  result0
        };
        return result0;
      }
      
      
      function cleanupExpected(expected) {
        expected.sort();
        
        var lastExpected = null;
        var cleanExpected = [];
        for (var i = 0; i < expected.length; i++) {
          if (expected[i] !== lastExpected) {
            cleanExpected.push(expected[i]);
            lastExpected = expected[i];
          }
        }
        return cleanExpected;
      }
      
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos.offset === input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos.offset < input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos.offset === 0|
       *   - |rightmostFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos.offset !== input.length) {
        var offset = Math.max(pos.offset, rightmostFailuresPos.offset);
        var found = offset < input.length ? input.charAt(offset) : null;
        var errorPosition = pos.offset > rightmostFailuresPos.offset ? pos : rightmostFailuresPos;
        
        throw new this.SyntaxError(
          cleanupExpected(rightmostFailuresExpected),
          found,
          offset,
          errorPosition.line,
          errorPosition.column
        );
      }
      
      return result;
    },
    
    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };
  
  /* Thrown when a parser encounters a syntax error. */
  
  result.SyntaxError = function(expected, found, offset, line, column) {
    function buildMessage(expected, found) {
      var expectedHumanized, foundHumanized;
      
      switch (expected.length) {
        case 0:
          expectedHumanized = "end of input";
          break;
        case 1:
          expectedHumanized = expected[0];
          break;
        default:
          expectedHumanized = expected.slice(0, expected.length - 1).join(", ")
            + " or "
            + expected[expected.length - 1];
      }
      
      foundHumanized = found ? quote(found) : "end of input";
      
      return "Expected " + expectedHumanized + " but " + foundHumanized + " found.";
    }
    
    this.name = "SyntaxError";
    this.expected = expected;
    this.found = found;
    this.message = buildMessage(expected, found);
    this.offset = offset;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();
smalltalk.addPackage('REPL', {});
smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'REPL');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(process,"_stdin",[]),"_destroy",[]);
return self},
args: [],
source: "close\x0a\x09process stdin destroy",
messageSends: ["destroy", "stdin"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_createInterface",
smalltalk.method({
selector: "createInterface",
category: 'actions',
fn: function (){
var self=this;
self["@interface"]=smalltalk.send(self["@readline"],"_createInterface_stdout_",[smalltalk.send(process,"_stdin",[]),smalltalk.send(process,"_stdout",[])]);
smalltalk.send(self["@interface"],"_on_do_",["line",(function(buffer){
return smalltalk.send(self,"_eval_",[buffer]);
})]);
smalltalk.send(self["@interface"],"_on_do_",["close",(function(){
return smalltalk.send(self,"_close",[]);
})]);
smalltalk.send(self,"_setPrompt",[]);
smalltalk.send(self["@interface"],"_prompt",[]);
return self},
args: [],
source: "createInterface\x0a\x09\x22No completion for now\x22\x0a\x09interface := readline createInterface: process stdin stdout: process stdout.\x0a\x09interface on: 'line' do: [:buffer  | self eval: buffer].\x0a\x09interface on: 'close' do: [self close].\x0a\x09self setPrompt.\x0a\x09interface prompt",
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
category: 'actions',
fn: function (buffer){
var self=this;
var $1,$2;
var result;
$1=smalltalk.send(buffer,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(self,"_try_catch_",[(function(){
result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler),"_new",[]),"_evaluateExpression_",[buffer]);
result;
return smalltalk.send((smalltalk.Transcript || Transcript),"_show_",[result]);
}),(function(e){
$2=smalltalk.send(e,"_isSmalltalkError",[]);
if(smalltalk.assert($2)){
return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler),"_new",[]),"_handleError_",[e]);
} else {
return smalltalk.send(smalltalk.send(process,"_stdout",[]),"_write_",[smalltalk.send(e,"_jsStack",[])]);
};
})]);
};
smalltalk.send(self["@interface"],"_prompt",[]);
return self},
args: ["buffer"],
source: "eval: buffer\x0a\x09| result |\x0a\x09buffer isEmpty ifFalse: [\x0a\x09\x09self try: [\x0a\x09\x09\x09result := Compiler new evaluateExpression: buffer.\x0a\x09\x09\x09Transcript show: result]\x0a\x09\x09catch: [:e |\x0a\x09\x09\x09e isSmalltalkError\x0a\x09\x09\x09    ifTrue: [ErrorHandler new handleError: e]\x0a\x09\x09\x09    ifFalse: [process stdout write: e jsStack]]].\x0a\x09interface prompt",
messageSends: ["ifFalse:", "try:catch:", "evaluateExpression:", "new", "show:", "ifTrue:ifFalse:", "handleError:", "write:", "jsStack", "stdout", "isSmalltalkError", "isEmpty", "prompt"],
referencedClasses: ["Compiler", "Transcript", "ErrorHandler"]
}),
smalltalk.Repl);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@readline"]=smalltalk.send(require,"_value_",["readline"]);
self["@util"]=smalltalk.send(require,"_value_",["util"]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09readline := require value: 'readline'.\x0a\x09util := require value: 'util'",
messageSends: ["initialize", "value:"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_prompt",
smalltalk.method({
selector: "prompt",
category: 'accessing',
fn: function (){
var self=this;
return "amber >> ";
},
args: [],
source: "prompt\x0a\x09^'amber >> '",
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
"_setPrompt",
smalltalk.method({
selector: "setPrompt",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self["@interface"],"_setPrompt_",[smalltalk.send(self,"_prompt",[])]);
return self},
args: [],
source: "setPrompt\x0a\x09interface setPrompt: self prompt",
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_createInterface",[]);
return self},
args: [],
source: "main\x0a\x09self new createInterface",
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


smalltalk.init(smalltalk.Object); //metaclasses are in through Class
smalltalk.classes()._do_(function(each) {
	each._initialize()});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}
smalltalk.Repl._main()