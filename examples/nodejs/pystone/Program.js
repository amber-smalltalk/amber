/* ====================================================================
   |
   |   Jtalk Smalltalk
   |   http://jtalk-project.org
   |
   ======================================================================

   ======================================================================
   |
   | Copyright (c) 2010-2011
   | Nicolas Petton <petton.nicolas@gmail.com>
   |
   | Jtalk is released under the MIT license
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

/* Smalltalk constructors definition */

function SmalltalkObject(){};
function SmalltalkBehavior(){};
function SmalltalkClass(){};
function SmalltalkMetaclass(){
    this.meta = true;
};
function SmalltalkMethod(){};
function SmalltalkNil(){};

function Smalltalk(){

    var st = this;

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
	that.category = spec.category || "";
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
       global smalltalk object. */

    st.mapClassName = function(className, category, fn, superclass) {
	st[className] = klass({
	    className:  className, 
	    category:   category, 
	    superclass: superclass,
	    fn:         fn
	});
    };

    /* Add a class to the smalltalk object, creating a new one if needed. */

    st.addClass = function(className, superclass, iVarNames, category) {
	if(st[className]) {
	    st[className].superclass = superclass;
	    st[className].iVarNames = iVarNames;
	    st[className].category = category || st[className].category;
	} else {
	    st[className] = klass({
		className: className, 
		iVarNames: iVarNames,
		superclass: superclass
	    });
	    st[className].category = category || '';
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
	if(typeof receiver === "undefined") {
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
	if(thisContext) {
	     return withContextSend(receiver, selector, args, klass);
	} else {
	    try {return withContextSend(receiver, selector, args, klass)}
	    catch(error) {
		// Reset the context stack in any case
		thisContext = undefined;
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
	if(typeof receiver === "undefined") {
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
	thisContext = undefined;
	smalltalk.ErrorHandler._current()._handleError_(error);
    }

    /* Handles #dnu: *and* JavaScript method calls.
       if the receiver has no klass, we consider it a JS object (outside of the
       Jtalk system). Else assume that the receiver understands #doesNotUnderstand: */

    function messageNotUnderstood(receiver, selector, args) {
	/* Handles JS method calls. */
	if(receiver.klass === undefined || receiver.allowJavaScriptCalls) {
	    return callJavaScriptMethod(receiver, selector, args);
	}

	/* Handles not understood messages. Also see the Jtalk counter-part 
	   Object>>doesNotUnderstand: */
	
	return receiver._doesNotUnderstand_(
	    st.Message._new()
		._selector_(st.convertSelector(selector))
		._arguments_(args)
	);
    };

    function callJavaScriptMethod(receiver, selector, args) {
	/* Call a method of a JS object, or answer a property.
 
	   Converts keyword-based selectors by using the first
	   keyword only, but keeping all message arguments.

	   Example:
	   "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */

	var jsSelector = selector
	    .replace(/^_/, '')
	    .replace(/_.*/g, '');
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
	smalltalk.Error._signal_(receiver + ' is not a Jtalk object and "' + jsSelector + '" is undefined')
    };


    /* Reuse old contexts stored in oldContexts */

    st.oldContexts = [];

	
    /* Handle thisContext pseudo variable */
    
    pushContext = function(receiver, selector, temps) {
	if(thisContext) {
	    return thisContext = thisContext.newContext(receiver, selector, temps);
	} else {
	    return thisContext = new SmalltalkMethodContext(receiver, selector, temps);
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
	thisContext = that.homeContext;
	smalltalk.oldContexts.push(that);
    }
}

/* Global Smalltalk objects. nil and thisContext shouldn't be globals. */

var nil = new SmalltalkNil();
var smalltalk = new Smalltalk();
var thisContext = undefined;

/* Utilities */

Array.prototype.remove = function(s){
    var index = this.indexOf(s);
    if(this.indexOf(s) != -1)this.splice(index, 1);
}

if(this.jQuery) {
    this.jQuery.allowJavaScriptCalls = true;
}

/****************************************************************************************/


/* Base classes mapping. If you edit this part, do not forget to set the superclass of the
   object metaclass to Class after the definition of Object */

smalltalk.mapClassName("Object", "Kernel", SmalltalkObject);
smalltalk.mapClassName("Smalltalk", "Kernel", Smalltalk, smalltalk.Object);
smalltalk.mapClassName("Behavior", "Kernel", SmalltalkBehavior, smalltalk.Object);
smalltalk.mapClassName("Class", "Kernel", SmalltalkClass, smalltalk.Behavior);
smalltalk.mapClassName("Metaclass", "Kernel", SmalltalkMetaclass, smalltalk.Behavior);
smalltalk.mapClassName("CompiledMethod", "Kernel", SmalltalkMethod, smalltalk.Object);

smalltalk.Object.klass.superclass = smalltalk.Class

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

if(this.CanvasRenderingContext2D) {
    smalltalk.mapClassName("CanvasRenderingContext", "Canvas", CanvasRenderingContext2D, smalltalk.Object);
}smalltalk.addClass('Object', smalltalk.nil, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (anObject){
var self=this;
return self == anObject;
return self;},
source: unescape('%3D%20anObject%0A%09%3Creturn%20self%20%3D%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_~_eq',
smalltalk.method({
selector: '~=',
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [anObject]), "__eq", [false]);
return self;},
source: unescape('%7E%3D%20anObject%0A%09%5E%28self%20%3D%20anObject%29%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;

return self;},
source: unescape('initialize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_yourself',
smalltalk.method({
selector: 'yourself',
category: 'accessing',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('yourself%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_class',
smalltalk.method({
selector: 'class',
category: 'accessing',
fn: function (){
var self=this;
return self.klass;
return self;},
source: unescape('class%0A%09%3Creturn%20self.klass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object not indexable"]);
return self;},
source: unescape('size%0A%09self%20error%3A%20%27Object%20not%20indexable%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_shallowCopy", []), "_postCopy", []);
return self;},
source: unescape('copy%0A%09%5Eself%20shallowCopy%20postCopy'),
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
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
source: unescape('shallowCopy%0A%09%3C%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
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
source: unescape('deepCopy%0A%09%3C%20%20%20%20%0A%09%20%20%20%20var%20copy%20%3D%20self.klass._new%28%29%3B%0A%09%20%20%20%20for%28var%20i%20in%20self%29%20%7B%0A%09%09if%28/%5E@.+/.test%28i%29%29%20%7B%0A%09%09%20%20%20%20copy%5Bi%5D%20%3D%20self%5Bi%5D._deepCopy%28%29%3B%0A%09%09%7D%0A%09%20%20%20%20%7D%0A%09%20%20%20%20return%20copy%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_postCopy',
smalltalk.method({
selector: 'postCopy',
category: 'copying',
fn: function (){
var self=this;

return self;},
source: unescape('postCopy'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'__minus_gt',
smalltalk.method({
selector: '->',
category: 'converting',
fn: function (anObject){
var self=this;
return smalltalk.send((smalltalk.Association || Association), "_key_value_", [self, anObject]);
return self;},
source: unescape('-%3E%20anObject%0A%09%5EAssociation%20key%3A%20self%20value%3A%20anObject'),
messageSends: ["key:value:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Object);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
source: unescape('asJavascript%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_',
smalltalk.method({
selector: 'perform:',
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_perform_withArguments_", [aSymbol, []]);
return self;},
source: unescape('perform%3A%20aSymbol%0A%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_perform_withArguments_',
smalltalk.method({
selector: 'perform:withArguments:',
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [smalltalk.send(aSymbol, "_asSelector", []), aCollection]);
return self;},
source: unescape('perform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%5Eself%20basicPerform%3A%20aSymbol%20asSelector%20withArguments%3A%20aCollection'),
messageSends: ["basicPerform:withArguments:", "asSelector"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_',
smalltalk.method({
selector: 'instVarAt:',
category: 'accessing',
fn: function (aString){
var self=this;
return self['@'+aString];
return self;},
source: unescape('instVarAt%3A%20aString%0A%09%3Creturn%20self%5B%27@%27+aString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_instVarAt_put_',
smalltalk.method({
selector: 'instVarAt:put:',
category: 'accessing',
fn: function (aString, anObject){
var self=this;
self['@' + aString] = anObject;
return self;},
source: unescape('instVarAt%3A%20aString%20put%3A%20anObject%0A%09%3Cself%5B%27@%27%20+%20aString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_',
smalltalk.method({
selector: 'basicAt:',
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
source: unescape('basicAt%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicAt_put_',
smalltalk.method({
selector: 'basicAt:put:',
category: 'accessing',
fn: function (aString, anObject){
var self=this;
return self[aString] = anObject;
return self;},
source: unescape('basicAt%3A%20aString%20put%3A%20anObject%0A%09%3Creturn%20self%5BaString%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_error_',
smalltalk.method({
selector: 'error:',
category: 'error handling',
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.Error || Error), "_signal_", [aString]);
return self;},
source: unescape('error%3A%20aString%0A%09Error%20signal%3A%20aString'),
messageSends: ["signal:"],
referencedClasses: [smalltalk.Error]
}),
smalltalk.Object);

smalltalk.addMethod(
'_subclassResponsibility',
smalltalk.method({
selector: 'subclassResponsibility',
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["This method is a responsibility of a subclass"]);
return self;},
source: unescape('subclassResponsibility%0A%09self%20error%3A%20%27This%20method%20is%20a%20responsibility%20of%20a%20subclass%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_shouldNotImplement',
smalltalk.method({
selector: 'shouldNotImplement',
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send("This method should not be implemented in ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
source: unescape('shouldNotImplement%0A%09self%20error%3A%20%27This%20method%20should%20not%20be%20implemented%20in%20%27%2C%20self%20class%20name'),
messageSends: ["error:", unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_try_catch_',
smalltalk.method({
selector: 'try:catch:',
category: 'error handling',
fn: function (aBlock, anotherBlock){
var self=this;
try{aBlock()} catch(e) {anotherBlock(e)};
return self;},
source: unescape('try%3A%20aBlock%20catch%3A%20anotherBlock%0A%09%3Ctry%7BaBlock%28%29%7D%20catch%28e%29%20%7BanotherBlock%28e%29%7D%3E%20'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send("a ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);
return self;},
source: unescape('printString%0A%09%5E%27a%20%27%2C%20self%20class%20name'),
messageSends: [unescape("%2C"), "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isKindOf_',
smalltalk.method({
selector: 'isKindOf:',
category: 'testing',
fn: function (aClass){
var self=this;
return (($receiver = smalltalk.send(self, "_isMemberOf_", [aClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_inheritsFrom_", [aClass]);})]);
return self;},
source: unescape('isKindOf%3A%20aClass%0A%09%5E%28self%20isMemberOf%3A%20aClass%29%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bself%20class%20inheritsFrom%3A%20aClass%5D'),
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isMemberOf_',
smalltalk.method({
selector: 'isMemberOf:',
category: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [aClass]);
return self;},
source: unescape('isMemberOf%3A%20aClass%0A%09%5Eself%20class%20%3D%20aClass'),
messageSends: [unescape("%3D"), "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isNil", []), "_not", []);
return self;},
source: unescape('notNil%0A%09%5Eself%20isNil%20not'),
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isClass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isMetaclass%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isNumber%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isString%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_isParseFailure',
smalltalk.method({
selector: 'isParseFailure',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('isParseFailure%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_',
smalltalk.method({
selector: 'basicPerform:',
category: 'message handling',
fn: function (aSymbol){
var self=this;
return smalltalk.send(self, "_basicPerform_withArguments_", [aSymbol, []]);
return self;},
source: unescape('basicPerform%3A%20aSymbol%20%0A%09%5Eself%20basicPerform%3A%20aSymbol%20withArguments%3A%20%23%28%29'),
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicPerform_withArguments_',
smalltalk.method({
selector: 'basicPerform:withArguments:',
category: 'message handling',
fn: function (aSymbol, aCollection){
var self=this;
return self[aSymbol].apply(self, aCollection);;
return self;},
source: unescape('basicPerform%3A%20aSymbol%20withArguments%3A%20aCollection%0A%09%3Creturn%20self%5BaSymbol%5D.apply%28self%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_basicDelete_',
smalltalk.method({
selector: 'basicDelete:',
category: 'accessing',
fn: function (aString){
var self=this;
delete self[aString];
return self;},
source: unescape('basicDelete%3A%20aString%0A%20%20%20%20%3Cdelete%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_doesNotUnderstand_',
smalltalk.method({
selector: 'doesNotUnderstand:',
category: 'error handling',
fn: function (aMessage){
var self=this;
(function($rec){smalltalk.send($rec, "_receiver_", [self]);smalltalk.send($rec, "_message_", [aMessage]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.MessageNotUnderstood || MessageNotUnderstood), "_new", []));
return self;},
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09MessageNotUnderstood%20new%0A%09%09receiver%3A%20self%3B%0A%09%09message%3A%20aMessage%3B%0A%09%09signal'),
messageSends: ["receiver:", "message:", "signal", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJSON',
smalltalk.method({
selector: 'asJSON',
category: 'converting',
fn: function (){
var self=this;
return JSON.stringify(self._asJSONObject());
return self;},
source: unescape('asJSON%0A%09%3Creturn%20JSON.stringify%28self._asJSONObject%28%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(object, "_basicAt_put_", [each, smalltalk.send(smalltalk.send(self, "_instVarAt_", [each]), "_asJSONObject", [])]);})]);
return object;
return self;},
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%20%7C%0A%09%09object%20basicAt%3A%20each%20put%3A%20%28self%20instVarAt%3A%20each%29%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "do:", "instanceVariableNames", "class", "basicAt:put:", "asJSONObject", "instVarAt:"],
referencedClasses: [smalltalk.Object]
}),
smalltalk.Object);

smalltalk.addMethod(
'_halt',
smalltalk.method({
selector: 'halt',
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Halt encountered"]);
return self;},
source: unescape('halt%0A%09self%20error%3A%20%27Halt%20encountered%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
'_log_block_',
smalltalk.method({
selector: 'log:block:',
category: 'printing',
fn: function (aString, aBlock){
var self=this;
var result=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(aString, "__comma", [" time: "]), "__comma", [smalltalk.send(smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){return result=smalltalk.send(aBlock, "_value", []);})]), "_printString", [])])]);
return result;
return self;},
source: unescape('log%3A%20aString%20block%3A%20aBlock%0A%0A%09%7C%20result%20%7C%0A%09console%20log%3A%20%20aString%2C%20%20%27%20time%3A%20%27%2C%20%28Date%20millisecondsToRun%3A%20%5Bresult%20%3A%3D%20aBlock%20value%5D%29%20printString.%0A%09%5Eresult%0A%0A'),
messageSends: ["log:", unescape("%2C"), "printString", "millisecondsToRun:", "value"],
referencedClasses: [smalltalk.Date]
}),
smalltalk.Object);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;

return self;},
source: unescape('initialize%0A%09%22no%20op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Smalltalk', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_classes',
smalltalk.method({
selector: 'classes',
category: 'accessing',
fn: function (){
var self=this;
return self.classes();
return self;},
source: unescape('classes%0A%09%3Creturn%20self.classes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_readJSON_',
smalltalk.method({
selector: 'readJSON:',
category: 'accessing',
fn: function (anObject){
var self=this;
return self.readJSObject(anObject);
return self;},
source: unescape('readJSON%3A%20anObject%0A%09%3Creturn%20self.readJSObject%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self;},
source: unescape('at%3A%20aString%0A%09%3Creturn%20self%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_removeClass_',
smalltalk.method({
selector: 'removeClass:',
category: 'accessing',
fn: function (aClass){
var self=this;
(($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_asString", []), "__comma", [unescape("%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21")])]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(aClass, "_removeCompiledMethod_", [each]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(aClass, "_class", []), "_removeCompiledMethod_", [each]);})]);
smalltalk.send(self, "_basicDelete_", [smalltalk.send(aClass, "_name", [])]);
return self;},
source: unescape('removeClass%3A%20aClass%0A%09aClass%20isMetaclass%20ifTrue%3A%20%5Bself%20error%3A%20aClass%20asString%2C%20%27%20is%20a%20Metaclass%20and%20cannot%20be%20removed%21%27%5D.%0A%09aClass%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20removeCompiledMethod%3A%20each%5D.%0A%09aClass%20class%20methodDictionary%20values%20do%3A%20%5B%3Aeach%20%7C%0A%09%09aClass%20class%20removeCompiledMethod%3A%20each%5D.%0A%09self%20basicDelete%3A%20aClass%20name'),
messageSends: ["ifTrue:", "isMetaclass", "error:", unescape("%2C"), "asString", "do:", "values", "methodDictionary", "removeCompiledMethod:", "class", "basicDelete:", "name"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_basicParse_',
smalltalk.method({
selector: 'basicParse:',
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.parser.parse(aString);
return self;},
source: unescape('basicParse%3A%20aString%0A%09%3Creturn%20smalltalk.parser.parse%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'accessing',
fn: function (aString){
var self=this;
var result=nil;
smalltalk.send(self, "_try_catch_", [(function(){return result=smalltalk.send(self, "_basicParse_", [aString]);}), (function(ex){return smalltalk.send(smalltalk.send(self, "_parseError_", [ex]), "_signal", []);})]);
return result;
return self;},
source: unescape('parse%3A%20aString%0A%09%7C%20result%20%7C%0A%09self%20try%3A%20%5Bresult%20%3A%3D%20self%20basicParse%3A%20aString%5D%20catch%3A%20%5B%3Aex%20%7C%20%28self%20parseError%3A%20ex%29%20signal%5D.%0A%09%5Eresult'),
messageSends: ["try:catch:", "basicParse:", "signal", "parseError:"],
referencedClasses: []
}),
smalltalk.Smalltalk);

smalltalk.addMethod(
'_parseError_',
smalltalk.method({
selector: 'parseError:',
category: 'accessing',
fn: function (anException){
var self=this;
return smalltalk.Error._new()
		._messageText_('Parse error on line ' + anException.line + ' column ' + anException.column + ' : ' + anException.message);
return self;},
source: unescape('parseError%3A%20anException%0A%09%3Creturn%20smalltalk.Error._new%28%29%0A%09%09._messageText_%28%27Parse%20error%20on%20line%20%27%20+%20anException.line%20+%20%27%20column%20%27%20+%20anException.column%20+%20%27%20%3A%20%27%20+%20anException.message%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk);


smalltalk.Smalltalk.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk;
return self;},
source: unescape('current%0A%09%3Creturn%20smalltalk%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Smalltalk.klass);


smalltalk.addClass('Behavior', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []);
return self;},
source: unescape('new%0A%09%5Eself%20basicNew%20initialize'),
messageSends: ["initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_basicNew',
smalltalk.method({
selector: 'basicNew',
category: 'instance creation',
fn: function (){
var self=this;
return new self.fn();
return self;},
source: unescape('basicNew%0A%09%3Creturn%20new%20self.fn%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_name',
smalltalk.method({
selector: 'name',
category: 'accessing',
fn: function (){
var self=this;
return self.className || nil;
return self;},
source: unescape('name%0A%09%3Creturn%20self.className%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_superclass',
smalltalk.method({
selector: 'superclass',
category: 'accessing',
fn: function (){
var self=this;
return self.superclass || nil;
return self;},
source: unescape('superclass%0A%09%3Creturn%20self.superclass%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_subclasses',
smalltalk.method({
selector: 'subclasses',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.subclasses(self);
return self;},
source: unescape('subclasses%0A%09%3Creturn%20smalltalk.subclasses%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_allSubclasses',
smalltalk.method({
selector: 'allSubclasses',
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(self, "_subclasses", []);
smalltalk.send(smalltalk.send(self, "_subclasses", []), "_do_", [(function(each){return smalltalk.send(result, "_addAll_", [smalltalk.send(each, "_allSubclasses", [])]);})]);
return result;
return self;},
source: unescape('allSubclasses%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20subclasses.%0A%09self%20subclasses%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20result%20addAll%3A%20each%20allSubclasses%5D.%0A%09%5Eresult'),
messageSends: ["subclasses", "do:", "addAll:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_withAllSubclasses',
smalltalk.method({
selector: 'withAllSubclasses',
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_allSubclasses", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_with_", [self]));
return self;},
source: unescape('withAllSubclasses%0A%09%5E%28Array%20with%3A%20self%29%20addAll%3A%20self%20allSubclasses%3B%20yourself'),
messageSends: ["addAll:", "allSubclasses", "yourself", "with:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_prototype',
smalltalk.method({
selector: 'prototype',
category: 'accessing',
fn: function (){
var self=this;
return self.fn.prototype;
return self;},
source: unescape('prototype%0A%09%3Creturn%20self.fn.prototype%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodDictionary',
smalltalk.method({
selector: 'methodDictionary',
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
source: unescape('methodDictionary%0A%09%3Cvar%20dict%20%3D%20smalltalk.Dictionary._new%28%29%3B%0A%09var%20methods%20%3D%20self.fn.prototype.methods%3B%0A%09for%28var%20i%20in%20methods%29%20%7B%0A%09%09if%28methods%5Bi%5D.selector%29%20%7B%0A%09%09%09dict._at_put_%28methods%5Bi%5D.selector%2C%20methods%5Bi%5D%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09return%20dict%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodsFor_',
smalltalk.method({
selector: 'methodsFor:',
category: 'accessing',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_category_", [self, aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCategoryReader || ClassCategoryReader), "_new", []));
return self;},
source: unescape('methodsFor%3A%20aString%0A%09%5EClassCategoryReader%20new%0A%09%20%20%20%20class%3A%20self%20category%3A%20aString%3B%0A%09%20%20%20%20yourself'),
messageSends: ["class:category:", "yourself", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_addCompiledMethod_',
smalltalk.method({
selector: 'addCompiledMethod:',
category: 'accessing',
fn: function (aMethod){
var self=this;
smalltalk.addMethod(aMethod.selector._asSelector(), aMethod, self);
return self;},
source: unescape('addCompiledMethod%3A%20aMethod%0A%09%3Csmalltalk.addMethod%28aMethod.selector._asSelector%28%29%2C%20aMethod%2C%20self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_instanceVariableNames',
smalltalk.method({
selector: 'instanceVariableNames',
category: 'accessing',
fn: function (){
var self=this;
return self.iVarNames;
return self;},
source: unescape('instanceVariableNames%0A%09%3Creturn%20self.iVarNames%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment',
smalltalk.method({
selector: 'comment',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["comment"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
source: unescape('comment%0A%20%20%20%20%5E%28self%20basicAt%3A%20%27comment%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_comment_',
smalltalk.method({
selector: 'comment:',
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["comment", aString]);
return self;},
source: unescape('comment%3A%20aString%0A%20%20%20%20self%20basicAt%3A%20%27comment%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_commentStamp',
smalltalk.method({
selector: 'commentStamp',
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_class_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassCommentReader || ClassCommentReader), "_new", []));
return self;},
source: unescape('commentStamp%0A%20%20%20%20%5EClassCommentReader%20new%0A%09class%3A%20self%3B%0A%09yourself'),
messageSends: ["class:", "yourself", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_removeCompiledMethod_',
smalltalk.method({
selector: 'removeCompiledMethod:',
category: 'accessing',
fn: function (aMethod){
var self=this;
delete self.fn.prototype[aMethod.selector._asSelector()];
	delete self.fn.prototype.methods[aMethod.selector];
	smalltalk.init(self);;
return self;},
source: unescape('removeCompiledMethod%3A%20aMethod%0A%09%3Cdelete%20self.fn.prototype%5BaMethod.selector._asSelector%28%29%5D%3B%0A%09delete%20self.fn.prototype.methods%5BaMethod.selector%5D%3B%0A%09smalltalk.init%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_inheritsFrom_',
smalltalk.method({
selector: 'inheritsFrom:',
category: 'instance creation',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_allSubclasses", []), "_includes_", [self]);
return self;},
source: unescape('inheritsFrom%3A%20aClass%0A%09%5EaClass%20allSubclasses%20includes%3A%20self'),
messageSends: ["includes:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_protocols',
smalltalk.method({
selector: 'protocols',
category: 'accessing',
fn: function (){
var self=this;
var protocols=nil;
protocols=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_do_", [(function(each){return (($receiver = smalltalk.send(protocols, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(protocols, "_add_", [smalltalk.send(each, "_category", [])]);})]);})]);
return smalltalk.send(protocols, "_sort", []);
return self;},
source: unescape('protocols%0A%20%20%20%20%7C%20protocols%20%7C%0A%20%20%20%20protocols%20%3A%3D%20Array%20new.%0A%20%20%20%20self%20methodDictionary%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28protocols%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0A%09%09protocols%20add%3A%20each%20category%5D%5D.%0A%20%20%20%20%5Eprotocols%20sort'),
messageSends: ["new", "do:", "methodDictionary", "ifFalse:", "includes:", "category", "add:", "sort"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_protocolsDo_',
smalltalk.method({
selector: 'protocolsDo:',
category: 'accessing',
fn: function (aBlock){
var self=this;
var methodsByCategory=nil;
methodsByCategory=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodDictionary", []), "_values", []), "_do_", [(function(m){return smalltalk.send(smalltalk.send(methodsByCategory, "_at_ifAbsentPut_", [smalltalk.send(m, "_category", []), (function(){return smalltalk.send((smalltalk.Array || Array), "_new", []);})]), "_add_", [m]);})]);
smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(category){return smalltalk.send(aBlock, "_value_value_", [category, smalltalk.send(methodsByCategory, "_at_", [category])]);})]);
return self;},
source: unescape('protocolsDo%3A%20aBlock%0A%09%22Execute%20aBlock%20for%20each%20method%20category%20with%0A%09its%20collection%20of%20methods%20in%20the%20sort%20order%20of%20category%20name.%22%0A%0A%09%7C%20methodsByCategory%20%7C%0A%09methodsByCategory%20%3A%3D%20Dictionary%20new.%0A%09self%20methodDictionary%20values%20do%3A%20%5B%3Am%20%7C%0A%09%09%28methodsByCategory%20at%3A%20m%20category%20ifAbsentPut%3A%20%5BArray%20new%5D%29%0A%20%09%09%09add%3A%20m%5D.%20%0A%09self%20protocols%20do%3A%20%5B%3Acategory%20%7C%0A%09%09aBlock%20value%3A%20category%20value%3A%20%28methodsByCategory%20at%3A%20category%29%5D'),
messageSends: ["new", "do:", "values", "methodDictionary", "add:", "at:ifAbsentPut:", "category", "protocols", "value:value:", "at:"],
referencedClasses: [smalltalk.nil,smalltalk.Array]
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_allInstanceVariableNames',
smalltalk.method({
selector: 'allInstanceVariableNames',
category: 'accessing',
fn: function (){
var self=this;
var result=nil;
result=smalltalk.send(smalltalk.send(self, "_instanceVariableNames", []), "_copy", []);
(($receiver = smalltalk.send(self, "_superclass", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(result, "_addAll_", [smalltalk.send(smalltalk.send(self, "_superclass", []), "_allInstanceVariableNames", [])]);})() : nil;
return result;
return self;},
source: unescape('allInstanceVariableNames%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20self%20instanceVariableNames%20copy.%0A%09self%20superclass%20ifNotNil%3A%20%5B%0A%09%20%20%20%20result%20addAll%3A%20self%20superclass%20allInstanceVariableNames%5D.%0A%09%5Eresult'),
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodAt_',
smalltalk.method({
selector: 'methodAt:',
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.methods(self)[aString];
return self;},
source: unescape('methodAt%3A%20aString%0A%09%3Creturn%20smalltalk.methods%28self%29%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_methodsFor_stamp_',
smalltalk.method({
selector: 'methodsFor:stamp:',
category: 'accessing',
fn: function (aString, aStamp){
var self=this;
return smalltalk.send(self, "_methodsFor_", [aString]);
return self;},
source: unescape('methodsFor%3A%20aString%20stamp%3A%20aStamp%0A%09%22Added%20for%20compatibility%2C%20right%20now%20ignores%20stamp.%22%0A%09%5Eself%20methodsFor%3A%20aString'),
messageSends: ["methodsFor:"],
referencedClasses: []
}),
smalltalk.Behavior);

smalltalk.addMethod(
'_commentStamp_prior_',
smalltalk.method({
selector: 'commentStamp:prior:',
category: 'accessing',
fn: function (aStamp, prior){
var self=this;

return self;},
source: unescape('commentStamp%3A%20aStamp%20prior%3A%20prior%0A%20%20%20%20%20%20%20%20%20%22Ignored%20right%20now.%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Behavior);



smalltalk.addClass('Class', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
category: 'accessing',
fn: function (){
var self=this;
return self.category;
return self;},
source: unescape('category%0A%09%3Creturn%20self.category%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
category: 'accessing',
fn: function (aString){
var self=this;
self.category = aString;
return self;},
source: unescape('category%3A%20aString%0A%09%3Cself.category%20%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_category_", [aString, anotherString, nil]);
return self;},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20category%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:category:"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_category_", [self, aString, aString2, aString3]);
return self;},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:category:", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Class);

smalltalk.addMethod(
'_isClass',
smalltalk.method({
selector: 'isClass',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isClass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
source: unescape('printString%0A%09%5Eself%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_rename_',
smalltalk.method({
selector: 'rename:',
category: 'accessing',
fn: function (aString){
var self=this;

		smalltalk[aString] = self;
		delete smalltalk[self.className];
		self.className = aString;
	;
return self;},
source: unescape('rename%3A%20aString%0A%09%3C%0A%09%09smalltalk%5BaString%5D%20%3D%20self%3B%0A%09%09delete%20smalltalk%5Bself.className%5D%3B%0A%09%09self.className%20%3D%20aString%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Class);

smalltalk.addMethod(
'_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:',
category: 'class creation',
fn: function (aString, aString2, classVars, pools, aString3){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_category_", [aString, aString2, aString3]);
return self;},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20classVariableNames%3A%20classVars%20poolDictionaries%3A%20pools%20category%3A%20aString3%0A%09%22Just%20ignore%20class%20variables%20and%20pools.%20Added%20for%20compatibility.%22%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3'),
messageSends: ["subclass:instanceVariableNames:category:"],
referencedClasses: []
}),
smalltalk.Class);



smalltalk.addClass('Metaclass', smalltalk.Behavior, [], 'Kernel');
smalltalk.addMethod(
'_instanceClass',
smalltalk.method({
selector: 'instanceClass',
category: 'accessing',
fn: function (){
var self=this;
return self.instanceClass;
return self;},
source: unescape('instanceClass%0A%09%3Creturn%20self.instanceClass%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_instanceVariableNames_',
smalltalk.method({
selector: 'instanceVariableNames:',
category: 'accessing',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_class_instanceVariableNames_", [self, aCollection]);
return self;},
source: unescape('instanceVariableNames%3A%20aCollection%0A%09ClassBuilder%20new%0A%09%20%20%20%20class%3A%20self%20instanceVariableNames%3A%20aCollection'),
messageSends: ["class:instanceVariableNames:", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_isMetaclass',
smalltalk.method({
selector: 'isMetaclass',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isMetaclass%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Metaclass);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_instanceClass", []), "_name", []), "__comma", [" class"]);
return self;},
source: unescape('printString%0A%09%5Eself%20instanceClass%20name%2C%20%27%20class%27'),
messageSends: [unescape("%2C"), "name", "instanceClass"],
referencedClasses: []
}),
smalltalk.Metaclass);



smalltalk.addClass('CompiledMethod', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["source"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
source: unescape('source%0A%09%5E%28self%20basicAt%3A%20%27source%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["source", aString]);
return self;},
source: unescape('source%3A%20aString%0A%09self%20basicAt%3A%20%27source%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category',
smalltalk.method({
selector: 'category',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", ["category"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;},
source: unescape('category%0A%09%5E%28self%20basicAt%3A%20%27category%27%29%20ifNil%3A%20%5B%27%27%5D'),
messageSends: ["ifNil:", "basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_category_',
smalltalk.method({
selector: 'category:',
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["category", aString]);
return self;},
source: unescape('category%3A%20aString%0A%09self%20basicAt%3A%20%27category%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["selector"]);
return self;},
source: unescape('selector%0A%09%5Eself%20basicAt%3A%20%27selector%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["selector", aString]);
return self;},
source: unescape('selector%3A%20aString%0A%09self%20basicAt%3A%20%27selector%27%20put%3A%20aString'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn',
smalltalk.method({
selector: 'fn',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["fn"]);
return self;},
source: unescape('fn%0A%09%5Eself%20basicAt%3A%20%27fn%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_fn_',
smalltalk.method({
selector: 'fn:',
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_basicAt_put_", ["fn", aBlock]);
return self;},
source: unescape('fn%3A%20aBlock%0A%09self%20basicAt%3A%20%27fn%27%20put%3A%20aBlock'),
messageSends: ["basicAt:put:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_messageSends',
smalltalk.method({
selector: 'messageSends',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["messageSends"]);
return self;},
source: unescape('messageSends%0A%09%5Eself%20basicAt%3A%20%27messageSends%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_methodClass',
smalltalk.method({
selector: 'methodClass',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["methodClass"]);
return self;},
source: unescape('methodClass%0A%09%5Eself%20basicAt%3A%20%27methodClass%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
'_referencedClasses',
smalltalk.method({
selector: 'referencedClasses',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicAt_", ["referencedClasses"]);
return self;},
source: unescape('referencedClasses%0A%09%5Eself%20basicAt%3A%20%27referencedClasses%27'),
messageSends: ["basicAt:"],
referencedClasses: []
}),
smalltalk.CompiledMethod);



smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aNumber){
var self=this;
return Number(self) == aNumber;
return self;},
source: unescape('%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20Number%28self%29%20%3D%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
category: 'comparing',
fn: function (aNumber){
var self=this;
return self > aNumber;
return self;},
source: unescape('%3E%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
category: 'comparing',
fn: function (aNumber){
var self=this;
return self < aNumber;
return self;},
source: unescape('%3C%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
category: 'comparing',
fn: function (aNumber){
var self=this;
return self >= aNumber;
return self;},
source: unescape('%3E%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3E%3E%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
category: 'comparing',
fn: function (aNumber){
var self=this;
return self <= aNumber;
return self;},
source: unescape('%3C%3D%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20%3C%3D%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self + aNumber;
return self;},
source: unescape('+%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20+%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self - aNumber;
return self;},
source: unescape('-%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20-%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self * aNumber;
return self;},
source: unescape('*%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20*%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self / aNumber;
return self;},
source: unescape('/%20aNumber%0A%09%22Inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%20/%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_max_',
smalltalk.method({
selector: 'max:',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.max(self, aNumber);;
return self;},
source: unescape('max%3A%20aNumber%0A%09%3Creturn%20Math.max%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_min_',
smalltalk.method({
selector: 'min:',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.min(self, aNumber);;
return self;},
source: unescape('min%3A%20aNumber%0A%09%3Creturn%20Math.min%28self%2C%20aNumber%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_rounded',
smalltalk.method({
selector: 'rounded',
category: 'converting',
fn: function (){
var self=this;
return Math.round(self);;
return self;},
source: unescape('rounded%0A%09%3Creturn%20Math.round%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_truncated',
smalltalk.method({
selector: 'truncated',
category: 'converting',
fn: function (){
var self=this;
return Math.floor(self);;
return self;},
source: unescape('truncated%0A%09%3Creturn%20Math.floor%28self%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_',
smalltalk.method({
selector: 'to:',
category: 'converting',
fn: function (aNumber){
var self=this;
var array=nil;
var first=nil;
var last=nil;
var count=nil;
first=smalltalk.send(self, "_truncated", []);
last=(($receiver = smalltalk.send(aNumber, "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);
count=(1);
(($receiver = (($receiver = first).klass === smalltalk.Number) ? $receiver <=last : smalltalk.send($receiver, "__lt_eq", [last])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["Wrong interval"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["Wrong interval"]);})]);
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send((($receiver = last).klass === smalltalk.Number) ? $receiver -first : smalltalk.send($receiver, "__minus", [first]), "_timesRepeat_", [(function(){smalltalk.send(array, "_at_put_", [count, first]);count=(($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);return first=(($receiver = first).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})]);
return array;
return self;},
source: unescape('to%3A%20aNumber%0A%09%7C%20array%20first%20last%20count%20%7C%0A%09first%20%3A%3D%20self%20truncated.%0A%09last%20%3A%3D%20aNumber%20truncated%20+%201.%0A%09count%20%3A%3D%201.%0A%09%28first%20%3C%3D%20last%29%20ifFalse%3A%20%5Bself%20error%3A%20%27Wrong%20interval%27%5D.%0A%09array%20%3A%3D%20Array%20new.%0A%09%28last%20-%20first%29%20timesRepeat%3A%20%5B%0A%09%20%20%20%20array%20at%3A%20count%20put%3A%20first.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%09%20%20%20%20first%20%3A%3D%20first%20+%201%5D.%0A%09%5Earray'),
messageSends: ["truncated", unescape("+"), "ifFalse:", unescape("%3C%3D"), "error:", "new", "timesRepeat:", unescape("-"), "at:put:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Number);

smalltalk.addMethod(
'_timesRepeat_',
smalltalk.method({
selector: 'timesRepeat:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
var integer=nil;
var count=nil;
integer=smalltalk.send(self, "_truncated", []);
count=(1);
(function(){while(!(function(){return (($receiver = count).klass === smalltalk.Number) ? $receiver >self : smalltalk.send($receiver, "__gt", [self]);})()) {(function(){smalltalk.send(aBlock, "_value", []);return count=(($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})()}})();
return self;},
source: unescape('timesRepeat%3A%20aBlock%0A%09%7C%20integer%20count%20%7C%0A%09integer%20%3A%3D%20self%20truncated.%0A%09count%20%3A%3D%201.%0A%09%5Bcount%20%3E%20self%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20aBlock%20value.%0A%09%20%20%20%20count%20%3A%3D%20count%20+%201%5D'),
messageSends: ["truncated", "whileFalse:", unescape("%3E"), "value", unescape("+")],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_to_do_',
smalltalk.method({
selector: 'to:do:',
category: 'enumerating',
fn: function (aNumber, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_to_", [aNumber]), "_do_", [aBlock]);
return self;},
source: unescape('to%3A%20aNumber%20do%3A%20aBlock%0A%09%5E%28self%20to%3A%20aNumber%29%20do%3A%20aBlock'),
messageSends: ["do:", "to:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_printString", []);
return self;},
source: unescape('asString%0A%09%5Eself%20printString'),
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_printString", [])]), "__comma", [unescape("%29")]);
return self;},
source: unescape('asJavascript%0A%09%5E%27%28%27%2C%20self%20printString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return String(self);
return self;},
source: unescape('printString%0A%09%3Creturn%20String%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_isNumber',
smalltalk.method({
selector: 'isNumber',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isNumber%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_atRandom',
smalltalk.method({
selector: 'atRandom',
category: 'converting',
fn: function (){
var self=this;
return (($receiver = smalltalk.send((($receiver = smalltalk.send(smalltalk.send((smalltalk.Random || Random), "_new", []), "_next", [])).klass === smalltalk.Number) ? $receiver *self : smalltalk.send($receiver, "__star", [self]), "_truncated", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);
return self;},
source: unescape('atRandom%0A%20%20%20%20%5E%28Random%20new%20next%20*%20self%29%20truncated%20+%201'),
messageSends: [unescape("+"), "truncated", unescape("*"), "next", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Number);

smalltalk.addMethod(
'__at',
smalltalk.method({
selector: '@',
category: 'converting',
fn: function (aNumber){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, aNumber]);
return self;},
source: unescape('@%20aNumber%0A%09%5EPoint%20x%3A%20self%20y%3A%20aNumber'),
messageSends: ["x:y:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Number);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [self, self]);
return self;},
source: unescape('asPoint%0A%09%5EPoint%20x%3A%20self%20y%3A%20self'),
messageSends: ["x:y:"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Number);

smalltalk.addMethod(
'_clearInterval',
smalltalk.method({
selector: 'clearInterval',
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearInterval(Number(self));
return self;},
source: unescape('clearInterval%0A%09%3CclearInterval%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_clearTimeout',
smalltalk.method({
selector: 'clearTimeout',
category: 'timeouts/intervals',
fn: function (){
var self=this;
clearTimeout(Number(self));
return self;},
source: unescape('clearTimeout%0A%09%3CclearTimeout%28Number%28self%29%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_modulo_',
smalltalk.method({
selector: 'modulo:',
category: 'arithmetic',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self;},
source: unescape('modulo%3A%20aNumber%0A%09%3Creturn%20self%20%25%20aNumber%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_even',
smalltalk.method({
selector: 'even',
category: 'testing',
fn: function (){
var self=this;
return (0) == smalltalk.send(self, "_modulo_", [(2)]);
return self;},
source: unescape('even%0A%09%5E%200%20%3D%20%28self%20modulo%3A%202%29'),
messageSends: [unescape("%3D"), "modulo:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_odd',
smalltalk.method({
selector: 'odd',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_even", []), "_not", []);
return self;},
source: unescape('odd%0A%09%5E%20self%20even%20not'),
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
'_negated',
smalltalk.method({
selector: 'negated',
category: 'arithmetic',
fn: function (){
var self=this;
return (0) - self;
return self;},
source: unescape('negated%0A%09%5E0%20-%20self'),
messageSends: [unescape("-")],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
'_pi',
smalltalk.method({
selector: 'pi',
category: 'instance creation',
fn: function (){
var self=this;
return Math.PI;
return self;},
source: unescape('pi%0A%09%3Creturn%20Math.PI%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('BlockClosure', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_compiledSource',
smalltalk.method({
selector: 'compiledSource',
category: 'accessing',
fn: function (){
var self=this;
return self.toString();
return self;},
source: unescape('compiledSource%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue_',
smalltalk.method({
selector: 'whileTrue:',
category: 'controlling',
fn: function (aBlock){
var self=this;
while(self()) {aBlock()};
return self;},
source: unescape('whileTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse_',
smalltalk.method({
selector: 'whileFalse:',
category: 'controlling',
fn: function (aBlock){
var self=this;
while(!self()) {aBlock()};
return self;},
source: unescape('whileFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Cwhile%28%21self%28%29%29%20%7BaBlock%28%29%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'evaluating',
fn: function (){
var self=this;
return self();;
return self;},
source: unescape('value%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'evaluating',
fn: function (anArg){
var self=this;
return self(anArg);;
return self;},
source: unescape('value%3A%20anArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28anArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_',
smalltalk.method({
selector: 'value:value:',
category: 'evaluating',
fn: function (firstArg, secondArg){
var self=this;
return self(firstArg, secondArg);;
return self;},
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_value_value_value_',
smalltalk.method({
selector: 'value:value:value:',
category: 'evaluating',
fn: function (firstArg, secondArg, thirdArg){
var self=this;
return self(firstArg, secondArg, thirdArg);;
return self;},
source: unescape('value%3A%20firstArg%20value%3A%20secondArg%20value%3A%20thirdArg%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3Creturn%20self%28firstArg%2C%20secondArg%2C%20thirdArg%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithPossibleArguments_',
smalltalk.method({
selector: 'valueWithPossibleArguments:',
category: 'evaluating',
fn: function (aCollection){
var self=this;
return self.apply(null, aCollection);;
return self;},
source: unescape('valueWithPossibleArguments%3A%20aCollection%0A%09%3Creturn%20self.apply%28null%2C%20aCollection%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
category: 'error handling',
fn: function (anErrorClass, aBlock){
var self=this;
smalltalk.send(self, "_try_catch_", [self, (function(error){return (($receiver = smalltalk.send(error, "_isKindOf_", [anErrorClass])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [error]);})() : (function(){return smalltalk.send(error, "_signal", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [error]);}), (function(){return smalltalk.send(error, "_signal", []);})]);})]);
return self;},
source: unescape('on%3A%20anErrorClass%20do%3A%20aBlock%0A%09self%20try%3A%20self%20catch%3A%20%5B%3Aerror%20%7C%0A%09%20%20%20%20%28error%20isKindOf%3A%20anErrorClass%29%20%0A%09%20%20%20%20%20ifTrue%3A%20%5BaBlock%20value%3A%20error%5D%0A%09%20%20%20%20%20ifFalse%3A%20%5Berror%20signal%5D%5D'),
messageSends: ["try:catch:", "ifTrue:ifFalse:", "isKindOf:", "value:", "signal"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithTimeout_',
smalltalk.method({
selector: 'valueWithTimeout:',
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setTimeout(self, aNumber);
return self;},
source: unescape('valueWithTimeout%3A%20aNumber%0A%09%3Creturn%20setTimeout%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_valueWithInterval_',
smalltalk.method({
selector: 'valueWithInterval:',
category: 'timeout/interval',
fn: function (aNumber){
var self=this;
return setInterval(self, aNumber);
return self;},
source: unescape('valueWithInterval%3A%20aNumber%0A%09%3Creturn%20setInterval%28self%2C%20aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Object)]);smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_compiledSource", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%29")]);return smalltalk.send($rec, "_cr", []);})(aStream);})]);
return self;},
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20%27%28%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20self%20compiledSource%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09nextPutAll%3A%20%27%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09cr.%0A%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString", "compiledSource", "cr"],
referencedClasses: [smalltalk.String]
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileFalse',
smalltalk.method({
selector: 'whileFalse',
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileFalse_", [(function(){return nil;})]);
return self;},
source: unescape('whileFalse%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileFalse%3A%20%5B%5D'),
messageSends: ["whileFalse:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_whileTrue',
smalltalk.method({
selector: 'whileTrue',
category: 'controlling',
fn: function (){
var self=this;
smalltalk.send(self, "_whileTrue_", [(function(){return nil;})]);
return self;},
source: unescape('whileTrue%0A%09%22inlined%20in%20the%20Compiler%22%0A%09self%20whileTrue%3A%20%5B%5D'),
messageSends: ["whileTrue:"],
referencedClasses: []
}),
smalltalk.BlockClosure);

smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'evaluating',
fn: function (){
var self=this;
return new self();
return self;},
source: unescape('new%0A%09%22Use%20the%20receiver%20as%20a%20JS%20constructor.%20%0A%09*Do%20not*%20use%20this%20method%20to%20instanciate%20Smalltalk%20objects%21%22%0A%09%3Creturn%20new%20self%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BlockClosure);



smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aBoolean){
var self=this;
return Boolean(self == true) == aBoolean;
return self;},
source: unescape('%3D%20aBoolean%0A%09%3Creturn%20Boolean%28self%20%3D%3D%20true%29%20%3D%3D%20aBoolean%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_',
smalltalk.method({
selector: 'ifTrue:',
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [aBlock, (function(){return nil;})]);
return self;},
source: unescape('ifTrue%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%5D'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_',
smalltalk.method({
selector: 'ifFalse:',
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [(function(){return nil;}), aBlock]);
return self;},
source: unescape('ifFalse%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifFalse_ifTrue_',
smalltalk.method({
selector: 'ifFalse:ifTrue:',
category: 'controlling',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(self, "_ifTrue_ifFalse_", [anotherBlock, aBlock]);
return self;},
source: unescape('ifFalse%3A%20aBlock%20ifTrue%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifTrue%3A%20anotherBlock%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_ifTrue_ifFalse_',
smalltalk.method({
selector: 'ifTrue:ifFalse:',
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
source: unescape('ifTrue%3A%20aBlock%20ifFalse%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_and_',
smalltalk.method({
selector: 'and:',
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [aBlock, (function(){return false;})]);
return self;},
source: unescape('and%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20aBlock%0A%09%20%20%20%20ifFalse%3A%20%5Bfalse%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_or_',
smalltalk.method({
selector: 'or:',
category: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [true]), "_ifTrue_ifFalse_", [(function(){return true;}), aBlock]);
return self;},
source: unescape('or%3A%20aBlock%0A%09%5Eself%20%3D%20true%0A%09%20%20%20%20ifTrue%3A%20%5Btrue%5D%0A%09%20%20%20%20ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_not',
smalltalk.method({
selector: 'not',
category: 'controlling',
fn: function (){
var self=this;
return smalltalk.send(self, "__eq", [false]);
return self;},
source: unescape('not%0A%09%5Eself%20%3D%20false'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return self.toString();
return self;},
source: unescape('printString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'comparing',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_&',
smalltalk.method({
selector: '&',
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
source: unescape('%26%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20false%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
'_|',
smalltalk.method({
selector: '|',
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
source: unescape('%7C%20aBoolean%0A%09%3C%0A%09%20%20%20%20if%28self%20%3D%3D%20true%29%20%7B%0A%09%09return%20true%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20aBoolean%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel');
smalltalk.Date.comment=unescape('The%20Date%20class%20is%20used%20to%20work%20with%20dates%20and%20times.')
smalltalk.addMethod(
'_year',
smalltalk.method({
selector: 'year',
category: 'accessing',
fn: function (){
var self=this;
return self.getFullYear();
return self;},
source: unescape('year%0A%09%3Creturn%20self.getFullYear%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_month',
smalltalk.method({
selector: 'month',
category: 'accessing',
fn: function (){
var self=this;
return self.getMonth() + 1;
return self;},
source: unescape('month%0A%09%3Creturn%20self.getMonth%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_month_',
smalltalk.method({
selector: 'month:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self;},
source: unescape('month%3A%20aNumber%0A%09%3Cself.setMonth%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_day',
smalltalk.method({
selector: 'day',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_dayOfWeek", []);
return self;},
source: unescape('day%0A%09%5Eself%20dayOfWeek'),
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfWeek',
smalltalk.method({
selector: 'dayOfWeek',
category: 'accessing',
fn: function (){
var self=this;
return self.getDay() + 1;
return self;},
source: unescape('dayOfWeek%0A%09%3Creturn%20self.getDay%28%29%20+%201%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfWeek_',
smalltalk.method({
selector: 'dayOfWeek:',
category: 'accessing',
fn: function (aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self;},
source: unescape('dayOfWeek%3A%20aNumber%0A%09%3Creturn%20self.setDay%28aNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_day_',
smalltalk.method({
selector: 'day:',
category: 'accessing',
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_day_", [aNumber]);
return self;},
source: unescape('day%3A%20aNumber%0A%09self%20day%3A%20aNumber'),
messageSends: ["day:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_year_',
smalltalk.method({
selector: 'year:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setFullYear(aNumber);
return self;},
source: unescape('year%3A%20aNumber%0A%09%3Cself.setFullYear%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfMonth',
smalltalk.method({
selector: 'dayOfMonth',
category: 'accessing',
fn: function (){
var self=this;
return self.getDate();
return self;},
source: unescape('dayOfMonth%0A%09%3Creturn%20self.getDate%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_dayOfMonth_',
smalltalk.method({
selector: 'dayOfMonth:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setDate(aNumber);
return self;},
source: unescape('dayOfMonth%3A%20aNumber%0A%09%3Cself.setDate%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function (){
var self=this;
return self.toString();
return self;},
source: unescape('asString%0A%09%3Creturn%20self.toString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(self, "_asString", []);
return self;},
source: unescape('printString%0A%09%5Eself%20asString'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asMilliseconds',
smalltalk.method({
selector: 'asMilliseconds',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_time", []);
return self;},
source: unescape('asMilliseconds%0A%09%5Eself%20time'),
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_time',
smalltalk.method({
selector: 'time',
category: 'accessing',
fn: function (){
var self=this;
return self.getTime();
return self;},
source: unescape('time%0A%09%3Creturn%20self.getTime%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_time_',
smalltalk.method({
selector: 'time:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setTime(aNumber);
return self;},
source: unescape('time%3A%20aNumber%0A%09%3Cself.setTime%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asDateString',
smalltalk.method({
selector: 'asDateString',
category: 'converting',
fn: function (){
var self=this;
return self.toDateString();
return self;},
source: unescape('asDateString%0A%09%3Creturn%20self.toDateString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asTimeString',
smalltalk.method({
selector: 'asTimeString',
category: 'converting',
fn: function (){
var self=this;
return self.toTimeString();
return self;},
source: unescape('asTimeString%0A%09%3Creturn%20self.toTimeString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asLocaleString',
smalltalk.method({
selector: 'asLocaleString',
category: 'converting',
fn: function (){
var self=this;
return self.toLocaleString();
return self;},
source: unescape('asLocaleString%0A%09%3Creturn%20self.toLocaleString%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_asMilliseconds", []);
return self;},
source: unescape('asNumber%0A%09%5Eself%20asMilliseconds'),
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_hours_',
smalltalk.method({
selector: 'hours:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setHours(aNumber);
return self;},
source: unescape('hours%3A%20aNumber%0A%09%3Cself.setHours%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_minutes_',
smalltalk.method({
selector: 'minutes:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMinutes(aNumber);
return self;},
source: unescape('minutes%3A%20aNumber%0A%09%3Cself.setMinutes%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_seconds_',
smalltalk.method({
selector: 'seconds:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setSeconds(aNumber);
return self;},
source: unescape('seconds%3A%20aNumber%0A%09%3Cself.setSeconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_milliseconds_',
smalltalk.method({
selector: 'milliseconds:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self;},
source: unescape('milliseconds%3A%20aNumber%0A%09%3Cself.setMilliseconds%28aNumber%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_hours',
smalltalk.method({
selector: 'hours',
category: 'accessing',
fn: function (){
var self=this;
return self.getHours();
return self;},
source: unescape('hours%0A%09%3Creturn%20self.getHours%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_minutes',
smalltalk.method({
selector: 'minutes',
category: 'accessing',
fn: function (){
var self=this;
return self.getMinutes();
return self;},
source: unescape('minutes%0A%09%3Creturn%20self.getMinutes%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_seconds',
smalltalk.method({
selector: 'seconds',
category: 'accessing',
fn: function (){
var self=this;
return self.getSeconds();
return self;},
source: unescape('seconds%0A%09%3Creturn%20self.getSeconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_milliseconds',
smalltalk.method({
selector: 'milliseconds',
category: 'accessing',
fn: function (){
var self=this;
return self.getMilliseconds();
return self;},
source: unescape('milliseconds%0A%09%3Creturn%20self.getMilliseconds%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
category: 'comparing',
fn: function (aDate){
var self=this;
return self < aDate;
return self;},
source: unescape('%3C%20aDate%0A%09%3Creturn%20self%20%3C%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
category: 'comparing',
fn: function (aDate){
var self=this;
return self > aDate;
return self;},
source: unescape('%3E%20aDate%0A%09%3Creturn%20self%20%3E%3E%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
category: 'comparing',
fn: function (aDate){
var self=this;
self <= aDate;
return self;},
source: unescape('%3C%3D%20aDate%0A%09%3Cself%20%3C%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
category: 'comparing',
fn: function (aDate){
var self=this;
self >= aDate;
return self;},
source: unescape('%3E%3D%20aDate%0A%09%3Cself%20%3E%3E%3D%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self - aDate;
return self;},
source: unescape('-%20aDate%0A%09%3Creturn%20self%20-%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
category: 'arithmetic',
fn: function (aDate){
var self=this;
return self + aDate;
return self;},
source: unescape('+%20aDate%0A%09%3Creturn%20self%20+%20aDate%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
'_new_',
smalltalk.method({
selector: 'new:',
category: 'instance creation',
fn: function (anObject){
var self=this;
return new Date(anObject);
return self;},
source: unescape('new%3A%20anObject%0A%09%3Creturn%20new%20Date%28anObject%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_new_", [aString]);
return self;},
source: unescape('fromString%3A%20aString%0A%09%22Example%3A%20Date%20fromString%28%272011/04/15%2000%3A00%3A00%27%29%22%0A%09%5Eself%20new%3A%20aString'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromSeconds_',
smalltalk.method({
selector: 'fromSeconds:',
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_fromMilliseconds_", [(($receiver = aNumber).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)])]);
return self;},
source: unescape('fromSeconds%3A%20aNumber%0A%09%5Eself%20fromMilliseconds%3A%20aNumber%20*%201000'),
messageSends: ["fromMilliseconds:", unescape("*")],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_fromMilliseconds_',
smalltalk.method({
selector: 'fromMilliseconds:',
category: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.send(self, "_new_", [aNumber]);
return self;},
source: unescape('fromMilliseconds%3A%20aNumber%0A%09%5Eself%20new%3A%20aNumber'),
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_today',
smalltalk.method({
selector: 'today',
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_new", []);
return self;},
source: unescape('today%0A%09%5Eself%20new'),
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_now',
smalltalk.method({
selector: 'now',
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_today", []);
return self;},
source: unescape('now%0A%09%5Eself%20today'),
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
'_millisecondsToRun_',
smalltalk.method({
selector: 'millisecondsToRun:',
category: 'instance creation',
fn: function (aBlock){
var self=this;
var t=nil;
t=smalltalk.send((smalltalk.Date || Date), "_now", []);
smalltalk.send(aBlock, "_value", []);
return (($receiver = smalltalk.send((smalltalk.Date || Date), "_now", [])).klass === smalltalk.Number) ? $receiver -t : smalltalk.send($receiver, "__minus", [t]);
return self;},
source: unescape('millisecondsToRun%3A%20aBlock%0A%09%7C%20t%20%7C%0A%09t%20%3A%3D%20Date%20now.%0A%09aBlock%20value.%0A%09%5EDate%20now%20-%20t'),
messageSends: ["now", "value", unescape("-")],
referencedClasses: [smalltalk.Date]
}),
smalltalk.Date.klass);


smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_subclass_instanceVariableNames_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:',
category: 'class creation',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_subclass_instanceVariableNames_category_", [aString, anotherString, nil]);
return self;},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0A%09%5Eself%20subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%20category%3A%20nil'),
messageSends: ["subclass:instanceVariableNames:category:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aString, aString2, aString3){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_superclass_subclass_instanceVariableNames_category_", [self, aString, aString2, aString3]);
return self;},
source: unescape('subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%5EClassBuilder%20new%0A%09%20%20%20%20superclass%3A%20self%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3'),
messageSends: ["superclass:subclass:instanceVariableNames:category:", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('shallowCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('deepCopy%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_',
smalltalk.method({
selector: 'ifNil:',
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_ifNil_ifNotNil_", [aBlock, (function(){return nil;})]);
return self;},
source: unescape('ifNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself%20ifNil%3A%20aBlock%20ifNotNil%3A%20%5B%5D'),
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_',
smalltalk.method({
selector: 'ifNotNil:',
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
source: unescape('ifNotNil%3A%20aBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNil_ifNotNil_',
smalltalk.method({
selector: 'ifNil:ifNotNil:',
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
source: unescape('ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EaBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_ifNotNil_ifNil_',
smalltalk.method({
selector: 'ifNotNil:ifNil:',
category: 'testing',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(anotherBlock, "_value", []);
return self;},
source: unescape('ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0A%09%22inlined%20in%20the%20Compiler%22%0A%09%5EanotherBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_isNil',
smalltalk.method({
selector: 'isNil',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isNil%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_notNil',
smalltalk.method({
selector: 'notNil',
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
source: unescape('notNil%0A%09%5Efalse'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return "nil";
return self;},
source: unescape('printString%0A%20%20%20%20%5E%27nil%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["You cannot create new instances of UndefinedObject. Use nil"]);
return self;},
source: unescape('new%0A%09%20%20%20%20self%20error%3A%20%27You%20cannot%20create%20new%20instances%20of%20UndefinedObject.%20Use%20nil%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);


smalltalk.addClass('Collection', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('size%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_readStream',
smalltalk.method({
selector: 'readStream',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
source: unescape('readStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_writeStream',
smalltalk.method({
selector: 'writeStream',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_stream", []);
return self;},
source: unescape('writeStream%0A%09%5Eself%20stream'),
messageSends: ["stream"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_stream',
smalltalk.method({
selector: 'stream',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [self]);
return self;},
source: unescape('stream%0A%09%5Eself%20streamClass%20on%3A%20self'),
messageSends: ["on:", "streamClass"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_streamClass", []);
return self;},
source: unescape('streamClass%0A%09%5Eself%20class%20streamClass'),
messageSends: ["streamClass", "class"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('add%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
category: 'adding/removing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_add_", [each]);})]);
return aCollection;
return self;},
source: unescape('addAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20add%3A%20each%5D.%0A%09%5EaCollection'),
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
source: unescape('%2C%20aCollection%0A%09%5Eself%20copy%20%0A%09%20%20%20%20addAll%3A%20aCollection%3B%20%0A%09%20%20%20%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWith_',
smalltalk.method({
selector: 'copyWith:',
category: 'copying',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
source: unescape('copyWith%3A%20anObject%0A%09%5Eself%20copy%20add%3A%20anObject%3B%20yourself'),
messageSends: ["add:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_copyWithAll_',
smalltalk.method({
selector: 'copyWithAll:',
category: 'copying',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_copy", []));
return self;},
source: unescape('copyWithAll%3A%20aCollection%0A%09%5Eself%20copy%20addAll%3A%20aCollection%3B%20yourself'),
messageSends: ["addAll:", "yourself", "copy"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_asArray',
smalltalk.method({
selector: 'asArray',
category: 'converting',
fn: function (){
var self=this;
var array=nil;
var index=nil;
array=smalltalk.send((smalltalk.Array || Array), "_new", []);
index=(0);
smalltalk.send(self, "_do_", [(function(each){index=(($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);return smalltalk.send(array, "_at_put_", [index, each]);})]);
return array;
return self;},
source: unescape('asArray%0A%09%7C%20array%20index%20%7C%0A%09array%20%3A%3D%20Array%20new.%0A%09index%20%3A%3D%200.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20array%20at%3A%20index%20put%3A%20each%5D.%0A%09%5Earray'),
messageSends: ["new", "do:", unescape("+"), "at:put:"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Collection);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i]);};
return self;},
source: unescape('do%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(aBlock, "_value_", [each])]);})]);
return newCollection;
return self;},
source: unescape('collect%3A%20aBlock%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20newCollection%20add%3A%20%28aBlock%20value%3A%20each%29%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_',
smalltalk.method({
selector: 'detect:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_detect_ifNone_", [aBlock, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
source: unescape('detect%3A%20aBlock%0A%09%5Eself%20detect%3A%20aBlock%20ifNone%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["detect:ifNone:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;

		for(var i = 0; i < self.length; i++)
			if(aBlock(self[i]))
				return self[i];
		return anotherBlock();
	;
return self;},
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%3C%0A%09%09for%28var%20i%20%3D%200%3B%20i%20%3C%20self.length%3B%20i++%29%0A%09%09%09if%28aBlock%28self%5Bi%5D%29%29%0A%09%09%09%09return%20self%5Bi%5D%3B%0A%09%09return%20anotherBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_do_separatedBy_',
smalltalk.method({
selector: 'do:separatedBy:',
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
var first=nil;
first=true;
smalltalk.send(self, "_do_", [(function(each){(($receiver = first).klass === smalltalk.Boolean) ? ($receiver ? (function(){return first=false;})() : (function(){return smalltalk.send(anotherBlock, "_value", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return first=false;}), (function(){return smalltalk.send(anotherBlock, "_value", []);})]);return smalltalk.send(aBlock, "_value_", [each]);})]);
return self;},
source: unescape('do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0A%20%20%20%20%09%7C%20first%20%7C%0A%20%20%20%20%09first%20%3A%3D%20true.%0A%20%20%20%20%09self%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20first%0A%20%20%20%20%09%09ifTrue%3A%20%5Bfirst%20%3A%3D%20false%5D%0A%20%20%20%20%09%09ifFalse%3A%20%5BanotherBlock%20value%5D.%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%5D'),
messageSends: ["do:", "ifTrue:ifFalse:", "value", "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_inject_into_',
smalltalk.method({
selector: 'inject:into:',
category: 'enumerating',
fn: function (anObject, aBlock){
var self=this;
var result=nil;
result=anObject;
smalltalk.send(self, "_do_", [(function(each){return result=smalltalk.send(aBlock, "_value_value_", [result, each]);})]);
return result;
return self;},
source: unescape('inject%3A%20anObject%20into%3A%20aBlock%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20anObject.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20%0A%09%20%20%20%20result%20%3A%3D%20aBlock%20value%3A%20result%20value%3A%20each%5D.%0A%09%5Eresult'),
messageSends: ["do:", "value:value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_reject_',
smalltalk.method({
selector: 'reject:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_select_", [(function(each){return smalltalk.send(smalltalk.send(aBlock, "_value_", [each]), "__eq", [false]);})]);
return self;},
source: unescape('reject%3A%20aBlock%0A%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20%3D%20false%5D'),
messageSends: ["select:", unescape("%3D"), "value:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_new", []), "_writeStream", []);
smalltalk.send(self, "_do_", [(function(each){return (($receiver = smalltalk.send(aBlock, "_value_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(stream, "_nextPut_", [each]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(stream, "_nextPut_", [each]);})]);})]);
return smalltalk.send(stream, "_contents", []);
return self;},
source: unescape('select%3A%20aBlock%0A%09%7C%20stream%20%7C%0A%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5B%0A%09%09stream%20nextPut%3A%20each%5D%5D.%0A%09%5Estream%20contents'),
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_errorNotFound',
smalltalk.method({
selector: 'errorNotFound',
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;},
source: unescape('errorNotFound%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
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
source: unescape('includes%3A%20anObject%0A%09%3C%0A%09%09var%20i%20%3D%20self.length%3B%0A%09%09while%20%28i--%29%20%7B%0A%09%09%09if%20%28smalltalk.send%28self%5Bi%5D%2C%20%22__eq%22%2C%20%5BanObject%5D%29%29%20%7Breturn%20true%3B%7D%09%0A%09%09%7D%0A%09%09return%20false%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_notEmpty',
smalltalk.method({
selector: 'notEmpty',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isEmpty", []), "_not", []);
return self;},
source: unescape('notEmpty%0A%09%5Eself%20isEmpty%20not'),
messageSends: ["not", "isEmpty"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Collection);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('remove%3A%20anObject%0A%20%20%20%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Collection);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.Stream || Stream);
return self;},
source: unescape('streamClass%0A%09%20%20%20%20%5EStream'),
messageSends: [],
referencedClasses: [smalltalk.nil]
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('with%3A%20anObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_',
smalltalk.method({
selector: 'with:with:',
category: 'instance creation',
fn: function (anObject, anotherObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [anObject]);smalltalk.send($rec, "_add_", [anotherObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('with%3A%20anObject%20with%3A%20anotherObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20anObject%3B%0A%09%09add%3A%20anotherObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_with_with_with_',
smalltalk.method({
selector: 'with:with:with:',
category: 'instance creation',
fn: function (firstObject, secondObject, thirdObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [firstObject]);smalltalk.send($rec, "_add_", [secondObject]);smalltalk.send($rec, "_add_", [thirdObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0A%09%20%20%20%20%5Eself%20new%0A%09%09add%3A%20firstObject%3B%0A%09%09add%3A%20secondObject%3B%0A%09%09add%3A%20thirdObject%3B%0A%09%09yourself'),
messageSends: ["add:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);

smalltalk.addMethod(
'_withAll_',
smalltalk.method({
selector: 'withAll:',
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('withAll%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%0A%09%09addAll%3A%20aCollection%3B%0A%09%09yourself'),
messageSends: ["addAll:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Collection.klass);


smalltalk.addClass('SequenceableCollection', smalltalk.Collection, [], 'Kernel');
smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [anIndex, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
source: unescape('at%3A%20anIndex%0A%09%5Eself%20at%3A%20anIndex%20ifAbsent%3A%20%5B%0A%09%20%20%20%20self%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(1)]);
return self;},
source: unescape('first%0A%09%5Eself%20at%3A%201'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_fourth',
smalltalk.method({
selector: 'fourth',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(4)]);
return self;},
source: unescape('fourth%0A%09%5Eself%20at%3A%204'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [smalltalk.send(self, "_size", [])]);
return self;},
source: unescape('last%0A%09%5Eself%20at%3A%20self%20size'),
messageSends: ["at:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_second',
smalltalk.method({
selector: 'second',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(2)]);
return self;},
source: unescape('second%0A%09%5Eself%20at%3A%202'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_third',
smalltalk.method({
selector: 'third',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_at_", [(3)]);
return self;},
source: unescape('third%0A%09%5Eself%20at%3A%203'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_removeLast',
smalltalk.method({
selector: 'removeLast',
category: 'adding',
fn: function (){
var self=this;
smalltalk.send(self, "_remove_", [smalltalk.send(self, "_last", [])]);
return self;},
source: unescape('removeLast%0A%09self%20remove%3A%20self%20last'),
messageSends: ["remove:", "last"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_addLast_',
smalltalk.method({
selector: 'addLast:',
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_add_", [anObject]);
return self;},
source: unescape('addLast%3A%20anObject%0A%09self%20add%3A%20anObject'),
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_withIndexDo_',
smalltalk.method({
selector: 'withIndexDo:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
for(var i=0;i<self.length;i++){aBlock(self[i], i+1);};
return self;},
source: unescape('withIndexDo%3A%20aBlock%0A%09%3Cfor%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7BaBlock%28self%5Bi%5D%2C%20i+1%29%3B%7D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_allButFirst',
smalltalk.method({
selector: 'allButFirst',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(2), smalltalk.send(self, "_size", [])]);
return self;},
source: unescape('allButFirst%0A%09%5Eself%20copyFrom%3A%202%20to%3A%20self%20size'),
messageSends: ["copyFrom:to:", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_allButLast',
smalltalk.method({
selector: 'allButLast',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_copyFrom_to_", [(1), (($receiver = smalltalk.send(self, "_size", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])]);
return self;},
source: unescape('allButLast%0A%09%5Eself%20copyFrom%3A%201%20to%3A%20self%20size%20-%201'),
messageSends: ["copyFrom:to:", unescape("-"), "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_indexOf_',
smalltalk.method({
selector: 'indexOf:',
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.send(self, "_indexOf_ifAbsent_", [anObject, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
source: unescape('indexOf%3A%20anObject%0A%09%5Eself%20indexOf%3A%20anObject%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["indexOf:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
'_indexOf_ifAbsent_',
smalltalk.method({
selector: 'indexOf:ifAbsent:',
category: 'accessing',
fn: function (anObject, aBlock){
var self=this;

		for(var i=0;i<self.length;i++){
			if(self[i].__eq(anObject)) {return i+1}
		}
		return aBlock();
	;
return self;},
source: unescape('indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%7B%0A%09%09%09if%28self%5Bi%5D.__eq%28anObject%29%29%20%7Breturn%20i+1%7D%0A%09%09%7D%0A%09%09return%20aBlock%28%29%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);



smalltalk.addClass('String', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) == aString;
return self;},
source: unescape('%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3D%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (anIndex){
var self=this;
return self[anIndex - 1];
return self;},
source: unescape('at%3A%20anIndex%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (anIndex, aBlock){
var self=this;
(($receiver = smalltalk.send(self, "_at_", [anIndex])) == nil || $receiver == undefined) ? (function(){return aBlock;})() : $receiver;
return self;},
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%20%20%20%20%09%28self%20at%3A%20anIndex%29%20ifNil%3A%20%5BaBlock%5D'),
messageSends: ["ifNil:", "at:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_escaped',
smalltalk.method({
selector: 'escaped',
category: 'accessing',
fn: function (){
var self=this;
return escape(self);
return self;},
source: unescape('escaped%0A%09%3Creturn%20escape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_unescaped',
smalltalk.method({
selector: 'unescaped',
category: 'accessing',
fn: function (){
var self=this;
return unescape(self);
return self;},
source: unescape('unescaped%0A%09%3Creturn%20unescape%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
source: unescape('add%3A%20anObject%0A%20%20%20%20%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aString){
var self=this;
return self + aString;
return self;},
source: unescape('%2C%20aString%0A%09%3Creturn%20self%20+%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
return self.substring(anIndex - 1, anotherIndex);
return self;},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%3Creturn%20self.substring%28anIndex%20-%201%2C%20anotherIndex%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_fromString_", [self]);
return self;},
source: unescape('shallowCopy%0A%20%20%20%20%09%5Eself%20class%20fromString%3A%20self'),
messageSends: ["fromString:", "class"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send(self, "_shallowCopy", []);
return self;},
source: unescape('deepCopy%0A%20%20%20%20%09%5Eself%20shallowCopy'),
messageSends: ["shallowCopy"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asSelector',
smalltalk.method({
selector: 'asSelector',
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
source: unescape('asSelector%0A%09%22If%20you%20change%20this%20method%2C%20change%20smalltalk.convertSelector%20too%20%28see%20js/boot.js%20file%29%22%0A%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20%27_%27%2C%20self.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3A%27%20with%3A%20%27_%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B+%5D%27%20with%3A%20%27_plus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27-%27%20with%3A%20%27_minus%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B*%5D%27%20with%3A%20%27_star%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B/%5D%27%20with%3A%20%27_slash%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3E%27%20with%3A%20%27_gt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3C%27%20with%3A%20%27_lt%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%3D%27%20with%3A%20%27_eq%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%2C%27%20with%3A%20%27_comma%27.%0A%20%20%20%20%09selector%20%3A%3D%20selector%20replace%3A%20%27%5B@%5D%27%20with%3A%20%27_at%27.%0A%09%5Eselector'),
messageSends: [unescape("%2C"), "replace:with:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function (){
var self=this;

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(self) + "\")";
		else
			return "\"" + self + "\"";
	;
return self;},
source: unescape('asJavascript%0A%09%3C%0A%09%09if%28self.search%28/%5E%5Ba-zA-Z0-9_%3A.%24%20%5D*%24/%29%20%3D%3D%20-1%29%0A%09%09%09return%20%22unescape%28%5C%22%22%20+%20escape%28self%29%20+%20%22%5C%22%29%22%3B%0A%09%09else%0A%09%09%09return%20%22%5C%22%22%20+%20self%20+%20%22%5C%22%22%3B%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_replace_with_',
smalltalk.method({
selector: 'replace:with:',
category: 'regular expressions',
fn: function (aString, anotherString){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [aString, "g"]), anotherString]);
return self;},
source: unescape('replace%3A%20aString%20with%3A%20anotherString%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20aString%20flag%3A%20%27g%27%29%20with%3A%20anotherString'),
messageSends: ["replaceRegexp:with:", "fromString:flag:"],
referencedClasses: [smalltalk.RegularExpression]
}),
smalltalk.String);

smalltalk.addMethod(
'_replaceRegexp_with_',
smalltalk.method({
selector: 'replaceRegexp:with:',
category: 'regular expressions',
fn: function (aRegexp, aString){
var self=this;
return self.replace(aRegexp, aString);
return self;},
source: unescape('replaceRegexp%3A%20aRegexp%20with%3A%20aString%0A%09%3Creturn%20self.replace%28aRegexp%2C%20aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_tokenize_',
smalltalk.method({
selector: 'tokenize:',
category: 'converting',
fn: function (aString){
var self=this;
return self.split(aString);
return self;},
source: unescape('tokenize%3A%20aString%0A%09%3Creturn%20self.split%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_match_',
smalltalk.method({
selector: 'match:',
category: 'regular expressions',
fn: function (aRegexp){
var self=this;
return self.search(aRegexp) != -1;
return self;},
source: unescape('match%3A%20aRegexp%0A%09%3Creturn%20self.search%28aRegexp%29%20%21%3D%20-1%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asString%0A%20%20%20%20%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asNumber',
smalltalk.method({
selector: 'asNumber',
category: 'converting',
fn: function (){
var self=this;
return Number(self);
return self;},
source: unescape('asNumber%0A%09%3Creturn%20Number%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asParser',
smalltalk.method({
selector: 'asParser',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.PPStringParser || PPStringParser), "_new", []), "_string_", [self]);
return self;},
source: unescape('asParser%0A%20%20%20%20%09%5EPPStringParser%20new%20string%3A%20self'),
messageSends: ["string:", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.String);

smalltalk.addMethod(
'_asChoiceParser',
smalltalk.method({
selector: 'asChoiceParser',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PPChoiceParser || PPChoiceParser), "_withAll_", [smalltalk.send(smalltalk.send(self, "_asArray", []), "_collect_", [(function(each){return smalltalk.send(each, "_asParser", []);})])]);
return self;},
source: unescape('asChoiceParser%0A%20%20%20%20%09%5EPPChoiceParser%20withAll%3A%20%28self%20asArray%20collect%3A%20%5B%3Aeach%20%7C%20each%20asParser%5D%29'),
messageSends: ["withAll:", "collect:", "asArray", "asParser"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.String);

smalltalk.addMethod(
'_asCharacterParser',
smalltalk.method({
selector: 'asCharacterParser',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.PPCharacterParser || PPCharacterParser), "_new", []), "_string_", [self]);
return self;},
source: unescape('asCharacterParser%0A%20%20%20%20%09%5EPPCharacterParser%20new%20string%3A%20self'),
messageSends: ["string:", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.String);

smalltalk.addMethod(
'_errorReadOnly',
smalltalk.method({
selector: 'errorReadOnly',
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send(self, "_error_", [unescape("Object%20is%20read-only")]);
return self;},
source: unescape('errorReadOnly%0A%20%20%20%20%09self%20error%3A%20%27Object%20is%20read-only%27'),
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [self]), "__comma", [unescape("%27")]);
return self;},
source: unescape('printString%0A%20%20%20%20%09%5E%27%27%27%27%2C%20self%2C%20%27%27%27%27'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_printNl',
smalltalk.method({
selector: 'printNl',
category: 'printing',
fn: function (){
var self=this;
console.log(self);
return self;},
source: unescape('printNl%0A%09%3Cconsole.log%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_isString',
smalltalk.method({
selector: 'isString',
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
source: unescape('isString%0A%20%20%20%20%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'__gt',
smalltalk.method({
selector: '>',
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) > aString;
return self;},
source: unescape('%3E%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'__lt',
smalltalk.method({
selector: '<',
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) < aString;
return self;},
source: unescape('%3C%20aString%0A%09%3Creturn%20String%28self%29%20%3C%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'__gt_eq',
smalltalk.method({
selector: '>=',
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) >= aString;
return self;},
source: unescape('%3E%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3E%3E%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'__lt_eq',
smalltalk.method({
selector: '<=',
category: 'comparing',
fn: function (aString){
var self=this;
return String(self) <= aString;
return self;},
source: unescape('%3C%3D%20aString%0A%09%3Creturn%20String%28self%29%20%3C%3D%20aString%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_errorReadOnly", []);
return self;},
source: unescape('remove%3A%20anObject%0A%09self%20errorReadOnly'),
messageSends: ["errorReadOnly"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asJSONObject%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_trimLeft_',
smalltalk.method({
selector: 'trimLeft:',
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5E%5B"), "__comma", [separators]), "__comma", [unescape("%5D+")]), "g"]), ""]);
return self;},
source: unescape('trimLeft%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5E%5B%27%2C%20separators%2C%20%27%5D+%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: [smalltalk.RegularExpression]
}),
smalltalk.String);

smalltalk.addMethod(
'_trimRight_',
smalltalk.method({
selector: 'trimRight:',
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(self, "_replaceRegexp_with_", [smalltalk.send((smalltalk.RegularExpression || RegularExpression), "_fromString_flag_", [smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [separators]), "__comma", [unescape("%5D+%24")]), "g"]), ""]);
return self;},
source: unescape('trimRight%3A%20separators%0A%0A%20%20%20%20%09%5Eself%20replaceRegexp%3A%20%28RegularExpression%20fromString%3A%20%27%5B%27%2C%20separators%2C%20%27%5D+%24%27%20flag%3A%20%27g%27%29%20with%3A%20%27%27'),
messageSends: ["replaceRegexp:with:", "fromString:flag:", unescape("%2C")],
referencedClasses: [smalltalk.RegularExpression]
}),
smalltalk.String);

smalltalk.addMethod(
'_trimLeft',
smalltalk.method({
selector: 'trimLeft',
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimLeft_", [unescape("%5Cs")]);
return self;},
source: unescape('trimLeft%0A%09%5Eself%20trimLeft%3A%20%27%5Cs%27'),
messageSends: ["trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_trimRight',
smalltalk.method({
selector: 'trimRight',
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimRight_", [unescape("%5Cs")]);
return self;},
source: unescape('trimRight%0A%09%5Eself%20trimRight%3A%20%27%5Cs%27'),
messageSends: ["trimRight:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_trimBoth',
smalltalk.method({
selector: 'trimBoth',
category: 'regular expressions',
fn: function (){
var self=this;
return smalltalk.send(self, "_trimBoth_", [unescape("%5Cs")]);
return self;},
source: unescape('trimBoth%0A%09%5Eself%20trimBoth%3A%20%27%5Cs%27'),
messageSends: ["trimBoth:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_trimBoth_',
smalltalk.method({
selector: 'trimBoth:',
category: 'regular expressions',
fn: function (separators){
var self=this;
return smalltalk.send(smalltalk.send(self, "_trimLeft_", [separators]), "_trimRight_", [separators]);
return self;},
source: unescape('trimBoth%3A%20separators%0A%0A%20%20%20%20%09%5E%28self%20trimLeft%3A%20separators%29%20trimRight%3A%20separators'),
messageSends: ["trimRight:", "trimLeft:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asLowercase',
smalltalk.method({
selector: 'asLowercase',
category: 'converting',
fn: function (){
var self=this;
return self.toLowerCase();
return self;},
source: unescape('asLowercase%0A%09%3Creturn%20self.toLowerCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asUppercase',
smalltalk.method({
selector: 'asUppercase',
category: 'converting',
fn: function (){
var self=this;
return self.toUpperCase();
return self;},
source: unescape('asUppercase%0A%09%3Creturn%20self.toUpperCase%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
category: 'split join',
fn: function (aCollection){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(stream){return smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [smalltalk.send(each, "_asString", [])]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [self]);})]);})]);
return self;},
source: unescape('join%3A%20aCollection%20%0A%09%5E%20String%0A%09%09streamContents%3A%20%5B%3Astream%20%7C%20aCollection%0A%09%09%09%09do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%20asString%5D%20%0A%09%09%09%09separatedBy%3A%20%5Bstream%20nextPutAll%3A%20self%5D%5D'),
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"],
referencedClasses: [smalltalk.String]
}),
smalltalk.String);

smalltalk.addMethod(
'_includesSubString_',
smalltalk.method({
selector: 'includesSubString:',
category: 'testing',
fn: function (subString){
var self=this;
 return self.indexOf(subString) != -1 ;
return self;},
source: unescape('includesSubString%3A%20subString%0A%09%3C%20return%20self.indexOf%28subString%29%20%21%3D%20-1%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
'_asciiValue',
smalltalk.method({
selector: 'asciiValue',
category: 'accessing',
fn: function (){
var self=this;
return self.charCodeAt(0);;
return self;},
source: unescape('asciiValue%0A%09%3Creturn%20self.charCodeAt%280%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);


smalltalk.addMethod(
'_streamClass',
smalltalk.method({
selector: 'streamClass',
category: 'accessing',
fn: function (){
var self=this;
return (smalltalk.StringStream || StringStream);
return self;},
source: unescape('streamClass%0A%09%20%20%20%20%5EStringStream'),
messageSends: [],
referencedClasses: [smalltalk.nil]
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString){
var self=this;
return new self.fn(aString);
return self;},
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%3Creturn%20new%20self.fn%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
category: 'accessing',
fn: function (){
var self=this;
return '\r';
return self;},
source: unescape('cr%0A%09%3Creturn%20%27%5Cr%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_lf',
smalltalk.method({
selector: 'lf',
category: 'accessing',
fn: function (){
var self=this;
return '\n';
return self;},
source: unescape('lf%0A%09%3Creturn%20%27%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
category: 'accessing',
fn: function (){
var self=this;
return ' ';
return self;},
source: unescape('space%0A%09%3Creturn%20%27%20%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_tab',
smalltalk.method({
selector: 'tab',
category: 'accessing',
fn: function (){
var self=this;
return '\t';
return self;},
source: unescape('tab%0A%09%3Creturn%20%27%5Ct%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_crlf',
smalltalk.method({
selector: 'crlf',
category: 'accessing',
fn: function (){
var self=this;
return '\r\n';
return self;},
source: unescape('crlf%0A%09%3Creturn%20%27%5Cr%5Cn%27%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_streamContents_',
smalltalk.method({
selector: 'streamContents:',
category: 'instance creation',
fn: function (blockWithArg){
var self=this;
var stream=nil;
stream=smalltalk.send(smalltalk.send(self, "_streamClass", []), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]);
smalltalk.send(blockWithArg, "_value_", [stream]);
return smalltalk.send(stream, "_contents", []);
return self;},
source: unescape('streamContents%3A%20blockWithArg%0A%09%7Cstream%7C%0A%09stream%20%3A%3D%20%28self%20streamClass%20on%3A%20String%20new%29.%0A%09blockWithArg%20value%3A%20stream.%0A%09%5E%20stream%20contents'),
messageSends: ["on:", "streamClass", "new", "value:", "contents"],
referencedClasses: [smalltalk.String]
}),
smalltalk.String.klass);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'instance creation',
fn: function (aUTFCharCode){
var self=this;
return String.fromCharCode(aUTFCharCode);;
return self;},
source: unescape('value%3A%20aUTFCharCode%0A%0A%09%3Creturn%20String.fromCharCode%28aUTFCharCode%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String.klass);


smalltalk.addClass('Array', smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
return self.length;
return self;},
source: unescape('size%0A%09%3Creturn%20self.length%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
return self[anIndex - 1] = anObject;
return self;},
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09%3Creturn%20self%5BanIndex%20-%201%5D%20%3D%20anObject%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
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
source: unescape('at%3A%20anIndex%20ifAbsent%3A%20aBlock%0A%09%3C%0A%09%20%20%20%20var%20value%20%3D%20self%5BanIndex%20-%201%5D%3B%0A%09%20%20%20%20if%28value%20%3D%3D%3D%20undefined%29%20%7B%0A%09%09return%20aBlock%28%29%3B%0A%09%20%20%20%20%7D%20else%20%7B%0A%09%09return%20value%3B%0A%09%20%20%20%20%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding/removing',
fn: function (anObject){
var self=this;
self.push(anObject); return anObject;;
return self;},
source: unescape('add%3A%20anObject%0A%09%3Cself.push%28anObject%29%3B%20return%20anObject%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [each]);})]);
return newCollection;
return self;},
source: unescape('shallowCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_deepCopy',
smalltalk.method({
selector: 'deepCopy',
category: 'copying',
fn: function (){
var self=this;
var newCollection=nil;
newCollection=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_do_", [(function(each){return smalltalk.send(newCollection, "_add_", [smalltalk.send(each, "_deepCopy", [])]);})]);
return newCollection;
return self;},
source: unescape('deepCopy%0A%09%7C%20newCollection%20%7C%0A%09newCollection%20%3A%3D%20self%20class%20new.%0A%09self%20do%3A%20%5B%3Aeach%20%7C%20newCollection%20add%3A%20each%20deepCopy%5D.%0A%09%5EnewCollection'),
messageSends: ["new", "class", "do:", "add:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
var array=nil;
array=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(anIndex, "_to_do_", [anotherIndex, (function(each){return smalltalk.send(array, "_add_", [smalltalk.send(self, "_at_", [each])]);})]);
return array;
return self;},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09%7C%20array%20%7C%0A%09array%20%3A%3D%20self%20class%20new.%0A%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20array%20add%3A%20%28self%20at%3A%20each%29%5D.%0A%09%5Earray'),
messageSends: ["new", "class", "to:do:", "add:", "at:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_join_',
smalltalk.method({
selector: 'join:',
category: 'enumerating',
fn: function (aString){
var self=this;
return self.join(aString);
return self;},
source: unescape('join%3A%20aString%0A%09%3Creturn%20self.join%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_asJavascript',
smalltalk.method({
selector: 'asJavascript',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%5B"), "__comma", [smalltalk.send(smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJavascript", []);})]), "_join_", [unescape("%2C%20")])]), "__comma", [unescape("%5D")]);
return self;},
source: unescape('asJavascript%0A%09%5E%27%5B%27%2C%20%28%28self%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJavascript%5D%29%20join%3A%20%27%2C%20%27%29%2C%20%20%27%5D%27'),
messageSends: [unescape("%2C"), "join:", "collect:", "asJavascript"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_sort',
smalltalk.method({
selector: 'sort',
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(self, "_basicPerform_", ["sort"]);
return self;},
source: unescape('sort%0A%20%20%20%20%5Eself%20basicPerform%3A%20%27sort%27'),
messageSends: ["basicPerform:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_sort_',
smalltalk.method({
selector: 'sort:',
category: 'enumerating',
fn: function (aBlock){
var self=this;

		return self.sort(function(a, b) {
			if(aBlock(a,b)) {return -1} else {return 1}
		})
	;
return self;},
source: unescape('sort%3A%20aBlock%0A%09%3C%0A%09%09return%20self.sort%28function%28a%2C%20b%29%20%7B%0A%09%09%09if%28aBlock%28a%2Cb%29%29%20%7Breturn%20-1%7D%20else%20%7Breturn%201%7D%0A%09%09%7D%29%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
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
source: unescape('remove%3A%20anObject%0A%09%3C%0A%09%09for%28var%20i%3D0%3Bi%3Cself.length%3Bi++%29%20%7B%0A%09%09%09if%28self%5Bi%5D%20%3D%3D%20anObject%29%20%7B%0A%09%09%09%09self.splice%28i%2C1%29%3B%0A%09%09%09%09break%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_sorted',
smalltalk.method({
selector: 'sorted',
category: 'enumerating',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort", []);
return self;},
source: unescape('sorted%0A%09%5Eself%20copy%20sort'),
messageSends: ["sort", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_sorted_',
smalltalk.method({
selector: 'sorted:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_copy", []), "_sort_", [aBlock]);
return self;},
source: unescape('sorted%3A%20aBlock%0A%09%5Eself%20copy%20sort%3A%20aBlock'),
messageSends: ["sort:", "copy"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
return smalltalk.send(self, "_collect_", [(function(each){return smalltalk.send(each, "_asJSONObject", []);})]);
return self;},
source: unescape('asJSONObject%0A%09%5Eself%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJSONObject%5D'),
messageSends: ["collect:", "asJSONObject"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_removeFrom_to_',
smalltalk.method({
selector: 'removeFrom:to:',
category: 'adding/removing',
fn: function (aNumber, anotherNumber){
var self=this;
self.splice(aNumber - 1,anotherNumber - 1);
return self;},
source: unescape('removeFrom%3A%20aNumber%20to%3A%20anotherNumber%0A%09%3Cself.splice%28aNumber%20-%201%2CanotherNumber%20-%201%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
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
source: unescape('printString%0A%09%7C%20str%20%7C%0A%09str%20%3A%3D%20%27%27%20writeStream.%0A%09str%20nextPutAll%3A%20super%20printString%2C%20%27%20%28%27.%0A%09self%20%0A%09%09do%3A%20%5B%3Aeach%20%7C%20str%20nextPutAll%3A%20each%20printString%5D%0A%09%09separatedBy%3A%20%5Bstr%20nextPutAll%3A%20%27%20%27%5D.%0A%09str%20nextPutAll%3A%20%27%29%27.%0A%09%5Estr%20contents'),
messageSends: ["writeStream", "nextPutAll:", unescape("%2C"), "printString", "do:separatedBy:", "contents"],
referencedClasses: []
}),
smalltalk.Array);



smalltalk.addClass('RegularExpression', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
category: 'evaluating',
fn: function (aString){
var self=this;
return self.compile(aString);
return self;},
source: unescape('compile%3A%20aString%0A%09%3Creturn%20self.compile%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_exec_',
smalltalk.method({
selector: 'exec:',
category: 'evaluating',
fn: function (aString){
var self=this;
return self.exec(aString) || nil;
return self;},
source: unescape('exec%3A%20aString%0A%09%3Creturn%20self.exec%28aString%29%20%7C%7C%20nil%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);

smalltalk.addMethod(
'_test_',
smalltalk.method({
selector: 'test:',
category: 'evaluating',
fn: function (aString){
var self=this;
return self.test(aString);
return self;},
source: unescape('test%3A%20aString%0A%09%3Creturn%20self.test%28aString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression);


smalltalk.addMethod(
'_fromString_flag_',
smalltalk.method({
selector: 'fromString:flag:',
category: 'instance creation',
fn: function (aString, anotherString){
var self=this;
return new RegExp(aString, anotherString);
return self;},
source: unescape('fromString%3A%20aString%20flag%3A%20anotherString%0A%09%3Creturn%20new%20RegExp%28aString%2C%20anotherString%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);

smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_fromString_flag_", [aString, ""]);
return self;},
source: unescape('fromString%3A%20aString%0A%09%20%20%20%20%5Eself%20fromString%3A%20aString%20flag%3A%20%27%27'),
messageSends: ["fromString:flag:"],
referencedClasses: []
}),
smalltalk.RegularExpression.klass);


smalltalk.addClass('Error', smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
category: 'accessing',
fn: function (){
var self=this;
return self['@messageText'];
return self;},
source: unescape('messageText%0A%09%5EmessageText'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
'_messageText_',
smalltalk.method({
selector: 'messageText:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@messageText']=aString;
return self;},
source: unescape('messageText%3A%20aString%0A%09messageText%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
'_signal',
smalltalk.method({
selector: 'signal',
category: 'signaling',
fn: function (){
var self=this;
self.context = thisContext; self.smalltalkError = true; throw(self);
return self;},
source: unescape('signal%0A%09%3Cself.context%20%3D%20thisContext%3B%20self.smalltalkError%20%3D%20true%3B%20throw%28self%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);

smalltalk.addMethod(
'_context',
smalltalk.method({
selector: 'context',
category: 'accessing',
fn: function (){
var self=this;
return self.context;
return self;},
source: unescape('context%0A%09%3Creturn%20self.context%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Error);


smalltalk.addMethod(
'_signal_',
smalltalk.method({
selector: 'signal:',
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('signal%3A%20aString%0A%09%20%20%20%20%5Eself%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal'),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);


smalltalk.addClass('MethodContext', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self.receiver;
return self;},
source: unescape('receiver%0A%09%3Creturn%20self.receiver%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.convertSelector(self.selector);
return self;},
source: unescape('selector%0A%09%3Creturn%20smalltalk.convertSelector%28self.selector%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_home',
smalltalk.method({
selector: 'home',
category: 'accessing',
fn: function (){
var self=this;
return self.homeContext;
return self;},
source: unescape('home%0A%09%3Creturn%20self.homeContext%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
category: 'accessing',
fn: function (){
var self=this;
return self.temps;
return self;},
source: unescape('temps%0A%09%3Creturn%20self.temps%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_asString", [])]), "__comma", [unescape("%29")]);
return self;},
source: unescape('printString%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20self%20asString%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString", "asString"],
referencedClasses: []
}),
smalltalk.MethodContext);

smalltalk.addMethod(
'_asString',
smalltalk.method({
selector: 'asString',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_printString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])]);
return self;},
source: unescape('asString%0A%09%5Eself%20receiver%20class%20printString%2C%20%27%20%3E%3E%20%27%2C%20self%20selector'),
messageSends: [unescape("%2C"), "printString", "class", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.MethodContext);



smalltalk.addClass('Association', smalltalk.Object, ['key', 'value'], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (anAssociation){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(anAssociation, "_class", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_key", []), "__eq", [smalltalk.send(anAssociation, "_key", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_value", []), "__eq", [smalltalk.send(anAssociation, "_value", [])]);})]);})]);
return self;},
source: unescape('%3D%20anAssociation%0A%09%5Eself%20class%20%3D%20anAssociation%20class%20and%3A%20%5B%0A%09%20%20%20%20self%20key%20%3D%20anAssociation%20key%20and%3A%20%5B%0A%09%09self%20value%20%3D%20anAssociation%20value%5D%5D'),
messageSends: ["and:", unescape("%3D"), "class", "key", "value"],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
'_key_',
smalltalk.method({
selector: 'key:',
category: 'accessing',
fn: function (aKey){
var self=this;
self['@key']=aKey;
return self;},
source: unescape('key%3A%20aKey%0A%09key%20%3A%3D%20aKey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
'_key',
smalltalk.method({
selector: 'key',
category: 'accessing',
fn: function (){
var self=this;
return self['@key'];
return self;},
source: unescape('key%0A%09%5Ekey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'accessing',
fn: function (aValue){
var self=this;
self['@value']=aValue;
return self;},
source: unescape('value%3A%20aValue%0A%09value%20%3A%3D%20aValue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);

smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
source: unescape('value%0A%09%5Evalue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Association);


smalltalk.addMethod(
'_key_value_',
smalltalk.method({
selector: 'key:value:',
category: 'instance creation',
fn: function (aKey, aValue){
var self=this;
return (function($rec){smalltalk.send($rec, "_key_", [aKey]);smalltalk.send($rec, "_value_", [aValue]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('key%3A%20aKey%20value%3A%20aValue%0A%09%20%20%20%20%5Eself%20new%0A%09%09key%3A%20aKey%3B%0A%09%09value%3A%20aValue%3B%0A%09%09yourself'),
messageSends: ["key:", "value:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Association.klass);


smalltalk.addClass('Dictionary', smalltalk.Collection, ['keys'], 'Kernel');
smalltalk.addMethod(
'__eq',
smalltalk.method({
selector: '=',
category: 'comparing',
fn: function (aDictionary){
var self=this;
try{(($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "__eq", [smalltalk.send(aDictionary, "_class", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]);
smalltalk.send(self, "_associationsDo_", [(function(assoc){return (($receiver = smalltalk.send(smalltalk.send(aDictionary, "_at_ifAbsent_", [smalltalk.send(assoc, "_key", []), (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]), "__eq", [smalltalk.send(assoc, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return false}})})();})]);})]);
(function(){throw({name: 'stReturn', selector: '__eq', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '__eq'){return e.fn()} throw(e)}},
source: unescape('%3D%20aDictionary%0A%09self%20class%20%3D%20aDictionary%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0A%09self%20associationsDo%3A%20%5B%3Aassoc%20%7C%0A%09%20%20%20%20%28aDictionary%20at%3A%20assoc%20key%20ifAbsent%3A%20%5B%5Efalse%5D%29%20%3D%20assoc%20value%20%0A%09%09ifFalse%3A%20%5B%5Efalse%5D%5D.%0A%09%5Etrue'),
messageSends: ["ifFalse:", unescape("%3D"), "class", "associationsDo:", "at:ifAbsent:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_shallowCopy',
smalltalk.method({
selector: 'shallowCopy',
category: 'copying',
fn: function (){
var self=this;
var copy=nil;
copy=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(copy, "_at_put_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return copy;
return self;},
source: unescape('shallowCopy%0A%09%7C%20copy%20%7C%0A%09copy%20%3A%3D%20self%20class%20new.%0A%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20copy%20at%3A%20each%20key%20%20put%3A%20each%20value%5D.%0A%09%5Ecopy'),
messageSends: ["new", "class", "associationsDo:", "at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Collection);
self['@keys']=[];
return self;},
source: unescape('initialize%0A%20%20%20%20%09super%20initialize.%0A%20%20%20%20%09keys%20%3A%3D%20%23%28%29'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_size", []);
return self;},
source: unescape('size%0A%09%5Ekeys%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associations',
smalltalk.method({
selector: 'associations',
category: 'accessing',
fn: function (){
var self=this;
var associations=nil;
associations=[];
smalltalk.send(self['@keys'], "_do_", [(function(each){return smalltalk.send(associations, "_add_", [smalltalk.send((smalltalk.Association || Association), "_key_value_", [each, smalltalk.send(self, "_at_", [each])])]);})]);
return associations;
return self;},
source: unescape('associations%0A%09%7C%20associations%20%7C%0A%09associations%20%3A%3D%20%23%28%29.%0A%09keys%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20associations%20add%3A%20%28Association%20key%3A%20each%20value%3A%20%28self%20at%3A%20each%29%29%5D.%0A%09%5Eassociations'),
messageSends: ["do:", "add:", "key:value:", "at:"],
referencedClasses: [smalltalk.Association]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_keys',
smalltalk.method({
selector: 'keys',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_copy", []);
return self;},
source: unescape('keys%0A%09%5Ekeys%20copy'),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_values',
smalltalk.method({
selector: 'values',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@keys'], "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;},
source: unescape('values%0A%20%20%20%20%09%5Ekeys%20collect%3A%20%5B%3Aeach%20%7C%20self%20at%3A%20each%5D'),
messageSends: ["collect:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'accessing',
fn: function (aKey, aValue){
var self=this;
(($receiver = smalltalk.send(self['@keys'], "_includes_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@keys'], "_add_", [aKey]);})]);
return smalltalk.send(self, "_basicAt_put_", [aKey, aValue]);
return self;},
source: unescape('at%3A%20aKey%20put%3A%20aValue%0A%09%28keys%20includes%3A%20aKey%29%20ifFalse%3A%20%5Bkeys%20add%3A%20aKey%5D.%0A%09%5Eself%20basicAt%3A%20aKey%20put%3A%20aValue'),
messageSends: ["ifFalse:", "includes:", "add:", "basicAt:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsent_',
smalltalk.method({
selector: 'at:ifAbsent:',
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_basicAt_", [aKey]);}), aBlock]);
return self;},
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%09%5E%28self%20keys%20includes%3A%20aKey%29%0A%09%09ifTrue%3A%20%5Bself%20basicAt%3A%20aKey%5D%0A%09%09ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", "includes:", "keys", "basicAt:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifAbsentPut_',
smalltalk.method({
selector: 'at:ifAbsentPut:',
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]);
return self;},
source: unescape('at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0A%20%20%20%20%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%0A%20%20%20%20%09%20%20%20%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%5D'),
messageSends: ["at:ifAbsent:", "at:put:", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_',
smalltalk.method({
selector: 'at:ifPresent:',
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return (($receiver = smalltalk.send(self, "_basicAt_", [aKey])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})() : nil;
return self;},
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_ifPresent_ifAbsent_',
smalltalk.method({
selector: 'at:ifPresent:ifAbsent:',
category: 'accessing',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_basicAt_", [aKey]), "_ifNil_ifNotNil_", [anotherBlock, (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_at_", [aKey])]);})]);
return self;},
source: unescape('at%3A%20aKey%20ifPresent%3A%20aBlock%20ifAbsent%3A%20anotherBlock%0A%09%5E%28self%20basicAt%3A%20aKey%29%0A%09%20%20%20%20ifNil%3A%20anotherBlock%0A%09%20%20%20%20ifNotNil%3A%20%5BaBlock%20value%3A%20%28self%20at%3A%20aKey%29%5D'),
messageSends: ["ifNil:ifNotNil:", "basicAt:", "value:", "at:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
category: 'adding/removing',
fn: function (anAssociation){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.send(anAssociation, "_key", []), smalltalk.send(anAssociation, "_value", [])]);
return self;},
source: unescape('add%3A%20anAssociation%0A%20%20%20%20%09self%20at%3A%20anAssociation%20key%20put%3A%20anAssociation%20value'),
messageSends: ["at:put:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_addAll_',
smalltalk.method({
selector: 'addAll:',
category: 'adding/removing',
fn: function (aDictionary){
var self=this;
smalltalk.send(self, "_addAll_", [smalltalk.send(aDictionary, "_associations", [])], smalltalk.Collection);
return aDictionary;
return self;},
source: unescape('addAll%3A%20aDictionary%0A%20%20%20%20%09super%20addAll%3A%20aDictionary%20associations.%0A%20%20%20%20%09%5EaDictionary'),
messageSends: ["addAll:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'__comma',
smalltalk.method({
selector: ',',
category: 'copying',
fn: function (aCollection){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
source: unescape('%2C%20aCollection%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_copyFrom_to_',
smalltalk.method({
selector: 'copyFrom:to:',
category: 'copying',
fn: function (anIndex, anotherIndex){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;},
source: unescape('copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0A%09self%20shouldNotImplement'),
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_associationsDo_',
smalltalk.method({
selector: 'associationsDo:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_associations", []), "_do_", [aBlock]);
return self;},
source: unescape('associationsDo%3A%20aBlock%0A%20%20%20%20%09self%20associations%20do%3A%20aBlock'),
messageSends: ["do:", "associations"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_keysAndValuesDo_',
smalltalk.method({
selector: 'keysAndValuesDo:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_associationsDo_", [(function(each){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(each, "_key", []), smalltalk.send(each, "_value", [])]);})]);
return self;},
source: unescape('keysAndValuesDo%3A%20aBlock%0A%20%20%20%20%09self%20associationsDo%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%09%20%20%20%20aBlock%20value%3A%20each%20key%20value%3A%20each%20value%5D'),
messageSends: ["associationsDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_values", []), "_do_", [aBlock]);
return self;},
source: unescape('do%3A%20aBlock%0A%20%20%20%20%09self%20values%20do%3A%20aBlock'),
messageSends: ["do:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_select_',
smalltalk.method({
selector: 'select:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return (($receiver = smalltalk.send(aBlock, "_value_", [value])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(newDict, "_at_put_", [key, value]);})]);})]);
return newDict;
return self;},
source: unescape('select%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5BnewDict%20at%3A%20key%20put%3A%20value%5D%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_collect_',
smalltalk.method({
selector: 'collect:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
var newDict=nil;
newDict=smalltalk.send(smalltalk.send(self, "_class", []), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(newDict, "_at_put_", [key, smalltalk.send(aBlock, "_value_", [value])]);})]);
return newDict;
return self;},
source: unescape('collect%3A%20aBlock%0A%20%20%20%20%09%7C%20newDict%20%7C%0A%20%20%20%20%09newDict%20%3A%3D%20self%20class%20new.%0A%20%20%20%20%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%20%20%20%20%09%20%20%20%20newDict%20at%3A%20key%20put%3A%20%28aBlock%20value%3A%20value%29%5D.%0A%20%20%20%20%09%5EnewDict'),
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_detect_ifNone_',
smalltalk.method({
selector: 'detect:ifNone:',
category: 'enumerating',
fn: function (aBlock, anotherBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_detect_ifNone_", [aBlock, anotherBlock]);
return self;},
source: unescape('detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0A%09%5Eself%20values%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock'),
messageSends: ["detect:ifNone:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_includes_',
smalltalk.method({
selector: 'includes:',
category: 'enumerating',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_values", []), "_includes_", [anObject]);
return self;},
source: unescape('includes%3A%20anObject%0A%09%5Eself%20values%20includes%3A%20anObject'),
messageSends: ["includes:", "values"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self, "_removeKey_", [aKey]);
return self;},
source: unescape('remove%3A%20aKey%0A%20%20%20%20self%20removeKey%3A%20aKey'),
messageSends: ["removeKey:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_removeKey_',
smalltalk.method({
selector: 'removeKey:',
category: 'adding/removing',
fn: function (aKey){
var self=this;
smalltalk.send(self['@keys'], "_remove_", [aKey]);
return self;},
source: unescape('removeKey%3A%20aKey%0A%20%20%20%20keys%20remove%3A%20aKey'),
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_errorNotFound", []);})]);
return self;},
source: unescape('at%3A%20aKey%0A%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5Bself%20errorNotFound%5D'),
messageSends: ["at:ifAbsent:", "errorNotFound"],
referencedClasses: []
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_asJSONObject',
smalltalk.method({
selector: 'asJSONObject',
category: 'converting',
fn: function (){
var self=this;
var object=nil;
object=smalltalk.send((smalltalk.Object || Object), "_new", []);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(object, "_basicAt_put_", [key, smalltalk.send(value, "_asJSONObject", [])]);})]);
return object;
return self;},
source: unescape('asJSONObject%0A%09%7C%20object%20%7C%0A%09object%20%3A%3D%20Object%20new.%0A%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09object%20basicAt%3A%20key%20put%3A%20value%20asJSONObject%5D.%0A%09%5Eobject'),
messageSends: ["new", "keysAndValuesDo:", "basicAt:put:", "asJSONObject"],
referencedClasses: [smalltalk.Object]
}),
smalltalk.Dictionary);

smalltalk.addMethod(
'_printString',
smalltalk.method({
selector: 'printString',
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.String || String), "_streamContents_", [(function(aStream){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self, "_printString", [], smalltalk.Collection)]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%28")]);})(aStream);smalltalk.send(smalltalk.send(self, "_associations", []), "_do_separatedBy_", [(function(anAssociation){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_key", []), "_printString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20-%3E%20")]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(anAssociation, "_value", []), "_printString", [])]);})(aStream);}), (function(){return smalltalk.send(aStream, "_nextPutAll_", [unescape("%20%2C%20")]);})]);return smalltalk.send(aStream, "_nextPutAll_", [unescape("%29")]);})]);
return self;},
source: unescape('printString%0A%09%5E%20String%20streamContents%3A%20%5B%3AaStream%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20super%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09nextPutAll%3A%20%27%28%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09self%20associations%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09do%3A%20%5B%3AanAssociation%7C%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09aStream%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20key%20printString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20%27%20-%3E%20%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09nextPutAll%3A%20anAssociation%20value%20printString%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09separatedBy%3A%20%5BaStream%20nextPutAll%3A%20%27%20%2C%20%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09aStream%20nextPutAll%3A%20%27%29%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["streamContents:", "nextPutAll:", "printString", "do:separatedBy:", "associations", "key", "value"],
referencedClasses: [smalltalk.String]
}),
smalltalk.Dictionary);



smalltalk.addClass('ClassBuilder', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_superclass_subclass_',
smalltalk.method({
selector: 'superclass:subclass:',
category: 'class creation',
fn: function (aClass, aString){
var self=this;
smalltalk.send(self, "_superclass_subclass_instanceVariableNames_category_", [aClass, aString, "", nil]);
return self;},
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%0A%09self%20superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20%27%27%20category%3A%20nil'),
messageSends: ["superclass:subclass:instanceVariableNames:category:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_superclass_subclass_instanceVariableNames_category_',
smalltalk.method({
selector: 'superclass:subclass:instanceVariableNames:category:',
category: 'class creation',
fn: function (aClass, aString, aString2, aString3){
var self=this;
var newClass=nil;
newClass=smalltalk.send(self, "_addSubclassOf_named_instanceVariableNames_", [aClass, aString, smalltalk.send(self, "_instanceVariableNamesFor_", [aString2])]);
smalltalk.send(self, "_setupClass_", [newClass]);
smalltalk.send(newClass, "_category_", [(($receiver = aString3) == nil || $receiver == undefined) ? (function(){return "unclassified";})() : $receiver]);
return self;},
source: unescape('superclass%3A%20aClass%20subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0A%09%7C%20newClass%20%7C%0A%09newClass%20%3A%3D%20self%20addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20%28self%20instanceVariableNamesFor%3A%20aString2%29.%0A%09self%20setupClass%3A%20newClass.%0A%09newClass%20category%3A%20%28aString3%20ifNil%3A%20%5B%27unclassified%27%5D%29'),
messageSends: ["addSubclassOf:named:instanceVariableNames:", "instanceVariableNamesFor:", "setupClass:", "category:", "ifNil:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_class_instanceVariableNames_',
smalltalk.method({
selector: 'class:instanceVariableNames:',
category: 'class creation',
fn: function (aClass, aString){
var self=this;
(($receiver = smalltalk.send(aClass, "_isMetaclass", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", [smalltalk.send(smalltalk.send(aClass, "_name", []), "__comma", [" is not a metaclass"])]);})]);
smalltalk.send(aClass, "_basicAt_put_", ["iVarNames", smalltalk.send(self, "_instanceVariableNamesFor_", [aString])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return self;},
source: unescape('class%3A%20aClass%20instanceVariableNames%3A%20aString%0A%09aClass%20isMetaclass%20ifFalse%3A%20%5Bself%20error%3A%20aClass%20name%2C%20%27%20is%20not%20a%20metaclass%27%5D.%0A%09aClass%20basicAt%3A%20%27iVarNames%27%20put%3A%20%28self%20instanceVariableNamesFor%3A%20aString%29.%0A%09self%20setupClass%3A%20aClass'),
messageSends: ["ifFalse:", "isMetaclass", "error:", unescape("%2C"), "name", "basicAt:put:", "instanceVariableNamesFor:", "setupClass:"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_instanceVariableNamesFor_',
smalltalk.method({
selector: 'instanceVariableNamesFor:',
category: 'private',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(aString, "_tokenize_", [" "]), "_reject_", [(function(each){return smalltalk.send(each, "_isEmpty", []);})]);
return self;},
source: unescape('instanceVariableNamesFor%3A%20aString%0A%09%5E%28aString%20tokenize%3A%20%27%20%27%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20isEmpty%5D'),
messageSends: ["reject:", "tokenize:", "isEmpty"],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_addSubclassOf_named_instanceVariableNames_',
smalltalk.method({
selector: 'addSubclassOf:named:instanceVariableNames:',
category: 'private',
fn: function (aClass, aString, aCollection){
var self=this;
smalltalk.addClass(aString, aClass, aCollection);
	    return smalltalk[aString];
return self;},
source: unescape('addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%0A%09%3Csmalltalk.addClass%28aString%2C%20aClass%2C%20aCollection%29%3B%0A%09%20%20%20%20return%20smalltalk%5BaString%5D%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);

smalltalk.addMethod(
'_setupClass_',
smalltalk.method({
selector: 'setupClass:',
category: 'private',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);;
return self;},
source: unescape('setupClass%3A%20aClass%0A%09%3Csmalltalk.init%28aClass%29%3B%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassBuilder);



smalltalk.addClass('ClassCategoryReader', smalltalk.Object, ['class', 'category', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_class_category_',
smalltalk.method({
selector: 'class:category:',
category: 'accessing',
fn: function (aClass, aString){
var self=this;
self['@class']=aClass;
self['@category']=aString;
return self;},
source: unescape('class%3A%20aClass%20category%3A%20aString%0A%09class%20%3A%3D%20aClass.%0A%09category%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
(function(){while(!(function(){chunk=smalltalk.send(aChunkParser, "_nextChunk", []);return smalltalk.send(chunk, "_isEmpty", []);})()) {(function(){return smalltalk.send(self, "_compileMethod_", [chunk]);})()}})();
return self;},
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09%5Bchunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%5D%20whileFalse%3A%20%5B%0A%09%20%20%20%20self%20compileMethod%3A%20chunk%5D'),
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:"],
referencedClasses: []
}),
smalltalk.ClassCategoryReader);

smalltalk.addMethod(
'_compileMethod_',
smalltalk.method({
selector: 'compileMethod:',
category: 'private',
fn: function (aString){
var self=this;
var method=nil;
method=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_load_forClass_", [aString, self['@class']]);
smalltalk.send(method, "_category_", [self['@category']]);
smalltalk.send(self['@class'], "_addCompiledMethod_", [method]);
return self;},
source: unescape('compileMethod%3A%20aString%0A%09%7C%20method%20%7C%0A%09method%20%3A%3D%20Compiler%20new%20load%3A%20aString%20forClass%3A%20class.%0A%09method%20category%3A%20category.%0A%09class%20addCompiledMethod%3A%20method'),
messageSends: ["load:forClass:", "new", "category:", "addCompiledMethod:"],
referencedClasses: [smalltalk.Compiler]
}),
smalltalk.ClassCategoryReader);



smalltalk.addClass('Stream', smalltalk.Object, ['collection', 'position', 'streamSize'], 'Kernel');
smalltalk.addMethod(
'_collection',
smalltalk.method({
selector: 'collection',
category: 'accessing',
fn: function (){
var self=this;
return self['@collection'];
return self;},
source: unescape('collection%0A%09%5Ecollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setCollection_',
smalltalk.method({
selector: 'setCollection:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@collection']=aCollection;
return self;},
source: unescape('setCollection%3A%20aCollection%0A%09collection%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position',
smalltalk.method({
selector: 'position',
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return self['@position']=(0);})() : $receiver;
return self;},
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5Bposition%20%3A%3D%200%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_position_',
smalltalk.method({
selector: 'position:',
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@position']=anInteger;
return self;},
source: unescape('position%3A%20anInteger%0A%09position%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_streamSize',
smalltalk.method({
selector: 'streamSize',
category: 'accessing',
fn: function (){
var self=this;
return self['@streamSize'];
return self;},
source: unescape('streamSize%0A%09%5EstreamSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setStreamSize_',
smalltalk.method({
selector: 'setStreamSize:',
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@streamSize']=anInteger;
return self;},
source: unescape('setStreamSize%3A%20anInteger%0A%09streamSize%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_streamSize", [])]);
return self;},
source: unescape('contents%0A%09%5Eself%20collection%0A%09%20%20%20%20copyFrom%3A%201%20%0A%09%20%20%20%20to%3A%20self%20streamSize'),
messageSends: ["copyFrom:to:", "collection", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_streamSize", []);
return self;},
source: unescape('size%0A%09%5Eself%20streamSize'),
messageSends: ["streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_reset',
smalltalk.method({
selector: 'reset',
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [(0)]);
return self;},
source: unescape('reset%0A%09self%20position%3A%200'),
messageSends: ["position:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_close',
smalltalk.method({
selector: 'close',
category: 'actions',
fn: function (){
var self=this;

return self;},
source: unescape('close'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_flush',
smalltalk.method({
selector: 'flush',
category: 'actions',
fn: function (){
var self=this;

return self;},
source: unescape('flush'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_resetContents',
smalltalk.method({
selector: 'resetContents',
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_setStreamSize_", [(0)]);
return self;},
source: unescape('resetContents%0A%09self%20reset.%0A%09self%20setStreamSize%3A%200'),
messageSends: ["reset", "setStreamSize:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
category: 'enumerating',
fn: function (aBlock){
var self=this;
(function(){while(!(function(){return smalltalk.send(self, "_atEnd", []);})()) {(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self, "_next", [])]);})()}})();
return self;},
source: unescape('do%3A%20aBlock%0A%09%5Bself%20atEnd%5D%20whileFalse%3A%20%5BaBlock%20value%3A%20self%20next%5D'),
messageSends: ["whileFalse:", "atEnd", "value:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_setToEnd',
smalltalk.method({
selector: 'setToEnd',
category: 'positioning',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send(self, "_size", [])]);
return self;},
source: unescape('setToEnd%0A%09self%20position%3A%20self%20size'),
messageSends: ["position:", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_skip_',
smalltalk.method({
selector: 'skip:',
category: 'positioning',
fn: function (anInteger){
var self=this;
smalltalk.send(self, "_position_", [smalltalk.send((($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +anInteger : smalltalk.send($receiver, "__plus", [anInteger]), "_min_max_", [smalltalk.send(self, "_size", []), (0)])]);
return self;},
source: unescape('skip%3A%20anInteger%0A%09self%20position%3A%20%28%28self%20position%20+%20anInteger%29%20min%3A%20self%20size%20max%3A%200%29'),
messageSends: ["position:", "min:max:", unescape("+"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
category: 'reading',
fn: function (){
var self=this;
smalltalk.send(self, "_position_", [(($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);
return smalltalk.send(self['@collection'], "_at_", [smalltalk.send(self, "_position", [])]);
return self;},
source: unescape('next%0A%09self%20position%3A%20self%20position%20+%201.%20%0A%09%5Ecollection%20at%3A%20self%20position'),
messageSends: ["position:", unescape("+"), "position", "at:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return (($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tempCollection, "_add_", [smalltalk.send(self, "_next", [])]);})]);})]);
return tempCollection;
return self;},
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20add%3A%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
category: 'writing',
fn: function (anObject){
var self=this;
smalltalk.send(self, "_position_", [(($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);
smalltalk.send(smalltalk.send(self, "_collection", []), "_at_put_", [smalltalk.send(self, "_position", []), anObject]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
source: unescape('nextPut%3A%20anObject%0A%09self%20position%3A%20self%20position%20+%201.%0A%09self%20collection%20at%3A%20self%20position%20put%3A%20anObject.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["position:", unescape("+"), "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
category: 'writing',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send(self, "_nextPut_", [each]);})]);
return self;},
source: unescape('nextPutAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20nextPut%3A%20each%5D'),
messageSends: ["do:", "nextPut:"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_peek',
smalltalk.method({
selector: 'peek',
category: 'reading',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [(($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [(($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);})]);
return self;},
source: unescape('peek%0A%09%5Eself%20atEnd%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20collection%20at%3A%20self%20position%20+%201%5D'),
messageSends: ["ifFalse:", "atEnd", "at:", "collection", unescape("+"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_atEnd',
smalltalk.method({
selector: 'atEnd',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [smalltalk.send(self, "_size", [])]);
return self;},
source: unescape('atEnd%0A%09%5Eself%20position%20%3D%20self%20size'),
messageSends: [unescape("%3D"), "position", "size"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_atStart',
smalltalk.method({
selector: 'atStart',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_position", []), "__eq", [(0)]);
return self;},
source: unescape('atStart%0A%09%5Eself%20position%20%3D%200'),
messageSends: [unescape("%3D"), "position"],
referencedClasses: []
}),
smalltalk.Stream);

smalltalk.addMethod(
'_isEmpty',
smalltalk.method({
selector: 'isEmpty',
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_size", []), "__eq", [(0)]);
return self;},
source: unescape('isEmpty%0A%09%5Eself%20size%20%3D%200'),
messageSends: [unescape("%3D"), "size"],
referencedClasses: []
}),
smalltalk.Stream);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
category: 'instance creation',
fn: function (aCollection){
var self=this;
return (function($rec){smalltalk.send($rec, "_setCollection_", [aCollection]);smalltalk.send($rec, "_setStreamSize_", [smalltalk.send(aCollection, "_size", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('on%3A%20aCollection%0A%09%20%20%20%20%5Eself%20new%20%0A%09%09setCollection%3A%20aCollection%3B%0A%09%09setStreamSize%3A%20aCollection%20size%3B%0A%09%09yourself'),
messageSends: ["setCollection:", "setStreamSize:", "size", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Stream.klass);


smalltalk.addClass('StringStream', smalltalk.Stream, [], 'Kernel');
smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'reading',
fn: function (anInteger){
var self=this;
var tempCollection=nil;
tempCollection=smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_class", []), "_new", []);
smalltalk.send(anInteger, "_timesRepeat_", [(function(){return (($receiver = smalltalk.send(self, "_atEnd", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return tempCollection=smalltalk.send(tempCollection, "__comma", [smalltalk.send(self, "_next", [])]);})]);})]);
return tempCollection;
return self;},
source: unescape('next%3A%20anInteger%0A%09%7C%20tempCollection%20%7C%0A%09tempCollection%20%3A%3D%20self%20collection%20class%20new.%0A%09anInteger%20timesRepeat%3A%20%5B%0A%09%20%20%20%20self%20atEnd%20ifFalse%3A%20%5B%0A%09%09tempCollection%20%3A%3D%20tempCollection%2C%20self%20next%5D%5D.%0A%09%5EtempCollection'),
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", unescape("%2C"), "next"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPut_',
smalltalk.method({
selector: 'nextPut:',
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_nextPutAll_", [aString]);
return self;},
source: unescape('nextPut%3A%20aString%0A%09self%20nextPutAll%3A%20aString'),
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_nextPutAll_',
smalltalk.method({
selector: 'nextPutAll:',
category: 'writing',
fn: function (aString){
var self=this;
smalltalk.send(self, "_setCollection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_position", [])]), "__comma", [aString]), "__comma", [smalltalk.send(smalltalk.send(self, "_collection", []), "_copyFrom_to_", [(($receiver = (($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]), smalltalk.send(smalltalk.send(self, "_collection", []), "_size", [])])])]);
smalltalk.send(self, "_position_", [(($receiver = smalltalk.send(self, "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])])]);
smalltalk.send(self, "_setStreamSize_", [smalltalk.send(smalltalk.send(self, "_streamSize", []), "_max_", [smalltalk.send(self, "_position", [])])]);
return self;},
source: unescape('nextPutAll%3A%20aString%0A%09self%20setCollection%3A%20%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%201%20to%3A%20self%20position%29%2C%0A%09%20%20%20%20aString%2C%0A%09%20%20%20%20%28self%20collection%20copyFrom%3A%20%28self%20position%20+%201%20+%20aString%20size%29%20to%3A%20self%20collection%20size%29.%0A%09self%20position%3A%20self%20position%20+%20aString%20size.%0A%09self%20setStreamSize%3A%20%28self%20streamSize%20max%3A%20self%20position%29'),
messageSends: ["setCollection:", unescape("%2C"), "copyFrom:to:", "collection", "position", unescape("+"), "size", "position:", "setStreamSize:", "max:", "streamSize"],
referencedClasses: []
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_cr',
smalltalk.method({
selector: 'cr',
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_cr", [])]);
return self;},
source: unescape('cr%0A%09%5Eself%20nextPutAll%3A%20String%20cr'),
messageSends: ["nextPutAll:", "cr"],
referencedClasses: [smalltalk.String]
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_crlf',
smalltalk.method({
selector: 'crlf',
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_crlf", [])]);
return self;},
source: unescape('crlf%0A%09%5Eself%20nextPutAll%3A%20String%20crlf'),
messageSends: ["nextPutAll:", "crlf"],
referencedClasses: [smalltalk.String]
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_lf',
smalltalk.method({
selector: 'lf',
category: 'writing',
fn: function (){
var self=this;
return smalltalk.send(self, "_nextPutAll_", [smalltalk.send((smalltalk.String || String), "_lf", [])]);
return self;},
source: unescape('lf%0A%09%5Eself%20nextPutAll%3A%20String%20lf'),
messageSends: ["nextPutAll:", "lf"],
referencedClasses: [smalltalk.String]
}),
smalltalk.StringStream);

smalltalk.addMethod(
'_space',
smalltalk.method({
selector: 'space',
category: 'writing',
fn: function (){
var self=this;
smalltalk.send(self, "_nextPut_", [" "]);
return self;},
source: unescape('space%0A%09self%20nextPut%3A%20%27%20%27'),
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.StringStream);



smalltalk.addClass('ClassCommentReader', smalltalk.Object, ['class', 'chunkParser'], 'Kernel');
smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
category: 'accessing',
fn: function (aClass){
var self=this;
self['@class']=aClass;
return self;},
source: unescape('class%3A%20aClass%0A%09class%20%3A%3D%20aClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_scanFrom_',
smalltalk.method({
selector: 'scanFrom:',
category: 'fileIn',
fn: function (aChunkParser){
var self=this;
var chunk=nil;
chunk=smalltalk.send(aChunkParser, "_nextChunk", []);
(($receiver = smalltalk.send(chunk, "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_setComment_", [chunk]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_setComment_", [chunk]);})]);
return self;},
source: unescape('scanFrom%3A%20aChunkParser%0A%09%7C%20chunk%20%7C%0A%09chunk%20%3A%3D%20aChunkParser%20nextChunk.%0A%09chunk%20isEmpty%20ifFalse%3A%20%5B%0A%09%20%20%20%20self%20setComment%3A%20chunk%5D.'),
messageSends: ["nextChunk", "ifFalse:", "isEmpty", "setComment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@chunkParser']=smalltalk.send((smalltalk.ChunkParser || ChunkParser), "_new", []);
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09chunkParser%20%3A%3D%20ChunkParser%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.ClassCommentReader);

smalltalk.addMethod(
'_setComment_',
smalltalk.method({
selector: 'setComment:',
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send(self['@class'], "_comment_", [aString]);
return self;},
source: unescape('setComment%3A%20aString%0A%20%20%20%20class%20comment%3A%20aString'),
messageSends: ["comment:"],
referencedClasses: []
}),
smalltalk.ClassCommentReader);



smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
category: 'accessing',
fn: function (){
var self=this;
return Math.random();
return self;},
source: unescape('next%0A%09%3Creturn%20Math.random%28%29%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
'_next_',
smalltalk.method({
selector: 'next:',
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send((1), "_to_collect_", [anInteger, (function(each){return smalltalk.send(self, "_next", []);})]);
return self;},
source: unescape('next%3A%20anInteger%0A%20%20%20%20%5E1%20to%3A%20anInteger%20collect%3A%20%5B%3Aeach%20%7C%20self%20next%5D'),
messageSends: ["to:collect:", "next"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.addMethod(
'_x',
smalltalk.method({
selector: 'x',
category: 'accessing',
fn: function (){
var self=this;
return self['@x'];
return self;},
source: unescape('x%0A%09%5Ex'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
'_y',
smalltalk.method({
selector: 'y',
category: 'accessing',
fn: function (){
var self=this;
return self['@y'];
return self;},
source: unescape('y%0A%09%5Ey'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
'_y_',
smalltalk.method({
selector: 'y:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@y']=aNumber;
return self;},
source: unescape('y%3A%20aNumber%0A%09y%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
'_x_',
smalltalk.method({
selector: 'x:',
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@x']=aNumber;
return self;},
source: unescape('x%3A%20aNumber%0A%09x%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
'__star',
smalltalk.method({
selector: '*',
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [(($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), (($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
return self;},
source: unescape('*%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20*%20aPoint%20asPoint%20x%20y%3A%20self%20y%20*%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("*"), "x", "asPoint", "y"],
referencedClasses: [smalltalk.Point]
}),
smalltalk.Point);

smalltalk.addMethod(
'__plus',
smalltalk.method({
selector: '+',
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [(($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), (($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
return self;},
source: unescape('+%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20+%20aPoint%20asPoint%20x%20y%3A%20self%20y%20+%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("+"), "x", "asPoint", "y"],
referencedClasses: [smalltalk.Point]
}),
smalltalk.Point);

smalltalk.addMethod(
'__minus',
smalltalk.method({
selector: '-',
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [(($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), (($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
return self;},
source: unescape('-%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20-%20aPoint%20asPoint%20x%20y%3A%20self%20y%20-%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("-"), "x", "asPoint", "y"],
referencedClasses: [smalltalk.Point]
}),
smalltalk.Point);

smalltalk.addMethod(
'__slash',
smalltalk.method({
selector: '/',
category: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.send((smalltalk.Point || Point), "_x_y_", [(($receiver = smalltalk.send(self, "_x", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_x", [])]), (($receiver = smalltalk.send(self, "_y", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send(aPoint, "_asPoint", []), "_y", [])])]);
return self;},
source: unescape('/%20aPoint%0A%09%5EPoint%20x%3A%20self%20x%20/%20aPoint%20asPoint%20x%20y%3A%20self%20y%20/%20aPoint%20asPoint%20y'),
messageSends: ["x:y:", unescape("/"), "x", "asPoint", "y"],
referencedClasses: [smalltalk.Point]
}),
smalltalk.Point);

smalltalk.addMethod(
'_asPoint',
smalltalk.method({
selector: 'asPoint',
category: 'converting',
fn: function (){
var self=this;
return self;
return self;},
source: unescape('asPoint%0A%09%5Eself'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
'_x_y_',
smalltalk.method({
selector: 'x:y:',
category: 'instance creation',
fn: function (aNumber, anotherNumber){
var self=this;
return (function($rec){smalltalk.send($rec, "_x_", [aNumber]);smalltalk.send($rec, "_y_", [anotherNumber]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('x%3A%20aNumber%20y%3A%20anotherNumber%0A%09%5Eself%20new%0A%09%09x%3A%20aNumber%3B%0A%09%09y%3A%20anotherNumber%3B%0A%09%09yourself'),
messageSends: ["x:", "y:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Message', smalltalk.Object, ['selector', 'arguments'], 'Kernel');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
source: unescape('selector%0A%09%5Eselector'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
category: 'accessing',
fn: function (anArray){
var self=this;
self['@arguments']=anArray;
return self;},
source: unescape('arguments%3A%20anArray%0A%09arguments%20%3A%3D%20anArray'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
category: 'accessing',
fn: function (){
var self=this;
return self['@arguments'];
return self;},
source: unescape('arguments%0A%09%5Earguments'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Message);


smalltalk.addMethod(
'_selector_arguments_',
smalltalk.method({
selector: 'selector:arguments:',
category: 'instance creation',
fn: function (aString, anArray){
var self=this;
return (function($rec){smalltalk.send($rec, "_selector_", [aString]);smalltalk.send($rec, "_arguments_", [anArray]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
source: unescape('selector%3A%20aString%20arguments%3A%20anArray%0A%09%5Eself%20new%0A%09%09selector%3A%20aString%3B%0A%09%09arguments%3A%20anArray%3B%0A%09%09yourself'),
messageSends: ["selector:", "arguments:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Message.klass);


smalltalk.addClass('MessageNotUnderstood', smalltalk.Error, ['message', 'receiver'], 'Kernel');
smalltalk.addMethod(
'_message',
smalltalk.method({
selector: 'message',
category: 'accessing',
fn: function (){
var self=this;
return self['@message'];
return self;},
source: unescape('message%0A%09%5Emessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_message_',
smalltalk.method({
selector: 'message:',
category: 'accessing',
fn: function (aMessage){
var self=this;
self['@message']=aMessage;
return self;},
source: unescape('message%3A%20aMessage%0A%09message%20%3A%3D%20aMessage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
source: unescape('receiver%0A%09%5Ereceiver'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
category: 'accessing',
fn: function (anObject){
var self=this;
self['@receiver']=anObject;
return self;},
source: unescape('receiver%3A%20anObject%0A%09receiver%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);

smalltalk.addMethod(
'_messageText',
smalltalk.method({
selector: 'messageText',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_asString", []), "__comma", [unescape("%20does%20not%20understand%20%23")]), "__comma", [smalltalk.send(smalltalk.send(self, "_message", []), "_selector", [])]);
return self;},
source: unescape('messageText%0A%09%5Eself%20receiver%20asString%2C%20%27%20does%20not%20understand%20%23%27%2C%20self%20message%20selector'),
messageSends: [unescape("%2C"), "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
smalltalk.MessageNotUnderstood);



smalltalk.addClass('ErrorHandler', smalltalk.Object, [], 'Kernel');
smalltalk.addMethod(
'_handleError_',
smalltalk.method({
selector: 'handleError:',
category: 'error handling',
fn: function (anError){
var self=this;
(($receiver = smalltalk.send(anError, "_context", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logErrorContext_", [smalltalk.send(anError, "_context", [])]);})() : nil;
smalltalk.send(self, "_logError_", [anError]);
return self;},
source: unescape('handleError%3A%20anError%0A%09anError%20context%20ifNotNil%3A%20%5Bself%20logErrorContext%3A%20anError%20context%5D.%0A%09self%20logError%3A%20anError'),
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logContext_',
smalltalk.method({
selector: 'logContext:',
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;
smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aContext, "_receiver", []), "_asString", []), "__comma", [unescape("%3E%3E")]), "__comma", [smalltalk.send(aContext, "_selector", [])])]);
return self;},
source: unescape('logContext%3A%20aContext%0A%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09self%20logContext%3A%20aContext%20home%5D.%0A%09self%20log%3A%20aContext%20receiver%20asString%2C%20%27%3E%3E%27%2C%20aContext%20selector'),
messageSends: ["ifNotNil:", "home", "logContext:", "log:", unescape("%2C"), "asString", "receiver", "selector"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logErrorContext_',
smalltalk.method({
selector: 'logErrorContext:',
category: 'private',
fn: function (aContext){
var self=this;
(($receiver = aContext) != nil && $receiver != undefined) ? (function(){return (($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_logContext_", [smalltalk.send(aContext, "_home", [])]);})() : nil;})() : nil;
return self;},
source: unescape('logErrorContext%3A%20aContext%0A%09aContext%20ifNotNil%3A%20%5B%0A%09%09aContext%20home%20ifNotNil%3A%20%5B%0A%09%09%09self%20logContext%3A%20aContext%20home%5D%5D'),
messageSends: ["ifNotNil:", "home", "logContext:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_logError_',
smalltalk.method({
selector: 'logError:',
category: 'private',
fn: function (anError){
var self=this;
smalltalk.send(self, "_log_", [smalltalk.send(anError, "_messageText", [])]);
return self;},
source: unescape('logError%3A%20anError%0A%09self%20log%3A%20anError%20messageText'),
messageSends: ["log:", "messageText"],
referencedClasses: []
}),
smalltalk.ErrorHandler);

smalltalk.addMethod(
'_log_',
smalltalk.method({
selector: 'log:',
category: 'private',
fn: function (aString){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);
return self;},
source: unescape('log%3A%20aString%0A%09console%20log%3A%20aString'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.ErrorHandler);


smalltalk.ErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
category: 'accessing',
fn: function (){
var self=this;
return self['@current'];
return self;},
source: unescape('current%0A%09%5Ecurrent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;},
source: unescape('initialize%0A%09self%20register'),
messageSends: ["register"],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_register',
smalltalk.method({
selector: 'register',
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_setCurrent_", [smalltalk.send(self, "_new", [])]);
return self;},
source: unescape('register%0A%09ErrorHandler%20setCurrent%3A%20self%20new'),
messageSends: ["setCurrent:", "new"],
referencedClasses: [smalltalk.ErrorHandler]
}),
smalltalk.ErrorHandler.klass);

smalltalk.addMethod(
'_setCurrent_',
smalltalk.method({
selector: 'setCurrent:',
category: 'accessing',
fn: function (anHandler){
var self=this;
self['@current']=anHandler;
return self;},
source: unescape('setCurrent%3A%20anHandler%0A%09current%20%3A%3D%20anHandler'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ErrorHandler.klass);


smalltalk.addClass('PyStoneRecord', smalltalk.Object, ['ptrComp', 'discr', 'enumComp', 'intComp', 'stringComp'], 'Pystone');
smalltalk.PyStoneRecord.comment=unescape('Record%20class%20used%20in%20Pystone%20benchmark.')
smalltalk.addMethod(
'_discr',
smalltalk.method({
selector: 'discr',
category: 'accessing',
fn: function (){
var self=this;
return self['@discr'];
return self;},
source: unescape('discr%0A%09%5Ediscr'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_discr_',
smalltalk.method({
selector: 'discr:',
category: 'accessing',
fn: function (p){
var self=this;
self['@discr']=p;
return self;},
source: unescape('discr%3A%20p%0A%09discr%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_enumComp',
smalltalk.method({
selector: 'enumComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@enumComp'];
return self;},
source: unescape('enumComp%0A%09%5EenumComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_enumComp_',
smalltalk.method({
selector: 'enumComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@enumComp']=p;
return self;},
source: unescape('enumComp%3A%20p%0A%09enumComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_intComp',
smalltalk.method({
selector: 'intComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@intComp'];
return self;},
source: unescape('intComp%0A%09%5EintComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_intComp_',
smalltalk.method({
selector: 'intComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@intComp']=p;
return self;},
source: unescape('intComp%3A%20p%0A%09intComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp',
smalltalk.method({
selector: 'ptrComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@ptrComp'];
return self;},
source: unescape('ptrComp%0A%09%5EptrComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp_',
smalltalk.method({
selector: 'ptrComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@ptrComp']=p;
return self;},
source: unescape('ptrComp%3A%20p%0A%09ptrComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_stringComp',
smalltalk.method({
selector: 'stringComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@stringComp'];
return self;},
source: unescape('stringComp%0A%09%5EstringComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_stringComp_',
smalltalk.method({
selector: 'stringComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@stringComp']=p;
return self;},
source: unescape('stringComp%3A%20p%0A%09stringComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_ptrComp_discr_enumComp_intComp_stringComp_", [self['@ptrComp'], self['@discr'], self['@enumComp'], self['@intComp'], self['@stringComp']]);
return self;},
source: unescape('copy%0A%09%5EPyStoneRecord%20ptrComp%3A%20ptrComp%20discr%3A%20discr%20enumComp%3A%20enumComp%20intComp%3A%20intComp%20stringComp%3A%20stringComp'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:"],
referencedClasses: [smalltalk.PyStoneRecord]
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp_discr_enumComp_intComp_stringComp_',
smalltalk.method({
selector: 'ptrComp:discr:enumComp:intComp:stringComp:',
category: 'initialize-release',
fn: function (p, d, e, i, s){
var self=this;
self['@ptrComp']=p;
self['@discr']=d;
self['@enumComp']=e;
self['@intComp']=i;
self['@stringComp']=s;
return self;},
source: unescape('ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s%0A%0A%09ptrComp%20%3A%3D%20p.%0A%09discr%20%3A%3D%20d.%0A%09enumComp%20%3A%3D%20e.%0A%09intComp%20%3A%3D%20i.%0A%09stringComp%20%3A%3D%20s'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);


smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance-creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_ptrComp_discr_enumComp_intComp_stringComp_", [nil, (0), (0), (0), (0)]);
return self;},
source: unescape('new%0A%0A%09%5Eself%20ptrComp%3A%20nil%20discr%3A%200%20enumComp%3A%200%20intComp%3A%200%20stringComp%3A%200'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:"],
referencedClasses: []
}),
smalltalk.PyStoneRecord.klass);

smalltalk.addMethod(
'_ptrComp_discr_enumComp_intComp_stringComp_',
smalltalk.method({
selector: 'ptrComp:discr:enumComp:intComp:stringComp:',
category: 'instance-creation',
fn: function (p, d, e, i, s){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_ptrComp_discr_enumComp_intComp_stringComp_", [p, d, e, i, s]);
return self;},
source: unescape('ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s%0A%0A%09%5Esuper%20new%20ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:", "new"],
referencedClasses: []
}),
smalltalk.PyStoneRecord.klass);


smalltalk.addClass('Pystone', smalltalk.Object, ['nulltime', 'ptrGlbNext', 'ptrGlb', 'ident1', 'ident3', 'ident2', 'ident4', 'ident5', 'ident6', 'intGlob', 'boolGlob', 'char1Glob', 'char2Glob', 'array1Glob', 'array2Glob', 'func3', 'func2', 'func1'], 'Pystone');
smalltalk.Pystone.comment=unescape('This%20is%20a%20straight%20translation%20of%20pystone%201.1%20from%20Python%20to%20Squeak.%20Procedures%20have%20been%20mapped%20to%20instance%20side%20methods%2C%20functions%20have%20been%20mapped%20to%20blocks.%20Open%20a%20transcript%20and%20run%3A%0A%0APystone%20run')
smalltalk.addMethod(
'_defineFunctions',
smalltalk.method({
selector: 'defineFunctions',
category: 'as yet unclassified',
fn: function (){
var self=this;
self['@func1']=(function(charPar1, charPar2){var charLoc1=nil;
var charLoc2=nil;
charLoc1=charPar1;charLoc2=charLoc1;return (($receiver = smalltalk.send(charLoc2, "__eq", [charPar2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@ident2'];})() : (function(){return self['@ident1'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@ident2'];}), (function(){return self['@ident1'];})]);});
self['@func2']=(function(strParI1, strParI2){var intLoc=nil;
var charLoc=nil;
intLoc=(1);(function(){while((function(){return (($receiver = intLoc).klass === smalltalk.Number) ? $receiver <=(1) : smalltalk.send($receiver, "__lt_eq", [(1)]);})()) {(function(){return (($receiver = smalltalk.send(smalltalk.send(self['@func1'], "_value_value_", [smalltalk.send(strParI1, "_at_", [intLoc]), smalltalk.send(strParI1, "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])])]), "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){charLoc="A";return intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){charLoc="A";return intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})]);})()}})();(($receiver = smalltalk.send((($receiver = charLoc).klass === smalltalk.Number) ? $receiver >="W" : smalltalk.send($receiver, "__gt_eq", ["W"]), "_and_", [(function(){return (($receiver = charLoc).klass === smalltalk.Number) ? $receiver <="Z" : smalltalk.send($receiver, "__lt_eq", ["Z"]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return intLoc=(7);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return intLoc=(7);})]);return (($receiver = smalltalk.send(charLoc, "__eq", ["X"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return (($receiver = (($receiver = strParI1).klass === smalltalk.Number) ? $receiver >strParI2 : smalltalk.send($receiver, "__gt", [strParI2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;})() : (function(){return false;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;}), (function(){return false;})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return (($receiver = (($receiver = strParI1).klass === smalltalk.Number) ? $receiver >strParI2 : smalltalk.send($receiver, "__gt", [strParI2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;})() : (function(){return false;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;}), (function(){return false;})]);})]);});
self['@func3']=(function(enumParIn){var enumLoc=nil;
enumLoc=enumParIn;return smalltalk.send(enumLoc, "__eq", [self['@ident3']]);});
return self;},
source: unescape('defineFunctions%0A%09%22Functions%20have%20been%20mapped%20to%20blocks%2C%20since%20that%0A%09would%20be%20natural.%22%0A%09%0A%09func1%20%3A%3D%20%5B%3AcharPar1%20%3AcharPar2%20%7C%0A%09%09%7C%20charLoc1%20charLoc2%20%7C%0A%09%09charLoc1%20%3A%3D%20charPar1.%0A%09%09charLoc2%20%3A%3D%20charLoc1.%0A%09%09%28charLoc2%20%3D%20charPar2%29%20ifTrue%3A%20%5Bident2%5D%20ifFalse%3A%20%5Bident1%5D%5D.%0A%0A%09func2%20%3A%3D%20%5B%3AstrParI1%20%3AstrParI2%20%7C%0A%09%09%7C%20intLoc%20charLoc%20%7C%0A%09%09intLoc%20%3A%3D%201.%0A%09%09%5BintLoc%20%3C%3D%201%5D%20whileTrue%3A%20%5B%0A%09%09%09%28%28func1%20value%3A%20%28strParI1%20at%3A%20intLoc%29%20value%3A%20%28strParI1%20at%3A%20intLoc%20+%201%29%29%20%3D%20ident1%29%0A%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09charLoc%20%3A%3D%20%27A%27.%0A%09%09%09%09%09intLoc%20%3A%3D%20intLoc%20+%201%5D%5D.%0A%09%09%28charLoc%20%3E%3D%20%27W%27%20and%3A%20%5BcharLoc%20%3C%3D%20%27Z%27%5D%29%20ifTrue%3A%20%5B%0A%09%09%09intLoc%20%3A%3D%207%5D.%0A%09%09%28charLoc%20%3D%20%27X%27%29%20ifTrue%3A%20%5Btrue%5D%20ifFalse%3A%20%5B%0A%09%09%09%28strParI1%20%3E%20strParI2%29%20ifTrue%3A%20%5B%0A%09%09%09%09intLoc%20%3A%3D%20intLoc%20+%207.%0A%09%09%09%09true%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09false%5D%5D%5D.%0A%09%0A%09func3%20%3A%3D%20%5B%3AenumParIn%20%7C%0A%09%09%7C%20enumLoc%20%7C%0A%09%09enumLoc%20%3A%3D%20enumParIn.%0A%09%09enumLoc%20%3D%20ident3%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "whileTrue:", unescape("%3C%3D"), "ifTrue:", "value:value:", "at:", unescape("+"), "and:", unescape("%3E%3D"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_main_',
smalltalk.method({
selector: 'main:',
category: 'as yet unclassified',
fn: function (loops){
var self=this;
self['@ident1']=(1);
self['@ident2']=(2);
self['@ident3']=(3);
self['@ident4']=(4);
self['@ident5']=(5);
self['@ident6']=(6);
self['@intGlob']=(0);
self['@boolGlob']=false;
self['@char1Glob']=smalltalk.send((smalltalk.String || String), "_value_", [(0)]);
self['@char2Glob']=smalltalk.send((smalltalk.String || String), "_value_", [(0)]);
self['@array1Glob']=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send((51), "_timesRepeat_", [(function(){return smalltalk.send(self['@array1Glob'], "_add_", [(0)]);})]);
self['@array2Glob']=smalltalk.send(smalltalk.send(smalltalk.send((1), "_to_", [(51)]), "_collect_", [(function(i){return smalltalk.send(self['@array1Glob'], "_copy", []);})]), "_asArray", []);
smalltalk.send(self, "_defineFunctions", []);
smalltalk.send(self, "_pystones_block_", [loops, (function(benchtime, stones){smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("Pystone%281.1%29%20time%20for%20"), "__comma", [smalltalk.send(loops, "_asString", [])]), "__comma", [unescape("%20passes%20%3D%20")]), "__comma", [smalltalk.send(benchtime, "_asString", [])])]);return smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send("This machine benchmarks at ", "__comma", [smalltalk.send((($receiver = smalltalk.send((($receiver = stones).klass === smalltalk.Number) ? $receiver /(0.1) : smalltalk.send($receiver, "__slash", [(0.1)]), "_rounded", [])).klass === smalltalk.Number) ? $receiver *(0.1) : smalltalk.send($receiver, "__star", [(0.1)]), "_asString", [])]), "__comma", [unescape("%20pystones/second")])]);})]);
return self;},
source: unescape('main%3A%20loops%0A%09%22Adaption%20of%20pystone.py%20version%201.9%20from%20Python.%22%0A%0A%09ident1%20%3A%3D%201.%20ident2%20%3A%3D%202.%20ident3%20%3A%3D%203.%20ident4%20%3A%3D%204.%20ident5%20%3A%3D%205.%20ident6%20%3A%3D%206.%0A%09intGlob%20%3A%3D%200.%0A%09boolGlob%20%3A%3D%20false.%0A%09char1Glob%20%3A%3D%20String%20value%3A%200.%0A%09char2Glob%20%3A%3D%20String%20value%3A%200.%0A%09array1Glob%20%3A%3D%20Array%20new.%0A%20%20%20%20%20%20%20%2051%20timesRepeat%3A%20%5B%20array1Glob%20add%3A%200%5D.%0A%09array2Glob%20%3A%3D%20%28%281%20to%3A%2051%29%20collect%3A%20%5B%3Ai%20%7C%20array1Glob%20copy%5D%29%20asArray.%0A%0A%09self%20defineFunctions.%0A%0A%09self%20pystones%3A%20loops%20block%3A%20%5B%3Abenchtime%20%3Astones%20%7C%0A%09%09self%20log%3A%20%27Pystone%281.1%29%20time%20for%20%27%2C%20loops%20asString%2C%20%27%20passes%20%3D%20%27%2C%20benchtime%20asString.%0A%09%09self%20log%3A%20%27This%20machine%20benchmarks%20at%20%27%2C%0A%09%09%09%28%28stones%20/%200.1%29%20rounded%20*%200.1%29%20asString%2C%20%27%20pystones/second%27%5D'),
messageSends: ["value:", "new", "timesRepeat:", "add:", "asArray", "collect:", "to:", "copy", "defineFunctions", "pystones:block:", "log:", unescape("%2C"), "asString", unescape("*"), "rounded", unescape("/")],
referencedClasses: [smalltalk.String,smalltalk.Array]
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_log_',
smalltalk.method({
selector: 'log:',
category: 'as yet unclassified',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_at_", ["Transcript"])) == nil || $receiver == undefined) ? (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);})() : (function(){return (function($rec){smalltalk.send($rec, "_show_", [aString]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));})();
return self;},
source: unescape('log%3A%20aString%0A%09%28smalltalk%20at%3A%20%23Transcript%29%0A%09%09ifNotNil%3A%20%5B%0A%09%09%09Transcript%20show%3A%20aString%3Bcr%5D%0A%09%09ifNil%3A%20%5B%0A%09%09%09console%20log%3A%20aString%5D'),
messageSends: ["ifNotNil:ifNil:", "at:", "log:", "show:", "cr"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc0_block_',
smalltalk.method({
selector: 'proc0:block:',
category: 'as yet unclassified',
fn: function (loops, aBlock){
var self=this;
var string1Loc=nil;
var starttime=nil;
var intLoc1=nil;
var intLoc2=nil;
var string2Loc=nil;
var enumLoc=nil;
var intLoc3=nil;
var charIndex=nil;
var benchtime=nil;
smalltalk.send(loops, "_timesRepeat_", [(function(){return nil;})]);
benchtime=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){self['@ptrGlbNext']=smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_new", []);self['@ptrGlb']=smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_new", []);smalltalk.send(self['@ptrGlb'], "_ptrComp_", [self['@ptrGlbNext']]);smalltalk.send(self['@ptrGlb'], "_discr_", [self['@ident1']]);smalltalk.send(self['@ptrGlb'], "_enumComp_", [self['@ident3']]);smalltalk.send(self['@ptrGlb'], "_intComp_", [(40)]);smalltalk.send(self['@ptrGlb'], "_stringComp_", [unescape("DHRYSTONE%20PROGRAM%2C%20SOME%20STRING")]);string1Loc=unescape("DHRYSTONE%20PROGRAM%2C%201%27ST%20STRING");smalltalk.send(smalltalk.send(self['@array2Glob'], "_at_", [(8)]), "_at_put_", [(7), (10)]);return smalltalk.send(loops, "_timesRepeat_", [(function(){(function($rec){smalltalk.send($rec, "_proc5", []);return smalltalk.send($rec, "_proc4", []);})(self);intLoc1=(2);intLoc2=(3);string2Loc=unescape("DHRYSTONE%20PROGRAM%2C%202%27ND%20STRING");enumLoc=self['@ident2'];self['@boolGlob']=smalltalk.send(smalltalk.send(self['@func2'], "_value_value_", [string1Loc, string2Loc]), "_not", []);(function(){while((function(){return (($receiver = intLoc1).klass === smalltalk.Number) ? $receiver <intLoc2 : smalltalk.send($receiver, "__lt", [intLoc2]);})()) {(function(){intLoc3=(($receiver = (5) * intLoc1).klass === smalltalk.Number) ? $receiver -intLoc2 : smalltalk.send($receiver, "__minus", [intLoc2]);intLoc3=smalltalk.send(self, "_proc7_with_", [intLoc1, intLoc2]);return intLoc1=(($receiver = intLoc1).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})()}})();smalltalk.send(self, "_proc8_with_with_with_", [self['@array1Glob'], self['@array2Glob'], intLoc1, intLoc3]);self['@ptrGlb']=smalltalk.send(self, "_proc1_", [self['@ptrGlb']]);charIndex="A";(function(){while((function(){return (($receiver = charIndex).klass === smalltalk.Number) ? $receiver <=self['@char2Glob'] : smalltalk.send($receiver, "__lt_eq", [self['@char2Glob']]);})()) {(function(){(($receiver = smalltalk.send(enumLoc, "__eq", [smalltalk.send(self['@func1'], "_value_value_", [charIndex, "C"])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumLoc=smalltalk.send(self, "_proc6_", [self['@ident1']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumLoc=smalltalk.send(self, "_proc6_", [self['@ident1']]);})]);return charIndex=smalltalk.send((smalltalk.String || String), "_value_", [(($receiver = smalltalk.send(charIndex, "_asciiValue", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);})()}})();intLoc3=(($receiver = intLoc2).klass === smalltalk.Number) ? $receiver *intLoc1 : smalltalk.send($receiver, "__star", [intLoc1]);intLoc2=(($receiver = intLoc3).klass === smalltalk.Number) ? $receiver /intLoc1 : smalltalk.send($receiver, "__slash", [intLoc1]);intLoc2=(($receiver = (7) * (($receiver = intLoc3).klass === smalltalk.Number) ? $receiver -intLoc2 : smalltalk.send($receiver, "__minus", [intLoc2])).klass === smalltalk.Number) ? $receiver -intLoc1 : smalltalk.send($receiver, "__minus", [intLoc1]);return intLoc1=smalltalk.send(self, "_proc2_", [intLoc1]);})]);})]);
return smalltalk.send(aBlock, "_value_value_", [(($receiver = benchtime).klass === smalltalk.Number) ? $receiver /(1000) : smalltalk.send($receiver, "__slash", [(1000)]), (($receiver = (($receiver = loops).klass === smalltalk.Number) ? $receiver /benchtime : smalltalk.send($receiver, "__slash", [benchtime])).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)])]);
return self;},
source: unescape('proc0%3A%20loops%20block%3A%20aBlock%0A%09%7C%20string1Loc%20starttime%20intLoc1%20intLoc2%20string2Loc%20enumLoc%20intLoc3%20charIndex%20benchtime%20%7C%0A%0A%09loops%20timesRepeat%3A%20%5B%5D.%0A%0A%09benchtime%20%3A%3D%20Date%20millisecondsToRun%3A%20%5B%0A%09ptrGlbNext%20%3A%3D%20PyStoneRecord%20new.%0A%09ptrGlb%20%3A%3D%20PyStoneRecord%20new.%0A%09ptrGlb%20ptrComp%3A%20ptrGlbNext.%0A%09ptrGlb%20discr%3A%20ident1.%0A%09ptrGlb%20enumComp%3A%20ident3.%0A%09ptrGlb%20intComp%3A%2040.%0A%09ptrGlb%20stringComp%3A%20%27DHRYSTONE%20PROGRAM%2C%20SOME%20STRING%27.%0A%09string1Loc%20%3A%3D%20%27DHRYSTONE%20PROGRAM%2C%201%27%27ST%20STRING%27.%0A%09%0A%09%28array2Glob%20at%3A%208%29%20at%3A%207%20put%3A%2010.%0A%09%221%20to%3A%20loops%20-%201%20do%3A%20%5B%3Ai%20%7C%20%20%20%20%20%20%20Changed%20this%20to%20use%20timesRepeat%3A%20since%20i%20is%20not%20used%20at%20all%20in%20the%20loop%22%0A%09loops%20timesRepeat%3A%20%5B%0A%09%09self%20proc5%3B%20proc4.%0A%09%09intLoc1%20%3A%3D%202.%0A%09%09intLoc2%20%3A%3D%203.%0A%09%09string2Loc%20%3A%3D%20%27DHRYSTONE%20PROGRAM%2C%202%27%27ND%20STRING%27.%0A%09%09enumLoc%20%3A%3D%20ident2.%0A%09%09boolGlob%20%3A%3D%20%28func2%20value%3A%20string1Loc%20value%3A%20string2Loc%29%20not.%0A%09%09%5BintLoc1%20%3C%20intLoc2%5D%20whileTrue%3A%20%5B%0A%09%09%09intLoc3%20%3A%3D%205%20*%20intLoc1%20-%20intLoc2.%0A%09%09%09intLoc3%20%3A%3D%20self%20proc7%3A%20intLoc1%20with%3A%20intLoc2.%0A%09%09%09intLoc1%20%3A%3D%20intLoc1%20+%201%5D.%0A%09%20%09self%20proc8%3Aarray1Glob%20with%3A%20array2Glob%20with%3A%20intLoc1%20with%3A%20intLoc3.%0A%09%09ptrGlb%20%3A%3D%20self%20proc1%3A%20ptrGlb.%0A%09%09charIndex%20%3A%3D%20%27A%27.%0A%09%09%5BcharIndex%20%3C%3D%20char2Glob%5D%20whileTrue%3A%20%5B%0A%09%09%09%28enumLoc%20%3D%20%28func1%20value%3A%20charIndex%20value%3A%20%27C%27%29%29%0A%09%09%09%09%09ifTrue%3A%20%5BenumLoc%20%3A%3D%20self%20proc6%3A%20ident1%5D.%0A%09%09%09charIndex%20%3A%3D%20String%20value%3A%20%28charIndex%20asciiValue%20+%201%29%5D.%0A%09%09intLoc3%20%3A%3D%20intLoc2%20*%20intLoc1.%0A%09%09intLoc2%20%3A%3D%20intLoc3%20/%20intLoc1.%0A%09%09intLoc2%20%3A%3D%207%20*%20%28intLoc3%20-%20intLoc2%29%20-%20intLoc1.%0A%09%09intLoc1%20%3A%3D%20self%20proc2%3A%20intLoc1%5D%5D.%0A%20%20%20%20%5E%20aBlock%20value%3A%20%28benchtime%20/%201000%29%20value%3A%20%28loops%20/%20benchtime%29%20*%201000'),
messageSends: ["timesRepeat:", "millisecondsToRun:", "new", "ptrComp:", "discr:", "enumComp:", "intComp:", "stringComp:", "at:put:", "at:", "proc5", "proc4", "not", "value:value:", "whileTrue:", unescape("%3C"), unescape("-"), unescape("*"), "proc7:with:", unescape("+"), "proc8:with:with:with:", "proc1:", unescape("%3C%3D"), "ifTrue:", unescape("%3D"), "proc6:", "value:", "asciiValue", unescape("/"), "proc2:"],
referencedClasses: [smalltalk.Date,smalltalk.PyStoneRecord,smalltalk.String]
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc1_',
smalltalk.method({
selector: 'proc1:',
category: 'as yet unclassified',
fn: function (ptrParIn){
var self=this;
var nextRecord=nil;
var tmp=nil;
tmp=ptrParIn;
nextRecord=smalltalk.send(self['@ptrGlb'], "_copy", []);
smalltalk.send(ptrParIn, "_ptrComp_", [nextRecord]);
smalltalk.send(ptrParIn, "_intComp_", [(5)]);
smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(ptrParIn, "_intComp", [])]);
smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(ptrParIn, "_ptrComp", [])]);
smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self, "_proc3_", [smalltalk.send(nextRecord, "_ptrComp", [])])]);
(($receiver = smalltalk.send(smalltalk.send(nextRecord, "_discr", []), "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(nextRecord, "_intComp_", [(6)]);smalltalk.send(nextRecord, "_enumComp_", [smalltalk.send(self, "_proc6_", [smalltalk.send(ptrParIn, "_enumComp", [])])]);smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self['@ptrGlb'], "_ptrComp", [])]);return smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(self, "_proc7_with_", [smalltalk.send(nextRecord, "_intComp", []), (10)])]);})() : (function(){return tmp=smalltalk.send(nextRecord, "_copy", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(nextRecord, "_intComp_", [(6)]);smalltalk.send(nextRecord, "_enumComp_", [smalltalk.send(self, "_proc6_", [smalltalk.send(ptrParIn, "_enumComp", [])])]);smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self['@ptrGlb'], "_ptrComp", [])]);return smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(self, "_proc7_with_", [smalltalk.send(nextRecord, "_intComp", []), (10)])]);}), (function(){return tmp=smalltalk.send(nextRecord, "_copy", []);})]);
smalltalk.send(nextRecord, "_ptrComp_", [nil]);
return tmp;
return self;},
source: unescape('proc1%3A%20ptrParIn%0A%09%7C%20nextRecord%20tmp%20%7C%0A%09tmp%20%3A%3D%20ptrParIn.%0A%09nextRecord%20%3A%3D%20ptrGlb%20copy.%0A%09ptrParIn%20ptrComp%3A%20nextRecord.%0A%09ptrParIn%20intComp%3A%205.%0A%09nextRecord%20intComp%3A%20ptrParIn%20intComp.%0A%09nextRecord%20ptrComp%3A%20ptrParIn%20ptrComp.%0A%09nextRecord%20ptrComp%3A%20%28self%20proc3%3A%20nextRecord%20ptrComp%29.%0A%09%28nextRecord%20discr%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09nextRecord%20intComp%3A%206.%0A%09%09nextRecord%20enumComp%3A%20%28self%20proc6%3A%20ptrParIn%20enumComp%29.%0A%09%09nextRecord%20ptrComp%3A%20ptrGlb%20ptrComp.%0A%09%09nextRecord%20intComp%3A%20%28self%20proc7%3A%20nextRecord%20intComp%20with%3A%2010%29%20%5D%0A%09ifFalse%3A%20%5B%0A%09%09tmp%20%3A%3D%20nextRecord%20copy%5D.%0A%09nextRecord%20ptrComp%3A%20nil.%0A%09%5Etmp'),
messageSends: ["copy", "ptrComp:", "intComp:", "intComp", "ptrComp", "proc3:", "ifTrue:ifFalse:", unescape("%3D"), "discr", "enumComp:", "proc6:", "enumComp", "proc7:with:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc2_',
smalltalk.method({
selector: 'proc2:',
category: 'as yet unclassified',
fn: function (intParIO){
var self=this;
try{var tmp=nil;
var intLoc=nil;
var enumLoc=nil;
tmp=intParIO;
intLoc=(($receiver = intParIO).klass === smalltalk.Number) ? $receiver +(10) : smalltalk.send($receiver, "__plus", [(10)]);
(function(){while((function(){return true;})()) {(function(){(($receiver = smalltalk.send(self['@char1Glob'], "__eq", ["A"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);tmp=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -self['@intGlob'] : smalltalk.send($receiver, "__minus", [self['@intGlob']]);return enumLoc=self['@ident1'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);tmp=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -self['@intGlob'] : smalltalk.send($receiver, "__minus", [self['@intGlob']]);return enumLoc=self['@ident1'];})]);return (($receiver = smalltalk.send(enumLoc, "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_proc2_', fn: function(){return tmp}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_proc2_', fn: function(){return tmp}})})();})]);})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_proc2_'){return e.fn()} throw(e)}},
source: unescape('proc2%3A%20intParIO%0A%09%7C%20tmp%20intLoc%20enumLoc%20%7C%0A%09tmp%20%3A%3D%20intParIO.%0A%09intLoc%20%3A%3D%20intParIO%20+%2010.%0A%09%5Btrue%5D%20whileTrue%3A%20%5B%0A%09%09%28char1Glob%20%3D%20%27A%27%29%20ifTrue%3A%20%5B%0A%09%09%09intLoc%20%3A%3D%20intLoc%20-%201.%0A%09%09%09tmp%20%3A%3D%20intLoc%20-%20intGlob.%0A%09%09%09enumLoc%20%3A%3D%20ident1%5D.%0A%09%09%28enumLoc%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09%09%5E%20tmp%5D%5D'),
messageSends: [unescape("+"), "whileTrue:", "ifTrue:", unescape("%3D"), unescape("-")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc3_',
smalltalk.method({
selector: 'proc3:',
category: 'as yet unclassified',
fn: function (ptrParOut){
var self=this;
var tmp=nil;
tmp=ptrParOut;
(($receiver = self['@ptrGlb']) == nil || $receiver == undefined) ? (function(){return self['@intGlob']=(100);})() : (function(){return tmp=smalltalk.send(self['@ptrGlb'], "_ptrComp", []);})();
smalltalk.send(self['@ptrGlb'], "_intComp_", [smalltalk.send(self, "_proc7_with_", [(10), self['@intGlob']])]);
return tmp;
return self;},
source: unescape('proc3%3A%20ptrParOut%0A%09%7C%20tmp%20%7C%0A%09tmp%20%3A%3D%20ptrParOut.%0A%09ptrGlb%20ifNotNil%3A%20%5B%0A%09%09tmp%20%3A%3D%20ptrGlb%20ptrComp%5D%0A%09ifNil%3A%20%5B%0A%09%09intGlob%20%3A%3D%20100%5D.%0A%09ptrGlb%20intComp%3A%20%28self%20proc7%3A%2010%20with%3A%20intGlob%29.%0A%09%5Etmp'),
messageSends: ["ifNotNil:ifNil:", "ptrComp", "intComp:", "proc7:with:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc4',
smalltalk.method({
selector: 'proc4',
category: 'as yet unclassified',
fn: function (){
var self=this;
var boolLoc=nil;
boolLoc=smalltalk.send(self['@char1Glob'], "__eq", ["A"]);
boolLoc=smalltalk.send(boolLoc, "_|", [self['@boolGlob']]);
self['@char2Glob']="B";
return self;},
source: unescape('proc4%0A%09%7C%20boolLoc%20%7C%0A%09boolLoc%20%3A%3D%20char1Glob%20%3D%20%27A%27.%0A%09boolLoc%20%3A%3D%20boolLoc%20%7C%20boolGlob.%0A%09char2Glob%20%3A%3D%20%27B%27'),
messageSends: [unescape("%3D"), unescape("%7C")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc5',
smalltalk.method({
selector: 'proc5',
category: 'as yet unclassified',
fn: function (){
var self=this;
self['@char1Glob']="A";
self['@boolGlob']=false;
return self;},
source: unescape('proc5%0A%09char1Glob%20%3A%3D%20%27A%27.%0A%09boolGlob%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc6_',
smalltalk.method({
selector: 'proc6:',
category: 'as yet unclassified',
fn: function (enumParIn){
var self=this;
var enumParOut=nil;
enumParOut=enumParIn;
(($receiver = smalltalk.send(self['@func3'], "_value_", [enumParIn])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return enumParOut=self['@ident4'];})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return enumParOut=self['@ident4'];})]);
(($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident2']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident2']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})]);})]);
return enumParOut;
return self;},
source: unescape('proc6%3A%20enumParIn%0A%09%7C%20enumParOut%20%7C%0A%09enumParOut%20%3A%3D%20enumParIn.%0A%09%28func3%20value%3A%20enumParIn%29%20ifFalse%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident4%5D.%0A%09%28enumParIn%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident1%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident2%29%20ifTrue%3A%20%5B%0A%09%09%09intGlob%20%3E%20100%20ifTrue%3A%20%5B%0A%09%09%09%09enumParOut%20%3A%3D%20ident1%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09enumParOut%20%3A%3D%20ident4%5D%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident3%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident2%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident4%29%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident5%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident3%5D%5D%5D%5D%5D.%0A%09%5EenumParOut'),
messageSends: ["ifFalse:", "value:", "ifTrue:ifFalse:", unescape("%3D"), unescape("%3E"), "ifTrue:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc7_with_',
smalltalk.method({
selector: 'proc7:with:',
category: 'as yet unclassified',
fn: function (intParI1, intParI2){
var self=this;
var intLoc=nil;
var intParOut=nil;
intLoc=(($receiver = intParI1).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]);
intParOut=(($receiver = intParI2).klass === smalltalk.Number) ? $receiver +intLoc : smalltalk.send($receiver, "__plus", [intLoc]);
return intParOut;
return self;},
source: unescape('proc7%3A%20intParI1%20with%3A%20intParI2%0A%09%7C%20intLoc%20intParOut%20%7C%0A%09intLoc%20%3A%3D%20intParI1%20+%202.%0A%09intParOut%20%3A%3D%20intParI2%20+%20intLoc.%0A%09%5E%20intParOut'),
messageSends: [unescape("+")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc8_with_with_with_',
smalltalk.method({
selector: 'proc8:with:with:with:',
category: 'as yet unclassified',
fn: function (array1Par, array2Par, intParI1, intParI2){
var self=this;
var intLoc=nil;
intLoc=(($receiver = intParI1).klass === smalltalk.Number) ? $receiver +(5) : smalltalk.send($receiver, "__plus", [(5)]);
smalltalk.send(array1Par, "_at_put_", [intLoc, intParI2]);
smalltalk.send(array1Par, "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(array1Par, "_at_", [intLoc])]);
smalltalk.send(array1Par, "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(30) : smalltalk.send($receiver, "__plus", [(30)]), intLoc]);
smalltalk.send(intLoc, "_to_do_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), (function(intIndex){smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_put_", [intIndex, intLoc]);smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]), (($receiver = smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);return smalltalk.send(smalltalk.send(array2Par, "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)])]), "_at_put_", [intLoc, smalltalk.send(array1Par, "_at_", [intLoc])]);})]);
self['@intGlob']=(5);
return self;},
source: unescape('proc8%3A%20array1Par%20with%3A%20array2Par%20with%3A%20intParI1%20with%3A%20intParI2%0A%09%7C%20intLoc%20%7C%0A%09intLoc%20%3A%3D%20intParI1%20+%205.%0A%09array1Par%20at%3A%20intLoc%20put%3A%20intParI2.%0A%09array1Par%20at%3A%20intLoc%20+%201%20put%3A%20%28array1Par%20at%3A%20intLoc%29.%0A%09array1Par%20at%3A%20intLoc%20+%2030%20put%3A%20intLoc.%0A%09intLoc%20to%3A%20intLoc%20+%201%20do%3A%20%5B%3AintIndex%20%7C%0A%09%09%28array2Par%20at%3A%20intLoc%29%20at%3A%20intIndex%20put%3A%20intLoc.%0A%09%09%28array2Par%20at%3A%20intLoc%29%20at%3A%20intLoc%20-%201%20put%3A%20%28%28array2Par%20at%3A%20intLoc%29%20at%3A%20intLoc%20-%201%29%20+%201.%0A%09%09%28array2Par%20at%3A%20intLoc%20+%2020%29%20at%3A%20intLoc%20put%3A%20%28array1Par%20at%3A%20intLoc%29%5D.%0A%09intGlob%20%3A%3D%205'),
messageSends: [unescape("+"), "at:put:", "at:", "to:do:", unescape("-")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_pystones_block_',
smalltalk.method({
selector: 'pystones:block:',
category: 'as yet unclassified',
fn: function (loops, aBlock){
var self=this;
return smalltalk.send(self, "_proc0_block_", [loops, aBlock]);
return self;},
source: unescape('pystones%3A%20loops%20block%3A%20aBlock%0A%09%5Eself%20proc0%3A%20loops%20block%3A%20aBlock'),
messageSends: ["proc0:block:"],
referencedClasses: []
}),
smalltalk.Pystone);


smalltalk.Pystone.klass.iVarNames = ['nulltime'];
smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self, "_run_", [(50000)]);
return self;},
source: unescape('main%0A%09%22self%20main%22%0A%09%0A%09self%20run%3A%2050000'),
messageSends: ["run:"],
referencedClasses: []
}),
smalltalk.Pystone.klass);

smalltalk.addMethod(
'_run_',
smalltalk.method({
selector: 'run:',
category: 'as yet unclassified',
fn: function (loops){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_main_", [loops]);
return self;},
source: unescape('run%3A%20loops%0A%09%22self%20run%3A%2050000%22%0A%09%0A%09self%20new%20main%3A%20loops'),
messageSends: ["main:", "new"],
referencedClasses: []
}),
smalltalk.Pystone.klass);


smalltalk.init(smalltalk.Object);
smalltalk.classes()._do_(function(each) {each._initialize()});
smalltalk.Pystone._main()
