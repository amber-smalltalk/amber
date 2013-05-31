/* Amber package loading
   usage example:
   amber.load({
   files: ['MyCategory1.js', 'MyCategory2.js'],
   ready: function() {smalltalk.Browser._open()}
   })
*/

amber = (function() {
	var that = {};

	var scripts = document.getElementsByTagName("script");
	var src     = scripts[ scripts.length - 1 ].src;
	var home    = resolveViaDOM(src).replace(/[^\/]+\/[^\/]+$/, "");

	var debug;
	var deploy;

	var spec;
	var jsToLoad = [];
	var loadJS;
	var nocache = '';

	function resolveViaDOM(url) {
		var a = document.createElement("a");
		a.href = url;
		return a.href;
	}
	
	that.load = function(obj) {
		spec = obj || {};

		// In deployment mode, only the compressed version of Kernel
		// and Canvas are loaded
		deploy = spec.deploy || false;
		debug = spec.debug || false;

		// When debug is turned on, logs are written to the console,
		// and the user will be prompted before they leave the page.
		if (debug) {
			window.onbeforeunload = function(){ return 'You will loose all code that you have not committed'; };
		}

		// Allow loading default Amber files from a different location
		// e.g. http://amber-lang.net/amber/
		if (spec.home) home = spec.home;

		// Specify a version string to avoid wrong browser caching
		if (spec.version) {
			nocache = '?' + spec.version;
		}

		loadDependencies();
		addJSToLoad('js/lib/es5-shim-2.0.2/es5-shim.min.js');
		addJSToLoad('js/lib/es5-shim-2.0.2/es5-sham.min.js');
		addJSToLoad('js/boot.js');

		if (deploy) {
			loadPackages([
				'Kernel-Objects.deploy',
				'Kernel-Classes.deploy',
				'Kernel-Methods.deploy',
				'Kernel-Collections.deploy',
				'Kernel-Exceptions.deploy',
				'Kernel-Transcript.deploy',
				'Kernel-Announcements.deploy',
				'Canvas.deploy'
			]);
		} else {
			loadIDEDependencies();
			loadCSS('amber.css');

			loadPackages([
				'Kernel-Objects',
				'Kernel-Classes',
				'Kernel-Methods',
				'Kernel-Collections',
				'Kernel-Exceptions',
				'Kernel-Transcript',
				'Kernel-Announcements',
				'Canvas',
				'SUnit',
				'Importer-Exporter',
				'Compiler-Exceptions',
				'Compiler-Core',
				'Compiler-AST',
				'Compiler-Semantic',
				'Compiler-IR',
				'Compiler-Inlining',
				'Compiler-Interpreter',
				'Compiler-Tests',
				'parser',
				'IDE',
				'Examples',
				'Benchfib',
				'Kernel-Tests',
				'SUnit-Tests'
			]);
		}

		var additionalFiles = spec.packages || spec.files;
		if (additionalFiles) {
			that.commitPath = loadPackages(additionalFiles, spec.prefix, spec.packageHome);
		}

		// Be sure to setup & initialize smalltalk classes
		addJSToLoad('js/init.js');
		initializeSmalltalk();
	};

	function loadPackages(names, prefix, urlHome){
		var name;
		prefix = prefix || 'js';
		urlHome = urlHome || home;

		for (var i=0; i < names.length; i++) {
			name = names[i].split(/\.js$/)[0];
			addJSToLoad(name + '.js', prefix, urlHome);
		}

		return  {
			js: urlHome + prefix,
			st: urlHome + (prefix.match(/\/js$/) ? prefix.replace(/\/js$/, "/st") : "st")
		};
	}

	function addJSToLoad(name, prefix, urlHome) {
		urlHome = urlHome || home;
		jsToLoad.push(buildJSURL(name, prefix, urlHome));
	}

	function resolve(base, path) {
		if (/(^|:)\/\//.test(path)) {
			// path: [http:]//foo.com/bar/; base: whatever/
			// -> http://foo.com/bar/
			return path;
		}
		if (!/^\//.test(path)) {
			// path: relative/; base: whatever/
			// -> whatever/relative/
			return base + path;
		}
		var match = base.match(/^(([^:/]*:|^)\/\/[^/]*)/);
		if (match) {
			// path: /absolute/; base: [http:]//foo.com/whatever/
			// -> [http:]//foo.com/absolute/
			return match[1] + path;
		}
		// path: /absolute/; base: whatever/path/
		// -> /absolute/
		return path;
	}

	function buildJSURL(name, prefix, urlHome) {
		prefix = prefix ? prefix + '/' : '';
		urlHome = urlHome || home;

		var parts = name.match(/^(.*\/)([^/]*)$/);
		if (parts) {
			name = parts[2];
			urlHome = resolve(urlHome, parts[1]);
		}

		if (!deploy) {
			name = name + nocache;
		}

		return urlHome + prefix + name;
	}

	function loadCSS(name, prefix) {
		prefix = prefix || 'css';
		if (!deploy) {
			name = name + nocache;
		}

		var url = home + prefix + '/' + name;

		var link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(link);
	}

	function loadDependencies() {
		if (typeof jQuery == 'undefined') {
			addJSToLoad('js/lib/jQuery/jquery-1.8.2.min.js');
		}

		if ((typeof jQuery == 'undefined') || (typeof jQuery.ui == 'undefined')) {
			addJSToLoad('js/lib/jQuery/jquery-ui-1.8.16.custom.min.js');
		}
	}

	function loadIDEDependencies() {
		addJSToLoad('js/lib/jQuery/jquery.textarea.js');
		addJSToLoad('js/lib/CodeMirror/codemirror.js');
		addJSToLoad('js/lib/CodeMirror/smalltalk.js');
		addJSToLoad('js/lib/CodeMirror/addon/hint/show-hint.js');
		loadCSS('lib/CodeMirror/codemirror.css', 'js');
		loadCSS('lib/CodeMirror/theme/ambiance.css', 'js');
		loadCSS('lib/CodeMirror/addon/hint/show-hint.css', 'js');
		loadCSS('lib/CodeMirror/amber.css', 'js');
	}

	// This will be called after JS files have been loaded
	function initializeSmalltalk() {
		that.smalltalkReady = function() {
			if (spec.ready) {
				spec.ready();
			}
			evaluateSmalltalkScripts();
		};

		loadAllJS();
	}

	/*
	 * When loaded using AJAX, scripts order not guaranteed.
	 * Load JS in the order they have been added using addJSToLoad().
	 * If loaded, will use jQuery's getScript instead of adding a script element
	 */
	function loadAllJS() {
		loadJS = loadJSViaScriptTag;
		if (typeof jQuery != 'undefined') {
			loadJS = loadJSViaJQuery;
		}
		loadNextJS();
	}

	function loadNextJS() {
		loadJS(jsToLoad[0], function(){
			jsToLoad.shift();
			if (jsToLoad.length > 0) {
				loadNextJS();
			}
		});
	}

	function loadJSViaScriptTag(url, callback) {
		writeScriptTag(url);
		callback();
	}

	function loadJSViaJQuery(url, callback) {
		// The order of loading is as specified, but order of execution may get wrong
		// (observed when loading amber in testing environment using zombiejs).
		// jQuery's getScript/get/ajax does not give any guarantee as to the order of execution.
		// The callback is called after the file is fully load, but it may not have been executed.
		// When given a small timeout between ending previous loading and start of next loading,
		// it is very probable that the time window is used to actually start executing the script.
		$.ajax({
			dataType: "script",
			url: url,
			cache: deploy,
			success: function () { setTimeout(callback, 5); }
		});
	}

	function writeScriptTag(src) {
		var scriptString = '<script src="' + src + '" type="text/javascript"></script>';
		document.write(scriptString);
	}

	function evaluateSmalltalkScripts() {
		jQuery(document).ready(function() {
			jQuery('script[type="text/smalltalk"]').each(function(i, elt) {
				smalltalk.Compiler._new()._evaluateExpression_(jQuery(elt).html());
			});
		});
	}

	var localPackages;

	function populateLocalPackages(){
		var localStorageRE = /^smalltalk\.packages\.(.*)$/;
		localPackages = {};

		var match, key;

		for(var i=0; i < localStorage.length; i++) {
			key = localStorage.key(i);

			if (match = key.match(localStorageRE)) {
				localPackages[match[1]] = localStorage[key];
			}
		}

		return localPackages;
	}

	function clearLocalPackages() {
		for (var name in localPackages) {
			log('Removing ' + name + ' from local storage');
			localStorage.removeItem('smalltalk.packages.' + name);
		}
	}

	function log(string) {
		if (debug) {
			console.log(string);
		}
	}

	that.loadHelios = function() {
		loadCSS('helios_frame.css');
		var frame = jQuery('<div id="helios"><iframe frameborder=0 src="' + home + 'helios.html"></iframe></div>');
	
		jQuery('body').append(frame);
		jQuery(frame).resizable({
			handles: 'n',
			start: onResizeStart,
			stop: onResizeStop,
			resize: onResize
		});
	
		function onResize() {
			jQuery('#helios')
				.css('top', '')
				.css('width', '100%')
				.css('bottom', '0px');
		}
	
		function onResizeStart() {
			jQuery('#helios').append('<div class="overlay"></div>');
		}
	
		function onResizeStop() {
			jQuery('#helios').find('.overlay').remove();
		}
	};

	that.popupHelios = function() {
		window.open(home + 'helios.html', "Helios", "menubar=no, status=no, scrollbars=no, menubar=no, width=1000, height=600");
	};

	return that;
})();

window.loadAmber  = amber.load;
window.loadHelios = amber.loadHelios;
window.popupHelios = amber.popupHelios;

// Backward compatibility
function toggleAmberIDE () {
	return smalltalk.TabManager._toggleAmberIDE();
}
