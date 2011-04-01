function Smalltalk(){};
function SmalltalkObject(){};
function SmalltalkBehavior(){};
function SmalltalkClass(){};
function SmalltalkMetaclass(){
    this.meta = true;
};
function SmalltalkMethod(){};
function SmalltalkNil(){};

var nil = new SmalltalkNil();
var smalltalk = new Smalltalk();

smalltalk.klass = function(spec) {
    var spec = spec || {};
    var that;
    if(spec.meta) {
	that = new SmalltalkMetaclass();
    } else {
	that = new (smalltalk.klass({meta: true})).fn;
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
    that.fn.prototype.klass = that;

    return that;
};

smalltalk.method = function(spec) {
    var that = new SmalltalkMethod();
    that.selector = spec.selector;
    that.category = spec.category;
    that.source   = spec.source;
    that.fn       = spec.fn;
    return that
};

smalltalk.init = function(klass) {
    var subclasses = smalltalk.subclasses(klass);
    for(var i=0;i<klass.iVarNames.length;i++) {
	klass.fn.prototype["@"+klass.iVarNames[i]] = nil;
    }
    if(klass.superclass && klass.superclass !== nil) {
	klass.fn.prototype.__proto__ = klass.superclass.fn.prototype;
	for(var i=0;i<klass.superclass.iVarNames.length;i++) {
	    if(!klass["@"+klass.superclass.iVarNames[i]]) {
		klass.fn.prototype["@"+klass.superclass.iVarNames[i]] = nil;
	    }
	}
    }
    for(var i=0;i<subclasses.length;i++) {
     	smalltalk.init(subclasses[i]);
    }
    if(klass.klass && !klass.meta) {
	smalltalk.init(klass.klass);
    }
};

smalltalk.classes = function() {
    var classes = [];
    for(var i in smalltalk) {
	if(i.search(/^[A-Z]/g) != -1) {
	    classes.push(smalltalk[i]);
	}

    }
    return classes
};

smalltalk.subclasses = function(klass) {
    var subclasses = [];
    var classes = smalltalk.classes();
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

smalltalk.mapClassName = function(className, category, fn, superclass) {
    smalltalk[className] = smalltalk.klass({
		className:  className, 
		category:   category, 
		superclass: superclass,
		fn:         fn
	});
};

smalltalk.addClass = function(className, superclass, iVarNames, category) {
    if(smalltalk[className]) {
	smalltalk[className].superclass = superclass;
	smalltalk[className].iVarNames = iVarNames;
    } else {
	smalltalk[className] = smalltalk.klass({
		className: className, 
		iVarNames: iVarNames,
		superclass: superclass
	    });
    }
    smalltalk[className].category = category || '';
};

smalltalk.addMethod = function(jsSelector, method, klass) {
    klass.fn.prototype[jsSelector] = method.fn;
    klass.fn.prototype.methods[method.selector] = method;
};

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
smalltalk.mapClassName("UndefinedObject", "Kernel", SmalltalkNil, smalltalk.Object);

smalltalk.mapClassName("Collection", "Kernel", null, smalltalk.Object);
smalltalk.mapClassName("String", "Kernel", String, smalltalk.Collection);
smalltalk.mapClassName("RegularExpression", "Kernel", RegExp, smalltalk.String);
smalltalk.mapClassName("Array", "Kernel", Array, smalltalk.Collection);

if(CanvasRenderingContext2D) {
    smalltalk.mapClassName("CanvasRenderingContext", "Canvas", CanvasRenderingContext2D, smalltalk.Object);
}

