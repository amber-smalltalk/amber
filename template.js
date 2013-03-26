/*
 * grunt-init-amber
 * https://amber-lang.net/
 *
 * Copyright (c) 2013 Manfred Kroehnert, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create an Amber Smalltalk based application.';

// Template-specific notes to be displayed before question prompts.
exports.notes = ' _Project title_ should be a human-readable title.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm install_.' +
  ' After that, you may execute project tasks with _grunt_.' +
  ' Fmore information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'amber'}, [
    // Prompt for these values.
    init.prompt('name', 'AmberApp'),
    init.prompt('title'),
    init.prompt('description', 'Amber Application.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {
    // A few additional properties.
    props.amberjson = props.name + '.amber.json';
    props.dependencies = {'amber': '~0.10.0'};

    props.keywords = ['Amber'];

    //props.devDependencies = {'amber': '~0.10.0'};
    props.node_version = '>= 0.8.0';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
