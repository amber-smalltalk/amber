smalltalk.addPackage('TrySmalltalk', {});
smalltalk.addClass('AbstractTutorial', smalltalk.Object, [], 'TrySmalltalk');
smalltalk.addMethod(
"_indexOfLesson_",
smalltalk.method({
selector: "indexOfLesson:",
fn: function (aSelector){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_indexOf_", [aSelector]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_lessonAt_",
smalltalk.method({
selector: "lessonAt:",
fn: function (anInteger){
var self=this;
var lessonSelector=nil;
(lessonSelector=smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_at_", [anInteger]));
return smalltalk.send(self, "_perform_", [lessonSelector]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_size", []);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_tableOfContents",
smalltalk.method({
selector: "tableOfContents",
fn: function (){
var self=this;
return ["welcome", "testLesson", "theEnd"];
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_testLesson",
smalltalk.method({
selector: "testLesson",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Test Lesson", "\x22This lesson is a test\x22"]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_theEnd",
smalltalk.method({
selector: "theEnd",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["The End", "\x22And that'd be pretty much it :)\x22"]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
"_welcome",
smalltalk.method({
selector: "welcome",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", "\x22Hi, this is a test tutorial.\x22"]);
return self;}
}),
smalltalk.AbstractTutorial);



smalltalk.addClass('SmalltalkSyntaxTutorial', smalltalk.AbstractTutorial, [], 'TrySmalltalk');
smalltalk.addMethod(
"_basicTypesArray",
smalltalk.method({
selector: "basicTypesArray",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Array", "\x22Literal arrays are created at parse time:\x22\x0a\x0a#(1 2 3).\x0a\x0a#( 1 2 3 #(4 5 6)) size.\x0a\x0a#(1 2 4) isEmpty.\x0a\x0a#(1 2 3) first.\x0a\x0a#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesCharacters",
smalltalk.method({
selector: "basicTypesCharacters",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Characters", "\x22A Character can be instantiated using $ operator:\x22\x0a\x0a$A.\x0a\x0a$A class.\x0a\x0a$B charCode.\x0a\x0aCharacter cr.\x0a\x0aCharacter space.\x0a\x0a\x22You can print all 256 characters of the ASCII extended set:\x22\x0a\x0aCharacter allByteCharacters.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesDynamicArray",
smalltalk.method({
selector: "basicTypesDynamicArray",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Dynamic Array", "\x22Dynamic Arrays are created at execution time:\x22\x0a\x0a{ (2+3) . (6*6) }.\x0a\x0a{ (2+3) . (6*6) . 'hello', ' Stef'} size.\x0a\x0a\x0a{ ProfStef } first next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesNumbers",
smalltalk.method({
selector: "basicTypesNumbers",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Numbers", "\x22You now know how to execute Smalltalk code. \x0a\x0aNow let's talk about basic objects.\x0a\x0a1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.\x0aEvaluate these ones:\x22\x0a\x0a2.\x0a\x0a(1/3).\x0a\x0a(1/3) + (4/5).\x0a\x0a(18/5) rounded.\x0a\x0a1 class.\x0a\x0a1 negated.\x0a\x0a1 negated negated.\x0a\x0a(1 + 3) odd.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesString",
smalltalk.method({
selector: "basicTypesString",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Strings", "\x22A String is a collection of characters. Use single quotes to create a String object. Print these expressions:\x22\x0a\x0a'ProfStef'.\x0a\x0a'ProfStef' size.\x0a\x0a'abc' asUppercase.\x0a\x0a'Hello World' reversed. \x0a\x0a\x22You can access each character using at: message\x22\x0a\x0a'ProfStef' at: 1.\x0a\x0a\x22String concatenation uses the comma operator:\x22\x0a\x0a'ProfStef', ' is cool'.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_basicTypesSymbol",
smalltalk.method({
selector: "basicTypesSymbol",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Symbols", "\x22A Symbol is a String which is guaranteed to be globally unique. \x0a\x0aThere is one and only one Symbol #ProfStef. There may be several 'ProfStef' String objects.\x0a\x0a(Message == returns true if the two objects are the SAME)\x22\x0a\x0a'ProfStef' asSymbol.\x0a\x0a#ProfStef asString.\x0a\x0a(2 asString) == (2 asString).\x0a\x0a(2 asString) asSymbol == (2 asString) asSymbol.\x0a\x0a\x0a(Smalltalk at: #ProfStef) next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_blocks",
smalltalk.method({
selector: "blocks",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Blocks", "\x22Cascade is cool ! Let's talk about blocks.\x0a\x0aBlocks are anonymous methods that can be stored into variables and executed on demand.\x0a\x0aBlocks are delimited by square brackets: []\x22\x0a\x0a[Transcript open].\x0a\x0a\x22does not open a Transcript because the block is not executed.\x0a\x0aHere is a block that adds 2 to its argument (its argument is named x):\x22\x0a\x0a[:x | x+2].\x0a\x0a\x22We can execute a block by sending it value messages.\x22\x0a\x0a[:x | x+2] value: 5.\x0a\x0a[Transcript open] value.\x0a\x0a[:x | x+2] value: 10.\x0a\x0a[:x :y| x + y] value:3 value:5.\x0a\x0a[ProfStef next] value."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_blocksAssignation",
smalltalk.method({
selector: "blocksAssignation",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Block assignation", "\x22Blocks can be assigned to a variable then executed later.\x0a\x0aNote that |b| is the declaration of a variable named 'b' and that ':=' assigns a value to a variable.\x0a\x0aSelect the three lines then Print It:\x22\x0a\x0a|b|\x0ab := [:x | x+2].\x0ab value: 12.\x0a\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_conditionals",
smalltalk.method({
selector: "conditionals",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Conditionals", "\x22Conditionals are just messages sent to Boolean objects\x22\x0a\x0a1 < 2\x0a  ifTrue: [100]\x0a  ifFalse: [42].\x0a\x0a\x22Here the message is ifTrue:ifFalse\x0a\x0aTry this:\x22\x0a\x0aTranscript open.\x0a\x0a3 > 10 \x0a\x09ifTrue: [Transcript show: 'maybe there''s a bug ....']\x0a\x09ifFalse: [Transcript show: 'No : 3 is less than 10'].\x0a\x0a3 = 3 ifTrue: [ProfStef next]."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_debugger",
smalltalk.method({
selector: "debugger",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Debugger", "\x22The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. \x0a\x0aThe following code will open the debugger.\x0a\x0a***This should be rethought completely***\x22\x0a\x0a\x0a "]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_doingVSPrinting",
smalltalk.method({
selector: "doingVSPrinting",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Doing", "\x22Cool ! (I like to say Cooool :) ).\x0aYou've just executed a Smalltalk expression.\x0aMore precisely, you sent the message 'next' to ProfStef class (it's me !).\x0a\x0aNote you can run this tutorial again by evaluating: 'ProfStef go'. \x0a'ProfStef previous' returns to the previous lesson.\x0a\x0aYou can also Do It using the keyboard shortcut 'CTRL d'\x0a\x0aTry to evaluate this expression:\x22\x0a\x0awindow alert: 'hello world!'.\x0a\x0a\x22Then go to the next lesson:\x22\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_instanciation",
smalltalk.method({
selector: "instanciation",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Instanciation", "\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let's create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: 'Some text';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we've created? Actually, #('Some text' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we'll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the 'anArray' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: 'Some text';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: 'Some more text!'.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I'll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: ('move on!' -> ProfStef)) at: 'move on!') next"]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_iterators",
smalltalk.method({
selector: "iterators",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Iterators", "\x22The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.\x0a\x0aHere we want to print all the numbers on the Transcript (a console)\x22\x0a\x0a#(11 38 3 -2 10) do: [:each |\x0a     Transcript show: each printString; cr].\x0a\x0a\x22Some other really nice iterators\x22\x0a\x0a#(11 38 3 -2 10) collect: [:each | each negated].\x0a\x0a#(11 38 3 -2 10) collect: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) reject: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) \x0a     do: [:each | Transcript show: each printString]\x0a     separatedBy: [Transcript show: '.'].\x0a\x0a\x0a(Smalltalk current classes select: [:eachClass | eachClass name = 'ProfStef']) do: [:eachProfstef | eachProfstef next]."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_loops",
smalltalk.method({
selector: "loops",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Loops", "\x22Loops are high-level collection iterators, implemented as regular methods.\x22\x0a\x0a\x22Basic loops:\x0a  to:do:\x0a  to:by:do\x22\x0a\x0a1 to: 100 do:\x0a  [:i | Transcript show: i asString; cr ].\x0a\x0a1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].\x0a\x0a100 to: 0 by: -2 do: \x0a    [:i | Transcript show: i asString; cr].\x0a\x0a1 to: 1 do: [:i | ProfStef next]."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_mathematicalPrecedence",
smalltalk.method({
selector: "mathematicalPrecedence",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Mathematical precedence", "\x22Traditional precedence rules from mathematics do not follow in Smalltalk.\x22\x0a\x0a2 * 10 + 2.\x0a\x0a\x22Here the message * is sent to 2, which answers 20, then 20 receive the message +\x0a\x0aRemember that all messages always follow a simple left-to-right precedence rule, * without exceptions *.\x22\x0a\x0a2 + 2 * 10.\x0a\x0a2 + (2 * 10).\x0a\x0a8 - 5 / 2.\x0a\x0a(8 - 5) / 2.\x0a\x0a8 - (5 / 2).\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxBinary",
smalltalk.method({
selector: "messageSyntaxBinary",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Binary messages", "\x22Binary messages have the following form:\x0a    anObject + anotherObject\x22\x0a\x0a3 * 2.\x0a\x0aDate today year = 2011.\x0a\x0afalse | false.\x0a\x0atrue & true.\x0a\x0atrue & false.\x0a\x0a10 @ 100.\x0a\x0a10 <= 12.\x0a\x0a'ab', 'cd'.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxCascade",
smalltalk.method({
selector: "messageSyntaxCascade",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Cascade", "\x22; is the cascade operator. It's useful to send message to the SAME receiver\x0aOpen a Transcript (console):\x22\x0a\x0aTranscript open.\x0a\x0a\x22Then:\x22\x0a\x0aTranscript show: 'hello'.\x0aTranscript show: 'Smalltalk'.\x0aTranscript cr.\x0a\x0a\x22is equivalent to:\x22\x0a\x0aTranscript \x0a\x09   show: 'hello';\x0a\x09   show: 'Smalltalk' ;\x0a\x09   cr.\x0a\x0a\x22You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.\x0aTry to go to the next lesson with a cascade of two 'next' messages:\x22\x0a\x0aProfStef"]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxCascadeShouldNotBeHere",
smalltalk.method({
selector: "messageSyntaxCascadeShouldNotBeHere",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Lost ?", "\x22Hey, you should not be here !! \x0a\x0aGo back and use a cascade !\x22\x0a\x0aProfStef previous."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxExecutionOrder",
smalltalk.method({
selector: "messageSyntaxExecutionOrder",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Execution order", "\x22Unary messages are executed first, then binary messages and finally keyword messages:\x0a    Unary > Binary > Keywords\x22\x0a\x0a2.5 + 3.8 rounded.\x0a\x0a3 max: 2 + 2.\x0a  \x0a(0@0) class.\x0a\x0a0@0 x: 100.\x0a\x0a(0@0 x: 100) class.\x0a\x0a\x22Between messages of similar precedence, expressions are executed from left to right\x22\x0a\x0a-12345 negated asString reversed.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxExecutionOrderParentheses",
smalltalk.method({
selector: "messageSyntaxExecutionOrderParentheses",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Parentheses", "\x22Use parentheses to change order of evaluation\x22\x0a\x0a(2.5 + 3.8) rounded.\x0a\x0a(3 max: 2) + 2.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxKeyword",
smalltalk.method({
selector: "messageSyntaxKeyword",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Keyword messages", "\x22Keyword Messages are messages with arguments. They have the following form:\x0a    anObject akey: anotherObject akey2: anotherObject2\x22\x0a\x0a'Web development is a good deal of pain' copyFrom: 1 to: 30\x0a\x0a\x22The message is copyFrom:to: sent to the String 'Web development is a good deal of pain'\x22\x0a\x0a1 max: 3.\x0a\x0aArray with: 'hello' with: 2 with: Smalltalk.\x0a\x0a\x22The message is with:with:with: implemented on class Array. Note you can also write\x22\x0a\x0aArray\x0a\x09with: 'Hi there!'\x0a\x09with: 2\x0a\x09with: Smalltalk.\x0a\x09\x0aProfStef perform: 'next'."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_messageSyntaxUnary",
smalltalk.method({
selector: "messageSyntaxUnary",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Unary messages", "\x22Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.\x0a\x0aUnary messages have the following form:\x0a    anObject aMessage \x0a\x0aYou've already sent unary messages. For example:\x22\x0a\x0a1 class.\x0a\x0afalse not.\x0a\x0aDate today.\x0a\x0aNumber pi.\x0a\x0a\x22And of course: \x22\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_pharoEnvironment",
smalltalk.method({
selector: "pharoEnvironment",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Pharo environment", "\x22Every Smalltalk system is full of objects.\x0aThere are windows, text, numbers, dates, colors, points and much more.\x0aYou can interact with objects in a much more direct way than is possible with other programming languages.\x0a\x0aEvery object understands the message 'explore'. As a result, you get an Explorer window that shows details about the object.\x22\x0a\x0aDate today explore.\x0a\x0a\x22This shows that the date object consists of a point in time (start) and a duration (one day long).\x22\x0a\x0aProfStef explore.\x0a\x0a\x22You see, ProfStef class has a lot of objects. Let's take a look at my code:\x22\x0a\x0aProfStef browse.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_printing",
smalltalk.method({
selector: "printing",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Printing", "\x22Now you're a Do It master ! Let's talk about printing.\x0aIt's a Do It which prints the result next to the expression you've selected.\x0aFor example, select the text below, and click on 'PrintIt':\x22\x0a\x0a1 + 2.\x0a\x0a\x22As with 'DoIt', there is also a shortcut to execute this command.\x0a\x0aTry CTRL-p on the following expressions:\x22\x0a\x0aDate today.\x0a\x0a\x22The result is selected, so you can erase it using the backspace key. Try it !\x22\x0a\x0aDate today asDateString.\x0a\x0aDate today asTimeString.\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_reflection",
smalltalk.method({
selector: "reflection",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection", "\x22You can inspect and change the system at runtime.\x0a\x0aTake a look at the source code of the method #and: of the class Boolean:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') source.\x0a\x0a\x22Or all the methods it sends:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') messageSends.\x0a\x0a\x22Here's all the methods I implement:\x22\x0a\x0aProfStef methodDictionary.\x0a\x0a\x22Let's create a new method to go to the next lesson:\x22\x0a\x0a|newMethod|\x0anewMethod := Compiler new load: 'goToNextLesson ProfStef next.' forClass: ProfStef.\x0aProfStef class addCompiledMethod: newMethod\x0a\x0a\x22Wow! I can't wait to use my new method!\x22\x0a\x0aProfStef goToNextLesson."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_reflectionContinued",
smalltalk.method({
selector: "reflectionContinued",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection continued", "\x22So cool, isn't it ?  Before going further, let's remove this method:\x22\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0aProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0a\x0a\x22Then move forward:\x22\x0a\x0aProfStef perform:#next"]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_tableOfContents",
smalltalk.method({
selector: "tableOfContents",
fn: function (){
var self=this;
return ["welcome", "doingVSPrinting", "printing", "basicTypesNumbers", "basicTypesString", "basicTypesArray", "basicTypesDynamicArray", "messageSyntaxUnary", "messageSyntaxBinary", "messageSyntaxKeyword", "messageSyntaxExecutionOrder", "messageSyntaxExecutionOrderParentheses", "mathematicalPrecedence", "messageSyntaxCascade", "messageSyntaxCascadeShouldNotBeHere", "blocks", "blocksAssignation", "conditionals", "loops", "iterators", "instanciation", "reflection", "reflectionContinued", "theEnd"];
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_theEnd",
smalltalk.method({
selector: "theEnd",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Tutorial done !", "\x22This tutorial is done. Enjoy programming Smalltalk with Amber. \x0a\x0aYou can run this tutorial again by evaluating: ProfStef go.\x0a\x0aSee you soon !\x22\x0a"]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
"_welcome",
smalltalk.method({
selector: "welcome",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", " \x22Hello! I'm Professor Stef. \x0a\x0aYou must want me to help you learn Smalltalk.\x0a\x0aSo let's go to the first lesson.  Select the text below and click on the 'DoIt' button\x22\x0a\x0aProfStef next."]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);



smalltalk.addClass('Lesson', smalltalk.Object, ['title', 'contents'], 'TrySmalltalk');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return (($receiver = self['@contents']) == nil || $receiver == undefined) ? (function(){return (self['@contents']="");})() : $receiver;
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
(self['@contents']=aString);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return (($receiver = self['@title']) == nil || $receiver == undefined) ? (function(){return (self['@title']="");})() : $receiver;
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
(self['@title']=aString);
return self;}
}),
smalltalk.Lesson);


smalltalk.addMethod(
"_title_contents_",
smalltalk.method({
selector: "title:contents:",
fn: function (aTitle, someContents){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", [aTitle]);return smalltalk.send($rec, "_contents_", [someContents]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Lesson.klass);


smalltalk.addClass('ProfStef', smalltalk.Object, ['tutorialPlayer', 'widget'], 'TrySmalltalk');
smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_first", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_next", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_previous", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_progress",
smalltalk.method({
selector: "progress",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(", "__comma", [smalltalk.send(self, "_tutorialPositionString", [])]), "__comma", ["/"]), "__comma", [smalltalk.send(self, "_tutorialSizeString", [])]), "__comma", [")"]);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_showCurrentLesson",
smalltalk.method({
selector: "showCurrentLesson",
fn: function (){
var self=this;
var lesson=nil;
(lesson=smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_currentLesson", []));
smalltalk.send(self['@widget'], "_contents_", [smalltalk.send(lesson, "_contents", [])]);
smalltalk.send(self['@widget'], "_setTitle_", [smalltalk.send(smalltalk.send(smalltalk.send(lesson, "_title", []), "__comma", [" "]), "__comma", [smalltalk.send(self, "_progress", [])])]);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialPlayer",
smalltalk.method({
selector: "tutorialPlayer",
fn: function (){
var self=this;
return (($receiver = self['@tutorialPlayer']) == nil || $receiver == undefined) ? (function(){return (self['@tutorialPlayer']=smalltalk.send((smalltalk.TutorialPlayer || TutorialPlayer), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialPositionString",
smalltalk.method({
selector: "tutorialPositionString",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_tutorialPosition", []), "_asString", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_tutorialSizeString",
smalltalk.method({
selector: "tutorialSizeString",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_size", []), "_asString", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
(self['@widget']=aWidget);
return self;}
}),
smalltalk.ProfStef);


smalltalk.ProfStef.klass.iVarNames = ['instance'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return (($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_first", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_go",
smalltalk.method({
selector: "go",
fn: function (){
var self=this;
smalltalk.send(self, "_first", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_next", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_previous", []);
return self;}
}),
smalltalk.ProfStef.klass);


smalltalk.addClass('TrySmalltalkWidget', smalltalk.Widget, ['workspace', 'contents', 'header'], 'TrySmalltalk');
smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_workspace", []), "_val", []);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_workspace", []), "_val_", [aString]);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", ["ctrl+d"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", ["ctrl+p"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", ["ctrl+i"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["profStef"]);smalltalk.send($rec, "_with_", [(function(){return (self['@header']=smalltalk.send(html, "_h2", []));})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_renderOn_", [html]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_widget_", [self]);return smalltalk.send($rec, "_showCurrentLesson", []);})(smalltalk.send((smalltalk.ProfStef || ProfStef), "_default", []));
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_setTitle_",
smalltalk.method({
selector: "setTitle:",
fn: function (aString){
var self=this;
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [aString]);})]);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
"_workspace",
smalltalk.method({
selector: "workspace",
fn: function (){
var self=this;
return (($receiver = self['@workspace']) == nil || $receiver == undefined) ? (function(){return (self['@workspace']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TrySmalltalkWidget);


smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.TrySmalltalkWidget.klass);


smalltalk.addClass('TutorialPlayer', smalltalk.Object, ['tutorialPosition', 'tutorial'], 'TrySmalltalk');
smalltalk.addMethod(
"_currentLesson",
smalltalk.method({
selector: "currentLesson",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_lessonAt_", [smalltalk.send(self, "_tutorialPosition", [])]);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_first",
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
smalltalk.send(self, "_rewind", []);
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_last",
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
(self['@tutorialPosition']=smalltalk.send(self, "_size", []));
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
((($receiver = ((($receiver = smalltalk.send(self, "_tutorialPosition", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(self, "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(self, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@tutorialPosition']=((($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@tutorialPosition']=((($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));})]));
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
((($receiver = ((($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@tutorialPosition']=((($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@tutorialPosition']=((($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})]));
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_rewind",
smalltalk.method({
selector: "rewind",
fn: function (){
var self=this;
(self['@tutorialPosition']=(1));
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_size", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorial",
smalltalk.method({
selector: "tutorial",
fn: function (){
var self=this;
return (($receiver = self['@tutorial']) == nil || $receiver == undefined) ? (function(){return (self['@tutorial']=smalltalk.send((smalltalk.SmalltalkSyntaxTutorial || SmalltalkSyntaxTutorial), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorial_",
smalltalk.method({
selector: "tutorial:",
fn: function (aTutorial){
var self=this;
(self['@tutorial']=aTutorial);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorialPosition",
smalltalk.method({
selector: "tutorialPosition",
fn: function (){
var self=this;
return (($receiver = self['@tutorialPosition']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_rewind", []);return self['@tutorialPosition'];})() : $receiver;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
"_tutorialPosition_",
smalltalk.method({
selector: "tutorialPosition:",
fn: function (aTutorialPosition){
var self=this;
(self['@tutorialPosition']=aTutorialPosition);
return self;}
}),
smalltalk.TutorialPlayer);



