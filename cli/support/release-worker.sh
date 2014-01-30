#!/bin/sh

# ATTENTION: Be logged into npm before running this script,
# as a user with write access to amber npm package.

git reset --hard
git checkout master
git clean -d -x -f
npm install
echo -n "Which version are you going to publish [0 to skip]? "
VER=`head -n 1`
if [ "$VER" = "0" ]; then :; else
	echo "Publishing version $VER"
	cli/support/setversion.sh "$VER"
	cp package.json package.json.bak
	sed -e 's@/amber.git.*"@/amber.git#'"$VER"'"@' package.json.bak >package.json
	rm package.json.bak
	git add package.json
	bin/amberc -m AmberCli -n amber_cli -l Compiler-Exceptions,Compiler-Core,Compiler-AST,Compiler-IR,Compiler-Inlining,Compiler-Semantic,Compiler-Interpreter,parser cli/src/AmberCli.st cli/support/amber-cli
	git add cli/support/amber-cli.js
	git commit -a -m "Release version $VER"
	git tag -a "$VER" -m "Release version $VER"
# bower does not publish explicitly but implictly via semver tag
	echo npm publish
fi
echo -n "Which version are you going to work on? "
VERF=`head -n 1`
VER="${VERF}-pre"
echo "Setting version $VER"
cli/support/setversion.sh "$VER"
cp package.json package.json.bak
sed -e 's@/amber.git.*"@/amber.git"@' package.json.bak >package.json
rm package.json.bak
git add package.json
bin/amberc -m AmberCli -n amber_cli -l Compiler-Exceptions,Compiler-Core,Compiler-AST,Compiler-IR,Compiler-Inlining,Compiler-Semantic,Compiler-Interpreter,parser cli/src/AmberCli.st cli/support/amber-cli
git add cli/support/amber-cli.js
git commit -a -m "Working on $VERF"
git push --tags
