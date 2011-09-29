# Makefile for sub directories
AMBER = st
SERVER = server
EXAMPLES = examples

# REST is all except AMBER
REST = $(SERVER) $(EXAMPLES)

# And these are all
DIRS = $(AMBER) $(REST)

# The sets of directories to do various things in
BUILDDIRS = $(DIRS:%=build-%)
EXAMPLESDIRS = $(EXAMPLES:%=build-%)
INSTALLDIRS = $(AMBER:%=install-%)
CLEANDIRS = $(REST:%=clean-%)
CLEANALLDIRS = $(DIRS:%=clean-%)

all: $(BUILDDIRS)
$(DIRS): $(BUILDDIRS)
$(BUILDDIRS):
	$(MAKE) -C $(@:build-%=%)

amber: build-st

# Examples and server need Amber first
build-server: build-st
build-examples: build-st

examples: $(EXAMPLESDIRS)
$(EXAMPLESDIRS):
	$(MAKE) -C $(@:build-%=%)

install: $(INSTALLDIRS)
$(INSTALLDIRS):
	$(MAKE) -C $(@:install-%=%) install

clean: $(CLEANDIRS)
$(CLEANDIRS): 
	$(MAKE) -C $(@:clean-%=%) clean

cleanall: $(CLEANALLDIRS) 
$(CLEANALLDIRS): 
	$(MAKE) -C $(@:clean-%=%) clean


.PHONY: subdirs $(DIRS)
.PHONY: subdirs $(BUILDDIRS)
.PHONY: subdirs $(INSTALLDIRS)
.PHONY: subdirs $(CLEANDIRS)
.PHONY: subdirs $(CLEANALLDIRS)
.PHONY: all install clean
