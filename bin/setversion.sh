#!/bin/sh
cd `dirname "$0"`
cd ../st
rm -f *.js
cp Kernel-Infrastructure.st Kernel-Infrastructure.st.bak
sed -e "/^version\$/,/^\! \!\$/ s/\^ '[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}\(-pre\)\{0,1\}'\$/^ '$1'/" Kernel-Infrastructure.st.bak >Kernel-Infrastructure.st
rm Kernel-Infrastructure.st.bak
cd ..
bin/amberc -d -l Kernel-Objects,Kernel-Collections Kernel-Infrastructure.st
cd st
mv *.js ../js
cd ..
for F in *.json; do
  cp $F $F.bak
  sed -e 's/"version": "[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}\(-pre\)\{0,1\}"/"version": "'"$1"'"/' $F.bak >$F
  rm $F.bak
done
