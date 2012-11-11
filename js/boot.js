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

/* Array extensions */

Array.prototype.addElement = function(el) {
    if(typeof el === 'undefined') { return false; };
    if(this.indexOf(el) == -1) {
        this.push(el);
    }
};

Array.prototype.removeElement = function(el) {
    for(var i=0; i<this.length; i++) {
        if(this[i] == el) {
            this.splice(i, 1);
            break;
        }
    }
};


/* Smalltalk constructors definition */

function SmalltalkObject(){};
function SmalltalkBehavior(){};
function SmalltalkClass(){};
function SmalltalkMetaclass(){
	this.meta = true;
};

function SmalltalkPackage(){};
function SmalltalkMethod(){};
function SmalltalkNil(){};

function SmalltalkSymbol(string){
	this.value = string;
};

function SmalltalkOrganizer() {
    this.elements = [];
};

SmalltalkBehavior.prototype  = new SmalltalkObject();
SmalltalkClass.prototype     = new SmalltalkBehavior();
SmalltalkMetaclass.prototype = new SmalltalkBehavior();

SmalltalkNil.prototype       = new SmalltalkObject();
SmalltalkMethod.prototype    = new SmalltalkObject();
SmalltalkPackage.prototype   = new SmalltalkObject();
SmalltalkOrganizer.prototype = new SmalltalkObject();

SmalltalkBehavior.prototype.constructor  = SmalltalkBehavior;
SmalltalkClass.prototype.constructor     = SmalltalkClass;
SmalltalkMetaclass.prototype.constructor = SmalltalkMetaclass;

SmalltalkNil.prototype.constructor       = SmalltalkNil;
SmalltalkMethod.prototype.constructor    = SmalltalkMethod;
SmalltalkPackage.prototype.constructor   = SmalltalkPackage;
SmalltalkOrganizer.prototype.constructor = SmalltalkOrganizer;


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
		'if', 'in', 'instanceof', 'native', 'new', 'private', 'protected', 
		'public', 'return', 'static', 'switch', 'this', 'throw',
		'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'];

    var initialized = false;

    /* Smalltalk classes */

    var classes = [];
    var wrappedClasses = [];

    /* Method not implemented handlers selectors */

    var dnuHandlers = [];

    var addDnuHandler = function(string) {
        if(dnuHandlers.indexOf(string) == -1) {
            dnuHandlers.push(string);
        }
    };
    
    /* Dnu handler method */

    var dnu = function(selector) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            return messageNotUnderstood(this, selector, args);
        };
    };

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
		spec = spec || {};
		var meta = metaclass(spec);
		var that = meta.instanceClass;
        setupClass(that, spec);
		
        that.className = spec.className;
        that.wrapped   = spec.wrapped || false;
		meta.className = spec.className + ' class';
        that.organization = new SmalltalkOrganizer();
		if(spec.superclass) {
			that.superclass = spec.superclass;
			meta.superclass = spec.superclass.klass;
		}
		return that;
	}
	
	function metaclass(spec) {
        var superConstructor;
        spec = spec || {};

        if(spec.superclass) {
            superConstructor = spec.superclass.klass.fn;
        } else {
            superConstructor = SmalltalkClass;
        }

		var that = new SmalltalkMetaclass();
        that.fn            = function() {};
        that.organization  = new SmalltalkOrganizer();
        that.fn.prototype  = new superConstructor();
        that.fn.prototype.constructor = that.fn;

        setupClass(that);

		that.instanceClass = new that.fn();
		return that;
	}
	
	function setupClass(klass, spec) {
        spec = spec || {};
        if(!klass.fn) {
		    klass.fn = spec.fn || function(){};
        }
		klass.iVarNames = spec.iVarNames || [];
		klass.pkg = spec.pkg;

        Object.defineProperty(klass, "toString", {
			value: function() { return 'Smalltalk ' + this.className; }, 
            configurable: true
		});
        
		Object.defineProperties(klass, {
			methods: { value: {}, enumerable: false, configurable: true, writable: true }
		});

        Object.defineProperties(klass.fn.prototype, {
			klass: { value: klass, enumerable: false, configurable: true, writable: true }
		});
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
		that.superSends        = spec.superSends || [];
		that.referencedClasses = spec.referencedClasses || [];
		that.fn                = spec.fn;
		return that;
	};

	/* Initialize a class in its class hierarchy. Handle both classes and
	   metaclasses. */
	   
	st.init = function(klass) {
		st.initClass(klass);
		if(klass.klass && !klass.meta) {
			st.initClass(klass.klass);
		}
	};

    st.initClass = function(klass) {
        if(klass.wrapped) {
            copySuperclass(klass);
        } 
        else {
            installSuperclass(klass);
        }

        if(klass === smalltalk.Object || klass.wrapped) {
            installDnuHandlers(klass);
        }
    };

    var installSuperclass = function(klass) {
        // only if the klass has not been initialized yet.
        if(klass.fn.prototype._yourself) { return false; };

        if(klass.superclass && klass.superclass !== nil) {
            klass.fn.prototype = new klass.superclass.fn();
            klass.fn.prototype.constructor = klass.fn;
            Object.defineProperties(klass.fn.prototype, {
			    klass: { value: klass, enumerable: false, configurable: true, writable: true }
		    });
            reinstallMethods(klass);
        }
    };

    var copySuperclass = function(klass, superclass) {
        superclass = superclass || klass.superclass;
        if(superclass && superclass !== nil) {
			for(var keys = Object.keys(superclass.methods), i=0; i<keys.length; i++) {
                var method = superclass.methods[keys[i]];
				if(!klass.fn.prototype[method.jsSelector]) {
                    installMethod(method, klass);
				}
			}
            if(superclass.superclass) {
                copySuperclass(klass, superclass.superclass);
            }
        }
    };

    var installMethod = function(method, klass) {
        Object.defineProperty(klass.fn.prototype, method.jsSelector, {
			value: method.fn, configurable: true, writable: true
		});
    };

    var reinstallMethods = function(klass) {
        for(var keys = Object.keys(klass.methods), i=0; i<keys.length; i++) {
            installMethod(klass.methods[keys[i]], klass);
		}
    };

    var installDnuHandlers = function(klass) {
        for(var i=0; i<dnuHandlers.length; i++) {
            installDnuHandler(dnuHandlers[i], klass);
        }
    };

    var installDnuHandler = function(string, klass) {
        var selector = st.selector(string);
        if(!klass.fn.prototype[selector]) {
            Object.defineProperty(klass.fn.prototype, selector, {
                value: dnu(selector), configurable: true, writable: true
            });
        }
    };

    var installNewDnuHandler = function(string) {
        if(dnuHandlers.indexOf(string) === -1) {
            addDnuHandler(string);
            installDnuHandler(string, smalltalk.Object);
            for(var i=0; i<wrappedClasses.length; i++) {
                installDnuHandler(string, wrappedClasses[i]);
            };
        }
    };

    /* Super sends handling */

    var installSuperSendHandler = function(string, klass) {
        var selector = st.selector(string);
        var superSelector = st.superSelector(string);
        var fn = klass.superclass[selector];
        if(!fn) {
            fn = dnu(selector);
        };

        Object.defineProperty(klass.fn.prototype, superSelector, {
            value: fn, configurable: true, writable: true
        });
    };

	/* Answer all registered Packages as Array */
    // TODO: Remove this hack

	st.packages.all = function() {
		var packages = [];
		for(var i in st.packages) {
			if (!st.packages.hasOwnProperty(i) || typeof(st.packages[i]) === "function") continue;
			packages.push(st.packages[i]);
		}
		return packages
	};

	/* Answer all registered Smalltalk classes */
    //TODO: remove the function and make smalltalk.classes a simple property

	st.classes = function() {
		return classes;
	};

    st.wrappedClasses = function() {
        return wrappedClasses;
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

	st.wrapClassName = function(className, pkgName, fn, superclass, wrapped) {
        if(wrapped !== false) {
            wrapped = true;
        }
		var pkg = st.addPackage(pkgName);
		st[className] = klass({
			className:  className, 
			superclass: superclass,
			pkg:        pkg, 
			fn:         fn,
            wrapped:    wrapped
		});

        classes.addElement(st[className]);
        if(wrapped) {wrappedClasses.addElement(st[className])};
        pkg.organization.elements.addElement(st[className]);
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
		if(st[className] && st[className].superclass === superclass) {
			st[className].superclass = superclass;
			st[className].iVarNames = iVarNames;
			st[className].pkg = pkg || st[className].pkg;
		} else {
            if(st[className]) {
                st.removeClass(st[className]);
            };
			st[className] = klass({
				className: className, 
				superclass: superclass,
				pkg: pkg,
				iVarNames: iVarNames
			});
		}

        classes.addElement(st[className]);
        pkg.organization.elements.addElement(st[className]);
	};

    st.removeClass = function(klass) {
        klass.pkg.organization.elements.removeElement(klass);
        classes.removeElement(klass);
        delete st[klass.className];
    };

	/* Add/remove a method to/from a class */

	st.addMethod = function(jsSelector, method, klass) {
		Object.defineProperty(klass.fn.prototype, jsSelector, {
			value: method.fn, configurable: true, writable: true
		});
		klass.methods[method.selector] = method;
		method.methodClass = klass;
		method.jsSelector = jsSelector;

        klass.organization.elements.addElement(method.category);

        for(var i=0; i<method.superSends.length; i++) {
            installSuperSendHandler(method.superSends[i], klass);
        };

        if(initialized) {
            for(var i=0; i<method.messageSends.length; i++) {
                installNewDnuHandler(method.messageSends[i]);
            };
        };
	};

    st.removeMethod = function(method) {
        var protocol = method.category;
        var shouldDeleteProtocol;
        var klass = method.methodClass;

        delete klass.fn.prototype[st.selector(method.selector)];
	    delete klass.methods[method.selector];

        for(var i=0; i<klass.methods; i++) {
            if(klass.methods[i].category == protocol) {
                shouldDeleteProtocol = true;
            };
        };
        if(shouldDeleteProtocol) {
            klass.organization.elements.removeElement(protocol);
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

	st.withContext = function(fn, receiver, selector, method, args) {
		if(st.thisContext) {
			return inContext(fn);
		} else {
			try {return inContext(fn)}
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
    
	function inContext(fn, receiver, selector, method, args) {
		var context = pushContext(receiver, selector, method, args);
		var result = fn();
		popContext(context);
		return result;
	};


	/* Handles Smalltalk errors. Triggers the registered ErrorHandler 
	   (See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
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

    /* Convert a Smalltalk selector into a JS selector */

    st.selector = function(string) {
        var selector = '_' + string;
	    selector = selector.replace(/:/g, '_');
	    selector = selector.replace(/[+]/g, '_plus');
	    selector = selector.replace(/-/g, '_minus');
	    selector = selector.replace(/[*]/g ,'_star');
	    selector = selector.replace(/[\/]/g ,'_slash');
	    selector = selector.replace(/>/g ,'_gt');
	    selector = selector.replace(/</g ,'_lt');
	    selector = selector.replace(/=/g ,'_eq');
	    selector = selector.replace(/,/g ,'_comma');
	    selector = selector.replace(/[@]/g ,'_at');
        return selector
    };

    st.superSelector = function(string) {
        return '$super' + st.selector(string);
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

    st.assert = function(boolean) {
        if(boolean.klass === smalltalk.Boolean) {
            return boolean;
        } else {
            smalltalk.NonBooleanReceiver._new()._object_(boolean)._signal();
        }
    }

    /* Smalltalk initilization. Called on page load */

    st.initialize = function() {
        if(initialized) {return false};

        classes.forEach(function(klass) {
            st.init(klass);
        });
        classes.forEach(function(klass) {
            klass._initialize();
        });

        initialized = true;
    };
};

Smalltalk.prototype = new SmalltalkObject();
Smalltalk.prototype.constructor = Smalltalk;

function SmalltalkMethodContext(receiver, selector, method, temps, home) {
	this.receiver    = receiver;
    this.selector    = selector;
	this.method      = method;
	this.temps       = temps || {};
	this.homeContext = home;

    this.resume = function() {
        //Brutally set the receiver as thisContext, then re-enter the function
        smalltalk.thisContext = this;
        return this.method.apply(receiver, temps);
    };
};

SmalltalkMethodContext.prototype = new SmalltalkObject();
SmalltalkMethodContext.prototype.constructor = SmalltalkMethodContext;

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


if(this.jQuery) {
	this.jQuery.allowJavaScriptCalls = true;
}


var nil       = new SmalltalkNil();
var smalltalk = new Smalltalk();

/* 
 * Answer the smalltalk representation of o. 
 * Used in message sends
 */

var _st = function(o) {
    if(typeof o === 'undefined') {return nil};
    if(o.klass) {return o};
    return smalltalk.JSObjectProxy._on_(o);
}; 


/***************************************** BOOTSTRAP ******************************************/

smalltalk.wrapClassName("Object", "Kernel-Objects", SmalltalkObject, undefined, false);
smalltalk.wrapClassName("Behavior", "Kernel-Classes", SmalltalkBehavior, smalltalk.Object, false);
smalltalk.wrapClassName("Metaclass", "Kernel-Classes", SmalltalkMetaclass, smalltalk.Behavior, false);
smalltalk.wrapClassName("Class", "Kernel-Classes", SmalltalkClass, smalltalk.Behavior, false);

smalltalk.Object.klass.superclass = smalltalk.Class;


smalltalk.wrapClassName("Smalltalk", "Kernel-Objects", Smalltalk, smalltalk.Object, false);
smalltalk.wrapClassName("Package", "Kernel-Objects", SmalltalkPackage, smalltalk.Object, false);
smalltalk.wrapClassName("CompiledMethod", "Kernel-Objects", SmalltalkMethod, smalltalk.Object, false);
smalltalk.wrapClassName("Organizer", "Kernel-Objects", SmalltalkOrganizer, smalltalk.Object, false);


smalltalk.wrapClassName("Number", "Kernel", Number, smalltalk.Object);
smalltalk.wrapClassName("BlockClosure", "Kernel", Function, smalltalk.Object);
smalltalk.wrapClassName("Boolean", "Kernel", Boolean, smalltalk.Object);
smalltalk.wrapClassName("Date", "Kernel", Date, smalltalk.Object);
smalltalk.wrapClassName("UndefinedObject", "Kernel", SmalltalkNil, smalltalk.Object, false);

smalltalk.wrapClassName("Collection", "Kernel", null, smalltalk.Object, false);
smalltalk.wrapClassName("SequenceableCollection", "Kernel", null, smalltalk.Collection, false);
smalltalk.wrapClassName("CharacterArray", "Kernel", null, smalltalk.SequenceableCollection, false);
smalltalk.wrapClassName("String", "Kernel", String, smalltalk.CharacterArray);
smalltalk.wrapClassName("Symbol", "Kernel", SmalltalkSymbol, smalltalk.CharacterArray, false);
smalltalk.wrapClassName("Array", "Kernel", Array, smalltalk.SequenceableCollection);
smalltalk.wrapClassName("RegularExpression", "Kernel", RegExp, smalltalk.String);

smalltalk.wrapClassName("Error", "Kernel", Error, smalltalk.Object);
smalltalk.wrapClassName("MethodContext", "Kernel", SmalltalkMethodContext, smalltalk.Object, false);

/* Alias definitions */

smalltalk.alias(smalltalk.Array, "OrderedCollection");
smalltalk.alias(smalltalk.Date, "Time");
