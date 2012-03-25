smalltalk.addPackage('Compiler-Tests', {});
smalltalk.addClass('ImporterTest', smalltalk.TestCase, [], 'Compiler-Tests');
smalltalk.addMethod(
unescape('_chunkString'),
smalltalk.method({
selector: unescape('chunkString'),
fn: function (){
var self=this;
return unescape("%21Object%20methodsFor%3A%20%27importer%20test%20method%27%21%0A%0AimporterTestMethod%0A%0A%09%5E%27success%27%0A%21%20%21%0A");
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
smalltalk.send(self, "_setUp", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function (){
var self=this;
smalltalk.send(self, "_tearDown", [], smalltalk.TestCase);
smalltalk.send(self, "_cleanUp", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_cleanUp'),
smalltalk.method({
selector: unescape('cleanUp'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", [smalltalk.symbolFor("importerTestMethod")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.Object || Object), "_removeCompiledMethod_", [smalltalk.send((smalltalk.Object || Object), "_methodAt_", [smalltalk.symbolFor("importerTestMethod")])]);})]));
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_bigChunkString'),
smalltalk.method({
selector: unescape('bigChunkString'),
fn: function (){
var self=this;
return unescape("Smalltalk%20current%20createPackage%3A%20%27Cypress-Definitions%27%20properties%3A%20%23%7B%7D%21%0AObject%20subclass%3A%20%23CypressSnapshot%0A%09instanceVariableNames%3A%20%27definitions%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressSnapshot%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Adefinitions%3A%20aDefinitions%0A%0A%09definitions%20%3A%3D%20aDefinitions%0A%21%0A%0Adefinitions%0A%0A%09%5Edefinitions%0A%21%20%21%0A%0A%21CypressSnapshot%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Adefinitions%3A%20aDefinitions%0A%0A%09%5E%28self%20new%29%20definitions%3A%20aDefinitions%0A%21%20%21%0A%0AObject%20subclass%3A%20%23CypressPackage%0A%09instanceVariableNames%3A%20%27name%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressPackage%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0A%3D%20other%0A%09%5E%20other%20species%20%3D%20self%20species%20and%3A%20%5Bother%20name%20sameAs%3A%20name%5D%0A%21%0A%0Aname%0A%09%5E%20name%0A%21%0A%0Aname%3A%20aString%0A%09name%20%3A%3D%20aString%0A%21%0A%0Asnapshot%0A%09%7C%20package%20definitions%20name%20%20%7C%0A%09package%20%3A%3D%20Package%20named%3A%20self%20name.%0A%09definitions%20%3A%3D%20OrderedCollection%20new.%0A%09package%20sortedClasses%20do%3A%20%5B%3Acls%20%7C%0A%20%20%20%20%20%20%20%20%09definitions%20add%3A%20cls%20asCypressClassDefinition.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20class%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09%5E%20CypressSnapshot%20definitions%3A%20definitions%0A%21%0A%0AprintString%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20name%2C%20%27%29%27%0A%21%20%21%0A%0AObject%20subclass%3A%20%23CypressDefinition%0A%09instanceVariableNames%3A%20%27%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressDefinition%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0A%3D%20aDefinition%0A%09%5E%28aDefinition%20isKindOf%3A%20CypressDefinition%29%20and%3A%20%5Bself%20isRevisionOf%3A%20aDefinition%5D%0A%21%0A%0AisRevisionOf%3A%20aDefinition%0A%09%5E%20%28aDefinition%20isKindOf%3A%20CypressDefinition%29%20and%3A%20%5BaDefinition%20description%20%3D%20self%20description%5D%0A%21%0A%0Adescription%0A%09self%20subclassResponsibility%0A%21%0A%0AisSameRevisionAs%3A%20aDefinition%0A%09%5E%20self%20%3D%20aDefinition%0A%21%20%21%0A%0AObject%20subclass%3A%20%23CypressPatch%0A%09instanceVariableNames%3A%20%27operations%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressPatch%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0AfromBase%3A%20baseSnapshot%20toTarget%3A%20targetSnapshot%0A%09%7C%20base%20target%20%7C%09%0A%09operations%20%3A%3D%20OrderedCollection%20new.%0A%09base%20%3A%3D%20CypressDefinitionIndex%20definitions%3A%20baseSnapshot%20definitions.%0A%09target%20%3A%3D%20CypressDefinitionIndex%20definitions%3A%20targetSnapshot%20definitions.%0A%09%0A%09target%20definitions%20do%3A%0A%09%09%5B%3At%20%7C%0A%09%09base%0A%09%09%09definitionLike%3A%20t%0A%09%09%09ifPresent%3A%20%5B%3Ab%20%7C%20%28b%20isSameRevisionAs%3A%20t%29%20ifFalse%3A%20%5Boperations%20add%3A%20%28CypressModification%20of%3A%20b%20to%3A%20t%29%5D%5D%0A%09%09%09ifAbsent%3A%20%5Boperations%20add%3A%20%28CypressAddition%20of%3A%20t%29%5D%5D.%0A%09%09%0A%09base%20definitions%20do%3A%0A%09%09%5B%3Ab%20%7C%0A%09%09target%0A%09%09%09definitionLike%3A%20b%0A%09%09%09ifPresent%3A%20%5B%3At%20%7C%20%5D%0A%09%09%09ifAbsent%3A%20%5Boperations%20add%3A%20%28CypressRemoval%20of%3A%20b%29%5D%5D%0A%21%0A%0Aoperations%0A%0A%09%5Eoperations%0A%21%20%21%0A%0A%21CypressPatch%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0AfromBase%3A%20baseSnapshot%20toTarget%3A%20targetSnapshot%0A%09%5E%20%28self%20new%29%0A%09%09fromBase%3A%20baseSnapshot%0A%09%09toTarget%3A%20targetSnapshot%0A%21%20%21%0A%0AObject%20subclass%3A%20%23CypressDefinitionIndex%0A%09instanceVariableNames%3A%20%27definitionMap%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressDefinitionIndex%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aadd%3A%20aDefinition%0A%09%5E%20self%20definitionMap%20at%3A%20aDefinition%20description%20put%3A%20aDefinition%0A%21%0A%0AaddAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aea%20%7C%20self%20add%3A%20ea%5D%0A%21%0A%0AdefinitionLike%3A%20aDefinition%20ifPresent%3A%20foundBlock%20ifAbsent%3A%20errorBlock%0A%09%7C%20definition%20%7C%0A%09definition%20%3A%3D%20self%20definitionMap%20at%3A%20aDefinition%20description%20ifAbsent%3A%20%5B%5D.%0A%09%5E%20definition%0A%09%09ifNil%3A%20errorBlock%0A%09%09ifNotNil%3A%20%5BfoundBlock%20value%3A%20definition%5D%0A%21%0A%0Adefinitions%0A%09%5Eself%20definitionMap%20values%0A%21%0A%0AdefinitionMap%0A%09definitionMap%20ifNil%3A%20%5B%20definitionMap%20%3A%3D%20Dictionary%20new%20%5D.%0A%09%5E%20definitionMap%0A%21%0A%0Aremove%3A%20aDefinition%0A%09self%20definitionMap%20removeKey%3A%20aDefinition%20description%20ifAbsent%3A%20%5B%5D%0A%21%20%21%0A%0A%21CypressDefinitionIndex%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Adefinitions%3A%20aCollection%0A%09%5E%20self%20new%20addAll%3A%20aCollection%0A%21%20%21%0A%0AObject%20subclass%3A%20%23CypressPatchOperation%0A%09instanceVariableNames%3A%20%27%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0ACypressDefinition%20subclass%3A%20%23CypressClassDefinition%0A%09instanceVariableNames%3A%20%27name%20superclassName%20category%20comment%20instVarNames%20classInstVarNames%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressClassDefinition%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aname%3A%20aClassName%20superclassName%3A%20aSuperclassName%20category%3A%20aCategory%20instVarNames%3A%20anInstanceVariableNames%20classInstVarNames%3A%20aClassInstanceVariableNames%20comment%3A%20aComment%0A%0A%09name%20%3A%3D%20aClassName.%0A%09superclassName%20%3A%3D%20aSuperclassName.%0A%09category%20%3A%3D%20aCategory.%0A%09instVarNames%20%3A%3D%20anInstanceVariableNames.%0A%09classInstVarNames%20%3A%3D%20aClassInstanceVariableNames.%0A%09comment%20%3A%3D%20aComment%0A%21%0A%0A%3D%20aDefinition%0A%09%5E%28super%20%3D%20aDefinition%29%0A%09%09and%3A%20%5BsuperclassName%20%3D%20aDefinition%20superclassName%0A%09%09and%3A%20%5Bcategory%20%3D%20aDefinition%20category%0A%09%09and%3A%20%5BinstVarNames%20%3D%20aDefinition%20instVarNames%0A%09%09and%3A%20%5BclassInstVarNames%20%3D%20aDefinition%20classInstVarNames%0A%09%09and%3A%20%5Bcomment%20%3D%20aDefinition%20comment%5D%5D%5D%5D%5D%0A%21%0A%0AsuperclassName%0A%0A%09%5EsuperclassName%0A%21%0A%0Aname%0A%0A%09%5Ename%0A%21%0A%0Acategory%0A%0A%09%5Ecategory%0A%21%0A%0Acomment%0A%0A%09%5Ecomment%0A%21%0A%0Adescription%0A%0A%09%5E%20Array%20with%3A%20name%0A%21%0A%0AinstVarNames%0A%0A%09%5EinstVarNames%0A%21%0A%0AclassInstVarNames%0A%0A%09%5EclassInstVarNames%0A%21%20%21%0A%0A%21CypressClassDefinition%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aname%3A%20aClassName%20%0AsuperclassName%3A%20aSuperclassName%0Acategory%3A%20aCategory%0AinstVarNames%3A%20anInstanceVariableNames%0AclassInstVarNames%3A%20aClassInstanceVariableNames%0Acomment%3A%20aComment%0A%0A%09%5E%28self%20new%29%20%0A%09%09name%3A%20aClassName%20%0A%09%09superclassName%3A%20aSuperclassName%0A%09%09category%3A%20aCategory%0A%09%09instVarNames%3A%20anInstanceVariableNames%0A%09%09classInstVarNames%3A%20aClassInstanceVariableNames%0A%09%09comment%3A%20aComment%0A%21%20%21%0A%0ACypressDefinition%20subclass%3A%20%23CypressMethodDefinition%0A%09instanceVariableNames%3A%20%27classIsMeta%20source%20category%20selector%20className%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressMethodDefinition%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0AclassName%3A%20aName%20classIsMeta%3A%20isMetaclass%20selector%3A%20aSelector%20category%3A%20aCategory%20source%3A%20aSource%0A%0A%09className%20%3A%3D%20aName.%0A%09classIsMeta%20%3A%3D%20isMetaclass.%0A%09selector%20%3A%3D%20aSelector.%0A%09category%20%3A%3D%20aCategory.%0A%09source%20%3A%3D%20aSource.%0A%21%0A%0A%3D%20aDefinition%0A%20%20%20%20%5E%20super%20%3D%20aDefinition%0A%20%20%20%20%20%20%20%20and%3A%20%5B%20aDefinition%20source%20%3D%20self%20source%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%3A%20%5B%20aDefinition%20category%20%3D%20self%20category%20%5D%20%5D%0A%21%0A%0Asource%0A%0A%09%5Esource%0A%21%0A%0Acategory%0A%0A%09%5Ecategory%0A%21%0A%0Adescription%0A%09%5E%20Array%09%0A%09%09with%3A%20className%0A%09%09with%3A%20selector%0A%09%09with%3A%20classIsMeta%0A%21%20%21%0A%0A%21CypressMethodDefinition%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0AclassName%3A%20aName%0AclassIsMeta%3A%20isMetaclass%0Aselector%3A%20aSelector%0Acategory%3A%20aCategory%0Asource%3A%20aSource%0A%0A%09%5E%28self%20new%29%0A%09%09className%3A%20aName%0A%09%09classIsMeta%3A%20isMetaclass%0A%09%09selector%3A%20aSelector%0A%09%09category%3A%20aCategory%0A%09%09source%3A%20aSource%0A%21%20%21%0A%0ACypressPatchOperation%20subclass%3A%20%23CypressAddition%0A%09instanceVariableNames%3A%20%27definition%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressAddition%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Adefinition%3A%20aDefinition%0A%0A%09definition%20%3A%3D%20aDefinition%0A%21%20%21%0A%0A%21CypressAddition%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aof%3A%20aDefinition%0A%09%5E%20self%20new%20definition%3A%20aDefinition%0A%21%20%21%0A%0ACypressPatchOperation%20subclass%3A%20%23CypressModification%0A%09instanceVariableNames%3A%20%27obsoletion%20modification%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressModification%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Abase%3A%20base%20target%3A%20target%0A%0A%09obsoletion%20%3A%3D%20base.%0A%09modification%20%3A%3D%20target.%0A%21%20%21%0A%0A%21CypressModification%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aof%3A%20base%20to%3A%20target%0A%09%5E%20self%20new%20base%3A%20base%20target%3A%20target%0A%21%20%21%0A%0ACypressPatchOperation%20subclass%3A%20%23CypressRemoval%0A%09instanceVariableNames%3A%20%27definition%27%0A%09package%3A%20%27Cypress-Definitions%27%21%0A%0A%21CypressRemoval%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Adefinition%3A%20aDefinition%0A%0A%09definition%20%3A%3D%20aDefinition%0A%21%20%21%0A%0A%21CypressRemoval%20class%20methodsFor%3A%20%27not%20yet%20classified%27%21%0A%0Aof%3A%20aDefinition%0A%09%5E%20self%20new%20definition%3A%20aDefinition%0A%21%20%21%0A%0A%21Object%20methodsFor%3A%20%27*Cypress-Definitions%27%21%0A%0Aspecies%0A%0A%09%5Eself%20class%0A%21%20%21%0A%0A%21Class%20methodsFor%3A%20%27*Cypress-Definitions%27%21%0A%0AasCypressClassDefinition%0A%09%5ECypressClassDefinition%0A%09%09name%3A%20self%20name%0A%09%09superclassName%3A%20self%20superclass%20name%0A%09%09category%3A%20self%20category%20%0A%09%09instVarNames%3A%20self%20instanceVariableNames%0A%09%09classInstVarNames%3A%20self%20class%20instanceVariableNames%0A%09%09comment%3A%20self%20comment%0A%21%20%21%0A%0A%21CompiledMethod%20methodsFor%3A%20%27*Cypress-Definitions%27%21%0A%0AasCypressMethodDefinition%0A%0A%09%5ECypressMethodDefinition%20%0A%20%20%20%20%20%20%20%20%09className%3A%20self%20methodClass%20name%0A%09%09classIsMeta%3A%20self%20methodClass%20isMetaclass%0A%09%09selector%3A%20self%20selector%0A%09%09category%3A%20self%20category%0A%09%09source%3A%20self%20source%0A%21%20%21%0A%0A%21CharacterArray%20methodsFor%3A%20%27*Cypress-Definitions%27%21%0A%0AsameAs%3A%20aString%0A%0A%09%5Eself%20asUppercase%20%3D%20aString%20asUppercase%0A%21%20%21%0A%0A");
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_testBigChunkString'),
smalltalk.method({
selector: unescape('testBigChunkString'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_bigChunkString", []), "_readStream", [])]);
smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_species", []);
return self;}
}),
smalltalk.ImporterTest);

smalltalk.addMethod(
unescape('_testChunkString'),
smalltalk.method({
selector: unescape('testChunkString'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_chunkString", []), "_readStream", [])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_methodDictionary", []), "_includesKey_", ["importerTestMethod"])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Object || Object), "_new", []), "_importerTestMethod", []), "__eq", ["success"])]);
return self;}
}),
smalltalk.ImporterTest);



smalltalk.addMethod(
unescape('_importerLoadMethod'),
smalltalk.method({
selector: unescape('importerLoadMethod'),
fn: function (){
var self=this;
return "success";
return self;}
}),
smalltalk.Object);

