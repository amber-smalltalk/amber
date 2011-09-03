#
# This Makefile takes .st files in the jtalk/st directory and produces compiled
# javascript files from them, for both debug and deployment.
#
# Where we find the current runnable code and where we put our js files on install
JS	:= ../js/

# The compiler script
JTALKC	:= ../bin/jtalkc

# Generic flags to JTALKC
FLAGS   := -d

# All corresponding js filenames for every st file available
# In other words, if we have Kernel.st and Compiler.st, then OBJECTS will be "Kernel.js Compiler.js"
OBJECTS := $(patsubst %.st,%.js,$(wildcard *.st))

# Default make target since it is the first target in this Makefile
all: Examples.js

# Step by step
#
# First we copy the core javascript files from current working files
# into this directory. These files are hand written. $@ is the target name.
boot.js init.js:
	cp ../js/$@ .

# Then we compile Kernel.st depending on having using boot.js and init.js
# $< means the first dependency - in other words Kernel.st
Kernel.js: Kernel.st boot.js init.js
	$(JTALKC) $(FLAGS) $<

# ...and Compiler, but using the new Kernel from above.
# We only need to depend on Kernel.js since it in turn depends on Kernel.js, boot.js etc
Compiler.js: Compiler.st Kernel.js
	$(JTALKC) $(FLAGS) $<

# ...now that we have a new Kernel/Parser/Compiler we use them
# to compile the rest of st files presuming that they only depend on Compiler, like
# for example Canvas.js and Benchfib.js.
%.js: %.st Compiler.js 
	$(JTALKC) $(FLAGS) $<

# But for some libraries there are dependencies to care for. Then
# we need to use -l so that the compiler first loads that library
# before compiling the .st file. Otherwise bindings will fail.
#
# JQuery uses Canvas
JQuery.js: JQuery.st Canvas.js
	$(JTALKC) $(FLAGS) -l Canvas $<

# IDE uses JQuery
IDE.js: IDE.st JQuery.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery $<

# The SUnit TestRunner uses UI stuff from IDE.
SUnit.js: SUnit.st IDE.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery,IDE $<

# Some Examples use SUnit
Examples.js: Examples.st SUnit.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery,IDE,SUnit $<;


# Installing is simply copying all js files to js directory.
install: all
	cp *.js $(JS)

# And cleaning is trivial also
clean:
	rm -f *.js; 

# These three are phony
.PHONY: all install clean
