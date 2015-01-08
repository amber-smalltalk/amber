define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
    'amber_core/SUnit',
    'amber_core/Compiler-Tests',
    'amber_core/Kernel-Tests',
    'amber_core/SUnit-Tests'
], function (amber) { return amber; });
