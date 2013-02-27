#!/bin/bash
cd `dirname ${0}`/..


# Create the build file
cat js/boot.js js/Kernel-Announcements.js js/Kernel-Classes.js js/Kernel-Collections.js  js/Kernel-Exceptions.js js/Kernel-Methods.js js/Kernel-Objects.js js/Kernel-Transcript.js js/Compiler-AST.js js/Compiler-Core.js js/Compiler-Exceptions.js js/Compiler-IR.js js/Compiler-Inlining.js js/Compiler-Interpreter.js js/Compiler-Semantic.js js/SUnit.js js/Kernel-Tests.js js/Compiler-Tests.js js/SUnit-Tests.js test/Test.js js/parser.js js/init.js > test/run.js


#run it!
node test/run.js
