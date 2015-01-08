define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy',
	'amber/parser',
	'amber_core/Kernel-ImportExport',
	'amber_core/Compiler-Exceptions',
	'amber_core/Compiler-Core',
	'amber_core/Compiler-AST',
	'amber_core/Compiler-Semantic',
	'amber_core/Compiler-IR',
	'amber_core/Compiler-Inlining',
	'amber_core/Compiler-Interpreter'
], function (amber) { return amber; });
