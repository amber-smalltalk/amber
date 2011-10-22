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

	var localStorageSource = [];
	var localPackages;
	var spec;

	that.load = function(obj) {
		spec = obj || {};

		// In deployment mode, only the compressed version of Kernel
		// and Canvas are loaded
		deploy = spec.deploy || false;
		debug = spec.debug || false;

		// Specify a version string to avoid wrong browser caching
		if (spec.version) {
			nocache = '?' + spec.version;
		}

		loadDependencies();
		loadJS('boot.js');

		populateLocalPackages();

		if (deploy) {
			loadPackages([
					'Kernel.deploy',
					'Canvas.deploy'
					]);
		} else {
			loadIDEDependencies();
			loadCSS('amber.css');

			loadPackages([
				'Kernel',
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

		// Always load all local packages
		for (name in localPackages) {
			log('Local package:  ' + name);
			localStorageSource.push(localPackages[name]);
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

			// Only load package from the server if it isn't stored in
			// localStorage
			if (!(name in localPackages)) {
				log('Server package: ' + name);
				loadJS(name + '.js', prefix);
			}
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
		loadJS('lib/jQuery/jquery-1.6.4.min.js');
		loadJS('lib/jQuery/jquery-ui-1.8.9.custom.min.js');
	};

	function loadIDEDependencies() {
		loadJS('lib/jQuery/jquery.textarea.js');
		loadJS('lib/CodeMirror/lib/codemirror.js');
		loadCSS('lib/CodeMirror/lib/codemirror.css', 'js');
		loadJS('lib/CodeMirror/mode/smalltalk/smalltalk.js');
		loadCSS('lib/CodeMirror/theme/amber.css', 'js');
	};

	// This will be called after JS files have been loaded
	function initializeSmalltalk() {

		window.smalltalkReady = function() {

			for (var i=0; i < localStorageSource.length; i++) {
				eval(localStorageSource[i]);
			}

			if (deploy) {
				smalltalk.setDeploymentMode();
			}

			if (spec.ready) {
				spec.ready();
			}
		}
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

window.loadAmber = function(spec) {
	amber.load(spec);
}
