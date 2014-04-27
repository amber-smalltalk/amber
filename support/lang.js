define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy',
	'amber_vm/parser',
	'amber_core/Kernel-ImportExport',
	'amber_core/Compiler-Exceptions',
	'amber_core/Compiler-Core',
	'amber_core/Compiler-AST',
	'amber_core/Compiler-Semantic',
	'amber_core/Compiler-IR',
	'amber_core/Compiler-Inlining',
	'amber_core/Compiler-Interpreter',
	'amber_core/SUnit',
	'amber_core/Compiler-Tests',
	'amber_core/Kernel-Tests',
	'amber_core/SUnit-Tests'
], function (smalltalk) { return smalltalk; });
