// Loading this in nested file so that require.config
// with shim dependencies is in effect.
// See http://stackoverflow.com/questions/21647956/how-to-config-requirejs-shim-dependencies-just-in-time/

define([
	'amber/devel-inner',
	'amber_lib/bootstrap/js/bootstrap',
	'amber_lib/showdown/compressed/showdown',
	'amber_core/Spaces',
	'helios/Helios-Core',
	'helios/Helios-Exceptions',
	'helios/Helios-Helpers',
	'helios/Helios-Commands-Core',
	'helios/Helios-Commands-Tools',
	'helios/Helios-Commands-Browser',
	'helios/Helios-Layout',
	'helios/Helios-KeyBindings',
	'helios/Helios-Browser',
	'helios/Helios-Workspace',
	'helios/Helios-Transcript',
	'helios/Helios-SUnit',
	'helios/Helios-Debugger',
	'helios/Helios-Inspector',
	'helios/Helios-References',
	'helios/Helios-Announcements',
	'helios/Helios-Workspace-Tests'
]);
