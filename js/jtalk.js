/* Adapted from Clamato by Avi Bryant. http://www.clamato.net */

(function() {
    var scripts = document.getElementsByTagName("script");
    var src = scripts[ scripts.length - 1 ].src;
    var home = src.split("/").slice(0, -2).join("/") + "/";
    
    function loadJS(name, prefix) {
	var prefix = prefix || 'js';
	document.write('<script src="' + home + prefix + '/' + name + '" type="text/javascript"></script>');
    }
    
    function loadCSS(name, prefix) {
	var prefix = prefix || 'css';
	var link = document.createElement("link")
  	link.setAttribute("rel", "stylesheet")
  	link.setAttribute("type", "text/css")
  	link.setAttribute("href", home + prefix + '/' + name)
	document.getElementsByTagName("head")[0].appendChild(link);
    }

    function loadDependencies() {
	loadJS('lib/jQuery/jquery-1.6.2.min.js');
	loadJS('lib/jQuery/jquery-ui-1.8.9.custom.min.js');
    }

    function loadIDEDependencies() {
	loadJS('lib/jQuery/jquery.textarea.js');
        if (document.location.protocol == 'file:') {
	    loadJS('lib/jQuery/jQuery.twFile.js');
        };
	loadJS('lib/CodeMirror/lib/codemirror.js');
	loadCSS('lib/CodeMirror/lib/codemirror.css', 'js');
	loadJS('lib/CodeMirror/mode/smalltalk/smalltalk.js');
	loadCSS('lib/CodeMirror/theme/jtalk.css', 'js');
    }

    window.loadJtalk = function(files, prefix) {
	loadDependencies();
	loadIDEDependencies();
	loadCSS('jtalk.css');
	loadCSS('sunit.css');
	loadJS("boot.js");
	loadJS("Kernel.js");
	loadJS("Canvas.js");
	loadJS("JQuery.js");
	loadJS("Compiler.js");
	loadJS("parser.js");
	loadJS("IDE.js");
	loadJS("SUnit.js");
	loadJS("Examples.js");
	loadJS("Benchfib.js");
	loadJS("Kernel-Tests.js");
	loadJS("JQuery-Tests.js");

	if(files) {
	    for(var i=0; i < files.length; i++) {
		loadJS(files[i], prefix);
	    }
	}

	loadJS("init.js");
    }

    window.loadJtalkDeploy = function(files, prefix) {
	loadDependencies();
	loadJS("boot.js");
	loadJS("Kernel.deploy.js");
	loadJS("Canvas.deploy.js");
	loadJS("JQuery.deploy.js");

	if(files){
	    for(var i=0; i < files.length; i++) {
		loadJS(files[i], prefix);
	    }
	}

	loadJS("init.js");
	loadJS("deploy.js");
    }
})();