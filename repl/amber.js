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

function SmalltalkObject(){};
function SmalltalkBehavior(){};
function SmalltalkClass(){};
function SmalltalkPackage(){};
function SmalltalkMetaclass(){
	this.meta = true;
};
function SmalltalkMethod(){};
function SmalltalkNil(){};

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

	/* We hold all Packages in a separate Object */

	st.packages = {};

	/* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

	function pkg(spec) {
		var that      = new SmalltalkPackage();
		that.pkgName  = spec.pkgName;
		that.properties = spec.properties || [];
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
		var subclasses = st.subclasses(klass);
		var methods;

		if(klass.superclass && klass.superclass !== nil) {
			methods = st.methods(klass.superclass);

			//Methods linking
			for(var i in methods) {
				if(!klass.fn.prototype.methods[i]) {
					klass.fn.prototype.inheritedMethods[i] = methods[i];
					klass.fn.prototype[methods[i].jsSelector] = methods[i].fn;
				}
			}
		}

		for(var i=0;i<subclasses.length;i++) {
			st.init(subclasses[i]);
		}
		if(klass.klass && !klass.meta) {
			st.init(klass.klass);
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
		var classes = [];
		for(var i in st) {
			if(i.search(/^[A-Z]/g) != -1) {
				classes.push(st[i]);
			}
		}
		return classes
	};

	/* Answer all methods (included inherited ones) of klass. */

	st.methods = function(klass) {
		var methods = {};
		for(var i in klass.fn.prototype.methods) {
			methods[i] = klass.fn.prototype.methods[i]
		}
		for(var i in klass.fn.prototype.inheritedMethods) {
			methods[i] = klass.fn.prototype.inheritedMethods[i]
		}
		return methods;
	}

	/* Answer the direct subclasses of klass. */

	st.subclasses = function(klass) {
		var subclasses = [];
		var classes = st.classes();
		for(var i in classes) {
			if(classes[i].fn) {
				//Metaclasses
				if(classes[i].klass && classes[i].klass.superclass === klass) {
					subclasses.push(classes[i].klass);
				}
				//Classes
				if(classes[i].superclass === klass) {
					subclasses.push(classes[i]);
				}
			}
		}
		return subclasses;
	};

	/* Create a new class wrapping a JavaScript constructor, and add it to the 
	   global smalltalk object. Package is lazily created if it does not exist with given name. */

	st.mapClassName = function(className, pkgName, fn, superclass) {
		var pkg = st.addPackage(pkgName, null);
		st[className] = klass({
			className:  className, 
			superclass: superclass,
			pkg:        pkg, 
			fn:         fn
		});
	};

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
		var pkg = st.addPackage(pkgName, null);
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

	/* Handles Smalltalk message send. Automatically converts undefined to the nil object.
	   If the receiver does not understand the selector, call its #doesNotUnderstand: method */

	sendWithoutContext = function(receiver, selector, args, klass) {
		if(receiver === undefined || receiver === null) {
			receiver = nil;
		}
		if(!klass && receiver.klass && receiver[selector]) {
			return receiver[selector].apply(receiver, args);
		} else if(klass && klass.fn.prototype[selector]) {
			return klass.fn.prototype[selector].apply(receiver, args)
		}
		return messageNotUnderstood(receiver, selector, args);
	};


	/* Handles unhandled errors during message sends */

	sendWithContext = function(receiver, selector, args, klass) {
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

	/* Same as sendWithoutContext but creates a methodContext. */

	withContextSend = function(receiver, selector, args, klass) {
		var call, context;
		if(receiver === undefined || receiver === null) {
			receiver = nil;
		}
		if(!klass && receiver.klass && receiver[selector]) {
			context = pushContext(receiver, selector, args);
			call = receiver[selector].apply(receiver, args);
			popContext(context);
			return call;
		} else if(klass && klass.fn.prototype[selector]) {
			context = pushContext(receiver, selector, args);
			call = klass.fn.prototype[selector].apply(receiver, args);
			popContext(context);
			return call;
		}
		return messageNotUnderstood(receiver, selector, args);
	};

	/* Handles Smalltalk errors. Triggers the registered ErrorHandler 
	   (See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
		st.thisContext = undefined;
		smalltalk.ErrorHandler._current()._handleError_(error);
	}

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

	   Converts keyword-based selectors by using the first
	   keyword only, but keeping all message arguments.

	   Example:
	   "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */

	function callJavaScriptMethod(receiver, selector, args) {
		var jsSelector = selector._asJavaScriptSelector();
		var jsProperty = receiver[jsSelector];
		if(typeof jsProperty === "function") {
			return jsProperty.apply(receiver, args);
		} else if(jsProperty !== undefined) {
			if(args[0]) {
				receiver[jsSelector] = args[0];
				return nil;
			} else {
				return jsProperty
			}
		}

		return st.send(st.JSObjectProxy._on_(receiver), selector, args);
	};


	/* Reuse old contexts stored in oldContexts */

	st.oldContexts = [];


	/* Handle thisContext pseudo variable */

	st.getThisContext = function() {
		if(st.thisContext) {
			return st.thisContext.copy();
		} else {
			return undefined;
		}
	}

	pushContext = function(receiver, selector, temps) {
		if(st.thisContext) {
			return st.thisContext = st.thisContext.newContext(receiver, selector, temps);
		} else {
			return st.thisContext = new SmalltalkMethodContext(receiver, selector, temps);
		}
	};

	popContext = function(context) {
		if(context) {
			context.removeYourself();
		}
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

	/* Toggle deployment mode (no context will be handled during message send */
	st.setDeploymentMode = function() {
		st.send = sendWithoutContext;
	};

	st.setDevelopmentMode = function() {
		st.send = sendWithContext;
	}

	/* Set development mode by default */
	st.setDevelopmentMode();
}

function SmalltalkMethodContext(receiver, selector, temps, home) {
	var that = this;
	that.receiver = receiver;
	that.selector = selector;
	that.temps = temps || {};
	that.homeContext = home;

	that.copy = function() {
		var home = that.homeContext;
		if(home) {home = home.copy()}
		return new SmalltalkMethodContext(
				that.receiver, 
				that.selector, 
				that.temps, 
				home
				);
	}

	that.newContext = function(receiver, selector, temps) {
		var c = smalltalk.oldContexts.pop();
		if(c) {
			c.homeContext = that;
			c.receiver = receiver;
			c.selector = selector;
			c.temps = temps || {};
		} else {
			c = new SmalltalkMethodContext(receiver, selector, temps, that);
		}
		return c;
	}

	that.removeYourself = function() {
		smalltalk.thisContext = that.homeContext;
		that.homeContext = undefined;
		smalltalk.oldContexts.push(that);
	}
}

/* Global Smalltalk objects. */

var nil = new SmalltalkNil();
var smalltalk = new Smalltalk();

if(this.jQuery) {
	this.jQuery.allowJavaScriptCalls = true;
}

/****************************************************************************************/


/* Base classes mapping. If you edit this part, do not forget to set the superclass of the
   object metaclass to Class after the definition of Object */

smalltalk.mapClassName("Object", "Kernel", SmalltalkObject);
smalltalk.mapClassName("Smalltalk", "Kernel", Smalltalk, smalltalk.Object);
smalltalk.mapClassName("Package", "Kernel", SmalltalkPackage, smalltalk.Object);
smalltalk.mapClassName("Behavior", "Kernel", SmalltalkBehavior, smalltalk.Object);
smalltalk.mapClassName("Class", "Kernel", SmalltalkClass, smalltalk.Behavior);
smalltalk.mapClassName("Metaclass", "Kernel", SmalltalkMetaclass, smalltalk.Behavior);
smalltalk.mapClassName("CompiledMethod", "Kernel", SmalltalkMethod, smalltalk.Object);

smalltalk.Object.klass.superclass = smalltalk.Class;

smalltalk.mapClassName("Number", "Kernel", Number, smalltalk.Object);
smalltalk.mapClassName("BlockClosure", "Kernel", Function, smalltalk.Object);
smalltalk.mapClassName("Boolean", "Kernel", Boolean, smalltalk.Object);
smalltalk.mapClassName("Date", "Kernel", Date, smalltalk.Object);
smalltalk.mapClassName("UndefinedObject", "Kernel", SmalltalkNil, smalltalk.Object);

smalltalk.mapClassName("Collection", "Kernel", null, smalltalk.Object);
smalltalk.mapClassName("SequenceableCollection", "Kernel", null, smalltalk.Collection);
smalltalk.mapClassName("String", "Kernel", String, smalltalk.SequenceableCollection);
smalltalk.mapClassName("Array", "Kernel", Array, smalltalk.SequenceableCollection);
smalltalk.mapClassName("RegularExpression", "Kernel", RegExp, smalltalk.String);

smalltalk.mapClassName("Error", "Kernel", Error, smalltalk.Object);
smalltalk.mapClassName("MethodContext", "Kernel", SmalltalkMethodContext, smalltalk.Object);
smalltalk.addPackage('Kernel', {});
smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "__eq_eq", [anObject]);
return self;},
args: ["anObject"],
source: unescape('%3D%20anObject%0A%09%5Eself%20%3D%3D%20anObject'),
messageSends: [unescape("%3D%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E_eq'),
smalltalk.method({
selector: unescape('%7E%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
return self;},
args: ["anObject"],
source: unescape('%7E%3D%20anObject%0A%09%5E%28self%20%3D%20anObject%29%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_yourself'),
smalltalk.method({
selector: unescape('yourself'),
category: 'accessing',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('yourself%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_class'),
smalltalk.method({
selector: unescape('class'),
category: 'accessing',
fn: function (){
var self=this;
return self.klass;
return self;},
args: [],
source: unescape('class%0A%09%3Creturn%20self.klass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object not indexable"]);
return self;},
args: [],
source: unescape('size%0A%09self%20error%3A%20%27Object%20not%20indexable%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
return self;},
args: [],
source: unescape('copy%0A%09%5Eself%20shallowCopy%20postCopy'),
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;

	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i];
		}
	    }
	    return copy;
	;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%3C%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
    
	    var copy = self.klass._new();
	    for(var i in self) {
		if(/^@.+/.test(i)) {
		    copy[i] = self[i]._deepCopy();
		}
	    }
	    return copy;
	;
return self;},
args: [],
source: unescape('deepCopy%0A%09%3C%20%20%20%20%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D._deepCopy%28%29%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_postCopy'),
smalltalk.method({
selector: unescape('postCopy'),
category: 'copying',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('postCopy'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__minus_gt'),
smalltalk.method({
selector: unescape('-%3E'),
category: 'converting',
fn: function (anObject){
var self=this;
return smalltalk.send((smalltalk.Association || Association), "_key_value_", [self, anObject]);
return self;},
args: ["anObject"],
source: unescape('-%3E%20anObject%0A%09%5EAssociation%20key%3A%20self%20value%3A%20anObject'),
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_'),
smalltalk.method({
selector: unescape('perform%3A'),
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
return self;},
args: ["aSymbol"],
source: unescape('perform%3A%20aSymbol%0A%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_perform_withArguments_'),
smalltalk.method({
selector: unescape('perform%3AwithArguments%3A'),
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [smalltalk.send(aSymbol, "_asSelector", []), aCollection]);
return self;},
args: ["aSymbol", "aCollection"],
source: unescape('perform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%5Eself%20basicPerform%3A%20aSymbol%20asSelector%20withArguments%3A%20aCollection'),
messageSends: ["basicPerform:withArguments:", "asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_'),
smalltalk.method({
selector: unescape('instVarAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self['@'+aString];
return self;},
args: ["aString"],
source: unescape('instVarAt%3A%20aString%0A%09%3Creturn%20self%5B%27@%27+aString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_instVarAt_put_'),
smalltalk.method({
selector: unescape('instVarAt%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
self['@' + aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('instVarAt%3A%20aString%20put%3A%20anObject%0A%09%3Cself%5B%27@%27%20+%20aString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_'),
smalltalk.method({
selector: unescape('basicAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
args: ["aString"],
source: unescape('basicAt%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicAt_put_'),
smalltalk.method({
selector: unescape('basicAt%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
return self[aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('basicAt%3A%20aString%20put%3A%20anObject%0A%09%3Creturn%20self%5BaString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_error_'),
smalltalk.method({
selector: unescape('error%3A'),
category: 'error handling',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.Error || Error), "_signal_", [aString]);
return self;},
args: ["aString"],
source: unescape('error%3A%20aString%0A%09Error%20signal%3A%20aString'),
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_subclassResponsibility'),
smalltalk.method({
selector: unescape('subclassResponsibility'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
return self;},
args: [],
source: unescape('subclassResponsibility%0A%09self%20error%3A%20%27This%20method%20is%20a%20responsibility%20of%20a%20subclass%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_shouldNotImplement'),
smalltalk.method({
selector: unescape('shouldNotImplement'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
args: [],
source: unescape('shouldNotImplement%0A%09self%20error%3A%20%27This%20method%20should%20not%20be%20implemented%20in%20%27%2C%20self%20class%20name'),
messageSends: ["error:", unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_try_catch_'),
smalltalk.method({
selector: unescape('try%3Acatch%3A'),
category: 'error handling',
fn: function (aBlock, anotherBlock){
var self=this;
try{aBlock()} catch(e) {anotherBlock(e)};
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('try%3A%20aBlock%20catch%3A%20anotherBlock%0A%09%3Ctry%7BaBlock%28%29%7D%20catch%28e%29%20%7BanotherBlock%28e%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%27a%20%27%2C%20self%20class%20name'),
messageSends: [unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
args: [],
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isKindOf_'),
smalltalk.method({
selector: unescape('isKindOf%3A'),
category: 'testing',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})]));
return self;},
args: ["aClass"],
source: unescape('isKindOf%3A%20aClass%0A%09%5E%28self%20isMemberOf%3A%20aClass%29%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20class%20inheritsFrom%3A%20aClass%5D'),
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMemberOf_'),
smalltalk.method({
selector: unescape('isMemberOf%3A'),
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
return self;},
args: ["aClass"],
source: unescape('isMemberOf%3A%20aClass%0A%09%5Eself%20class%20%3D%20aClass'),
messageSends: [unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
args: ["aBlock"],
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
return self;},
args: [],
source: unescape('notNil%0A%09%5Eself%20isNil%20not'),
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isClass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isMetaclass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isNumber%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isString%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_isParseFailure'),
smalltalk.method({
selector: unescape('isParseFailure'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isParseFailure%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_'),
smalltalk.method({
selector: unescape('basicPerform%3A'),
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
return self;},
args: ["aSymbol"],
source: unescape('basicPerform%3A%20aSymbol%20%0A%09%5Eself%20basicPerform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicPerform_withArguments_'),
smalltalk.method({
selector: unescape('basicPerform%3AwithArguments%3A'),
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return self[aSymbol].apply(self, aCollection);;
return self;},
args: ["aSymbol", "aCollection"],
source: unescape('basicPerform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%3Creturn%20self%5BaSymbol%5D.apply%28self%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_basicDelete_'),
smalltalk.method({
selector: unescape('basicDelete%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
delete self[aString];
return self;},
args: ["aString"],
source: unescape('basicDelete%3A%20aString%0A%20%20%20%20%3Cdelete%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'error handling',
fn: function (aMessage){
var self=this;
(function($rec){smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.MessageNotUnderstood || MessageNotUnderstood), "_new", []));
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09MessageNotUnderstood%20new%0A%09%09receiver%3A%20self%3B%0A%09%09message%3A%20aMessage%3B%0A%09%09signal'),
messageSends: ["receiver:", "message:", "signal", "new"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSON'),
smalltalk.method({
selector: unescape('asJSON'),
category: 'converting',
fn: function (){
var self=this;
return JSON.stringify(self._asJSONObject());
return self;},
args: [],
source: unescape('asJSON%0A%09%3Creturn%20JSON.stringify%28self._asJSONObject%28%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(object, "_basicAt_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSONObject", [])]);})]);
return object;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09object%20basicAt%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "do:", "instanceVariableNames", "class", "basicAt:put:", "asJSONObject", "instVarAt:"],
referencedClasses: ["Object"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_halt'),
smalltalk.method({
selector: unescape('halt'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Halt encountered"]);
return self;},
args: [],
source: unescape('halt%0A%09self%20error%3A%20%27Halt%20encountered%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_log_block_'),
smalltalk.method({
selector: unescape('log%3Ablock%3A'),
category: 'printing',
fn: function (aString, aBlock){
var self=this;
var result=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return result=smalltalk.send(aBlock, "_value", []);})]), "_printString", [])])]);
return result;
return self;},
args: ["aString", "aBlock"],
source: unescape('log%3A%20aString%20block%3A%20aBlock%0A%0A%09%7C%20result%20%7C%0A%09console%20log%3A%20%20aString%2C%20%20%27%20time%3A%20%27%2C%20%28Date%20millisecondsToRun%3A%20%5Bresult%20%3A%3D%20aBlock%20value%5D%29%20printString.%0A%09%5Eresult'),
messageSends: ["log:", unescape("%2C"), "printString", "millisecondsToRun:", "value"],
referencedClasses: ["Date"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return self === anObject;
return self;},
args: ["anObject"],
source: unescape('%3D%3D%20anObject%0A%09%3Creturn%20self%20%3D%3D%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_%7E%7E'),
smalltalk.method({
selector: unescape('%7E%7E'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq_eq", [anObject]), "__eq", [false]);
return self;},
args: ["anObject"],
source: unescape('%7E%7E%20anObject%0A%09%5E%28self%20%3D%3D%20anObject%29%20%3D%20false'),
messageSends: [unescape("%3D"), unescape("%3D%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_deprecatedAPI'),
smalltalk.method({
selector: unescape('deprecatedAPI'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_warn_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.getThisContext()), "_home", []), "_asString", []), "__comma", [unescape("%20is%20deprecated%21")])]);
return self;},
args: [],
source: unescape('deprecatedAPI%0A%09%22Just%20a%20simple%20way%20to%20deprecate%20methods.%0A%09%23deprecatedAPI%20is%20in%20the%20%27error%20handling%27%20protocol%20even%20if%20it%20doesn%27t%20throw%20an%20error%2C%0A%09but%20it%20could%20in%20the%20future.%22%0A%09console%20warn%3A%20thisContext%20home%20asString%2C%20%27%20is%20deprecated%21%27'),
messageSends: ["warn:", unescape("%2C"), "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeString'),
smalltalk.method({
selector: unescape('storeString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(self, "_storeOn_", [s]);})]);
return self;},
args: [],
source: unescape('storeString%0A%09%22Answer%20a%20String%20representation%20of%20the%20receiver%20from%20which%20the%20receiver%20%0A%09can%20be%20reconstructed.%22%0A%0A%09%5E%20String%20streamContents%3A%20%5B%3As%20%7C%20self%20storeOn%3A%20s%5D'),
messageSends: ["streamContents:", "storeOn:"],
referencedClasses: ["String"]
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(self, "_printString", [])]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09aStream%20nextPutAll%3A%20self%20printString'),
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('initialize%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'accessing',
fn: function (){
var self=this;
return self.classes();
return self;},
args: [],
source: unescape('classes%0A%09%3Creturn%20self.classes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_readJSON_'),
smalltalk.method({
selector: unescape('readJSON%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return self.readJSObject(anObject);
return self;},
args: ["anObject"],
source: unescape('readJSON%3A%20anObject%0A%09%3Creturn%20self.readJSObject%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
args: ["aString"],
source: unescape('at%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removeClass_'),
smalltalk.method({
selector: unescape('removeClass%3A'),
category: 'classes',
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);})]);
smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
return self;},
args: ["aClass"],
source: unescape('removeClass%3A%20aClass%0A%09aClass%20isMetaclass%20ifTrue%3A%20%5Bself%20error%3A%20aClass%20asString%2C%20%27%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21%27%5D.%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20removeCompiledMethod%3A%20each%5D.%0A%09aClass%20class%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20class%20removeCompiledMethod%3A%20each%5D.%0A%09self%20basicDelete%3A%20aClass%20name'),
messageSends: ["ifTrue:", "isMetaclass", "error:", unescape("%2C"), "asString", "do:", "values", "methodDictionary", "removeCompiledMethod:", "class", "basicDelete:", "name"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_basicParse_'),
smalltalk.method({
selector: unescape('basicParse%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.parser.parse(aString);
return self;},
args: ["aString"],
source: unescape('basicParse%3A%20aString%0A%09%3Creturn%20smalltalk.parser.parse%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send(self, "_try_catch_", [(function(){return result=smalltalk.send(self, "_basicParse_", [aString]);}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_parsing_", [ex, aString]), "_signal", []);})]);
return result;
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%09%7C%20result%20%7C%20%0A%09self%20try%3A%20%5Bresult%20%3A%3D%20self%20basicParse%3A%20aString%5D%20catch%3A%20%5B%3Aex%20%7C%20%28self%20parseError%3A%20ex%20parsing%3A%20aString%29%20signal%5D.%0A%09%5Eresult'),
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:parsing:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_parseError_parsing_'),
smalltalk.method({
selector: unescape('parseError%3Aparsing%3A'),
category: 'accessing',
fn: function (anException, aString){
var self=this;
var row=nil;
var col=nil;
var message=nil;
var lines=nil;
var badLine=nil;
var code=nil;
row = anException.line;
	col = anException.column;
	message = anException.message;;
lines=smalltalk.send(aString, "_lines", []);
badLine=smalltalk.send(lines, "_at_", [row]);
badLine=smalltalk.send(smalltalk.send(smalltalk.send(badLine, "_copyFrom_to_", [(1), ((($receiver = col).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]), "__comma", [unescape("%20%3D%3D%3D%3E")]), "__comma", [smalltalk.send(badLine, "_copyFrom_to_", [col, smalltalk.send(badLine, "_size", [])])]);
smalltalk.send(lines, "_at_put_", [row, badLine]);
code=smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(s){return smalltalk.send(lines, "_withIndexDo_", [(function(l, i){return smalltalk.send(s, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(i, "_asString", []), "__comma", [": "]), "__comma", [l]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]);})]);
return smalltalk.send(smalltalk.send((smalltalk.Error || Error), "_new", []), "_messageText_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Parse error on line ", "__comma", [row]), "__comma", [" column "]), "__comma", [col]), "__comma", [" : "]), "__comma", [message]), "__comma", [unescape("%20Below%20is%20code%20with%20line%20numbers%20and%20%3D%3D%3D%3E%20marker%20inserted%3A")]), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [code])]);
return self;},
args: ["anException", "aString"],
source: unescape('parseError%3A%20anException%20parsing%3A%20aString%0A%09%7C%20row%20col%20message%20lines%20badLine%20code%20%7C%0A%09%3Crow%20%3D%20anException.line%3B%0A%09col%20%3D%20anException.column%3B%0A%09message%20%3D%20anException.message%3B%3E.%0A%09lines%20%3A%3D%20aString%20lines.%0A%09badLine%20%3A%3D%20lines%20at%3A%20row.%0A%09badLine%20%3A%3D%20%28badLine%20copyFrom%3A%201%20to%3A%20col%20-%201%29%2C%20%27%20%3D%3D%3D%3E%27%2C%20%28badLine%20copyFrom%3A%20%20col%20to%3A%20badLine%20size%29.%0A%09lines%20at%3A%20row%20put%3A%20badLine.%0A%09code%20%3A%3D%20String%20streamContents%3A%20%5B%3As%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lines%20withIndexDo%3A%20%5B%3Al%20%3Ai%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%20nextPutAll%3A%20i%20asString%2C%20%27%3A%20%27%2C%20l%2C%20String%20lf%5D%5D.%0A%09%5E%20Error%20new%20messageText%3A%20%28%27Parse%20error%20on%20line%20%27%20%2C%20row%20%2C%20%27%20column%20%27%20%2C%20col%20%2C%20%27%20%3A%20%27%20%2C%20message%20%2C%20%27%20Below%20is%20code%20with%20line%20numbers%20and%20%3D%3D%3D%3E%20marker%20inserted%3A%27%20%2C%20String%20lf%2C%20code%29'),
messageSends: ["lines", "at:", unescape("%2C"), "copyFrom:to:", unescape("-"), "size", "at:put:", "streamContents:", "withIndexDo:", "nextPutAll:", "asString", "lf", "messageText:", "new"],
referencedClasses: ["String", "Error"]
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
category: 'packages',
fn: function (){
var self=this;
return self.packages.all();
return self;},
args: [],
source: unescape('packages%0A%09%22Return%20all%20Package%20instances%20in%20the%20system.%22%0A%0A%09%3Creturn%20self.packages.all%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_'),
smalltalk.method({
selector: unescape('packageAt%3A'),
category: 'packages',
fn: function (packageName){
var self=this;
return self.packages[packageName];
return self;},
args: ["packageName"],
source: unescape('packageAt%3A%20packageName%0A%20%20%20%20%20%20%20%3Creturn%20self.packages%5BpackageName%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_packageAt_ifAbsent_'),
smalltalk.method({
selector: unescape('packageAt%3AifAbsent%3A'),
category: 'packages',
fn: function (packageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageAt_", [packageName]), "_ifNil_", [aBlock]);
return self;},
args: ["packageName", "aBlock"],
source: unescape('packageAt%3A%20packageName%20ifAbsent%3A%20aBlock%0A%20%20%20%20%20%20%20%5E%28self%20packageAt%3A%20packageName%29%20ifNil%3A%20aBlock'),
messageSends: ["ifNil:", "packageAt:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_'),
smalltalk.method({
selector: unescape('createPackage%3A'),
category: 'private',
fn: function (packageName){
var self=this;
return smalltalk.addPackage(packageName, nil);
return self;},
args: ["packageName"],
source: unescape('createPackage%3A%20packageName%0A%09%22Create%20and%20bind%20a%20new%20package%20with%20given%20name%20and%20return%20it.%22%0A%0A%20%20%20%20%20%20%3Creturn%20smalltalk.addPackage%28packageName%2C%20nil%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_deletePackage_'),
smalltalk.method({
selector: unescape('deletePackage%3A'),
category: 'private',
fn: function (packageName){
var self=this;
delete smalltalk.packages[packageName];
return self;},
args: ["packageName"],
source: unescape('deletePackage%3A%20packageName%0A%09%22Deletes%20a%20package%20by%20deleting%20its%20binding%2C%20but%20does%20not%20check%20if%20it%20contains%20classes%20etc.%0A%09To%20remove%20a%20package%2C%20use%20%23removePackage%20instead.%22%0A%0A%20%20%20%20%20%20%20%3Cdelete%20smalltalk.packages%5BpackageName%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_removePackage_'),
smalltalk.method({
selector: unescape('removePackage%3A'),
category: 'packages',
fn: function (packageName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
smalltalk.send(smalltalk.send(pkg, "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_removeClass_", [each]);})]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;},
args: ["packageName"],
source: unescape('removePackage%3A%20packageName%0A%09%22Removes%20a%20package%20and%20all%20its%20classes.%22%0A%0A%09%7C%20pkg%20%7C%0A%09pkg%20%3A%3D%20self%20packageAt%3A%20packageName%20ifAbsent%3A%20%5Bself%20error%3A%20%27Missing%20package%3A%20%27%2C%20packageName%5D.%0A%09pkg%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20%20%20%20%09self%20removeClass%3A%20each%5D.%0A%09self%20deletePackage%3A%20packageName'),
messageSends: ["packageAt:ifAbsent:", "error:", unescape("%2C"), "do:", "classes", "removeClass:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_renamePackage_to_'),
smalltalk.method({
selector: unescape('renamePackage%3Ato%3A'),
category: 'packages',
fn: function (packageName, newName){
var self=this;
var pkg=nil;
pkg=smalltalk.send(self, "_packageAt_ifAbsent_", [packageName, (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Missing package: ", "__comma", [packageName])]);})]);
(($receiver = smalltalk.send(self, "_packageAt_", [newName])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Already exists a package called: ", "__comma", [newName])]);})() : nil;
smalltalk.packages[newName] = smalltalk.packages[packageName];
smalltalk.send(pkg, "_name_", [newName]);
smalltalk.send(self, "_deletePackage_", [packageName]);
return self;},
args: ["packageName", "newName"],
source: unescape('renamePackage%3A%20packageName%20to%3A%20newName%0A%09%22Rename%20a%20package.%22%0A%0A%09%7C%20pkg%20%7C%0A%09pkg%20%3A%3D%20self%20packageAt%3A%20packageName%20ifAbsent%3A%20%5Bself%20error%3A%20%27Missing%20package%3A%20%27%2C%20packageName%5D.%0A%09%28self%20packageAt%3A%20newName%29%20ifNotNil%3A%20%5Bself%20error%3A%20%27Already%20exists%20a%20package%20called%3A%20%27%2C%20newName%5D.%0A%09%3Csmalltalk.packages%5BnewName%5D%20%3D%20smalltalk.packages%5BpackageName%5D%3E.%0A%09pkg%20name%3A%20newName.%0A%09self%20deletePackage%3A%20packageName.'),
messageSends: ["packageAt:ifAbsent:", "error:", unescape("%2C"), "ifNotNil:", "packageAt:", "name:", "deletePackage:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_reservedWords'),
smalltalk.method({
selector: unescape('reservedWords'),
category: 'accessing',
fn: function (){
var self=this;
return self.reservedWords;
return self;},
args: [],
source: unescape('reservedWords%0A%09%22JavaScript%20reserved%20words%22%0A%09%3Creturn%20self.reservedWords%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
unescape('_createPackage_properties_'),
smalltalk.method({
selector: unescape('createPackage%3Aproperties%3A'),
category: 'private',
fn: function (packageName, aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return smalltalk.addPackage(packageName, object);
return self;},
args: ["packageName", "aDict"],
source: unescape('createPackage%3A%20packageName%20properties%3A%20aDict%0A%09%22Create%20and%20bind%20a%20new%20package%20with%20given%20name%20and%20return%20it.%22%0A%0A%09%7C%20object%20%7C%0A%09%3Cobject%20%3D%20%7B%7D%3B%3E.%0A%09aDict%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09%3Cobject%5Bkey%5D%20%3D%20value%3E.%0A%09%5D.%0A%20%20%20%20%20%20%20%3Creturn%20smalltalk.addPackage%28packageName%2C%20object%29%3E'),
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk;
return self;},
args: [],
source: unescape('current%0A%09%3Creturn%20smalltalk%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Package', smalltalk.Object, [], 'Kernel');
smalltalk.Package.comment=unescape('A%20Package%20is%20similar%20to%20a%20%22class%20category%22%20typically%20found%20in%20other%20Smalltalks%20like%20Pharo%20or%20Squeak.%20Amber%20does%20not%20have%20class%20categories%20anymore%2C%20it%20had%20in%20the%20beginning%20but%20now%20each%20class%20in%20the%20system%20knows%20which%20package%20it%20belongs%20to.%0A%0AA%20Package%20has%20a%20name%2C%20an%20Array%20of%20%22requires%22%2C%20a%20comment%20and%20a%20Dictionary%20with%20other%20optional%20key%20value%20attributes.%20A%20Package%20can%20also%20be%20queried%20for%20its%20classes%2C%20but%20it%20will%20then%20resort%20to%20a%20reverse%20scan%20of%20all%20classes%20to%20find%20them.%0APackages%20are%20manipulated%20through%20%22Smalltalk%20current%22%2C%20like%20for%20example%20finding%20one%20based%20on%20a%20name%3A%0A%0A%09Smalltalk%20current%20packageAt%3A%20%27Kernel%27%0A%0A...but%20you%20can%20also%20use%3A%0A%0A%09Package%20named%3A%20%27Kernel%27%0A%0AA%20Package%20differs%20slightly%20from%20a%20Monticello%20package%20which%20can%20span%20multiple%20class%20categories%20using%20a%20naming%20convention%20based%20on%20hyphenation.%20But%20just%20as%20in%20Monticello%20a%20Package%20supports%20%22class%20extensions%22%20so%20a%20Package%0Acan%20define%20behaviors%20in%20foreign%20classes%20using%20a%20naming%20convention%20for%20method%20categories%20where%20the%20category%20starts%20with%20an%20asterisk%20and%20then%20the%20name%20of%20the%20owning%20package%20follows.%20This%20can%20easily%20be%20seen%20in%20for%20example%20class%0AString%20where%20the%20method%20category%20%22*IDE%22%20defines%20%23inspectOn%3A%20which%20thus%20is%20a%20method%20belonging%20to%20the%20IDE%20package.')
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self.pkgName || nil;
return self;},
args: [],
source: unescape('name%0A%09%3Creturn%20self.pkgName%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self.pkgName = aString;
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09%3Creturn%20self.pkgName%20%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
category: 'classes',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(c){return smalltalk.send(smalltalk.send(c, "_package", []), "__eq_eq", [self]);})]);
return self;},
args: [],
source: unescape('classes%0A%09%22We%20need%20to%20do%20a%20reverse%20scan.%22%0A%09%5ESmalltalk%20current%20classes%20select%3A%20%5B%3Ac%20%7C%20c%20package%20%3D%3D%20self%5D'),
messageSends: ["select:", "classes", "current", unescape("%3D%3D"), "package"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies'),
smalltalk.method({
selector: unescape('dependencies'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_propertyAt_ifAbsent_", ["dependencies", (function(){return [];})]);
return self;},
args: [],
source: unescape('dependencies%0A%09%5Eself%20propertyAt%3A%20%27dependencies%27%20ifAbsent%3A%20%5B%23%28%29%5D'),
messageSends: ["propertyAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_dependencies_'),
smalltalk.method({
selector: unescape('dependencies%3A'),
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.send(self, "_propertyAt_put_", ["dependencies", anArray]);
return self;},
args: ["anArray"],
source: unescape('dependencies%3A%20anArray%0A%09%5Eself%20propertyAt%3A%20%27dependencies%27%20put%3A%20anArray'),
messageSends: ["propertyAt:put:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties'),
smalltalk.method({
selector: unescape('properties'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
for (var i in self.properties) {
		result._at_put_(i, self.properties[i]);
	}
	return result;;
return self;},
args: [],
source: unescape('properties%0A%09%22It%20is%20stored%20as%20a%20javascript%20object.%22%0A%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20Dictionary%20new.%0A%09%3Cfor%20%28var%20i%20in%20self.properties%29%20%7B%0A%09%09result._at_put_%28i%2C%20self.properties%5Bi%5D%29%3B%0A%09%7D%0A%09return%20result%3B%3E'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertiesAsJSON'),
smalltalk.method({
selector: unescape('propertiesAsJSON'),
category: 'private',
fn: function (){
var self=this;
return JSON.stringify(self.properties);
return self;},
args: [],
source: unescape('propertiesAsJSON%0A%09%3Creturn%20JSON.stringify%28self.properties%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_properties_'),
smalltalk.method({
selector: unescape('properties%3A'),
category: 'accessing',
fn: function (aDict){
var self=this;
var object=nil;
object = {};;
smalltalk.send(aDict, "_keysAndValuesDo_", [(function(key, value){return object[key] = value;})]);
return self.properties = object;
return self;},
args: ["aDict"],
source: unescape('properties%3A%20aDict%0A%09%22We%20store%20it%20as%20a%20javascript%20object.%22%0A%09%0A%09%7C%20object%20%7C%0A%09%3Cobject%20%3D%20%7B%7D%3B%3E.%0A%09aDict%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09%3Cobject%5Bkey%5D%20%3D%20value%3E.%0A%09%5D.%0A%09%3Creturn%20self.properties%20%3D%20object%3E'),
messageSends: ["keysAndValuesDo:"],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties'),
smalltalk.method({
selector: unescape('jsProperties'),
category: 'private',
fn: function (){
var self=this;
return self.properties || nil;
return self;},
args: [],
source: unescape('jsProperties%0A%09%3Creturn%20self.properties%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_jsProperties_'),
smalltalk.method({
selector: unescape('jsProperties%3A'),
category: 'private',
fn: function (aJSObject){
var self=this;
return self.properties = aJSObject;
return self;},
args: ["aJSObject"],
source: unescape('jsProperties%3A%20aJSObject%0A%09%3Creturn%20self.properties%20%3D%20aJSObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_'),
smalltalk.method({
selector: unescape('propertyAt%3A'),
category: 'properties',
fn: function (key){
var self=this;
return self.properties[key];
return self;},
args: ["key"],
source: unescape('propertyAt%3A%20key%0A%0A%09%3Creturn%20self.properties%5Bkey%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_put_'),
smalltalk.method({
selector: unescape('propertyAt%3Aput%3A'),
category: 'properties',
fn: function (key, value){
var self=this;
return self.properties[key] = value;
return self;},
args: ["key", "value"],
source: unescape('propertyAt%3A%20key%20put%3A%20value%0A%0A%09%3Creturn%20self.properties%5Bkey%5D%20%3D%20value%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Package);

smalltalk.addMethod(
unescape('_propertyAt_ifAbsent_'),
smalltalk.method({
selector: unescape('propertyAt%3AifAbsent%3A'),
category: 'properties',
fn: function (key, block){
var self=this;
return (($receiver = smalltalk.send(self, "_propertyAt_", [key])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(block, "_value", []);})() : $receiver;
return self;},
args: ["key", "block"],
source: unescape('propertyAt%3A%20key%20ifAbsent%3A%20block%0A%0A%09%5E%28self%20propertyAt%3A%20key%29%20ifNil%3A%20%5Bblock%20value%5D'),
messageSends: ["ifNil:", "propertyAt:", "value"],
referencedClasses: []
}),
smalltalk.Package);


smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'not yet classified',
fn: function (aPackageName){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [aPackageName]);
return self;},
args: ["aPackageName"],
source: unescape('named%3A%20aPackageName%0A%0A%09%5ESmalltalk%20current%20packageAt%3A%20aPackageName'),
messageSends: ["packageAt:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);

smalltalk.addMethod(
unescape('_named_ifAbsent_'),
smalltalk.method({
selector: unescape('named%3AifAbsent%3A'),
category: 'not yet classified',
fn: function (aPackageName, aBlock){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_ifAbsent_", [aPackageName, aBlock]);
return self;},
args: ["aPackageName", "aBlock"],
source: unescape('named%3A%20aPackageName%20ifAbsent%3A%20aBlock%0A%0A%09%5ESmalltalk%20current%20packageAt%3A%20aPackageName%20ifAbsent%3A%20aBlock'),
messageSends: ["packageAt:ifAbsent:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Package.klass);


smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;},
args: [],
source: unescape('new%0A%09%5Eself%20basicNew%20initialize'),
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_basicNew'),
smalltalk.method({
selector: unescape('basicNew'),
category: 'instance creation',
fn: function (){
var self=this;
return new self.fn();
return self;},
args: [],
source: unescape('basicNew%0A%09%3Creturn%20new%20self.fn%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self.className || nil;
return self;},
args: [],
source: unescape('name%0A%09%3Creturn%20self.className%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_superclass'),
smalltalk.method({
selector: unescape('superclass'),
category: 'accessing',
fn: function (){
var self=this;
return self.superclass || nil;
return self;},
args: [],
source: unescape('superclass%0A%09%3Creturn%20self.superclass%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_subclasses'),
smalltalk.method({
selector: unescape('subclasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.subclasses(self);
return self;},
args: [],
source: unescape('subclasses%0A%09%3Creturn%20smalltalk.subclasses%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allSubclasses'),
smalltalk.method({
selector: unescape('allSubclasses'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_subclasses", []);
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;},
args: [],
source: unescape('allSubclasses%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20subclasses.%0A%09self%20subclasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20result%20addAll%3A%20each%20allSubclasses%5D.%0A%09%5Eresult'),
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_withAllSubclasses'),
smalltalk.method({
selector: unescape('withAllSubclasses'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;},
args: [],
source: unescape('withAllSubclasses%0A%09%5E%28Array%20with%3A%20self%29%20addAll%3A%20self%20allSubclasses%3B%20yourself'),
messageSends: ["addAll:", "allSubclasses", "yourself", "with:"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_prototype'),
smalltalk.method({
selector: unescape('prototype'),
category: 'accessing',
fn: function (){
var self=this;
return self.fn.prototype;
return self;},
args: [],
source: unescape('prototype%0A%09%3Creturn%20self.fn.prototype%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodDictionary'),
smalltalk.method({
selector: unescape('methodDictionary'),
category: 'accessing',
fn: function (){
var self=this;
var dict = smalltalk.Dictionary._new();
	var methods = self.fn.prototype.methods;
	for(var i in methods) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	};
	return dict;
return self;},
args: [],
source: unescape('methodDictionary%0A%09%3Cvar%20dict%20%3D%20smalltalk.Dictionary._new%28%29%3B%0A%09var%20methods%20%3D%20self.fn.prototype.methods%3B%0A%09for%28var%20i%20in%20methods%29%20%7B%0A%09%09if%28methods%5Bi%5D.selector%29%20%7B%0A%09%09%09dict._at_put_%28methods%5Bi%5D.selector%2C%20methods%5Bi%5D%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09return%20dict%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_'),
smalltalk.method({
selector: unescape('methodsFor%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;},
args: ["aString"],
source: unescape('methodsFor%3A%20aString%0A%09%5EClassCategoryReader%20new%0A%09%20%20%20%20class%3A%20self%20category%3A%20aString%3B%0A%09%20%20%20%20yourself'),
messageSends: ["class:category:", "yourself", "new"],
referencedClasses: ["ClassCategoryReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_addCompiledMethod_'),
smalltalk.method({
selector: unescape('addCompiledMethod%3A'),
category: 'accessing',
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;},
args: ["aMethod"],
source: unescape('addCompiledMethod%3A%20aMethod%0A%09%3Csmalltalk.addMethod%28aMethod.selector._asSelector%28%29%2C%20aMethod%2C%20self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_instanceVariableNames'),
smalltalk.method({
selector: unescape('instanceVariableNames'),
category: 'accessing',
fn: function (){
var self=this;
return self.iVarNames;
return self;},
args: [],
source: unescape('instanceVariableNames%0A%09%3Creturn%20self.iVarNames%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment'),
smalltalk.method({
selector: unescape('comment'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('comment%0A%20%20%20%20%5E%28self%20basicAt%3A%20%27comment%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_comment_'),
smalltalk.method({
selector: unescape('comment%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;},
args: ["aString"],
source: unescape('comment%3A%20aString%0A%20%20%20%20self%20basicAt%3A%20%27comment%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp'),
smalltalk.method({
selector: unescape('commentStamp'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;},
args: [],
source: unescape('commentStamp%0A%20%20%20%20%5EClassCommentReader%20new%0A%09class%3A%20self%3B%0A%09yourself'),
messageSends: ["class:", "yourself", "new"],
referencedClasses: ["ClassCommentReader"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_removeCompiledMethod_'),
smalltalk.method({
selector: unescape('removeCompiledMethod%3A'),
category: 'accessing',
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;},
args: ["aMethod"],
source: unescape('removeCompiledMethod%3A%20aMethod%0A%09%3Cdelete%20self.fn.prototype%5BaMethod.selector._asSelector%28%29%5D%3B%0A%09delete%20self.fn.prototype.methods%5BaMethod.selector%5D%3B%0A%09smalltalk.init%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_inheritsFrom_'),
smalltalk.method({
selector: unescape('inheritsFrom%3A'),
category: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;},
args: ["aClass"],
source: unescape('inheritsFrom%3A%20aClass%0A%09%5EaClass%20allSubclasses%20includes%3A%20self'),
messageSends: ["includes:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocols'),
smalltalk.method({
selector: unescape('protocols'),
category: 'accessing',
fn: function (){
var self=this;
var protocols=nil;
protocols=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(protocols, "_sort", []);
return self;},
args: [],
source: unescape('protocols%0A%20%20%20%20%7C%20protocols%20%7C%0A%20%20%20%20protocols%20%3A%3D%20Array%20new.%0A%20%20%20%20self%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28protocols%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%09protocols%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Eprotocols%20sort'),
messageSends: ["new", "do:", "methodDictionary", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: ["Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_protocolsDo_'),
smalltalk.method({
selector: unescape('protocolsDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
var methodsByCategory=nil;
methodsByCategory=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;},
args: ["aBlock"],
source: unescape('protocolsDo%3A%20aBlock%0A%09%22Execute%20aBlock%20for%20each%20method%20category%20with%0A%09its%20collection%20of%20methods%20in%20the%20sort%20order%20of%20category%20name.%22%0A%0A%09%7C%20methodsByCategory%20%7C%0A%09methodsByCategory%20%3A%3D%20Dictionary%20new.%0A%09self%20methodDictionary%20values%20do%3A%20%5B%3Am%20%7C%0A%09%09%28methodsByCategory%20at%3A%20m%20category%20ifAbsentPut%3A%20%5BArray%20new%5D%29%0A%20%09%09%09add%3A%20m%5D.%20%0A%09self%20protocols%20do%3A%20%5B%3Acategory%20%7C%0A%09%09aBlock%20value%3A%20category%20value%3A%20%28methodsByCategory%20at%3A%20category%29%5D'),
messageSends: ["new", "do:", "values", "methodDictionary", "add:", "at:ifAbsentPut:", "category", "protocols", "value:value:", "at:"],
referencedClasses: ["Dictionary", "Array"]
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_allInstanceVariableNames'),
smalltalk.method({
selector: unescape('allInstanceVariableNames'),
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []);
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;},
args: [],
source: unescape('allInstanceVariableNames%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20instanceVariableNames%20copy.%0A%09self%20superclass%20ifNotNil%3A%20%5B%0A%09%20%20%20%20result%20addAll%3A%20self%20superclass%20allInstanceVariableNames%5D.%0A%09%5Eresult'),
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodAt_'),
smalltalk.method({
selector: unescape('methodAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;},
args: ["aString"],
source: unescape('methodAt%3A%20aString%0A%09%3Creturn%20smalltalk.methods%28self%29%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_methodsFor_stamp_'),
smalltalk.method({
selector: unescape('methodsFor%3Astamp%3A'),
category: 'accessing',
fn: function (aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;},
args: ["aString", "aStamp"],
source: unescape('methodsFor%3A%20aString%20stamp%3A%20aStamp%0A%09%22Added%20for%20compatibility%2C%20right%20now%20ignores%20stamp.%22%0A%09%5Eself%20methodsFor%3A%20aString'),
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_commentStamp_prior_'),
smalltalk.method({
selector: unescape('commentStamp%3Aprior%3A'),
category: 'accessing',
fn: function (aStamp, prior){
var self=this;
return smalltalk.send(self, "_commentStamp", []);
return self;},
args: ["aStamp", "prior"],
source: unescape('commentStamp%3A%20aStamp%20prior%3A%20prior%0A%20%20%20%20%20%20%20%20%5Eself%20commentStamp'),
messageSends: ["commentStamp"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self, "_compile_category_", [aString, ""]);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09self%20compile%3A%20aString%20category%3A%20%27%27'),
messageSends: ["compile:category:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
unescape('_compile_category_'),
smalltalk.method({
selector: unescape('compile%3Acategory%3A'),
category: 'compiling',
fn: function (aString, anotherString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self]);
smalltalk.send(method, "_category_", [anotherString]);
smalltalk.send(self, "_addCompiledMethod_", [method]);
return self;},
args: ["aString", "anotherString"],
source: unescape('compile%3A%20aString%20category%3A%20anotherString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20self.%0A%09method%20category%3A%20anotherString.%0A%09self%20addCompiledMethod%3A%20method'),
messageSends: ["load:forClass:", "new", "category:", "addCompiledMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_package", [])) == nil || $receiver == undefined) ? (function(){return "Unclassified";})() : (function(){return smalltalk.send(smalltalk.send(self, "_package", []), "_name", []);})();
return self;},
args: [],
source: unescape('category%0A%09%5Eself%20package%20ifNil%3A%20%5B%27Unclassified%27%5D%20ifNotNil%3A%20%5Bself%20package%20name%5D'),
messageSends: ["ifNil:ifNotNil:", "package", "name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;},
args: ["aString", "anotherString"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20package%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_isClass'),
smalltalk.method({
selector: unescape('isClass'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isClass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_rename_'),
smalltalk.method({
selector: unescape('rename%3A'),
category: 'accessing',
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;},
args: ["aString"],
source: unescape('rename%3A%20aString%0A%09%3C%0A%09%09smalltalk%5BaString%5D%20%3D%20self%3B%0A%09%09delete%20smalltalk%5Bself.className%5D%3B%0A%09%09self.className%20%3D%20aString%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20classVariableNames%3A%20classVars%20poolDictionaries%3A%20pools%20category%3A%20aString3%0A%09%22Just%20ignore%20class%20variables%20and%20pools.%20Added%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package'),
smalltalk.method({
selector: unescape('package'),
category: 'accessing',
fn: function (){
var self=this;
return self.pkg;
return self;},
args: [],
source: unescape('package%0A%09%3Creturn%20self.pkg%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_package_'),
smalltalk.method({
selector: unescape('package%3A'),
category: 'accessing',
fn: function (aPackage){
var self=this;
self.pkg = aPackage;
return self;},
args: ["aPackage"],
source: unescape('package%3A%20aPackage%0A%09%3Cself.pkg%20%3D%20aPackage%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
unescape('_instanceClass'),
smalltalk.method({
selector: unescape('instanceClass'),
category: 'accessing',
fn: function (){
var self=this;
return self.instanceClass;
return self;},
args: [],
source: unescape('instanceClass%0A%09%3Creturn%20self.instanceClass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_instanceVariableNames_'),
smalltalk.method({
selector: unescape('instanceVariableNames%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;},
args: ["aCollection"],
source: unescape('instanceVariableNames%3A%20aCollection%0A%09ClassBuilder%20new%0A%09%20%20%20%20class%3A%20self%20instanceVariableNames%3A%20aCollection'),
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_isMetaclass'),
smalltalk.method({
selector: unescape('isMetaclass'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isMetaclass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20instanceClass%20name%2C%20%27%20class%27'),
messageSends: [unescape("%2C"), "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5E%28self%20basicAt%3A%20%27source%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09self%20basicAt%3A%20%27source%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('category%0A%09%5E%28self%20basicAt%3A%20%27category%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_category_'),
smalltalk.method({
selector: unescape('category%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;},
args: ["aString"],
source: unescape('category%3A%20aString%0A%09self%20basicAt%3A%20%27category%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;},
args: [],
source: unescape('selector%0A%09%5Eself%20basicAt%3A%20%27selector%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09self%20basicAt%3A%20%27selector%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn'),
smalltalk.method({
selector: unescape('fn'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;},
args: [],
source: unescape('fn%0A%09%5Eself%20basicAt%3A%20%27fn%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_fn_'),
smalltalk.method({
selector: unescape('fn%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('fn%3A%20aBlock%0A%09self%20basicAt%3A%20%27fn%27%20put%3A%20aBlock'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_messageSends'),
smalltalk.method({
selector: unescape('messageSends'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;},
args: [],
source: unescape('messageSends%0A%09%5Eself%20basicAt%3A%20%27messageSends%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_methodClass'),
smalltalk.method({
selector: unescape('methodClass'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;},
args: [],
source: unescape('methodClass%0A%09%5Eself%20basicAt%3A%20%27methodClass%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_referencedClasses'),
smalltalk.method({
selector: unescape('referencedClasses'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;},
args: [],
source: unescape('referencedClasses%0A%09%5Eself%20basicAt%3A%20%27referencedClasses%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return self.args || [];
return self;},
args: [],
source: unescape('arguments%0A%09%3Creturn%20self.args%20%7C%7C%20%5B%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Number(self) == aNumber;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aNumber"],
source: unescape('%3D%20aNumber%0A%09aNumber%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%20%0A%09%3Creturn%20Number%28self%29%20%3D%3D%20aNumber%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self > aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3E%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self < aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3C%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self >= aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3E%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
return self <= aNumber;
return self;},
args: ["aNumber"],
source: unescape('%3C%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self + aNumber;
return self;},
args: ["aNumber"],
source: unescape('+%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20+%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self - aNumber;
return self;},
args: ["aNumber"],
source: unescape('-%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20-%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self * aNumber;
return self;},
args: ["aNumber"],
source: unescape('*%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20*%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self / aNumber;
return self;},
args: ["aNumber"],
source: unescape('/%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20/%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_max_'),
smalltalk.method({
selector: unescape('max%3A'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.max(self, aNumber);;
return self;},
args: ["aNumber"],
source: unescape('max%3A%20aNumber%0A%09%3Creturn%20Math.max%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_min_'),
smalltalk.method({
selector: unescape('min%3A'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.min(self, aNumber);;
return self;},
args: ["aNumber"],
source: unescape('min%3A%20aNumber%0A%09%3Creturn%20Math.min%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_rounded'),
smalltalk.method({
selector: unescape('rounded'),
category: 'converting',
fn: function (){
var self=this;
return Math.round(self);;
return self;},
args: [],
source: unescape('rounded%0A%09%3Creturn%20Math.round%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_truncated'),
smalltalk.method({
selector: unescape('truncated'),
category: 'converting',
fn: function (){
var self=this;
var result=nil;
((($receiver = self >= (0)).klass === smalltalk.Boolean) ? ($receiver ? (function(){return result = Math.floor(self);;})() : (function(){return result = (Math.floor(self * (-1)) * (-1));;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return result = Math.floor(self);;}), (function(){return result = (Math.floor(self * (-1)) * (-1));;})]));
return result;
return self;},
args: [],
source: unescape('truncated%0A%7Cresult%7C%0A%0A%20%20%20%20self%20%3E%3D%200%20%0A%20%20%20%20%20%20%20%20ifTrue%3A%20%5B%3Cresult%20%3D%20Math.floor%28self%29%3B%3E%5D%0A%20%20%20%20%20%20%20%20ifFalse%3A%20%5B%3Cresult%20%3D%20%28Math.floor%28self%20*%20%28-1%29%29%20*%20%28-1%29%29%3B%3E%5D.%0A%0A%20%20%20%20%5E%20result'),
messageSends: ["ifTrue:ifFalse:", unescape("%3E%3D")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_'),
smalltalk.method({
selector: unescape('to%3A'),
category: 'converting',
fn: function (aNumber){
var self=this;
var array=nil;
var first=nil;
var last=nil;
var count=nil;
first=smalltalk.send(self, "_truncated", []);
last=((($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
count=(1);
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first])), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return first=((($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})]);
return array;
return self;},
args: ["aNumber"],
source: unescape('to%3A%20aNumber%0A%09%7C%20array%20first%20last%20count%20%7C%0A%09first%20%3A%3D%20self%20truncated.%0A%09last%20%3A%3D%20aNumber%20truncated%20+%201.%0A%09count%20%3A%3D%201.%0A%09array%20%3A%3D%20Array%20new.%0A%09%28last%20-%20first%29%20timesRepeat%3A%20%5B%0A%09%20%20%20%20array%20at%3A%20count%20put%3A%20first.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%09%20%20%20%20first%20%3A%3D%20first%20+%201%5D.%0A%09%5Earray'),
messageSends: ["truncated", unescape("+"), "new", "timesRepeat:", unescape("-"), "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_timesRepeat_'),
smalltalk.method({
selector: unescape('timesRepeat%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var integer=nil;
var count=nil;
integer=smalltalk.send(self, "_truncated", []);
count=(1);
(function(){while(!(function(){return ((($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]));})()) {(function(){smalltalk.send(aBlock, "_value", []);return count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;},
args: ["aBlock"],
source: unescape('timesRepeat%3A%20aBlock%0A%09%7C%20integer%20count%20%7C%0A%09integer%20%3A%3D%20self%20truncated.%0A%09count%20%3A%3D%201.%0A%09%5Bcount%20%3E%20self%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20aBlock%20value.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201%5D'),
messageSends: ["truncated", "whileFalse:", unescape("%3E"), "value", unescape("+")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_do_'),
smalltalk.method({
selector: unescape('to%3Ado%3A'),
category: 'enumerating',
fn: function (stop, aBlock){
var self=this;
var nextValue=nil;
nextValue=self;
(function(){while((function(){return ((($receiver = nextValue).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [nextValue]);return nextValue=((($receiver = nextValue).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})()}})();
return self;},
args: ["stop", "aBlock"],
source: unescape('to%3A%20stop%20do%3A%20aBlock%0A%09%22Evaluate%20aBlock%20for%20each%20number%20from%20self%20to%20aNumber.%22%0A%09%7C%20nextValue%20%7C%0A%09nextValue%20%3A%3D%20self.%0A%09%5BnextValue%20%3C%3D%20stop%5D%0A%09%09whileTrue%3A%20%0A%09%09%09%5BaBlock%20value%3A%20nextValue.%0A%09%09%09nextValue%20%3A%3D%20nextValue%20+%201%5D'),
messageSends: ["whileTrue:", unescape("%3C%3D"), "value:", unescape("+")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5E%27%28%27%2C%20self%20printString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return String(self);
return self;},
args: [],
source: unescape('printString%0A%09%3Creturn%20String%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_isNumber'),
smalltalk.method({
selector: unescape('isNumber'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isNumber%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
category: 'converting',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *self : smalltalk.send($receiver, "__star", [self])), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('atRandom%0A%20%20%20%20%5E%28Random%20new%20next%20*%20self%29%20truncated%20+%201'),
messageSends: [unescape("+"), "truncated", unescape("*"), "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__at'),
smalltalk.method({
selector: unescape('@'),
category: 'converting',
fn: function (aNumber){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, aNumber]);
return self;},
args: ["aNumber"],
source: unescape('@%20aNumber%0A%09%5EPoint%20x%3A%20self%20y%3A%20aNumber'),
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, self]);
return self;},
args: [],
source: unescape('asPoint%0A%09%5EPoint%20x%3A%20self%20y%3A%20self'),
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearInterval'),
smalltalk.method({
selector: unescape('clearInterval'),
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearInterval(Number(self));
return self;},
args: [],
source: unescape('clearInterval%0A%09%3CclearInterval%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_clearTimeout'),
smalltalk.method({
selector: unescape('clearTimeout'),
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearTimeout(Number(self));
return self;},
args: [],
source: unescape('clearTimeout%0A%09%3CclearTimeout%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_even'),
smalltalk.method({
selector: unescape('even'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send((0), "__eq", [smalltalk.send(self, "_\\\\", [(2)])]);
return self;},
args: [],
source: unescape('even%0A%09%5E%200%20%3D%20%28self%20%5C%5C%202%29'),
messageSends: [unescape("%3D"), unescape("%5C%5C%5C%5C")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_odd'),
smalltalk.method({
selector: unescape('odd'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;},
args: [],
source: unescape('odd%0A%09%5E%20self%20even%20not'),
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_negated'),
smalltalk.method({
selector: unescape('negated'),
category: 'arithmetic',
fn: function (){
var self=this;
return (0) - self;
return self;},
args: [],
source: unescape('negated%0A%09%5E0%20-%20self'),
messageSends: [unescape("-")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aNumber){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aNumber, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Number(self) === Number(aNumber);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aNumber"],
source: unescape('%3D%3D%20aNumber%0A%09aNumber%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%20%0A%09%3Creturn%20Number%28self%29%20%3D%3D%3D%20Number%28aNumber%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_printShowingDecimalPlaces_'),
smalltalk.method({
selector: unescape('printShowingDecimalPlaces%3A'),
category: 'printing',
fn: function (placesDesired){
var self=this;
return self.toFixed(placesDesired);
return self;},
args: ["placesDesired"],
source: unescape('printShowingDecimalPlaces%3A%20placesDesired%0A%09%3Creturn%20self.toFixed%28placesDesired%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_%5C'),
smalltalk.method({
selector: unescape('%5C'),
category: '',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;},
args: ["aNumber"],
source: unescape(''),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_'),
smalltalk.method({
selector: unescape('to%3Aby%3A'),
category: 'converting',
fn: function (stop, step){
var self=this;
var array=nil;
var value=nil;
var pos=nil;
value=self;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
pos=(1);
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(array, "_at_put_", [pos, value]);pos=((($receiver = pos).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})]));
return array;
return self;},
args: ["stop", "step"],
source: unescape('to%3A%20stop%20by%3A%20step%0A%09%7C%20array%20value%20pos%20%7C%0A%09value%20%3A%3D%20self.%0A%09array%20%3A%3D%20Array%20new.%0A%09pos%20%3A%3D%201.%0A%09step%20%3D%200%20ifTrue%3A%20%5Bself%20error%3A%20%27step%20must%20be%20non-zero%27%5D.%0A%09step%20%3C%200%0A%09%09ifTrue%3A%20%5B%5B%20value%20%3E%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09array%20at%3A%20pos%20put%3A%20value.%0A%09%20%20%20%20%09%09%09pos%20%3A%3D%20pos%20+%201.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D%0A%09%09ifFalse%3A%20%5B%5B%20value%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09array%20at%3A%20pos%20put%3A%20value.%0A%09%20%20%09%09%09pos%20%3A%3D%20pos%20+%201.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D.%0A%09%5Earray'),
messageSends: ["new", "ifTrue:", unescape("%3D"), "error:", "ifTrue:ifFalse:", unescape("%3C"), "whileTrue:", unescape("%3E%3D"), "at:put:", unescape("+"), unescape("%3C%3D")],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_to_by_do_'),
smalltalk.method({
selector: unescape('to%3Aby%3Ado%3A'),
category: 'enumerating',
fn: function (stop, step, aBlock){
var self=this;
var value=nil;
value=self;
((($receiver = smalltalk.send(step, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [unescape("step%20must%20be%20non-zero")]);})]));
((($receiver = ((($receiver = step).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})() : (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver >=stop : smalltalk.send($receiver, "__gt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();}), (function(){return (function(){while((function(){return ((($receiver = value).klass === smalltalk.Number) ? $receiver <=stop : smalltalk.send($receiver, "__lt_eq", [stop]));})()) {(function(){smalltalk.send(aBlock, "_value_", [value]);return value=((($receiver = value).klass === smalltalk.Number) ? $receiver +step : smalltalk.send($receiver, "__plus", [step]));})()}})();})]));
return self;},
args: ["stop", "step", "aBlock"],
source: unescape('to%3A%20stop%20by%3A%20step%20do%3A%20aBlock%0A%09%7C%20value%20%7C%0A%09value%20%3A%3D%20self.%0A%09step%20%3D%200%20ifTrue%3A%20%5Bself%20error%3A%20%27step%20must%20be%20non-zero%27%5D.%0A%09step%20%3C%200%0A%09%09ifTrue%3A%20%5B%5B%20value%20%3E%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09aBlock%20value%3A%20value.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D%0A%09%09ifFalse%3A%20%5B%5B%20value%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0A%09%20%20%20%20%09%09%09aBlock%20value%3A%20value.%0A%09%20%20%20%20%09%09%09value%20%3A%3D%20value%20+%20step%5D%5D'),
messageSends: ["ifTrue:", unescape("%3D"), "error:", "ifTrue:ifFalse:", unescape("%3C"), "whileTrue:", unescape("%3E%3D"), "value:", unescape("+"), unescape("%3C%3D")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(self, "_copy", []);
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_copy'),
smalltalk.method({
selector: unescape('copy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('copy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_%5C%5C'),
smalltalk.method({
selector: unescape('%5C%5C'),
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;},
args: ["aNumber"],
source: unescape('%5C%5C%20aNumber%0A%09%3Creturn%20self%20%25%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_sqrt'),
smalltalk.method({
selector: unescape('sqrt'),
category: 'arithmetic',
fn: function (){
var self=this;
return Math.sqrt(self);
return self;},
args: [],
source: unescape('sqrt%0A%09%3Creturn%20Math.sqrt%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
unescape('_squared'),
smalltalk.method({
selector: unescape('squared'),
category: 'arithmetic',
fn: function (){
var self=this;
return self * self;
return self;},
args: [],
source: unescape('squared%0A%09%5Eself%20*%20self'),
messageSends: [unescape("*")],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
unescape('_pi'),
smalltalk.method({
selector: unescape('pi'),
category: 'instance creation',
fn: function (){
var self=this;
return Math.PI;
return self;},
args: [],
source: unescape('pi%0A%09%3Creturn%20Math.PI%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_compiledSource'),
smalltalk.method({
selector: unescape('compiledSource'),
category: 'accessing',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('compiledSource%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue_'),
smalltalk.method({
selector: unescape('whileTrue%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;},
args: ["aBlock"],
source: unescape('whileTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse_'),
smalltalk.method({
selector: unescape('whileFalse%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;},
args: ["aBlock"],
source: unescape('whileFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28%21self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'evaluating',
fn: function (){
var self=this;
return self();;
return self;},
args: [],
source: unescape('value%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'evaluating',
fn: function (anArg){
var self=this;
return self(anArg);;
return self;},
args: ["anArg"],
source: unescape('value%3A%20anArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28anArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3A'),
category: 'evaluating',
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;},
args: ["firstArg", "secondArg"],
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_value_value_value_'),
smalltalk.method({
selector: unescape('value%3Avalue%3Avalue%3A'),
category: 'evaluating',
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;},
args: ["firstArg", "secondArg", "thirdArg"],
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%20value%3A%20thirdArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%2C%20thirdArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithPossibleArguments_'),
smalltalk.method({
selector: unescape('valueWithPossibleArguments%3A'),
category: 'evaluating',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;},
args: ["aCollection"],
source: unescape('valueWithPossibleArguments%3A%20aCollection%0A%09%3Creturn%20self.apply%28null%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'error handling',
fn: function (anErrorClass, aBlock){
var self=this;
smalltalk.send(self, "_try_catch_", [self, (function(error){return ((($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]));})]);
return self;},
args: ["anErrorClass", "aBlock"],
source: unescape('on%3A%20anErrorClass%20do%3A%20aBlock%0A%09self%20try%3A%20self%20catch%3A%20%5B%3Aerror%20%7C%0A%09%20%20%20%20%28error%20isKindOf%3A%20anErrorClass%29%20%0A%09%20%20%20%20%20ifTrue%3A%20%5BaBlock%20value%3A%20error%5D%0A%09%20%20%20%20%20ifFalse%3A%20%5Berror%20signal%5D%5D'),
messageSends: ["try:catch:", "ifTrue:ifFalse:", "isKindOf:", "value:", "signal"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithTimeout_'),
smalltalk.method({
selector: unescape('valueWithTimeout%3A'),
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;},
args: ["aNumber"],
source: unescape('valueWithTimeout%3A%20aNumber%0A%09%3Creturn%20setTimeout%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_valueWithInterval_'),
smalltalk.method({
selector: unescape('valueWithInterval%3A'),
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;},
args: ["aNumber"],
source: unescape('valueWithInterval%3A%20aNumber%0A%09%3Creturn%20setInterval%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileFalse'),
smalltalk.method({
selector: unescape('whileFalse'),
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('whileFalse%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileFalse%3A%20%5B%5D'),
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_whileTrue'),
smalltalk.method({
selector: unescape('whileTrue'),
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('whileTrue%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileTrue%3A%20%5B%5D'),
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'evaluating',
fn: function (){
var self=this;
return new self();
return self;},
args: [],
source: unescape('new%0A%09%22Use%20the%20receiver%20as%20a%20JS%20constructor.%20%0A%09*Do%20not*%20use%20this%20method%20to%20instanciate%20Smalltalk%20objects%21%22%0A%09%3Creturn%20new%20self%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_applyTo_arguments_'),
smalltalk.method({
selector: unescape('applyTo%3Aarguments%3A'),
category: 'evaluating',
fn: function (anObject, aCollection){
var self=this;
return self.apply(anObject, aCollection);
return self;},
args: ["anObject", "aCollection"],
source: unescape('applyTo%3A%20anObject%20arguments%3A%20aCollection%0A%09%3Creturn%20self.apply%28anObject%2C%20aCollection%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_timeToRun'),
smalltalk.method({
selector: unescape('timeToRun'),
category: 'evaluating',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [self]);
return self;},
args: [],
source: unescape('timeToRun%0A%09%22Answer%20the%20number%20of%20milliseconds%20taken%20to%20execute%20this%20block.%22%0A%0A%09%5E%20Date%20millisecondsToRun%3A%20self'),
messageSends: ["millisecondsToRun:"],
referencedClasses: ["Date"]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
unescape('_numArgs'),
smalltalk.method({
selector: unescape('numArgs'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('numArgs%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return Boolean(self == true) == aBoolean;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aBoolean"],
source: unescape('%3D%20aBoolean%0A%09aBoolean%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%20aBoolean%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_'),
smalltalk.method({
selector: unescape('ifTrue%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;},
args: ["aBlock"],
source: unescape('ifTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%5D'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_'),
smalltalk.method({
selector: unescape('ifFalse%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifFalse_ifTrue_'),
smalltalk.method({
selector: unescape('ifFalse%3AifTrue%3A'),
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifFalse%3A%20aBlock%20ifTrue%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20anotherBlock%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_ifTrue_ifFalse_'),
smalltalk.method({
selector: unescape('ifTrue%3AifFalse%3A'),
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;

	    if(self == true) {
		return aBlock();
	    } else {
		return anotherBlock();
	    }
	;
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifTrue%3A%20aBlock%20ifFalse%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_and_'),
smalltalk.method({
selector: unescape('and%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;},
args: ["aBlock"],
source: unescape('and%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20aBlock%0A%09%20%20%20%20ifFalse%3A%20%5Bfalse%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_or_'),
smalltalk.method({
selector: unescape('or%3A'),
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('or%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_not'),
smalltalk.method({
selector: unescape('not'),
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.send(self, "__eq", [false]);
return self;},
args: [],
source: unescape('not%0A%09%5Eself%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('printString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_%26'),
smalltalk.method({
selector: unescape('%26'),
category: 'controlling',
fn: function (aBoolean){
var self=this;

	    if(self == true) {
		return aBoolean;
	    } else {
		return false;
	    }
	;
return self;},
args: ["aBoolean"],
source: unescape('%26%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20false%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('_%7C'),
smalltalk.method({
selector: unescape('%7C'),
category: 'controlling',
fn: function (aBoolean){
var self=this;

	    if(self == true) {
		return true;
	    } else {
		return aBoolean;
	    }
	;
return self;},
args: ["aBoolean"],
source: unescape('%7C%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20true%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aBoolean){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aBoolean, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return Boolean(self == true) === Boolean(aBoolean == true);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aBoolean"],
source: unescape('%3D%3D%20aBoolean%0A%09aBoolean%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%3D%20Boolean%28aBoolean%20%3D%3D%20true%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel');
smalltalk.Date.comment=unescape('The%20Date%20class%20is%20used%20to%20work%20with%20dates%20and%20times.')
smalltalk.addMethod(
unescape('_year'),
smalltalk.method({
selector: unescape('year'),
category: 'accessing',
fn: function (){
var self=this;
return self.getFullYear();
return self;},
args: [],
source: unescape('year%0A%09%3Creturn%20self.getFullYear%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month'),
smalltalk.method({
selector: unescape('month'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMonth() + 1;
return self;},
args: [],
source: unescape('month%0A%09%3Creturn%20self.getMonth%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_month_'),
smalltalk.method({
selector: unescape('month%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self;},
args: ["aNumber"],
source: unescape('month%3A%20aNumber%0A%09%3Cself.setMonth%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day'),
smalltalk.method({
selector: unescape('day'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_dayOfWeek", []);
return self;},
args: [],
source: unescape('day%0A%09%5Eself%20dayOfWeek'),
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek'),
smalltalk.method({
selector: unescape('dayOfWeek'),
category: 'accessing',
fn: function (){
var self=this;
return self.getDay() + 1;
return self;},
args: [],
source: unescape('dayOfWeek%0A%09%3Creturn%20self.getDay%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfWeek_'),
smalltalk.method({
selector: unescape('dayOfWeek%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self;},
args: ["aNumber"],
source: unescape('dayOfWeek%3A%20aNumber%0A%09%3Creturn%20self.setDay%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_day_'),
smalltalk.method({
selector: unescape('day%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_day_", [aNumber]);
return self;},
args: ["aNumber"],
source: unescape('day%3A%20aNumber%0A%09self%20day%3A%20aNumber'),
messageSends: ["day:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_year_'),
smalltalk.method({
selector: unescape('year%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setFullYear(aNumber);
return self;},
args: ["aNumber"],
source: unescape('year%3A%20aNumber%0A%09%3Cself.setFullYear%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth'),
smalltalk.method({
selector: unescape('dayOfMonth'),
category: 'accessing',
fn: function (){
var self=this;
return self.getDate();
return self;},
args: [],
source: unescape('dayOfMonth%0A%09%3Creturn%20self.getDate%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_dayOfMonth_'),
smalltalk.method({
selector: unescape('dayOfMonth%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setDate(aNumber);
return self;},
args: ["aNumber"],
source: unescape('dayOfMonth%3A%20aNumber%0A%09%3Cself.setDate%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return self.toString();
return self;},
args: [],
source: unescape('asString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asMilliseconds'),
smalltalk.method({
selector: unescape('asMilliseconds'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_time", []);
return self;},
args: [],
source: unescape('asMilliseconds%0A%09%5Eself%20time'),
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time'),
smalltalk.method({
selector: unescape('time'),
category: 'accessing',
fn: function (){
var self=this;
return self.getTime();
return self;},
args: [],
source: unescape('time%0A%09%3Creturn%20self.getTime%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_time_'),
smalltalk.method({
selector: unescape('time%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setTime(aNumber);
return self;},
args: ["aNumber"],
source: unescape('time%3A%20aNumber%0A%09%3Cself.setTime%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asDateString'),
smalltalk.method({
selector: unescape('asDateString'),
category: 'converting',
fn: function (){
var self=this;
return self.toDateString();
return self;},
args: [],
source: unescape('asDateString%0A%09%3Creturn%20self.toDateString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asTimeString'),
smalltalk.method({
selector: unescape('asTimeString'),
category: 'converting',
fn: function (){
var self=this;
return self.toTimeString();
return self;},
args: [],
source: unescape('asTimeString%0A%09%3Creturn%20self.toTimeString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asLocaleString'),
smalltalk.method({
selector: unescape('asLocaleString'),
category: 'converting',
fn: function (){
var self=this;
return self.toLocaleString();
return self;},
args: [],
source: unescape('asLocaleString%0A%09%3Creturn%20self.toLocaleString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asMilliseconds", []);
return self;},
args: [],
source: unescape('asNumber%0A%09%5Eself%20asMilliseconds'),
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours_'),
smalltalk.method({
selector: unescape('hours%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setHours(aNumber);
return self;},
args: ["aNumber"],
source: unescape('hours%3A%20aNumber%0A%09%3Cself.setHours%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes_'),
smalltalk.method({
selector: unescape('minutes%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMinutes(aNumber);
return self;},
args: ["aNumber"],
source: unescape('minutes%3A%20aNumber%0A%09%3Cself.setMinutes%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds_'),
smalltalk.method({
selector: unescape('seconds%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setSeconds(aNumber);
return self;},
args: ["aNumber"],
source: unescape('seconds%3A%20aNumber%0A%09%3Cself.setSeconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds_'),
smalltalk.method({
selector: unescape('milliseconds%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self;},
args: ["aNumber"],
source: unescape('milliseconds%3A%20aNumber%0A%09%3Cself.setMilliseconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_hours'),
smalltalk.method({
selector: unescape('hours'),
category: 'accessing',
fn: function (){
var self=this;
return self.getHours();
return self;},
args: [],
source: unescape('hours%0A%09%3Creturn%20self.getHours%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_minutes'),
smalltalk.method({
selector: unescape('minutes'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMinutes();
return self;},
args: [],
source: unescape('minutes%0A%09%3Creturn%20self.getMinutes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_seconds'),
smalltalk.method({
selector: unescape('seconds'),
category: 'accessing',
fn: function (){
var self=this;
return self.getSeconds();
return self;},
args: [],
source: unescape('seconds%0A%09%3Creturn%20self.getSeconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_milliseconds'),
smalltalk.method({
selector: unescape('milliseconds'),
category: 'accessing',
fn: function (){
var self=this;
return self.getMilliseconds();
return self;},
args: [],
source: unescape('milliseconds%0A%09%3Creturn%20self.getMilliseconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self < aDate;
return self;},
args: ["aDate"],
source: unescape('%3C%20aDate%0A%09%3Creturn%20self%20%3C%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self > aDate;
return self;},
args: ["aDate"],
source: unescape('%3E%20aDate%0A%09%3Creturn%20self%20%3E%3E%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self <= aDate;
return self;},
args: ["aDate"],
source: unescape('%3C%3D%20aDate%0A%09%3Creturn%20self%20%3C%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aDate){
var self=this;
return self >= aDate;
return self;},
args: ["aDate"],
source: unescape('%3E%3D%20aDate%0A%09%3Creturn%20self%20%3E%3E%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self - aDate;
return self;},
args: ["aDate"],
source: unescape('-%20aDate%0A%09%3Creturn%20self%20-%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self + aDate;
return self;},
args: ["aDate"],
source: unescape('+%20aDate%0A%09%3Creturn%20self%20+%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
unescape('_new_'),
smalltalk.method({
selector: unescape('new%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return new Date(anObject);
return self;},
args: ["anObject"],
source: unescape('new%3A%20anObject%0A%09%3Creturn%20new%20Date%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_new_", [aString]);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%22Example%3A%20Date%20fromString%28%272011/04/15%2000%3A00%3A00%27%29%22%0A%09%5Eself%20new%3A%20aString'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromSeconds_'),
smalltalk.method({
selector: unescape('fromSeconds%3A'),
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_fromMilliseconds_", [((($receiver = aNumber).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)]))]);
return self;},
args: ["aNumber"],
source: unescape('fromSeconds%3A%20aNumber%0A%09%5Eself%20fromMilliseconds%3A%20aNumber%20*%201000'),
messageSends: ["fromMilliseconds:", unescape("*")],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_fromMilliseconds_'),
smalltalk.method({
selector: unescape('fromMilliseconds%3A'),
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_new_", [aNumber]);
return self;},
args: ["aNumber"],
source: unescape('fromMilliseconds%3A%20aNumber%0A%09%5Eself%20new%3A%20aNumber'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_today'),
smalltalk.method({
selector: unescape('today'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_new", []);
return self;},
args: [],
source: unescape('today%0A%09%5Eself%20new'),
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_now'),
smalltalk.method({
selector: unescape('now'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_today", []);
return self;},
args: [],
source: unescape('now%0A%09%5Eself%20today'),
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
unescape('_millisecondsToRun_'),
smalltalk.method({
selector: unescape('millisecondsToRun%3A'),
category: 'instance creation',
fn: function (aBlock){
var self=this;
var t=nil;
t=smalltalk.send((smalltalk.Date || Date), "_now", []);
smalltalk.send(aBlock, "_value", []);
return ((($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]));
return self;},
args: ["aBlock"],
source: unescape('millisecondsToRun%3A%20aBlock%0A%09%7C%20t%20%7C%0A%09t%20%3A%3D%20Date%20now.%0A%09aBlock%20value.%0A%09%5EDate%20now%20-%20t'),
messageSends: ["now", "value", unescape("-")],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, anotherString, nil]);
return self;},
args: ["aString", "anotherString"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20package%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_category_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Acategory%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_package_", [aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%22Kept%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_'),
smalltalk.method({
selector: unescape('ifNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, (function(){return nil;})]);
return self;},
args: ["aBlock"],
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifNil%3A%20aBlock%20ifNotNil%3A%20%5B%5D'),
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
args: ["aBlock"],
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNil_ifNotNil_'),
smalltalk.method({
selector: unescape('ifNil%3AifNotNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_ifNotNil_ifNil_'),
smalltalk.method({
selector: unescape('ifNotNil%3AifNil%3A'),
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_isNil'),
smalltalk.method({
selector: unescape('isNil'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isNil%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_notNil'),
smalltalk.method({
selector: unescape('notNil'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('notNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return "nil";
return self;},
args: [],
source: unescape('printString%0A%20%20%20%20%5E%27nil%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
unescape('_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('subclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_package_", [self, aString, aString2, aString3]);
return self;},
args: ["aString", "aString2", "aString3"],
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
return self;},
args: [],
source: unescape('new%0A%09%20%20%20%20self%20error%3A%20%27You%20cannot%20create%20new%20instances%20of%20UndefinedObject.%20Use%20nil%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('size%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_readStream'),
smalltalk.method({
selector: unescape('readStream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
args: [],
source: unescape('readStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_writeStream'),
smalltalk.method({
selector: unescape('writeStream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
args: [],
source: unescape('writeStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_stream'),
smalltalk.method({
selector: unescape('stream'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;},
args: [],
source: unescape('stream%0A%09%5Eself%20streamClass%20on%3A%20self'),
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;},
args: [],
source: unescape('streamClass%0A%09%5Eself%20class%20streamClass'),
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
category: 'adding/removing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;},
args: ["aCollection"],
source: unescape('addAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20add%3A%20each%5D.%0A%09%5EaCollection'),
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["aCollection"],
source: unescape('%2C%20aCollection%0A%09%5Eself%20copy%20%0A%09%20%20%20%20addAll%3A%20aCollection%3B%20%0A%09%20%20%20%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWith_'),
smalltalk.method({
selector: unescape('copyWith%3A'),
category: 'copying',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["anObject"],
source: unescape('copyWith%3A%20anObject%0A%09%5Eself%20copy%20add%3A%20anObject%3B%20yourself'),
messageSends: ["add:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithAll_'),
smalltalk.method({
selector: unescape('copyWithAll%3A'),
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
args: ["aCollection"],
source: unescape('copyWithAll%3A%20aCollection%0A%09%5Eself%20copy%20addAll%3A%20aCollection%3B%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
category: 'converting',
fn: function (){
var self=this;
var array=nil;
var index=nil;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
index=(0);
smalltalk.send(self, "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));return smalltalk.send(array, "_at_put_", [index, each]);})]);
return array;
return self;},
args: [],
source: unescape('asArray%0A%09%7C%20array%20index%20%7C%0A%09array%20%3A%3D%20Array%20new.%0A%09index%20%3A%3D%200.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20array%20at%3A%20index%20put%3A%20each%5D.%0A%09%5Earray'),
messageSends: ["new", "do:", unescape("+"), "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;},
args: ["aBlock"],
source: unescape('collect%3A%20aBlock%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20newCollection%20add%3A%20%28aBlock%20value%3A%20each%29%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_'),
smalltalk.method({
selector: unescape('detect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["aBlock"],
source: unescape('detect%3A%20aBlock%0A%09%5Eself%20detect%3A%20aBlock%20ifNone%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%3C%0A%09%09for%28var%20i%20%3D%200%3B%20i%20%3C%20self.length%3B%20i++%29%0A%09%09%09if%28aBlock%28self%5Bi%5D%29%29%0A%09%09%09%09return%20self%5Bi%5D%3B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_do_separatedBy_'),
smalltalk.method({
selector: unescape('do%3AseparatedBy%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
var first=nil;
first=true;
smalltalk.send(self, "_do_", [(function(each){((($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return first=false;})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return first=false;}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]));return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0A%20%20%20%20%09%7C%20first%20%7C%0A%20%20%20%20%09first%20%3A%3D%20true.%0A%20%20%20%20%09self%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20first%0A%20%20%20%20%09%09ifTrue%3A%20%5Bfirst%20%3A%3D%20false%5D%0A%20%20%20%20%09%09ifFalse%3A%20%5BanotherBlock%20value%5D.%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%5D'),
messageSends: ["do:", "ifTrue:ifFalse:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_inject_into_'),
smalltalk.method({
selector: unescape('inject%3Ainto%3A'),
category: 'enumerating',
fn: function (anObject, aBlock){
var self=this;
var result=nil;
result=anObject;
smalltalk.send(self, "_do_", [(function(each){return result=smalltalk.send(aBlock, "_value_value_", [result, each]);})]);
return result;
return self;},
args: ["anObject", "aBlock"],
source: unescape('inject%3A%20anObject%20into%3A%20aBlock%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20anObject.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%20%20%20%20result%20%3A%3D%20aBlock%20value%3A%20result%20value%3A%20each%5D.%0A%09%5Eresult'),
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_reject_'),
smalltalk.method({
selector: unescape('reject%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;},
args: ["aBlock"],
source: unescape('reject%3A%20aBlock%0A%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20%3D%20false%5D'),
messageSends: ["select:", unescape("%3D"), "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []);
smalltalk.send(self, "_do_", [(function(each){return ((($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]));})]);
return smalltalk.send(stream, "_contents", []);
return self;},
args: ["aBlock"],
source: unescape('select%3A%20aBlock%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09stream%20nextPut%3A%20each%5D%5D.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_errorNotFound'),
smalltalk.method({
selector: unescape('errorNotFound'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;},
args: [],
source: unescape('errorNotFound%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'testing',
fn: function (anObject){
var self=this;

		var i = self.length;
		while (i--) {
			if (smalltalk.send(self[i], "__eq", [anObject])) {return true;}	
		}
		return false
	;
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%3C%0A%09%09var%20i%20%3D%20self.length%3B%0A%09%09while%20%28i--%29%20%7B%0A%09%09%09if%20%28smalltalk.send%28self%5Bi%5D%2C%20%22__eq%22%2C%20%5BanObject%5D%29%29%20%7Breturn%20true%3B%7D%09%0A%09%09%7D%0A%09%09return%20false%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_notEmpty'),
smalltalk.method({
selector: unescape('notEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;},
args: [],
source: unescape('notEmpty%0A%09%5Eself%20isEmpty%20not'),
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%20%20%20%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_asSet'),
smalltalk.method({
selector: unescape('asSet'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Set || Set), "_withAll_", [self]);
return self;},
args: [],
source: unescape('asSet%0A%09%5ESet%20withAll%3A%20self'),
messageSends: ["withAll:"],
referencedClasses: ["Set"]
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifNotEmpty_'),
smalltalk.method({
selector: unescape('ifNotEmpty%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_notEmpty", []), "_ifTrue_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifNotEmpty%3A%20aBlock%0A%09self%20notEmpty%20ifTrue%3A%20aBlock.'),
messageSends: ["ifTrue:", "notEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_ifEmpty_'),
smalltalk.method({
selector: unescape('ifEmpty%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_ifTrue_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('ifEmpty%3A%20aBlock%0A%09self%20isEmpty%20ifTrue%3A%20aBlock.'),
messageSends: ["ifTrue:", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_copyWithoutAll_'),
smalltalk.method({
selector: unescape('copyWithoutAll%3A'),
category: 'copying',
fn: function (aCollection){
var self=this;
return smalltalk.send(self, "_reject_", [(function(each){return smalltalk.send(aCollection, "_includes_", [each]);})]);
return self;},
args: ["aCollection"],
source: unescape('copyWithoutAll%3A%20aCollection%0A%09%22Answer%20a%20copy%20of%20the%20receiver%20that%20does%20not%20contain%20any%20elements%20%0A%09equal%20to%20those%20in%20aCollection.%22%0A%0A%09%5E%20self%20reject%3A%20%5B%3Aeach%20%7C%20aCollection%20includes%3A%20each%5D'),
messageSends: ["reject:", "includes:"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
return self;},
args: [],
source: unescape('streamClass%0A%09%20%20%20%20%5EStream'),
messageSends: [],
referencedClasses: ["Stream"]
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, anotherObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject", "anotherObject"],
source: unescape('with%3A%20anObject%20with%3A%20anotherObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09add%3A%20anotherObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_with_with_with_'),
smalltalk.method({
selector: unescape('with%3Awith%3Awith%3A'),
category: 'instance creation',
fn: function (firstObject, secondObject, thirdObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["firstObject", "secondObject", "thirdObject"],
source: unescape('with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20firstObject%3B%0A%09%09add%3A%20secondObject%3B%0A%09%09add%3A%20thirdObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
unescape('_withAll_'),
smalltalk.method({
selector: unescape('withAll%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aCollection"],
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09addAll%3A%20aCollection%3B%0A%09%09yourself'),
messageSends: ["addAll:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%5Eself%20at%3A%20anIndex%20ifAbsent%3A%20%5B%0A%09%20%20%20%20self%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_first'),
smalltalk.method({
selector: unescape('first'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;},
args: [],
source: unescape('first%0A%09%5Eself%20at%3A%201'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_fourth'),
smalltalk.method({
selector: unescape('fourth'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;},
args: [],
source: unescape('fourth%0A%09%5Eself%20at%3A%204'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_last'),
smalltalk.method({
selector: unescape('last'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('last%0A%09%5Eself%20at%3A%20self%20size'),
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_second'),
smalltalk.method({
selector: unescape('second'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;},
args: [],
source: unescape('second%0A%09%5Eself%20at%3A%202'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_third'),
smalltalk.method({
selector: unescape('third'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;},
args: [],
source: unescape('third%0A%09%5Eself%20at%3A%203'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_removeLast'),
smalltalk.method({
selector: unescape('removeLast'),
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;},
args: [],
source: unescape('removeLast%0A%09self%20remove%3A%20self%20last'),
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_addLast_'),
smalltalk.method({
selector: unescape('addLast%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('addLast%3A%20anObject%0A%09self%20add%3A%20anObject'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_withIndexDo_'),
smalltalk.method({
selector: unescape('withIndexDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;},
args: ["aBlock"],
source: unescape('withIndexDo%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%2C%20i+1%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButFirst'),
smalltalk.method({
selector: unescape('allButFirst'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('allButFirst%0A%09%5Eself%20copyFrom%3A%202%20to%3A%20self%20size'),
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_allButLast'),
smalltalk.method({
selector: unescape('allButLast'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), ((($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))]);
return self;},
args: [],
source: unescape('allButLast%0A%09%5Eself%20copyFrom%3A%201%20to%3A%20self%20size%20-%201'),
messageSends: ["copyFrom:to:", unescape("-"), "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_'),
smalltalk.method({
selector: unescape('indexOf%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["anObject"],
source: unescape('indexOf%3A%20anObject%0A%09%5Eself%20indexOf%3A%20anObject%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AifAbsent%3A'),
category: 'accessing',
fn: function (anObject, aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;},
args: ["anObject", "aBlock"],
source: unescape('indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7B%0A%09%09%09if%28self%5Bi%5D.__eq%28anObject%29%29%20%7Breturn%20i+1%7D%0A%09%09%7D%0A%09%09return%20aBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_startingAt_ifAbsent_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3AifAbsent%3A'),
category: 'accessing',
fn: function (anObject, start, aBlock){
var self=this;

		for(var i=start-1;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;},
args: ["anObject", "start", "aBlock"],
source: unescape('indexOf%3A%20anObject%20startingAt%3A%20start%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20i%3Dstart-1%3Bi%3Cself.length%3Bi++%29%7B%0A%09%09%09if%28self%5Bi%5D.__eq%28anObject%29%29%20%7Breturn%20i+1%7D%0A%09%09%7D%0A%09%09return%20aBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_indexOf_startingAt_'),
smalltalk.method({
selector: unescape('indexOf%3AstartingAt%3A'),
category: 'accessing',
fn: function (anObject, start){
var self=this;
return smalltalk.send(self, "_indexOf_startingAt_ifAbsent_", [anObject, start, (function(){return (0);})]);
return self;},
args: ["anObject", "start"],
source: unescape('indexOf%3A%20anObject%20startingAt%3A%20start%0A%09%22Answer%20the%20index%20of%20the%20first%20occurence%20of%20anElement%20after%20start%0A%09within%20the%20receiver.%20If%20the%20receiver%20does%20not%20contain%20anElement%2C%20%0A%09answer%200.%22%0A%09%5Eself%20indexOf%3A%20anObject%20startingAt%3A%20start%20ifAbsent%3A%20%5B0%5D'),
messageSends: ["indexOf:startingAt:ifAbsent:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('reversed%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(self, "_size", []), "_atRandom", [])]);
return self;},
args: [],
source: unescape('atRandom%0A%09%5E%20self%20at%3A%20self%20size%20atRandom'),
messageSends: ["at:", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('String', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
return String(self) == aString;
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('%3D%20aString%0A%09aString%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20String%28self%29%20%3D%3D%20aString%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return self[anIndex - 1];
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
(($receiver = smalltalk.send(self, "_at_", [anIndex])) == nil || $receiver == undefined) ? (function(){return aBlock;})() : $receiver;
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%20%20%20%20%09%28self%20at%3A%20anIndex%29%20ifNil%3A%20%5BaBlock%5D'),
messageSends: ["ifNil:", "at:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_escaped'),
smalltalk.method({
selector: unescape('escaped'),
category: 'accessing',
fn: function (){
var self=this;
return escape(self);
return self;},
args: [],
source: unescape('escaped%0A%09%3Creturn%20escape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_unescaped'),
smalltalk.method({
selector: unescape('unescaped'),
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
return self;},
args: [],
source: unescape('unescaped%0A%09%3Creturn%20unescape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aString){
var self=this;
return self + aString;
return self;},
args: ["aString"],
source: unescape('%2C%20aString%0A%09%3Creturn%20self%20+%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%3Creturn%20self.substring%28anIndex%20-%201%2C%20anotherIndex%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;},
args: [],
source: unescape('shallowCopy%0A%20%20%20%20%09%5Eself%20class%20fromString%3A%20self'),
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;},
args: [],
source: unescape('deepCopy%0A%20%20%20%20%09%5Eself%20shallowCopy'),
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asSelector'),
smalltalk.method({
selector: unescape('asSelector'),
category: 'converting',
fn: function (){
var self=this;
var selector=nil;
selector=smalltalk.send("_", "__comma", [self]);
selector=smalltalk.send(selector, "_replace_with_", [":", "_"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B+%5D"), "_plus"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("-"), "_minus"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B*%5D"), "_star"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B/%5D"), "_slash"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3E"), "_gt"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3C"), "_lt"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%3D"), "_eq"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%2C"), "_comma"]);
selector=smalltalk.send(selector, "_replace_with_", [unescape("%5B@%5D"), "_at"]);
return selector;
return self;},
args: [],
source: unescape('asSelector%0A%09%22If%20you%20change%20this%20method%2C%20change%20smalltalk.convertSelector%20too%20%28see%20js/boot.js%20file%29%22%0A%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20%27_%27%2C%20self.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3A%27%20with%3A%20%27_%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B+%5D%27%20with%3A%20%27_plus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27-%27%20with%3A%20%27_minus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B*%5D%27%20with%3A%20%27_star%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B/%5D%27%20with%3A%20%27_slash%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3E%27%20with%3A%20%27_gt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3C%27%20with%3A%20%27_lt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3D%27%20with%3A%20%27_eq%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%2C%27%20with%3A%20%27_comma%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B@%5D%27%20with%3A%20%27_at%27.%0A%09%5Eselector'),
messageSends: [unescape("%2C"), "replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	;
return self;},
args: [],
source: unescape('asJavascript%0A%09%3C%0A%09%09if%28self.search%28/%5E%5Ba-zA-Z0-9_%3A.%24%20%5D*%24/%29%20%3D%3D%20-1%29%0A%09%09%09return%20%22unescape%28%5C%22%22%20+%20escape%28self%29%20+%20%22%5C%22%29%22%3B%0A%09%09else%0A%09%09%09return%20%22%5C%22%22%20+%20self%20+%20%22%5C%22%22%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_replace_with_'),
smalltalk.method({
selector: unescape('replace%3Awith%3A'),
category: 'regular expressions',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;},
args: ["aString", "anotherString"],
source: unescape('replace%3A%20aString%20with%3A%20anotherString%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20aString%20flag%3A%20%27g%27%29%20with%3A%20anotherString'),
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_replaceRegexp_with_'),
smalltalk.method({
selector: unescape('replaceRegexp%3Awith%3A'),
category: 'regular expressions',
fn: function (aRegexp, aString){
var self=this;
return self.replace(aRegexp, aString);
return self;},
args: ["aRegexp", "aString"],
source: unescape('replaceRegexp%3A%20aRegexp%20with%3A%20aString%0A%09%3Creturn%20self.replace%28aRegexp%2C%20aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_tokenize_'),
smalltalk.method({
selector: unescape('tokenize%3A'),
category: 'converting',
fn: function (aString){
var self=this;
return self.split(aString);
return self;},
args: ["aString"],
source: unescape('tokenize%3A%20aString%0A%09%3Creturn%20self.split%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_match_'),
smalltalk.method({
selector: unescape('match%3A'),
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
return self;},
args: ["aRegexp"],
source: unescape('match%3A%20aRegexp%0A%09%3Creturn%20self.search%28aRegexp%29%20%21%3D%20-1%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asString%0A%20%20%20%20%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asNumber'),
smalltalk.method({
selector: unescape('asNumber'),
category: 'converting',
fn: function (){
var self=this;
return Number(self);
return self;},
args: [],
source: unescape('asNumber%0A%09%3Creturn%20Number%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_errorReadOnly'),
smalltalk.method({
selector: unescape('errorReadOnly'),
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
return self;},
args: [],
source: unescape('errorReadOnly%0A%20%20%20%20%09self%20error%3A%20%27Object%20is%20read-only%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [self]), "__comma", [unescape("%27")]);
return self;},
args: [],
source: unescape('printString%0A%20%20%20%20%09%5E%27%27%27%27%2C%20self%2C%20%27%27%27%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_printNl'),
smalltalk.method({
selector: unescape('printNl'),
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
args: [],
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_isString'),
smalltalk.method({
selector: unescape('isString'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isString%0A%20%20%20%20%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt'),
smalltalk.method({
selector: unescape('%3E'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) > aString;
return self;},
args: ["aString"],
source: unescape('%3E%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt'),
smalltalk.method({
selector: unescape('%3C'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) < aString;
return self;},
args: ["aString"],
source: unescape('%3C%20aString%0A%09%3Creturn%20String%28self%29%20%3C%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__gt_eq'),
smalltalk.method({
selector: unescape('%3E%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) >= aString;
return self;},
args: ["aString"],
source: unescape('%3E%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__lt_eq'),
smalltalk.method({
selector: unescape('%3C%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) <= aString;
return self;},
args: ["aString"],
source: unescape('%3C%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3C%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft_'),
smalltalk.method({
selector: unescape('trimLeft%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5E%5B"), "__comma", [separators]), "__comma", [unescape("%5D+")]), "g"]), ""]);
return self;},
args: ["separators"],
source: unescape('trimLeft%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5E%5B%27%2C%20separators%2C%20%27%5D+%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight_'),
smalltalk.method({
selector: unescape('trimRight%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [separators]), "__comma", [unescape("%5D+%24")]), "g"]), ""]);
return self;},
args: ["separators"],
source: unescape('trimRight%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5B%27%2C%20separators%2C%20%27%5D+%24%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: ["RegularExpression"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimLeft'),
smalltalk.method({
selector: unescape('trimLeft'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimLeft_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimLeft%0A%09%5Eself%20trimLeft%3A%20%27%5Cs%27'),
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimRight'),
smalltalk.method({
selector: unescape('trimRight'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimRight_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimRight%0A%09%5Eself%20trimRight%3A%20%27%5Cs%27'),
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth'),
smalltalk.method({
selector: unescape('trimBoth'),
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimBoth_", [unescape("%5Cs")]);
return self;},
args: [],
source: unescape('trimBoth%0A%09%5Eself%20trimBoth%3A%20%27%5Cs%27'),
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_trimBoth_'),
smalltalk.method({
selector: unescape('trimBoth%3A'),
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;},
args: ["separators"],
source: unescape('trimBoth%3A%20separators%0A%0A%20%20%20%20%09%5E%28self%20trimLeft%3A%20separators%29%20trimRight%3A%20separators'),
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asLowercase'),
smalltalk.method({
selector: unescape('asLowercase'),
category: 'converting',
fn: function (){
var self=this;
return self.toLowerCase();
return self;},
args: [],
source: unescape('asLowercase%0A%09%3Creturn%20self.toLowerCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asUppercase'),
smalltalk.method({
selector: unescape('asUppercase'),
category: 'converting',
fn: function (){
var self=this;
return self.toUpperCase();
return self;},
args: [],
source: unescape('asUppercase%0A%09%3Creturn%20self.toUpperCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
category: 'split join',
fn: function (aCollection){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;},
args: ["aCollection"],
source: unescape('join%3A%20aCollection%20%0A%09%5E%20String%0A%09%09streamContents%3A%20%5B%3Astream%20%7C%20aCollection%0A%09%09%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%20asString%5D%20%0A%09%09%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20self%5D%5D'),
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_includesSubString_'),
smalltalk.method({
selector: unescape('includesSubString%3A'),
category: 'testing',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
return self;},
args: ["subString"],
source: unescape('includesSubString%3A%20subString%0A%09%3C%20return%20self.indexOf%28subString%29%20%21%3D%20-1%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asciiValue'),
smalltalk.method({
selector: unescape('asciiValue'),
category: 'accessing',
fn: function (){
var self=this;
return self.charCodeAt(0);;
return self;},
args: [],
source: unescape('asciiValue%0A%09%3Creturn%20self.charCodeAt%280%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineIndicesDo_'),
smalltalk.method({
selector: unescape('lineIndicesDo%3A'),
category: 'split join',
fn: function (aBlock){
var self=this;
try{var cr=nil;
var lf=nil;
var start=nil;
var sz=nil;
var nextLF=nil;
var nextCR=nil;
start=(1);
sz=smalltalk.send(self, "_size", []);
cr=smalltalk.send((smalltalk.String || String), "_cr", []);
nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, (1)]);
lf=smalltalk.send((smalltalk.String || String), "_lf", []);
nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, (1)]);
(function(){while((function(){return ((($receiver = start).klass === smalltalk.Number) ? $receiver <=sz : smalltalk.send($receiver, "__lt_eq", [sz]));})()) {(function(){((($receiver = smalltalk.send(smalltalk.send(nextLF, "__eq", [(0)]), "_and_", [(function(){return smalltalk.send(nextCR, "__eq", [(0)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, sz, sz]);return (function(){throw({name: 'stReturn', selector: '_lineIndicesDo_', fn: function(){return self}})})();})]));return ((($receiver = smalltalk.send(smalltalk.send(nextCR, "__eq", [(0)]), "_or_", [(function(){return smalltalk.send((0) < nextLF, "_and_", [(function(){return ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver <nextCR : smalltalk.send($receiver, "__lt", [nextCR]));})]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextLF).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){return ((($receiver = smalltalk.send((1) + nextCR, "__eq", [nextLF])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);})() : (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextLF]);start=(1) + nextLF;nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);return nextLF=smalltalk.send(self, "_indexOf_startingAt_", [lf, start]);}), (function(){smalltalk.send(aBlock, "_value_value_value_", [start, ((($receiver = nextCR).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), nextCR]);start=(1) + nextCR;return nextCR=smalltalk.send(self, "_indexOf_startingAt_", [cr, start]);})]));})]));})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineIndicesDo_'){return e.fn()} throw(e)}},
args: ["aBlock"],
source: unescape('lineIndicesDo%3A%20aBlock%0A%09%22execute%20aBlock%20with%203%20arguments%20for%20each%20line%3A%0A%09-%20start%20index%20of%20line%0A%09-%20end%20index%20of%20line%20without%20line%20delimiter%0A%09-%20end%20index%20of%20line%20including%20line%20delimiter%28s%29%20CR%2C%20LF%20or%20CRLF%22%0A%09%0A%09%7C%20cr%20lf%20start%20sz%20nextLF%20nextCR%20%7C%0A%09start%20%3A%3D%201.%0A%09sz%20%3A%3D%20self%20size.%0A%09cr%20%3A%3D%20String%20cr.%0A%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%201.%0A%09lf%20%3A%3D%20String%20lf.%0A%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%201.%0A%09%5B%20start%20%3C%3D%20sz%20%5D%20whileTrue%3A%20%5B%0A%09%09%28nextLF%20%3D%200%20and%3A%20%5B%20nextCR%20%3D%200%20%5D%29%0A%09%09%09ifTrue%3A%20%5B%20%22No%20more%20CR%2C%20nor%20LF%2C%20the%20string%20is%20over%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20sz%20value%3A%20sz.%0A%09%09%09%09%09%5Eself%20%5D.%0A%09%09%28nextCR%20%3D%200%20or%3A%20%5B%200%20%3C%20nextLF%20and%3A%20%5B%20nextLF%20%3C%20nextCR%20%5D%20%5D%29%0A%09%09%09ifTrue%3A%20%5B%20%22Found%20a%20LF%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextLF%20-%201%20value%3A%20nextLF.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextLF.%0A%09%09%09%09%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%20start%20%5D%0A%09%09%09ifFalse%3A%20%5B%201%20+%20nextCR%20%3D%20nextLF%0A%09%09%09%09ifTrue%3A%20%5B%20%22Found%20a%20CR-LF%20pair%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextCR%20-%201%20value%3A%20nextLF.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextLF.%0A%09%09%09%09%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%20start.%0A%09%09%09%09%09nextLF%20%3A%3D%20self%20indexOf%3A%20lf%20startingAt%3A%20start%20%5D%0A%09%09%09%09ifFalse%3A%20%5B%20%22Found%20a%20CR%22%0A%09%09%09%09%09aBlock%20value%3A%20start%20value%3A%20nextCR%20-%201%20value%3A%20nextCR.%0A%09%09%09%09%09start%20%3A%3D%201%20+%20nextCR.%0A%09%09%09%09%09nextCR%20%3A%3D%20self%20indexOf%3A%20cr%20startingAt%3A%20start%20%5D%5D%5D'),
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", unescape("%3C%3D"), "ifTrue:", "and:", unescape("%3D"), "value:value:value:", "ifTrue:ifFalse:", "or:", unescape("%3C"), unescape("-"), unescape("+")],
referencedClasses: ["String"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_linesDo_'),
smalltalk.method({
selector: unescape('linesDo%3A'),
category: 'split join',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])]);})]);
return self;},
args: ["aBlock"],
source: unescape('linesDo%3A%20aBlock%0A%09%22Execute%20aBlock%20with%20each%20line%20in%20this%20string.%20The%20terminating%20line%0A%09delimiters%20CR%2C%20LF%20or%20CRLF%20pairs%20are%20not%20included%20in%20what%20is%20passed%20to%20aBlock%22%0A%0A%09self%20lineIndicesDo%3A%20%5B%3Astart%20%3AendWithoutDelimiters%20%3Aend%20%7C%0A%09%09aBlock%20value%3A%20%28self%20copyFrom%3A%20start%20to%3A%20endWithoutDelimiters%29%5D'),
messageSends: ["lineIndicesDo:", "value:", "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lines'),
smalltalk.method({
selector: unescape('lines'),
category: 'split join',
fn: function (){
var self=this;
var lines=nil;
lines=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self, "_linesDo_", [(function(aLine){return smalltalk.send(lines, "_add_", [aLine]);})]);
return lines;
return self;},
args: [],
source: unescape('lines%0A%09%22Answer%20an%20array%20of%20lines%20composing%20this%20receiver%20without%20the%20line%20ending%20delimiters.%22%0A%0A%09%7C%20lines%20%7C%0A%09lines%20%3A%3D%20Array%20new.%0A%09self%20linesDo%3A%20%5B%3AaLine%20%7C%20lines%20add%3A%20aLine%5D.%0A%09%5Elines'),
messageSends: ["new", "linesDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_lineNumber_'),
smalltalk.method({
selector: unescape('lineNumber%3A'),
category: 'split join',
fn: function (anIndex){
var self=this;
try{var lineCount=nil;
lineCount=(0);
smalltalk.send(self, "_lineIndicesDo_", [(function(start, endWithoutDelimiters, end){return ((($receiver = smalltalk.send(lineCount=((($receiver = lineCount).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "__eq", [anIndex])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return smalltalk.send(self, "_copyFrom_to_", [start, endWithoutDelimiters])}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_lineNumber_', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_lineNumber_'){return e.fn()} throw(e)}},
args: ["anIndex"],
source: unescape('lineNumber%3A%20anIndex%0A%09%22Answer%20a%20string%20containing%20the%20characters%20in%20the%20given%20line%20number.%22%0A%0A%09%7C%20lineCount%20%7C%0A%09lineCount%20%3A%3D%200.%0A%09self%20lineIndicesDo%3A%20%5B%3Astart%20%3AendWithoutDelimiters%20%3Aend%20%7C%0A%09%09%28lineCount%20%3A%3D%20lineCount%20+%201%29%20%3D%20anIndex%20ifTrue%3A%20%5B%5Eself%20copyFrom%3A%20start%20to%3A%20endWithoutDelimiters%5D%5D.%0A%09%5Enil'),
messageSends: ["lineIndicesDo:", "ifTrue:", unescape("%3D"), unescape("+"), "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
return self.split("").reverse().join("");
return self;},
args: [],
source: unescape('reversed%0A%09%3Creturn%20self.split%28%22%22%29.reverse%28%29.join%28%22%22%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(aString, "_class", []), "__eq", [smalltalk.send(self, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq_eq', fn: function(){return false}})})();})]));
return String(self) === String(aString);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq_eq'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('%3D%3D%20aString%0A%09aString%20class%20%3D%20self%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%3Creturn%20String%28self%29%20%3D%3D%3D%20String%28aString%29%3E'),
messageSends: ["ifFalse:", unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_asJavaScriptSelector'),
smalltalk.method({
selector: unescape('asJavaScriptSelector'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_asSelector", []), "_replace_with_", [unescape("%5E_"), ""]), "_replace_with_", [unescape("_.*"), ""]);
return self;},
args: [],
source: unescape('asJavaScriptSelector%0A%09%5E%28self%20asSelector%20replace%3A%20%27%5E_%27%20with%3A%20%27%27%29%20replace%3A%20%27_.*%27%20with%3A%20%27%27.'),
messageSends: ["replace:with:", "asSelector"],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
unescape('_streamClass'),
smalltalk.method({
selector: unescape('streamClass'),
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
return self;},
args: [],
source: unescape('streamClass%0A%09%20%20%20%20%5EStringStream'),
messageSends: [],
referencedClasses: ["StringStream"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%3Creturn%20new%20self.fn%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'accessing',
fn: function (){
var self=this;
return '\r';
return self;},
args: [],
source: unescape('cr%0A%09%3Creturn%20%27%5Cr%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
category: 'accessing',
fn: function (){
var self=this;
return '\n';
return self;},
args: [],
source: unescape('lf%0A%09%3Creturn%20%27%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
category: 'accessing',
fn: function (){
var self=this;
return ' ';
return self;},
args: [],
source: unescape('space%0A%09%3Creturn%20%27%20%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_tab'),
smalltalk.method({
selector: unescape('tab'),
category: 'accessing',
fn: function (){
var self=this;
return '\t';
return self;},
args: [],
source: unescape('tab%0A%09%3Creturn%20%27%5Ct%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
return self;},
args: [],
source: unescape('crlf%0A%09%3Creturn%20%27%5Cr%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_streamContents_'),
smalltalk.method({
selector: unescape('streamContents%3A'),
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]);
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
args: ["blockWithArg"],
source: unescape('streamContents%3A%20blockWithArg%0A%09%7Cstream%7C%0A%09stream%20%3A%3D%20%28self%20streamClass%20on%3A%20String%20new%29.%0A%09blockWithArg%20value%3A%20stream.%0A%09%5E%20stream%20contents'),
messageSends: ["on:", "streamClass", "new", "value:", "contents"],
referencedClasses: ["String"]
}),
smalltalk.String.klass);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;},
args: ["aUTFCharCode"],
source: unescape('value%3A%20aUTFCharCode%0A%0A%09%3Creturn%20String.fromCharCode%28aUTFCharCode%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
args: [],
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
return self[anIndex - 1] = anObject;
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;

	    var value = self[anIndex - 1];
	    if(value === undefined) {
		return aBlock();
	    } else {
		return value;
	    }
	;
return self;},
args: ["anIndex", "aBlock"],
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%20%20%20%20var%20value%20%3D%20self%5BanIndex%20-%201%5D%3B%0A%09%20%20%20%20if%28value%20%3D%3D%3D%20undefined%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09%3Cself.push%28anObject%29%3B%20return%20anObject%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [each]);})]);
return newCollection;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_deepCopy'),
smalltalk.method({
selector: unescape('deepCopy'),
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;},
args: [],
source: unescape('deepCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%20deepCopy%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
var array=nil;
array=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(anIndex, "_to_do_", [anotherIndex, (function(each){return smalltalk.send(array, "_add_", [smalltalk.send(self, "_at_", [each])]);})]);
return array;
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%7C%20array%20%7C%0A%09array%20%3A%3D%20self%20class%20new.%0A%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20array%20add%3A%20%28self%20at%3A%20each%29%5D.%0A%09%5Earray'),
messageSends: ["new", "class", "to:do:", "add:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_join_'),
smalltalk.method({
selector: unescape('join%3A'),
category: 'enumerating',
fn: function (aString){
var self=this;
return self.join(aString);
return self;},
args: ["aString"],
source: unescape('join%3A%20aString%0A%09%3Creturn%20self.join%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJavascript'),
smalltalk.method({
selector: unescape('asJavascript'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;},
args: [],
source: unescape('asJavascript%0A%09%5E%27%5B%27%2C%20%28%28self%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJavascript%5D%29%20join%3A%20%27%2C%20%27%29%2C%20%20%27%5D%27'),
messageSends: [unescape("%2C"), "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort'),
smalltalk.method({
selector: unescape('sort'),
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;},
args: [],
source: unescape('sort%0A%20%20%20%20%5Eself%20basicPerform%3A%20%27sort%27'),
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sort_'),
smalltalk.method({
selector: unescape('sort%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;},
args: ["aBlock"],
source: unescape('sort%3A%20aBlock%0A%09%3C%0A%09%09return%20self.sort%28function%28a%2C%20b%29%20%7B%0A%09%09%09if%28aBlock%28a%2Cb%29%29%20%7Breturn%20-1%7D%20else%20%7Breturn%201%7D%0A%09%09%7D%29%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;

		for(var i=0;i<self.length;i++) {
			if(self[i] == anObject) {
				self.splice(i,1);
				break;
			}
		}
	;
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%20%7B%0A%09%09%09if%28self%5Bi%5D%20%3D%3D%20anObject%29%20%7B%0A%09%09%09%09self.splice%28i%2C1%29%3B%0A%09%09%09%09break%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted'),
smalltalk.method({
selector: unescape('sorted'),
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;},
args: [],
source: unescape('sorted%0A%09%5Eself%20copy%20sort'),
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_sorted_'),
smalltalk.method({
selector: unescape('sorted%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('sorted%3A%20aBlock%0A%09%5Eself%20copy%20sort%3A%20aBlock'),
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJSONObject", []);})]);
return self;},
args: [],
source: unescape('asJSONObject%0A%09%5Eself%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJSONObject%5D'),
messageSends: ["collect:", "asJSONObject"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_removeFrom_to_'),
smalltalk.method({
selector: unescape('removeFrom%3Ato%3A'),
category: 'adding/removing',
fn: function (aNumber, anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;},
args: ["aNumber", "anotherNumber"],
source: unescape('removeFrom%3A%20aNumber%20to%3A%20anotherNumber%0A%09%3Cself.splice%28aNumber%20-%201%2CanotherNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'enumerating',
fn: function (){
var self=this;
var str=nil;
str=smalltalk.send("", "_writeStream", []);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.SequenceableCollection), "__comma", [unescape("%20%28")])]);
smalltalk.send(self, "_do_separatedBy_", [(function(each){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(str, "_nextPutAll_", [" "]);})]);
smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);
return smalltalk.send(str, "_contents", []);
return self;},
args: [],
source: unescape('printString%0A%09%7C%20str%20%7C%0A%09str%20%3A%3D%20%27%27%20writeStream.%0A%09str%20nextPutAll%3A%20super%20printString%2C%20%27%20%28%27.%0A%09self%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20str%20nextPutAll%3A%20each%20printString%5D%0A%09%09separatedBy%3A%20%5Bstr%20nextPutAll%3A%20%27%20%27%5D.%0A%09str%20nextPutAll%3A%20%27%29%27.%0A%09%5Estr%20contents'),
messageSends: ["writeStream", "nextPutAll:", unescape("%2C"), "printString", "do:separatedBy:", "contents"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('_reversed'),
smalltalk.method({
selector: unescape('reversed'),
category: 'converting',
fn: function (){
var self=this;
return self._copy().reverse();
return self;},
args: [],
source: unescape('reversed%0A%09%3Creturn%20self._copy%28%29.reverse%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aCollection){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aCollection, "_size", [])]);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_at_", [i]), "__eq", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aCollection"],
source: unescape('%3D%20aCollection%0A%09%28self%20class%20%3D%20aCollection%20class%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%09self%20size%20%3D%20aCollection%20size%5D%29%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20withIndexDo%3A%20%5B%3Aeach%20%3Ai%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28aCollection%20at%3A%20i%29%20%3D%20each%20ifFalse%3A%20%5B%5Efalse%5D%5D.%0A%09%5Etrue'),
messageSends: ["ifFalse:", "and:", unescape("%3D"), "class", "size", "withIndexDo:", "at:"],
referencedClasses: []
}),
smalltalk.Array);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.compile(aString);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09%3Creturn%20self.compile%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_exec_'),
smalltalk.method({
selector: unescape('exec%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
return self;},
args: ["aString"],
source: unescape('exec%3A%20aString%0A%09%3Creturn%20self.exec%28aString%29%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
unescape('_test_'),
smalltalk.method({
selector: unescape('test%3A'),
category: 'evaluating',
fn: function (aString){
var self=this;
return self.test(aString);
return self;},
args: ["aString"],
source: unescape('test%3A%20aString%0A%09%3Creturn%20self.test%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
unescape('_fromString_flag_'),
smalltalk.method({
selector: unescape('fromString%3Aflag%3A'),
category: 'instance creation',
fn: function (aString, anotherString){
var self=this;
return new RegExp(aString, anotherString);
return self;},
args: ["aString", "anotherString"],
source: unescape('fromString%3A%20aString%20flag%3A%20anotherString%0A%09%3Creturn%20new%20RegExp%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
unescape('_fromString_'),
smalltalk.method({
selector: unescape('fromString%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;},
args: ["aString"],
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%5Eself%20fromString%3A%20aString%20flag%3A%20%27%27'),
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return self['@messageText'];
return self;},
args: [],
source: unescape('messageText%0A%09%5EmessageText'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_messageText_'),
smalltalk.method({
selector: unescape('messageText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@messageText']=aString;
return self;},
args: ["aString"],
source: unescape('messageText%3A%20aString%0A%09messageText%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_signal'),
smalltalk.method({
selector: unescape('signal'),
category: 'signaling',
fn: function (){
var self=this;
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self;},
args: [],
source: unescape('signal%0A%09%3Cself.context%20%3D%20smalltalk.getThisContext%28%29%3B%20self.smalltalkError%20%3D%20true%3B%20throw%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
unescape('_context'),
smalltalk.method({
selector: unescape('context'),
category: 'accessing',
fn: function (){
var self=this;
return self.context;
return self;},
args: [],
source: unescape('context%0A%09%3Creturn%20self.context%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
unescape('_signal_'),
smalltalk.method({
selector: unescape('signal%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('signal%3A%20aString%0A%09%20%20%20%20%5Eself%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self.receiver;
return self;},
args: [],
source: unescape('receiver%0A%09%3Creturn%20self.receiver%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;},
args: [],
source: unescape('selector%0A%09%3Creturn%20smalltalk.convertSelector%28self.selector%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_home'),
smalltalk.method({
selector: unescape('home'),
category: 'accessing',
fn: function (){
var self=this;
return self.homeContext;
return self;},
args: [],
source: unescape('home%0A%09%3Creturn%20self.homeContext%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_temps'),
smalltalk.method({
selector: unescape('temps'),
category: 'accessing',
fn: function (){
var self=this;
return self.temps;
return self;},
args: [],
source: unescape('temps%0A%09%3Creturn%20self.temps%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20self%20asString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString", "asString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_asString'),
smalltalk.method({
selector: unescape('asString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;},
args: [],
source: unescape('asString%0A%09%5Eself%20receiver%20class%20printString%2C%20%27%20%3E%3E%20%27%2C%20self%20selector'),
messageSends: [unescape("%2C"), "printString", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;},
args: ["anAssociation"],
source: unescape('%3D%20anAssociation%0A%09%5Eself%20class%20%3D%20anAssociation%20class%20and%3A%20%5B%0A%09%20%20%20%20self%20key%20%3D%20anAssociation%20key%20and%3A%20%5B%0A%09%09self%20value%20%3D%20anAssociation%20value%5D%5D'),
messageSends: ["and:", unescape("%3D"), "class", "key", "value"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key_'),
smalltalk.method({
selector: unescape('key%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
self['@key']=aKey;
return self;},
args: ["aKey"],
source: unescape('key%3A%20aKey%0A%09key%20%3A%3D%20aKey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_key'),
smalltalk.method({
selector: unescape('key'),
category: 'accessing',
fn: function (){
var self=this;
return self['@key'];
return self;},
args: [],
source: unescape('key%0A%09%5Ekey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'accessing',
fn: function (aValue){
var self=this;
self['@value']=aValue;
return self;},
args: ["aValue"],
source: unescape('value%3A%20aValue%0A%09value%20%3A%3D%20aValue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
args: [],
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'comparing',
fn: function (aStream){
var self=this;
smalltalk.send(self['@key'], "_storeOn_", [aStream]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("-%3E")]);
smalltalk.send(self['@value'], "_storeOn_", [aStream]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09%22Store%20in%20the%20format%20%28key-%3Evalue%29%22%0A%0A%09%22aStream%20nextPutAll%3A%20%27%28%27.%22%0A%09key%20storeOn%3A%20aStream.%0A%09aStream%20nextPutAll%3A%20%27-%3E%27.%0A%09value%20storeOn%3A%20aStream.%0A%09%22aStream%20nextPutAll%3A%20%27%29%27%22'),
messageSends: ["storeOn:", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
unescape('_key_value_'),
smalltalk.method({
selector: unescape('key%3Avalue%3A'),
category: 'instance creation',
fn: function (aKey, aValue){
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aKey", "aValue"],
source: unescape('key%3A%20aKey%20value%3A%20aValue%0A%09%20%20%20%20%5Eself%20new%0A%09%09key%3A%20aKey%3B%0A%09%09value%3A%20aValue%3B%0A%09%09yourself'),
messageSends: ["key:", "value:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Dictionary', smalltalk.Collection, ['keys'], 'Kernel');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aDictionary){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aDictionary, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [smalltalk.send(aDictionary, "_size", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]));
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return smalltalk.send(smalltalk.send(self, "_associations", []), "__eq", [smalltalk.send(aDictionary, "_associations", [])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
args: ["aDictionary"],
source: unescape('%3D%20aDictionary%0A%09self%20class%20%3D%20aDictionary%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20size%20%3D%20aDictionary%20size%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09%5Eself%20associations%20%3D%20aDictionary%20associations'),
messageSends: ["ifFalse:", unescape("%3D"), "class", "size", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_shallowCopy'),
smalltalk.method({
selector: unescape('shallowCopy'),
category: 'copying',
fn: function (){
var self=this;
var copy=nil;
copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;},
args: [],
source: unescape('shallowCopy%0A%09%7C%20copy%20%7C%0A%09copy%20%3A%3D%20self%20class%20new.%0A%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20copy%20at%3A%20each%20key%20%20put%3A%20each%20value%5D.%0A%09%5Ecopy'),
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@keys']=[];
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20%09super%20initialize.%0A%20%20%20%20%09keys%20%3A%3D%20%23%28%29'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%5Ekeys%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_associations'),
smalltalk.method({
selector: unescape('associations'),
category: 'accessing',
fn: function (){
var self=this;
var associations=nil;
associations=[];
smalltalk.send(self['@keys'], "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;},
args: [],
source: unescape('associations%0A%09%7C%20associations%20%7C%0A%09associations%20%3A%3D%20%23%28%29.%0A%09keys%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20associations%20add%3A%20%28Association%20key%3A%20each%20value%3A%20%28self%20at%3A%20each%29%29%5D.%0A%09%5Eassociations'),
messageSends: ["do:", "add:", "key:value:", "at:"],
referencedClasses: ["Association"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;},
args: [],
source: unescape('keys%0A%09%5Ekeys%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;},
args: [],
source: unescape('values%0A%20%20%20%20%09%5Ekeys%20collect%3A%20%5B%3Aeach%20%7C%20self%20at%3A%20each%5D'),
messageSends: ["collect:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aValue){
var self=this;
((($receiver = smalltalk.send(self['@keys'], "_includes_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})]));
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;},
args: ["aKey", "aValue"],
source: unescape('at%3A%20aKey%20put%3A%20aValue%0A%09%28keys%20includes%3A%20aKey%29%20ifFalse%3A%20%5Bkeys%20add%3A%20aKey%5D.%0A%09%5Eself%20basicAt%3A%20aKey%20put%3A%20aValue'),
messageSends: ["ifFalse:", "includes:", "add:", "basicAt:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%09%5E%28self%20keys%20includes%3A%20aKey%29%0A%09%09ifTrue%3A%20%5Bself%20basicAt%3A%20aKey%5D%0A%09%09ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", "includes:", "keys", "basicAt:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifAbsentPut_'),
smalltalk.method({
selector: unescape('at%3AifAbsentPut%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0A%20%20%20%20%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%0A%20%20%20%20%09%20%20%20%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%5D'),
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifPresent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_ifPresent_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifPresent%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;},
args: ["aKey", "aBlock", "anotherBlock"],
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%20ifAbsent%3A%20anotherBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%0A%09%20%20%20%20ifNil%3A%20anotherBlock%0A%09%20%20%20%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNil:ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;},
args: ["anAssociation"],
source: unescape('add%3A%20anAssociation%0A%20%20%20%20%09self%20at%3A%20anAssociation%20key%20put%3A%20anAssociation%20value'),
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
category: 'adding/removing',
fn: function (aDictionary){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aDictionary, "_associations", [])], smalltalk.Collection);
return aDictionary;
return self;},
args: ["aDictionary"],
source: unescape('addAll%3A%20aDictionary%0A%20%20%20%20%09super%20addAll%3A%20aDictionary%20associations.%0A%20%20%20%20%09%5EaDictionary'),
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('__comma'),
smalltalk.method({
selector: unescape('%2C'),
category: 'copying',
fn: function (aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: ["aCollection"],
source: unescape('%2C%20aCollection%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_copyFrom_to_'),
smalltalk.method({
selector: unescape('copyFrom%3Ato%3A'),
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: ["anIndex", "anotherIndex"],
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_associationsDo_'),
smalltalk.method({
selector: unescape('associationsDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('associationsDo%3A%20aBlock%0A%20%20%20%20%09self%20associations%20do%3A%20aBlock'),
messageSends: ["do:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;},
args: ["aBlock"],
source: unescape('keysAndValuesDo%3A%20aBlock%0A%20%20%20%20%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%20key%20value%3A%20each%20value%5D'),
messageSends: ["associationsDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%20%20%20%20%09self%20values%20do%3A%20aBlock'),
messageSends: ["do:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_select_'),
smalltalk.method({
selector: unescape('select%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return ((($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]));})]);
return newDict;
return self;},
args: ["aBlock"],
source: unescape('select%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5BnewDict%20at%3A%20key%20put%3A%20value%5D%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_collect_'),
smalltalk.method({
selector: unescape('collect%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;},
args: ["aBlock"],
source: unescape('collect%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20newDict%20at%3A%20key%20put%3A%20%28aBlock%20value%3A%20value%29%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eself%20values%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock'),
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%5Eself%20values%20includes%3A%20anObject'),
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self, "_removeKey_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('remove%3A%20aKey%0A%20%20%20%20self%20removeKey%3A%20aKey'),
messageSends: ["removeKey:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_removeKey_'),
smalltalk.method({
selector: unescape('removeKey%3A'),
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self['@keys'], "_remove_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('removeKey%3A%20aKey%0A%20%20%20%20keys%20remove%3A%20aKey'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_asJSONObject'),
smalltalk.method({
selector: unescape('asJSONObject'),
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(object, "_basicAt_put_", [key, smalltalk.send(value, "_asJSONObject", [])]);})]);
return object;
return self;},
args: [],
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09object%20basicAt%3A%20key%20put%3A%20value%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "keysAndValuesDo:", "basicAt:put:", "asJSONObject"],
referencedClasses: ["Object"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20%27%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20associations%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09do%3A%20%5B%3AanAssociation%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20key%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20%27%20-%3E%20%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20value%20printString%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20nextPutAll%3A%20%27%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString", "do:separatedBy:", "associations", "key", "value"],
referencedClasses: ["String"]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
unescape('_storeOn_'),
smalltalk.method({
selector: unescape('storeOn%3A'),
category: 'printing',
fn: function (aStream){
var self=this;
smalltalk.send(aStream, "_nextPutAll_", [unescape("%23%7B")]);
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(each){return smalltalk.send(each, "_storeOn_", [aStream]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [". "]);})]);
smalltalk.send(aStream, "_nextPutAll_", [unescape("%7D")]);
return self;},
args: ["aStream"],
source: unescape('storeOn%3A%20aStream%0A%09aStream%20nextPutAll%3A%20%27%23%7B%27.%0A%09self%20associations%0A%09%09do%3A%20%5B%3Aeach%20%7C%20each%20storeOn%3A%20aStream%5D%0A%09%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27.%20%27%5D.%0A%09aStream%20nextPutAll%3A%20%27%7D%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "associations", "storeOn:"],
referencedClasses: []
}),
smalltalk.Dictionary);


smalltalk.addMethod(
unescape('_fromPairs_'),
smalltalk.method({
selector: unescape('fromPairs%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
var dict=nil;
dict=smalltalk.send(self, "_new", []);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(dict, "_add_", [each]);})]);
return dict;
return self;},
args: ["aCollection"],
source: unescape('fromPairs%3A%20aCollection%0A%09%7C%20dict%20%7C%0A%09dict%20%3A%3D%20self%20new.%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20dict%20add%3A%20each%5D.%0A%09%5Edict'),
messageSends: ["new", "do:", "add:"],
referencedClasses: []
}),
smalltalk.Dictionary.klass);


smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_superclass_subclass_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3A'),
category: 'class creation',
fn: function (aClass, aString){
var self=this;
return smalltalk.send(self, "_superclass_subclass_instanceVariableNames_package_", [aClass, aString, "", nil]);
return self;},
args: ["aClass", "aString"],
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%0A%09%5Eself%20superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20%27%27%20package%3A%20nil'),
messageSends: ["superclass:subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_class_instanceVariableNames_'),
smalltalk.method({
selector: unescape('class%3AinstanceVariableNames%3A'),
category: 'class creation',
fn: function (aClass, aString){
var self=this;
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]));
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;},
args: ["aClass", "aString"],
source: unescape('class%3A%20aClass%20instanceVariableNames%3A%20aString%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20error%3A%20aClass%20name%2C%20%27%20is%20not%20a%20metaclass%27%5D.%0A%09aClass%20basicAt%3A%20%27iVarNames%27%20put%3A%20%28self%20instanceVariableNamesFor%3A%20aString%29.%0A%09self%20setupClass%3A%20aClass'),
messageSends: ["ifFalse:", "isMetaclass", "error:", unescape("%2C"), "name", "basicAt:put:", "instanceVariableNamesFor:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_instanceVariableNamesFor_'),
smalltalk.method({
selector: unescape('instanceVariableNamesFor%3A'),
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;},
args: ["aString"],
source: unescape('instanceVariableNamesFor%3A%20aString%0A%09%5E%28aString%20tokenize%3A%20%27%20%27%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20isEmpty%5D'),
messageSends: ["reject:", "tokenize:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3A'),
category: 'private',
fn: function (aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;},
args: ["aClass", "aString", "aCollection"],
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%0A%09%3Csmalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_setupClass_'),
smalltalk.method({
selector: unescape('setupClass%3A'),
category: 'private',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
return self;},
args: ["aClass"],
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_superclass_subclass_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('superclass%3Asubclass%3AinstanceVariableNames%3Apackage%3A'),
category: 'class creation',
fn: function (aClass, aString, aString2, aString3){
var self=this;
var newClass=nil;
newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_package_", [aClass, aString, smalltalk.send(self, "_instanceVariableNamesFor_", [aString2]), (($receiver = aString3) == nil || $receiver == undefined) ? (function(){return "unclassified";})() : $receiver]);
smalltalk.send(self, "_setupClass_", [newClass]);
return newClass;
return self;},
args: ["aClass", "aString", "aString2", "aString3"],
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20package%3A%20aString3%0A%09%7C%20newClass%20%7C%0A%09newClass%20%3A%3D%20self%20addSubclassOf%3A%20aClass%0A%09%09%09%09named%3A%20aString%20instanceVariableNames%3A%20%28self%20instanceVariableNamesFor%3A%20aString2%29%0A%09%09%09%09package%3A%20%28aString3%20ifNil%3A%20%5B%27unclassified%27%5D%29.%0A%09self%20setupClass%3A%20newClass.%0A%09%5EnewClass'),
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
unescape('_addSubclassOf_named_instanceVariableNames_package_'),
smalltalk.method({
selector: unescape('addSubclassOf%3Anamed%3AinstanceVariableNames%3Apackage%3A'),
category: 'private',
fn: function (aClass, aString, aCollection, packageName){
var self=this;
smalltalk.addClass(aString, aClass, aCollection, packageName);
	    return smalltalk[aString];
return self;},
args: ["aClass", "aString", "aCollection", "packageName"],
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%20package%3A%20packageName%0A%09%3Csmalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%2C%20packageName%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_class_category_'),
smalltalk.method({
selector: unescape('class%3Acategory%3A'),
category: 'accessing',
fn: function (aClass, aString){
var self=this;
self['@class']=aClass;
self['@category']=aString;
return self;},
args: ["aClass", "aString"],
source: unescape('class%3A%20aClass%20category%3A%20aString%0A%09class%20%3A%3D%20aClass.%0A%09category%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){chunk=smalltalk.send(aChunkParser, "_nextChunk", []);return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
return self;},
args: ["aChunkParser"],
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09%5Bchunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20self%20compileMethod%3A%20chunk%5D'),
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:"],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
unescape('_compileMethod_'),
smalltalk.method({
selector: unescape('compileMethod%3A'),
category: 'private',
fn: function (aString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self['@class']]);
smalltalk.send(method, "_category_", [self['@category']]);
smalltalk.send(self['@class'], "_addCompiledMethod_", [method]);
return self;},
args: ["aString"],
source: unescape('compileMethod%3A%20aString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20class.%0A%09method%20category%3A%20category.%0A%09class%20addCompiledMethod%3A%20method'),
messageSends: ["load:forClass:", "new", "category:", "addCompiledMethod:"],
referencedClasses: ["Compiler"]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@collection'];
return self;},
args: [],
source: unescape('collection%0A%09%5Ecollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setCollection_'),
smalltalk.method({
selector: unescape('setCollection%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('setCollection%3A%20aCollection%0A%09collection%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=(0);})() : $receiver;
return self;},
args: [],
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5Bposition%20%3A%3D%200%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@position']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('position%3A%20anInteger%0A%09position%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_streamSize'),
smalltalk.method({
selector: unescape('streamSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@streamSize'];
return self;},
args: [],
source: unescape('streamSize%0A%09%5EstreamSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setStreamSize_'),
smalltalk.method({
selector: unescape('setStreamSize%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@streamSize']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('setStreamSize%3A%20anInteger%0A%09streamSize%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_contents'),
smalltalk.method({
selector: unescape('contents'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;},
args: [],
source: unescape('contents%0A%09%5Eself%20collection%0A%09%20%20%20%20copyFrom%3A%201%20%0A%09%20%20%20%20to%3A%20self%20streamSize'),
messageSends: ["copyFrom:to:", "collection", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;},
args: [],
source: unescape('size%0A%09%5Eself%20streamSize'),
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;},
args: [],
source: unescape('reset%0A%09self%20position%3A%200'),
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('close'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_flush'),
smalltalk.method({
selector: unescape('flush'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('flush'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_resetContents'),
smalltalk.method({
selector: unescape('resetContents'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;},
args: [],
source: unescape('resetContents%0A%09self%20reset.%0A%09self%20setStreamSize%3A%200'),
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09%5Bself%20atEnd%5D%20whileFalse%3A%20%5BaBlock%20value%3A%20self%20next%5D'),
messageSends: ["whileFalse:", "atEnd", "value:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_setToEnd'),
smalltalk.method({
selector: unescape('setToEnd'),
category: 'positioning',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('setToEnd%0A%09self%20position%3A%20self%20size'),
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_skip_'),
smalltalk.method({
selector: unescape('skip%3A'),
category: 'positioning',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger])), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;},
args: ["anInteger"],
source: unescape('skip%3A%20anInteger%0A%09self%20position%3A%20%28%28self%20position%20+%20anInteger%29%20min%3A%20self%20size%20max%3A%200%29'),
messageSends: ["position:", "min:max:", unescape("+"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
category: 'reading',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);
return self;},
args: [],
source: unescape('next%0A%09self%20position%3A%20self%20position%20+%201.%20%0A%09%5Ecollection%20at%3A%20self%20position'),
messageSends: ["position:", unescape("+"), "position", "at:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20add%3A%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
category: 'writing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
args: ["anObject"],
source: unescape('nextPut%3A%20anObject%0A%09self%20position%3A%20self%20position%20+%201.%0A%09self%20collection%20at%3A%20self%20position%20put%3A%20anObject.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["position:", unescape("+"), "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
category: 'writing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;},
args: ["aCollection"],
source: unescape('nextPutAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20nextPut%3A%20each%5D'),
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_peek'),
smalltalk.method({
selector: unescape('peek'),
category: 'reading',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;},
args: [],
source: unescape('peek%0A%09%5Eself%20atEnd%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20collection%20at%3A%20self%20position%20+%201%5D'),
messageSends: ["ifFalse:", "atEnd", "at:", "collection", unescape("+"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atEnd'),
smalltalk.method({
selector: unescape('atEnd'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;},
args: [],
source: unescape('atEnd%0A%09%5Eself%20position%20%3D%20self%20size'),
messageSends: [unescape("%3D"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_atStart'),
smalltalk.method({
selector: unescape('atStart'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('atStart%0A%09%5Eself%20position%20%3D%200'),
messageSends: [unescape("%3D"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
unescape('_isEmpty'),
smalltalk.method({
selector: unescape('isEmpty'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
args: [],
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aCollection"],
source: unescape('on%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%20%0A%09%09setCollection%3A%20aCollection%3B%0A%09%09setStreamSize%3A%20aCollection%20size%3B%0A%09%09yourself'),
messageSends: ["setCollection:", "setStreamSize:", "size", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel');
smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return ((($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})]));})]);
return tempCollection;
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20%3A%3D%20tempCollection%2C%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", unescape("%2C"), "next"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPut_'),
smalltalk.method({
selector: unescape('nextPut%3A'),
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;},
args: ["aString"],
source: unescape('nextPut%3A%20aString%0A%09self%20nextPutAll%3A%20aString'),
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_nextPutAll_'),
smalltalk.method({
selector: unescape('nextPutAll%3A'),
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [((($receiver = ((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
args: ["aString"],
source: unescape('nextPutAll%3A%20aString%0A%09self%20setCollection%3A%20%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%201%20to%3A%20self%20position%29%2C%0A%09%20%20%20%20aString%2C%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%20%28self%20position%20+%201%20+%20aString%20size%29%20to%3A%20self%20collection%20size%29.%0A%09self%20position%3A%20self%20position%20+%20aString%20size.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["setCollection:", unescape("%2C"), "copyFrom:to:", "collection", "position", unescape("+"), "size", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
args: [],
source: unescape('cr%0A%09%5Eself%20nextPutAll%3A%20String%20cr'),
messageSends: ["nextPutAll:", "cr"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_crlf'),
smalltalk.method({
selector: unescape('crlf'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;},
args: [],
source: unescape('crlf%0A%09%5Eself%20nextPutAll%3A%20String%20crlf'),
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_lf'),
smalltalk.method({
selector: unescape('lf'),
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;},
args: [],
source: unescape('lf%0A%09%5Eself%20nextPutAll%3A%20String%20lf'),
messageSends: ["nextPutAll:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.StringStream);

smalltalk.addMethod(
unescape('_space'),
smalltalk.method({
selector: unescape('space'),
category: 'writing',
fn: function (){
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;},
args: [],
source: unescape('space%0A%09self%20nextPut%3A%20%27%20%27'),
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
unescape('_class_'),
smalltalk.method({
selector: unescape('class%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
self['@class']=aClass;
return self;},
args: ["aClass"],
source: unescape('class%3A%20aClass%0A%09class%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_scanFrom_'),
smalltalk.method({
selector: unescape('scanFrom%3A'),
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
chunk=smalltalk.send(aChunkParser, "_nextChunk", []);
((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]));
return self;},
args: ["aChunkParser"],
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09chunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20setComment%3A%20chunk%5D.'),
messageSends: ["nextChunk", "ifFalse:", "isEmpty", "setComment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: ["ChunkParser"]
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
unescape('_setComment_'),
smalltalk.method({
selector: unescape('setComment%3A'),
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;},
args: ["aString"],
source: unescape('setComment%3A%20aString%0A%20%20%20%20class%20comment%3A%20aString'),
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_next'),
smalltalk.method({
selector: unescape('next'),
category: 'accessing',
fn: function (){
var self=this;
return Math.random();
return self;},
args: [],
source: unescape('next%0A%09%3Creturn%20Math.random%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
unescape('_next_'),
smalltalk.method({
selector: unescape('next%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send((1), "_to_", [anInteger]), "_collect_", [(function(each){return smalltalk.send(self, "_next", []);})]);
return self;},
args: ["anInteger"],
source: unescape('next%3A%20anInteger%0A%20%20%20%20%5E%281%20to%3A%20anInteger%29%20collect%3A%20%5B%3Aeach%20%7C%20self%20next%5D'),
messageSends: ["collect:", "to:", "next"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.addMethod(
unescape('_x'),
smalltalk.method({
selector: unescape('x'),
category: 'accessing',
fn: function (){
var self=this;
return self['@x'];
return self;},
args: [],
source: unescape('x%0A%09%5Ex'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y'),
smalltalk.method({
selector: unescape('y'),
category: 'accessing',
fn: function (){
var self=this;
return self['@y'];
return self;},
args: [],
source: unescape('y%0A%09%5Ey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_y_'),
smalltalk.method({
selector: unescape('y%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@y']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('y%3A%20aNumber%0A%09y%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_x_'),
smalltalk.method({
selector: unescape('x%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@x']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('x%3A%20aNumber%0A%09x%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__star'),
smalltalk.method({
selector: unescape('*'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('*%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20*%20aPoint%20asPoint%20x%20y%3A%20self%20y%20*%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("*"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__plus'),
smalltalk.method({
selector: unescape('+'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('+%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20+%20aPoint%20asPoint%20x%20y%3A%20self%20y%20+%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("+"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__minus'),
smalltalk.method({
selector: unescape('-'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('-%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20-%20aPoint%20asPoint%20x%20y%3A%20self%20y%20-%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("-"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__slash'),
smalltalk.method({
selector: unescape('/'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [((($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])])), ((($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])]))]);
return self;},
args: ["aPoint"],
source: unescape('/%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20/%20aPoint%20asPoint%20x%20y%3A%20self%20y%20/%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("/"), "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('_asPoint'),
smalltalk.method({
selector: unescape('asPoint'),
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
args: [],
source: unescape('asPoint%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_class", []), "__eq", [smalltalk.send(self, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aPoint, "_x", []), "__eq", [smalltalk.send(self, "_x", [])]), "_&", [smalltalk.send(smalltalk.send(aPoint, "_y", []), "__eq", [smalltalk.send(self, "_y", [])])]);})]);
return self;},
args: ["aPoint"],
source: unescape('%3D%20aPoint%0A%09%5EaPoint%20class%20%3D%20self%20class%20and%3A%20%5B%0A%09%09%28aPoint%20x%20%3D%20self%20x%29%20%26%20%28aPoint%20y%20%3D%20self%20y%29%5D'),
messageSends: ["and:", unescape("%3D"), "class", unescape("%26"), "x", "y"],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
unescape('_x_y_'),
smalltalk.method({
selector: unescape('x%3Ay%3A'),
category: 'instance creation',
fn: function (aNumber, anotherNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aNumber", "anotherNumber"],
source: unescape('x%3A%20aNumber%20y%3A%20anotherNumber%0A%09%5Eself%20new%0A%09%09x%3A%20aNumber%3B%0A%09%09y%3A%20anotherNumber%3B%0A%09%09yourself'),
messageSends: ["x:", "y:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (anArray){
var self=this;
self['@arguments']=anArray;
return self;},
args: ["anArray"],
source: unescape('arguments%3A%20anArray%0A%09arguments%20%3A%3D%20anArray'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return self['@arguments'];
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [self['@selector']]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);})(aStream);})]);
return self;},
args: [],
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27%28%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20selector%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09%09nextPutAll%3A%20%27%29%27%20%09%09%09%09%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString"],
referencedClasses: ["String"]
}),
smalltalk.Message);


smalltalk.addMethod(
unescape('_selector_arguments_'),
smalltalk.method({
selector: unescape('selector%3Aarguments%3A'),
category: 'instance creation',
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString", "anArray"],
source: unescape('selector%3A%20aString%20arguments%3A%20anArray%0A%09%5Eself%20new%0A%09%09selector%3A%20aString%3B%0A%09%09arguments%3A%20anArray%3B%0A%09%09yourself'),
messageSends: ["selector:", "arguments:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel');
smalltalk.addMethod(
unescape('_message'),
smalltalk.method({
selector: unescape('message'),
category: 'accessing',
fn: function (){
var self=this;
return self['@message'];
return self;},
args: [],
source: unescape('message%0A%09%5Emessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_message_'),
smalltalk.method({
selector: unescape('message%3A'),
category: 'accessing',
fn: function (aMessage){
var self=this;
self['@message']=aMessage;
return self;},
args: ["aMessage"],
source: unescape('message%3A%20aMessage%0A%09message%20%3A%3D%20aMessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;},
args: ["anObject"],
source: unescape('receiver%3A%20anObject%0A%09receiver%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
unescape('_messageText'),
smalltalk.method({
selector: unescape('messageText'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;},
args: [],
source: unescape('messageText%0A%09%5Eself%20receiver%20asString%2C%20%27%20does%20not%20understand%20%23%27%2C%20self%20message%20selector'),
messageSends: [unescape("%2C"), "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
category: 'error handling',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;},
args: ["anError"],
source: unescape('handleError%3A%20anError%0A%09anError%20context%20ifNotNil%3A%20%5Bself%20logErrorContext%3A%20anError%20context%5D.%0A%09self%20logError%3A%20anError'),
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logContext_'),
smalltalk.method({
selector: unescape('logContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;},
args: ["aContext"],
source: unescape('logContext%3A%20aContext%0A%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09self%20logContext%3A%20aContext%20home%5D.%0A%09self%20log%3A%20aContext%20receiver%20asString%2C%20%27%3E%3E%27%2C%20aContext%20selector'),
messageSends: ["ifNotNil:", "home", "logContext:", "log:", unescape("%2C"), "asString", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logErrorContext_'),
smalltalk.method({
selector: unescape('logErrorContext%3A'),
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;},
args: ["aContext"],
source: unescape('logErrorContext%3A%20aContext%0A%09aContext%20ifNotNil%3A%20%5B%0A%09%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09%09self%20logContext%3A%20aContext%20home%5D%5D'),
messageSends: ["ifNotNil:", "home", "logContext:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_logError_'),
smalltalk.method({
selector: unescape('logError%3A'),
category: 'private',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;},
args: ["anError"],
source: unescape('logError%3A%20anError%0A%09self%20log%3A%20anError%20messageText'),
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
unescape('_log_'),
smalltalk.method({
selector: unescape('log%3A'),
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;},
args: ["aString"],
source: unescape('log%3A%20aString%0A%09console%20log%3A%20aString'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return self['@current']=smalltalk.send(self, "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%5Ecurrent%20ifNil%3A%20%5Bcurrent%20%3A%3D%20self%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20register'),
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_register'),
smalltalk.method({
selector: unescape('register'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('register%0A%09ErrorHandler%20setCurrent%3A%20self%20new'),
messageSends: ["setCurrent:", "new"],
referencedClasses: ["ErrorHandler"]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
unescape('_setCurrent_'),
smalltalk.method({
selector: unescape('setCurrent%3A'),
category: 'accessing',
fn: function (anHandler){
var self=this;
self['@current']=anHandler;
return self;},
args: ["anHandler"],
source: unescape('setCurrent%3A%20anHandler%0A%09current%20%3A%3D%20anHandler'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


smalltalk.addClass('JSObjectProxy', smalltalk.Object, ['jsObject'], 'Kernel');
smalltalk.addMethod(
unescape('_jsObject_'),
smalltalk.method({
selector: unescape('jsObject%3A'),
category: 'accessing',
fn: function (aJSObject){
var self=this;
self['@jsObject']=aJSObject;
return self;},
args: ["aJSObject"],
source: unescape('jsObject%3A%20aJSObject%0A%09jsObject%20%3A%3D%20aJSObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_jsObject'),
smalltalk.method({
selector: unescape('jsObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@jsObject'];
return self;},
args: [],
source: unescape('jsObject%0A%09%5EjsObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'proxy',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsObject", []), "_toString", []);
return self;},
args: [],
source: unescape('printString%0A%09%5Eself%20jsObject%20toString'),
messageSends: ["toString", "jsObject"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
category: 'proxy',
fn: function (anInspector){
var self=this;
var variables=nil;
variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(variables, "_at_put_", [unescape("%23self"), smalltalk.send(self, "_jsObject", [])]);
smalltalk.send(anInspector, "_setLabel_", [smalltalk.send(self, "_printString", [])]);
for(var i in self['@jsObject']) {
		variables._at_put_(i, self['@jsObject'][i]);
	};
smalltalk.send(anInspector, "_setVariables_", [variables]);
return self;},
args: ["anInspector"],
source: unescape('inspectOn%3A%20anInspector%0A%09%7C%20variables%20%7C%0A%09variables%20%3A%3D%20Dictionary%20new.%0A%09variables%20at%3A%20%27%23self%27%20put%3A%20self%20jsObject.%0A%09anInspector%20setLabel%3A%20self%20printString.%0A%09%3Cfor%28var%20i%20in%20self%5B%27@jsObject%27%5D%29%20%7B%0A%09%09variables._at_put_%28i%2C%20self%5B%27@jsObject%27%5D%5Bi%5D%29%3B%0A%09%7D%3E.%0A%09anInspector%20setVariables%3A%20variables'),
messageSends: ["new", "at:put:", "jsObject", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'proxy',
fn: function (aMessage){
var self=this;
var obj=nil;
var selector=nil;
var jsSelector=nil;
var arguments=nil;
obj=smalltalk.send(self, "_jsObject", []);
selector=smalltalk.send(aMessage, "_selector", []);
jsSelector=smalltalk.send(selector, "_asJavaScriptSelector", []);
arguments=smalltalk.send(aMessage, "_arguments", []);
if(obj[jsSelector] != undefined) {return smalltalk.send(obj, jsSelector, arguments)};
smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09%7C%20obj%20selector%20jsSelector%20arguments%20%7C%0A%09obj%20%3A%3D%20self%20jsObject.%0A%09selector%20%3A%3D%20aMessage%20selector.%0A%09jsSelector%20%3A%3D%20selector%20asJavaScriptSelector.%0A%09arguments%20%3A%3D%20aMessage%20arguments.%0A%09%3Cif%28obj%5BjsSelector%5D%20%21%3D%20undefined%29%20%7Breturn%20smalltalk.send%28obj%2C%20jsSelector%2C%20arguments%29%7D%3E.%0A%09super%20doesNotUnderstand%3A%20aMessage'),
messageSends: ["jsObject", "selector", "asJavaScriptSelector", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return self['@jsObject'][aString];
return self;},
args: ["aString"],
source: unescape('at%3A%20aString%0A%09%3Creturn%20self%5B%27@jsObject%27%5D%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
self['@jsObject'][aString] = anObject;
return self;},
args: ["aString", "anObject"],
source: unescape('at%3A%20aString%20put%3A%20anObject%0A%09%3Cself%5B%27@jsObject%27%5D%5BaString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'instance creation',
fn: function (aJSObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_jsObject_", [aJSObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aJSObject"],
source: unescape('on%3A%20aJSObject%0A%09%5Eself%20new%0A%09%09jsObject%3A%20aJSObject%3B%0A%09%09yourself'),
messageSends: ["jsObject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.JSObjectProxy.klass);


smalltalk.addClass('Set', smalltalk.Collection, ['elements'], 'Kernel');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;

		var found;
		for(var i in self['@elements']) {
			if(anObject == self['@elements'][i]) {
				found = true;
				break;
			}
		}
		if(!found) {self['@elements'].push(anObject)}
	;
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09%3C%0A%09%09var%20found%3B%0A%09%09for%28var%20i%20in%20self%5B%27@elements%27%5D%29%20%7B%0A%09%09%09if%28anObject%20%3D%3D%20self%5B%27@elements%27%5D%5Bi%5D%29%20%7B%0A%09%09%09%09found%20%3D%20true%3B%0A%09%09%09%09break%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%09if%28%21found%29%20%7Bself%5B%27@elements%27%5D.push%28anObject%29%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self['@elements'], "_remove_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09elements%20remove%3A%20anObject'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@elements']=[];
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09elements%20%3A%3D%20%23%28%29'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%5Eelements%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_asArray'),
smalltalk.method({
selector: unescape('asArray'),
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self['@elements'], "_copy", []);
return self;},
args: [],
source: unescape('asArray%0A%09%5Eelements%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_detect_ifNone_'),
smalltalk.method({
selector: unescape('detect%3AifNone%3A'),
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self['@elements'], "_detect_ifNone_", [aBlock, anotherBlock]);
return self;},
args: ["aBlock", "anotherBlock"],
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eelements%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock'),
messageSends: ["detect:ifNone:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09elements%20do%3A%20aBlock'),
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_includes_'),
smalltalk.method({
selector: unescape('includes%3A'),
category: 'testing',
fn: function (anObject){
var self=this;
return smalltalk.send(self['@elements'], "_includes_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('includes%3A%20anObject%0A%09%5Eelements%20includes%3A%20anObject'),
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aCollection, "_class", [])]), "_and_", [(function(){return smalltalk.send(self['@elements'], "__eq", [smalltalk.send(aCollection, "_asArray", [])]);})]);
return self;},
args: ["aCollection"],
source: unescape('%3D%20aCollection%0A%09%5Eself%20class%20%3D%20aCollection%20class%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%09elements%20%3D%20aCollection%20asArray%5D'),
messageSends: ["and:", unescape("%3D"), "class", "asArray"],
referencedClasses: []
}),
smalltalk.Set);



smalltalk.addClass('Transcript', smalltalk.Object, ['textarea'], 'Kernel');

smalltalk.Transcript.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_open", []);
return self;},
args: [],
source: unescape('open%0A%20%20%20%20self%20current%20open'),
messageSends: ["open", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
args: [],
source: unescape('new%0A%20%20%20%20self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'instance creation',
fn: function (){
var self=this;
return self['@current'];
return self;},
args: [],
source: unescape('current%0A%20%20%20%20%5Ecurrent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [anObject]);
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0A%20%20%20%20self%20current%20show%3A%20anObject'),
messageSends: ["show:", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_show_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
args: [],
source: unescape('cr%0A%20%20%20%20self%20current%20show%3A%20String%20cr'),
messageSends: ["show:", "current", "cr"],
referencedClasses: ["String"]
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_clear", []);
return self;},
args: [],
source: unescape('clear%0A%20%20%20%20self%20current%20clear'),
messageSends: ["clear", "current"],
referencedClasses: []
}),
smalltalk.Transcript.klass);

smalltalk.addMethod(
unescape('_register_'),
smalltalk.method({
selector: unescape('register%3A'),
category: 'instance creation',
fn: function (aTranscript){
var self=this;
self['@current']=aTranscript;
return self;},
args: ["aTranscript"],
source: unescape('register%3A%20aTranscript%0A%09current%20%3A%3D%20aTranscript'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Transcript.klass);


smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel');
smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('clear%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
category: 'printing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('cr%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
category: 'printing',
fn: function (anObject){
var self=this;
console.log(String(anObject._asString()));
return self;},
args: ["anObject"],
source: unescape('show%3A%20anObject%0A%09%3Cconsole.log%28String%28anObject._asString%28%29%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('open'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('initialize%0A%09Transcript%20register%3A%20self%20new'),
messageSends: ["register:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);


smalltalk.addPackage('Compiler', {});
smalltalk.addClass('ChunkParser', smalltalk.Object, ['stream'], 'Compiler');
smalltalk.addMethod(
unescape('_stream_'),
smalltalk.method({
selector: unescape('stream%3A'),
category: 'accessing',
fn: function (aStream){
var self=this;
self['@stream']=aStream;
return self;},
args: ["aStream"],
source: unescape('stream%3A%20aStream%0A%09stream%20%3A%3D%20aStream'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ChunkParser);

smalltalk.addMethod(
unescape('_nextChunk'),
smalltalk.method({
selector: unescape('nextChunk'),
category: 'reading',
fn: function (){
var self=this;
try{var char_=nil;
var result=nil;
var chunk=nil;
result=smalltalk.send("", "_writeStream", []);
(function(){while((function(){char_=smalltalk.send(self['@stream'], "_next", []);return smalltalk.send(char_, "_notNil", []);})()) {(function(){((($receiver = smalltalk.send(char_, "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@stream'], "_peek", []), "__eq", [unescape("%21")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_next", []);})() : (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_next", []);}), (function(){return (function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return smalltalk.send(smalltalk.send(result, "_contents", []), "_trimBoth", [])}})})();})]));})]));return smalltalk.send(result, "_nextPut_", [char_]);})()}})();
(function(){throw({name: 'stReturn', selector: '_nextChunk', fn: function(){return nil}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_nextChunk'){return e.fn()} throw(e)}},
args: [],
source: unescape('nextChunk%0A%09%22The%20chunk%20format%20%28Smalltalk%20Interchange%20Format%20or%20Fileout%20format%29%0A%09is%20a%20trivial%20format%20but%20can%20be%20a%20bit%20tricky%20to%20understand%3A%0A%09%09-%20Uses%20the%20exclamation%20mark%20as%20delimiter%20of%20chunks.%0A%09%09-%20Inside%20a%20chunk%20a%20normal%20exclamation%20mark%20must%20be%20doubled.%0A%09%09-%20A%20non%20empty%20chunk%20must%20be%20a%20valid%20Smalltalk%20expression.%0A%09%09-%20A%20chunk%20on%20top%20level%20with%20a%20preceding%20empty%20chunk%20is%20an%20instruction%20chunk%3A%0A%09%09%09-%20The%20object%20created%20by%20the%20expression%20then%20takes%20over%20reading%20chunks.%0A%0A%09This%20metod%20returns%20next%20chunk%20as%20a%20String%20%28trimmed%29%2C%20empty%20String%20%28all%20whitespace%29%20or%20nil.%22%0A%0A%09%7C%20char%20result%20chunk%20%7C%0A%09result%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20%20%20%20%20%5Bchar%20%3A%3D%20stream%20next.%0A%20%20%20%20%20%20%20%20char%20notNil%5D%20whileTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20char%20%3D%20%27%21%27%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20peek%20%3D%20%27%21%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20%5Bstream%20next%20%22skipping%20the%20escape%20double%22%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifFalse%3A%20%5B%5Eresult%20contents%20trimBoth%20%20%22chunk%20end%20marker%20found%22%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20result%20nextPut%3A%20char%5D.%0A%09%5Enil%20%22a%20chunk%20needs%20to%20end%20with%20%21%22'),
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", unescape("%3D"), "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"],
referencedClasses: []
}),
smalltalk.ChunkParser);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
category: 'not yet classified',
fn: function (aStream){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_stream_", [aStream]);
return self;},
args: ["aStream"],
source: unescape('on%3A%20aStream%0A%09%5Eself%20new%20stream%3A%20aStream'),
messageSends: ["stream:", "new"],
referencedClasses: []
}),
smalltalk.ChunkParser.klass);


smalltalk.addClass('Importer', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_import_'),
smalltalk.method({
selector: unescape('import%3A'),
category: 'fileIn',
fn: function (aStream){
var self=this;
var chunk=nil;
var result=nil;
var parser=nil;
var lastEmpty=nil;
parser=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_on_", [aStream]);
lastEmpty=false;
(function(){while(!(function(){chunk=smalltalk.send(parser, "_nextChunk", []);return smalltalk.send(chunk, "_isNil", []);})()) {(function(){return ((($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return lastEmpty=true;})() : (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return ((($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return lastEmpty=true;}), (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [chunk]);return ((($receiver = lastEmpty).klass === smalltalk.Boolean) ? ($receiver ? (function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){lastEmpty=false;return smalltalk.send(result, "_scanFrom_", [parser]);})]));})]));})()}})();
return self;},
args: ["aStream"],
source: unescape('import%3A%20aStream%0A%20%20%20%20%7C%20chunk%20result%20parser%20lastEmpty%20%7C%0A%20%20%20%20parser%20%3A%3D%20ChunkParser%20on%3A%20aStream.%0A%20%20%20%20lastEmpty%20%3A%3D%20false.%0A%20%20%20%20%5Bchunk%20%3A%3D%20parser%20nextChunk.%0A%20%20%20%20%20chunk%20isNil%5D%20whileFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20chunk%20isEmpty%0A%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5BlastEmpty%20%3A%3D%20true%5D%0A%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%09%09result%20%3A%3D%20Compiler%20new%20loadExpression%3A%20chunk.%0A%20%20%20%20%20%20%20%20%09%09lastEmpty%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09lastEmpty%20%3A%3D%20false.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09result%20scanFrom%3A%20parser%5D%5D%5D'),
messageSends: ["on:", "whileFalse:", "nextChunk", "isNil", "ifTrue:ifFalse:", "isEmpty", "loadExpression:", "new", "ifTrue:", "scanFrom:"],
referencedClasses: ["ChunkParser", "Compiler"]
}),
smalltalk.Importer);



smalltalk.addClass('Exporter', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
((($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [aClass])]);smalltalk.send($rec, "_nextPutAll_", [unescape(".comment%3D")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aClass, "_comment", []), "_escaped", [])]), "__comma", [unescape("%27%29")])]);})(aStream);})]));
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%20%20%20%20%09lf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%09nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27.comment%3D%27%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aClass%20comment%20escaped%2C%20%27%27%27%29%27%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "lf", "escaped"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMetaDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportMetaDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape(".iVarNames%20%3D%20%5B")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(unescape("%5D%3B"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])])]);})]));
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09nextPutAll%3A%20%27.iVarNames%20%3D%20%5B%27.%0A%09%20%20%20%20aClass%20class%20instanceVariableNames%0A%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%20%20%20%20aStream%20nextPutAll%3A%20%27%5D%3B%27%2C%20String%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", unescape("%2C"), "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMethodsOf_on_'),
smalltalk.method({
selector: unescape('exportMethodsOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(smalltalk.send(each, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]));})]);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%28each%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%0A%09%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D%5D.%0A%09aStream%20lf'),
messageSends: ["do:", "values", "methodDictionary", "ifFalse:", "match:", "category", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'private',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("category%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_category", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_arguments", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_source", []), "_escaped", [])]), "__comma", [unescape("%27%29%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("messageSends: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_messageSends", []), "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("referencedClasses: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_referencedClasses", []), "_asJavascript", [])])]);})(aStream);
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27unescape%28%27%27%27%2C%20aMethod%20selector%20asSelector%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20unescape%28%27%27%27%2C%20aMethod%20selector%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27category%3A%20%27%27%27%2C%20aMethod%20category%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27args%3A%20%27%2C%20aMethod%20arguments%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27source%3A%20unescape%28%27%27%27%2C%20aMethod%20source%20escaped%2C%20%27%27%27%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27messageSends%3A%20%27%2C%20aMethod%20messageSends%20asJavascript%2C%20%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%27%2C%20aMethod%20referencedClasses%20asJavascript.%0A%09aStream%0A%09%09lf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "escaped", "asSelector", "selector", "category", "compiledSource", "fn", "asJavascript", "arguments", "source", "messageSends", "referencedClasses", "classNameFor:"],
referencedClasses: []
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackage_'),
smalltalk.method({
selector: unescape('exportPackage%3A'),
category: 'fileOut',
fn: function (packageName){
var self=this;
var package=nil;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){package=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packageAt_", [packageName]);smalltalk.send(self, "_exportPackageDefinitionOf_on_", [package, stream]);smalltalk.send(smalltalk.send(package, "_classes", []), "_do_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportClass_", [each])]);})]);return smalltalk.send(self, "_exportPackageExtensionsOf_on_", [package, stream]);})]);
return self;},
args: ["packageName"],
source: unescape('exportPackage%3A%20packageName%0A%09%22Export%20a%20given%20package%20by%20name.%22%0A%0A%09%7C%20package%20%7C%0A%09%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20package%20%3A%3D%20Smalltalk%20current%20packageAt%3A%20packageName.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20exportPackageDefinitionOf%3A%20package%20on%3A%20stream.%0A%09%20%20%20%20%09package%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%28self%20exportClass%3A%20each%29%5D.%0A%09%09self%20exportPackageExtensionsOf%3A%20package%20on%3A%20stream%5D'),
messageSends: ["streamContents:", "packageAt:", "current", "exportPackageDefinitionOf:on:", "do:", "classes", "nextPutAll:", "exportClass:", "exportPackageExtensionsOf:on:"],
referencedClasses: ["String", "Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportAll'),
smalltalk.method({
selector: unescape('exportAll'),
category: 'fileOut',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_packages", []), "_do_", [(function(pkg){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(self, "_exportPackage_", [smalltalk.send(pkg, "_name", [])])]);})]);})]);
return self;},
args: [],
source: unescape('exportAll%0A%20%20%20%20%22Export%20all%20packages%20in%20the%20system.%22%0A%0A%20%20%20%20%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%20%20%20%20%09Smalltalk%20current%20packages%20do%3A%20%5B%3Apkg%20%7C%0A%09%09stream%20nextPutAll%3A%20%28self%20exportPackage%3A%20pkg%20name%29%5D%5D'),
messageSends: ["streamContents:", "do:", "packages", "current", "nextPutAll:", "exportPackage:", "name"],
referencedClasses: ["String", "Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportClass_'),
smalltalk.method({
selector: unescape('exportClass%3A'),
category: 'fileOut',
fn: function (aClass){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){smalltalk.send(self, "_exportDefinitionOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMethodsOf_on_", [aClass, stream]);smalltalk.send(self, "_exportMetaDefinitionOf_on_", [aClass, stream]);return smalltalk.send(self, "_exportMethodsOf_on_", [smalltalk.send(aClass, "_class", []), stream]);})]);
return self;},
args: ["aClass"],
source: unescape('exportClass%3A%20aClass%0A%09%22Export%20a%20single%20class.%20Subclasses%20override%20these%20methods.%22%0A%0A%09%5EString%20streamContents%3A%20%5B%3Astream%20%7C%0A%09%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMethodsOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream.%0A%09%09self%20exportMethodsOf%3A%20aClass%20class%20on%3A%20stream%5D'),
messageSends: ["streamContents:", "exportDefinitionOf:on:", "exportMethodsOf:on:", "exportMetaDefinitionOf:on:", "class"],
referencedClasses: ["String"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackageExtensionsOf_on_'),
smalltalk.method({
selector: unescape('exportPackageExtensionsOf%3Aon%3A'),
category: 'private',
fn: function (package, aStream){
var self=this;
var name=nil;
name=smalltalk.send(package, "_name", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [name])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethod_of_on_", [method, each, aStream]);})]));})]);})]);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageExtensionsOf%3A%20package%20on%3A%20aStream%0A%09%7C%20name%20%7C%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethod%3A%20method%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["name", "do:", unescape("%2C"), "classes", "current", "collect:", "class", "values", "methodDictionary", "ifTrue:", unescape("%3D"), "category", "exportMethod:of:on:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Exporter);

smalltalk.addMethod(
unescape('_exportPackageDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportPackageDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (package, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addPackage%28")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(package, "_name", [])]), "__comma", [unescape("%27%2C%20")]), "__comma", [smalltalk.send(package, "_propertiesAsJSON", [])]), "__comma", [unescape("%29%3B")])]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageDefinitionOf%3A%20package%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addPackage%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20package%20name%2C%20%27%27%27%2C%20%27%2C%20package%20propertiesAsJSON%20%2C%20%27%29%3B%27.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "name", "propertiesAsJSON", "lf"],
referencedClasses: []
}),
smalltalk.Exporter);



smalltalk.addClass('ChunkExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%20subclass%3A%20%23"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%09instanceVariableNames%3A%20%27")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%09category%3A%20%27"), "__comma", [smalltalk.send(aClass, "_category", [])]), "__comma", [unescape("%27%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
((($receiver = smalltalk.send(smalltalk.send(aClass, "_comment", []), "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%20commentStamp%21")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aClass, "_comment", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);})]));
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09%22Chunk%20format.%22%0A%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%20subclass%3A%20%23%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09instanceVariableNames%3A%20%27%27%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%09category%3A%20%27%27%27%2C%20aClass%20category%2C%20%27%27%27%21%27%3B%20lf.%0A%20%09aClass%20comment%20notEmpty%20ifTrue%3A%20%5B%0A%09%20%20%20%20aStream%20%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%20commentStamp%21%27%3Blf%3B%0A%09%09nextPutAll%3A%20%28self%20chunkEscape%3A%20aClass%20comment%29%2C%20%27%21%27%3Blf%5D.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", "classNameFor:", "superclass", unescape("%2C"), "lf", "do:separatedBy:", "instanceVariableNames", "category", "ifTrue:", "notEmpty", "comment", "chunkEscape:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'not yet classified',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_chunkEscape_", [smalltalk.send(aMethod, "_source", [])])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("%21")]);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09lf%3B%20lf%3B%20nextPutAll%3A%20%28self%20chunkEscape%3A%20aMethod%20source%29%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27%21%27'),
messageSends: ["lf", "nextPutAll:", "chunkEscape:", "source"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethodsOf_on_'),
smalltalk.method({
selector: unescape('exportMethodsOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
smalltalk.send(aClass, "_protocolsDo_", [(function(category, methods){return ((($receiver = smalltalk.send(category, "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, aClass, aStream]);})]));})]);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMethodsOf%3A%20aClass%20on%3A%20aStream%0A%0A%20%20%20aClass%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%28category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09self%0A%09%09%09exportMethods%3A%20methods%0A%09%09%09category%3A%20category%0A%09%09%09of%3A%20aClass%0A%09%09%09on%3A%20aStream%5D%5D'),
messageSends: ["protocolsDo:", "ifFalse:", "match:", "exportMethods:category:of:on:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMetaDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportMetaDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (aClass, aStream){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_class", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%20instanceVariableNames%3A%20%27")]);})(aStream);smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [" "]);})]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%27%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);})]));
return self;},
args: ["aClass", "aStream"],
source: unescape('exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%0A%09aClass%20class%20instanceVariableNames%20isEmpty%20ifFalse%3A%20%5B%0A%09%09aStream%20%0A%09%09%20%20%20%20nextPutAll%3A%20%28self%20classNameFor%3A%20aClass%20class%29%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%20instanceVariableNames%3A%20%27%27%27.%0A%09%09aClass%20class%20instanceVariableNames%20%0A%09%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20each%5D%0A%09%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%27%5D.%0A%09%09aStream%09%0A%09%09%20%20%20%20nextPutAll%3A%20%27%27%27%21%27%3B%20lf%3B%20lf%5D'),
messageSends: ["ifFalse:", "isEmpty", "instanceVariableNames", "class", "nextPutAll:", "classNameFor:", "do:separatedBy:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'not yet classified',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [" class"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27%20class%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_chunkEscape_'),
smalltalk.method({
selector: unescape('chunkEscape%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_replace_with_", [unescape("%21"), unescape("%21%21")]), "_trimBoth", []);
return self;},
args: ["aString"],
source: unescape('chunkEscape%3A%20aString%0A%09%22Replace%20all%20occurrences%20of%20%21%20with%20%21%21%20and%20trim%20at%20both%20ends.%22%0A%0A%09%5E%28aString%20replace%3A%20%27%21%27%20with%3A%20%27%21%21%27%29%20trimBoth'),
messageSends: ["trimBoth", "replace:with:"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportMethods_category_of_on_'),
smalltalk.method({
selector: unescape('exportMethods%3Acategory%3Aof%3Aon%3A'),
category: 'not yet classified',
fn: function (methods, category, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(unescape("%21"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%20methodsFor%3A%20%27"), "__comma", [category]), "__comma", [unescape("%27%21")])]);})(aStream);
smalltalk.send(methods, "_do_", [(function(each){return smalltalk.send(self, "_exportMethod_of_on_", [each, aClass, aStream]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%20%21")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["methods", "category", "aClass", "aStream"],
source: unescape('exportMethods%3A%20methods%20category%3A%20category%20of%3A%20aClass%20on%3A%20aStream%0A%0A%09aStream%0A%09%09nextPutAll%3A%20%27%21%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%20methodsFor%3A%20%27%27%27%2C%20category%2C%20%27%27%27%21%27.%0A%20%20%20%20%09methods%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20exportMethod%3A%20each%20of%3A%20aClass%20on%3A%20aStream%5D.%0A%09aStream%20nextPutAll%3A%20%27%20%21%27%3B%20lf%3B%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "do:", "exportMethod:of:on:", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportPackageExtensionsOf_on_'),
smalltalk.method({
selector: unescape('exportPackageExtensionsOf%3Aon%3A'),
category: 'not yet classified',
fn: function (package, aStream){
var self=this;
var name=nil;
name=smalltalk.send(package, "_name", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(each, "_protocolsDo_", [(function(category, methods){return ((($receiver = smalltalk.send(category, "__eq", [smalltalk.send(unescape("*"), "__comma", [name])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_exportMethods_category_of_on_", [methods, category, each, aStream]);})]));})]);})]);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageExtensionsOf%3A%20package%20on%3A%20aStream%0A%09%22We%20need%20to%20override%20this%20one%20too%20since%20we%20need%20to%20group%0A%09all%20methods%20in%20a%20given%20protocol%20under%20a%20leading%20methodsFor%3A%20chunk%0A%09for%20that%20class.%22%0A%0A%09%7C%20name%20%7C%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20protocolsDo%3A%20%5B%3Acategory%20%3Amethods%20%7C%0A%09%09%09category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09self%20exportMethods%3A%20methods%20category%3A%20category%20of%3A%20each%20on%3A%20aStream%5D%5D%5D'),
messageSends: ["name", "do:", unescape("%2C"), "classes", "current", "collect:", "class", "protocolsDo:", "ifTrue:", unescape("%3D"), "exportMethods:category:of:on:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.ChunkExporter);

smalltalk.addMethod(
unescape('_exportPackageDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportPackageDefinitionOf%3Aon%3A'),
category: 'not yet classified',
fn: function (package, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("Smalltalk%20current%20createPackage%3A%20%27"), "__comma", [smalltalk.send(package, "_name", [])]), "__comma", [unescape("%27%20properties%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(package, "_properties", []), "_storeString", [])]), "__comma", [unescape("%21")])]);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["package", "aStream"],
source: unescape('exportPackageDefinitionOf%3A%20package%20on%3A%20aStream%0A%09%22Chunk%20format.%22%0A%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27Smalltalk%20current%20createPackage%3A%20%27%27%27%2C%20package%20name%2C%0A%09%09%27%27%27%20properties%3A%20%27%2C%20package%20properties%20storeString%2C%20%27%21%27%3B%20lf.'),
messageSends: ["nextPutAll:", unescape("%2C"), "name", "storeString", "properties", "lf"],
referencedClasses: []
}),
smalltalk.ChunkExporter);



smalltalk.addClass('StrippedExporter', smalltalk.Exporter, [], 'Compiler');
smalltalk.addMethod(
unescape('_exportDefinitionOf_on_'),
smalltalk.method({
selector: unescape('exportDefinitionOf%3Aon%3A'),
category: 'private',
fn: function (aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addClass%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])]), "__comma", [unescape("%27%2C%20")])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(aClass, "_superclass", [])])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20%5B")]);})(aStream);
smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(aStream, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [each]), "__comma", [unescape("%27")])]);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%5D%2C%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(aClass, "_category", []), "__comma", [unescape("%27")])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);})(aStream);
smalltalk.send(aStream, "_lf", []);
return self;},
args: ["aClass", "aStream"],
source: unescape('exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%27%27%27%2C%20%28self%20classNameFor%3A%20aClass%29%2C%20%27%27%27%2C%20%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%20superclass%29%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0A%09aClass%20instanceVariableNames%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09aStream%09%0A%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27.%0A%09aStream%20lf'),
messageSends: ["nextPutAll:", unescape("%2C"), "classNameFor:", "superclass", "do:separatedBy:", "instanceVariableNames", "category", "lf"],
referencedClasses: []
}),
smalltalk.StrippedExporter);

smalltalk.addMethod(
unescape('_exportMethod_of_on_'),
smalltalk.method({
selector: unescape('exportMethod%3Aof%3Aon%3A'),
category: 'private',
fn: function (aMethod, aClass, aStream){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.addMethod%28")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send(smalltalk.send(aMethod, "_selector", []), "_asSelector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%27"), "__comma", [smalltalk.send(aMethod, "_selector", [])]), "__comma", [unescape("%27%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("fn: ", "__comma", [smalltalk.send(smalltalk.send(aMethod, "_fn", []), "_compiledSource", [])])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%2C")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send("smalltalk.", "__comma", [smalltalk.send(self, "_classNameFor_", [aClass])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29%3B")]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_lf", []);})(aStream);
return self;},
args: ["aMethod", "aClass", "aStream"],
source: unescape('exportMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20aStream%0A%09aStream%20%0A%09%09nextPutAll%3A%20%27smalltalk.addMethod%28%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27%27%27%27%2C%20aMethod%20selector%20asSelector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.method%28%7B%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27selector%3A%20%27%27%27%2C%20aMethod%20selector%2C%20%27%27%27%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27fn%3A%20%27%2C%20aMethod%20fn%20compiledSource%3Blf%3B%0A%09%09nextPutAll%3A%20%27%7D%29%2C%27%3Blf%3B%0A%09%09nextPutAll%3A%20%27smalltalk.%27%2C%20%28self%20classNameFor%3A%20aClass%29%3B%0A%09%09nextPutAll%3A%20%27%29%3B%27%3Blf%3Blf'),
messageSends: ["nextPutAll:", "lf", unescape("%2C"), "asSelector", "selector", "compiledSource", "fn", "classNameFor:"],
referencedClasses: []
}),
smalltalk.StrippedExporter);



smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@nodes']) == nil || $receiver == undefined) ? (function(){return self['@nodes']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('nodes%0A%09%5Enodes%20ifNil%3A%20%5Bnodes%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_nodes_'),
smalltalk.method({
selector: unescape('nodes%3A'),
category: 'building',
fn: function (aCollection){
var self=this;
self['@nodes']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('nodes%3A%20aCollection%0A%09nodes%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_addNode_'),
smalltalk.method({
selector: unescape('addNode%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self, "_nodes", []), "_add_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('addNode%3A%20aNode%0A%09self%20nodes%20add%3A%20aNode'),
messageSends: ["add:", "nodes"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitNode%3A%20self'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isValueNode'),
smalltalk.method({
selector: unescape('isValueNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isValueNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isBlockNode'),
smalltalk.method({
selector: unescape('isBlockNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isBlockNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);

smalltalk.addMethod(
unescape('_isBlockSequenceNode'),
smalltalk.method({
selector: unescape('isBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isBlockSequenceNode%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Node);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return self['@source'];
return self;},
args: [],
source: unescape('source%0A%09%5Esource'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitMethodNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitMethodNode%3A%20self'),
messageSends: ["visitMethodNode:"],
referencedClasses: []
}),
smalltalk.MethodNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
args: [],
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_selector_'),
smalltalk.method({
selector: unescape('selector%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
args: ["aString"],
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@arguments']) == nil || $receiver == undefined) ? (function(){return self['@arguments']=[];})() : $receiver;
return self;},
args: [],
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5Barguments%20%3A%3D%20%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_arguments_'),
smalltalk.method({
selector: unescape('arguments%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
args: ["aNode"],
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_valueForReceiver_'),
smalltalk.method({
selector: unescape('valueForReceiver%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_receiver_", [(($receiver = smalltalk.send(self, "_receiver", [])) == nil || $receiver == undefined) ? (function(){return anObject;})() : (function(){return smalltalk.send(smalltalk.send(self, "_receiver", []), "_valueForReceiver_", [anObject]);})()]);smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));
return self;},
args: ["anObject"],
source: unescape('valueForReceiver%3A%20anObject%0A%09%5ESendNode%20new%0A%09%20%20%20%20receiver%3A%20%28self%20receiver%20%0A%09%09ifNil%3A%20%5BanObject%5D%0A%09%09ifNotNil%3A%20%5Bself%20receiver%20valueForReceiver%3A%20anObject%5D%29%3B%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself'),
messageSends: ["receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself", "new"],
referencedClasses: ["SendNode"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_cascadeNodeWithMessages_'),
smalltalk.method({
selector: unescape('cascadeNodeWithMessages%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
var first=nil;
first=(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SendNode || SendNode), "_new", []));
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(self, "_receiver", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(smalltalk.send((smalltalk.Array || Array), "_with_", [first]), "__comma", [aCollection])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.CascadeNode || CascadeNode), "_new", []));
return self;},
args: ["aCollection"],
source: unescape('cascadeNodeWithMessages%3A%20aCollection%0A%09%7C%20first%20%7C%0A%09first%20%3A%3D%20SendNode%20new%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself.%0A%09%5ECascadeNode%20new%0A%09%20%20%20%20receiver%3A%20self%20receiver%3B%0A%09%20%20%20%20nodes%3A%20%28Array%20with%3A%20first%29%2C%20aCollection%3B%0A%09%20%20%20%20yourself'),
messageSends: ["selector:", "selector", "arguments:", "arguments", "yourself", "new", "receiver:", "receiver", "nodes:", unescape("%2C"), "with:"],
referencedClasses: ["SendNode", "Array", "CascadeNode"]
}),
smalltalk.SendNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSendNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSendNode%3A%20self'),
messageSends: ["visitSendNode:"],
referencedClasses: []
}),
smalltalk.SendNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
args: [],
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
args: ["aNode"],
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitCascadeNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitCascadeNode%3A%20self'),
messageSends: ["visitCascadeNode:"],
referencedClasses: []
}),
smalltalk.CascadeNode);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
unescape('_left'),
smalltalk.method({
selector: unescape('left'),
category: 'accessing',
fn: function (){
var self=this;
return self['@left'];
return self;},
args: [],
source: unescape('left%0A%09%5Eleft'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@left']=aNode;
smalltalk.send(self['@left'], "_assigned_", [true]);
return self;},
args: ["aNode"],
source: unescape('left%3A%20aNode%0A%09left%20%3A%3D%20aNode.%0A%09left%20assigned%3A%20true'),
messageSends: ["assigned:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_right'),
smalltalk.method({
selector: unescape('right'),
category: 'accessing',
fn: function (){
var self=this;
return self['@right'];
return self;},
args: [],
source: unescape('right%0A%09%5Eright'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_right_'),
smalltalk.method({
selector: unescape('right%3A'),
category: 'accessing',
fn: function (aNode){
var self=this;
self['@right']=aNode;
return self;},
args: ["aNode"],
source: unescape('right%3A%20aNode%0A%09right%20%3A%3D%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitAssignmentNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitAssignmentNode%3A%20self'),
messageSends: ["visitAssignmentNode:"],
referencedClasses: []
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'inlined'], 'Compiler');
smalltalk.addMethod(
unescape('_parameters'),
smalltalk.method({
selector: unescape('parameters'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@parameters']) == nil || $receiver == undefined) ? (function(){return self['@parameters']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('parameters%0A%09%5Eparameters%20ifNil%3A%20%5Bparameters%20%3A%3D%20Array%20new%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_parameters_'),
smalltalk.method({
selector: unescape('parameters%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@parameters']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('parameters%3A%20aCollection%0A%09parameters%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockNode%3A%20self'),
messageSends: ["visitBlockNode:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_isBlockNode'),
smalltalk.method({
selector: unescape('isBlockNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isBlockNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_inlined'),
smalltalk.method({
selector: unescape('inlined'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@inlined']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: unescape('inlined%0A%09%5Einlined%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.BlockNode);

smalltalk.addMethod(
unescape('_inlined_'),
smalltalk.method({
selector: unescape('inlined%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@inlined']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('inlined%3A%20aBoolean%0A%09inlined%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
unescape('_temps'),
smalltalk.method({
selector: unescape('temps'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@temps']) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver;
return self;},
args: [],
source: unescape('temps%0A%09%5Etemps%20ifNil%3A%20%5B%23%28%29%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_temps_'),
smalltalk.method({
selector: unescape('temps%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@temps']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('temps%3A%20aCollection%0A%09temps%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_asBlockSequenceNode'),
smalltalk.method({
selector: unescape('asBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(self, "_nodes", [])]);smalltalk.send($rec, "_temps_", [smalltalk.send(self, "_temps", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.BlockSequenceNode || BlockSequenceNode), "_new", []));
return self;},
args: [],
source: unescape('asBlockSequenceNode%0A%09%5EBlockSequenceNode%20new%0A%09%20%20%20%20nodes%3A%20self%20nodes%3B%0A%09%20%20%20%20temps%3A%20self%20temps%3B%0A%09%20%20%20%20yourself'),
messageSends: ["nodes:", "nodes", "temps:", "temps", "yourself", "new"],
referencedClasses: ["BlockSequenceNode"]
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSequenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSequenceNode%3A%20self'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockSequenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockSequenceNode%3A%20self'),
messageSends: ["visitBlockSequenceNode:"],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
unescape('_isBlockSequenceNode'),
smalltalk.method({
selector: unescape('isBlockSequenceNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isBlockSequenceNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitReturnNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitReturnNode%3A%20self'),
messageSends: ["visitReturnNode:"],
referencedClasses: []
}),
smalltalk.ReturnNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
args: [],
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_value_'),
smalltalk.method({
selector: unescape('value%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@value']=anObject;
return self;},
args: ["anObject"],
source: unescape('value%3A%20anObject%0A%09value%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitValueNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitValueNode%3A%20self'),
messageSends: ["visitValueNode:"],
referencedClasses: []
}),
smalltalk.ValueNode);

smalltalk.addMethod(
unescape('_isValueNode'),
smalltalk.method({
selector: unescape('isValueNode'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isValueNode%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned'], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitVariableNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitVariableNode%3A%20self'),
messageSends: ["visitVariableNode:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
unescape('_assigned'),
smalltalk.method({
selector: unescape('assigned'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@assigned']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: unescape('assigned%0A%09%5Eassigned%20ifNil%3A%20%5Bfalse%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.VariableNode);

smalltalk.addMethod(
unescape('_assigned_'),
smalltalk.method({
selector: unescape('assigned%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@assigned']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('assigned%3A%20aBoolean%0A%09assigned%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitClassReferenceNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitClassReferenceNode%3A%20self'),
messageSends: ["visitClassReferenceNode:"],
referencedClasses: []
}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitJSStatementNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitJSStatementNode%3A%20self'),
messageSends: ["visitJSStatementNode:"],
referencedClasses: []
}),
smalltalk.JSStatementNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
unescape('_visit_'),
smalltalk.method({
selector: unescape('visit%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
args: ["aNode"],
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitNode_'),
smalltalk.method({
selector: unescape('visitNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
args: ["aNode"],
source: unescape('visitNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitMethodNode_'),
smalltalk.method({
selector: unescape('visitMethodNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitMethodNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitSequenceNode_'),
smalltalk.method({
selector: unescape('visitSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitSequenceNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitBlockSequenceNode_'),
smalltalk.method({
selector: unescape('visitBlockSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitSequenceNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09self%20visitSequenceNode%3A%20aNode'),
messageSends: ["visitSequenceNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitBlockNode_'),
smalltalk.method({
selector: unescape('visitBlockNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitBlockNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitReturnNode_'),
smalltalk.method({
selector: unescape('visitReturnNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitReturnNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitSendNode_'),
smalltalk.method({
selector: unescape('visitSendNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitSendNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitCascadeNode_'),
smalltalk.method({
selector: unescape('visitCascadeNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitCascadeNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitValueNode_'),
smalltalk.method({
selector: unescape('visitValueNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitValueNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitVariableNode_'),
smalltalk.method({
selector: unescape('visitVariableNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
args: ["aNode"],
source: unescape('visitVariableNode%3A%20aNode'),
messageSends: [],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitAssignmentNode_'),
smalltalk.method({
selector: unescape('visitAssignmentNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitClassReferenceNode_'),
smalltalk.method({
selector: unescape('visitClassReferenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})(self);
return self;},
args: ["aNode"],
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20value'),
messageSends: ["nextPutAll:", "value"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitJSStatementNode_'),
smalltalk.method({
selector: unescape('visitJSStatementNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("function%28%29%7B")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%28%29")]);})(self);
return self;},
args: ["aNode"],
source: unescape('visitJSStatementNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27function%28%29%7B%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20source%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%29%28%29%27'),
messageSends: ["nextPutAll:", "source"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitDynamicArrayNode_'),
smalltalk.method({
selector: unescape('visitDynamicArrayNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicArrayNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
unescape('_visitDynamicDictionaryNode_'),
smalltalk.method({
selector: unescape('visitDynamicDictionaryNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicDictionaryNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode'),
messageSends: ["visitNode:"],
referencedClasses: []
}),
smalltalk.NodeVisitor);



smalltalk.addClass('Compiler', smalltalk.NodeVisitor, ['stream', 'nestedBlocks', 'earlyReturn', 'currentClass', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced', 'source', 'argVariables'], 'Compiler');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.NodeVisitor);
self['@stream']=smalltalk.send("", "_writeStream", []);
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@argVariables']=[];
self['@messageSends']=[];
self['@classReferenced']=[];
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%20%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09argVariables%20%3A%3D%20%23%28%29.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09classReferenced%20%3A%3D%20%23%28%29'),
messageSends: ["initialize", "writeStream"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parser'),
smalltalk.method({
selector: unescape('parser'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.SmalltalkParser || SmalltalkParser), "_new", []);
return self;},
args: [],
source: unescape('parser%0A%09%5ESmalltalkParser%20new'),
messageSends: ["new"],
referencedClasses: ["SmalltalkParser"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_currentClass'),
smalltalk.method({
selector: unescape('currentClass'),
category: 'accessing',
fn: function (){
var self=this;
return self['@currentClass'];
return self;},
args: [],
source: unescape('currentClass%0A%09%5EcurrentClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_currentClass_'),
smalltalk.method({
selector: unescape('currentClass%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
self['@currentClass']=aClass;
return self;},
args: ["aClass"],
source: unescape('currentClass%3A%20aClass%0A%09currentClass%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_loadExpression_'),
smalltalk.method({
selector: unescape('loadExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send((smalltalk.DoIt || DoIt), "_addCompiledMethod_", [smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compileExpression_", [aString])])]);
result=smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt), "_new", []), "_doIt", []);
smalltalk.send((smalltalk.DoIt || DoIt), "_removeCompiledMethod_", [smalltalk.send(smalltalk.send((smalltalk.DoIt || DoIt), "_methodDictionary", []), "_at_", ["doIt"])]);
return result;
return self;},
args: ["aString"],
source: unescape('loadExpression%3A%20aString%0A%09%7C%20result%20%7C%0A%09DoIt%20addCompiledMethod%3A%20%28self%20eval%3A%20%28self%20compileExpression%3A%20aString%29%29.%0A%09result%20%3A%3D%20DoIt%20new%20doIt.%0A%09DoIt%20removeCompiledMethod%3A%20%28DoIt%20methodDictionary%20at%3A%20%23doIt%29.%0A%09%5Eresult'),
messageSends: ["addCompiledMethod:", "eval:", "compileExpression:", "doIt", "new", "removeCompiledMethod:", "at:", "methodDictionary"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_load_forClass_'),
smalltalk.method({
selector: unescape('load%3AforClass%3A'),
category: 'compiling',
fn: function (aString, aClass){
var self=this;
var compiled=nil;
compiled=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compile_forClass_", [aString, aClass])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return compiled;
return self;},
args: ["aString", "aClass"],
source: unescape('load%3A%20aString%20forClass%3A%20aClass%0A%09%7C%20compiled%20%7C%0A%09compiled%20%3A%3D%20self%20eval%3A%20%28self%20compile%3A%20aString%20forClass%3A%20aClass%29.%0A%09self%20setupClass%3A%20aClass.%0A%09%5Ecompiled'),
messageSends: ["eval:", "compile:forClass:", "setupClass:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compile_forClass_'),
smalltalk.method({
selector: unescape('compile%3AforClass%3A'),
category: 'compiling',
fn: function (aString, aClass){
var self=this;
smalltalk.send(self, "_currentClass_", [aClass]);
smalltalk.send(self, "_source_", [aString]);
return smalltalk.send(self, "_compile_", [aString]);
return self;},
args: ["aString", "aClass"],
source: unescape('compile%3A%20aString%20forClass%3A%20aClass%0A%09self%20currentClass%3A%20aClass.%0A%09self%20source%3A%20aString.%0A%09%5Eself%20compile%3A%20aString'),
messageSends: ["currentClass:", "source:", "compile:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compileExpression_'),
smalltalk.method({
selector: unescape('compileExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.send(self, "_currentClass_", [(smalltalk.DoIt || DoIt)]);
smalltalk.send(self, "_source_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [smalltalk.send(self, "_source", [])])]);
return self;},
args: ["aString"],
source: unescape('compileExpression%3A%20aString%0A%09self%20currentClass%3A%20DoIt.%0A%09self%20source%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27.%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20self%20source%29'),
messageSends: ["currentClass:", "source:", unescape("%2C"), "compileNode:", "parse:", "source"],
referencedClasses: ["DoIt"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return eval(aString);
return self;},
args: ["aString"],
source: unescape('eval%3A%20aString%0A%09%3Creturn%20eval%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compile_'),
smalltalk.method({
selector: unescape('compile%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [aString])]);
return self;},
args: ["aString"],
source: unescape('compile%3A%20aString%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20aString%29'),
messageSends: ["compileNode:", "parse:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_compileNode_'),
smalltalk.method({
selector: unescape('compileNode%3A'),
category: 'compiling',
fn: function (aNode){
var self=this;
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;},
args: ["aNode"],
source: unescape('compileNode%3A%20aNode%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20visit%3A%20aNode.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "visit:", "contents"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visit_'),
smalltalk.method({
selector: unescape('visit%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;},
args: ["aNode"],
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self'),
messageSends: ["accept:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitMethodNode_'),
smalltalk.method({
selector: unescape('visitMethodNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var currentSelector=nil;
self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []);
self['@nestedBlocks']=(0);
self['@earlyReturn']=false;
self['@messageSends']=[];
self['@referencedClasses']=[];
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@argVariables']=[];
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%22"), "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", [unescape("%22%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%22"), "__comma", [smalltalk.send(smalltalk.send(self, "_source", []), "_escaped", [])]), "__comma", [unescape("%22%29%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("fn%3A%20function%28")]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@argVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%29%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("var%20self%3Dthis%3B")]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
str=self['@stream'];
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})]));
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
self['@stream']=str;
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("return%20self%3B")]);})(self['@stream']);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D")]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("args: ", "__comma", [smalltalk.send(self['@argVariables'], "_asJavascript", [])]), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(each, "_printString", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitMethodNode%3A%20aNode%0A%09%7C%20str%20currentSelector%20%7C%20%0A%09currentSelector%20%3A%3D%20aNode%20selector%20asSelector.%0A%09nestedBlocks%20%3A%3D%200.%0A%09earlyReturn%20%3A%3D%20false.%0A%09messageSends%20%3A%3D%20%23%28%29.%0A%09referencedClasses%20%3A%3D%20%23%28%29.%0A%09unknownVariables%20%3A%3D%20%23%28%29.%0A%09tempVariables%20%3A%3D%20%23%28%29.%0A%09argVariables%20%3A%3D%20%23%28%29.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.method%28%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27selector%3A%20%22%27%2C%20aNode%20selector%2C%20%27%22%2C%27%3B%20lf.%0A%09stream%20nextPutAll%3A%20%27source%3A%20unescape%28%22%27%2C%20self%20source%20escaped%2C%20%27%22%29%2C%27%3Blf.%0A%09stream%20nextPutAll%3A%20%27fn%3A%20function%28%27.%0A%09aNode%20arguments%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%09argVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27%29%7B%27%3B%20lf%3B%0A%09%20%20%20%20nextPutAll%3A%20%27var%20self%3Dthis%3B%27%3B%20lf.%0A%09str%20%3A%3D%20stream.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20str%20nextPutAll%3A%20%27try%7B%27%5D.%0A%09str%20nextPutAll%3A%20stream%20contents.%0A%09stream%20%3A%3D%20str.%0A%09stream%20%0A%09%20%20%20%20lf%3B%20%0A%09%20%20%20%20nextPutAll%3A%20%27return%20self%3B%27.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20lf%3B%20nextPutAll%3A%20%27%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27%27stReturn%27%27%20%26%26%20e.selector%20%3D%3D%3D%20%27%2C%20currentSelector%20printString%2C%20%27%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%27.%0A%09stream%20%0A%09%09nextPutAll%3A%20%27%2C%27%2C%20String%20lf%2C%20%27messageSends%3A%20%27%3B%0A%09%09nextPutAll%3A%20messageSends%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20%27args%3A%20%27%2C%20argVariables%20asJavascript%2C%20%27%2C%27%3B%20lf%3B%0A%09%09nextPutAll%3A%20%27referencedClasses%3A%20%5B%27.%0A%09referencedClasses%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%20printString%5D%0A%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09stream%20nextPutAll%3A%20%27%5D%27.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["asSelector", "selector", "nextPutAll:", "lf", unescape("%2C"), "escaped", "source", "do:separatedBy:", "arguments", "add:", "writeStream", "do:", "nodes", "visit:", "ifTrue:", "contents", "printString", "asJavascript"],
referencedClasses: ["String"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitBlockNode_'),
smalltalk.method({
selector: unescape('visitBlockNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28")]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitBlockNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%28function%28%27.%0A%09aNode%20parameters%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%0A%09%09tempVariables%20add%3A%20each.%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "parameters", "add:", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitSequenceNode_'),
smalltalk.method({
selector: unescape('visitSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;},
args: ["aNode"],
source: unescape('visitSequenceNode%3A%20aNode%0A%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%7C%20temp%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20temp%20%3A%3D%20self%20safeVariableNameFor%3A%20each.%0A%09%20%20%20%20tempVariables%20add%3A%20temp.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20temp%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20lf%5D'),
messageSends: ["do:", "temps", "safeVariableNameFor:", "add:", "nextPutAll:", unescape("%2C"), "lf", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitBlockSequenceNode_'),
smalltalk.method({
selector: unescape('visitBlockSequenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
((($receiver = smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);})() : (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){var temp=nil;
temp=smalltalk.send(self, "_safeVariableNameFor_", [each]);smalltalk.send(self['@tempVariables'], "_add_", [temp]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [temp]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})]));
self['@nestedBlocks']=((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
return self;},
args: ["aNode"],
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20+%201.%0A%09aNode%20nodes%20isEmpty%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20nil%3B%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%20%7C%20temp%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20temp%20%3A%3D%20self%20safeVariableNameFor%3A%20each.%0A%09%09%20%20%20%20tempVariables%20add%3A%20temp.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20temp%2C%20%27%3Dnil%3B%27%3B%20lf%5D.%0A%09%09index%20%3A%3D%200.%0A%09%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%09%20%20%20%20self%20visit%3A%20each.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%5D.%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20-%201'),
messageSends: [unescape("+"), "ifTrue:ifFalse:", "isEmpty", "nodes", "nextPutAll:", "do:", "temps", "safeVariableNameFor:", "add:", unescape("%2C"), "lf", "ifTrue:", unescape("%3D"), "size", "visit:", unescape("-")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitReturnNode_'),
smalltalk.method({
selector: unescape('visitReturnNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
((($receiver = ((($receiver = self['@nestedBlocks']).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@earlyReturn']=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@earlyReturn']=true;})]));
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
((($receiver = self['@earlyReturn']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})]));
return self;},
args: ["aNode"],
source: unescape('visitReturnNode%3A%20aNode%0A%09nestedBlocks%20%3E%200%20ifTrue%3A%20%5B%0A%09%20%20%20%20earlyReturn%20%3A%3D%20true%5D.%0A%09earlyReturn%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%0A%09%09%20%20%20%20nextPutAll%3A%20%27%28function%28%29%7Bthrow%28%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%7Bname%3A%20%27%27stReturn%27%27%2C%20selector%3A%20%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20currentSelector%20printString%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%2C%20fn%3A%20function%28%29%7Breturn%20%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%7D%7D%29%7D%29%28%29%27%5D'),
messageSends: ["ifTrue:", unescape("%3E"), "ifTrue:ifFalse:", "nextPutAll:", "printString", "do:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitSendNode_'),
smalltalk.method({
selector: unescape('visitSendNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
str=self['@stream'];
((($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]));
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
superSend=smalltalk.send(smalltalk.send(self['@stream'], "_contents", []), "__eq", ["super"]);
receiver=((($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})]));
self['@stream']=str;
((($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return ((($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])]), "__comma", [unescape("%29")])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));})]));}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]));
return self;},
args: ["aNode"],
source: unescape('visitSendNode%3A%20aNode%0A%20%20%20%20%20%20%20%20%7C%20str%20receiver%20superSend%20inlined%20%7C%0A%20%20%20%20%20%20%20%20str%20%3A%3D%20stream.%0A%20%20%20%20%20%20%20%20%28messageSends%20includes%3A%20aNode%20selector%29%20ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20messageSends%20add%3A%20aNode%20selector%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20%27%27%20writeStream.%0A%20%20%20%20%20%20%20%20self%20visit%3A%20aNode%20receiver.%0A%20%20%20%20%20%20%20%20superSend%20%3A%3D%20stream%20contents%20%3D%20%27super%27.%0A%20%20%20%20%20%20%20%20receiver%20%3A%3D%20superSend%20ifTrue%3A%20%5B%27self%27%5D%20ifFalse%3A%20%5Bstream%20contents%5D.%0A%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%0A%09self%20performOptimizations%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09%28self%20inlineLiteral%3A%20aNode%20selector%20receiverNode%3A%20aNode%20receiver%20argumentNodes%3A%20aNode%20arguments%29%20ifFalse%3A%20%5B%0A%09%09%09%09%28self%20inline%3A%20aNode%20selector%20receiver%3A%20receiver%20argumentNodes%3A%20aNode%20arguments%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%20%3A%20%27%2C%20%28self%20send%3A%20aNode%20selector%20to%3A%20%27%24receiver%27%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%2C%20%27%29%27%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D%5D%5D%0A%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%28self%20send%3A%20aNode%20selector%20to%3A%20receiver%20arguments%3A%20aNode%20arguments%20superSend%3A%20superSend%29%5D'),
messageSends: ["ifFalse:", "includes:", "selector", "add:", "writeStream", "visit:", "receiver", unescape("%3D"), "contents", "ifTrue:ifFalse:", "performOptimizations", "inlineLiteral:receiverNode:argumentNodes:", "arguments", "inline:receiver:argumentNodes:", "nextPutAll:", unescape("%2C"), "send:to:arguments:superSend:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitCascadeNode_'),
smalltalk.method({
selector: unescape('visitCascadeNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
index=(0);
((($receiver = smalltalk.send(self['@tempVariables'], "_includes_", ["$rec"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%24rec%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));((($receiver = smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]));smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send((smalltalk.VariableNode || VariableNode), "_new", []), "_value_", ["$rec"])]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29%28")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29")]);
return self;},
args: ["aNode"],
source: unescape('visitCascadeNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09index%20%3A%3D%200.%0A%09%28tempVariables%20includes%3A%20%27%24rec%27%29%20ifFalse%3A%20%5B%0A%09%09tempVariables%20add%3A%20%27%24rec%27%5D.%0A%09stream%20nextPutAll%3A%20%27%28function%28%24rec%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%20%20%20%20each%20receiver%3A%20%28VariableNode%20new%20value%3A%20%27%24rec%27%29.%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%28%27.%0A%09self%20visit%3A%20aNode%20receiver.%0A%09stream%20nextPutAll%3A%20%27%29%27'),
messageSends: ["ifFalse:", "includes:", "add:", "nextPutAll:", "do:", "nodes", unescape("+"), "ifTrue:", unescape("%3D"), "size", "receiver:", "value:", "new", "visit:", "receiver"],
referencedClasses: ["VariableNode"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitValueNode_'),
smalltalk.method({
selector: unescape('visitValueNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;},
args: ["aNode"],
source: unescape('visitValueNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20aNode%20value%20asJavascript'),
messageSends: ["nextPutAll:", "asJavascript", "value"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitAssignmentNode_'),
smalltalk.method({
selector: unescape('visitAssignmentNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3D")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
return self;},
args: ["aNode"],
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visit%3A%20aNode%20left.%0A%09stream%20nextPutAll%3A%20%27%3D%27.%0A%09self%20visit%3A%20aNode%20right'),
messageSends: ["visit:", "left", "nextPutAll:", "right"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitClassReferenceNode_'),
smalltalk.method({
selector: unescape('visitClassReferenceNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
((($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [smalltalk.send(aNode, "_value", [])]);})]));
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28smalltalk."), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%7C%7C%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);
return self;},
args: ["aNode"],
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09%28referencedClasses%20includes%3A%20aNode%20value%29%20ifFalse%3A%20%5B%0A%09%09referencedClasses%20add%3A%20aNode%20value%5D.%0A%09stream%20nextPutAll%3A%20%27%28smalltalk.%27%2C%20aNode%20value%2C%20%27%20%7C%7C%20%27%2C%20aNode%20value%2C%20%27%29%27'),
messageSends: ["ifFalse:", "includes:", "value", "add:", "nextPutAll:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitVariableNode_'),
smalltalk.method({
selector: unescape('visitVariableNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
var varName=nil;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);})() : (function(){varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);}), (function(){varName=smalltalk.send(self, "_safeVariableNameFor_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [varName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return ((($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [varName]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [varName]), "__comma", [unescape("%29")])]);})]));}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["thisContext"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28smalltalk.getThisContext%28%29%29")]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [varName]);})]));})]));})]));
return self;},
args: ["aNode"],
source: unescape('visitVariableNode%3A%20aNode%0A%09%7C%20varName%20%7C%0A%09%28self%20currentClass%20allInstanceVariableNames%20includes%3A%20aNode%20value%29%20%0A%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27self%5B%27%27@%27%2C%20aNode%20value%2C%20%27%27%27%5D%27%5D%0A%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09varName%20%3A%3D%20self%20safeVariableNameFor%3A%20aNode%20value.%0A%09%09%09%28self%20knownVariables%20includes%3A%20varName%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09unknownVariables%20add%3A%20aNode%20value.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aNode%20assigned%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20varName%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27%28typeof%20%27%2C%20varName%2C%20%27%20%3D%3D%20%27%27undefined%27%27%20%3F%20nil%20%3A%20%27%2C%20varName%2C%20%27%29%27%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aNode%20value%20%3D%20%27thisContext%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%28smalltalk.getThisContext%28%29%29%27%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20varName%5D%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "includes:", "allInstanceVariableNames", "currentClass", "value", "nextPutAll:", unescape("%2C"), "safeVariableNameFor:", "ifFalse:ifTrue:", "knownVariables", "add:", "assigned", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitJSStatementNode_'),
smalltalk.method({
selector: unescape('visitJSStatementNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [unescape("%3E%3E"), unescape("%3E")])]);
return self;},
args: ["aNode"],
source: unescape('visitJSStatementNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%28aNode%20source%20replace%3A%20%27%3E%3E%27%20with%3A%20%27%3E%27%29'),
messageSends: ["nextPutAll:", "replace:with:", "source"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_parse_", [aString]);
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%20%20%20%20%5ESmalltalk%20current%20parse%3A%20aString'),
messageSends: ["parse:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_parseExpression_'),
smalltalk.method({
selector: unescape('parseExpression%3A'),
category: 'compiling',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_parse_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return self;},
args: ["aString"],
source: unescape('parseExpression%3A%20aString%0A%20%20%20%20%5Eself%20parse%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27'),
messageSends: ["parse:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_unknownVariables'),
smalltalk.method({
selector: unescape('unknownVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;},
args: [],
source: unescape('unknownVariables%0A%09%5EunknownVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_pseudoVariables'),
smalltalk.method({
selector: unescape('pseudoVariables'),
category: 'accessing',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;},
args: [],
source: unescape('pseudoVariables%0A%09%5E%23%28%27self%27%20%27super%27%20%27true%27%20%27false%27%20%27nil%27%20%27thisContext%27%29'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_tempVariables'),
smalltalk.method({
selector: unescape('tempVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;},
args: [],
source: unescape('tempVariables%0A%09%5EtempVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_knownVariables'),
smalltalk.method({
selector: unescape('knownVariables'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_argVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;},
args: [],
source: unescape('knownVariables%0A%09%5Eself%20pseudoVariables%20%0A%09%09addAll%3A%20self%20tempVariables%3B%0A%09%09addAll%3A%20self%20argVariables%3B%0A%09%09yourself'),
messageSends: ["addAll:", "tempVariables", "argVariables", "yourself", "pseudoVariables"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_recompile_'),
smalltalk.method({
selector: unescape('recompile%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(self, "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]));
return self;},
args: ["aClass"],
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_recompileAll'),
smalltalk.method({
selector: unescape('recompileAll'),
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){(function($rec){smalltalk.send($rec, "_show_", [each]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));return smalltalk.send((function(){return smalltalk.send(self, "_recompile_", [each]);}), "_valueWithTimeout_", [(100)]);})]);
return self;},
args: [],
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09Transcript%20show%3A%20each%3B%20cr.%0A%09%09%5Bself%20recompile%3A%20each%5D%20valueWithTimeout%3A%20100%5D'),
messageSends: ["do:", "classes", "current", "show:", "cr", "valueWithTimeout:", "recompile:"],
referencedClasses: ["Smalltalk", "Transcript"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_classNameFor_'),
smalltalk.method({
selector: unescape('classNameFor%3A'),
category: 'accessing',
fn: function (aClass){
var self=this;
return ((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);})() : (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return ((($receiver = smalltalk.send(aClass, "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "nil";})() : (function(){return smalltalk.send(aClass, "_name", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]));})]));
return self;},
args: ["aClass"],
source: unescape('classNameFor%3A%20aClass%0A%09%5EaClass%20isMetaclass%0A%09%20%20%20%20ifTrue%3A%20%5BaClass%20instanceClass%20name%2C%20%27.klass%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aClass%20isNil%0A%09%09%20%20%20%20ifTrue%3A%20%5B%27nil%27%5D%0A%09%09%20%20%20%20ifFalse%3A%20%5BaClass%20name%5D%5D'),
messageSends: ["ifTrue:ifFalse:", "isMetaclass", unescape("%2C"), "name", "instanceClass", "isNil"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitFailure_'),
smalltalk.method({
selector: unescape('visitFailure%3A'),
category: 'visiting',
fn: function (aFailure){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;},
args: ["aFailure"],
source: unescape('visitFailure%3A%20aFailure%0A%09self%20error%3A%20aFailure%20asString'),
messageSends: ["error:", "asString"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_setupClass_'),
smalltalk.method({
selector: unescape('setupClass%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
return self;},
args: ["aClass"],
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_send_to_arguments_superSend_'),
smalltalk.method({
selector: unescape('send%3Ato%3Aarguments%3AsuperSend%3A'),
category: 'visiting',
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(str){var tmp=nil;
tmp=self['@stream'];smalltalk.send(str, "_nextPutAll_", [unescape("smalltalk.send%28")]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C%20%22"), "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", [unescape("%22%2C%20%5B")])]);self['@stream']=str;smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);self['@stream']=tmp;smalltalk.send(str, "_nextPutAll_", [unescape("%5D")]);((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]));return smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
args: ["aSelector", "aReceiver", "aCollection", "aBoolean"],
source: unescape('send%3A%20aSelector%20to%3A%20aReceiver%20arguments%3A%20aCollection%20superSend%3A%20aBoolean%0A%09%5EString%20streamContents%3A%20%5B%3Astr%20%7C%7C%20tmp%20%7C%0A%20%20%20%20%20%20%20%20%09tmp%20%3A%3D%20stream.%0A%09%09str%20nextPutAll%3A%20%27smalltalk.send%28%27.%0A%09%09str%20nextPutAll%3A%20aReceiver.%0A%09%09str%20nextPutAll%3A%20%27%2C%20%22%27%2C%20aSelector%20asSelector%2C%20%27%22%2C%20%5B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20str.%0A%09%09aCollection%0A%09%20%20%20%20%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%20%20%20%20%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20%3A%3D%20tmp.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20str%20nextPutAll%3A%20%27%5D%27.%0A%09%09aBoolean%20ifTrue%3A%20%5B%0A%09%09%09str%20nextPutAll%3A%20%27%2C%20smalltalk.%27%2C%20%28self%20classNameFor%3A%20self%20currentClass%20superclass%29%5D.%0A%09%09str%20nextPutAll%3A%20%27%29%27%5D'),
messageSends: ["streamContents:", "nextPutAll:", unescape("%2C"), "asSelector", "do:separatedBy:", "visit:", "ifTrue:", "classNameFor:", "superclass", "currentClass"],
referencedClasses: ["String"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_checkClass_for_'),
smalltalk.method({
selector: unescape('checkClass%3Afor%3A'),
category: 'optimizations',
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%28%28%24receiver%20%3D%20"), "__comma", [receiver]), "__comma", [unescape("%29.klass%20%3D%3D%3D%20smalltalk.")]), "__comma", [aClassName]), "__comma", [unescape("%29%20%3F%20")])]);
return self;},
args: ["aClassName", "receiver"],
source: unescape('checkClass%3A%20aClassName%20for%3A%20receiver%0A%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%28%28%28%24receiver%20%3D%20%27%2C%20receiver%2C%20%27%29.klass%20%3D%3D%3D%20smalltalk.%27%2C%20aClassName%2C%20%27%29%20%3F%20%27'),
messageSends: ["nextPutAll:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_inlineLiteral_receiverNode_argumentNodes_'),
smalltalk.method({
selector: unescape('inlineLiteral%3AreceiverNode%3AargumentNodes%3A'),
category: 'optimizations',
fn: function (aSelector, anObject, aCollection){
var self=this;
var inlined=nil;
inlined=false;
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, (smalltalk.Number || Number)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]));})]));
return inlined;
return self;},
args: ["aSelector", "anObject", "aCollection"],
source: unescape('inlineLiteral%3A%20aSelector%20receiverNode%3A%20anObject%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%20%0A%09%22--%20BlockClosures%20--%22%0A%0A%09%28aSelector%20%3D%20%27whileTrue%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%3A%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28anObject%20isBlockNode%20and%3A%20%5BaCollection%20first%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileTrue%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27whileFalse%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09anObject%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%29%20%7B%7D%7D%29%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20+%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20-%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20*%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20/%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3C%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28self%20isNode%3A%20anObject%20ofClass%3A%20Number%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%20%3E%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20%20%20%0A%09%22--%20UndefinedObject%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%24receiver%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNil%3AifNotNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifNotNil%3AifNil%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%28%24receiver%20%3D%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20anObject.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "and:", "isBlockNode", "first", "nextPutAll:", "visit:", "isNode:ofClass:", "second"],
referencedClasses: ["Number"]
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_isNode_ofClass_'),
smalltalk.method({
selector: unescape('isNode%3AofClass%3A'),
category: 'optimizations',
fn: function (aNode, aClass){
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;},
args: ["aNode", "aClass"],
source: unescape('isNode%3A%20aNode%20ofClass%3A%20aClass%0A%09%5EaNode%20isValueNode%20and%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09aNode%20value%20class%20%3D%20aClass%20or%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%09aNode%20value%20%3D%20%27self%27%20and%3A%20%5Bself%20currentClass%20%3D%20aClass%5D%5D%5D'),
messageSends: ["and:", "isValueNode", "or:", unescape("%3D"), "class", "value", "currentClass"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_inline_receiver_argumentNodes_'),
smalltalk.method({
selector: unescape('inline%3Areceiver%3AargumentNodes%3A'),
category: 'optimizations',
fn: function (aSelector, receiver, aCollection){
var self=this;
var inlined=nil;
inlined=false;
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]));})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
((($receiver = smalltalk.send(aSelector, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]));
return inlined;
return self;},
args: ["aSelector", "receiver", "aCollection"],
source: unescape('inline%3A%20aSelector%20receiver%3A%20receiver%20argumentNodes%3A%20aCollection%0A%20%20%20%20%20%20%20%20%7C%20inlined%20%7C%0A%20%20%20%20%20%20%20%20inlined%20%3A%3D%20false.%0A%0A%09%22--%20Booleans%20--%22%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09aCollection%20first%20isBlockNode%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20nil%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifTrue%3AifFalse%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%28aSelector%20%3D%20%27ifFalse%3AifTrue%3A%27%29%20ifTrue%3A%20%5B%0A%09%09%28aCollection%20first%20isBlockNode%20and%3A%20%5BaCollection%20second%20isBlockNode%5D%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20checkClass%3A%20%27Boolean%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09stream%20nextPutAll%3A%20%27%28%21%20%24receiver%20%3F%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%20%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%09%09self%20visit%3A%20aCollection%20second.%0A%20%20%20%20%20%20%20%20%20%20%09%09stream%20nextPutAll%3A%20%27%28%29%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09inlined%20%3A%3D%20true%5D%5D.%0A%0A%09%22--%20Numbers%20--%22%0A%0A%09%28aSelector%20%3D%20%27%3C%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3C%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3C%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%27%29%20ifTrue%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%09%28aSelector%20%3D%20%27%3E%3D%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20%3E%3D%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27+%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20+%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27-%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20-%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27*%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20*%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%28aSelector%20%3D%20%27/%27%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20checkClass%3A%20%27Number%27%20for%3A%20receiver.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20stream%20nextPutAll%3A%20%27%24receiver%20/%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20visit%3A%20aCollection%20first.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlined%20%3A%3D%20true%5D.%0A%0A%20%20%20%20%20%20%20%20%5Einlined'),
messageSends: ["ifTrue:", unescape("%3D"), "isBlockNode", "first", "checkClass:for:", "nextPutAll:", "visit:", "and:", "second"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_performOptimizations'),
smalltalk.method({
selector: unescape('performOptimizations'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;},
args: [],
source: unescape('performOptimizations%0A%09%5Eself%20class%20performOptimizations'),
messageSends: ["performOptimizations", "class"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@source']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
args: [],
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_source_'),
smalltalk.method({
selector: unescape('source%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
args: ["aString"],
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitDynamicArrayNode_'),
smalltalk.method({
selector: unescape('visitDynamicArrayNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicArrayNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%5B%27.%0A%09aNode%20nodes%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09stream%20nextPutAll%3A%20%27%5D%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_visitDynamicDictionaryNode_'),
smalltalk.method({
selector: unescape('visitDynamicDictionaryNode%3A'),
category: 'visiting',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("smalltalk.Dictionary._fromPairs_%28%5B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D%29")]);
return self;},
args: ["aNode"],
source: unescape('visitDynamicDictionaryNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27smalltalk.Dictionary._fromPairs_%28%5B%27.%0A%09%09aNode%20nodes%20%0A%09%09%09do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%09stream%20nextPutAll%3A%20%27%5D%29%27'),
messageSends: ["nextPutAll:", "do:separatedBy:", "nodes", "visit:"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_argVariables'),
smalltalk.method({
selector: unescape('argVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@argVariables'], "_copy", []);
return self;},
args: [],
source: unescape('argVariables%0A%09%5EargVariables%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Compiler);

smalltalk.addMethod(
unescape('_safeVariableNameFor_'),
smalltalk.method({
selector: unescape('safeVariableNameFor%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_reservedWords", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aString, "__comma", ["_"]);})() : (function(){return aString;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aString, "__comma", ["_"]);}), (function(){return aString;})]));
return self;},
args: ["aString"],
source: unescape('safeVariableNameFor%3A%20aString%0A%09%5E%28Smalltalk%20current%20reservedWords%20includes%3A%20aString%29%0A%09%09ifTrue%3A%20%5BaString%2C%20%27_%27%5D%0A%09%09ifFalse%3A%20%5BaString%5D'),
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", "current", unescape("%2C")],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler);


smalltalk.Compiler.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
unescape('_recompile_'),
smalltalk.method({
selector: unescape('recompile%3A'),
category: 'compiling',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(smalltalk.send(self, "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
((($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]));
return self;},
args: ["aClass"],
source: unescape('recompile%3A%20aClass%0A%09aClass%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%7C%20method%20%7C%0A%09%09method%20%3A%3D%20self%20new%20load%3A%20each%20source%20forClass%3A%20aClass.%0A%09%09method%20category%3A%20each%20category.%0A%09%09aClass%20addCompiledMethod%3A%20method%5D.%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20recompile%3A%20aClass%20class%5D'),
messageSends: ["do:", "methodDictionary", "load:forClass:", "new", "source", "category:", "category", "addCompiledMethod:", "ifFalse:", "isMetaclass", "recompile:", "class"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_recompileAll'),
smalltalk.method({
selector: unescape('recompileAll'),
category: 'compiling',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_recompile_", [each]);})]);
return self;},
args: [],
source: unescape('recompileAll%0A%09Smalltalk%20current%20classes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09self%20recompile%3A%20each%5D'),
messageSends: ["do:", "classes", "current", "recompile:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_performOptimizations'),
smalltalk.method({
selector: unescape('performOptimizations'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;},
args: [],
source: unescape('performOptimizations%0A%09%5EperformOptimizations%20ifNil%3A%20%5Btrue%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
unescape('_performOptimizations_'),
smalltalk.method({
selector: unescape('performOptimizations%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@performOptimizations']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('performOptimizations%3A%20aBoolean%0A%09performOptimizations%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');


smalltalk.addClass('DynamicArrayNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitDynamicArrayNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitDynamicArrayNode%3A%20self'),
messageSends: ["visitDynamicArrayNode:"],
referencedClasses: []
}),
smalltalk.DynamicArrayNode);



smalltalk.addClass('DynamicDictionaryNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
unescape('_accept_'),
smalltalk.method({
selector: unescape('accept%3A'),
category: 'visiting',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitDynamicDictionaryNode_", [self]);
return self;},
args: ["aVisitor"],
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitDynamicDictionaryNode%3A%20self'),
messageSends: ["visitDynamicDictionaryNode:"],
referencedClasses: []
}),
smalltalk.DynamicDictionaryNode);



smalltalk.parser = (function(){
  /* Generated by PEG.js 0.6.2 (http://pegjs.majda.cz/). */
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "assignment": parse_assignment,
        "binaryMessage": parse_binaryMessage,
        "binaryPattern": parse_binaryPattern,
        "binarySelector": parse_binarySelector,
        "binarySend": parse_binarySend,
        "binaryTail": parse_binaryTail,
        "block": parse_block,
        "blockParamList": parse_blockParamList,
        "cascade": parse_cascade,
        "className": parse_className,
        "classReference": parse_classReference,
        "comments": parse_comments,
        "dynamicArray": parse_dynamicArray,
        "dynamicDictionary": parse_dynamicDictionary,
        "expression": parse_expression,
        "expressionList": parse_expressionList,
        "expressions": parse_expressions,
        "float": parse_float,
        "identifier": parse_identifier,
        "integer": parse_integer,
        "jsStatement": parse_jsStatement,
        "keyword": parse_keyword,
        "keywordMessage": parse_keywordMessage,
        "keywordPair": parse_keywordPair,
        "keywordPattern": parse_keywordPattern,
        "keywordSend": parse_keywordSend,
        "literal": parse_literal,
        "literalArray": parse_literalArray,
        "message": parse_message,
        "method": parse_method,
        "number": parse_number,
        "operand": parse_operand,
        "pseudoVariable": parse_pseudoVariable,
        "reference": parse_reference,
        "ret": parse_ret,
        "separator": parse_separator,
        "sequence": parse_sequence,
        "statements": parse_statements,
        "string": parse_string,
        "subexpression": parse_subexpression,
        "symbol": parse_symbol,
        "temps": parse_temps,
        "unaryMessage": parse_unaryMessage,
        "unaryPattern": parse_unaryPattern,
        "unarySend": parse_unarySend,
        "unaryTail": parse_unaryTail,
        "variable": parse_variable,
        "ws": parse_ws
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "method";
      }
      
      var pos = 0;
      var reportMatchFailures = true;
      var rightmostMatchFailuresPos = 0;
      var rightmostMatchFailuresExpected = [];
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
        
        if (charCode <= 0xFF) {
          var escapeChar = 'x';
          var length = 2;
        } else {
          var escapeChar = 'u';
          var length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function quote(s) {
        /*
         * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
         * string literal except for the closing quote character, backslash,
         * carriage return, line separator, paragraph separator, and line feed.
         * Any character may appear in the form of an escape sequence.
         */
        return '"' + s
          .replace(/\\/g, '\\\\')            // backslash
          .replace(/"/g, '\\"')              // closing quote character
          .replace(/\r/g, '\\r')             // carriage return
          .replace(/\n/g, '\\n')             // line feed
          .replace(/[\x80-\uFFFF]/g, escape) // non-ASCII characters
          + '"';
      }
      
      function matchFailed(failure) {
        if (pos < rightmostMatchFailuresPos) {
          return;
        }
        
        if (pos > rightmostMatchFailuresPos) {
          rightmostMatchFailuresPos = pos;
          rightmostMatchFailuresExpected = [];
        }
        
        rightmostMatchFailuresExpected.push(failure);
      }
      
      function parse_separator() {
        var cacheKey = 'separator@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        if (input.substr(pos).match(/^[ 	\xA0\uFEFF\n\r\u2028\u2029]/) !== null) {
          var result1 = input.charAt(pos);
          pos++;
        } else {
          var result1 = null;
          if (reportMatchFailures) {
            matchFailed("[ 	\\xA0\\uFEFF\\n\\r\\u2028\\u2029]");
          }
        }
        if (result1 !== null) {
          var result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            if (input.substr(pos).match(/^[ 	\xA0\uFEFF\n\r\u2028\u2029]/) !== null) {
              var result1 = input.charAt(pos);
              pos++;
            } else {
              var result1 = null;
              if (reportMatchFailures) {
                matchFailed("[ 	\\xA0\\uFEFF\\n\\r\\u2028\\u2029]");
              }
            }
          }
        } else {
          var result0 = null;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_comments() {
        var cacheKey = 'comments@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        if (input.substr(pos).match(/^["]/) !== null) {
          var result2 = input.charAt(pos);
          pos++;
        } else {
          var result2 = null;
          if (reportMatchFailures) {
            matchFailed("[\"]");
          }
        }
        if (result2 !== null) {
          var result3 = [];
          if (input.substr(pos).match(/^[^"]/) !== null) {
            var result5 = input.charAt(pos);
            pos++;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("[^\"]");
            }
          }
          while (result5 !== null) {
            result3.push(result5);
            if (input.substr(pos).match(/^[^"]/) !== null) {
              var result5 = input.charAt(pos);
              pos++;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("[^\"]");
              }
            }
          }
          if (result3 !== null) {
            if (input.substr(pos).match(/^["]/) !== null) {
              var result4 = input.charAt(pos);
              pos++;
            } else {
              var result4 = null;
              if (reportMatchFailures) {
                matchFailed("[\"]");
              }
            }
            if (result4 !== null) {
              var result1 = [result2, result3, result4];
            } else {
              var result1 = null;
              pos = savedPos0;
            }
          } else {
            var result1 = null;
            pos = savedPos0;
          }
        } else {
          var result1 = null;
          pos = savedPos0;
        }
        if (result1 !== null) {
          var result0 = [];
          while (result1 !== null) {
            result0.push(result1);
            var savedPos0 = pos;
            if (input.substr(pos).match(/^["]/) !== null) {
              var result2 = input.charAt(pos);
              pos++;
            } else {
              var result2 = null;
              if (reportMatchFailures) {
                matchFailed("[\"]");
              }
            }
            if (result2 !== null) {
              var result3 = [];
              if (input.substr(pos).match(/^[^"]/) !== null) {
                var result5 = input.charAt(pos);
                pos++;
              } else {
                var result5 = null;
                if (reportMatchFailures) {
                  matchFailed("[^\"]");
                }
              }
              while (result5 !== null) {
                result3.push(result5);
                if (input.substr(pos).match(/^[^"]/) !== null) {
                  var result5 = input.charAt(pos);
                  pos++;
                } else {
                  var result5 = null;
                  if (reportMatchFailures) {
                    matchFailed("[^\"]");
                  }
                }
              }
              if (result3 !== null) {
                if (input.substr(pos).match(/^["]/) !== null) {
                  var result4 = input.charAt(pos);
                  pos++;
                } else {
                  var result4 = null;
                  if (reportMatchFailures) {
                    matchFailed("[\"]");
                  }
                }
                if (result4 !== null) {
                  var result1 = [result2, result3, result4];
                } else {
                  var result1 = null;
                  pos = savedPos0;
                }
              } else {
                var result1 = null;
                pos = savedPos0;
              }
            } else {
              var result1 = null;
              pos = savedPos0;
            }
          }
        } else {
          var result0 = null;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_ws() {
        var cacheKey = 'ws@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result0 = [];
        var result3 = parse_separator();
        if (result3 !== null) {
          var result1 = result3;
        } else {
          var result2 = parse_comments();
          if (result2 !== null) {
            var result1 = result2;
          } else {
            var result1 = null;;
          };
        }
        while (result1 !== null) {
          result0.push(result1);
          var result3 = parse_separator();
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result2 = parse_comments();
            if (result2 !== null) {
              var result1 = result2;
            } else {
              var result1 = null;;
            };
          }
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_identifier() {
        var cacheKey = 'identifier@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[a-z]/) !== null) {
          var result3 = input.charAt(pos);
          pos++;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("[a-z]");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
            var result5 = input.charAt(pos);
            pos++;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result5 !== null) {
            result4.push(result5);
            if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
              var result5 = input.charAt(pos);
              pos++;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(first, others) {return first + others.join("")})(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_keyword() {
        var cacheKey = 'keyword@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_identifier();
        if (result3 !== null) {
          if (input.substr(pos).match(/^[:]/) !== null) {
            var result4 = input.charAt(pos);
            pos++;
          } else {
            var result4 = null;
            if (reportMatchFailures) {
              matchFailed("[:]");
            }
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(first, last) {return first + last})(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_className() {
        var cacheKey = 'className@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[A-Z]/) !== null) {
          var result3 = input.charAt(pos);
          pos++;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("[A-Z]");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
            var result5 = input.charAt(pos);
            pos++;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result5 !== null) {
            result4.push(result5);
            if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
              var result5 = input.charAt(pos);
              pos++;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(first, others) {return first + others.join("")})(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_string() {
        var cacheKey = 'string@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[']/) !== null) {
          var result3 = input.charAt(pos);
          pos++;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("[']");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          var savedPos2 = pos;
          if (input.substr(pos, 2) === "''") {
            var result9 = "''";
            pos += 2;
          } else {
            var result9 = null;
            if (reportMatchFailures) {
              matchFailed("\"''\"");
            }
          }
          var result10 = result9 !== null
            ? (function() {return "'"})()
            : null;
          if (result10 !== null) {
            var result8 = result10;
          } else {
            var result8 = null;
            pos = savedPos2;
          }
          if (result8 !== null) {
            var result6 = result8;
          } else {
            if (input.substr(pos).match(/^[^']/) !== null) {
              var result7 = input.charAt(pos);
              pos++;
            } else {
              var result7 = null;
              if (reportMatchFailures) {
                matchFailed("[^']");
              }
            }
            if (result7 !== null) {
              var result6 = result7;
            } else {
              var result6 = null;;
            };
          }
          while (result6 !== null) {
            result4.push(result6);
            var savedPos2 = pos;
            if (input.substr(pos, 2) === "''") {
              var result9 = "''";
              pos += 2;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\"''\"");
              }
            }
            var result10 = result9 !== null
              ? (function() {return "'"})()
              : null;
            if (result10 !== null) {
              var result8 = result10;
            } else {
              var result8 = null;
              pos = savedPos2;
            }
            if (result8 !== null) {
              var result6 = result8;
            } else {
              if (input.substr(pos).match(/^[^']/) !== null) {
                var result7 = input.charAt(pos);
                pos++;
              } else {
                var result7 = null;
                if (reportMatchFailures) {
                  matchFailed("[^']");
                }
              }
              if (result7 !== null) {
                var result6 = result7;
              } else {
                var result6 = null;;
              };
            }
          }
          if (result4 !== null) {
            if (input.substr(pos).match(/^[']/) !== null) {
              var result5 = input.charAt(pos);
              pos++;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("[']");
              }
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(val) {
                         	   return smalltalk.ValueNode._new()
                         	   	._value_(val.join("").replace(/\"/ig, '"'))
          	         })(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_symbol() {
        var cacheKey = 'symbol@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "#") {
          var result3 = "#";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"#\"");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
            var result5 = input.charAt(pos);
            pos++;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("[a-zA-Z0-9]");
            }
          }
          while (result5 !== null) {
            result4.push(result5);
            if (input.substr(pos).match(/^[a-zA-Z0-9]/) !== null) {
              var result5 = input.charAt(pos);
              pos++;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("[a-zA-Z0-9]");
              }
            }
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(val) {
          		  return smalltalk.ValueNode._new()
                         	   	._value_(val.join("").replace(/\"/ig, '"'))
                         	 })(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_number() {
        var cacheKey = 'number@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var result4 = parse_float();
        if (result4 !== null) {
          var result1 = result4;
        } else {
          var result3 = parse_integer();
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;;
          };
        }
        var result2 = result1 !== null
          ? (function(n) {
          		  return smalltalk.ValueNode._new()
                         	   	._value_(n)
                         	 })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_float() {
        var cacheKey = 'float@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[\-]/) !== null) {
          var result7 = input.charAt(pos);
          pos++;
        } else {
          var result7 = null;
          if (reportMatchFailures) {
            matchFailed("[\\-]");
          }
        }
        var result3 = result7 !== null ? result7 : '';
        if (result3 !== null) {
          var result4 = parse_integer();
          if (result4 !== null) {
            if (input.substr(pos, 1) === ".") {
              var result5 = ".";
              pos += 1;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\".\"");
              }
            }
            if (result5 !== null) {
              var result6 = parse_integer();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(neg, int, dec) {return parseFloat((neg+int+"."+dec), 10)})(result1[0], result1[1], result1[3])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_integer() {
        var cacheKey = 'integer@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[\-]/) !== null) {
          var result6 = input.charAt(pos);
          pos++;
        } else {
          var result6 = null;
          if (reportMatchFailures) {
            matchFailed("[\\-]");
          }
        }
        var result3 = result6 !== null ? result6 : '';
        if (result3 !== null) {
          if (input.substr(pos).match(/^[0-9]/) !== null) {
            var result5 = input.charAt(pos);
            pos++;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("[0-9]");
            }
          }
          if (result5 !== null) {
            var result4 = [];
            while (result5 !== null) {
              result4.push(result5);
              if (input.substr(pos).match(/^[0-9]/) !== null) {
                var result5 = input.charAt(pos);
                pos++;
              } else {
                var result5 = null;
                if (reportMatchFailures) {
                  matchFailed("[0-9]");
                }
              }
            }
          } else {
            var result4 = null;
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(neg, digits) {return (parseInt(neg+digits.join(""), 10))})(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_literalArray() {
        var cacheKey = 'literalArray@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 2) === "#(") {
          var result3 = "#(";
          pos += 2;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"#(\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result5 = [];
            var savedPos2 = pos;
            var savedPos3 = pos;
            var result11 = parse_literal();
            if (result11 !== null) {
              var result12 = parse_ws();
              if (result12 !== null) {
                var result9 = [result11, result12];
              } else {
                var result9 = null;
                pos = savedPos3;
              }
            } else {
              var result9 = null;
              pos = savedPos3;
            }
            var result10 = result9 !== null
              ? (function(lit) {return lit._value()})(result9[0])
              : null;
            if (result10 !== null) {
              var result8 = result10;
            } else {
              var result8 = null;
              pos = savedPos2;
            }
            while (result8 !== null) {
              result5.push(result8);
              var savedPos2 = pos;
              var savedPos3 = pos;
              var result11 = parse_literal();
              if (result11 !== null) {
                var result12 = parse_ws();
                if (result12 !== null) {
                  var result9 = [result11, result12];
                } else {
                  var result9 = null;
                  pos = savedPos3;
                }
              } else {
                var result9 = null;
                pos = savedPos3;
              }
              var result10 = result9 !== null
                ? (function(lit) {return lit._value()})(result9[0])
                : null;
              if (result10 !== null) {
                var result8 = result10;
              } else {
                var result8 = null;
                pos = savedPos2;
              }
            }
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                if (input.substr(pos, 1) === ")") {
                  var result7 = ")";
                  pos += 1;
                } else {
                  var result7 = null;
                  if (reportMatchFailures) {
                    matchFailed("\")\"");
                  }
                }
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(lits) {
          		  return smalltalk.ValueNode._new()
                         	   	._value_(lits)
                         	 })(result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_dynamicArray() {
        var cacheKey = 'dynamicArray@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "{") {
          var result3 = "{";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"{\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result8 = parse_expressions();
            var result5 = result8 !== null ? result8 : '';
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                if (input.substr(pos, 1) === "}") {
                  var result7 = "}";
                  pos += 1;
                } else {
                  var result7 = null;
                  if (reportMatchFailures) {
                    matchFailed("\"}\"");
                  }
                }
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(expressions) {
          	       	  return smalltalk.DynamicArrayNode._new()
          		        ._nodes_(expressions)
          		  })(result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_dynamicDictionary() {
        var cacheKey = 'dynamicDictionary@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 2) === "#{") {
          var result3 = "#{";
          pos += 2;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"#{\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result8 = parse_expressions();
            var result5 = result8 !== null ? result8 : '';
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                if (input.substr(pos, 1) === "}") {
                  var result7 = "}";
                  pos += 1;
                } else {
                  var result7 = null;
                  if (reportMatchFailures) {
                    matchFailed("\"}\"");
                  }
                }
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(expressions) {
          	       	  return smalltalk.DynamicDictionaryNode._new()
          		        ._nodes_(expressions)
          		  })(result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_pseudoVariable() {
        var cacheKey = 'pseudoVariable@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos3 = pos;
        if (input.substr(pos, 4) === "true") {
          var result10 = "true";
          pos += 4;
        } else {
          var result10 = null;
          if (reportMatchFailures) {
            matchFailed("\"true\"");
          }
        }
        var result11 = result10 !== null
          ? (function() {return true})()
          : null;
        if (result11 !== null) {
          var result9 = result11;
        } else {
          var result9 = null;
          pos = savedPos3;
        }
        if (result9 !== null) {
          var result1 = result9;
        } else {
          var savedPos2 = pos;
          if (input.substr(pos, 5) === "false") {
            var result7 = "false";
            pos += 5;
          } else {
            var result7 = null;
            if (reportMatchFailures) {
              matchFailed("\"false\"");
            }
          }
          var result8 = result7 !== null
            ? (function() {return false})()
            : null;
          if (result8 !== null) {
            var result6 = result8;
          } else {
            var result6 = null;
            pos = savedPos2;
          }
          if (result6 !== null) {
            var result1 = result6;
          } else {
            var savedPos1 = pos;
            if (input.substr(pos, 3) === "nil") {
              var result4 = "nil";
              pos += 3;
            } else {
              var result4 = null;
              if (reportMatchFailures) {
                matchFailed("\"nil\"");
              }
            }
            var result5 = result4 !== null
              ? (function() {return nil})()
              : null;
            if (result5 !== null) {
              var result3 = result5;
            } else {
              var result3 = null;
              pos = savedPos1;
            }
            if (result3 !== null) {
              var result1 = result3;
            } else {
              var result1 = null;;
            };
          };
        }
        var result2 = result1 !== null
          ? (function(val) {
          					return smalltalk.ValueNode._new()
          						._value_(val)
          				})(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_literal() {
        var cacheKey = 'literal@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result8 = parse_pseudoVariable();
        if (result8 !== null) {
          var result0 = result8;
        } else {
          var result7 = parse_number();
          if (result7 !== null) {
            var result0 = result7;
          } else {
            var result6 = parse_literalArray();
            if (result6 !== null) {
              var result0 = result6;
            } else {
              var result5 = parse_dynamicDictionary();
              if (result5 !== null) {
                var result0 = result5;
              } else {
                var result4 = parse_dynamicArray();
                if (result4 !== null) {
                  var result0 = result4;
                } else {
                  var result3 = parse_string();
                  if (result3 !== null) {
                    var result0 = result3;
                  } else {
                    var result2 = parse_symbol();
                    if (result2 !== null) {
                      var result0 = result2;
                    } else {
                      var result1 = parse_block();
                      if (result1 !== null) {
                        var result0 = result1;
                      } else {
                        var result0 = null;;
                      };
                    };
                  };
                };
              };
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_variable() {
        var cacheKey = 'variable@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var result1 = parse_identifier();
        var result2 = result1 !== null
          ? (function(identifier) {
          		  return smalltalk.VariableNode._new()
          			._value_(identifier)
          		  })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_classReference() {
        var cacheKey = 'classReference@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var result1 = parse_className();
        var result2 = result1 !== null
          ? (function(className) {
          		  return smalltalk.ClassReferenceNode._new()
          		  	._value_(className)
          		  })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_reference() {
        var cacheKey = 'reference@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result2 = parse_variable();
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result1 = parse_classReference();
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordPair() {
        var cacheKey = 'keywordPair@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_keyword();
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result5 = parse_binarySend();
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(key, arg) {return {key:key, arg: arg}})(result1[0], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_binarySelector() {
        var cacheKey = 'binarySelector@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        if (input.substr(pos).match(/^[\\+*\/=><,@%~|&\-]/) !== null) {
          var result3 = input.charAt(pos);
          pos++;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("[\\\\+*\\/=><,@%~|&\\-]");
          }
        }
        if (result3 !== null) {
          var result1 = [];
          while (result3 !== null) {
            result1.push(result3);
            if (input.substr(pos).match(/^[\\+*\/=><,@%~|&\-]/) !== null) {
              var result3 = input.charAt(pos);
              pos++;
            } else {
              var result3 = null;
              if (reportMatchFailures) {
                matchFailed("[\\\\+*\\/=><,@%~|&\\-]");
              }
            }
          }
        } else {
          var result1 = null;
        }
        var result2 = result1 !== null
          ? (function(bin) {return bin.join("").replace(/\\/g, '\\\\')})(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordPattern() {
        var cacheKey = 'keywordPattern@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var savedPos2 = pos;
        var result6 = parse_ws();
        if (result6 !== null) {
          var result7 = parse_keyword();
          if (result7 !== null) {
            var result8 = parse_ws();
            if (result8 !== null) {
              var result9 = parse_identifier();
              if (result9 !== null) {
                var result4 = [result6, result7, result8, result9];
              } else {
                var result4 = null;
                pos = savedPos2;
              }
            } else {
              var result4 = null;
              pos = savedPos2;
            }
          } else {
            var result4 = null;
            pos = savedPos2;
          }
        } else {
          var result4 = null;
          pos = savedPos2;
        }
        var result5 = result4 !== null
          ? (function(key, arg) {return {key:key, arg: arg}})(result4[1], result4[3])
          : null;
        if (result5 !== null) {
          var result3 = result5;
        } else {
          var result3 = null;
          pos = savedPos1;
        }
        if (result3 !== null) {
          var result1 = [];
          while (result3 !== null) {
            result1.push(result3);
            var savedPos1 = pos;
            var savedPos2 = pos;
            var result6 = parse_ws();
            if (result6 !== null) {
              var result7 = parse_keyword();
              if (result7 !== null) {
                var result8 = parse_ws();
                if (result8 !== null) {
                  var result9 = parse_identifier();
                  if (result9 !== null) {
                    var result4 = [result6, result7, result8, result9];
                  } else {
                    var result4 = null;
                    pos = savedPos2;
                  }
                } else {
                  var result4 = null;
                  pos = savedPos2;
                }
              } else {
                var result4 = null;
                pos = savedPos2;
              }
            } else {
              var result4 = null;
              pos = savedPos2;
            }
            var result5 = result4 !== null
              ? (function(key, arg) {return {key:key, arg: arg}})(result4[1], result4[3])
              : null;
            if (result5 !== null) {
              var result3 = result5;
            } else {
              var result3 = null;
              pos = savedPos1;
            }
          }
        } else {
          var result1 = null;
        }
        var result2 = result1 !== null
          ? (function(pairs) {
          	             var keywords = [];
                               var params = [];
                               for(var i=0;i<pairs.length;i++){
                                   keywords.push(pairs[i].key);
                               }
                               for(var i=0;i<pairs.length;i++){
                                   params.push(pairs[i].arg);
                               }
          		     return [keywords.join(""), params]
          	         })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryPattern() {
        var cacheKey = 'binaryPattern@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result4 = parse_binarySelector();
          if (result4 !== null) {
            var result5 = parse_ws();
            if (result5 !== null) {
              var result6 = parse_identifier();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(selector, arg) {return [selector, [arg]]})(result1[1], result1[3])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryPattern() {
        var cacheKey = 'unaryPattern@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result4 = parse_identifier();
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(selector) {return [selector, []]})(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_expression() {
        var cacheKey = 'expression@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result5 = parse_assignment();
        if (result5 !== null) {
          var result0 = result5;
        } else {
          var result4 = parse_cascade();
          if (result4 !== null) {
            var result0 = result4;
          } else {
            var result3 = parse_keywordSend();
            if (result3 !== null) {
              var result0 = result3;
            } else {
              var result2 = parse_binarySend();
              if (result2 !== null) {
                var result0 = result2;
              } else {
                var result1 = parse_jsStatement();
                if (result1 !== null) {
                  var result0 = result1;
                } else {
                  var result0 = null;;
                };
              };
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_expressionList() {
        var cacheKey = 'expressionList@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          if (input.substr(pos, 1) === ".") {
            var result4 = ".";
            pos += 1;
          } else {
            var result4 = null;
            if (reportMatchFailures) {
              matchFailed("\".\"");
            }
          }
          if (result4 !== null) {
            var result5 = parse_ws();
            if (result5 !== null) {
              var result6 = parse_expression();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(expression) {return expression})(result1[3])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_expressions() {
        var cacheKey = 'expressions@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_expression();
        if (result3 !== null) {
          var result4 = [];
          var result5 = parse_expressionList();
          while (result5 !== null) {
            result4.push(result5);
            var result5 = parse_expressionList();
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(first, others) {
          	       	     var result = [first];
          		     for(var i=0;i<others.length;i++) {
          		 	 result.push(others[i]);
          		     }
          		     return result;
          	       })(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_assignment() {
        var cacheKey = 'assignment@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_variable();
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            if (input.substr(pos, 2) === ":=") {
              var result5 = ":=";
              pos += 2;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\":=\"");
              }
            }
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                var result7 = parse_expression();
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(variable, expression) {
          	       	     return smalltalk.AssignmentNode._new()
          	       	     	._left_(variable)
          	       	     	._right_(expression)
          		 })(result1[0], result1[4])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_ret() {
        var cacheKey = 'ret@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "^") {
          var result3 = "^";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"^\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result5 = parse_expression();
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                if (input.substr(pos, 1) === ".") {
                  var result8 = ".";
                  pos += 1;
                } else {
                  var result8 = null;
                  if (reportMatchFailures) {
                    matchFailed("\".\"");
                  }
                }
                var result7 = result8 !== null ? result8 : '';
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(expression) {
          	       	     return smalltalk.ReturnNode._new()
          	       	     	._nodes_([expression])
          	       })(result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_temps() {
        var cacheKey = 'temps@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "|") {
          var result3 = "|";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"|\"");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          var savedPos2 = pos;
          var savedPos3 = pos;
          var result9 = parse_ws();
          if (result9 !== null) {
            var result10 = parse_identifier();
            if (result10 !== null) {
              var result11 = parse_ws();
              if (result11 !== null) {
                var result7 = [result9, result10, result11];
              } else {
                var result7 = null;
                pos = savedPos3;
              }
            } else {
              var result7 = null;
              pos = savedPos3;
            }
          } else {
            var result7 = null;
            pos = savedPos3;
          }
          var result8 = result7 !== null
            ? (function(variable) {return variable})(result7[1])
            : null;
          if (result8 !== null) {
            var result6 = result8;
          } else {
            var result6 = null;
            pos = savedPos2;
          }
          while (result6 !== null) {
            result4.push(result6);
            var savedPos2 = pos;
            var savedPos3 = pos;
            var result9 = parse_ws();
            if (result9 !== null) {
              var result10 = parse_identifier();
              if (result10 !== null) {
                var result11 = parse_ws();
                if (result11 !== null) {
                  var result7 = [result9, result10, result11];
                } else {
                  var result7 = null;
                  pos = savedPos3;
                }
              } else {
                var result7 = null;
                pos = savedPos3;
              }
            } else {
              var result7 = null;
              pos = savedPos3;
            }
            var result8 = result7 !== null
              ? (function(variable) {return variable})(result7[1])
              : null;
            if (result8 !== null) {
              var result6 = result8;
            } else {
              var result6 = null;
              pos = savedPos2;
            }
          }
          if (result4 !== null) {
            if (input.substr(pos, 1) === "|") {
              var result5 = "|";
              pos += 1;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\"|\"");
              }
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(vars) {return vars})(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_blockParamList() {
        var cacheKey = 'blockParamList@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var savedPos2 = pos;
        var savedPos3 = pos;
        var result9 = parse_ws();
        if (result9 !== null) {
          if (input.substr(pos, 1) === ":") {
            var result10 = ":";
            pos += 1;
          } else {
            var result10 = null;
            if (reportMatchFailures) {
              matchFailed("\":\"");
            }
          }
          if (result10 !== null) {
            var result11 = parse_ws();
            if (result11 !== null) {
              var result12 = parse_identifier();
              if (result12 !== null) {
                var result7 = [result9, result10, result11, result12];
              } else {
                var result7 = null;
                pos = savedPos3;
              }
            } else {
              var result7 = null;
              pos = savedPos3;
            }
          } else {
            var result7 = null;
            pos = savedPos3;
          }
        } else {
          var result7 = null;
          pos = savedPos3;
        }
        var result8 = result7 !== null
          ? (function(param) {return param})(result7[3])
          : null;
        if (result8 !== null) {
          var result6 = result8;
        } else {
          var result6 = null;
          pos = savedPos2;
        }
        if (result6 !== null) {
          var result3 = [];
          while (result6 !== null) {
            result3.push(result6);
            var savedPos2 = pos;
            var savedPos3 = pos;
            var result9 = parse_ws();
            if (result9 !== null) {
              if (input.substr(pos, 1) === ":") {
                var result10 = ":";
                pos += 1;
              } else {
                var result10 = null;
                if (reportMatchFailures) {
                  matchFailed("\":\"");
                }
              }
              if (result10 !== null) {
                var result11 = parse_ws();
                if (result11 !== null) {
                  var result12 = parse_identifier();
                  if (result12 !== null) {
                    var result7 = [result9, result10, result11, result12];
                  } else {
                    var result7 = null;
                    pos = savedPos3;
                  }
                } else {
                  var result7 = null;
                  pos = savedPos3;
                }
              } else {
                var result7 = null;
                pos = savedPos3;
              }
            } else {
              var result7 = null;
              pos = savedPos3;
            }
            var result8 = result7 !== null
              ? (function(param) {return param})(result7[3])
              : null;
            if (result8 !== null) {
              var result6 = result8;
            } else {
              var result6 = null;
              pos = savedPos2;
            }
          }
        } else {
          var result3 = null;
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            if (input.substr(pos, 1) === "|") {
              var result5 = "|";
              pos += 1;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\"|\"");
              }
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(params) {return params})(result1[0])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_subexpression() {
        var cacheKey = 'subexpression@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "(") {
          var result3 = "(";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"(\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result5 = parse_expression();
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                if (input.substr(pos, 1) === ")") {
                  var result7 = ")";
                  pos += 1;
                } else {
                  var result7 = null;
                  if (reportMatchFailures) {
                    matchFailed("\")\"");
                  }
                }
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(expression) {return expression})(result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_statements() {
        var cacheKey = 'statements@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos4 = pos;
        var savedPos5 = pos;
        var result22 = parse_ret();
        if (result22 !== null) {
          var result23 = [];
          if (input.substr(pos).match(/^[.]/) !== null) {
            var result24 = input.charAt(pos);
            pos++;
          } else {
            var result24 = null;
            if (reportMatchFailures) {
              matchFailed("[.]");
            }
          }
          while (result24 !== null) {
            result23.push(result24);
            if (input.substr(pos).match(/^[.]/) !== null) {
              var result24 = input.charAt(pos);
              pos++;
            } else {
              var result24 = null;
              if (reportMatchFailures) {
                matchFailed("[.]");
              }
            }
          }
          if (result23 !== null) {
            var result20 = [result22, result23];
          } else {
            var result20 = null;
            pos = savedPos5;
          }
        } else {
          var result20 = null;
          pos = savedPos5;
        }
        var result21 = result20 !== null
          ? (function(ret) {return [ret]})(result20[0])
          : null;
        if (result21 !== null) {
          var result19 = result21;
        } else {
          var result19 = null;
          pos = savedPos4;
        }
        if (result19 !== null) {
          var result0 = result19;
        } else {
          var savedPos2 = pos;
          var savedPos3 = pos;
          var result11 = parse_expressions();
          if (result11 !== null) {
            var result12 = parse_ws();
            if (result12 !== null) {
              if (input.substr(pos).match(/^[.]/) !== null) {
                var result18 = input.charAt(pos);
                pos++;
              } else {
                var result18 = null;
                if (reportMatchFailures) {
                  matchFailed("[.]");
                }
              }
              if (result18 !== null) {
                var result13 = [];
                while (result18 !== null) {
                  result13.push(result18);
                  if (input.substr(pos).match(/^[.]/) !== null) {
                    var result18 = input.charAt(pos);
                    pos++;
                  } else {
                    var result18 = null;
                    if (reportMatchFailures) {
                      matchFailed("[.]");
                    }
                  }
                }
              } else {
                var result13 = null;
              }
              if (result13 !== null) {
                var result14 = parse_ws();
                if (result14 !== null) {
                  var result15 = parse_ret();
                  if (result15 !== null) {
                    var result16 = [];
                    if (input.substr(pos).match(/^[.]/) !== null) {
                      var result17 = input.charAt(pos);
                      pos++;
                    } else {
                      var result17 = null;
                      if (reportMatchFailures) {
                        matchFailed("[.]");
                      }
                    }
                    while (result17 !== null) {
                      result16.push(result17);
                      if (input.substr(pos).match(/^[.]/) !== null) {
                        var result17 = input.charAt(pos);
                        pos++;
                      } else {
                        var result17 = null;
                        if (reportMatchFailures) {
                          matchFailed("[.]");
                        }
                      }
                    }
                    if (result16 !== null) {
                      var result9 = [result11, result12, result13, result14, result15, result16];
                    } else {
                      var result9 = null;
                      pos = savedPos3;
                    }
                  } else {
                    var result9 = null;
                    pos = savedPos3;
                  }
                } else {
                  var result9 = null;
                  pos = savedPos3;
                }
              } else {
                var result9 = null;
                pos = savedPos3;
              }
            } else {
              var result9 = null;
              pos = savedPos3;
            }
          } else {
            var result9 = null;
            pos = savedPos3;
          }
          var result10 = result9 !== null
            ? (function(exps, ret) {
                  	      	  var expressions = exps;
                  		  expressions.push(ret);
                  		  return expressions
              		})(result9[0], result9[4])
            : null;
          if (result10 !== null) {
            var result8 = result10;
          } else {
            var result8 = null;
            pos = savedPos2;
          }
          if (result8 !== null) {
            var result0 = result8;
          } else {
            var savedPos0 = pos;
            var savedPos1 = pos;
            var result7 = parse_expressions();
            var result4 = result7 !== null ? result7 : '';
            if (result4 !== null) {
              var result5 = [];
              if (input.substr(pos).match(/^[.]/) !== null) {
                var result6 = input.charAt(pos);
                pos++;
              } else {
                var result6 = null;
                if (reportMatchFailures) {
                  matchFailed("[.]");
                }
              }
              while (result6 !== null) {
                result5.push(result6);
                if (input.substr(pos).match(/^[.]/) !== null) {
                  var result6 = input.charAt(pos);
                  pos++;
                } else {
                  var result6 = null;
                  if (reportMatchFailures) {
                    matchFailed("[.]");
                  }
                }
              }
              if (result5 !== null) {
                var result2 = [result4, result5];
              } else {
                var result2 = null;
                pos = savedPos1;
              }
            } else {
              var result2 = null;
              pos = savedPos1;
            }
            var result3 = result2 !== null
              ? (function(expressions) {
                    	          return expressions || []
                	        })(result2[0])
              : null;
            if (result3 !== null) {
              var result1 = result3;
            } else {
              var result1 = null;
              pos = savedPos0;
            }
            if (result1 !== null) {
              var result0 = result1;
            } else {
              var result0 = null;;
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_sequence() {
        var cacheKey = 'sequence@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result8 = parse_temps();
        var result3 = result8 !== null ? result8 : '';
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result7 = parse_statements();
            var result5 = result7 !== null ? result7 : '';
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(temps, statements) {
          	      	  return smalltalk.SequenceNode._new()
          	      	  	._temps_(temps || [])
          	      	  	._nodes_(statements || [])
          		})(result1[0], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_block() {
        var cacheKey = 'block@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "[") {
          var result3 = "[";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"[\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result11 = parse_blockParamList();
            var result5 = result11 !== null ? result11 : '';
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                var result10 = parse_sequence();
                var result7 = result10 !== null ? result10 : '';
                if (result7 !== null) {
                  var result8 = parse_ws();
                  if (result8 !== null) {
                    if (input.substr(pos, 1) === "]") {
                      var result9 = "]";
                      pos += 1;
                    } else {
                      var result9 = null;
                      if (reportMatchFailures) {
                        matchFailed("\"]\"");
                      }
                    }
                    if (result9 !== null) {
                      var result1 = [result3, result4, result5, result6, result7, result8, result9];
                    } else {
                      var result1 = null;
                      pos = savedPos1;
                    }
                  } else {
                    var result1 = null;
                    pos = savedPos1;
                  }
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(params, sequence) {
          	          return smalltalk.BlockNode._new()
          	          	._parameters_(params || [])
          	          	._nodes_([sequence._asBlockSequenceNode()])
          		})(result1[2], result1[4])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_operand() {
        var cacheKey = 'operand@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result3 = parse_literal();
        if (result3 !== null) {
          var result0 = result3;
        } else {
          var result2 = parse_reference();
          if (result2 !== null) {
            var result0 = result2;
          } else {
            var result1 = parse_subexpression();
            if (result1 !== null) {
              var result0 = result1;
            } else {
              var result0 = null;;
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryMessage() {
        var cacheKey = 'unaryMessage@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result4 = parse_identifier();
          if (result4 !== null) {
            var savedPos2 = pos;
            var savedReportMatchFailuresVar0 = reportMatchFailures;
            reportMatchFailures = false;
            if (input.substr(pos).match(/^[:]/) !== null) {
              var result6 = input.charAt(pos);
              pos++;
            } else {
              var result6 = null;
              if (reportMatchFailures) {
                matchFailed("[:]");
              }
            }
            reportMatchFailures = savedReportMatchFailuresVar0;
            if (result6 === null) {
              var result5 = '';
            } else {
              var result5 = null;
              pos = savedPos2;
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(selector) {
          	      	return smalltalk.SendNode._new()
          	      		._selector_(selector)
          	      })(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_unaryTail() {
        var cacheKey = 'unaryTail@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_unaryMessage();
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result7 = parse_unaryTail();
            var result5 = result7 !== null ? result7 : '';
            if (result5 !== null) {
              var result6 = parse_ws();
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(message, tail) {
          		  if(tail) {
                    	      return tail._valueForReceiver_(message);
                		  }
                		  else {
                    	      return message;
                		  }
            	      })(result1[0], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_unarySend() {
        var cacheKey = 'unarySend@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_operand();
        if (result3 !== null) {
          var result4 = parse_ws();
          if (result4 !== null) {
            var result6 = parse_unaryTail();
            var result5 = result6 !== null ? result6 : '';
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(receiver, tail) {
          		  if(tail) {
                    	      return tail._valueForReceiver_(receiver);
                		  }
                		  else {
                    	      return receiver;
                		  }
          	      })(result1[0], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryMessage() {
        var cacheKey = 'binaryMessage@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result4 = parse_binarySelector();
          if (result4 !== null) {
            var result5 = parse_ws();
            if (result5 !== null) {
              var result8 = parse_unarySend();
              if (result8 !== null) {
                var result6 = result8;
              } else {
                var result7 = parse_operand();
                if (result7 !== null) {
                  var result6 = result7;
                } else {
                  var result6 = null;;
                };
              }
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(selector, arg) {
          	          return smalltalk.SendNode._new()
          	          	._selector_(selector)
          	          	._arguments_([arg])
          	      })(result1[1], result1[3])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_binaryTail() {
        var cacheKey = 'binaryTail@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_binaryMessage();
        if (result3 !== null) {
          var result5 = parse_binaryTail();
          var result4 = result5 !== null ? result5 : '';
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(message, tail) {
                	          if(tail) {
                    	      return tail._valueForReceiver_(message);
                		  }
                		  else {
                    	      return message;
                		  }
            	      })(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_binarySend() {
        var cacheKey = 'binarySend@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_unarySend();
        if (result3 !== null) {
          var result5 = parse_binaryTail();
          var result4 = result5 !== null ? result5 : '';
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(receiver, tail) {
          	      	  if(tail) {
                    	      return tail._valueForReceiver_(receiver);
                		  }
                		  else {
                    	      return receiver;
                		  }
          	      })(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordMessage() {
        var cacheKey = 'keywordMessage@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var savedPos2 = pos;
          var savedPos3 = pos;
          var result8 = parse_keywordPair();
          if (result8 !== null) {
            var result9 = parse_ws();
            if (result9 !== null) {
              var result6 = [result8, result9];
            } else {
              var result6 = null;
              pos = savedPos3;
            }
          } else {
            var result6 = null;
            pos = savedPos3;
          }
          var result7 = result6 !== null
            ? (function(pair) {return pair})(result6[0])
            : null;
          if (result7 !== null) {
            var result5 = result7;
          } else {
            var result5 = null;
            pos = savedPos2;
          }
          if (result5 !== null) {
            var result4 = [];
            while (result5 !== null) {
              result4.push(result5);
              var savedPos2 = pos;
              var savedPos3 = pos;
              var result8 = parse_keywordPair();
              if (result8 !== null) {
                var result9 = parse_ws();
                if (result9 !== null) {
                  var result6 = [result8, result9];
                } else {
                  var result6 = null;
                  pos = savedPos3;
                }
              } else {
                var result6 = null;
                pos = savedPos3;
              }
              var result7 = result6 !== null
                ? (function(pair) {return pair})(result6[0])
                : null;
              if (result7 !== null) {
                var result5 = result7;
              } else {
                var result5 = null;
                pos = savedPos2;
              }
            }
          } else {
            var result4 = null;
          }
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(pairs) {
                		  var selector = [];
                		  var args = [];
                		  for(var i=0;i<pairs.length;i++) {
                    	      selector.push(pairs[i].key);
                    	      args.push(pairs[i].arg);
                		  }
                		  return smalltalk.SendNode._new()
                		  	._selector_(selector.join(""))
                		  	._arguments_(args)
            	      })(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_keywordSend() {
        var cacheKey = 'keywordSend@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_binarySend();
        if (result3 !== null) {
          var result4 = parse_keywordMessage();
          if (result4 !== null) {
            var result1 = [result3, result4];
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(receiver, tail) {
          	          return tail._valueForReceiver_(receiver);
          	      })(result1[0], result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_message() {
        var cacheKey = 'message@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result3 = parse_binaryMessage();
        if (result3 !== null) {
          var result0 = result3;
        } else {
          var result2 = parse_unaryMessage();
          if (result2 !== null) {
            var result0 = result2;
          } else {
            var result1 = parse_keywordMessage();
            if (result1 !== null) {
              var result0 = result1;
            } else {
              var result0 = null;;
            };
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_cascade() {
        var cacheKey = 'cascade@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result15 = parse_keywordSend();
          if (result15 !== null) {
            var result4 = result15;
          } else {
            var result14 = parse_binarySend();
            if (result14 !== null) {
              var result4 = result14;
            } else {
              var result4 = null;;
            };
          }
          if (result4 !== null) {
            var savedPos2 = pos;
            var savedPos3 = pos;
            var result9 = parse_ws();
            if (result9 !== null) {
              if (input.substr(pos, 1) === ";") {
                var result10 = ";";
                pos += 1;
              } else {
                var result10 = null;
                if (reportMatchFailures) {
                  matchFailed("\";\"");
                }
              }
              if (result10 !== null) {
                var result11 = parse_ws();
                if (result11 !== null) {
                  var result12 = parse_message();
                  if (result12 !== null) {
                    var result13 = parse_ws();
                    if (result13 !== null) {
                      var result7 = [result9, result10, result11, result12, result13];
                    } else {
                      var result7 = null;
                      pos = savedPos3;
                    }
                  } else {
                    var result7 = null;
                    pos = savedPos3;
                  }
                } else {
                  var result7 = null;
                  pos = savedPos3;
                }
              } else {
                var result7 = null;
                pos = savedPos3;
              }
            } else {
              var result7 = null;
              pos = savedPos3;
            }
            var result8 = result7 !== null
              ? (function(mess) {return mess})(result7[3])
              : null;
            if (result8 !== null) {
              var result6 = result8;
            } else {
              var result6 = null;
              pos = savedPos2;
            }
            if (result6 !== null) {
              var result5 = [];
              while (result6 !== null) {
                result5.push(result6);
                var savedPos2 = pos;
                var savedPos3 = pos;
                var result9 = parse_ws();
                if (result9 !== null) {
                  if (input.substr(pos, 1) === ";") {
                    var result10 = ";";
                    pos += 1;
                  } else {
                    var result10 = null;
                    if (reportMatchFailures) {
                      matchFailed("\";\"");
                    }
                  }
                  if (result10 !== null) {
                    var result11 = parse_ws();
                    if (result11 !== null) {
                      var result12 = parse_message();
                      if (result12 !== null) {
                        var result13 = parse_ws();
                        if (result13 !== null) {
                          var result7 = [result9, result10, result11, result12, result13];
                        } else {
                          var result7 = null;
                          pos = savedPos3;
                        }
                      } else {
                        var result7 = null;
                        pos = savedPos3;
                      }
                    } else {
                      var result7 = null;
                      pos = savedPos3;
                    }
                  } else {
                    var result7 = null;
                    pos = savedPos3;
                  }
                } else {
                  var result7 = null;
                  pos = savedPos3;
                }
                var result8 = result7 !== null
                  ? (function(mess) {return mess})(result7[3])
                  : null;
                if (result8 !== null) {
                  var result6 = result8;
                } else {
                  var result6 = null;
                  pos = savedPos2;
                }
              }
            } else {
              var result5 = null;
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(send, messages) {
          		var cascade = [];
                		cascade.push(send);
                		for(var i=0;i<messages.length;i++) {
                    		cascade.push(messages[i]);
                		}
                		return smalltalk.CascadeNode._new()
                    	       ._receiver_(send._receiver())
                    	       ._nodes_(cascade)
            	      })(result1[1], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_jsStatement() {
        var cacheKey = 'jsStatement@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 1) === "<") {
          var result3 = "<";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"<\"");
          }
        }
        if (result3 !== null) {
          var result4 = [];
          var savedPos2 = pos;
          if (input.substr(pos, 2) === ">>") {
            var result9 = ">>";
            pos += 2;
          } else {
            var result9 = null;
            if (reportMatchFailures) {
              matchFailed("\">>\"");
            }
          }
          var result10 = result9 !== null
            ? (function() {return ">"})()
            : null;
          if (result10 !== null) {
            var result8 = result10;
          } else {
            var result8 = null;
            pos = savedPos2;
          }
          if (result8 !== null) {
            var result6 = result8;
          } else {
            if (input.substr(pos).match(/^[^>]/) !== null) {
              var result7 = input.charAt(pos);
              pos++;
            } else {
              var result7 = null;
              if (reportMatchFailures) {
                matchFailed("[^>]");
              }
            }
            if (result7 !== null) {
              var result6 = result7;
            } else {
              var result6 = null;;
            };
          }
          while (result6 !== null) {
            result4.push(result6);
            var savedPos2 = pos;
            if (input.substr(pos, 2) === ">>") {
              var result9 = ">>";
              pos += 2;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\">>\"");
              }
            }
            var result10 = result9 !== null
              ? (function() {return ">"})()
              : null;
            if (result10 !== null) {
              var result8 = result10;
            } else {
              var result8 = null;
              pos = savedPos2;
            }
            if (result8 !== null) {
              var result6 = result8;
            } else {
              if (input.substr(pos).match(/^[^>]/) !== null) {
                var result7 = input.charAt(pos);
                pos++;
              } else {
                var result7 = null;
                if (reportMatchFailures) {
                  matchFailed("[^>]");
                }
              }
              if (result7 !== null) {
                var result6 = result7;
              } else {
                var result6 = null;;
              };
            }
          }
          if (result4 !== null) {
            if (input.substr(pos, 1) === ">") {
              var result5 = ">";
              pos += 1;
            } else {
              var result5 = null;
              if (reportMatchFailures) {
                matchFailed("\">\"");
              }
            }
            if (result5 !== null) {
              var result1 = [result3, result4, result5];
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(val) {
          		return smalltalk.JSStatementNode._new()
          			._source_(val.join(""))
            	      })(result1[1])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_method() {
        var cacheKey = 'method@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_ws();
        if (result3 !== null) {
          var result11 = parse_keywordPattern();
          if (result11 !== null) {
            var result4 = result11;
          } else {
            var result10 = parse_binaryPattern();
            if (result10 !== null) {
              var result4 = result10;
            } else {
              var result9 = parse_unaryPattern();
              if (result9 !== null) {
                var result4 = result9;
              } else {
                var result4 = null;;
              };
            };
          }
          if (result4 !== null) {
            var result5 = parse_ws();
            if (result5 !== null) {
              var result8 = parse_sequence();
              var result6 = result8 !== null ? result8 : '';
              if (result6 !== null) {
                var result7 = parse_ws();
                if (result7 !== null) {
                  var result1 = [result3, result4, result5, result6, result7];
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(pattern, sequence) {
          	      	return smalltalk.MethodNode._new()
          		       ._selector_(pattern[0])
          		       ._arguments_(pattern[1])
          		       ._nodes_([sequence])
          	      })(result1[1], result1[3])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function buildErrorMessage() {
        function buildExpected(failuresExpected) {
          failuresExpected.sort();
          
          var lastFailure = null;
          var failuresExpectedUnique = [];
          for (var i = 0; i < failuresExpected.length; i++) {
            if (failuresExpected[i] !== lastFailure) {
              failuresExpectedUnique.push(failuresExpected[i]);
              lastFailure = failuresExpected[i];
            }
          }
          
          switch (failuresExpectedUnique.length) {
            case 0:
              return 'end of input';
            case 1:
              return failuresExpectedUnique[0];
            default:
              return failuresExpectedUnique.slice(0, failuresExpectedUnique.length - 1).join(', ')
                + ' or '
                + failuresExpectedUnique[failuresExpectedUnique.length - 1];
          }
        }
        
        var expected = buildExpected(rightmostMatchFailuresExpected);
        var actualPos = Math.max(pos, rightmostMatchFailuresPos);
        var actual = actualPos < input.length
          ? quote(input.charAt(actualPos))
          : 'end of input';
        
        return 'Expected ' + expected + ' but ' + actual + ' found.';
      }
      
      function computeErrorPosition() {
        /*
         * The first idea was to use |String.split| to break the input up to the
         * error position along newlines and derive the line and column from
         * there. However IE's |split| implementation is so broken that it was
         * enough to prevent it.
         */
        
        var line = 1;
        var column = 1;
        var seenCR = false;
        
        for (var i = 0; i <  rightmostMatchFailuresPos; i++) {
          var ch = input.charAt(i);
          if (ch === '\n') {
            if (!seenCR) { line++; }
            column = 1;
            seenCR = false;
          } else if (ch === '\r' | ch === '\u2028' || ch === '\u2029') {
            line++;
            column = 1;
            seenCR = true;
          } else {
            column++;
            seenCR = false;
          }
        }
        
        return { line: line, column: column };
      }
      
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos === input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos < input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos === 0|
       *   - |rightmostMatchFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos !== input.length) {
        var errorPosition = computeErrorPosition();
        throw new this.SyntaxError(
          buildErrorMessage(),
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
  
  result.SyntaxError = function(message, line, column) {
    this.name = 'SyntaxError';
    this.message = message;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();
smalltalk.addPackage('REPL', []);
smalltalk.addClass('Repl', smalltalk.Object, ['readline', 'interface', 'util'], 'REPL');
smalltalk.addMethod(
unescape('_prompt'),
smalltalk.method({
selector: unescape('prompt'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("amber%20%3E%3E%20");
return self;},
args: [],
source: unescape('prompt%0A%09%5E%27amber%20%3E%3E%20%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_createInterface'),
smalltalk.method({
selector: unescape('createInterface'),
category: 'actions',
fn: function (){
var self=this;
self['@interface']=smalltalk.send(self['@readline'], "_createInterface_stdout_", [smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdout", [])]);
smalltalk.send(self['@interface'], "_on_do_", ["line", (function(buffer){return smalltalk.send(self, "_eval_", [buffer]);})]);
smalltalk.send(self['@interface'], "_on_do_", ["close", (function(){return smalltalk.send(self, "_close", []);})]);
smalltalk.send(self, "_setPrompt", []);
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: [],
source: unescape('createInterface%0A%09%22No%20completion%20for%20now%22%0A%09%22%28readline%20createInterface%20numArgs%20%3C%203%29%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09console%20log%3A%20%270.4...%27.%0A%09%09%09interface%20%3A%3D%20readline%20createInterface%3A%20process%20stdin%20autocomplete%3A%20null.%0A%09%09%09stdin%20on%3A%20%27data%27%20do%3A%20%5B%3Abuffer%20%7C%20interface%20write%3A%20buffer%5D%5D%0A%09%09ifFalse%3A%20%5B%22%0A%09%09%09interface%20%3A%3D%20readline%20createInterface%3A%20process%20stdin%20stdout%3A%20process%20stdout%22%20autocomplete%3A%20null%5D%22.%0A%09interface%20on%3A%20%27line%27%20do%3A%20%5B%3Abuffer%20%20%7C%20self%20eval%3A%20buffer%5D.%0A%09interface%20on%3A%20%27close%27%20do%3A%20%5Bself%20close%5D.%0A%09self%20setPrompt.%0A%09interface%20prompt'),
messageSends: ["createInterface:stdout:", "stdin", "stdout", "on:do:", "eval:", "close", "setPrompt", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_setPrompt'),
smalltalk.method({
selector: unescape('setPrompt'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@interface'], "_setPrompt_", [smalltalk.send(self, "_prompt", [])]);
return self;},
args: [],
source: unescape('setPrompt%0A%09interface%20setPrompt%3A%20self%20prompt'),
messageSends: ["setPrompt:", "prompt"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof process == 'undefined' ? nil : process), "_stdin", []), "_destroy", []);
return self;},
args: [],
source: unescape('close%0A%09process%20stdin%20destroy'),
messageSends: ["destroy", "stdin"],
referencedClasses: []
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
category: 'actions',
fn: function (buffer){
var self=this;
var result=nil;
((($receiver = smalltalk.send(buffer, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]);return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){result=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [buffer]);return smalltalk.send((smalltalk.Transcript || Transcript), "_show_", [result]);})]));
smalltalk.send(self, "_setPrompt", []);
smalltalk.send(self['@interface'], "_prompt", []);
return self;},
args: ["buffer"],
source: unescape('eval%3A%20buffer%0A%09%7C%20result%20%7C%0A%09buffer%20isEmpty%20ifFalse%3A%20%5B%0A%09%09result%20%3A%3D%20Compiler%20new%20loadExpression%3A%20buffer.%0A%09%09Transcript%20show%3A%20result%5D.%0A%09self%20setPrompt.%0A%09interface%20prompt'),
messageSends: ["ifFalse:", "isEmpty", "loadExpression:", "new", "show:", "setPrompt", "prompt"],
referencedClasses: ["Compiler", "Transcript"]
}),
smalltalk.Repl);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@readline']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["readline"]);
self['@util']=smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", ["util"]);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09readline%20%3A%3D%20require%20value%3A%20%27readline%27.%0A%09util%20%3A%3D%20require%20value%3A%20%27util%27'),
messageSends: ["initialize", "value:"],
referencedClasses: []
}),
smalltalk.Repl);


smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_createInterface", []);
return self;},
args: [],
source: unescape('main%0A%09self%20new%20createInterface'),
messageSends: ["createInterface", "new"],
referencedClasses: []
}),
smalltalk.Repl.klass);


smalltalk.init(smalltalk.Object);
smalltalk.classes()._do_(function(each) {each._initialize()});

/* Similar to jQuery(document).ready() */

if(this.smalltalkReady) {
    this.smalltalkReady();
}smalltalk.Repl._main()
