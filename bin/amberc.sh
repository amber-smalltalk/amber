#!/bin/bash
#
# This is a "compiler" for Amber code. Run without arguments for help.
#
# Get Amber root directory from the location of this script so that
# we can find the st and js directories etc.

# Earlier we used this but it does not work on Mac
# Amber=$(readlink -f `dirname ${0}`/..)
TARGET=`dirname ${0}`/..
pushd . >/dev/null
cd $TARGET
AMBER="`\pwd -P`"
popd >/dev/null

function usage {
	cat <<ENDOFHELP
Usage: $0 [-l lib1,lib2...] [-i file] [-m class] [-M file]
          [-o] [-O|-A] [-d] [-s suffix] [-S suffix] [file1 [file2 ...]] [Program]

   Will compile Amber files - either separately or into a runnable complete
   program. If no .st files are listed only a linking stage is performed.
   Files listed will be handled using these rules:

   *.js
     Files are linked (concatenated) in listed order.
     If not found we look in $AMBER/js

   *.st
     Files are compiled into .js files before concatenated.
     If not found we look in $AMBER/st.

     NOTE: Each file is currently considered to be a fileout of a single class
     category of the same name as the file!

   If no Program is specified each given .st file will be compiled into
   a .js file. Otherwise a <Program>.js file is linked together based on
   the options:

  -l library1,library2
     Additionally add listed libraries (no spaces or .js) in listed order.

  -i file
     Add library initializer <file> instead of default $AMBER/js/init.js 

  -m class
     Add at end a call to #main in class <class>. 

  -M file
     Add at end javascript file <file> acting as main.
        
  -o
     Optimize each js file using the Google closure compiler.
     Using Closure compiler found at ~/compiler.jar    

  -O
     Optimize final <Program>.js using the Google closure compiler.
     Using Closure compiler found at ~/compiler.jar

  -A Same as -O but use --compilation_level ADVANCED_OPTIMIZATIONS

  -d
     Additionally export code for deploy - stripped from source etc.
     Uses suffix ".deploy.js" in addition to any explicit given suffic using -s.

  -s suffix
     Add <suffix> to compiled js files so that File.st is compiled into
     File.<suffix>.js.

  -S suffix
     Use <suffix> for all libraries accessed using -L or -l. This makes it possible
     to have multiple flavors of Amber and libraries in the same place.


     Example invocations:

     Just compile Kernel-Objects.st to Kernel-Objects.js:

        amberc Kernel-Objects.st

     Compile Hello.st to Hello.js and create complete program called
     Program.js and adding a call to class method #main in class Hello:

        amberc -m Hello Hello.st Program

     Compile two .st files into corresponding .js files,
     and link with specific myboot.js, myKernel.js, myinit.js
     and main.js and create complete program called Program.js:

        amberc -M main.js myinit.js myboot.js myKernel.js Cat1.st Cat2.st Program

ENDOFHELP
	exit 1;
}

# Check we at least got one argument
if [ -z $1 ] ; then
   usage
fi

# Define our predefined library combinations
KERNEL="boot Kernel-Objects Kernel-Classes Kernel-Methods Kernel-Collections Kernel-Exceptions Kernel-Transcript Kernel-Announcements"
COMPILER="$KERNEL parser Compiler Compiler-Exceptions"

# Predefined initializer
INITIALIZER="$AMBER/js/init.js"

# Default values
ENV=
INIT=$INITIALIZER
MAIN=
MAINFILE=
BASE=$KERNEL
LOAD=
CLOSUREOPTS=
# Ok, bad coding practice but hey, who would use such a suffix?
SUFFIX=no-silly-suffix
SUFFIXUSED=
DEPLOY=false
NODECOMPILE=nodecompile

# Read options and shift them away
while getopts "l:i:m:M:oOAds:S:h?" o; do
case "$o" in
   l) LOAD=$OPTARG;;
   i) INIT=$OPTARG;;
   m) MAIN=$OPTARG;;
   M) MAINFILE=$OPTARG;;
   o) CLOSURE=true
      CLOSUREPARTS=true;;
   O) CLOSURE=true
      CLOSUREFULL=true;;
   A) CLOSURE=true
      CLOSUREOPTS="$CLOSUREOPTS --compilation_level ADVANCED_OPTIMIZATIONS"
      CLOSUREFULL=true;;
   d) DEPLOY=true;;
   s) SUFFIX=$OPTARG
      SUFFIXUSED=$SUFFIX;;
   S) LOADSUFFIX=$OPTARG
      SUFFIXUSED=$SUFFIX;;
   h) usage;;
   [?])  usage;;
   esac
done
shift $(($OPTIND - 1))

# Check for Closure compiler and Java
if [ ! -z $CLOSURE ]; then
  java > /dev/null
  if [ $? -eq 0 ]; then 
    if [ ! -f ~/compiler.jar ]; then
      echo "Can not find Closure compiler at ~/compiler.jar"
      exit 1
    fi
  else
   echo "java is not installed and is needed for -O, -A or -o (Closure compiler)."
   exit 1
  fi
fi

# Function for looking up listed js files
function resolvejs {
  FNAME="$1$LOADSUFFIX.js"
  if [ -f $FNAME ]; then
    RESOLVED="$FNAME" 
  else
    if [ -f $AMBER/js/$FNAME ]; then
      RESOLVED="$AMBER/js/$FNAME"
    else
      echo "Javascript file not found: $FNAME"
      exit 1
    fi
  fi
}

# Resolve listed libraries in $BASE deparated by spaces
for FILE in $BASE
do
   resolvejs $FILE
   TOBASE="$TOBASE $RESOLVED"
done

# Resolve listed libraries in $LOAD separated by ,
LOAD=${LOAD//,/\ }
for FILE in $LOAD
do
   resolvejs $FILE
   TOLOAD="$TOLOAD $RESOLVED"
done

# Resolve COMPILER
for FILE in $COMPILER
do
   resolvejs $FILE
   TOCOMPILER="$TOCOMPILER $RESOLVED"
done

# Add supplied libraries we have not already loaded (they are already resolved)
#for FILE in $EXTRA
#do
#   resolvejs $FILE
#   TOEXTRA="$TOEXTRA $RESOLVED"
#done

TOCOMPILER="$TOCOMPILER$TOLOAD"

# Resolve init and nodecompile
THEREST="init $AMBER/bin/$NODECOMPILE"
for FILE in $THEREST
do
   resolvejs $FILE
   TOCOMPILER="$TOCOMPILER $RESOLVED"
done

# Add supplied libraries
LIBS="$TOBASE $TOLOAD"

# Get a unique tempdir and make it get auto removed on exit
TMPDIR=`mktemp -d amberc.XXXXXX 2>>/dev/null` ||\
    TMPDIR=/tmp/amberc.$$.`date +%s` && mkdir -p $TMPDIR
trap "rm -rf $TMPDIR" EXIT


# --------------------------------------------------
# Collect libraries and Smalltalk files looking
# both locally and in $AMBER/js and $AMBER/st 
# --------------------------------------------------
PROGRAM=
until [ "$*" = "" ]
do
  case $1 in
     *.st)
        CATEGORY=`basename $1 .st`
        if [ -f "$1" ]; then
           COMPILE="$COMPILE $1 $CATEGORY"
           COMPILED="$COMPILED $CATEGORY$SUFFIXUSED.js"
        else
           if [ -f $AMBER/st/$1 ]; then
             COMPILE="$COMPILE $AMBER/st/$1 $CATEGORY"
             COMPILED="$COMPILED $CATEGORY$SUFFIXUSED.js"
           else
             echo "Amber file not found: $1"
             exit 1
           fi
        fi
        ;;

     *.js)
        resolvejs $1
	LIBS="$LIBS $RESOLVED" 
        ;;
      *)
        # Will end up being the last non js/st argument
        PROGRAM=$1
        ;;
  esac
  shift
done

# --------------------------------------------------
# Actual compilation phase of collected .st files
# --------------------------------------------------

# Create compiler dynamically
cat $TOCOMPILER > $TMPDIR/compiler.js
 
# Compile all collected .st files to .js
echo "Loading libraries$TOCOMPILER and compiling ..."
node $TMPDIR/compiler.js $DEPLOY $SUFFIX $COMPILE

# Verify all .js files corresponding to .st files were created, otherwise exit
IFS=" "
for FILE in $COMPILED
do
  if [ ! -f "$FILE" ]; then
    echo "Failed compilation of $FILE, exiting."
    exit 1
  fi 
done

if [ ! -z $CLOSUREPARTS ]; then
  echo "Compiling all js files using Google closure compiler."

  ALLJSFILES="$COMPILED $LIBS"
  for FILE in $ALLJSFILES
  do
    mv $FILE $FILE.original
    java -jar ~/compiler.jar $CLOSUREOPTS --js $FILE.original --js_output_file $FILE
    rm $FILE.original
  done
fi


if [ -z $PROGRAM ]; then
  echo "Done."
  exit 0
fi

# --------------------------------------------------
# Now we start composing resulting javascript file.
# --------------------------------------------------

# Add collected libraries to libs.js file.
if [ ! -z "$LIBS" ]; then
  echo "Adding libraries $LIBS ..."
  cat $LIBS > $TMPDIR/libs.js
  LIBS=$TMPDIR/libs.js
fi

echo "Adding Amber code$COMPILED ..."

# Check for init file
if [ ! -z "$INIT" ]; then
   if [ -f "$INIT" ]; then
      echo "Adding initializer $INIT ..."
   else
      echo "Can not find init file $INIT, exiting."
      exit 1
   fi 
fi

# Check for adding main
if [ ! -z "$MAIN" ]; then
  echo "Adding call to $MAIN class >> main ..."
  echo "smalltalk.$MAIN._main()" > $TMPDIR/main.js
  MAIN=$TMPDIR/main.js
fi

# Check for adding main file
if [ ! -z "$MAINFILE" ]; then
   if [ -f "$MAINFILE" ]; then
      echo "Adding main as $MAINFILE ..."
   else
      echo "Can not find main file $MAINFILE, exiting."
      exit 1
   fi 
   MAIN=$MAINFILE
fi

# And finally concatenate Program.js
echo "Writing $PROGRAM.js ..."
cat $LIBS $COMPILED $INIT $MAIN > $PROGRAM.js
echo "Done."


if [ ! -z $CLOSUREFULL ]; then
  echo "Compiling $PROGRAM.js file using Google closure compiler."
  mv $PROGRAM.js $PROGRAM.js.original
  java -jar ~/compiler.jar $CLOSUREOPTS --js $PROGRAM.js.original --js_output_file $PROGRAM.js
  rm $PROGRAM.js.original
  echo "Done."
fi

