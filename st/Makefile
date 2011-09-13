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
all: $(OBJECTS)

# Step by step
#
# First we copy the core javascript files from current working files
# into this directory. These files are hand written or generated using
# other tools (parser.js). $@ is the target name.
boot.js init.js parser.js:
	cp ../js/$@ .

# Then we compile Kernel.st depending on having boot.js, init.js and parser.js
# $< means the first dependency - in other words Kernel.st
Kernel.js: Kernel.st boot.js init.js parser.js
	$(JTALKC) $(FLAGS) $<

# ...and Compiler, but using the new Kernel from above.
# We only need to depend on Kernel.js since it in turn depends on boot.js etc
Compiler.js: Compiler.st Kernel.js
	$(JTALKC) $(FLAGS) $<

# ...now that we have a new Kernel and Compiler we use them
# to compile the rest of st files presuming that they only depend on Kernel, like
# for example Canvas.js and Benchfib.js.
%.js: %.st Compiler.js
	echo $(OBJECTS)
	$(JTALKC) $(FLAGS) $<

# But for some libraries there are more dependencies to care for. Then
# we need to use -l so that the compiler first loads that library
# before compiling the .st file. Otherwise bindings will fail.
#
# NOTE: With the new dependency model in class Package etc this will change!
#
# JQuery uses Canvas
JQuery.js: JQuery.st Canvas.js
	$(JTALKC) $(FLAGS) -l Canvas $<

# IDE uses JQuery
IDE.js: IDE.st JQuery.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery $<

TrySmalltalk.js: TrySmalltalk.st IDE.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery,IDE $<

# Some Examples use SUnit and also IDE
Examples.js: Examples.st SUnit.js IDE.js
	$(JTALKC) $(FLAGS) -l SUnit,Canvas,JQuery,IDE $<;

# Tests typically also use SUnit
Kernel-Tests.js: Kernel-Tests.st SUnit.js
	$(JTALKC) $(FLAGS) -l SUnit $<;

# Tests typically also use SUnit
JQuery-Tests.js: JQuery-Tests.st JQuery.js SUnit.js
	$(JTALKC) $(FLAGS) -l Canvas,JQuery,SUnit $<;


# Installing is simply copying all js files to js directory.
install: all
	cp *.js $(JS)

# And cleaning is trivial also
clean:
	rm -f *.js; 

# These three are phony
.PHONY: all install clean
