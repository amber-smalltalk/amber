#
# This Makefile takes .st files in the jtalk/st directory and produces compiled
# javascript files from them. It also produces one or more concatenated jtalk.js files
# for development and deployment.
#
# Where we find the current runnable code and where we put our js files when we are done
JS	:= ../js/

# The compiler script
JTALKC	:= ../bin/jtalkc

# Generic flags to JTALKC
FLAGS   := -g

# All corresponding js filenames for every st file available
# In other words, if we have Kernel.st and Parser.st, then OBJECTS will be "Kernel.js Parser.js"
OBJECTS := $(patsubst %.st,%.js,$(wildcard *.st))

# Default make target since it is the first target in this Makefile
all: jtalk.deploy.js jtalk.js

# Step by step
#
# First we copy the core javascript files from current working files
# into this directory. These files are hand written. $@ is the target name.
boot.js init.js:
	cp ../js/$@ .

# Then we compile Kernel.st using boot.js, Kernel.js, init.js
# $< means the first dependency - in other words Kernel.st
Kernel.js: Kernel.st boot.js init.js
	$(JTALKC) $(FLAGS) $<

# And one for deployment, no flags.
deploy-Kernel.js: Kernel.st boot.js init.js
	$(JTALKC) -p deploy- $<

# ...then Parser, but using the new Kernel from step above.
# We only need to depend on Kernel.js since it in turn depends on boot.js and init.js.
Parser.js: Parser.st Kernel.js
	$(JTALKC) $(FLAGS) $<

# ...and Compiler, but using the new Parser and Kernel from above.
# We only need to depend on Parser.js since it in turn depends on Kernel.js, boot.js etc
Compiler.js: Compiler.st Parser.js
	$(JTALKC) $(FLAGS) $<

# ...now that we have a new Kernel/Parser/Compiler we use them
# to compile the rest of st files that only depend on Compiler, like
# for example Canvas.js, Benchfib.js etc
%.js: %.st Compiler.js 
	$(JTALKC) $(FLAGS) $<

# But for some libraries there are dependencies to care for. Then
# we need to use -l so that the compiler first loads that library
# before compiling the .st file. Otherwise bindings will fail.
#
# JQuery uses Canvas
JQuery.js: JQuery.st Canvas.js
	$(JTALKC) $(FLAGS) -l Canvas.js $<

# IDE uses JQuery
IDE.js: IDE.st JQuery.js
	$(JTALKC) $(FLAGS) -l Canvas.js,JQuery.js $<

# The SUnit TestRunner uses UI stuff from IDE.
SUnit.js: SUnit.st IDE.js
	$(JTALKC) $(FLAGS) -l Canvas.js,JQuery.js,IDE.js $<

# Some Examples use SUnit
Examples.js: Examples.st SUnit.js
	$(JTALKC) $(FLAGS) -l Canvas.js,JQuery.js,IDE.js,SUnit.js $<;

# This is the deployment target with only the Jtalk Kernel compiled without -g.
# Then we push it all through Closure (-O) and add init.js at end (-I).
jtalk.deploy.js: boot.js init.js deploy-Kernel.js
	$(JTALKC) -O -I boot.js deploy-Kernel.js jtalk.deploy;

# Full IDE compiled with -g. We do not clean away objects at end.
# Here we give -J (will include all  libs for Jtalk IDE),
# push it all through Closure (-O) and add init.js at end (-I).
jtalk.js: boot.js init.js $(OBJECTS)
	$(JTALKC) -J -O -I jtalk;


# Installing is simply copying all js files to js directory.
install: all
	cp *.js $(JS)

# And cleaning is trivial
clean:
	rm -f *.js; 

# These three are phony
.PHONY: all install clean
