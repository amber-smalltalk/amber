repl.js: REPL.st
	../bin/amberc -m Repl -l Compiler-Core,Compiler-Exceptions,Compiler-AST,Compiler-IR,Compiler-Inlining,Compiler-Semantic,parser REPL.st amber

run: repl.js
	../bin/amber

clean:
	rm -f amber.js REPL.js
