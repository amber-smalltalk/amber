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

/* Make that console is defined */

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

function SmalltalkObject(){}
function SmalltalkBehavior(){};
function SmalltalkClass(){}
function SmalltalkPackage(){};
function SmalltalkMetaclass(){
	this.meta = true;
};
function SmalltalkMethod(){};
function SmalltalkNil(){};

function SmalltalkSymbol(string){
	this.value = string;
};

function Smalltalk(){

	var st = this;

	/* This is the current call context object. While it is publicly available,
	   Use smalltalk.getThisContext() instead which will answer a safe copy of 
	   the current context */

	st.thisContext = undefined;

	/* List of all reserved words in JavaScript. They may not be used as variables
	   in Smalltalk. */

	st.reservedWords = ['break', 'case', 'catch', 'char', 'class', 'continue', 'debugger', 
		'default', 'delete', 'do', 'else', 'finally', 'for', 'function', 
		'if', 'in', 'instanceof', 'new', 'private', 'protected', 
		'public', 'return', 'static', 'switch', 'this', 'throw',
		'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'];

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
		var that      = new SmalltalkPackage();
		that.pkgName  = spec.pkgName;
		that.properties = spec.properties || {};
		return that;
	};

	/* Smalltalk class creation. A class is an instance of an automatically 
	   created metaclass object. Newly created classes (not their metaclass) 
	   should be added to the smalltalk object, see smalltalk.addClass().
	   Superclass linking is *not* handled here, see smalltalk.init()  */

	function klass(spec) {
		var spec = spec || {};
		var that;
		if(spec.meta) {
			that = new SmalltalkMetaclass();
		} else {
			that = new (klass({meta: true})).fn;
			that.klass.instanceClass = that;
			that.className = spec.className;
			that.klass.className = that.className + ' class';
		}

		that.fn = spec.fn || function(){};
		that.superclass = spec.superclass;
		that.iVarNames = spec.iVarNames || [];
        that.toString = function() {return 'Smalltalk ' + that.className};
		if(that.superclass) {
			that.klass.superclass = that.superclass.klass;
		}
		that.pkg = spec.pkg;
		that.fn.prototype.methods = {};
		that.fn.prototype.inheritedMethods = {};
		that.fn.prototype.klass = that;

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
		return that
	};

	/* Initialize a class in its class hierarchy. Handle both class and
	   metaclasses. */
	   
	st.init = function(klass) {
		st.initSubTree(klass);
		if(klass.klass && !klass.meta) {
			st.initSubTree(klass.klass);
		}
	};

	if ('function' === typeof Object.keys) {
		st.initSubTree = function(klass) {
			var subclasses = st.subclasses(klass);
			var methods, proto = klass.fn.prototype;

			if(klass.superclass && klass.superclass !== nil) {
				methods = st.methods(klass.superclass);

				//Methods linking
				for(var keys=Object.keys(methods),i=0,l=keys.length; i<l; ++i) {
					var k = keys[i]
					if(!proto.methods[k]) {
						proto.inheritedMethods[k] = methods[k];
						proto[methods[k].jsSelector] = methods[k].fn;
					}
				}
			}

			for(var i=0;i<subclasses.length;i++) {
				st.initSubTree(subclasses[i]);
			}
		};
	} else {
		st.initSubTree = function(klass) {
			var subclasses = st.subclasses(klass);
			var methods, proto = klass.fn.prototype;

			if(klass.superclass && klass.superclass !== nil) {
				methods = st.methods(klass.superclass);

				//Methods linking
				for(var i in methods) {
					if(!proto.methods[i]) {
						proto.inheritedMethods[i] = methods[i];
						proto[methods[i].jsSelector] = methods[i].fn;
					}
				}
			}

			for(var i=0;i<subclasses.length;i++) {
				st.initSubTree(subclasses[i]);
			}
		};
	}

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

	if ('function' === typeof Object.keys) {
		st.classes = function() {
			var classes = [], names = Object.keys(st), l = names.length;
			for (var i=0; i<l; ++i) {
				var name = names[i];
				if (name.search(/^[A-Z]/) !== -1) {
					classes.push(st[name]);
				}
			}
			return classes;
		};
	} else {
		st.classes = function() {
			var classes = [];
			for(var i in st) {
				if(i.search(/^[A-Z]/g) != -1) {
					classes.push(st[i]);
				}
			}
			return classes
		};
	}

	/* Answer all methods (included inherited ones) of klass. */

	if ('function' === typeof Object.keys) {
		st.methods = function(klass) {
			var methods = {};
			var copyFrom = klass.fn.prototype.methods;
			for(var i=0, k=Object.keys(copyFrom), l=k.length; i<l; ++i) {
				methods[k[i]] = copyFrom[k[i]];
			}
			copyFrom = klass.fn.prototype.inheritedMethods;
			for(var i=0, k=Object.keys(copyFrom), l=k.length; i<l; ++i) {
				methods[k[i]] = copyFrom[k[i]];
			}
			return methods;
		};
	} else {
		st.methods = function(klass) {
			var methods = {};
			for(var i in klass.fn.prototype.methods) {
				methods[i] = klass.fn.prototype.methods[i]
			}
			for(var i in klass.fn.prototype.inheritedMethods) {
				methods[i] = klass.fn.prototype.inheritedMethods[i]
			}
			return methods;
		};
	}

	/* Answer the direct subclasses of klass. */

	st.subclasses = function(klass) {
		var subclasses = [];
		var classes = st.classes();
		for(var i=0, l=classes.length; i<l; ++i) {
			var c = classes[i]
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
	   Package is lazily created if it does not exist with given name.*/

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
	};

	/* Add a method to a class */

	st.addMethod = function(jsSelector, method, klass) {
		klass.fn.prototype[jsSelector] = method.fn;
		klass.fn.prototype.methods[method.selector] = method;
		method.methodClass = klass;
		method.jsSelector = jsSelector;
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
		var call, imp;
		if(receiver == null) {
			receiver = nil;
		}
		imp = klass ? klass.fn.prototype[selector] : receiver.klass && receiver[selector];
		if(imp) {
			var context = pushContext(receiver, selector, args);
			call = imp.apply(receiver, args);
			popContext(context);
			return call;
		} else {
			return messageNotUnderstood(receiver, selector, args);
		}
	};

	/* Handles Smalltalk errors. Triggers the registered ErrorHandler 
	   (See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
		st.thisContext = undefined;
		smalltalk.ErrorHandler._current()._handleError_(error);
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
		}/* else { // this is the default
			return undefined;
		}*/
	};

	function pushContext(receiver, selector, temps) {
		var c = st.oldContext, tc = st.thisContext;
		if (!c) {
			return st.thisContext = new SmalltalkMethodContext(receiver, selector, temps, tc);
		}
		st.oldContext = null;
		c.homeContext = tc;
		c.receiver = receiver;
		c.selector = selector;
		c.temps = temps || {};
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

	/* Kept for backward compatibility */
	st.setDeploymentMode = function() {};
	st.setDevelopmentMode = function() {};
};

function SmalltalkMethodContext(receiver, selector, temps, home) {
	this.receiver = receiver;
	this.selector = selector;
	this.temps = temps || {};
	this.homeContext = home;
};

SmalltalkMethodContext.prototype.copy = function() {
	var home = this.homeContext;
	if(home) {home = home.copy()}
	return new SmalltalkMethodContext(
			this.receiver, 
			this.selector, 
			this.temps, 
			home
			);
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
