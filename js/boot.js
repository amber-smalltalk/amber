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
    st.debugMode = true;

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

	// Initializing inst vars
	for(var i=0;i<klass.iVarNames.length;i++) {
	    klass.fn.prototype["@"+klass.iVarNames[i]] = nil;
	}

	if(klass.superclass && klass.superclass !== nil) {
	    methods = st.methods(klass.superclass);

	    //Methods linking
	    for(var i in methods) {
		if(!klass.fn.prototype.methods[i]) {
		    klass.fn.prototype.inheritedMethods[i] = methods[i];
		    klass.fn.prototype[methods[i].jsSelector] = methods[i].fn;
		}
	    }

	    //Instance variables linking
	    for(var i=0;i<klass.superclass.iVarNames.length;i++) {
		if(!klass["@"+klass.superclass.iVarNames[i]]) {
		    klass.fn.prototype["@"+klass.superclass.iVarNames[i]] = nil;
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

    st.send = function(receiver, selector, args, klass) {
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

    /* Handles #dnu: *and* JavaScript method calls.
       if the receiver has no klass, we consider it a JS object (outside of the
       Jtalk system). Else assume that the receiver understands #doesNotUnderstand: */

    function messageNotUnderstood(receiver, selector, args) {
	/* Handles JS method calls. */
	if(receiver.klass === undefined) {
	    return callJavaScriptMethod(receiver, selector, args);
	}

	/* Handles not understood messages. Also see the Jtalk counter-part 
	   Object>>doesNotUnderstand: */
	
	return receiver._doesNotUnderstand_(
	    st.Message._new()
		._selector_(convertSelector(selector))
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
	    return jsProperty
	}
	smalltalk.Error._signal_(receiver + ' is not a Jtalk object and "' + jsSelector + '" is undefined')
    }

	

    /* Convert a string to a valid smalltalk selector.
       if you modify the following functions, also change String>>asSelector
       accordingly */

    function convertSelector(selector) {
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
}

function SmalltalkMethodContext() {
    this.stack = [];

    this.push = function(context) {
	stack.push(context);
    };
    
    this.pop = function() {
	stack.pop();
    };
}

/* Global Smalltalk objects. nil and thisContext shouldn't be globals. */

var nil = new SmalltalkNil();
var smalltalk = new Smalltalk();
var thisContext = nil;


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

if(this.CanvasRenderingContext2D) {
    smalltalk.mapClassName("CanvasRenderingContext", "Canvas", CanvasRenderingContext2D, smalltalk.Object);
}
