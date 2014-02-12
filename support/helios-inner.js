// Loading this in nested file so that require.config
// with shim dependencies is in effect.
// See http://stackoverflow.com/questions/21647956/how-to-config-requirejs-shim-dependencies-just-in-time/

define([
	'./devel-inner',
	'amber_lib/bootstrap/js/bootstrap',
	'amber_lib/showdown/compressed/showdown',
	'amber_core/Spaces',
	'amber_core/Helios-Core',
	'amber_core/Helios-Exceptions',
	'amber_core/Helios-Helpers',
	'amber_core/Helios-Commands-Core',
	'amber_core/Helios-Commands-Tools',
	'amber_core/Helios-Commands-Browser',
	'amber_core/Helios-Layout',
	'amber_core/Helios-KeyBindings',
	'amber_core/Helios-Browser',
	'amber_core/Helios-Workspace',
	'amber_core/Helios-Transcript',
	'amber_core/Helios-SUnit',
	'amber_core/Helios-Debugger',
	'amber_core/Helios-Inspector',
	'amber_core/Helios-References',
	'amber_core/Helios-Announcements',
	'amber_core/Helios-Workspace-Tests'
]);
