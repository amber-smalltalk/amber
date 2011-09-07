smalltalk.addClass('PyStoneRecord', smalltalk.Object, ['ptrComp', 'discr', 'enumComp', 'intComp', 'stringComp'], 'Pystone');
smalltalk.PyStoneRecord.comment=unescape('Record%20class%20used%20in%20Pystone%20benchmark.')
smalltalk.addMethod(
'_discr',
smalltalk.method({
selector: 'discr',
category: 'accessing',
fn: function (){
var self=this;
return self['@discr'];
return self;},
source: unescape('discr%0A%09%5Ediscr'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_discr_',
smalltalk.method({
selector: 'discr:',
category: 'accessing',
fn: function (p){
var self=this;
self['@discr']=p;
return self;},
source: unescape('discr%3A%20p%0A%09discr%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_enumComp',
smalltalk.method({
selector: 'enumComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@enumComp'];
return self;},
source: unescape('enumComp%0A%09%5EenumComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_enumComp_',
smalltalk.method({
selector: 'enumComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@enumComp']=p;
return self;},
source: unescape('enumComp%3A%20p%0A%09enumComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_intComp',
smalltalk.method({
selector: 'intComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@intComp'];
return self;},
source: unescape('intComp%0A%09%5EintComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_intComp_',
smalltalk.method({
selector: 'intComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@intComp']=p;
return self;},
source: unescape('intComp%3A%20p%0A%09intComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp',
smalltalk.method({
selector: 'ptrComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@ptrComp'];
return self;},
source: unescape('ptrComp%0A%09%5EptrComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp_',
smalltalk.method({
selector: 'ptrComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@ptrComp']=p;
return self;},
source: unescape('ptrComp%3A%20p%0A%09ptrComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_stringComp',
smalltalk.method({
selector: 'stringComp',
category: 'accessing',
fn: function (){
var self=this;
return self['@stringComp'];
return self;},
source: unescape('stringComp%0A%09%5EstringComp'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_stringComp_',
smalltalk.method({
selector: 'stringComp:',
category: 'accessing',
fn: function (p){
var self=this;
self['@stringComp']=p;
return self;},
source: unescape('stringComp%3A%20p%0A%09stringComp%20%3A%3D%20p'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_copy',
smalltalk.method({
selector: 'copy',
category: 'copying',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_ptrComp_discr_enumComp_intComp_stringComp_", [self['@ptrComp'], self['@discr'], self['@enumComp'], self['@intComp'], self['@stringComp']]);
return self;},
source: unescape('copy%0A%09%5EPyStoneRecord%20ptrComp%3A%20ptrComp%20discr%3A%20discr%20enumComp%3A%20enumComp%20intComp%3A%20intComp%20stringComp%3A%20stringComp'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:"],
referencedClasses: [smalltalk.PyStoneRecord]
}),
smalltalk.PyStoneRecord);

smalltalk.addMethod(
'_ptrComp_discr_enumComp_intComp_stringComp_',
smalltalk.method({
selector: 'ptrComp:discr:enumComp:intComp:stringComp:',
category: 'initialize-release',
fn: function (p, d, e, i, s){
var self=this;
self['@ptrComp']=p;
self['@discr']=d;
self['@enumComp']=e;
self['@intComp']=i;
self['@stringComp']=s;
return self;},
source: unescape('ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s%0A%0A%09ptrComp%20%3A%3D%20p.%0A%09discr%20%3A%3D%20d.%0A%09enumComp%20%3A%3D%20e.%0A%09intComp%20%3A%3D%20i.%0A%09stringComp%20%3A%3D%20s'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PyStoneRecord);


smalltalk.addMethod(
'_new',
smalltalk.method({
selector: 'new',
category: 'instance-creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_ptrComp_discr_enumComp_intComp_stringComp_", [nil, (0), (0), (0), (0)]);
return self;},
source: unescape('new%0A%0A%09%5Eself%20ptrComp%3A%20nil%20discr%3A%200%20enumComp%3A%200%20intComp%3A%200%20stringComp%3A%200'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:"],
referencedClasses: []
}),
smalltalk.PyStoneRecord.klass);

smalltalk.addMethod(
'_ptrComp_discr_enumComp_intComp_stringComp_',
smalltalk.method({
selector: 'ptrComp:discr:enumComp:intComp:stringComp:',
category: 'instance-creation',
fn: function (p, d, e, i, s){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Object.klass), "_ptrComp_discr_enumComp_intComp_stringComp_", [p, d, e, i, s]);
return self;},
source: unescape('ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s%0A%0A%09%5Esuper%20new%20ptrComp%3A%20p%20discr%3A%20d%20enumComp%3A%20e%20intComp%3A%20i%20stringComp%3A%20s'),
messageSends: ["ptrComp:discr:enumComp:intComp:stringComp:", "new"],
referencedClasses: []
}),
smalltalk.PyStoneRecord.klass);


smalltalk.addClass('Pystone', smalltalk.Object, ['nulltime', 'ptrGlbNext', 'ptrGlb', 'ident1', 'ident3', 'ident2', 'ident4', 'ident5', 'ident6', 'intGlob', 'boolGlob', 'char1Glob', 'char2Glob', 'array1Glob', 'array2Glob', 'func3', 'func2', 'func1'], 'Pystone');
smalltalk.Pystone.comment=unescape('This%20is%20a%20straight%20translation%20of%20pystone%201.1%20from%20Python%20to%20Squeak.%20Procedures%20have%20been%20mapped%20to%20instance%20side%20methods%2C%20functions%20have%20been%20mapped%20to%20blocks.%20Open%20a%20transcript%20and%20run%3A%0A%0APystone%20run')
smalltalk.addMethod(
'_defineFunctions',
smalltalk.method({
selector: 'defineFunctions',
category: 'as yet unclassified',
fn: function (){
var self=this;
self['@func1']=(function(charPar1, charPar2){var charLoc1=nil;
var charLoc2=nil;
charLoc1=charPar1;charLoc2=charLoc1;return (($receiver = smalltalk.send(charLoc2, "__eq", [charPar2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@ident2'];})() : (function(){return self['@ident1'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@ident2'];}), (function(){return self['@ident1'];})]);});
self['@func2']=(function(strParI1, strParI2){var intLoc=nil;
var charLoc=nil;
intLoc=(1);(function(){while((function(){return (($receiver = intLoc).klass === smalltalk.Number) ? $receiver <=(1) : smalltalk.send($receiver, "__lt_eq", [(1)]);})()) {(function(){return (($receiver = smalltalk.send(smalltalk.send(self['@func1'], "_value_value_", [smalltalk.send(strParI1, "_at_", [intLoc]), smalltalk.send(strParI1, "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])])]), "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){charLoc="A";return intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){charLoc="A";return intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})]);})()}})();(($receiver = smalltalk.send((($receiver = charLoc).klass === smalltalk.Number) ? $receiver >="W" : smalltalk.send($receiver, "__gt_eq", ["W"]), "_and_", [(function(){return (($receiver = charLoc).klass === smalltalk.Number) ? $receiver <="Z" : smalltalk.send($receiver, "__lt_eq", ["Z"]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return intLoc=(7);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return intLoc=(7);})]);return (($receiver = smalltalk.send(charLoc, "__eq", ["X"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return true;})() : (function(){return (($receiver = (($receiver = strParI1).klass === smalltalk.Number) ? $receiver >strParI2 : smalltalk.send($receiver, "__gt", [strParI2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;})() : (function(){return false;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;}), (function(){return false;})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return true;}), (function(){return (($receiver = (($receiver = strParI1).klass === smalltalk.Number) ? $receiver >strParI2 : smalltalk.send($receiver, "__gt", [strParI2])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;})() : (function(){return false;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(7) : smalltalk.send($receiver, "__plus", [(7)]);return true;}), (function(){return false;})]);})]);});
self['@func3']=(function(enumParIn){var enumLoc=nil;
enumLoc=enumParIn;return smalltalk.send(enumLoc, "__eq", [self['@ident3']]);});
return self;},
source: unescape('defineFunctions%0A%09%22Functions%20have%20been%20mapped%20to%20blocks%2C%20since%20that%0A%09would%20be%20natural.%22%0A%09%0A%09func1%20%3A%3D%20%5B%3AcharPar1%20%3AcharPar2%20%7C%0A%09%09%7C%20charLoc1%20charLoc2%20%7C%0A%09%09charLoc1%20%3A%3D%20charPar1.%0A%09%09charLoc2%20%3A%3D%20charLoc1.%0A%09%09%28charLoc2%20%3D%20charPar2%29%20ifTrue%3A%20%5Bident2%5D%20ifFalse%3A%20%5Bident1%5D%5D.%0A%0A%09func2%20%3A%3D%20%5B%3AstrParI1%20%3AstrParI2%20%7C%0A%09%09%7C%20intLoc%20charLoc%20%7C%0A%09%09intLoc%20%3A%3D%201.%0A%09%09%5BintLoc%20%3C%3D%201%5D%20whileTrue%3A%20%5B%0A%09%09%09%28%28func1%20value%3A%20%28strParI1%20at%3A%20intLoc%29%20value%3A%20%28strParI1%20at%3A%20intLoc%20+%201%29%29%20%3D%20ident1%29%0A%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09charLoc%20%3A%3D%20%27A%27.%0A%09%09%09%09%09intLoc%20%3A%3D%20intLoc%20+%201%5D%5D.%0A%09%09%28charLoc%20%3E%3D%20%27W%27%20and%3A%20%5BcharLoc%20%3C%3D%20%27Z%27%5D%29%20ifTrue%3A%20%5B%0A%09%09%09intLoc%20%3A%3D%207%5D.%0A%09%09%28charLoc%20%3D%20%27X%27%29%20ifTrue%3A%20%5Btrue%5D%20ifFalse%3A%20%5B%0A%09%09%09%28strParI1%20%3E%20strParI2%29%20ifTrue%3A%20%5B%0A%09%09%09%09intLoc%20%3A%3D%20intLoc%20+%207.%0A%09%09%09%09true%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09false%5D%5D%5D.%0A%09%0A%09func3%20%3A%3D%20%5B%3AenumParIn%20%7C%0A%09%09%7C%20enumLoc%20%7C%0A%09%09enumLoc%20%3A%3D%20enumParIn.%0A%09%09enumLoc%20%3D%20ident3%5D'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "whileTrue:", unescape("%3C%3D"), "ifTrue:", "value:value:", "at:", unescape("+"), "and:", unescape("%3E%3D"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_main_',
smalltalk.method({
selector: 'main:',
category: 'as yet unclassified',
fn: function (loops){
var self=this;
self['@ident1']=(1);
self['@ident2']=(2);
self['@ident3']=(3);
self['@ident4']=(4);
self['@ident5']=(5);
self['@ident6']=(6);
self['@intGlob']=(0);
self['@boolGlob']=false;
self['@char1Glob']=smalltalk.send((smalltalk.String || String), "_value_", [(0)]);
self['@char2Glob']=smalltalk.send((smalltalk.String || String), "_value_", [(0)]);
self['@array1Glob']=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send((51), "_timesRepeat_", [(function(){return smalltalk.send(self['@array1Glob'], "_add_", [(0)]);})]);
self['@array2Glob']=smalltalk.send(smalltalk.send(smalltalk.send((1), "_to_", [(51)]), "_collect_", [(function(i){return smalltalk.send(self['@array1Glob'], "_copy", []);})]), "_asArray", []);
smalltalk.send(self, "_defineFunctions", []);
smalltalk.send(self, "_pystones_block_", [loops, (function(benchtime, stones){smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("Pystone%281.1%29%20time%20for%20"), "__comma", [smalltalk.send(loops, "_asString", [])]), "__comma", [unescape("%20passes%20%3D%20")]), "__comma", [smalltalk.send(benchtime, "_asString", [])])]);return smalltalk.send(self, "_log_", [smalltalk.send(smalltalk.send("This machine benchmarks at ", "__comma", [smalltalk.send((($receiver = smalltalk.send((($receiver = stones).klass === smalltalk.Number) ? $receiver /(0.1) : smalltalk.send($receiver, "__slash", [(0.1)]), "_rounded", [])).klass === smalltalk.Number) ? $receiver *(0.1) : smalltalk.send($receiver, "__star", [(0.1)]), "_asString", [])]), "__comma", [unescape("%20pystones/second")])]);})]);
return self;},
source: unescape('main%3A%20loops%0A%09%22Adaption%20of%20pystone.py%20version%201.9%20from%20Python.%22%0A%0A%09ident1%20%3A%3D%201.%20ident2%20%3A%3D%202.%20ident3%20%3A%3D%203.%20ident4%20%3A%3D%204.%20ident5%20%3A%3D%205.%20ident6%20%3A%3D%206.%0A%09intGlob%20%3A%3D%200.%0A%09boolGlob%20%3A%3D%20false.%0A%09char1Glob%20%3A%3D%20String%20value%3A%200.%0A%09char2Glob%20%3A%3D%20String%20value%3A%200.%0A%09array1Glob%20%3A%3D%20Array%20new.%0A%20%20%20%20%20%20%20%2051%20timesRepeat%3A%20%5B%20array1Glob%20add%3A%200%5D.%0A%09array2Glob%20%3A%3D%20%28%281%20to%3A%2051%29%20collect%3A%20%5B%3Ai%20%7C%20array1Glob%20copy%5D%29%20asArray.%0A%0A%09self%20defineFunctions.%0A%0A%09self%20pystones%3A%20loops%20block%3A%20%5B%3Abenchtime%20%3Astones%20%7C%0A%09%09self%20log%3A%20%27Pystone%281.1%29%20time%20for%20%27%2C%20loops%20asString%2C%20%27%20passes%20%3D%20%27%2C%20benchtime%20asString.%0A%09%09self%20log%3A%20%27This%20machine%20benchmarks%20at%20%27%2C%0A%09%09%09%28%28stones%20/%200.1%29%20rounded%20*%200.1%29%20asString%2C%20%27%20pystones/second%27%5D'),
messageSends: ["value:", "new", "timesRepeat:", "add:", "asArray", "collect:", "to:", "copy", "defineFunctions", "pystones:block:", "log:", unescape("%2C"), "asString", unescape("*"), "rounded", unescape("/")],
referencedClasses: [smalltalk.String,smalltalk.Array]
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_log_',
smalltalk.method({
selector: 'log:',
category: 'as yet unclassified',
fn: function (aString){
var self=this;
(($receiver = smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_at_", ["Transcript"])) == nil || $receiver == undefined) ? (function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aString]);})() : (function(){return (function($rec){smalltalk.send($rec, "_show_", [aString]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));})();
return self;},
source: unescape('log%3A%20aString%0A%09%28smalltalk%20at%3A%20%23Transcript%29%0A%09%09ifNotNil%3A%20%5B%0A%09%09%09Transcript%20show%3A%20aString%3Bcr%5D%0A%09%09ifNil%3A%20%5B%0A%09%09%09console%20log%3A%20aString%5D'),
messageSends: ["ifNotNil:ifNil:", "at:", "log:", "show:", "cr"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc0_block_',
smalltalk.method({
selector: 'proc0:block:',
category: 'as yet unclassified',
fn: function (loops, aBlock){
var self=this;
var string1Loc=nil;
var starttime=nil;
var intLoc1=nil;
var intLoc2=nil;
var string2Loc=nil;
var enumLoc=nil;
var intLoc3=nil;
var charIndex=nil;
var benchtime=nil;
smalltalk.send(loops, "_timesRepeat_", [(function(){return nil;})]);
benchtime=smalltalk.send((smalltalk.Date || Date), "_millisecondsToRun_", [(function(){self['@ptrGlbNext']=smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_new", []);self['@ptrGlb']=smalltalk.send((smalltalk.PyStoneRecord || PyStoneRecord), "_new", []);smalltalk.send(self['@ptrGlb'], "_ptrComp_", [self['@ptrGlbNext']]);smalltalk.send(self['@ptrGlb'], "_discr_", [self['@ident1']]);smalltalk.send(self['@ptrGlb'], "_enumComp_", [self['@ident3']]);smalltalk.send(self['@ptrGlb'], "_intComp_", [(40)]);smalltalk.send(self['@ptrGlb'], "_stringComp_", [unescape("DHRYSTONE%20PROGRAM%2C%20SOME%20STRING")]);string1Loc=unescape("DHRYSTONE%20PROGRAM%2C%201%27ST%20STRING");smalltalk.send(smalltalk.send(self['@array2Glob'], "_at_", [(8)]), "_at_put_", [(7), (10)]);return smalltalk.send(loops, "_timesRepeat_", [(function(){(function($rec){smalltalk.send($rec, "_proc5", []);return smalltalk.send($rec, "_proc4", []);})(self);intLoc1=(2);intLoc2=(3);string2Loc=unescape("DHRYSTONE%20PROGRAM%2C%202%27ND%20STRING");enumLoc=self['@ident2'];self['@boolGlob']=smalltalk.send(smalltalk.send(self['@func2'], "_value_value_", [string1Loc, string2Loc]), "_not", []);(function(){while((function(){return (($receiver = intLoc1).klass === smalltalk.Number) ? $receiver <intLoc2 : smalltalk.send($receiver, "__lt", [intLoc2]);})()) {(function(){intLoc3=(($receiver = (5) * intLoc1).klass === smalltalk.Number) ? $receiver -intLoc2 : smalltalk.send($receiver, "__minus", [intLoc2]);intLoc3=smalltalk.send(self, "_proc7_with_", [intLoc1, intLoc2]);return intLoc1=(($receiver = intLoc1).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})()}})();smalltalk.send(self, "_proc8_with_with_with_", [self['@array1Glob'], self['@array2Glob'], intLoc1, intLoc3]);self['@ptrGlb']=smalltalk.send(self, "_proc1_", [self['@ptrGlb']]);charIndex="A";(function(){while((function(){return (($receiver = charIndex).klass === smalltalk.Number) ? $receiver <=self['@char2Glob'] : smalltalk.send($receiver, "__lt_eq", [self['@char2Glob']]);})()) {(function(){(($receiver = smalltalk.send(enumLoc, "__eq", [smalltalk.send(self['@func1'], "_value_value_", [charIndex, "C"])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumLoc=smalltalk.send(self, "_proc6_", [self['@ident1']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumLoc=smalltalk.send(self, "_proc6_", [self['@ident1']]);})]);return charIndex=smalltalk.send((smalltalk.String || String), "_value_", [(($receiver = smalltalk.send(charIndex, "_asciiValue", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);})()}})();intLoc3=(($receiver = intLoc2).klass === smalltalk.Number) ? $receiver *intLoc1 : smalltalk.send($receiver, "__star", [intLoc1]);intLoc2=(($receiver = intLoc3).klass === smalltalk.Number) ? $receiver /intLoc1 : smalltalk.send($receiver, "__slash", [intLoc1]);intLoc2=(($receiver = (7) * (($receiver = intLoc3).klass === smalltalk.Number) ? $receiver -intLoc2 : smalltalk.send($receiver, "__minus", [intLoc2])).klass === smalltalk.Number) ? $receiver -intLoc1 : smalltalk.send($receiver, "__minus", [intLoc1]);return intLoc1=smalltalk.send(self, "_proc2_", [intLoc1]);})]);})]);
return smalltalk.send(aBlock, "_value_value_", [(($receiver = benchtime).klass === smalltalk.Number) ? $receiver /(1000) : smalltalk.send($receiver, "__slash", [(1000)]), (($receiver = (($receiver = loops).klass === smalltalk.Number) ? $receiver /benchtime : smalltalk.send($receiver, "__slash", [benchtime])).klass === smalltalk.Number) ? $receiver *(1000) : smalltalk.send($receiver, "__star", [(1000)])]);
return self;},
source: unescape('proc0%3A%20loops%20block%3A%20aBlock%0A%09%7C%20string1Loc%20starttime%20intLoc1%20intLoc2%20string2Loc%20enumLoc%20intLoc3%20charIndex%20benchtime%20%7C%0A%0A%09loops%20timesRepeat%3A%20%5B%5D.%0A%0A%09benchtime%20%3A%3D%20Date%20millisecondsToRun%3A%20%5B%0A%09ptrGlbNext%20%3A%3D%20PyStoneRecord%20new.%0A%09ptrGlb%20%3A%3D%20PyStoneRecord%20new.%0A%09ptrGlb%20ptrComp%3A%20ptrGlbNext.%0A%09ptrGlb%20discr%3A%20ident1.%0A%09ptrGlb%20enumComp%3A%20ident3.%0A%09ptrGlb%20intComp%3A%2040.%0A%09ptrGlb%20stringComp%3A%20%27DHRYSTONE%20PROGRAM%2C%20SOME%20STRING%27.%0A%09string1Loc%20%3A%3D%20%27DHRYSTONE%20PROGRAM%2C%201%27%27ST%20STRING%27.%0A%09%0A%09%28array2Glob%20at%3A%208%29%20at%3A%207%20put%3A%2010.%0A%09%221%20to%3A%20loops%20-%201%20do%3A%20%5B%3Ai%20%7C%20%20%20%20%20%20%20Changed%20this%20to%20use%20timesRepeat%3A%20since%20i%20is%20not%20used%20at%20all%20in%20the%20loop%22%0A%09loops%20timesRepeat%3A%20%5B%0A%09%09self%20proc5%3B%20proc4.%0A%09%09intLoc1%20%3A%3D%202.%0A%09%09intLoc2%20%3A%3D%203.%0A%09%09string2Loc%20%3A%3D%20%27DHRYSTONE%20PROGRAM%2C%202%27%27ND%20STRING%27.%0A%09%09enumLoc%20%3A%3D%20ident2.%0A%09%09boolGlob%20%3A%3D%20%28func2%20value%3A%20string1Loc%20value%3A%20string2Loc%29%20not.%0A%09%09%5BintLoc1%20%3C%20intLoc2%5D%20whileTrue%3A%20%5B%0A%09%09%09intLoc3%20%3A%3D%205%20*%20intLoc1%20-%20intLoc2.%0A%09%09%09intLoc3%20%3A%3D%20self%20proc7%3A%20intLoc1%20with%3A%20intLoc2.%0A%09%09%09intLoc1%20%3A%3D%20intLoc1%20+%201%5D.%0A%09%20%09self%20proc8%3Aarray1Glob%20with%3A%20array2Glob%20with%3A%20intLoc1%20with%3A%20intLoc3.%0A%09%09ptrGlb%20%3A%3D%20self%20proc1%3A%20ptrGlb.%0A%09%09charIndex%20%3A%3D%20%27A%27.%0A%09%09%5BcharIndex%20%3C%3D%20char2Glob%5D%20whileTrue%3A%20%5B%0A%09%09%09%28enumLoc%20%3D%20%28func1%20value%3A%20charIndex%20value%3A%20%27C%27%29%29%0A%09%09%09%09%09ifTrue%3A%20%5BenumLoc%20%3A%3D%20self%20proc6%3A%20ident1%5D.%0A%09%09%09charIndex%20%3A%3D%20String%20value%3A%20%28charIndex%20asciiValue%20+%201%29%5D.%0A%09%09intLoc3%20%3A%3D%20intLoc2%20*%20intLoc1.%0A%09%09intLoc2%20%3A%3D%20intLoc3%20/%20intLoc1.%0A%09%09intLoc2%20%3A%3D%207%20*%20%28intLoc3%20-%20intLoc2%29%20-%20intLoc1.%0A%09%09intLoc1%20%3A%3D%20self%20proc2%3A%20intLoc1%5D%5D.%0A%20%20%20%20%5E%20aBlock%20value%3A%20%28benchtime%20/%201000%29%20value%3A%20%28loops%20/%20benchtime%29%20*%201000'),
messageSends: ["timesRepeat:", "millisecondsToRun:", "new", "ptrComp:", "discr:", "enumComp:", "intComp:", "stringComp:", "at:put:", "at:", "proc5", "proc4", "not", "value:value:", "whileTrue:", unescape("%3C"), unescape("-"), unescape("*"), "proc7:with:", unescape("+"), "proc8:with:with:with:", "proc1:", unescape("%3C%3D"), "ifTrue:", unescape("%3D"), "proc6:", "value:", "asciiValue", unescape("/"), "proc2:"],
referencedClasses: [smalltalk.Date,smalltalk.PyStoneRecord,smalltalk.String]
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc1_',
smalltalk.method({
selector: 'proc1:',
category: 'as yet unclassified',
fn: function (ptrParIn){
var self=this;
var nextRecord=nil;
var tmp=nil;
tmp=ptrParIn;
nextRecord=smalltalk.send(self['@ptrGlb'], "_copy", []);
smalltalk.send(ptrParIn, "_ptrComp_", [nextRecord]);
smalltalk.send(ptrParIn, "_intComp_", [(5)]);
smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(ptrParIn, "_intComp", [])]);
smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(ptrParIn, "_ptrComp", [])]);
smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self, "_proc3_", [smalltalk.send(nextRecord, "_ptrComp", [])])]);
(($receiver = smalltalk.send(smalltalk.send(nextRecord, "_discr", []), "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(nextRecord, "_intComp_", [(6)]);smalltalk.send(nextRecord, "_enumComp_", [smalltalk.send(self, "_proc6_", [smalltalk.send(ptrParIn, "_enumComp", [])])]);smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self['@ptrGlb'], "_ptrComp", [])]);return smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(self, "_proc7_with_", [smalltalk.send(nextRecord, "_intComp", []), (10)])]);})() : (function(){return tmp=smalltalk.send(nextRecord, "_copy", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(nextRecord, "_intComp_", [(6)]);smalltalk.send(nextRecord, "_enumComp_", [smalltalk.send(self, "_proc6_", [smalltalk.send(ptrParIn, "_enumComp", [])])]);smalltalk.send(nextRecord, "_ptrComp_", [smalltalk.send(self['@ptrGlb'], "_ptrComp", [])]);return smalltalk.send(nextRecord, "_intComp_", [smalltalk.send(self, "_proc7_with_", [smalltalk.send(nextRecord, "_intComp", []), (10)])]);}), (function(){return tmp=smalltalk.send(nextRecord, "_copy", []);})]);
smalltalk.send(nextRecord, "_ptrComp_", [nil]);
return tmp;
return self;},
source: unescape('proc1%3A%20ptrParIn%0A%09%7C%20nextRecord%20tmp%20%7C%0A%09tmp%20%3A%3D%20ptrParIn.%0A%09nextRecord%20%3A%3D%20ptrGlb%20copy.%0A%09ptrParIn%20ptrComp%3A%20nextRecord.%0A%09ptrParIn%20intComp%3A%205.%0A%09nextRecord%20intComp%3A%20ptrParIn%20intComp.%0A%09nextRecord%20ptrComp%3A%20ptrParIn%20ptrComp.%0A%09nextRecord%20ptrComp%3A%20%28self%20proc3%3A%20nextRecord%20ptrComp%29.%0A%09%28nextRecord%20discr%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09nextRecord%20intComp%3A%206.%0A%09%09nextRecord%20enumComp%3A%20%28self%20proc6%3A%20ptrParIn%20enumComp%29.%0A%09%09nextRecord%20ptrComp%3A%20ptrGlb%20ptrComp.%0A%09%09nextRecord%20intComp%3A%20%28self%20proc7%3A%20nextRecord%20intComp%20with%3A%2010%29%20%5D%0A%09ifFalse%3A%20%5B%0A%09%09tmp%20%3A%3D%20nextRecord%20copy%5D.%0A%09nextRecord%20ptrComp%3A%20nil.%0A%09%5Etmp'),
messageSends: ["copy", "ptrComp:", "intComp:", "intComp", "ptrComp", "proc3:", "ifTrue:ifFalse:", unescape("%3D"), "discr", "enumComp:", "proc6:", "enumComp", "proc7:with:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc2_',
smalltalk.method({
selector: 'proc2:',
category: 'as yet unclassified',
fn: function (intParIO){
var self=this;
try{var tmp=nil;
var intLoc=nil;
var enumLoc=nil;
tmp=intParIO;
intLoc=(($receiver = intParIO).klass === smalltalk.Number) ? $receiver +(10) : smalltalk.send($receiver, "__plus", [(10)]);
(function(){while((function(){return true;})()) {(function(){(($receiver = smalltalk.send(self['@char1Glob'], "__eq", ["A"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);tmp=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -self['@intGlob'] : smalltalk.send($receiver, "__minus", [self['@intGlob']]);return enumLoc=self['@ident1'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){intLoc=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);tmp=(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -self['@intGlob'] : smalltalk.send($receiver, "__minus", [self['@intGlob']]);return enumLoc=self['@ident1'];})]);return (($receiver = smalltalk.send(enumLoc, "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_proc2_', fn: function(){return tmp}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_proc2_', fn: function(){return tmp}})})();})]);})()}})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_proc2_'){return e.fn()} throw(e)}},
source: unescape('proc2%3A%20intParIO%0A%09%7C%20tmp%20intLoc%20enumLoc%20%7C%0A%09tmp%20%3A%3D%20intParIO.%0A%09intLoc%20%3A%3D%20intParIO%20+%2010.%0A%09%5Btrue%5D%20whileTrue%3A%20%5B%0A%09%09%28char1Glob%20%3D%20%27A%27%29%20ifTrue%3A%20%5B%0A%09%09%09intLoc%20%3A%3D%20intLoc%20-%201.%0A%09%09%09tmp%20%3A%3D%20intLoc%20-%20intGlob.%0A%09%09%09enumLoc%20%3A%3D%20ident1%5D.%0A%09%09%28enumLoc%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09%09%5E%20tmp%5D%5D'),
messageSends: [unescape("+"), "whileTrue:", "ifTrue:", unescape("%3D"), unescape("-")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc3_',
smalltalk.method({
selector: 'proc3:',
category: 'as yet unclassified',
fn: function (ptrParOut){
var self=this;
var tmp=nil;
tmp=ptrParOut;
(($receiver = self['@ptrGlb']) == nil || $receiver == undefined) ? (function(){return self['@intGlob']=(100);})() : (function(){return tmp=smalltalk.send(self['@ptrGlb'], "_ptrComp", []);})();
smalltalk.send(self['@ptrGlb'], "_intComp_", [smalltalk.send(self, "_proc7_with_", [(10), self['@intGlob']])]);
return tmp;
return self;},
source: unescape('proc3%3A%20ptrParOut%0A%09%7C%20tmp%20%7C%0A%09tmp%20%3A%3D%20ptrParOut.%0A%09ptrGlb%20ifNotNil%3A%20%5B%0A%09%09tmp%20%3A%3D%20ptrGlb%20ptrComp%5D%0A%09ifNil%3A%20%5B%0A%09%09intGlob%20%3A%3D%20100%5D.%0A%09ptrGlb%20intComp%3A%20%28self%20proc7%3A%2010%20with%3A%20intGlob%29.%0A%09%5Etmp'),
messageSends: ["ifNotNil:ifNil:", "ptrComp", "intComp:", "proc7:with:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc4',
smalltalk.method({
selector: 'proc4',
category: 'as yet unclassified',
fn: function (){
var self=this;
var boolLoc=nil;
boolLoc=smalltalk.send(self['@char1Glob'], "__eq", ["A"]);
boolLoc=smalltalk.send(boolLoc, "_|", [self['@boolGlob']]);
self['@char2Glob']="B";
return self;},
source: unescape('proc4%0A%09%7C%20boolLoc%20%7C%0A%09boolLoc%20%3A%3D%20char1Glob%20%3D%20%27A%27.%0A%09boolLoc%20%3A%3D%20boolLoc%20%7C%20boolGlob.%0A%09char2Glob%20%3A%3D%20%27B%27'),
messageSends: [unescape("%3D"), unescape("%7C")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc5',
smalltalk.method({
selector: 'proc5',
category: 'as yet unclassified',
fn: function (){
var self=this;
self['@char1Glob']="A";
self['@boolGlob']=false;
return self;},
source: unescape('proc5%0A%09char1Glob%20%3A%3D%20%27A%27.%0A%09boolGlob%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc6_',
smalltalk.method({
selector: 'proc6:',
category: 'as yet unclassified',
fn: function (enumParIn){
var self=this;
var enumParOut=nil;
enumParOut=enumParIn;
(($receiver = smalltalk.send(self['@func3'], "_value_", [enumParIn])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return enumParOut=self['@ident4'];})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return enumParOut=self['@ident4'];})]);
(($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident1']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident2']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident2']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = (($receiver = self['@intGlob']).klass === smalltalk.Number) ? $receiver >(100) : smalltalk.send($receiver, "__gt", [(100)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident1'];})() : (function(){return enumParOut=self['@ident4'];})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident1'];}), (function(){return enumParOut=self['@ident4'];})]);}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident3']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident2'];})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return enumParOut=self['@ident2'];}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident4']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return nil;})() : (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return nil;}), (function(){return (($receiver = smalltalk.send(enumParIn, "__eq", [self['@ident5']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return enumParOut=self['@ident3'];})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return enumParOut=self['@ident3'];})]);})]);})]);})]);})]);
return enumParOut;
return self;},
source: unescape('proc6%3A%20enumParIn%0A%09%7C%20enumParOut%20%7C%0A%09enumParOut%20%3A%3D%20enumParIn.%0A%09%28func3%20value%3A%20enumParIn%29%20ifFalse%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident4%5D.%0A%09%28enumParIn%20%3D%20ident1%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident1%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident2%29%20ifTrue%3A%20%5B%0A%09%09%09intGlob%20%3E%20100%20ifTrue%3A%20%5B%0A%09%09%09%09enumParOut%20%3A%3D%20ident1%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09enumParOut%20%3A%3D%20ident4%5D%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident3%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident2%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident4%29%20ifTrue%3A%20%5B%5D%20ifFalse%3A%20%5B%0A%09%28enumParIn%20%3D%20ident5%29%20ifTrue%3A%20%5B%0A%09%09enumParOut%20%3A%3D%20ident3%5D%5D%5D%5D%5D.%0A%09%5EenumParOut'),
messageSends: ["ifFalse:", "value:", "ifTrue:ifFalse:", unescape("%3D"), unescape("%3E"), "ifTrue:"],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc7_with_',
smalltalk.method({
selector: 'proc7:with:',
category: 'as yet unclassified',
fn: function (intParI1, intParI2){
var self=this;
var intLoc=nil;
var intParOut=nil;
intLoc=(($receiver = intParI1).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]);
intParOut=(($receiver = intParI2).klass === smalltalk.Number) ? $receiver +intLoc : smalltalk.send($receiver, "__plus", [intLoc]);
return intParOut;
return self;},
source: unescape('proc7%3A%20intParI1%20with%3A%20intParI2%0A%09%7C%20intLoc%20intParOut%20%7C%0A%09intLoc%20%3A%3D%20intParI1%20+%202.%0A%09intParOut%20%3A%3D%20intParI2%20+%20intLoc.%0A%09%5E%20intParOut'),
messageSends: [unescape("+")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_proc8_with_with_with_',
smalltalk.method({
selector: 'proc8:with:with:with:',
category: 'as yet unclassified',
fn: function (array1Par, array2Par, intParI1, intParI2){
var self=this;
var intLoc=nil;
intLoc=(($receiver = intParI1).klass === smalltalk.Number) ? $receiver +(5) : smalltalk.send($receiver, "__plus", [(5)]);
smalltalk.send(array1Par, "_at_put_", [intLoc, intParI2]);
smalltalk.send(array1Par, "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), smalltalk.send(array1Par, "_at_", [intLoc])]);
smalltalk.send(array1Par, "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(30) : smalltalk.send($receiver, "__plus", [(30)]), intLoc]);
smalltalk.send(intLoc, "_to_do_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]), (function(intIndex){smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_put_", [intIndex, intLoc]);smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_put_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]), (($receiver = smalltalk.send(smalltalk.send(array2Par, "_at_", [intLoc]), "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])]);return smalltalk.send(smalltalk.send(array2Par, "_at_", [(($receiver = intLoc).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)])]), "_at_put_", [intLoc, smalltalk.send(array1Par, "_at_", [intLoc])]);})]);
self['@intGlob']=(5);
return self;},
source: unescape('proc8%3A%20array1Par%20with%3A%20array2Par%20with%3A%20intParI1%20with%3A%20intParI2%0A%09%7C%20intLoc%20%7C%0A%09intLoc%20%3A%3D%20intParI1%20+%205.%0A%09array1Par%20at%3A%20intLoc%20put%3A%20intParI2.%0A%09array1Par%20at%3A%20intLoc%20+%201%20put%3A%20%28array1Par%20at%3A%20intLoc%29.%0A%09array1Par%20at%3A%20intLoc%20+%2030%20put%3A%20intLoc.%0A%09intLoc%20to%3A%20intLoc%20+%201%20do%3A%20%5B%3AintIndex%20%7C%0A%09%09%28array2Par%20at%3A%20intLoc%29%20at%3A%20intIndex%20put%3A%20intLoc.%0A%09%09%28array2Par%20at%3A%20intLoc%29%20at%3A%20intLoc%20-%201%20put%3A%20%28%28array2Par%20at%3A%20intLoc%29%20at%3A%20intLoc%20-%201%29%20+%201.%0A%09%09%28array2Par%20at%3A%20intLoc%20+%2020%29%20at%3A%20intLoc%20put%3A%20%28array1Par%20at%3A%20intLoc%29%5D.%0A%09intGlob%20%3A%3D%205'),
messageSends: [unescape("+"), "at:put:", "at:", "to:do:", unescape("-")],
referencedClasses: []
}),
smalltalk.Pystone);

smalltalk.addMethod(
'_pystones_block_',
smalltalk.method({
selector: 'pystones:block:',
category: 'as yet unclassified',
fn: function (loops, aBlock){
var self=this;
return smalltalk.send(self, "_proc0_block_", [loops, aBlock]);
return self;},
source: unescape('pystones%3A%20loops%20block%3A%20aBlock%0A%09%5Eself%20proc0%3A%20loops%20block%3A%20aBlock'),
messageSends: ["proc0:block:"],
referencedClasses: []
}),
smalltalk.Pystone);


smalltalk.Pystone.klass.iVarNames = ['nulltime'];
smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self, "_run_", [(50000)]);
return self;},
source: unescape('main%0A%09%22self%20main%22%0A%09%0A%09self%20run%3A%2050000'),
messageSends: ["run:"],
referencedClasses: []
}),
smalltalk.Pystone.klass);

smalltalk.addMethod(
'_run_',
smalltalk.method({
selector: 'run:',
category: 'as yet unclassified',
fn: function (loops){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_main_", [loops]);
return self;},
source: unescape('run%3A%20loops%0A%09%22self%20run%3A%2050000%22%0A%09%0A%09self%20new%20main%3A%20loops'),
messageSends: ["main:", "new"],
referencedClasses: []
}),
smalltalk.Pystone.klass);


