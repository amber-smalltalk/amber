/* Adapted from Clamato by Avi Bryant. http://www.clamato.net */

(function() {
  window.Amber = {
    debug: false,
    deploy: false,
    nocache: '?' + (new Date()).getTime(),
    home: '',
    localStorageRE: /^smalltalk\.packages\.(.*)$/,

    /*
     example:
     Amber.load({
       files: ['MyCategory1.js', 'MyCategory2.js'],
       ready: function() {smalltalk.Browser._open()}
     })
    */
    load: function(spec) {
      var me = this;
      me.sourceToEval = [];

      me.spec = spec || {};

      // In deployment mode, only the compressed version of Kernel
      // and Canvas are loaded
      me.deploy = spec.deploy || me.deploy;

      // Specify a version string to avoid wrong browser caching
      if(spec.version) {
        me.nocache = '?' + spec.version;
      }

      me.loadDependencies();
      me.loadJS('boot.js');

      me.populateLocalPackages();

      if(me.deploy) {
        me.loadPackages([
          'Kernel.deploy',
          'Canvas.deploy',
          'JQuery.deploy'
        ]);
      } else {
        me.loadIDEDependencies();
        me.loadCSS('amber.css');

        me.loadPackages([
          'Kernel',
          'Canvas',
          'Compiler',
          'parser',
          'IDE',
          'SUnit',
          'Examples',
          'Benchfib',
          'Kernel-Tests',
        ]);
      }

      if(spec.packages) {
        me.loadPackages(spec.packages);
      }

      // Always load all local packages
      for (name in me.localPackages) {
        me.log('local:  ' + name);
        me.sourceToEval.push(me.localPackages[name]);
      }

      // Be sure to setup & initialize smalltalk classes
      me.loadJS('init.js');
    },

    loadPackages: function(names){
      var me = this;
      var spec = me.spec;
      var name;

      for (var i=0; i < names.length; i++) {
        name = names[i];

        // Only load package from the server if it isn't stored in
        // localStorage
        if (!(name in me.localPackages)) {
          me.log('server: ' + name);
          me.loadJS(name+'.js', spec.prefix);
        }
      }

      // for (var i=0; i < names.length; i++) {
      //   name = names[i];

      //   if (name in me.localPackages) {
      //     me.log('load local package ' + name);
      //     me.sourceToEval.push(me.localPackages[name]);
      //     // delete me.localPackages[name];

      //   } else {
      //     me.log('load server package ' + name);
      //     me.loadJS(name+'.js', spec.prefix);
      //   }
      // }
    },

    loadJS: function(name, prefix) {
      var me = this;
      var prefix = prefix || 'js';
      var name = name;
      if(!me.deploy) {
        name = name + me.nocache;
      }
      var url = me.home + prefix + '/' + name;
      var scriptString = '<script src="' + url + '" type="text/javascript"></script>';
      document.write(scriptString);
    },

    loadCSS: function (name, prefix) {
      var me = this;
      var prefix = prefix || 'css';
      var name = name;
      if(!me.deploy) {
        name = name + me.nocache;
      }
      var url = me.home + prefix + '/' + name;
      var tagString = '<link rel="stylesheet" href="' + url + '" type="text/css"></script>';
      document.write(tagString);
    },

    loadDependencies: function() {
      var me = this;
      me.loadJS('lib/jQuery/jquery-1.6.4.min.js');
      me.loadJS('lib/jQuery/jquery-ui-1.8.9.custom.min.js');
    },

    loadIDEDependencies: function() {
      var me = this;
      me.loadJS('lib/jQuery/jquery.textarea.js');
      me.loadJS('lib/CodeMirror/lib/codemirror.js');
      me.loadCSS('lib/CodeMirror/lib/codemirror.css', 'js');
      me.loadJS('lib/CodeMirror/mode/smalltalk/smalltalk.js');
      me.loadCSS('lib/CodeMirror/theme/amber.css', 'js');
    },

    // This will be called after JS files have been loaded
    initializeSmalltalk: function(){
      var me = this;
      var spec = me.spec;

      for (var i=0; i < me.sourceToEval.length; i++)
        eval(me.sourceToEval[i]);

      smalltalk.init(smalltalk.Object);
      smalltalk.classes()._do_(function(each) {each._initialize()});

      if (spec.ready)
        spec.ready();

      if (me.deploy)
        smalltalk.setDeploymentMode();
    },

    populateLocalPackages: function(){
      var me = this;

      me.localPackages = {};

      var match, key;

      for(var i=0; i < localStorage.length; i++) {
        key = localStorage.key(i);

        if (match = key.match(me.localStorageRE)) {
          me.localPackages[match[1]] = localStorage[key];
        }
      }

      return me.localPackages;
    },

    clearLocalPackages: function(){
      var me = this;
      for (var name in me.localPackages) {
        me.log('removing ' + name + ' from local storage');
        localStorage.removeItem('smalltalk.packages.' + name);
      }
    },

    log: function(string) {
      var me = this;
      if (me.debug)
        console.log(string);
    }
  }
})();
