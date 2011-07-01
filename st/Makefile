# Where we find the current runnable code and where we put our js files when we are done
JS	:= ../js/

# The compiler script
JTALKC	:= ../bin/jtalkc

# Generic flags to JTALKC
FLAGS   := -g

# The js files that are hand written and we use "as is"
CORE    := boot.js init.js

# All corresponding js filenames for every st file available
# In other words, if we have Kernel.st and Parser.st, then OBJECTS will be "Kernel.js Parser.js"
OBJECTS := $(patsubst %.st,%.js,$(wildcard *.st))

# Default make targets
all: jtalk.deploy.js jtalk.js

# Step by step
#
# First we copy the core javascript files from current working files
# into this directory. These files are hand written.
boot.js:
	cp ../js/boot.js ../js/init.js .


# Then we compile Kernel.st using boot.js, Kernel.js, init.js
# $< means the first dependency - in other words Kernel.st
Kernel.js: Kernel.st $(CORE)
	$(JTALKC) $(FLAGS) $<

# ...then Parser, but using the new Kernel from step above.
# We only need to depend on Kernel.js since it in turn depends on CORE.
Parser.js: Parser.st Kernel.js
	$(JTALKC) $(FLAGS) $<

# ...and Compiler, but using the new Parser and Kernel from above.
# We only need to depend on Parser.js since it in turn depends on Kernel.js, CORE etc
Compiler.js: Compiler.st Parser.js
	$(JTALKC) $(FLAGS) $<

# ...now that we have a new Kernel/Parser/Compiler we use them
# to compile the rest of st files that only depend on Compiler, like
# for example Canvas.js and Benchfib.js
%.js: %.st Compiler.js 
	$(JTALKC) $(FLAGS) $<

# But there are some dependencies to care for:
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
	$(JTALKC) $(FLAGS) -l Canvas.js,JQuery.js,IDE.js,SUnit.js $<

# Complete Jtalk, here we give -J (will include all  libs for Jtalk IDE),
# push it all through Closure (-O) and add init.js at end (-I).
jtalk.js: $(OBJECTS)
	$(JTALKC) -J -O -I jtalk


# Only Jtalk Kernel and compiled without -g. Thus we need to clean first to remake
# all dependencies with new FLAGS.
# Then we give -K (will include up to Compiler), push it all through Closure (-O)
# and add init.js at end (-I).
jtalk.deploy.js: FLAGS =
jtalk.deploy.js: cleanobjects $(OBJECTS)
	$(JTALKC) -K -O -I jtalk.deploy.js


# Installing is simply copying all js files to js directory.
install: all
	cp *.js $(JS)

# And cleaning
clean: cleanobjects cleanjtalk

.PHONY: cleanobjects
cleanobjects:
	rm -f $(OBJECTS)

.PHONY: cleanjtalk
cleanjtalk:
	rm -f jtalk.js jtalk.deploy.js
