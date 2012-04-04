#
# If you copy this file for an Android Amber project, just
# modify these first three lines
# and then add .st files as you please. This Makefile
# should pick them all up and compile into Program.js.
#

NAME  := HelloAmber
PACKAGE := org.amberlang.android.helloamber
ACTIVITY := HelloAmber

# debug or release

VERSION  := debug

# -O for Closure optimization of js code.
FLAGS    := 
APK      := bin/$(NAME)-$(VERSION).apk
FILE     := Program
SOURCES  := $(wildcard *.st)
OBJECTS  := $(patsubst %.st,%.js,$(wildcard *.st))
FILEJS   := assets/$(FILE).js

# Find files that match a wildcard pattern recursively

rwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))

JAVA_SOURCES := $(call rwildcard,src/,*.java)

ASSETS := $(call rwildcard,assets/,*)

all: $(APK)

$(FILEJS): $(SOURCES)
	../../../bin/amberc $(FLAGS) $(SOURCES) $(FILE)
	mv $(FILE).js $(FILEJS)

$(APK): $(FILEJS) $(ASSETS) $(JAVA_SOURCES) AndroidManifest.xml build.xml
	ant $(VERSION)

clean:
	rm -f $(FILEJS) $(OBJECTS) $(APK)
	rm -rf gen bin

install: $(APK)
	adb install $(APK)

# If you want to run it in the emulator, start the emulator first with the
# android command.
run:    $(APK)
	adb install -r $(APK)
	adb shell am start -n $(PACKAGE)/$(PACKAGE).$(ACTIVITY)

# This should fire it up in Chromium (at least under Ubuntu)
chromium: $(FILEJS)
	chromium-browser --allow-file-access-from-files assets/index.html
