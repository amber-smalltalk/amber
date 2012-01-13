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
	var nocache = '?' + (new Date()).getTime();

	var debug;
	var deploy;

	var spec;

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
		loadJS('compat.js');
		loadJS('boot.js');


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
			loadPackages(additionalFiles, spec.prefix);
		}

		// Be sure to setup & initialize smalltalk classes
		loadJS('init.js');
		initializeSmalltalk();
	};

	function loadPackages(names, prefix){
		var name, url;
		var prefix = prefix || 'js';

		for (var i=0; i < names.length; i++) {
			name = names[i].split(/\.js$/)[0];
			loadJS(name + '.js', prefix);
		}
	};

	function loadJS(name, prefix) {
		var prefix = prefix || 'js';
		var name = name;

		// Specify a version string to avoid wrong browser caching
		if (spec.version) {
			nocache = '?' + spec.version;
		}

		loadDependencies();
		loadJS('compat.js');
		loadJS('boot.js');

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
			loadPackages(additionalFiles, spec.prefix);
		}

		// Be sure to setup & initialize smalltalk classes
		loadJS('init.js');
		initializeSmalltalk();
	};

	function loadPackages(names, prefix){
		var name, url;
		var prefix = prefix || 'js';

		for (var i=0; i < names.length; i++) {
			name = names[i].split(/\.js$/)[0];
			loadJS(name + '.js', prefix);
		}
	};

	function loadJS(name, prefix) {
		var prefix = prefix || 'js';
		var name = name;

		if (!deploy) {
			name = name + nocache;
		}

		var url = home + prefix + '/' + name;
		var scriptString = '<script src="' + url + '" type="text/javascript"></script>';
		document.write(scriptString);
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
			loadJS('lib/jQuery/jquery-1.6.4.min.js');
		}

		if ((typeof jQuery == 'undefined') || (typeof jQuery.ui == 'undefined')) {
			loadJS('lib/jQuery/jquery-ui-1.8.16.custom.min.js');
		}
	};

	function loadIDEDependencies() {
		loadJS('lib/jQuery/jquery.textarea.js');
		loadJS('lib/CodeMirror/codemirror.js');
		loadJS('lib/CodeMirror/smalltalk.js');
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
