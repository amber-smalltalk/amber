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
	var home    = src.split("/").slice(0, -2).join("/") + "/";

	var debug;
	var deploy;

	var spec;
	var jsToLoad = [];
	var loadJS;
    var nocache = '';

	that.toggleIDE = function() {
		if ($('#jtalk').length == 0) {
			smalltalk.Browser._open();
		} else if ($('#jtalk').is(':visible')) {
			smalltalk.TabManager._current()._close();
		} else {
			smalltalk.TabManager._current()._open();
		}
		return false;
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
			window.onbeforeunload = function(){ return 'You will loose all code that you have not committed'; }
		}

		// Allow loading default Amber files from a different location
		// e.g. http://amber-lang.net/amber/
		if (spec.home) home = spec.home;

		// Specify a version string to avoid wrong browser caching
		if (spec.version) {
			nocache = '?' + spec.version;
		}

		loadDependencies();
		addJSToLoad('compat.js');
		addJSToLoad('boot.js');

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
				'Compiler',
				'parser',
				'IDE',
				'SUnit',
				'Examples',
				'Benchfib',
				'Kernel-Tests'
			]);
		}

		var additionalFiles = spec.packages || spec.files;
		if (additionalFiles) {
			loadPackages(additionalFiles, spec.prefix, spec.packageHome);
		}

		// Be sure to setup & initialize smalltalk classes
		addJSToLoad('init.js');
		initializeSmalltalk();
	};

	function loadPackages(names, prefix, urlHome){
		var name, url;
		var prefix = prefix || 'js';
    var urlHome = urlHome || home;

		for (var i=0; i < names.length; i++) {
			name = names[i].split(/\.js$/)[0];
			addJSToLoad(name + '.js', prefix, urlHome);
		}
	};

	function addJSToLoad(name, prefix, urlHome) {
    var urlHome = urlHome || home;
		jsToLoad.push(buildJSURL(name, prefix, urlHome));
	};

	function buildJSURL(name, prefix, urlHome) {
		var prefix = prefix || 'js';
		var name = name;
    var urlHome = urlHome || home;

		if (!deploy) {
			name = name + nocache;
		}

		return urlHome + prefix + '/' + name;
	};

	function loadCSS(name, prefix) {
		var prefix = prefix || 'css';
		var name = name;
		if (!deploy) {
			name = name + nocache;
		}

		var url = home + prefix + '/' + name;

		var link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(link);
	};

	function loadDependencies() {
		if (typeof jQuery == 'undefined') {
			writeScriptTag(buildJSURL('lib/jQuery/jquery-1.6.4.min.js'));
		}

		if ((typeof jQuery == 'undefined') || (typeof jQuery.ui == 'undefined')) {      
			writeScriptTag(buildJSURL('lib/jQuery/jquery-ui-1.8.16.custom.min.js'));
		}
	};

	function loadIDEDependencies() {
		addJSToLoad('lib/jQuery/jquery.textarea.js');
		addJSToLoad('lib/CodeMirror/codemirror.js');
		addJSToLoad('lib/CodeMirror/smalltalk.js');
		loadCSS('lib/CodeMirror/codemirror.css', 'js');
		loadCSS('lib/CodeMirror/amber.css', 'js');
	};

	// This will be called after JS files have been loaded
	function initializeSmalltalk() {
		window.smalltalkReady = function() {
			if (deploy) {
				smalltalk.setDeploymentMode();
			}

			if (spec.ready) {
				spec.ready();
			}
		}

		loadAllJS(); 
	};

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
	};

	function loadNextJS() {
		loadJS(jsToLoad[0], function(){
			jsToLoad.shift();
			if (jsToLoad.length > 0) {
				loadNextJS();
			}
		});
	};

	function loadJSViaScriptTag(url, callback) {
		writeScriptTag(url);
		callback();
	};

	function loadJSViaJQuery(url, callback) {
		$.ajax({
			dataType: "script",
			url: jsToLoad[0],
			cache: deploy,
			success: callback
		});
	};

	function writeScriptTag(src) {
		var scriptString = '<script src="' + src + '" type="text/javascript"></script>';
		document.write(scriptString);
	};

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
	};

	function clearLocalPackages() {
		for (var name in localPackages) {
			log('Removing ' + name + ' from local storage');
			localStorage.removeItem('smalltalk.packages.' + name);
		}
	};

	function log(string) {
		if (debug) {
			console.log(string);
		}
	}

	return that;
})();

window.loadAmber = amber.load;
window.toggleAmberIDE = amber.toggleIDE;
