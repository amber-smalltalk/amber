define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy',
	'./parser',
	// --- packages for the Amber reflection begin here ---
	'amber_core/Platform-ImportExport',
	'amber_core/Compiler-Exceptions',
	'amber_core/Compiler-Core',
	'amber_core/Compiler-AST',
	'amber_core/Compiler-Semantic',
	'amber_core/Compiler-IR',
	'amber_core/Compiler-Inlining',
	'amber_core/Compiler-Interpreter'
	// --- packages for the Amber reflection end here ---
], function (amber) { return amber; });
