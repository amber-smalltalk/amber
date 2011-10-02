/* Adapted from Clamato by Avi Bryant. http://www.clamato.net */

(function() {
  var
    scripts = document.getElementsByTagName("script"),
    src = scripts[ scripts.length - 1 ].src,
    home = src.split("/").slice(0, -2).join("/") + "/";

  window.Amber = {
    debug: false,
    deploy: false,
    nocache: '?' + (new Date()).getTime(),
    home: home,

    /*
     example:
     Amber.load({
       files: ['MyCategory1.js', 'MyCategory2.js'],
       ready: function() {smalltalk.Browser._open()}
     })
    */
    load: function(spec) {
      var self = this;
      self.localStorageSource = [];
      self.spec = ((typeof spec == 'undefined') ? {} : spec);

      // In deployment mode, only the compressed version of Kernel
      // and Canvas are loaded
      self.deploy = self.spec.deploy || self.deploy;
      self.debug = self.spec.debug || self.debug;

      // Specify a version string to avoid wrong browser caching
      if (self.spec.version)
        self.nocache = '?' + self.spec.version;

      self.loadDependencies();
      self.loadJS('boot.js');

      self.populateLocalPackages();

      if (self.deploy) {
        self.loadPackages([
          'Kernel.deploy',
          'Canvas.deploy'
        ]);
      } else {
        self.loadIDEDependencies();
        self.loadCSS('amber.css');

        self.loadPackages([
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

      var additionalFiles = self.spec.packages || self.spec.files;
      if (additionalFiles)
        self.loadPackages(additionalFiles, self.spec.prefix);

      // Always load all local packages
      for (name in self.localPackages) {
        self.log('Local package:  ' + name);
        self.localStorageSource.push(self.localPackages[name]);
      }

      // Be sure to setup & initialize smalltalk classes
      self.loadJS('init.js');
    },

    loadPackages: function(names, prefix){
      var self = this;
      var name, url;
      var prefix = prefix || 'js';

      for (var i=0; i < names.length; i++) {
        name = names[i].split(/\.js$/)[0];

        // Only load package from the server if it isn't stored in
        // localStorage
        if (!(name in self.localPackages)) {
          self.log('Server package: ' + name);
          self.loadJS(name + '.js', prefix);
        }
      }
    },

    loadJS: function(name, prefix) {
      var self = this;
      var prefix = prefix || 'js';
      var name = name;

      if (!self.deploy)
        name = name + self.nocache;

      var url = self.home + prefix + '/' + name;
      var scriptString = '<script src="' + url + '" type="text/javascript"></script>';
      document.write(scriptString);
    },

    loadCSS: function (name, prefix) {
      var self = this;
      var prefix = prefix || 'css';
      var name = name;
      if (!self.deploy)
        name = name + self.nocache;

      var url = self.home + prefix + '/' + name;

      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", url);
      document.getElementsByTagName("head")[0].appendChild(link);
    },

    loadDependencies: function() {
      var self = this;
      self.loadJS('lib/jQuery/jquery-1.6.4.min.js');
      self.loadJS('lib/jQuery/jquery-ui-1.8.9.custom.min.js');
    },

    loadIDEDependencies: function() {
      var self = this;
      self.loadJS('lib/jQuery/jquery.textarea.js');
      self.loadJS('lib/CodeMirror/lib/codemirror.js');
      self.loadCSS('lib/CodeMirror/lib/codemirror.css', 'js');
      self.loadJS('lib/CodeMirror/mode/smalltalk/smalltalk.js');
      self.loadCSS('lib/CodeMirror/theme/amber.css', 'js');
    },

    // This will be called after JS files have been loaded
    initializeSmalltalk: function(){
      var self = this;

      for (var i=0; i < self.localStorageSource.length; i++)
        eval(self.localStorageSource[i]);

      smalltalk.init(smalltalk.Object);
      smalltalk.classes()._do_(function(each) {each._initialize()});

      if (self.spec.ready)
        self.spec.ready();

      if (self.deploy)
        smalltalk.setDeploymentMode();
    },

    populateLocalPackages: function(){
      var self = this;
      var localStorageRE = /^smalltalk\.packages\.(.*)$/;
      self.localPackages = {};

      var match, key;

      for(var i=0; i < localStorage.length; i++) {
        key = localStorage.key(i);

        if (match = key.match(localStorageRE)) {
          self.localPackages[match[1]] = localStorage[key];
        }
      }

      return self.localPackages;
    },

    clearLocalPackages: function(){
      var self = this;
      for (var name in self.localPackages) {
        self.log('Removing ' + name + ' from local storage');
        localStorage.removeItem('smalltalk.packages.' + name);
      }
    },

    log: function(string) {
      var self = this;
      if (self.debug)
        console.log(string);
    }
  };

  window.loadAmber = function(spec) {
    Amber.load(spec);
  }
})();
