/* Adapted from Clamato by Avi Bryant. http://www.clamato.net */

(function() {
    var scripts = document.getElementsByTagName("script");
    var src = scripts[ scripts.length - 1 ].src;
    var home = src.split("/").slice(0, -2).join("/") + "/";
    
    function loadJS(name) {
	document.write('<script src="' + home + 'js/' + name + '" type="text/javascript"></script>');
    }
    
    function loadCSS(name) {
	var link = document.createElement("link")
  	link.setAttribute("rel", "stylesheet")
  	link.setAttribute("type", "text/css")
  	link.setAttribute("href", home + "css/" + name)
	document.getElementsByTagName("head")[0].appendChild(link);
    }

    function loadDependencies() {
	loadJS('jquery-1.4.4.min.js');
	loadJS('jquery-ui-1.8.9.custom.min.js');
	loadJS('jquery.textarea.js');
    }

    window.loadJtalk = function() {
	loadDependencies();
	loadCSS('jtalk.css');
	loadCSS('sunit.css');
	loadJS("boot.js");
	loadJS("Kernel.js");
	loadJS("Canvas.js");
	loadJS("JQuery.js");
	loadJS("Parser.js");
	loadJS("Compiler.js");
	loadJS("IDE.js");
	loadJS("SUnit.js");
	loadJS("Examples.js");
	loadJS("Benchfib.js");
	loadCSS("jtalk.css");
	loadCSS("sunit.css");
    }

    window.loadJtalkDeploy = function() {
	loadDependencies();
	loadJS("boot.js");
	loadJS("Kernel.deploy.js");
	loadJS("Canvas.deploy.js");
	loadJS("JQuery.deploy.js");
	smalltalk.setDeploymentMode();
    }
})();