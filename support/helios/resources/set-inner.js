// Loading this in nested file so that require.config
// with shim dependencies is in effect.
// See http://stackoverflow.com/questions/21647956/how-to-config-requirejs-shim-dependencies-just-in-time/

define([
	'amber/devel-inner',
	'bootstrap2.3.2/js/bootstrap',
	'amber_lib/showdown/compressed/showdown',
    'helios/all'
]);
