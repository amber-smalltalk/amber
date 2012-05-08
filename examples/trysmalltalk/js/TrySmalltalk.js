smalltalk.addPackage('TrySmalltalk', {});
smalltalk.addClass('AbstractTutorial', smalltalk.Object, [], 'TrySmalltalk');
smalltalk.AbstractTutorial.comment="Parent class of all ProfStef tutorials.\x0a\x0aTo create your own tutorial:\x0a- subclass AbstractTutorial\x0a- implement a few methods which returns a Lesson instance\x0a- implement tutorial which returns a Collection of selectors to the methods you've created."
smalltalk.addMethod(
"_indexOfLesson_",
smalltalk.method({
selector: "indexOfLesson:",
category: 'accessing',
fn: function (aSelector) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_indexOf_", [aSelector]);
return self;},
args: ["aSelector"],
source: "indexOfLesson: aSelector\x0a\x09^self tableOfContents indexOf: aSelector.",
messageSends: ["indexOf:", "tableOfContents"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_lessonAt_",
smalltalk.method({
selector: "lessonAt:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
var lessonSelector=nil;
lessonSelector=smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_at_", [anInteger]);
return smalltalk.send(self, "_perform_", [lessonSelector]);
return self;},
args: ["anInteger"],
source: "lessonAt: anInteger\x0a\x09| lessonSelector |\x0a\x09lessonSelector := self tableOfContents at: anInteger.\x0a\x09^ self perform: lessonSelector.",
messageSends: ["at:", "tableOfContents", "perform:"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_size", []);
return self;},
args: [],
source: "size\x0a\x09^ self tableOfContents size",
messageSends: ["size", "tableOfContents"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_tableOfContents",
smalltalk.method({
selector: "tableOfContents",
category: 'accessing',
fn: function () {
var self=this;
return ["welcome", "testLesson", "theEnd"];
return self;},
args: [],
source: "tableOfContents\x0a^ #(\x0a  'welcome'\x0a  'testLesson'\x0a  'theEnd'\x0a)",
messageSends: [],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_testLesson",
smalltalk.method({
selector: "testLesson",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Test Lesson", unescape("%22This%20lesson%20is%20a%20test%22")]);
return self;},
args: [],
source: "testLesson\x0a\x09^ Lesson\x0a\x09\x09title: 'Test Lesson' \x0a\x09\x09contents: '\x22This lesson is a test\x22'",
messageSends: ["title:contents:"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_theEnd",
smalltalk.method({
selector: "theEnd",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["The End", unescape("%22And%20that%27d%20be%20pretty%20much%20it%20%3A%29%22")]);
return self;},
args: [],
source: "theEnd\x0a\x09^ Lesson\x0a\x09\x09title: 'The End' \x0a\x09\x09contents: '\x22And that''d be pretty much it :)\x22'",
messageSends: ["title:contents:"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_welcome",
smalltalk.method({
selector: "welcome",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", unescape("%22Hi%2C%20this%20is%20a%20test%20tutorial.%22")]);
return self;},
args: [],
source: "welcome\x0a\x09^ Lesson\x0a\x09\x09title: 'Welcome' \x0a\x09\x09contents: '\x22Hi, this is a test tutorial.\x22'",
messageSends: ["title:contents:"],
referencedClasses: []
}),
smalltalk.AbstractTutorial);



smalltalk.addClass('SmalltalkSyntaxTutorial', smalltalk.AbstractTutorial, [], 'TrySmalltalk');
smalltalk.SmalltalkSyntaxTutorial.comment="The default ProfStef tutorial to learn Smalltalk syntax"
smalltalk.addMethod(
"_basicTypesArray",
smalltalk.method({
selector: "basicTypesArray",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Array", unescape("%22Literal%20arrays%20are%20created%20at%20parse%20time%3A%22%0A%0A%23%281%202%203%29.%0A%0A%23%28%201%202%203%20%23%284%205%206%29%29%20size.%0A%0A%23%281%202%204%29%20isEmpty.%0A%0A%23%281%202%203%29%20first.%0A%0A%23%28%27hello%27%20%27Javascript%27%29%20at%3A%202%20put%3A%20%27Smalltalk%27%3B%20yourself.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "basicTypesArray\x0a\x09^ Lesson\x0atitle: 'Basic types: Array' \x0acontents: \x0a'\x22Literal arrays are created at parse time:\x22\x0a\x0a#(1 2 3).\x0a\x0a#( 1 2 3 #(4 5 6)) size.\x0a\x0a#(1 2 4) isEmpty.\x0a\x0a#(1 2 3) first.\x0a\x0a#(''hello'' ''Javascript'') at: 2 put: ''Smalltalk''; yourself.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesCharacters",
smalltalk.method({
selector: "basicTypesCharacters",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Characters", unescape("%22A%20Character%20can%20be%20instantiated%20using%20%24%20operator%3A%22%0A%0A%24A.%0A%0A%24A%20class.%0A%0A%24B%20charCode.%0A%0ACharacter%20cr.%0A%0ACharacter%20space.%0A%0A%22You%20can%20print%20all%20256%20characters%20of%20the%20ASCII%20extended%20set%3A%22%0A%0ACharacter%20allByteCharacters.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "basicTypesCharacters\x0a\x09^ Lesson\x0atitle: 'Basic types: Characters' \x0acontents: \x0a'\x22A Character can be instantiated using $ operator:\x22\x0a\x0a$A.\x0a\x0a$A class.\x0a\x0a$B charCode.\x0a\x0aCharacter cr.\x0a\x0aCharacter space.\x0a\x0a\x22You can print all 256 characters of the ASCII extended set:\x22\x0a\x0aCharacter allByteCharacters.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesDynamicArray",
smalltalk.method({
selector: "basicTypesDynamicArray",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Dynamic Array", unescape("%22Dynamic%20Arrays%20are%20created%20at%20execution%20time%3A%22%0A%0A%7B%20%282+3%29%20.%20%286*6%29%20%7D.%0A%0A%7B%20%282+3%29%20.%20%286*6%29%20.%20%27hello%27%2C%20%27%20Stef%27%7D%20size.%0A%0A%0A%7B%20ProfStef%20%7D%20first%20next.")]);
return self;},
args: [],
source: "basicTypesDynamicArray\x0a\x09^ Lesson\x0atitle: 'Basic types: Dynamic Array' \x0acontents: \x0a'\x22Dynamic Arrays are created at execution time:\x22\x0a\x0a{ (2+3) . (6*6) }.\x0a\x0a{ (2+3) . (6*6) . ''hello'', '' Stef''} size.\x0a\x0a\x0a{ ProfStef } first next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesNumbers",
smalltalk.method({
selector: "basicTypesNumbers",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Numbers", unescape("%22You%20now%20know%20how%20to%20execute%20Smalltalk%20code.%20%0A%0ANow%20let%27s%20talk%20about%20basic%20objects.%0A%0A1%2C%202%2C%20100%2C%202/3%20...%20are%20Numbers%2C%20and%20respond%20to%20many%20messages%20evaluating%20mathematical%20expressions.%0AEvaluate%20these%20ones%3A%22%0A%0A2.%0A%0A%281/3%29.%0A%0A%281/3%29%20+%20%284/5%29.%0A%0A%2818/5%29%20rounded.%0A%0A1%20class.%0A%0A1%20negated.%0A%0A1%20negated%20negated.%0A%0A%281%20+%203%29%20odd.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "basicTypesNumbers\x0a\x09^ Lesson\x0atitle: 'Basic types: Numbers' \x0acontents: \x0a'\x22You now know how to execute Smalltalk code. \x0a\x0aNow let''s talk about basic objects.\x0a\x0a1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.\x0aEvaluate these ones:\x22\x0a\x0a2.\x0a\x0a(1/3).\x0a\x0a(1/3) + (4/5).\x0a\x0a(18/5) rounded.\x0a\x0a1 class.\x0a\x0a1 negated.\x0a\x0a1 negated negated.\x0a\x0a(1 + 3) odd.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesString",
smalltalk.method({
selector: "basicTypesString",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Strings", unescape("%22A%20String%20is%20a%20collection%20of%20characters.%20Use%20single%20quotes%20to%20create%20a%20String%20object.%20Print%20these%20expressions%3A%22%0A%0A%27ProfStef%27.%0A%0A%27ProfStef%27%20size.%0A%0A%27abc%27%20asUppercase.%0A%0A%27Hello%20World%27%20reversed.%20%0A%0A%22You%20can%20access%20each%20character%20using%20at%3A%20message%22%0A%0A%27ProfStef%27%20at%3A%201.%0A%0A%22String%20concatenation%20uses%20the%20comma%20operator%3A%22%0A%0A%27ProfStef%27%2C%20%27%20is%20cool%27.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "basicTypesString\x0a\x09^ Lesson\x0atitle: 'Basic types: Strings' \x0acontents: \x0a'\x22A String is a collection of characters. Use single quotes to create a String object. Print these expressions:\x22\x0a\x0a''ProfStef''.\x0a\x0a''ProfStef'' size.\x0a\x0a''abc'' asUppercase.\x0a\x0a''Hello World'' reversed. \x0a\x0a\x22You can access each character using at: message\x22\x0a\x0a''ProfStef'' at: 1.\x0a\x0a\x22String concatenation uses the comma operator:\x22\x0a\x0a''ProfStef'', '' is cool''.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesSymbol",
smalltalk.method({
selector: "basicTypesSymbol",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Symbols", unescape("%22A%20Symbol%20is%20a%20String%20which%20is%20guaranteed%20to%20be%20globally%20unique.%20%0A%0AThere%20is%20one%20and%20only%20one%20Symbol%20%23ProfStef.%20There%20may%20be%20several%20%27ProfStef%27%20String%20objects.%0A%0A%28Message%20%3D%3D%20returns%20true%20if%20the%20two%20objects%20are%20the%20SAME%29%22%0A%0A%27ProfStef%27%20asSymbol.%0A%0A%23ProfStef%20asString.%0A%0A%282%20asString%29%20%3D%3D%20%282%20asString%29.%0A%0A%282%20asString%29%20asSymbol%20%3D%3D%20%282%20asString%29%20asSymbol.%0A%0A%0A%28Smalltalk%20at%3A%20%23ProfStef%29%20next.")]);
return self;},
args: [],
source: "basicTypesSymbol\x0a\x09^ Lesson\x0atitle: 'Basic types: Symbols' \x0acontents: \x0a'\x22A Symbol is a String which is guaranteed to be globally unique. \x0a\x0aThere is one and only one Symbol #ProfStef. There may be several ''ProfStef'' String objects.\x0a\x0a(Message == returns true if the two objects are the SAME)\x22\x0a\x0a''ProfStef'' asSymbol.\x0a\x0a#ProfStef asString.\x0a\x0a(2 asString) == (2 asString).\x0a\x0a(2 asString) asSymbol == (2 asString) asSymbol.\x0a\x0a\x0a(Smalltalk at: #ProfStef) next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_blocks",
smalltalk.method({
selector: "blocks",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Blocks", unescape("%22Cascade%20is%20cool%20%21%20Let%27s%20talk%20about%20blocks.%0A%0ABlocks%20are%20anonymous%20methods%20that%20can%20be%20stored%20into%20variables%20and%20executed%20on%20demand.%0A%0ABlocks%20are%20delimited%20by%20square%20brackets%3A%20%5B%5D%22%0A%0A%5BTranscript%20open%5D.%0A%0A%22does%20not%20open%20a%20Transcript%20because%20the%20block%20is%20not%20executed.%0A%0AHere%20is%20a%20block%20that%20adds%202%20to%20its%20argument%20%28its%20argument%20is%20named%20x%29%3A%22%0A%0A%5B%3Ax%20%7C%20x+2%5D.%0A%0A%22We%20can%20execute%20a%20block%20by%20sending%20it%20value%20messages.%22%0A%0A%5B%3Ax%20%7C%20x+2%5D%20value%3A%205.%0A%0A%5BTranscript%20open%5D%20value.%0A%0A%5B%3Ax%20%7C%20x+2%5D%20value%3A%2010.%0A%0A%5B%3Ax%20%3Ay%7C%20x%20+%20y%5D%20value%3A3%20value%3A5.%0A%0A%5BProfStef%20next%5D%20value.")]);
return self;},
args: [],
source: "blocks\x0a\x09^ Lesson\x0atitle: 'Blocks' \x0acontents: \x0a'\x22Cascade is cool ! Let''s talk about blocks.\x0a\x0aBlocks are anonymous methods that can be stored into variables and executed on demand.\x0a\x0aBlocks are delimited by square brackets: []\x22\x0a\x0a[Transcript open].\x0a\x0a\x22does not open a Transcript because the block is not executed.\x0a\x0aHere is a block that adds 2 to its argument (its argument is named x):\x22\x0a\x0a[:x | x+2].\x0a\x0a\x22We can execute a block by sending it value messages.\x22\x0a\x0a[:x | x+2] value: 5.\x0a\x0a[Transcript open] value.\x0a\x0a[:x | x+2] value: 10.\x0a\x0a[:x :y| x + y] value:3 value:5.\x0a\x0a[ProfStef next] value.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_blocksAssignation",
smalltalk.method({
selector: "blocksAssignation",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Block assignation", unescape("%22Blocks%20can%20be%20assigned%20to%20a%20variable%20then%20executed%20later.%0A%0ANote%20that%20%7Cb%7C%20is%20the%20declaration%20of%20a%20variable%20named%20%27b%27%20and%20that%20%27%3A%3D%27%20assigns%20a%20value%20to%20a%20variable.%0A%0ASelect%20the%20three%20lines%20then%20Print%20It%3A%22%0A%0A%7Cb%7C%0Ab%20%3A%3D%20%5B%3Ax%20%7C%20x+2%5D.%0Ab%20value%3A%2012.%0A%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "blocksAssignation\x0a\x09^ Lesson\x0atitle: 'Block assignation' \x0acontents: \x0a'\x22Blocks can be assigned to a variable then executed later.\x0a\x0aNote that |b| is the declaration of a variable named ''b'' and that '':='' assigns a value to a variable.\x0a\x0aSelect the three lines then Print It:\x22\x0a\x0a|b|\x0ab := [:x | x+2].\x0ab value: 12.\x0a\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_conditionals",
smalltalk.method({
selector: "conditionals",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Conditionals", unescape("%22Conditionals%20are%20just%20messages%20sent%20to%20Boolean%20objects%22%0A%0A1%20%3C%202%0A%20%20ifTrue%3A%20%5B100%5D%0A%20%20ifFalse%3A%20%5B42%5D.%0A%0A%22Here%20the%20message%20is%20ifTrue%3AifFalse%0A%0ATry%20this%3A%22%0A%0ATranscript%20open.%0A%0A3%20%3E%2010%20%0A%09ifTrue%3A%20%5BTranscript%20show%3A%20%27maybe%20there%27%27s%20a%20bug%20....%27%5D%0A%09ifFalse%3A%20%5BTranscript%20show%3A%20%27No%20%3A%203%20is%20less%20than%2010%27%5D.%0A%0A3%20%3D%203%20ifTrue%3A%20%5BProfStef%20next%5D.")]);
return self;},
args: [],
source: "conditionals\x0a\x09^ Lesson\x0atitle: 'Conditionals' \x0acontents: \x0a'\x22Conditionals are just messages sent to Boolean objects\x22\x0a\x0a1 < 2\x0a  ifTrue: [100]\x0a  ifFalse: [42].\x0a\x0a\x22Here the message is ifTrue:ifFalse\x0a\x0aTry this:\x22\x0a\x0aTranscript open.\x0a\x0a3 > 10 \x0a\x09ifTrue: [Transcript show: ''maybe there''''s a bug ....'']\x0a\x09ifFalse: [Transcript show: ''No : 3 is less than 10''].\x0a\x0a3 = 3 ifTrue: [ProfStef next].'.",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_debugger",
smalltalk.method({
selector: "debugger",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Debugger", unescape("%22The%20Debugger%20may%20be%20the%20most%20famous%20tool%20of%20Smalltalk%20environments.%20It%20will%20open%20as%20soon%20as%20an%20unmanaged%20Exception%20occurs.%20%0A%0AThe%20following%20code%20will%20open%20the%20debugger.%0A%0A***This%20should%20be%20rethought%20completely***%22%0A%0A%0A%20")]);
return self;},
args: [],
source: "debugger\x0a\x09^ Lesson\x0atitle: 'Debugger' \x0acontents: '\x22The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. \x0a\x0aThe following code will open the debugger.\x0a\x0a***This should be rethought completely***\x22\x0a\x0a\x0a '",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_doingVSPrinting",
smalltalk.method({
selector: "doingVSPrinting",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Doing", unescape("%22Cool%20%21%20%28I%20like%20to%20say%20Cooool%20%3A%29%20%29.%20You%27ve%20just%20executed%20a%20Smalltalk%20expression.%20More%20precisely%2C%20you%20sent%20the%20message%20%27next%27%20to%0AProfStef%20class%20%28it%27s%20me%20%21%29.%0A%0ANote%20you%20can%20run%20this%20tutorial%20again%20by%20evaluating%3A%20%27ProfStef%20go%27.%20%0A%27ProfStef%20previous%27%20returns%20to%20the%20previous%20lesson.%0A%0AYou%20can%20also%20Do%20It%20using%20the%20keyboard%20shortcut%20%27CTRL%20d%27%0A%0ATry%20to%20evaluate%20this%20expression%3A%22%0A%0Awindow%20alert%3A%20%27hello%20world%21%27.%0A%0A%22Then%20go%20to%20the%20next%20lesson%3A%22%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "doingVSPrinting \x0a\x09^ Lesson\x0atitle: 'Doing VS Printing: Doing' \x0acontents: \x0a'\x22Cool ! (I like to say Cooool :) ). You''ve just executed a Smalltalk expression. More precisely, you sent the message ''next'' to\x0aProfStef class (it''s me !).\x0a\x0aNote you can run this tutorial again by evaluating: ''ProfStef go''. \x0a''ProfStef previous'' returns to the previous lesson.\x0a\x0aYou can also Do It using the keyboard shortcut ''CTRL d''\x0a\x0aTry to evaluate this expression:\x22\x0a\x0awindow alert: ''hello world!''.\x0a\x0a\x22Then go to the next lesson:\x22\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_instanciation",
smalltalk.method({
selector: "instanciation",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Instanciation", "\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let's create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: 'Some text';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we've created? Actually, #('Some text' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we'll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the 'anArray' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: 'Some text';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: 'Some more text!'.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I'll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: ('move on!' -> ProfStef)) at: 'move on!') next"]);
return self;},
args: [],
source: "instanciation\x0a\x09^ Lesson\x0atitle: 'Instanciation' \x0acontents: \x0a'\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let''s create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: ''Some text'';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we''ve created? Actually, #(''Some text'' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we''ll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the ''anArray'' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: ''Some text'';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: ''Some more text!''.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I''ll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: (''move on!'' -> ProfStef)) at: ''move on!'') next'",
messageSends: ["title:contents:"],
referencedClasses: ["Lesson"]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_iterators",
smalltalk.method({
selector: "iterators",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Iterators", unescape("%22The%20message%20do%3A%20is%20sent%20to%20a%20collection%20of%20objects%20%28Array%2C%20Dictionary%2C%20String%2C%20etc%29%2C%20evaluating%20the%20block%20for%20each%20element.%0A%0AHere%20we%20want%20to%20print%20all%20the%20numbers%20on%20the%20Transcript%20%28a%20console%29%22%0A%0A%23%2811%2038%203%20-2%2010%29%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20Transcript%20show%3A%20each%20printString%3B%20cr%5D.%0A%0A%22Some%20other%20really%20nice%20iterators%22%0A%0A%23%2811%2038%203%20-2%2010%29%20collect%3A%20%5B%3Aeach%20%7C%20each%20negated%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20collect%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20select%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20select%3A%20%5B%3Aeach%20%7C%20each%20%3E%2010%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20%3E%2010%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20%0A%20%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20Transcript%20show%3A%20each%20printString%5D%0A%20%20%20%20%20separatedBy%3A%20%5BTranscript%20show%3A%20%27.%27%5D.%0A%0A%0A%28Smalltalk%20current%20classes%20select%3A%20%5B%3AeachClass%20%7C%20eachClass%20name%20%3D%20%27ProfStef%27%5D%29%20do%3A%20%5B%3AeachProfstef%20%7C%20eachProfstef%20next%5D.")]);
return self;},
args: [],
source: "iterators\x0a\x09^ Lesson\x0atitle: 'Iterators' \x0acontents: \x0a'\x22The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.\x0a\x0aHere we want to print all the numbers on the Transcript (a console)\x22\x0a\x0a#(11 38 3 -2 10) do: [:each |\x0a     Transcript show: each printString; cr].\x0a\x0a\x22Some other really nice iterators\x22\x0a\x0a#(11 38 3 -2 10) collect: [:each | each negated].\x0a\x0a#(11 38 3 -2 10) collect: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) reject: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) \x0a     do: [:each | Transcript show: each printString]\x0a     separatedBy: [Transcript show: ''.''].\x0a\x0a\x0a(Smalltalk current classes select: [:eachClass | eachClass name = ''ProfStef'']) do: [:eachProfstef | eachProfstef next].'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_loops",
smalltalk.method({
selector: "loops",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Loops", unescape("%22Loops%20are%20high-level%20collection%20iterators%2C%20implemented%20as%20regular%20methods.%22%0A%0A%22Basic%20loops%3A%0A%20%20to%3Ado%3A%0A%20%20to%3Aby%3Ado%22%0A%0A1%20to%3A%20100%20do%3A%0A%20%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%20%5D.%0A%0A1%20to%3A%20100%20by%3A%203%20do%3A%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%5D.%0A%0A100%20to%3A%200%20by%3A%20-2%20do%3A%20%0A%20%20%20%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%5D.%0A%0A1%20to%3A%201%20do%3A%20%5B%3Ai%20%7C%20ProfStef%20next%5D.")]);
return self;},
args: [],
source: "loops\x0a\x09^ Lesson\x0atitle: 'Loops' \x0acontents: \x0a'\x22Loops are high-level collection iterators, implemented as regular methods.\x22\x0a\x0a\x22Basic loops:\x0a  to:do:\x0a  to:by:do\x22\x0a\x0a1 to: 100 do:\x0a  [:i | Transcript show: i asString; cr ].\x0a\x0a1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].\x0a\x0a100 to: 0 by: -2 do: \x0a    [:i | Transcript show: i asString; cr].\x0a\x0a1 to: 1 do: [:i | ProfStef next].'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_mathematicalPrecedence",
smalltalk.method({
selector: "mathematicalPrecedence",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Mathematical precedence", unescape("%22Traditional%20precedence%20rules%20from%20mathematics%20do%20not%20follow%20in%20Smalltalk.%22%0A%0A2%20*%2010%20+%202.%0A%0A%22Here%20the%20message%20*%20is%20sent%20to%202%2C%20which%20answers%2020%2C%20then%2020%20receive%20the%20message%20+%0A%0ARemember%20that%20all%20messages%20always%20follow%20a%20simple%20left-to-right%20precedence%20rule%2C%20*%20without%20exceptions%20*.%22%0A%0A2%20+%202%20*%2010.%0A%0A2%20+%20%282%20*%2010%29.%0A%0A8%20-%205%20/%202.%0A%0A%288%20-%205%29%20/%202.%0A%0A8%20-%20%285%20/%202%29.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "mathematicalPrecedence\x0a\x09^ Lesson\x0atitle: 'Mathematical precedence'\x0acontents: \x0a'\x22Traditional precedence rules from mathematics do not follow in Smalltalk.\x22\x0a\x0a2 * 10 + 2.\x0a\x0a\x22Here the message * is sent to 2, which answers 20, then 20 receive the message +\x0a\x0aRemember that all messages always follow a simple left-to-right precedence rule, * without exceptions *.\x22\x0a\x0a2 + 2 * 10.\x0a\x0a2 + (2 * 10).\x0a\x0a8 - 5 / 2.\x0a\x0a(8 - 5) / 2.\x0a\x0a8 - (5 / 2).\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxBinary",
smalltalk.method({
selector: "messageSyntaxBinary",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Binary messages", unescape("%22Binary%20messages%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20+%20anotherObject%22%0A%0A3%20*%202.%0A%0ADate%20today%20year%20%3D%202011.%0A%0Afalse%20%7C%20false.%0A%0Atrue%20%26%20true.%0A%0Atrue%20%26%20false.%0A%0A10%20@%20100.%0A%0A10%20%3C%3D%2012.%0A%0A%27ab%27%2C%20%27cd%27.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "messageSyntaxBinary\x0a\x09^ Lesson\x0atitle: 'Message syntax: Binary messages' \x0acontents: \x0a'\x22Binary messages have the following form:\x0a    anObject + anotherObject\x22\x0a\x0a3 * 2.\x0a\x0aDate today year = 2011.\x0a\x0afalse | false.\x0a\x0atrue & true.\x0a\x0atrue & false.\x0a\x0a10 @ 100.\x0a\x0a10 <= 12.\x0a\x0a''ab'', ''cd''.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxCascade",
smalltalk.method({
selector: "messageSyntaxCascade",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Cascade", unescape("%22%3B%20is%20the%20cascade%20operator.%20It%27s%20useful%20to%20send%20message%20to%20the%20SAME%20receiver%0AOpen%20a%20Transcript%20%28console%29%3A%22%0A%0ATranscript%20open.%0A%0A%22Then%3A%22%0A%0ATranscript%20show%3A%20%27hello%27.%0ATranscript%20show%3A%20%27Smalltalk%27.%0ATranscript%20cr.%0A%0A%22is%20equivalent%20to%3A%22%0A%0ATranscript%20%0A%09%20%20%20show%3A%20%27hello%27%3B%0A%09%20%20%20show%3A%20%27Smalltalk%27%20%3B%0A%09%20%20%20cr.%0A%0A%22You%20can%20close%20the%20development%20tools%20by%20clicking%20on%20the%20red%20circle%20with%20a%20cross%20at%20the%20bottom%20left%20of%20the%20website.%0ATry%20to%20go%20to%20the%20next%20lesson%20with%20a%20cascade%20of%20two%20%27next%27%20messages%3A%22%0A%0AProfStef")]);
return self;},
args: [],
source: "messageSyntaxCascade\x0a\x09^ Lesson\x0atitle: 'Message syntax: Cascade' \x0acontents: \x0a'\x22; is the cascade operator. It''s useful to send message to the SAME receiver\x0aOpen a Transcript (console):\x22\x0a\x0aTranscript open.\x0a\x0a\x22Then:\x22\x0a\x0aTranscript show: ''hello''.\x0aTranscript show: ''Smalltalk''.\x0aTranscript cr.\x0a\x0a\x22is equivalent to:\x22\x0a\x0aTranscript \x0a\x09   show: ''hello'';\x0a\x09   show: ''Smalltalk'' ;\x0a\x09   cr.\x0a\x0a\x22You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.\x0aTry to go to the next lesson with a cascade of two ''next'' messages:\x22\x0a\x0aProfStef'.",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxCascadeShouldNotBeHere",
smalltalk.method({
selector: "messageSyntaxCascadeShouldNotBeHere",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", [unescape("Lost%20%3F"), unescape("%22Hey%2C%20you%20should%20not%20be%20here%20%21%21%20%0A%0AGo%20back%20and%20use%20a%20cascade%20%21%22%0A%0AProfStef%20previous.")]);
return self;},
args: [],
source: "messageSyntaxCascadeShouldNotBeHere\x0a\x09^ Lesson\x0atitle: 'Lost ?' \x0acontents: \x0a'\x22Hey, you should not be here !! \x0a\x0aGo back and use a cascade !\x22\x0a\x0aProfStef previous.'.",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxExecutionOrder",
smalltalk.method({
selector: "messageSyntaxExecutionOrder",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Execution order", unescape("%22Unary%20messages%20are%20executed%20first%2C%20then%20binary%20messages%20and%20finally%20keyword%20messages%3A%0A%20%20%20%20Unary%20%3E%20Binary%20%3E%20Keywords%22%0A%0A2.5%20+%203.8%20rounded.%0A%0A3%20max%3A%202%20+%202.%0A%20%20%0A%280@0%29%20class.%0A%0A0@0%20x%3A%20100.%0A%0A%280@0%20x%3A%20100%29%20class.%0A%0A%22Between%20messages%20of%20similar%20precedence%2C%20expressions%20are%20executed%20from%20left%20to%20right%22%0A%0A-12345%20negated%20asString%20reversed.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "messageSyntaxExecutionOrder\x0a\x09^ Lesson\x0atitle: 'Message syntax: Execution order' \x0acontents: \x0a'\x22Unary messages are executed first, then binary messages and finally keyword messages:\x0a    Unary > Binary > Keywords\x22\x0a\x0a2.5 + 3.8 rounded.\x0a\x0a3 max: 2 + 2.\x0a  \x0a(0@0) class.\x0a\x0a0@0 x: 100.\x0a\x0a(0@0 x: 100) class.\x0a\x0a\x22Between messages of similar precedence, expressions are executed from left to right\x22\x0a\x0a-12345 negated asString reversed.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxExecutionOrderParentheses",
smalltalk.method({
selector: "messageSyntaxExecutionOrderParentheses",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Parentheses", unescape("%22Use%20parentheses%20to%20change%20order%20of%20evaluation%22%0A%0A%282.5%20+%203.8%29%20rounded.%0A%0A%283%20max%3A%202%29%20+%202.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "messageSyntaxExecutionOrderParentheses\x0a\x09^ Lesson\x0atitle: 'Message syntax: Parentheses'\x0acontents: \x0a'\x22Use parentheses to change order of evaluation\x22\x0a\x0a(2.5 + 3.8) rounded.\x0a\x0a(3 max: 2) + 2.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxKeyword",
smalltalk.method({
selector: "messageSyntaxKeyword",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Keyword messages", unescape("%22Keyword%20Messages%20are%20messages%20with%20arguments.%20They%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20akey%3A%20anotherObject%20akey2%3A%20anotherObject2%22%0A%0A%27Web%20development%20is%20a%20good%20deal%20of%20pain%27%20copyFrom%3A%201%20to%3A%2030%0A%0A%22The%20message%20is%20copyFrom%3Ato%3A%20sent%20to%20the%20String%20%27Web%20development%20is%20a%20good%20deal%20of%20pain%27%22%0A%0A1%20max%3A%203.%0A%0AArray%20with%3A%20%27hello%27%20with%3A%202%20with%3A%20Smalltalk.%0A%0A%22The%20message%20is%20with%3Awith%3Awith%3A%20implemented%20on%20class%20Array.%20Note%20you%20can%20also%20write%22%0A%0AArray%0A%09with%3A%20%27Hi%20there%21%27%0A%09with%3A%202%0A%09with%3A%20Smalltalk.%0A%09%0AProfStef%20perform%3A%20%27next%27.")]);
return self;},
args: [],
source: "messageSyntaxKeyword\x0a\x09^ Lesson\x0atitle: 'Message syntax: Keyword messages' \x0acontents: \x0a'\x22Keyword Messages are messages with arguments. They have the following form:\x0a    anObject akey: anotherObject akey2: anotherObject2\x22\x0a\x0a''Web development is a good deal of pain'' copyFrom: 1 to: 30\x0a\x0a\x22The message is copyFrom:to: sent to the String ''Web development is a good deal of pain''\x22\x0a\x0a1 max: 3.\x0a\x0aArray with: ''hello'' with: 2 with: Smalltalk.\x0a\x0a\x22The message is with:with:with: implemented on class Array. Note you can also write\x22\x0a\x0aArray\x0a\x09with: ''Hi there!''\x0a\x09with: 2\x0a\x09with: Smalltalk.\x0a\x09\x0aProfStef perform: ''next''.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxUnary",
smalltalk.method({
selector: "messageSyntaxUnary",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Unary messages", unescape("%22Messages%20are%20sent%20to%20objects.%20There%20are%20three%20types%20of%20message%3A%20Unary%2C%20Binary%20and%20Keyword.%0A%0AUnary%20messages%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20aMessage%20%0A%0AYou%27ve%20already%20sent%20unary%20messages.%20For%20example%3A%22%0A%0A1%20class.%0A%0Afalse%20not.%0A%0ADate%20today.%0A%0ANumber%20pi.%0A%0A%22And%20of%20course%3A%20%22%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "messageSyntaxUnary\x0a\x09^ Lesson\x0atitle: 'Message syntax: Unary messages' \x0acontents: \x0a'\x22Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.\x0a\x0aUnary messages have the following form:\x0a    anObject aMessage \x0a\x0aYou''ve already sent unary messages. For example:\x22\x0a\x0a1 class.\x0a\x0afalse not.\x0a\x0aDate today.\x0a\x0aNumber pi.\x0a\x0a\x22And of course: \x22\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_pharoEnvironment",
smalltalk.method({
selector: "pharoEnvironment",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Pharo environment", unescape("%22Every%20Smalltalk%20system%20is%20full%20of%20objects.%20There%20are%20windows%2C%20text%2C%20numbers%2C%20dates%2C%20colors%2C%20points%20and%20much%20more.%20You%20can%20interact%20with%20objects%20in%20a%20much%20more%20direct%20way%20than%20is%20possible%20with%20other%20programming%20languages.%0A%0AEvery%20object%20understands%20the%20message%20%27explore%27.%20As%20a%20result%2C%20you%20get%20an%20Explorer%20window%20that%20shows%20details%20about%20the%20object.%22%0A%0ADate%20today%20explore.%0A%0A%22This%20shows%20that%20the%20date%20object%20consists%20of%20a%20point%20in%20time%20%28start%29%20and%20a%20duration%20%28one%20day%20long%29.%22%0A%0AProfStef%20explore.%0A%0A%22You%20see%2C%20ProfStef%20class%20has%20a%20lot%20of%20objects.%20Let%27s%20take%20a%20look%20at%20my%20code%3A%22%0A%0AProfStef%20browse.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "pharoEnvironment\x0a\x09^ Lesson\x0atitle: 'Pharo environment' \x0acontents: \x0a'\x22Every Smalltalk system is full of objects. There are windows, text, numbers, dates, colors, points and much more. You can interact with objects in a much more direct way than is possible with other programming languages.\x0a\x0aEvery object understands the message ''explore''. As a result, you get an Explorer window that shows details about the object.\x22\x0a\x0aDate today explore.\x0a\x0a\x22This shows that the date object consists of a point in time (start) and a duration (one day long).\x22\x0a\x0aProfStef explore.\x0a\x0a\x22You see, ProfStef class has a lot of objects. Let''s take a look at my code:\x22\x0a\x0aProfStef browse.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_printing",
smalltalk.method({
selector: "printing",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Printing", unescape("%22Now%20you%27re%20a%20Do%20It%20master%20%21%20Let%27s%20talk%20about%20printing.%20It%27s%20a%20Do%20It%20which%20prints%20the%20result%20next%20to%20the%20expression%20you%27ve%20selected.%0AFor%20example%2C%20select%20the%20text%20below%2C%20and%20click%20on%20%27PrintIt%27%3A%22%0A%0A1%20+%202.%0A%0A%22As%20with%20%27DoIt%27%2C%20there%20is%20also%20a%20shortcut%20to%20execute%20this%20command.%0A%0ATry%20CTRL-p%20on%20the%20following%20expressions%3A%22%0A%0ADate%20today.%0A%0A%22The%20result%20is%20selected%2C%20so%20you%20can%20erase%20it%20using%20the%20backspace%20key.%20Try%20it%20%21%22%0A%0ADate%20today%20asDateString.%0A%0ADate%20today%20asTimeString.%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "printing \x0a\x09^ Lesson\x0atitle: 'Doing VS Printing: Printing' \x0acontents: \x0a'\x22Now you''re a Do It master ! Let''s talk about printing. It''s a Do It which prints the result next to the expression you''ve selected.\x0aFor example, select the text below, and click on ''PrintIt'':\x22\x0a\x0a1 + 2.\x0a\x0a\x22As with ''DoIt'', there is also a shortcut to execute this command.\x0a\x0aTry CTRL-p on the following expressions:\x22\x0a\x0aDate today.\x0a\x0a\x22The result is selected, so you can erase it using the backspace key. Try it !\x22\x0a\x0aDate today asDateString.\x0a\x0aDate today asTimeString.\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_reflection",
smalltalk.method({
selector: "reflection",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection", unescape("%22You%20can%20inspect%20and%20change%20the%20system%20at%20runtime.%0A%0ATake%20a%20look%20at%20the%20source%20code%20of%20the%20method%20%23and%3A%20of%20the%20class%20Boolean%3A%22%0A%0A%28Boolean%20methodDictionary%20at%3A%20%27and%3A%27%29%20source.%0A%0A%22Or%20all%20the%20methods%20it%20sends%3A%22%0A%0A%28Boolean%20methodDictionary%20at%3A%20%27and%3A%27%29%20messageSends.%0A%0A%22Here%27s%20all%20the%20methods%20I%20implement%3A%22%0A%0AProfStef%20methodDictionary.%0A%0A%22Let%27s%20create%20a%20new%20method%20to%20go%20to%20the%20next%20lesson%3A%22%0A%0A%7CnewMethod%7C%0AnewMethod%20%3A%3D%20Compiler%20new%20load%3A%20%27goToNextLesson%20ProfStef%20next.%27%20forClass%3A%20ProfStef.%0AProfStef%20class%20addCompiledMethod%3A%20newMethod%0A%0A%22Wow%21%20I%20can%27t%20wait%20to%20use%20my%20new%20method%21%22%0A%0AProfStef%20goToNextLesson.")]);
return self;},
args: [],
source: "reflection\x0a\x09^ Lesson\x0atitle: 'Reflection' \x0acontents: \x0a'\x22You can inspect and change the system at runtime.\x0a\x0aTake a look at the source code of the method #and: of the class Boolean:\x22\x0a\x0a(Boolean methodDictionary at: ''and:'') source.\x0a\x0a\x22Or all the methods it sends:\x22\x0a\x0a(Boolean methodDictionary at: ''and:'') messageSends.\x0a\x0a\x22Here''s all the methods I implement:\x22\x0a\x0aProfStef methodDictionary.\x0a\x0a\x22Let''s create a new method to go to the next lesson:\x22\x0a\x0a|newMethod|\x0anewMethod := Compiler new load: ''goToNextLesson ProfStef next.'' forClass: ProfStef.\x0aProfStef class addCompiledMethod: newMethod\x0a\x0a\x22Wow! I can''t wait to use my new method!\x22\x0a\x0aProfStef goToNextLesson.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_reflectionContinued",
smalltalk.method({
selector: "reflectionContinued",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection continued", unescape("%22So%20cool%2C%20isn%27t%20it%20%3F%20%20Before%20going%20further%2C%20let%27s%20remove%20this%20method%3A%22%0A%0AProfStef%20class%20methodAt%3A%20%23goToNextLesson.%0A%0AProfStef%20class%20removeCompiledMethod%3A%20%28ProfStef%20class%20methodAt%3A%20%23goToNextLesson%29.%0A%0AProfStef%20class%20methodAt%3A%20%23goToNextLesson.%0A%0A%0A%22Then%20move%20forward%3A%22%0A%0AProfStef%20perform%3A%23next")]);
return self;},
args: [],
source: "reflectionContinued\x0a\x09^ Lesson\x0atitle: 'Reflection continued' \x0acontents: \x0a'\x22So cool, isn''t it ?  Before going further, let''s remove this method:\x22\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0aProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0a\x0a\x22Then move forward:\x22\x0a\x0aProfStef perform:#next'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_tableOfContents",
smalltalk.method({
selector: "tableOfContents",
category: 'contents',
fn: function () {
var self=this;
return ["welcome", "doingVSPrinting", "printing", "basicTypesNumbers", "basicTypesString", "basicTypesArray", "basicTypesDynamicArray", "messageSyntaxUnary", "messageSyntaxBinary", "messageSyntaxKeyword", "messageSyntaxExecutionOrder", "messageSyntaxExecutionOrderParentheses", "mathematicalPrecedence", "messageSyntaxCascade", "messageSyntaxCascadeShouldNotBeHere", "blocks", "blocksAssignation", "conditionals", "loops", "iterators", "instanciation", "reflection", "reflectionContinued", "theEnd"];
return self;},
args: [],
source: "tableOfContents\x0a^ #(\x09'welcome'\x0a\x09'doingVSPrinting'\x0a\x09'printing'\x0a\x0a\x09'basicTypesNumbers'\x0a\x09\x22'basicTypesCharacters'\x22\x0a\x09'basicTypesString'\x0a\x09\x22'basicTypesSymbol'\x22\x0a\x09'basicTypesArray'\x0a\x09'basicTypesDynamicArray'\x0a\x0a\x09'messageSyntaxUnary'\x0a\x09'messageSyntaxBinary'\x0a\x09'messageSyntaxKeyword'\x0a\x09'messageSyntaxExecutionOrder'\x0a\x09'messageSyntaxExecutionOrderParentheses'\x0a\x09'mathematicalPrecedence'\x0a\x09'messageSyntaxCascade'\x0a\x09'messageSyntaxCascadeShouldNotBeHere'\x0a\x0a\x09'blocks'\x0a\x09'blocksAssignation'\x0a\x09'conditionals'\x0a\x09'loops'\x0a\x09'iterators'\x0a\x0a\x09'instanciation'\x0a\x0a\x09'reflection'\x0a\x09'reflectionContinued'\x0a\x09\x22'pharoEnvironment'\x22\x0a\x0a\x09\x22'debugger'\x22\x0a\x09'theEnd' )",
messageSends: [],
referencedClasses: []
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_theEnd",
smalltalk.method({
selector: "theEnd",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", [unescape("Tutorial%20done%20%21"), unescape("%22This%20tutorial%20is%20done.%20Enjoy%20programming%20Smalltalk%20with%20JTalk.%20%0A%0AYou%20can%20run%20this%20tutorial%20again%20by%20evaluating%3A%20ProfStef%20go.%0A%0ASee%20you%20soon%20%21%22%0A")]);
return self;},
args: [],
source: "theEnd\x0a\x09^ Lesson\x0atitle: 'Tutorial done !' \x0acontents: \x0a'\x22This tutorial is done. Enjoy programming Smalltalk with JTalk. \x0a\x0aYou can run this tutorial again by evaluating: ProfStef go.\x0a\x0aSee you soon !\x22\x0a'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_welcome",
smalltalk.method({
selector: "welcome",
category: 'pages',
fn: function () {
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", unescape("%20%22Hello%21%20I%27m%20Professor%20Stef.%20%0A%0AYou%20must%20want%20me%20to%20help%20you%20learn%20Smalltalk.%0A%0ASo%20let%27s%20go%20to%20the%20first%20lesson.%20%20Select%20the%20text%20below%20and%20click%20on%20the%20%27DoIt%27%20button%22%0A%0AProfStef%20next.")]);
return self;},
args: [],
source: "welcome\x0a\x09^ Lesson\x0atitle: 'Welcome' \x0acontents: \x0a' \x22Hello! I''m Professor Stef. \x0a\x0aYou must want me to help you learn Smalltalk.\x0a\x0aSo let''s go to the first lesson.  Select the text below and click on the ''DoIt'' button\x22\x0a\x0aProfStef next.'",
messageSends: ["title:contents:"],
referencedClasses: [Lesson]
}),
smalltalk.SmalltalkSyntaxTutorial);



smalltalk.addClass('Lesson', smalltalk.Object, ['title', 'contents'], 'TrySmalltalk');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@contents']) == nil || $receiver == undefined) ? (function(){return self['@contents']="";})() : $receiver;
return self;},
args: [],
source: "contents\x0a\x09^ contents ifNil: [contents := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString) {
var self=this;
self['@contents']=aString;
return self;},
args: ["aString"],
source: "contents: aString\x0a\x09contents := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@title']) == nil || $receiver == undefined) ? (function(){return self['@title']="";})() : $receiver;
return self;},
args: [],
source: "title\x0a\x09^ title ifNil: [title := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString) {
var self=this;
self['@title']=aString;
return self;},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);


smalltalk.addMethod(
"_title_contents_",
smalltalk.method({
selector: "title:contents:",
category: 'instance creation',
fn: function (aTitle, someContents) {
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", [aTitle]);return smalltalk.send($rec, "_contents_", [someContents]);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aTitle", "someContents"],
source: "title: aTitle contents: someContents\x0a\x09^ (self new)\x0a\x09\x09title: aTitle;\x0a\x09\x09contents: someContents",
messageSends: ["title:", "contents:", "new"],
referencedClasses: []
}),
smalltalk.Lesson.klass);


smalltalk.addClass('ProfStef', smalltalk.Object, ['tutorialPlayer', 'widget'], 'TrySmalltalk');
smalltalk.ProfStef.comment="A ProfStef is the Smalltalk teacher. To start the tutorial, evaluate:\x0aProfStef go.\x0a\x0aTo go to the next lesson evaluate:\x0aProfStef next.\x0a\x0aTo execute your own tutorial:\x0aProfStef goOn: MyOwnTutorial\x0a\x0aTo see a table of contents with all defined tutorials:\x0aProfStef contents"
smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
category: 'navigation',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_first", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;},
args: [],
source: "first\x0a\x09self tutorialPlayer first.\x0a\x09^ self showCurrentLesson.",
messageSends: ["first", "tutorialPlayer", "showCurrentLesson"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'navigation',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_next", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;},
args: [],
source: "next\x0a\x09self tutorialPlayer next.\x0a\x09^ self showCurrentLesson.",
messageSends: ["next", "tutorialPlayer", "showCurrentLesson"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
category: 'navigation',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_previous", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;},
args: [],
source: "previous\x0a\x09self tutorialPlayer previous.\x0a\x09^ self showCurrentLesson.",
messageSends: ["previous", "tutorialPlayer", "showCurrentLesson"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_progress",
smalltalk.method({
selector: "progress",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_tutorialPositionString", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_tutorialSizeString", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: "progress\x0a\x09^ '(', self tutorialPositionString, '/', self tutorialSizeString, ')'.",
messageSends: [",", "tutorialPositionString", "tutorialSizeString"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_showCurrentLesson",
smalltalk.method({
selector: "showCurrentLesson",
category: 'accessing',
fn: function () {
var self=this;
var lesson=nil;
lesson=smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_currentLesson", []);
smalltalk.send(self['@widget'], "_contents_", [smalltalk.send(lesson, "_contents", [])]);
smalltalk.send(self['@widget'], "_setTitle_", [smalltalk.send(smalltalk.send(smalltalk.send(lesson, "_title", []), "__comma", [" "]), "__comma", [smalltalk.send(self, "_progress", [])])]);
return self;},
args: [],
source: "showCurrentLesson\x0a\x09| lesson |\x0a\x09lesson := self tutorialPlayer currentLesson.\x0a\x09widget contents: lesson contents.\x0a\x09widget setTitle: lesson title , ' ' , self progress.",
messageSends: ["currentLesson", "tutorialPlayer", "contents:", "contents", "setTitle:", ",", "title", "progress"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialPlayer",
smalltalk.method({
selector: "tutorialPlayer",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@tutorialPlayer']) == nil || $receiver == undefined) ? (function(){return self['@tutorialPlayer']=smalltalk.send((smalltalk.TutorialPlayer || TutorialPlayer), "_new", []);})() : $receiver;
return self;},
args: [],
source: "tutorialPlayer\x0a\x09^ tutorialPlayer ifNil: [tutorialPlayer := TutorialPlayer new]",
messageSends: ["ifNil:", "new"],
referencedClasses: [TutorialPlayer]
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialPositionString",
smalltalk.method({
selector: "tutorialPositionString",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_tutorialPosition", []), "_asString", []);
return self;},
args: [],
source: "tutorialPositionString\x0a\x09^ self tutorialPlayer tutorialPosition asString.",
messageSends: ["asString", "tutorialPosition", "tutorialPlayer"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialSizeString",
smalltalk.method({
selector: "tutorialSizeString",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_size", []), "_asString", []);
return self;},
args: [],
source: "tutorialSizeString\x0a\x09^ self tutorialPlayer size asString",
messageSends: ["asString", "size", "tutorialPlayer"],
referencedClasses: []
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
category: 'accessing',
fn: function (aWidget) {
var self=this;
self['@widget']=aWidget;
return self;},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProfStef);


smalltalk.ProfStef.klass.iVarNames = ['instance'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
category: 'initialize',
fn: function () {
var self=this;
return (($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return self['@instance']=smalltalk.send(self, "_new", []);})() : $receiver;
return self;},
args: [],
source: "default \x0a\x09^ instance ifNil: [instance := self new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
category: 'navigation',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_first", []);
return self;},
args: [],
source: "first\x0a\x09^ self default first.",
messageSends: ["first", "default"],
referencedClasses: []
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_go",
smalltalk.method({
selector: "go",
category: 'navigation',
fn: function () {
var self=this;
smalltalk.send(self, "_first", []);
return self;},
args: [],
source: "go\x0a\x09self first.",
messageSends: ["first"],
referencedClasses: []
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'navigation',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_next", []);
return self;},
args: [],
source: "next\x0a\x09^ self default next.",
messageSends: ["next", "default"],
referencedClasses: []
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
category: 'navigation',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_previous", []);
return self;},
args: [],
source: "previous\x0a\x09^ self default previous.",
messageSends: ["previous", "default"],
referencedClasses: []
}),
smalltalk.ProfStef.klass);


smalltalk.addClass('TrySmalltalkWidget', smalltalk.Widget, ['workspace', 'contents', 'header'], 'TrySmalltalk');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_workspace", []), "_val", []);
return self;},
args: [],
source: "contents\x0a\x09^self workspace val",
messageSends: ["val", "workspace"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self, "_workspace", []), "_val_", [aString]);
return self;},
args: ["aString"],
source: "contents: aString\x0a\x09self workspace val: aString",
messageSends: ["val:", "workspace"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html) {
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+d")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+p")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+i")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: "renderButtonsOn: html\x0a    html button\x0a\x09with: 'DoIt';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [self workspace doIt].\x0a    html button\x0a\x09with: 'PrintIt';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [self workspace printIt].\x0a    html button\x0a\x09with: 'InspectIt';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [self workspace inspectIt]",
messageSends: ["with:", "title:", "onClick:", "doIt", "workspace", "button", "printIt", "inspectIt"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["profStef"]);smalltalk.send($rec, "_with_", [(function(){return self['@header']=smalltalk.send(html, "_h2", []);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_renderOn_", [html]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_widget_", [self]);return smalltalk.send($rec, "_showCurrentLesson", []);})(smalltalk.send((smalltalk.ProfStef || ProfStef), "_default", []));
return self;},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'profStef'; \x0a\x09\x09with: [header := html h2];\x0a\x09\x09with: [self workspace renderOn: html];\x0a\x09\x09with: [self renderButtonsOn: html].\x0a          ProfStef default \x0a\x09\x09widget: self;\x0a\x09\x09showCurrentLesson",
messageSends: ["class:", "with:", "h2", "renderOn:", "workspace", "renderButtonsOn:", "div", "widget:", "showCurrentLesson", "default"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_setTitle_",
smalltalk.method({
selector: "setTitle:",
category: 'accessing',
fn: function (aString) {
var self=this;
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [aString]);})]);
return self;},
args: ["aString"],
source: "setTitle: aString\x0a\x09header contents: [:html | html with: aString]",
messageSends: ["contents:", "with:"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_workspace",
smalltalk.method({
selector: "workspace",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@workspace']) == nil || $receiver == undefined) ? (function(){return self['@workspace']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);})() : $receiver;
return self;},
args: [],
source: "workspace\x0a\x09^ workspace ifNil: [\x0a          \x09workspace := SourceArea new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'initialize',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: "open\x0a\x09self new appendToJQuery: 'body' asJQuery.",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrySmalltalkWidget.klass);


smalltalk.addClass('TutorialPlayer', smalltalk.Object, ['tutorialPosition', 'tutorial'], 'TrySmalltalk');
smalltalk.TutorialPlayer.comment="I can navigate through an AbstractTutorial subclass. With #next and #previous you can go forward and backward through the tutorial."
smalltalk.addMethod(
"_currentLesson",
smalltalk.method({
selector: "currentLesson",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_lessonAt_", [smalltalk.send(self, "_tutorialPosition", [])]);
return self;},
args: [],
source: "currentLesson\x0a\x09^ self tutorial lessonAt: self tutorialPosition.",
messageSends: ["lessonAt:", "tutorial", "tutorialPosition"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
category: 'navigation',
fn: function () {
var self=this;
smalltalk.send(self, "_rewind", []);
return smalltalk.send(self, "_currentLesson", []);
return self;},
args: [],
source: "first\x0a\x09self rewind.\x0a\x09^ self currentLesson",
messageSends: ["rewind", "currentLesson"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
category: 'navigation',
fn: function () {
var self=this;
self['@tutorialPosition']=smalltalk.send(self, "_size", []);
return smalltalk.send(self, "_currentLesson", []);
return self;},
args: [],
source: "last\x0a\x09tutorialPosition := self size.\x0a\x09^ self currentLesson",
messageSends: ["size", "currentLesson"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'navigation',
fn: function () {
var self=this;
(($receiver = (($receiver = smalltalk.send(self, "_tutorialPosition", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(self, "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(self, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})]);
return smalltalk.send(self, "_currentLesson", []);
return self;},
args: [],
source: "next\x0a\x09self tutorialPosition < self size\x0a\x09\x09ifTrue: [tutorialPosition := tutorialPosition + 1].\x0a\x09^ self currentLesson",
messageSends: ["ifTrue:", "<", "tutorialPosition", "size", "+", "currentLesson"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
category: 'navigation',
fn: function () {
var self=this;
(($receiver = (($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);})]);
return smalltalk.send(self, "_currentLesson", []);
return self;},
args: [],
source: "previous\x0a\x09tutorialPosition >  1 ifTrue: [tutorialPosition := tutorialPosition  - 1].\x0a\x09^ self currentLesson",
messageSends: ["ifTrue:", ">", "-", "currentLesson"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_rewind",
smalltalk.method({
selector: "rewind",
category: 'navigation',
fn: function () {
var self=this;
self['@tutorialPosition']=(1);
return self;},
args: [],
source: "rewind\x0a\x09tutorialPosition := 1.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_size", []);
return self;},
args: [],
source: "size\x0a\x09^ self tutorial size",
messageSends: ["size", "tutorial"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorial",
smalltalk.method({
selector: "tutorial",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@tutorial']) == nil || $receiver == undefined) ? (function(){return self['@tutorial']=smalltalk.send((smalltalk.SmalltalkSyntaxTutorial || SmalltalkSyntaxTutorial), "_new", []);})() : $receiver;
return self;},
args: [],
source: "tutorial\x0a\x09^ tutorial  ifNil: [tutorial := SmalltalkSyntaxTutorial new]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorial_",
smalltalk.method({
selector: "tutorial:",
category: 'accessing',
fn: function (aTutorial) {
var self=this;
self['@tutorial']=aTutorial;
return self;},
args: ["aTutorial"],
source: "tutorial: aTutorial\x0a\x09tutorial := aTutorial",
messageSends: [],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorialPosition",
smalltalk.method({
selector: "tutorialPosition",
category: 'accessing',
fn: function () {
var self=this;
return (($receiver = self['@tutorialPosition']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_rewind", []);return self['@tutorialPosition'];})() : $receiver;
return self;},
args: [],
source: "tutorialPosition \x0a\x09^ tutorialPosition  ifNil: [\x0a\x09\x09self rewind.\x0a\x09\x09tutorialPosition.\x0a\x09].",
messageSends: ["ifNil:", "rewind"],
referencedClasses: []
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorialPosition_",
smalltalk.method({
selector: "tutorialPosition:",
category: 'accessing',
fn: function (aTutorialPosition) {
var self=this;
self['@tutorialPosition']=aTutorialPosition;
return self;},
args: ["aTutorialPosition"],
source: "tutorialPosition: aTutorialPosition \x0a\x09tutorialPosition := aTutorialPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.TutorialPlayer);



