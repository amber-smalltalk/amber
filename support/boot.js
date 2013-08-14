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

/* Global Smalltalk objects. */
// The globals below all begin with `global_' prefix.
// This prefix is to advice developers to avoid their usage,
// instead using local versions smalltalk, nil, _st that are
// provided by appropriate wrappers to each package.
// The plan is to use different module loader (and slightly change the wrappers)
// so that these globals are hidden completely inside the exports/imports of the module loader.
// DO NOT USE DIRECTLY! CAN DISAPPEAR AT ANY TIME.
var global_smalltalk, global_nil, global__st;

(function () {

/* Reconfigurable micro composition system, https://github.com/amber-smalltalk/brikz */

function Brikz(api, apiKey, initKey) {
	var brikz = this, backup = {};
	apiKey = apiKey || 'exports';
	initKey = initKey || '__init__';

	function mixin(src, target, what) {
		for (var keys = Object.keys(what||src), l=keys.length, i=0; i<l; ++i) {
			var value = src[keys[i]];
			if (typeof value !== "undefined") { target[keys[i]] = value; }
		}
		return target;
	}

	var d={value: null, enumerable: false, configurable: true, writable: true};
	Object.defineProperties(this, { ensure: d, rebuild: d });

	this.rebuild = function () {
		Object.keys(backup).forEach(function (key) {
			mixin({}, api, (backup[key]||0)[apiKey]);
		});
		var oapi = mixin(api, {}), order = [], chk = {};
		brikz.ensure = function(key) {
			var b = brikz[key], bak = backup[key];
			mixin({}, api, api);
			while (typeof b === "function") { b = new b(brikz, api, bak); }
			if (b && !chk[key]) { chk[key]=true; order.push(b); }
			if (b && !b[apiKey]) { b[apiKey] = mixin(api, {}); }
			return brikz[key] = b;
		};
		Object.keys(brikz).forEach(function (key) { brikz.ensure(key); });
		brikz.ensure = null;
		mixin(oapi, mixin({}, api, api));
		order.forEach(function(brik) { mixin(brik[apiKey] || {}, api); });
		order.forEach(function(brik) { brik[initKey] && brik[initKey](); });
		backup = mixin(brikz, {});
	};
}

/* Brikz end */

function inherits(child, parent) {
	child.prototype = Object.create(parent.prototype, {
		constructor: { value: child,
			enumerable: false, configurable: true, writable: true }
	});
	return child;
}

/* Smalltalk foundational objects */

function SmalltalkObject() {}

function Smalltalk() {}
inherits(Smalltalk, SmalltalkObject);

var api = new Smalltalk();
var brikz = new Brikz(api);

function RootBrik(brikz, st) {

	function SmalltalkNil() {}
	inherits(SmalltalkNil, SmalltalkObject);

	this.nil = new SmalltalkNil();

	this.__init__ = function () {
		st.wrapClassName("Object", "Kernel-Objects", SmalltalkObject, undefined, false);
		st.wrapClassName("Smalltalk", "Kernel-Infrastructure", Smalltalk, st.Object, false);
		st.wrapClassName("UndefinedObject", "Kernel-Objects", SmalltalkNil, st.Object, false);
	};
}

function OrganizeBrik(brikz, st) {

	brikz.ensure("augments");
	brikz.ensure("root");

	function SmalltalkOrganizer () {}
	function SmalltalkPackageOrganizer () {
		this.elements = [];
	}
	function SmalltalkClassOrganizer () {
		this.elements = [];
	}

	inherits(SmalltalkOrganizer, SmalltalkObject);
	inherits(SmalltalkPackageOrganizer, SmalltalkOrganizer);
	inherits(SmalltalkClassOrganizer, SmalltalkOrganizer);

	this.__init__ = function () {
		st.wrapClassName("Organizer", "Kernel-Infrastructure", SmalltalkOrganizer, st.Object, false);
		st.wrapClassName("PackageOrganizer", "Kernel-Infrastructure", SmalltalkPackageOrganizer, st.Organizer, false);
		st.wrapClassName("ClassOrganizer", "Kernel-Infrastructure", SmalltalkClassOrganizer, st.Organizer, false);
	};

	this.setupClassOrganization = function (klass) {
		klass.organization = new SmalltalkClassOrganizer();
		klass.organization.theClass = klass;
	};

	this.setupPackageOrganization = function (pkg) {
		pkg.organization = new SmalltalkPackageOrganizer();
	};

	this.addOrganizationElement = function (owner, element) {
		owner.organization.elements.addElement(element);
	};

	this.removeOrganizationElement = function (owner, element) {
		owner.organization.elements.removeElement(element);
	};
}

function DNUBrik(brikz, st) {

	brikz.ensure("selectorConversion");
	brikz.ensure("messageSend");
	var manip = brikz.ensure("manipulation");

	/* Method not implemented handlers */

	var methods = [], checker = Object.create(null);
	this.selectors = [];

	this.get = function (string) {
		var index = this.selectors.indexOf(string);
		if(index !== -1) {
			return methods[index];
		}
		this.selectors.push(string);
		var selector = st.selector(string);
		checker[selector] = true;
		var method = {jsSelector: selector, fn: this.createHandler(selector)};
		methods.push(method);
		return method;
	};

	this.isSelector = function (selector) {
		return checker[selector];
	};

	/* Dnu handler method */

	this.createHandler = function (selector) {
		var handler = function() {
			var args = Array.prototype.slice.call(arguments);
			return brikz.messageSend.messageNotUnderstood(this, selector, args);
		};

		return handler;
	};

	this.installHandlers = function (klass) {
		for(var i=0; i<methods.length; i++) {
			manip.installMethodIfAbsent(methods[i], klass);
		}
	};
}

function ClassInitBrik(brikz, st) {

	var dnu = brikz.ensure("dnu");
	var manip = brikz.ensure("manipulation");
	var nil = brikz.ensure("root").nil;

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

		if(klass === st.Object || klass.wrapped) {
			dnu.installHandlers(klass);
		}
	};

	function copySuperclass(klass, superclass) {
		var inheritedMethods = {};
		deinstallAllMethods(klass);
		for (superclass = superclass || klass.superclass;
			superclass && superclass !== nil;
			superclass = superclass.superclass) {
			for (var keys = Object.keys(superclass.methods), i = 0; i < keys.length; i++) {
				inheritMethodIfAbsent(superclass.methods[keys[i]]);
			}
		}
		manip.reinstallMethods(klass);

		function inheritMethodIfAbsent(method) {
			var selector = method.selector;

			//TODO: prepare klass methods into inheritedMethods to only test once
			//TODO: Object.create(null) to ditch hasOwnProperty call (very slow)
			if(klass.methods.hasOwnProperty(selector) || inheritedMethods.hasOwnProperty(selector)) {
				return;
			}

			manip.installMethod(method, klass);
			inheritedMethods[method.selector] = true;
		}

	}

	function deinstallAllMethods(klass) {
		var proto = klass.fn.prototype;
		for(var keys = Object.getOwnPropertyNames(proto), i=0; i<keys.length; i++) {
			var key = keys[i];
			if (dnu.isSelector(key)) {
				proto[key] = null;
			}
		}
	}
}

function ManipulationBrik(brikz, st) {

	this.installMethodIfAbsent = function (handler, klass) {
		if(!klass.fn.prototype[handler.jsSelector]) {
			installMethod(handler, klass);
		}
	};

	function installMethod (method, klass) {
		Object.defineProperty(klass.fn.prototype, method.jsSelector, {
			value: method.fn,
			enumerable: false, configurable: true, writable: true
		});
	}
	this.installMethod = installMethod;

	this.wireKlass = function (klass) {
		Object.defineProperty(klass.fn.prototype, "klass", {
			value: klass,
			enumerable: false, configurable: true, writable: true
		});
	};

	this.reinstallMethods = function (klass) {
		var methods = klass.methods;
		for(var keys = Object.keys(methods), i=0; i<keys.length; i++) {
			installMethod(methods[keys[i]], klass);
		}
	};
}

function ClassesBrik(brikz, st) {

	var org = brikz.ensure("organize");
	var manip = brikz.ensure("manipulation");
	var nil = brikz.ensure("root").nil;

	function SmalltalkPackage() {}
	function SmalltalkBehavior() {}
	function SmalltalkClass() {}
	function SmalltalkMetaclass() {
		this.meta = true;
	}

	inherits(SmalltalkPackage, SmalltalkObject);
	inherits(SmalltalkBehavior, SmalltalkObject);
	inherits(SmalltalkClass, SmalltalkBehavior);
	inherits(SmalltalkMetaclass, SmalltalkBehavior);

	this.__init__ = function () {
		st.wrapClassName("Behavior", "Kernel-Classes", SmalltalkBehavior, st.Object, false);
		st.wrapClassName("Metaclass", "Kernel-Classes", SmalltalkMetaclass, st.Behavior, false);
		st.wrapClassName("Class", "Kernel-Classes", SmalltalkClass, st.Behavior, false);

		st.Object.klass.superclass = st.Class;

		st.wrapClassName("Package", "Kernel-Infrastructure", SmalltalkPackage, st.Object, false);
	};

	/* Smalltalk classes */

	var classes = [];
	var wrappedClasses = [];

	/* We hold all Packages in a separate Object */

	st.packages = {};

	/* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

	function pkg(spec) {
		var that = new SmalltalkPackage();
		that.pkgName = spec.pkgName;
		org.setupPackageOrganization(that);
		that.properties = spec.properties || {};
		return that;
	}

	/* Smalltalk class creation. A class is an instance of an automatically
		created metaclass object. Newly created classes (not their metaclass)
		should be added to the smalltalk object, see smalltalk.addClass().
		Superclass linking is *not* handled here, see smalltalk.init()  */

	function klass(spec) {
		spec = spec || {};
		var meta = metaclass(spec);
		var that = meta.instanceClass;
		that.fn = spec.fn || inherits(function () {}, spec.superclass.fn);
		setupClass(that, spec);

		that.className = spec.className;
		that.wrapped   = spec.wrapped || false;
		meta.className = spec.className + ' class';
		if(spec.superclass) {
			that.superclass = spec.superclass;
			meta.superclass = spec.superclass.klass;
		}
		return that;
	}

	function metaclass(spec) {
		spec = spec || {};
		var that = new SmalltalkMetaclass();
		that.fn = inherits(function () {}, spec.superclass ? spec.superclass.klass.fn : SmalltalkClass);
		that.instanceClass = new that.fn();
		setupClass(that);
		return that;
	}

	SmalltalkBehavior.prototype.toString = function () {
		return 'Smalltalk ' + this.className;
	};

	function setupClass(klass, spec) {
		spec = spec || {};
		klass.iVarNames = spec.iVarNames || [];
		klass.pkg = spec.pkg;

		org.setupClassOrganization(klass);
		Object.defineProperty(klass, "methods", {
			value: {},
			enumerable: false, configurable: true, writable: true
		});
		manip.wireKlass(klass);
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
		if (superclass == nil) { superclass = null; }
		rawAddClass(pkgName, className, superclass, iVarNames, false, null);
	};

	function rawAddClass(pkgName, className, superclass, iVarNames, wrapped, fn) {
		var pkg = st.addPackage(pkgName);
		if(st[className] && st[className].superclass == superclass) {
//            st[className].superclass = superclass;
			st[className].iVarNames = iVarNames || [];
			if (pkg) st[className].pkg = pkg;
			if (fn) {
				fn.prototype = st[className].fn.prototype;
				st[className].fn = fn;
				fn.prototype.constructor = fn;
			}
		} else {
			if(st[className]) {
				st.removeClass(st[className]);
			}
			st[className] = klass({
				className: className,
				superclass: superclass,
				pkg: pkg,
				iVarNames: iVarNames,
				fn: fn,
				wrapped: wrapped
			});
		}

		classes.addElement(st[className]);
		org.addOrganizationElement(pkg, st[className]);
	}

	st.removeClass = function(klass) {
		org.removeOrganizationElement(klass.pkg, klass);
		classes.removeElement(klass);
		delete st[klass.className];
	};

	/* Create a new class wrapping a JavaScript constructor, and add it to the
	 global smalltalk object. Package is lazily created if it does not exist with given name. */

	st.wrapClassName = function(className, pkgName, fn, superclass, wrapped) {
		wrapped = wrapped !== false;
		rawAddClass(pkgName, className, superclass, st[className] && st[className].iVarNames, wrapped, fn);
		if(wrapped) {
			wrappedClasses.addElement(st[className]);
		}
	};

	/* Create an alias for an existing class */

	st.alias = function(klass, alias) {
		st[alias] = klass;
	};

	/* Answer all registered Smalltalk classes */
	//TODO: remove the function and make smalltalk.classes an array

	st.classes = function() {
		return classes;
	};

	st.wrappedClasses = function() {
		return wrappedClasses;
	};

	/* Answer all registered Packages as Array */
	// TODO: Remove this hack

	st.packages.all = function() {
		var packages = [];
		for(var i in st.packages) {
			if(!st.packages.hasOwnProperty(i) || typeof(st.packages[i]) === "function") continue;
			packages.push(st.packages[i]);
		}
		return packages;
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

	st.allSubclasses = function(klass) {
		var result, subclasses;
		result = subclasses = st.subclasses(klass);
		subclasses.forEach(function(subclass) {
			result.push.apply(result, st.allSubclasses(subclass));
		});

		return result;
	};

}

function MethodsBrik(brikz, st) {

	var manip = brikz.ensure("manipulation");
	var org = brikz.ensure("organize");
	var stInit = brikz.ensure("stInit");
	var dnu = brikz.ensure("dnu");
	brikz.ensure("selectorConversion");
	brikz.ensure("classes");
	brikz.ensure("classInit");

	function SmalltalkMethod() {}
	inherits(SmalltalkMethod, SmalltalkObject);

	this.__init__ = function () {
		st.wrapClassName("CompiledMethod", "Kernel-Methods", SmalltalkMethod, st.Object, false);
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

	function installNewDnuHandler(newHandler) {
		manip.installMethodIfAbsent(newHandler, st.Object);
		var wrappedClasses = st.wrappedClasses();
		for(var i = 0; i < wrappedClasses.length; i++) {
			manip.installMethodIfAbsent(newHandler, wrappedClasses[i]);
		}
	}

	/* Add/remove a method to/from a class */

	st.addMethod = function (method, klass) {
		if (!(method.jsSelector)) {
			method.jsSelector = st.selector(method.selector);
		}
		manip.installMethod(method, klass);
		klass.methods[method.selector] = method;
		method.methodClass = klass;

		// During the bootstrap, #addCompiledMethod is not used.
		// Therefore we populate the organizer here too
		org.addOrganizationElement(klass, method.category);

		propagateMethodChange(klass);

		for(var i=0; i<method.messageSends.length; i++) {
			var dnuHandler = dnu.get(method.messageSends[i]);
			if(stInit.initialized()) {
				installNewDnuHandler(dnuHandler);
			}
		}
	}

	function propagateMethodChange(klass) {
		// If already initialized (else it will be done later anyway),
		// re-initialize all subclasses to ensure the method change
		// propagation (for wrapped classes, not using the prototype
		// chain).

		//TODO: optimize, only one method need to be updated, not all of them
		if (stInit.initialized()) {
			st.allSubclasses(klass).forEach(function (subclass) {
				st.initClass(subclass);
			});
		}
	}

	st.removeMethod = function(method, klass) {
		if (klass !== method.methodClass) {
			throw new Error(
				"Refusing to remove method "
					+ method.methodClass.className+">>"+method.selector
					+ " from different class "
					+ klass.className);
		}

		delete klass.fn.prototype[st.selector(method.selector)];
		delete klass.methods[method.selector];

		st.initClass(klass);
		propagateMethodChange(klass);

		// Do *not* delete protocols from here.
		// This is handled by #removeCompiledMethod
	};

	/* Answer all method selectors based on dnu handlers */

	st.allSelectors = function() {
		return dnu.selectors;
	};

}

function AugmentsBrik(brikz, st) {

	/* Make sure that console is defined */

	if(typeof console === "undefined") {
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
		if(typeof el === 'undefined') { return; }
		if(this.indexOf(el) == -1) {
			this.push(el);
		}
	};

	Array.prototype.removeElement = function(el) {
		var i = this.indexOf(el);
		if (i !== -1) { this.splice(i, 1); }
	};
}

function SmalltalkInitBrik(brikz, st) {

	brikz.ensure("classInit");
	brikz.ensure("classes");
	var nil = brikz.ensure("root").nil;

	var initialized = false;

	/* Smalltalk initialization. Called on page load */

	st.initialize = function() {
		if(initialized) { return; }

		st.classes().forEach(function(klass) {
			st.init(klass);
		});

		runnable();

		st.classes().forEach(function(klass) {
			klass._initialize();
		});

		initialized = true;
	};

	this.initialized = function () {
		return initialized;
	};

	this.__init__ = function () {
		st.wrapClassName("Number", "Kernel-Objects", Number, st.Object);
		st.wrapClassName("BlockClosure", "Kernel-Methods", Function, st.Object);
		st.wrapClassName("Boolean", "Kernel-Objects", Boolean, st.Object);
		st.wrapClassName("Date", "Kernel-Objects", Date, st.Object);

		st.addClass("Collection", st.Object, null, "Kernel-Collections");
		st.addClass("IndexableCollection", st.Collection, null, "Kernel-Collections");
		st.addClass("SequenceableCollection", st.IndexableCollection, null, "Kernel-Collections");
		st.addClass("CharacterArray", st.SequenceableCollection, null, "Kernel-Collections");
		st.wrapClassName("String", "Kernel-Collections", String, st.CharacterArray);
		st.wrapClassName("Array", "Kernel-Collections", Array, st.SequenceableCollection);
		st.wrapClassName("RegularExpression", "Kernel-Collections", RegExp, st.Object);

		st.wrapClassName("Error", "Kernel-Exceptions", Error, st.Object);

		/* Alias definitions */

		st.alias(st.Array, "OrderedCollection");
		st.alias(st.Date, "Time");

		/*
		 * Answer the smalltalk representation of o.
		 * Used in message sends
		 */

		st._st = function (o) {
			if(o == null) {return nil;}
			if(o.klass) {return o;}
			return st.JSObjectProxy._on_(o);
		};

	};
}

function PrimitivesBrik(brikz, st) {

	/* Unique ID number generator */

	var oid = 0;
	st.nextId = function() {
		oid += 1;
		return oid;
	};

	/* Converts a JavaScript object to valid Smalltalk Object */
	st.readJSObject = function(js) {
		var object = js;
		var readObject = (js.constructor === Object);
		var readArray = (js.constructor === Array);

		if(readObject) {
			object = st.Dictionary._new();
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
		if (undefined !== shouldBeBoolean && shouldBeBoolean.klass === st.Boolean) {
			return shouldBeBoolean == true;
		} else {
			st.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
		}
	};

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

	st.globalJsVariables = ['jQuery', 'window', 'document', 'process', 'global'];

}

function RuntimeBrik(brikz, st) {

	brikz.ensure("selectorConversion");
	var nil = brikz.ensure("root").nil;

	function SmalltalkMethodContext(home, setup) {
		this.homeContext = home;
		this.setup       = setup || function() {};
		this.pc          = 0;
	}

	inherits(SmalltalkMethodContext, SmalltalkObject);

	this.__init__ = function () {
		st.wrapClassName("MethodContext", "Kernel-Methods", SmalltalkMethodContext, st.Object, false);

		// Fallbacks
		SmalltalkMethodContext.prototype.locals = {};
		SmalltalkMethodContext.prototype.receiver = null;
		SmalltalkMethodContext.prototype.selector = null;
		SmalltalkMethodContext.prototype.lookupClass = null;

		SmalltalkMethodContext.prototype.fill = function(receiver, selector, locals, lookupClass) {
			this.receiver    = receiver;
			this.selector    = selector;
			this.locals      = locals || {};
			this.lookupClass = lookupClass;
		};

		SmalltalkMethodContext.prototype.fillBlock = function(locals, ctx, index) {
			this.locals        = locals || {};
			this.outerContext  = ctx;
			this.index         = index || 0;
		};

		SmalltalkMethodContext.prototype.init = function() {
			var home = this.homeContext;
			if(home) {
				home.init();
			}

			this.setup(this);
		};

		SmalltalkMethodContext.prototype.method = function() {
			var method;
			var lookup = this.lookupClass || this.receiver.klass;
			while(!method && lookup) {
				method = lookup.methods[st.convertSelector(this.selector)];
				lookup = lookup.superclass;
			}
			return method;
		};
	};

	/* This is the current call context object. While it is publicly available,
	 Use smalltalk.getThisContext() instead which will answer a safe copy of
	 the current context */

	st.thisContext = undefined;

	st.withContext = function(worker, setup) {
		if(st.thisContext) {
			st.thisContext.pc++;
			return inContext(worker, setup);
		} else {
			try {
				return inContext(worker, setup);
			} catch(error) {
				if(error.smalltalkError) {
					handleError(error);
				} else {
					var errorWrapper = st.JavaScriptException._on_(error);
					try {errorWrapper._signal();} catch(ex) {}
					errorWrapper._context_(st.getThisContext());
					handleError(errorWrapper);
				}
				// Reset the context stack in any case
				st.thisContext = undefined;
				// Throw the exception anyway, as we want to stop
				// the execution to avoid infinite loops
				// Update: do not throw the exception. It's really annoying.
				// throw error;
			}
		}
	};

	function inContext(worker, setup) {
		var context = pushContext(setup);
		var result = worker(context);
		popContext(context);
		return result;
	}

	/* Handles Smalltalk errors. Triggers the registered ErrorHandler
		(See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
		st.ErrorHandler._current()._handleError_(error);
	}

	/* Handle thisContext pseudo variable */

	st.getThisContext = function() {
		if(st.thisContext) {
			st.thisContext.init();
			return st.thisContext;
		} else {
			return nil;
		}
	};

	function pushContext(setup) {
		return st.thisContext = new SmalltalkMethodContext(st.thisContext, setup);
	}

	function popContext(context) {
		st.thisContext = context.homeContext;
	}

}

function MessageSendBrik(brikz, st) {

	brikz.ensure("selectorConversion");
	var nil = brikz.ensure("root").nil;

	/* Handles unhandled errors during message sends */
	// simply send the message and handle #dnu:

	st.send = function(receiver, selector, args, klass) {
		var method;
		if(receiver === null) {
			receiver = nil;
		}
		method = klass ? klass.fn.prototype[selector] : receiver.klass && receiver[selector];
		if(method) {
			return method.apply(receiver, args);
		} else {
			return messageNotUnderstood(receiver, selector, args);
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
	}

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
	}

	if(typeof jQuery !== "undefined") {
		jQuery.allowJavaScriptCalls = true;
	}

	this.messageNotUnderstood = messageNotUnderstood;
}

function SelectorConversionBrik(brikz, st) {
	/* Convert a Smalltalk selector into a JS selector */

	st.selector = function(string) {
		var selector = '_' + string;
		selector = selector.replace(/:/g, '_');
		selector = selector.replace(/[\&]/g, '_and');
		selector = selector.replace(/[\|]/g, '_or');
		selector = selector.replace(/[+]/g, '_plus');
		selector = selector.replace(/-/g, '_minus');
		selector = selector.replace(/[*]/g ,'_star');
		selector = selector.replace(/[\/]/g ,'_slash');
		selector = selector.replace(/[\\]/g ,'_backslash');
		selector = selector.replace(/[\~]/g ,'_tild');
		selector = selector.replace(/>/g ,'_gt');
		selector = selector.replace(/</g ,'_lt');
		selector = selector.replace(/=/g ,'_eq');
		selector = selector.replace(/,/g ,'_comma');
		selector = selector.replace(/[@]/g ,'_at');
		return selector;
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
	}

	function convertBinarySelector(selector) {
		return selector
			.replace(/^_/, '')
			.replace(/_and/g, '&')
			.replace(/_or/g, '|')
			.replace(/_plus/g, '+')
			.replace(/_minus/g, '-')
			.replace(/_star/g, '*')
			.replace(/_slash/g, '/')
			.replace(/_backslash/g, '\\')
			.replace(/_tild/g, '~')
			.replace(/_gt/g, '>')
			.replace(/_lt/g, '<')
			.replace(/_eq/g, '=')
			.replace(/_comma/g, ',')
			.replace(/_at/g, '@');
	}
}

/* Making smalltalk that can load */

brikz.root = RootBrik;
brikz.dnu = DNUBrik;
brikz.organize = OrganizeBrik;
brikz.selectorConversion = SelectorConversionBrik;
brikz.classInit = ClassInitBrik;
brikz.manipulation = ManipulationBrik;
brikz.classes = ClassesBrik;
brikz.methods = MethodsBrik;
brikz.stInit = SmalltalkInitBrik;
brikz.augments = AugmentsBrik;

brikz.rebuild();

/* Making smalltalk that can run */

function runnable () {
	brikz.messageSend = MessageSendBrik;
	brikz.runtime = RuntimeBrik;
	brikz.primitives = PrimitivesBrik;

	brikz.rebuild();
};

global_smalltalk = api;
global_nil = brikz.root.nil;
global__st = api._st;
api._st = null;

})();
