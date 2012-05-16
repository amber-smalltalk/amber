smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('ImporterTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
"_bigChunkString",
smalltalk.method({
selector: "bigChunkString",
fn: function ImporterTest_bigChunkString(){
var self=this;
return "Smalltalk current createPackage: 'Cypress-Definitions' properties: #{}!\x0aObject subclass: #CypressSnapshot\x0a\x09instanceVariableNames: 'definitions'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressSnapshot methodsFor: 'not yet classified'!\x0a\x0adefinitions: aDefinitions\x0a\x0a\x09definitions := aDefinitions\x0a!\x0a\x0adefinitions\x0a\x0a\x09^definitions\x0a! !\x0a\x0a!CypressSnapshot class methodsFor: 'not yet classified'!\x0a\x0adefinitions: aDefinitions\x0a\x0a\x09^(self new) definitions: aDefinitions\x0a! !\x0a\x0aObject subclass: #CypressPackage\x0a\x09instanceVariableNames: 'name'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressPackage methodsFor: 'not yet classified'!\x0a\x0a= other\x0a\x09^ other species = self species and: [other name sameAs: name]\x0a!\x0a\x0aname\x0a\x09^ name\x0a!\x0a\x0aname: aString\x0a\x09name := aString\x0a!\x0a\x0asnapshot\x0a\x09| package definitions name  |\x0a\x09package := Package named: self name.\x0a\x09definitions := OrderedCollection new.\x0a\x09package sortedClasses do: [:cls |\x0a        \x09definitions add: cls asCypressClassDefinition.\x0a                cls methodDictionary values do: [:method |\x0a\x09\x09\x09(method category match: '^\x5c*') ifFalse: [ \x0a\x09\x09\x09\x09definitions add: method asCypressMethodDefinition ]].\x0a                cls class methodDictionary values do: [:method |\x0a\x09\x09\x09(method category match: '^\x5c*') ifFalse: [ \x0a\x09\x09\x09\x09definitions add: method asCypressMethodDefinition ]]].\x0a\x09name := package name.\x0a\x09Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |\x0a\x09\x09each methodDictionary values do: [:method |\x0a\x09\x09\x09method category = ('*', name) ifTrue: [\x0a\x09\x09\x09\x09definitions add: method asCypressMethodDefinition ]]].\x0a\x09^ CypressSnapshot definitions: definitions\x0a!\x0a\x0aprintString\x0a\x09^super printString, '(', name, ')'\x0a! !\x0a\x0aObject subclass: #CypressDefinition\x0a\x09instanceVariableNames: ''\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressDefinition methodsFor: 'not yet classified'!\x0a\x0a= aDefinition\x0a\x09^(aDefinition isKindOf: CypressDefinition) and: [self isRevisionOf: aDefinition]\x0a!\x0a\x0aisRevisionOf: aDefinition\x0a\x09^ (aDefinition isKindOf: CypressDefinition) and: [aDefinition description = self description]\x0a!\x0a\x0adescription\x0a\x09self subclassResponsibility\x0a!\x0a\x0aisSameRevisionAs: aDefinition\x0a\x09^ self = aDefinition\x0a! !\x0a\x0aObject subclass: #CypressPatch\x0a\x09instanceVariableNames: 'operations'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressPatch methodsFor: 'not yet classified'!\x0a\x0afromBase: baseSnapshot toTarget: targetSnapshot\x0a\x09| base target |\x09\x0a\x09operations := OrderedCollection new.\x0a\x09base := CypressDefinitionIndex definitions: baseSnapshot definitions.\x0a\x09target := CypressDefinitionIndex definitions: targetSnapshot definitions.\x0a\x09\x0a\x09target definitions do:\x0a\x09\x09[:t |\x0a\x09\x09base\x0a\x09\x09\x09definitionLike: t\x0a\x09\x09\x09ifPresent: [:b | (b isSameRevisionAs: t) ifFalse: [operations add: (CypressModification of: b to: t)]]\x0a\x09\x09\x09ifAbsent: [operations add: (CypressAddition of: t)]].\x0a\x09\x09\x0a\x09base definitions do:\x0a\x09\x09[:b |\x0a\x09\x09target\x0a\x09\x09\x09definitionLike: b\x0a\x09\x09\x09ifPresent: [:t | ]\x0a\x09\x09\x09ifAbsent: [operations add: (CypressRemoval of: b)]]\x0a!\x0a\x0aoperations\x0a\x0a\x09^operations\x0a! !\x0a\x0a!CypressPatch class methodsFor: 'not yet classified'!\x0a\x0afromBase: baseSnapshot toTarget: targetSnapshot\x0a\x09^ (self new)\x0a\x09\x09fromBase: baseSnapshot\x0a\x09\x09toTarget: targetSnapshot\x0a! !\x0a\x0aObject subclass: #CypressDefinitionIndex\x0a\x09instanceVariableNames: 'definitionMap'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressDefinitionIndex methodsFor: 'not yet classified'!\x0a\x0aadd: aDefinition\x0a\x09^ self definitionMap at: aDefinition description put: aDefinition\x0a!\x0a\x0aaddAll: aCollection\x0a\x09aCollection do: [:ea | self add: ea]\x0a!\x0a\x0adefinitionLike: aDefinition ifPresent: foundBlock ifAbsent: errorBlock\x0a\x09| definition |\x0a\x09definition := self definitionMap at: aDefinition description ifAbsent: [].\x0a\x09^ definition\x0a\x09\x09ifNil: errorBlock\x0a\x09\x09ifNotNil: [foundBlock value: definition]\x0a!\x0a\x0adefinitions\x0a\x09^self definitionMap values\x0a!\x0a\x0adefinitionMap\x0a\x09definitionMap ifNil: [ definitionMap := Dictionary new ].\x0a\x09^ definitionMap\x0a!\x0a\x0aremove: aDefinition\x0a\x09self definitionMap removeKey: aDefinition description ifAbsent: []\x0a! !\x0a\x0a!CypressDefinitionIndex class methodsFor: 'not yet classified'!\x0a\x0adefinitions: aCollection\x0a\x09^ self new addAll: aCollection\x0a! !\x0a\x0aObject subclass: #CypressPatchOperation\x0a\x09instanceVariableNames: ''\x0a\x09package: 'Cypress-Definitions'!\x0a\x0aCypressDefinition subclass: #CypressClassDefinition\x0a\x09instanceVariableNames: 'name superclassName category comment instVarNames classInstVarNames'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressClassDefinition methodsFor: 'not yet classified'!\x0a\x0aname: aClassName superclassName: aSuperclassName category: aCategory instVarNames: anInstanceVariableNames classInstVarNames: aClassInstanceVariableNames comment: aComment\x0a\x0a\x09name := aClassName.\x0a\x09superclassName := aSuperclassName.\x0a\x09category := aCategory.\x0a\x09instVarNames := anInstanceVariableNames.\x0a\x09classInstVarNames := aClassInstanceVariableNames.\x0a\x09comment := aComment\x0a!\x0a\x0a= aDefinition\x0a\x09^(super = aDefinition)\x0a\x09\x09and: [superclassName = aDefinition superclassName\x0a\x09\x09and: [category = aDefinition category\x0a\x09\x09and: [instVarNames = aDefinition instVarNames\x0a\x09\x09and: [classInstVarNames = aDefinition classInstVarNames\x0a\x09\x09and: [comment = aDefinition comment]]]]]\x0a!\x0a\x0asuperclassName\x0a\x0a\x09^superclassName\x0a!\x0a\x0aname\x0a\x0a\x09^name\x0a!\x0a\x0acategory\x0a\x0a\x09^category\x0a!\x0a\x0acomment\x0a\x0a\x09^comment\x0a!\x0a\x0adescription\x0a\x0a\x09^ Array with: name\x0a!\x0a\x0ainstVarNames\x0a\x0a\x09^instVarNames\x0a!\x0a\x0aclassInstVarNames\x0a\x0a\x09^classInstVarNames\x0a! !\x0a\x0a!CypressClassDefinition class methodsFor: 'not yet classified'!\x0a\x0aname: aClassName \x0asuperclassName: aSuperclassName\x0acategory: aCategory\x0ainstVarNames: anInstanceVariableNames\x0aclassInstVarNames: aClassInstanceVariableNames\x0acomment: aComment\x0a\x0a\x09^(self new) \x0a\x09\x09name: aClassName \x0a\x09\x09superclassName: aSuperclassName\x0a\x09\x09category: aCategory\x0a\x09\x09instVarNames: anInstanceVariableNames\x0a\x09\x09classInstVarNames: aClassInstanceVariableNames\x0a\x09\x09comment: aComment\x0a! !\x0a\x0aCypressDefinition subclass: #CypressMethodDefinition\x0a\x09instanceVariableNames: 'classIsMeta source category selector className'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressMethodDefinition methodsFor: 'not yet classified'!\x0a\x0aclassName: aName classIsMeta: isMetaclass selector: aSelector category: aCategory source: aSource\x0a\x0a\x09className := aName.\x0a\x09classIsMeta := isMetaclass.\x0a\x09selector := aSelector.\x0a\x09category := aCategory.\x0a\x09source := aSource.\x0a!\x0a\x0a= aDefinition\x0a    ^ super = aDefinition\x0a        and: [ aDefinition source = self source\x0a                and: [ aDefinition category = self category ] ]\x0a!\x0a\x0asource\x0a\x0a\x09^source\x0a!\x0a\x0acategory\x0a\x0a\x09^category\x0a!\x0a\x0adescription\x0a\x09^ Array\x09\x0a\x09\x09with: className\x0a\x09\x09with: selector\x0a\x09\x09with: classIsMeta\x0a! !\x0a\x0a!CypressMethodDefinition class methodsFor: 'not yet classified'!\x0a\x0aclassName: aName\x0aclassIsMeta: isMetaclass\x0aselector: aSelector\x0acategory: aCategory\x0asource: aSource\x0a\x0a\x09^(self new)\x0a\x09\x09className: aName\x0a\x09\x09classIsMeta: isMetaclass\x0a\x09\x09selector: aSelector\x0a\x09\x09category: aCategory\x0a\x09\x09source: aSource\x0a! !\x0a\x0aCypressPatchOperation subclass: #CypressAddition\x0a\x09instanceVariableNames: 'definition'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressAddition methodsFor: 'not yet classified'!\x0a\x0adefinition: aDefinition\x0a\x0a\x09definition := aDefinition\x0a! !\x0a\x0a!CypressAddition class methodsFor: 'not yet classified'!\x0a\x0aof: aDefinition\x0a\x09^ self new definition: aDefinition\x0a! !\x0a\x0aCypressPatchOperation subclass: #CypressModification\x0a\x09instanceVariableNames: 'obsoletion modification'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressModification methodsFor: 'not yet classified'!\x0a\x0abase: base target: target\x0a\x0a\x09obsoletion := base.\x0a\x09modification := target.\x0a! !\x0a\x0a!CypressModification class methodsFor: 'not yet classified'!\x0a\x0aof: base to: target\x0a\x09^ self new base: base target: target\x0a! !\x0a\x0aCypressPatchOperation subclass: #CypressRemoval\x0a\x09instanceVariableNames: 'definition'\x0a\x09package: 'Cypress-Definitions'!\x0a\x0a!CypressRemoval methodsFor: 'not yet classified'!\x0a\x0adefinition: aDefinition\x0a\x0a\x09definition := aDefinition\x0a! !\x0a\x0a!CypressRemoval class methodsFor: 'not yet classified'!\x0a\x0aof: aDefinition\x0a\x09^ self new definition: aDefinition\x0a! !\x0a\x0a!Object methodsFor: '*Cypress-Definitions'!\x0a\x0aspecies\x0a\x0a\x09^self class\x0a! !\x0a\x0a!Class methodsFor: '*Cypress-Definitions'!\x0a\x0aasCypressClassDefinition\x0a\x09^CypressClassDefinition\x0a\x09\x09name: self name\x0a\x09\x09superclassName: self superclass name\x0a\x09\x09category: self category \x0a\x09\x09instVarNames: self instanceVariableNames\x0a\x09\x09classInstVarNames: self class instanceVariableNames\x0a\x09\x09comment: self comment\x0a! !\x0a\x0a!CompiledMethod methodsFor: '*Cypress-Definitions'!\x0a\x0aasCypressMethodDefinition\x0a\x0a\x09^CypressMethodDefinition \x0a        \x09className: self methodClass name\x0a\x09\x09classIsMeta: self methodClass isMetaclass\x0a\x09\x09selector: self selector\x0a\x09\x09category: self category\x0a\x09\x09source: self source\x0a! !\x0a\x0a!CharacterArray methodsFor: '*Cypress-Definitions'!\x0a\x0asameAs: aString\x0a\x0a\x09^self asUppercase = aString asUppercase\x0a! !\x0a\x0a";
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_chunkString",
smalltalk.method({
selector: "chunkString",
fn: function ImporterTest_chunkString(){
var self=this;
return "!Object methodsFor: 'importer test method'!\x0a\x0aimporterTestMethod\x0a\x0a\x09^'success'\x0a! !\x0a";
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_cleanUp",
smalltalk.method({
selector: "cleanUp",
fn: function ImporterTest_cleanUp(){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", [smalltalk.symbolFor("importerTestMethod")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})]));
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function ImporterTest_setUp(){
var self=this;
smalltalk.send(self, "_setUp", [], ImporterTest_setUp.method.methodClass.superclass || nil);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function ImporterTest_tearDown(){
var self=this;
smalltalk.send(self, "_tearDown", [], ImporterTest_tearDown.method.methodClass.superclass || nil);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_testBigChunkString",
smalltalk.method({
selector: "testBigChunkString",
fn: function ImporterTest_testBigChunkString(){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_bigChunkString", []), "_readStream", [])]);
smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_species", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
"_testChunkString",
smalltalk.method({
selector: "testChunkString",
fn: function ImporterTest_testChunkString(){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_chunkString", []), "_readStream", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", ["importerTestMethod"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_importerTestMethod", []), "__eq", ["success"])]);
return self;}
}),
smalltalk.ImporterTest);



smalltalk.addMethod(
"_importerLoadMethod",
smalltalk.method({
selector: "importerLoadMethod",
fn: function Object_importerLoadMethod(){
var self=this;
return "success";
return self;}
}),
smalltalk.Object);

