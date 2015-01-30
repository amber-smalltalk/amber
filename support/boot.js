/* ====================================================================
 |
 |   Amber Smalltalk
 |   http://amber-lang.net
 |
 ======================================================================

 ======================================================================
 |
 | Copyright (c) 2010-2014
 | Nicolas Petton <petton.nicolas@gmail.com>
 |
 | Copyright (c) 2012-2014
 | The Amber team https://github.com/amber-smalltalk?tab=members
 | Amber contributors https://github.com/amber-smalltalk/amber/graphs/contributors
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

//jshint eqnull:true

define("amber/boot", [ 'require', './browser-compatibility' ], function (require) {

	/* Reconfigurable micro composition system, https://github.com/amber-smalltalk/brikz */

	function Brikz(api, apiKey, initKey) {
		var brikz = this, backup = {};
		apiKey = apiKey || 'exports';
		initKey = initKey || '__init__';

		function mixin(src, target, what) {
			for (var keys = Object.keys(what||src), l=keys.length, i=0; i<l; ++i) {
				if (src == null) { target[keys[i]] = undefined; } else {
					var value = src[keys[i]];
					if (typeof value !== "undefined") { target[keys[i]] = value; }
				}
			}
			return target;
		}

		var d={value: null, enumerable: false, configurable: true, writable: true};
		Object.defineProperties(this, { ensure: d, rebuild: d });
		var exclude = mixin(this, {});

		this.rebuild = function () {
			Object.keys(backup).forEach(function (key) {
				mixin(null, api, (backup[key]||0)[apiKey]||{});
			});
			var oapi = mixin(api, {}), order = [], chk = {};
			brikz.ensure = function(key) {
				if (key in exclude) { return null; }
				var b = brikz[key], bak = backup[key];
				mixin(null, api, api);
				while (typeof b === "function") { b = new b(brikz, api, bak); }
				if (b && !chk[key]) { chk[key]=true; order.push(b); }
				if (b && !b[apiKey]) { b[apiKey] = mixin(api, {}); }
				brikz[key] = b;
				return b;
			};
			Object.keys(brikz).forEach(function (key) { brikz.ensure(key); });
			brikz.ensure = null;
			mixin(oapi, mixin(null, api, api));
			order.forEach(function(brik) { mixin(brik[apiKey] || {}, api); });
			order.forEach(function(brik) { if (brik[initKey]) brik[initKey](); });
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

	var globals = {};
	globals.SmalltalkSettings = {};
	var api = {};
	var brikz = new Brikz(api);

	function RootBrik(brikz, st) {

		/* Smalltalk foundational objects */

		/* SmalltalkRoot is the hidden root of the Amber hierarchy.
		 All objects including `Object` inherit from SmalltalkRoot */
		function SmalltalkRoot() {}
		function SmalltalkProtoObject() {}
		inherits(SmalltalkProtoObject, SmalltalkRoot);
		function SmalltalkObject() {}
		inherits(SmalltalkObject, SmalltalkProtoObject);
		function SmalltalkNil() {}
		inherits(SmalltalkNil, SmalltalkObject);

		this.Object = SmalltalkObject;
		this.nil = new SmalltalkNil();

		// Adds an `isNil` property to the `nil` object.  When sending
		// nil objects from one environment to another, doing
		// `anObject == nil` (in JavaScript) does not always answer
		// true as the referenced nil object might come from the other
		// environment.
		Object.defineProperty(this.nil, 'isNil', {
			value: true,
			enumerable: false, configurable: false, writable: false
		});

		// Hidden root class of the system.
		this.rootAsClass = {fn: SmalltalkRoot};

		this.__init__ = function () {
			st.addPackage("Kernel-Objects");
			st.wrapClassName("ProtoObject", "Kernel-Objects", SmalltalkProtoObject, undefined, false);
			st.wrapClassName("Object", "Kernel-Objects", SmalltalkObject, globals.ProtoObject, false);
			st.wrapClassName("UndefinedObject", "Kernel-Objects", SmalltalkNil, globals.Object, false);
		};
	}

	function OrganizeBrik(brikz, st) {

		brikz.ensure("augments");
		var SmalltalkObject = brikz.ensure("root").Object;

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
			st.addPackage("Kernel-Infrastructure");
			st.wrapClassName("Organizer", "Kernel-Infrastructure", SmalltalkOrganizer, globals.Object, false);
			st.wrapClassName("PackageOrganizer", "Kernel-Infrastructure", SmalltalkPackageOrganizer, globals.Organizer, false);
			st.wrapClassName("ClassOrganizer", "Kernel-Infrastructure", SmalltalkClassOrganizer, globals.Organizer, false);
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
		var rootAsClass = brikz.ensure("root").rootAsClass;

		/* Method not implemented handlers */

		var methods = [], methodDict = Object.create(null);
		this.selectors = [];
		this.jsSelectors = [];

		this.make = function (stSelector, targetClasses) {
			var method = methodDict[stSelector];
			if(method) return;
			var jsSelector = st.st2js(stSelector);
			this.selectors.push(stSelector);
			this.jsSelectors.push(jsSelector);
			method = {jsSelector: jsSelector, fn: createHandler(stSelector)};
			methodDict[stSelector] = method;
			methods.push(method);
			manip.installMethod(method, rootAsClass);
			targetClasses.forEach(function (target) {
				manip.installMethod(method, target);
			});
			return method;
		};

		/* Dnu handler method */

		function createHandler(stSelector) {
			return function() {
				return brikz.messageSend.messageNotUnderstood(this, stSelector, arguments);
			};
		}
	}

	function ClassInitBrik(brikz, st) {

		var dnu = brikz.ensure("dnu");
		var manip = brikz.ensure("manipulation");

		/* Initialize a class in its class hierarchy. Handle both classes and
		 metaclasses. */

		st.init = function(klass) {
			initClass(klass);
			if(klass.klass && !klass.meta) {
				initClass(klass.klass);
			}
		};

		function initClass(klass) {
			if(klass.wrapped) {
				copySuperclass(klass);
			}
		}

		this.initClass = initClass;

		function copySuperclass(klass) {
			var superclass = klass.superclass,
				localMethods = klass.methods,
				protectedJsSelectors = {};
			Object.keys(localMethods).forEach(function (each) {
				protectedJsSelectors[localMethods[each].jsSelector] = true;
			});
			var superproto = superclass.fn.prototype;
			dnu.jsSelectors.forEach(function (selector) {
				if (!protectedJsSelectors[selector]) {
					manip.installMethod({
						jsSelector: selector,
						fn: superproto[selector]
					}, klass);
				}
			});
		}
	}

	function ManipulationBrik(brikz, st) {
		this.installMethod = function (method, klass) {
			Object.defineProperty(klass.fn.prototype, method.jsSelector, {
				value: method.fn,
				enumerable: false, configurable: true, writable: true
			});
		};
	}


	function PackagesBrik(brikz, st) {

		var org = brikz.ensure("organize");
		var root = brikz.ensure("root");
		var nil = root.nil;
		var SmalltalkObject = root.Object;

		function SmalltalkPackage() {}

		inherits(SmalltalkPackage, SmalltalkObject);

		this.__init__ = function () {
			st.addPackage("Kernel-Infrastructure");
			st.wrapClassName("Package", "Kernel-Infrastructure", SmalltalkPackage, globals.Object, false);
		};

		st.packages = {};

		/* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

		function pkg(spec) {
			var that = new SmalltalkPackage();
			that.pkgName = spec.pkgName;
			org.setupPackageOrganization(that);
			that.properties = spec.properties || {};
			return that;
		}

		/* Add a package to the smalltalk.packages object, creating a new one if needed.
		 If pkgName is null or empty we return nil, which is an allowed package for a class.
		 If package already exists we still update the properties of it. */

		st.addPackage = function(pkgName, properties) {
			if(!pkgName || pkgName.match(/[\x00-\x1f\x80-\x9f*?:<>|/\\#!@%]/)) {return nil;}
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
	}

	function ClassesBrik(brikz, st) {

		var org = brikz.ensure("organize");
		var root = brikz.ensure("root");
		var classInit = brikz.ensure("classInit");
		var nil = root.nil;
		var rootAsClass = root.rootAsClass;
		var SmalltalkObject = root.Object;
		rootAsClass.klass = {fn: SmalltalkClass};

		function SmalltalkBehavior() {}
		function SmalltalkClass() {}
		function SmalltalkMetaclass() {}

		inherits(SmalltalkBehavior, SmalltalkObject);
		inherits(SmalltalkClass, SmalltalkBehavior);
		inherits(SmalltalkMetaclass, SmalltalkBehavior);

		SmalltalkMetaclass.prototype.meta = true;

		this.__init__ = function () {
			st.addPackage("Kernel-Classes");
			st.wrapClassName("Behavior", "Kernel-Classes", SmalltalkBehavior, globals.Object, false);
			st.wrapClassName("Metaclass", "Kernel-Classes", SmalltalkMetaclass, globals.Behavior, false);
			st.wrapClassName("Class", "Kernel-Classes", SmalltalkClass, globals.Behavior, false);

			// Manually bootstrap the metaclass hierarchy
			globals.ProtoObject.klass.superclass = rootAsClass.klass = globals.Class;
			addSubclass(globals.ProtoObject.klass);
		};

		/* Smalltalk classes */

		var classes = [];
		var wrappedClasses = [];

		/* Smalltalk class creation. A class is an instance of an automatically
		 created metaclass object. Newly created classes (not their metaclass)
		 should be added to the smalltalk object, see smalltalk.addClass().
		 Superclass linking is *not* handled here, see smalltalk.init()  */

		function klass(spec) {
			spec = spec || {};
			var setSuperClass = spec.superclass;
			if(!spec.superclass) {
				spec.superclass = rootAsClass;
			}

			var meta = metaclass(spec);
			var that = meta.instanceClass;

			that.superclass = setSuperClass;

			that.fn = spec.fn || inherits(function () {}, spec.superclass.fn);
			that.subclasses = [];

			setupClass(that, spec);

			that.className = spec.className;
			that.wrapped   = spec.wrapped || false;
			meta.className = spec.className + ' class';
			meta.superclass = spec.superclass.klass;
			return that;
		}

		function metaclass(spec) {
			spec = spec || {};
			var that = new SmalltalkMetaclass();
			that.fn = inherits(function () {}, spec.superclass.klass.fn);
			that.instanceClass = new that.fn();
			setupClass(that);
			return that;
		}

		SmalltalkBehavior.prototype.toString = function () {
			return 'Smalltalk ' + this.className;
		};

		function wireKlass(klass) {
			Object.defineProperty(klass.fn.prototype, "klass", {
				value: klass,
				enumerable: false, configurable: true, writable: true
			});
		}

		function setupClass(klass, spec) {
			spec = spec || {};
			klass.iVarNames = spec.iVarNames || [];
			klass.pkg = spec.pkg;

			org.setupClassOrganization(klass);
			Object.defineProperty(klass, "methods", {
				value: Object.create(null),
				enumerable: false, configurable: true, writable: true
			});
			wireKlass(klass);
		}

		/* Add a class to the smalltalk object, creating a new one if needed.
		 A Package is lazily created if it does not exist with given name. */

		st.addClass = function(className, superclass, iVarNames, pkgName) {
			// While subclassing nil is allowed, it might be an error, so
			// warn about it.
			if (typeof superclass == 'undefined' || superclass == nil) {
				console.warn('Compiling ' + className + ' as a subclass of `nil`. A dependency might be missing.');
			}
			rawAddClass(pkgName, className, superclass, iVarNames, false, null);
		};

		function rawAddClass(pkgName, className, superclass, iVarNames, wrapped, fn) {
			var pkg = st.packages[pkgName];

			if (!pkg) {
				throw new Error("Missing package "+pkgName);
			}

			if (!superclass || superclass == nil) { superclass = null; }
			if(globals[className] && globals[className].superclass == superclass) {
				//            globals[className].superclass = superclass;
				globals[className].iVarNames = iVarNames || [];
				if (pkg) globals[className].pkg = pkg;
				if (fn) {
					fn.prototype = globals[className].fn.prototype;
					globals[className].fn = fn;
					fn.prototype.constructor = fn;
				}
			} else {
				if(globals[className]) {
					st.removeClass(globals[className]);
				}
				globals[className] = klass({
					className: className,
					superclass: superclass,
					pkg: pkg,
					iVarNames: iVarNames,
					fn: fn,
					wrapped: wrapped
				});

				addSubclass(globals[className]);
			}

			classes.addElement(globals[className]);
			org.addOrganizationElement(pkg, globals[className]);
		}

		st.removeClass = function(klass) {
			org.removeOrganizationElement(klass.pkg, klass);
			classes.removeElement(klass);
			removeSubclass(klass);
			delete globals[klass.className];
		};

		function addSubclass(klass) {
			if(klass.superclass) {
				klass.superclass.subclasses.addElement(klass);
			}
		}

		function removeSubclass(klass) {
			if(klass.superclass) {
				klass.superclass.subclasses.removeElement(klass);
			}
		}

		/* Create a new class wrapping a JavaScript constructor, and add it to the
		 global smalltalk object. Package is lazily created if it does not exist with given name. */

		st.wrapClassName = function(className, pkgName, fn, superclass, wrapped) {
			wrapped = wrapped !== false;
			rawAddClass(pkgName, className, superclass, globals[className] && globals[className].iVarNames, wrapped, fn);
			if(wrapped) {
				wrappedClasses.addElement(globals[className]);
			}
		};

		/* Manually set the constructor of an existing Smalltalk klass, making it a wrapped class. */

		st.setClassConstructor = function(klass, constructor) {
			wrappedClasses.addElement(klass);
			klass.wrapped = true;
			klass.fn = constructor;

			// The fn property changed. We need to add back the klass property to the prototype
			wireKlass(klass);

			classInit.initClass(klass);
		};

		/* Create an alias for an existing class */

		st.alias = function(klass, alias) {
			globals[alias] = klass;
		};

		/* Answer all registered Smalltalk classes */
		//TODO: remove the function and make smalltalk.classes an array

		st.classes = function() {
			return classes;
		};

		st.wrappedClasses = function() {
			return wrappedClasses;
		};

		// Still used, but could go away now that subclasses are stored
		// into classes directly.
		st.allSubclasses = function(klass) {
			return klass._allSubclasses();
		};

	}

	function MethodsBrik(brikz, st) {

		var manip = brikz.ensure("manipulation");
		var org = brikz.ensure("organize");
		var stInit = brikz.ensure("stInit");
		var dnu = brikz.ensure("dnu");
		var SmalltalkObject = brikz.ensure("root").Object;
		brikz.ensure("selectorConversion");
		brikz.ensure("classes");

		function SmalltalkMethod() {}
		inherits(SmalltalkMethod, SmalltalkObject);

		this.__init__ = function () {
			st.addPackage("Kernel-Methods");
			st.wrapClassName("CompiledMethod", "Kernel-Methods", SmalltalkMethod, globals.Object, false);
		};

		/* Smalltalk method object. To add a method to a class,
		 use smalltalk.addMethod() */

		st.method = function(spec) {
			var that = new SmalltalkMethod();
			that.selector          = spec.selector;
			that.jsSelector        = spec.jsSelector;
			that.args              = spec.args || {};
			that.protocol          = spec.protocol;
			that.source            = spec.source;
			that.messageSends      = spec.messageSends || [];
			that.referencedClasses = spec.referencedClasses || [];
			that.fn                = spec.fn;
			return that;
		};

		function ensureJsSelector(method) {
			if (!(method.jsSelector)) {
				method.jsSelector = st.st2js(method.selector);
			}
		}

		/* Add/remove a method to/from a class */

		st.addMethod = function (method, klass) {
			ensureJsSelector(method);
			manip.installMethod(method, klass);
			klass.methods[method.selector] = method;
			method.methodClass = klass;

			// During the bootstrap, #addCompiledMethod is not used.
			// Therefore we populate the organizer here too
			org.addOrganizationElement(klass, method.protocol);

			propagateMethodChange(klass, method);

			var usedSelectors = method.messageSends,
				targetClasses = stInit.initialized() ? st.wrappedClasses() : [];

			dnu.make(method.selector, targetClasses);

			for(var i=0; i<usedSelectors.length; i++) {
				dnu.make(usedSelectors[i], targetClasses);
			}
		};

		function propagateMethodChange(klass, method) {
			// If already initialized (else it will be done later anyway),
			// re-initialize all subclasses to ensure the method change
			// propagation (for wrapped classes, not using the prototype
			// chain).

			if (stInit.initialized()) {
				st.allSubclasses(klass).forEach(function (subclass) {
					initMethodInClass(subclass, method);
				});
			}
		}

		function initMethodInClass (klass, method) {
			if (klass.wrapped && !klass.methods[method.selector]) {
				var jsSelector = method.jsSelector;
				manip.installMethod({
					jsSelector: jsSelector,
					fn: klass.superclass.fn.prototype[jsSelector]
				}, klass);
			}
		}

		st.removeMethod = function(method, klass) {
			if (klass !== method.methodClass) {
				throw new Error(
						"Refusing to remove method " +
						method.methodClass.className + ">>" + method.selector +
						" from different class " +
						klass.className);
			}

			ensureJsSelector(method);
			delete klass.fn.prototype[method.jsSelector];
			delete klass.methods[method.selector];

			initMethodInClass(klass, method);
			propagateMethodChange(klass, method);

			// Do *not* delete protocols from here.
			// This is handled by #removeCompiledMethod
		};

		/* Answer all method selectors based on dnu handlers */

		st.allSelectors = function() {
			return dnu.selectors;
		};

	}

	function AugmentsBrik(brikz, st) {

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
			st.addPackage("Kernel-Methods");
			st.wrapClassName("Number", "Kernel-Objects", Number, globals.Object);
			st.wrapClassName("BlockClosure", "Kernel-Methods", Function, globals.Object);
			st.wrapClassName("Boolean", "Kernel-Objects", Boolean, globals.Object);
			st.wrapClassName("Date", "Kernel-Objects", Date, globals.Object);

			st.addPackage("Kernel-Collections");
			st.addClass("Collection", globals.Object, null, "Kernel-Collections");
			st.addClass("IndexableCollection", globals.Collection, null, "Kernel-Collections");
			st.addClass("SequenceableCollection", globals.IndexableCollection, null, "Kernel-Collections");
			st.addClass("CharacterArray", globals.SequenceableCollection, null, "Kernel-Collections");
			st.wrapClassName("String", "Kernel-Collections", String, globals.CharacterArray);
			st.wrapClassName("Array", "Kernel-Collections", Array, globals.SequenceableCollection);
			st.wrapClassName("RegularExpression", "Kernel-Collections", RegExp, globals.Object);

			st.addPackage("Kernel-Exceptions");
			st.wrapClassName("Error", "Kernel-Exceptions", Error, globals.Object);

			/* Alias definitions */

			st.alias(globals.Array, "OrderedCollection");
			st.alias(globals.Date, "Time");

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
			var readObject = js.constructor === Object;
			var readArray = js.constructor === Array;
			var object = readObject ? globals.Dictionary._new() : readArray ? [] : js;

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
			if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
			else if (shouldBeBoolean != null && typeof shouldBeBoolean === "object") {
				shouldBeBoolean = shouldBeBoolean.valueOf();
				if (typeof shouldBeBoolean === "boolean") return shouldBeBoolean;
			}
			globals.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
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
							// Amber protected words: these should not be compiled as-is when in code
							'arguments',
							// ES5: future use: http://es5.github.com/#x7.6.1.2
							'class', 'const', 'enum', 'export', 'extends', 'import', 'super',
							// ES5: future use in strict mode
							'implements', 'interface', 'let', 'package', 'private', 'protected',
							'public', 'static', 'yield'];

		st.globalJsVariables = ['jQuery', 'window', 'document', 'process', 'global'];

	}

	function RuntimeBrik(brikz, st) {

		brikz.ensure("selectorConversion");
		var root = brikz.ensure("root");
		var nil = root.nil;
		var SmalltalkObject = root.Object;

		function SmalltalkMethodContext(home, setup) {
			this.sendIdx     = {};
			this.homeContext = home;
			this.setup       = setup || function() {};

			this.supercall = false;
		}

		inherits(SmalltalkMethodContext, SmalltalkObject);

		this.__init__ = function () {
			st.addPackage("Kernel-Methods");
			st.wrapClassName("MethodContext", "Kernel-Methods", SmalltalkMethodContext, globals.Object, false);

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
				if(this.homeContext) {
					this.homeContext.evaluatedSelector = selector;
				}
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
					method = lookup.methods[st.js2st(this.selector)];
					lookup = lookup.superclass;
				}
				return method;
			};
		};

		/* This is the current call context object. While it is publicly available,
		 Use smalltalk.getThisContext() instead which will answer a safe copy of
		 the current context */

		var thisContext = null;

		st.withContext = function(worker, setup) {
			if(thisContext) {
				return inContext(worker, setup);
			} else {
				try {
					return inContext(worker, setup);
				} catch(error) {
					handleError(error);
					thisContext = null;
					// Rethrow the error in any case.
					error.amberHandled = true;
					throw error;
				}
			}
		};

		function inContext(worker, setup) {
			var context = pushContext(setup);
			var result = worker(context);
			popContext(context);
			return result;
		}

		/* Wrap a JavaScript exception in a Smalltalk Exception.

		 In case of a RangeError, stub the stack after 100 contexts to
		 avoid another RangeError later when the stack is manipulated. */
		function wrappedError(error) {
			var errorWrapper = globals.JavaScriptException._on_(error);
			// Add the error to the context, so it is visible in the stack
			try { errorWrapper._signal(); } catch (ex) {}
			var context = st.getThisContext();
			if(isRangeError(error)) {
				stubContextStack(context);
			}
			errorWrapper._context_(context);
			return errorWrapper;
		}

		/* Stub the context stack after 100 contexts */
		function stubContextStack(context) {
			var currentContext = context;
			var contexts = 0;
			while(contexts < 100) {
				if(currentContext) {
					currentContext = currentContext.homeContext;
				}
				contexts++;
			}
			if(currentContext) {
				currentContext.homeContext = undefined;
			}
		}

		function isRangeError(error) {
			return error instanceof RangeError;
		}


		/* Handles Smalltalk errors. Triggers the registered ErrorHandler
		 (See the Smalltalk class ErrorHandler and its subclasses */

		function handleError(error) {
			if (!error.smalltalkError) {
				error = wrappedError(error);
			}
			globals.ErrorHandler._handleError_(error);
		}

		/* Handle thisContext pseudo variable */

		st.getThisContext = function() {
			if(thisContext) {
				thisContext.init();
				return thisContext;
			} else {
				return nil;
			}
		};

		function pushContext(setup) {
			thisContext = new SmalltalkMethodContext(thisContext, setup);
			return thisContext;
		}

		function popContext(context) {
			thisContext = context.homeContext;
		}

	}

	function MessageSendBrik(brikz, st) {

		brikz.ensure("selectorConversion");
		var nil = brikz.ensure("root").nil;

		/* Handles unhandled errors during message sends */
		// simply send the message and handle #dnu:

		st.send = function(receiver, jsSelector, args, klass) {
			var method;
			if(receiver === null) {
				receiver = nil;
			}
			method = klass ? klass.fn.prototype[jsSelector] : receiver.klass && receiver[jsSelector];
			if(method) {
				return method.apply(receiver, args || []);
			} else {
				return messageNotUnderstood(receiver, st.js2st(jsSelector), args);
			}
		};

		function invokeDnuMethod(receiver, stSelector, args) {
			return receiver._doesNotUnderstand_(
				globals.Message._new()
					._selector_(stSelector)
					._arguments_([].slice.call(args))
			);
		}

		/* Handles #dnu: *and* JavaScript method calls.
		 if the receiver has no klass, we consider it a JS object (outside of the
		 Amber system). Else assume that the receiver understands #doesNotUnderstand: */
		function messageNotUnderstood(receiver, stSelector, args) {
			if (receiver.klass !== undefined && !receiver.allowJavaScriptCalls) {
				return invokeDnuMethod(receiver, stSelector, args);
			}
			/* Call a method of a JS object, or answer a property if it exists.
			 Else try wrapping a JSObjectProxy around the receiver. */
			var propertyName = st.st2prop(stSelector);
			if (!(propertyName in receiver)) {
				return invokeDnuMethod(globals.JSObjectProxy._on_(receiver), stSelector, args);
			}
			return accessJavaScript(receiver, propertyName, args);
		}

		/* If the object property is a function, then call it, except if it starts with
		 an uppercase character (we probably want to answer the function itself in this
		 case and send it #new from Amber).

		 Converts keyword-based selectors by using the first
		 keyword only, but keeping all message arguments.

		 Example:
		 "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */
		function accessJavaScript(receiver, propertyName, args) {
			var propertyValue = receiver[propertyName];
			if (typeof propertyValue === "function" && !/^[A-Z]/.test(propertyName)) {
				return propertyValue.apply(receiver, args || []);
			} else if (args.length > 0) {
				receiver[propertyName] = args[0];
				return nil;
			} else {
				return propertyValue;
			}
		}

		st.accessJavaScript = accessJavaScript;
		this.messageNotUnderstood = messageNotUnderstood;
	}

	function SelectorConversionBrik(brikz, st) {

		/* Convert a Smalltalk selector into a JS selector */
		st.st2js = function(string) {
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
		 if you modify the following functions, also change st2js
		 accordingly */
		st.js2st = function(selector) {
			if(selector.match(/__/)) {
				return binaryJsToSt(selector);
			} else {
				return keywordJsToSt(selector);
			}
		};

		function keywordJsToSt(selector) {
			return selector.replace(/^_/, '').replace(/_/g, ':');
		}

		function binaryJsToSt(selector) {
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

		st.st2prop = function (stSelector) {
			var colonPosition = stSelector.indexOf(':');
			return colonPosition === -1 ? stSelector : stSelector.slice(0, colonPosition);
		};
	}

	/* Adds AMD and requirejs related methods to the smalltalk object */
	function AMDBrik(brikz, st) {
		this.__init__ = function () {
			st.amdRequire = require;
			st.defaultTransportType = st.defaultTransportType || "amd";
			st.defaultAmdNamespace = st.defaultAmdNamespace || "amber_core";
		};
	}

	/* Defines asReceiver to be present at load time */
	/* (logically it belongs more to PrimitiveBrik) */
	function AsReceiverBrik(brikz, st) {

		var nil = brikz.ensure("root").nil;

		/**
		 * This function is used all over the compiled amber code.
		 * It takes any value (JavaScript or Smalltalk)
		 * and returns a proper Amber Smalltalk receiver.
		 *
		 * null or undefined -> nil,
		 * plain JS object -> wrapped JS object,
		 * otherwise unchanged
		 */
		this.asReceiver = function (o) {
			if (o == null) return nil;
			if (typeof o === "object" || typeof o === "function") {
				return o.klass != null ? o : globals.JSObjectProxy._on_(o);
			}
			// IMPORTANT: This optimization (return o if typeof !== "object")
			// assumes all primitive types are wrapped by some Smalltalk class
			// so they can be returned as-is, without boxing and looking for .klass.
			// KEEP THE primitives-are-wrapped INVARIANT!
			return o;
		};
	}


	/* Making smalltalk that can load */

	brikz.root = RootBrik;
	brikz.dnu = DNUBrik;
	brikz.organize = OrganizeBrik;
	brikz.selectorConversion = SelectorConversionBrik;
	brikz.classInit = ClassInitBrik;
	brikz.manipulation = ManipulationBrik;
	brikz.packages = PackagesBrik;
	brikz.classes = ClassesBrik;
	brikz.methods = MethodsBrik;
	brikz.stInit = SmalltalkInitBrik;
	brikz.augments = AugmentsBrik;
	brikz.asReceiver = AsReceiverBrik;
	brikz.amd = AMDBrik;

	brikz.rebuild();

	/* Making smalltalk that can run */

	function runnable () {
		brikz.messageSend = MessageSendBrik;
		brikz.runtime = RuntimeBrik;
		brikz.primitives = PrimitivesBrik;

		brikz.rebuild();
	}

	return { api: api, nil: brikz.root.nil, globals: globals, asReceiver: brikz.asReceiver.asReceiver };
});
