// Loading this in nested file so that require.config
// with shim dependencies is in effect.
// See http://stackoverflow.com/questions/21647956/how-to-config-requirejs-shim-dependencies-just-in-time/

define([
	'jquery-ui',
    'amber_lib/jquery-tabby/jquery.textarea',
    'amber_core/IDE',
    'amber_core/Examples',
    'amber_core/Benchfib'
]);
