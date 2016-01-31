#!/usr/bin/env node

var path = require('path');
var amberc = require('amber-dev').amberc;

// get parameters passed to the command line script
// discard the first two parameters which are the node binary and the script name
var parameters = process.argv.slice(2);

// check if at least one parameter was passed to the script
if (1 > parameters.length) {
    print_usage_and_exit();
}


// Get Amber root directory from the location of this script so that
// we can find the st and js directories etc.
var amber_dir = path.normalize(path.join(__dirname, '..', 'node_modules', 'amber'));

var configuration = handle_options(parameters);

var compiler = new amberc.Compiler(amber_dir);

compiler.main(configuration);


/**
 * Process given program options and update defaults values.
 * Followed by check_for_closure_compiler() and then collect_files().
 */
function handle_options(optionsArray) {
    var programName = [];
    var currentItem = optionsArray.shift();
    var defaults = amberc.createDefaultConfiguration();

    while (currentItem != null) {
        switch (currentItem) {
            case '-C':
                defaults.configFile = optionsArray.shift();
                break;
            case '-p':
                optionsArray.shift.split(',').forEach(function (pairString) {
                    var mapping = pairString.split(':');
                    defaults.paths[mapping[0]] = mapping[1];
                });
                break;
           case '-l':
                defaults.load.push.apply(defaults.load, optionsArray.shift().split(','));
                break;
            case '-g':
                defaults.jsGlobals.push.apply(defaults.jsGlobals, optionsArray.shift().split(','));
                break;
            case '-n':
                defaults.amdNamespace = optionsArray.shift();
                break;
            case '-D':
                defaults.outputDir = optionsArray.shift();
                break;
            case '-d':
                amber_dir = path.normalize(optionsArray.shift());
                break;
            case '-v':
                defaults.verbose = true;
                break;
            case '-h':
            case '--help':
            case '?':
            case '-?':
                print_usage_and_exit();
                break;
            default:
                defaults.stFiles.push(currentItem);
                break;
        }
        currentItem = optionsArray.shift();
    }

    if (1 < programName.length) {
        throw new Error('More than one name for ProgramName given: ' + programName);
    } else {
        defaults.program = programName[0];
    }
    return defaults;
}


// print available flags
function print_usage_and_exit() {
    var usage = [
        'Usage: amberc [-C configFile | -p mapping1,mapping2...] [-l lib1,lib2...] [-g jsGlobal1,jsGlobal2]',
        '          [-n namespace] [-D output_dir] [-v] file1 file2 ...',
        '',
        '   amberc compiles Amber files.',
        '   Files are compiled into .js files before concatenation.',
        '   If not found we look in $AMBER/src/',
        '',
        '     NOTE: Each .st file is currently considered to be a fileout of a single class',
        '     category of the same name as the file!',
        '',
        '  -C configFile',
        '     Set the file with amd config. Normally, you just use config.js here.',
        '     If used, -p options are ignored and -d is only used if configfile does not',
        '     contain mappings for amber and/or amber_core.',
        '',
        '  -p amdpath1:realpath1,amdpath2:realpath2',
        '     Set the amd paths mapping as comma-separate amd:realpath pairs.',
        '     Mapping elements are not separated by spaces or end with .js.',
        '',
        '  -l library1,library2',
        '     Load the libraries specified as comma-separate AMD module names.',
        '     Module names are not separated by spaces or end with .js.',
        '',
        '  -g jsGlobal1,jsGlobal2',
        '     Comma separated list of JS global variable names.',
        '     The names are added to a list containing "window", "document" and others.',
        '',
        '  -n amd_namespace',
        '     Export packages with <amd_namespace> as the require.js namespace.',
        '     Default value is "amber_core".',
        '',
        '  -v',
        '     Produce a more verbose output.',
        '',
        '  -D',
        '     Specifies the output directory for all generated .js files.',
        '     The hierarchy of the input files is not maintaned.',
        '     If this option is omitted all generated .js files are placed next to their input files',
        '',
        '  -d',
        '     Specifies the alternate directory to look for Amber files.',
        '     If not specified, the version embedded in CLI is used.',
        '',
        '     Example invocations:',
        '',
        '     Just compile Kernel-Objects.st to Kernel-Objects.js:',
        '',
        '        amberc Kernel-Objects.st',
    ];
    usage.forEach(function (line) {
        console.log(line);
    });
    process.exit();
}
