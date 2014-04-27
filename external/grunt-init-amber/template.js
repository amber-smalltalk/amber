/*
 * grunt-init-amber
 * https://amber-lang.net/
 *
 * Copyright (c) 2013 Manfred Kroehnert, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a web application based on Amber Smalltalk.';

// Template-specific notes to be displayed before question prompts.
exports.notes = ' _Project title_ should be a human-readable title.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _bower install_.' +
  ' Afterwards, start the development server with _./bower_components/amber/bin/amber serve_.' +
  ' Your application is then accessible via _http://localhost:4000/_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'amber'}, [
    // Prompt for these values.
    init.prompt('name', 'AmberApplication'),
    init.prompt('title'),
    init.prompt('description', 'Amber Application.'),
    {
      name: 'namespace',
      message: 'The namespace used to store your Amber Packages.',
    },
    {
      name: 'amber_version',
      default: '>= 0.12.4',
      message: 'The version of Amber to use. Must be >= 0.12.4',
    },
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

    props.keywords = ['Amber', 'Smalltalk'];

    //props.devDependencies = {'amber': '~0.10.0'};
    props.node_version = '>= 0.8.0';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    //init.writePackageJSON('package.json', props);

    // generate bower.json file
    grunt.file.write('bower.json', JSON.stringify({

        "name": props.name,
        "description": props.description,
        "version": props.version,
        "authors": [
            {
                "name": props.author_name,
                "email": props.author_email
            }
        ],
        "homepage": props.homepage,
        "main": props.main,
        "keywords": props.keywords,
        "license": props.licenses,
        "private": false,
        "dependencies": {
            "amber": "~" + props.amber_version
        }
    }, null, 4));


    // All done!
    done();
  });

};
