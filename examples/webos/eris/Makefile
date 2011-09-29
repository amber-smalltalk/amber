#
# If you copy this file for an Enyo/Amber project, just
# modify these first three lines
# and then add .st files as you please. This Makefile
# should pick them all up and compile into Program.js.
#
PACKAGE  := amber.eris
VERSION  := 0.0.1
FLAGS    := -l Compiler

IPK      := $(PACKAGE)_$(VERSION)_all.ipk
FILE     := Program
SOURCES  := $(wildcard *.st)
OBJECTS  := $(patsubst %.st,%.js,$(wildcard *.st))
FILEJS   := $(FILE).js

$(FILEJS): $(SOURCES)
	../../../bin/amberc $(FLAGS) $(SOURCES) $(FILE)

$(IPK): $(FILEJS)
	palm-package .

clean:
	rm -f $(FILEJS) $(OBJECTS) $(IPK)
#	palm-install -r $(PACKAGE)

install: $(IPK)
	palm-install $(IPK)

# If you want to run it in the emulator, start the emulator first with palm-emulator
run:    $(IPK)
	palm-install $(IPK)
	palm-launch $(PACKAGE)

# This should fire it up in Chromium (at least under Ubuntu)
chromium: $(FILEJS)
	chromium-browser --allow-file-access-from-files index.html
