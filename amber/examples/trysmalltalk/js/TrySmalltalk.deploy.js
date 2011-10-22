smalltalk.addClass('TrySmalltalkWidget', smalltalk.Widget, ['workspace', 'contents', 'header'], 'TrySmalltalk');
smalltalk.addMethod(
'_workspace',
smalltalk.method({
selector: 'workspace',
fn: function (){
var self=this;
return (($receiver = self['@workspace']) == nil || $receiver == undefined) ? (function(){return self['@workspace']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_workspace", []), "_val_", [aString]);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_workspace", []), "_val", []);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
'_setTitle_',
smalltalk.method({
selector: 'setTitle:',
fn: function (aString){
var self=this;
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [aString]);})]);
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["profStef"]);smalltalk.send($rec, "_with_", [(function(){return self['@header']=smalltalk.send(html, "_h2", []);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_renderOn_", [html]);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_widget_", [self]);return smalltalk.send($rec, "_showCurrentLesson", []);})(smalltalk.send((smalltalk.ProfStef || ProfStef), "_default", []));
return self;}
}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
'_renderButtonsOn_',
smalltalk.method({
selector: 'renderButtonsOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+d")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+p")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+i")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_workspace", []), "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.TrySmalltalkWidget);


smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.TrySmalltalkWidget.klass);


smalltalk.addClass('AbstractTutorial', smalltalk.Object, [], 'TrySmalltalk');
smalltalk.addMethod(
'_indexOfLesson_',
smalltalk.method({
selector: 'indexOfLesson:',
fn: function (aSelector){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_indexOf_", [aSelector]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_tableOfContents',
smalltalk.method({
selector: 'tableOfContents',
fn: function (){
var self=this;
return ["welcome", "testLesson", "theEnd"];
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_lessonAt_',
smalltalk.method({
selector: 'lessonAt:',
fn: function (anInteger){
var self=this;
var lessonSelector=nil;
lessonSelector=smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_at_", [anInteger]);
return smalltalk.send(self, "_perform_", [lessonSelector]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tableOfContents", []), "_size", []);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_welcome',
smalltalk.method({
selector: 'welcome',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", unescape("%22Hi%2C%20this%20is%20a%20test%20tutorial.%22")]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_testLesson',
smalltalk.method({
selector: 'testLesson',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Test Lesson", unescape("%22This%20lesson%20is%20a%20test%22")]);
return self;}
}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
'_theEnd',
smalltalk.method({
selector: 'theEnd',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["The End", unescape("%22And%20that%27d%20be%20pretty%20much%20it%20%3A%29%22")]);
return self;}
}),
smalltalk.AbstractTutorial);



smalltalk.addClass('Lesson', smalltalk.Object, ['title', 'contents'], 'TrySmalltalk');
smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return (($receiver = self['@contents']) == nil || $receiver == undefined) ? (function(){return self['@contents']="";})() : $receiver;
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (aString){
var self=this;
self['@contents']=aString;
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
'_title_',
smalltalk.method({
selector: 'title:',
fn: function (aString){
var self=this;
self['@title']=aString;
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return (($receiver = self['@title']) == nil || $receiver == undefined) ? (function(){return self['@title']="";})() : $receiver;
return self;}
}),
smalltalk.Lesson);


smalltalk.addMethod(
'_title_contents_',
smalltalk.method({
selector: 'title:contents:',
fn: function (aTitle, someContents){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", [aTitle]);return smalltalk.send($rec, "_contents_", [someContents]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Lesson.klass);


smalltalk.addClass('TutorialPlayer', smalltalk.Object, ['tutorialPosition', 'tutorial'], 'TrySmalltalk');
smalltalk.addMethod(
'_currentLesson',
smalltalk.method({
selector: 'currentLesson',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_lessonAt_", [smalltalk.send(self, "_tutorialPosition", [])]);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_tutorial", []), "_size", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_tutorial',
smalltalk.method({
selector: 'tutorial',
fn: function (){
var self=this;
return (($receiver = self['@tutorial']) == nil || $receiver == undefined) ? (function(){return self['@tutorial']=smalltalk.send((smalltalk.SmalltalkSyntaxTutorial || SmalltalkSyntaxTutorial), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_tutorial_',
smalltalk.method({
selector: 'tutorial:',
fn: function (aTutorial){
var self=this;
self['@tutorial']=aTutorial;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_tutorialPosition',
smalltalk.method({
selector: 'tutorialPosition',
fn: function (){
var self=this;
return (($receiver = self['@tutorialPosition']) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_rewind", []);return self['@tutorialPosition'];})() : $receiver;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_tutorialPosition_',
smalltalk.method({
selector: 'tutorialPosition:',
fn: function (aTutorialPosition){
var self=this;
self['@tutorialPosition']=aTutorialPosition;
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
smalltalk.send(self, "_rewind", []);
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_last',
smalltalk.method({
selector: 'last',
fn: function (){
var self=this;
self['@tutorialPosition']=smalltalk.send(self, "_size", []);
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function (){
var self=this;
(($receiver = (($receiver = smalltalk.send(self, "_tutorialPosition", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(self, "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(self, "_size", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]);})]);
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_previous',
smalltalk.method({
selector: 'previous',
fn: function (){
var self=this;
(($receiver = (($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return self['@tutorialPosition']=(($receiver = self['@tutorialPosition']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]);})]);
return smalltalk.send(self, "_currentLesson", []);
return self;}
}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
'_rewind',
smalltalk.method({
selector: 'rewind',
fn: function (){
var self=this;
self['@tutorialPosition']=(1);
return self;}
}),
smalltalk.TutorialPlayer);



smalltalk.addClass('ProfStef', smalltalk.Object, ['tutorialPlayer', 'widget'], 'TrySmalltalk');
smalltalk.addMethod(
'_tutorialPlayer',
smalltalk.method({
selector: 'tutorialPlayer',
fn: function (){
var self=this;
return (($receiver = self['@tutorialPlayer']) == nil || $receiver == undefined) ? (function(){return self['@tutorialPlayer']=smalltalk.send((smalltalk.TutorialPlayer || TutorialPlayer), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_progress',
smalltalk.method({
selector: 'progress',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(self, "_tutorialPositionString", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_tutorialSizeString", [])]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_tutorialPositionString',
smalltalk.method({
selector: 'tutorialPositionString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_tutorialPosition", []), "_asString", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_tutorialSizeString',
smalltalk.method({
selector: 'tutorialSizeString',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_size", []), "_asString", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_widget_',
smalltalk.method({
selector: 'widget:',
fn: function (aWidget){
var self=this;
self['@widget']=aWidget;
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_showCurrentLesson',
smalltalk.method({
selector: 'showCurrentLesson',
fn: function (){
var self=this;
var lesson=nil;
lesson=smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_currentLesson", []);
smalltalk.send(self['@widget'], "_contents_", [smalltalk.send(lesson, "_contents", [])]);
smalltalk.send(self['@widget'], "_setTitle_", [smalltalk.send(smalltalk.send(smalltalk.send(lesson, "_title", []), "__comma", [" "]), "__comma", [smalltalk.send(self, "_progress", [])])]);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_first", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_next", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);

smalltalk.addMethod(
'_previous',
smalltalk.method({
selector: 'previous',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_tutorialPlayer", []), "_previous", []);
return smalltalk.send(self, "_showCurrentLesson", []);
return self;}
}),
smalltalk.ProfStef);


smalltalk.ProfStef.klass.iVarNames = ['instance'];
smalltalk.addMethod(
'_default',
smalltalk.method({
selector: 'default',
fn: function (){
var self=this;
return (($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return self['@instance']=smalltalk.send(self, "_new", []);})() : $receiver;
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
'_first',
smalltalk.method({
selector: 'first',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_first", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
'_previous',
smalltalk.method({
selector: 'previous',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_previous", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
'_next',
smalltalk.method({
selector: 'next',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_default", []), "_next", []);
return self;}
}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
'_go',
smalltalk.method({
selector: 'go',
fn: function (){
var self=this;
smalltalk.send(self, "_first", []);
return self;}
}),
smalltalk.ProfStef.klass);


smalltalk.addClass('SmalltalkSyntaxTutorial', smalltalk.AbstractTutorial, [], 'TrySmalltalk');
smalltalk.addMethod(
'_tableOfContents',
smalltalk.method({
selector: 'tableOfContents',
fn: function (){
var self=this;
return ["welcome", "doingVSPrinting", "printing", "basicTypesNumbers", "basicTypesString", "basicTypesArray", "basicTypesDynamicArray", "messageSyntaxUnary", "messageSyntaxBinary", "messageSyntaxKeyword", "messageSyntaxExecutionOrder", "messageSyntaxExecutionOrderParentheses", "mathematicalPrecedence", "messageSyntaxCascade", "messageSyntaxCascadeShouldNotBeHere", "blocks", "blocksAssignation", "conditionals", "loops", "iterators", "instanciation", "reflection", "reflectionContinued", "theEnd"];
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesArray',
smalltalk.method({
selector: 'basicTypesArray',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Array", unescape("%22Literal%20arrays%20are%20created%20at%20parse%20time%3A%22%0A%0A%23%281%202%203%29.%0A%0A%23%28%201%202%203%20%23%284%205%206%29%29%20size.%0A%0A%23%281%202%204%29%20isEmpty.%0A%0A%23%281%202%203%29%20first.%0A%0A%23%28%27hello%27%20%27Javascript%27%29%20at%3A%202%20put%3A%20%27Smalltalk%27%3B%20yourself.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesCharacters',
smalltalk.method({
selector: 'basicTypesCharacters',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Characters", unescape("%22A%20Character%20can%20be%20instantiated%20using%20%24%20operator%3A%22%0A%0A%24A.%0A%0A%24A%20class.%0A%0A%24B%20charCode.%0A%0ACharacter%20cr.%0A%0ACharacter%20space.%0A%0A%22You%20can%20print%20all%20256%20characters%20of%20the%20ASCII%20extended%20set%3A%22%0A%0ACharacter%20allByteCharacters.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesDynamicArray',
smalltalk.method({
selector: 'basicTypesDynamicArray',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Dynamic Array", unescape("%22Dynamic%20Arrays%20are%20created%20at%20execution%20time%3A%22%0A%0A%7B%20%282+3%29%20.%20%286*6%29%20%7D.%0A%0A%7B%20%282+3%29%20.%20%286*6%29%20.%20%27hello%27%2C%20%27%20Stef%27%7D%20size.%0A%0A%0A%7B%20ProfStef%20%7D%20first%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesNumbers',
smalltalk.method({
selector: 'basicTypesNumbers',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Numbers", unescape("%22You%20now%20know%20how%20to%20execute%20Smalltalk%20code.%20%0A%0ANow%20let%27s%20talk%20about%20basic%20objects.%0A%0A1%2C%202%2C%20100%2C%202/3%20...%20are%20Numbers%2C%20and%20respond%20to%20many%20messages%20evaluating%20mathematical%20expressions.%0AEvaluate%20these%20ones%3A%22%0A%0A2.%0A%0A%281/3%29.%0A%0A%281/3%29%20+%20%284/5%29.%0A%0A%2818/5%29%20rounded.%0A%0A1%20class.%0A%0A1%20negated.%0A%0A1%20negated%20negated.%0A%0A%281%20+%203%29%20odd.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesString',
smalltalk.method({
selector: 'basicTypesString',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Strings", unescape("%22A%20String%20is%20a%20collection%20of%20characters.%20Use%20single%20quotes%20to%20create%20a%20String%20object.%20Print%20these%20expressions%3A%22%0A%0A%27ProfStef%27.%0A%0A%27ProfStef%27%20size.%0A%0A%27abc%27%20asUppercase.%0A%0A%27Hello%20World%27%20reversed.%20%0A%0A%22You%20can%20access%20each%20character%20using%20at%3A%20message%22%0A%0A%27ProfStef%27%20at%3A%201.%0A%0A%22String%20concatenation%20uses%20the%20comma%20operator%3A%22%0A%0A%27ProfStef%27%2C%20%27%20is%20cool%27.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_basicTypesSymbol',
smalltalk.method({
selector: 'basicTypesSymbol',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Basic types: Symbols", unescape("%22A%20Symbol%20is%20a%20String%20which%20is%20guaranteed%20to%20be%20globally%20unique.%20%0A%0AThere%20is%20one%20and%20only%20one%20Symbol%20%23ProfStef.%20There%20may%20be%20several%20%27ProfStef%27%20String%20objects.%0A%0A%28Message%20%3D%3D%20returns%20true%20if%20the%20two%20objects%20are%20the%20SAME%29%22%0A%0A%27ProfStef%27%20asSymbol.%0A%0A%23ProfStef%20asString.%0A%0A%282%20asString%29%20%3D%3D%20%282%20asString%29.%0A%0A%282%20asString%29%20asSymbol%20%3D%3D%20%282%20asString%29%20asSymbol.%0A%0A%0A%28Smalltalk%20at%3A%20%23ProfStef%29%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_blocks',
smalltalk.method({
selector: 'blocks',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Blocks", unescape("%22Cascade%20is%20cool%20%21%20Let%27s%20talk%20about%20blocks.%0A%0ABlocks%20are%20anonymous%20methods%20that%20can%20be%20stored%20into%20variables%20and%20executed%20on%20demand.%0A%0ABlocks%20are%20delimited%20by%20square%20brackets%3A%20%5B%5D%22%0A%0A%5BTranscript%20open%5D.%0A%0A%22does%20not%20open%20a%20Transcript%20because%20the%20block%20is%20not%20executed.%0A%0AHere%20is%20a%20block%20that%20adds%202%20to%20its%20argument%20%28its%20argument%20is%20named%20x%29%3A%22%0A%0A%5B%3Ax%20%7C%20x+2%5D.%0A%0A%22We%20can%20execute%20a%20block%20by%20sending%20it%20value%20messages.%22%0A%0A%5B%3Ax%20%7C%20x+2%5D%20value%3A%205.%0A%0A%5BTranscript%20open%5D%20value.%0A%0A%5B%3Ax%20%7C%20x+2%5D%20value%3A%2010.%0A%0A%5B%3Ax%20%3Ay%7C%20x%20+%20y%5D%20value%3A3%20value%3A5.%0A%0A%5BProfStef%20next%5D%20value.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_blocksAssignation',
smalltalk.method({
selector: 'blocksAssignation',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Block assignation", unescape("%22Blocks%20can%20be%20assigned%20to%20a%20variable%20then%20executed%20later.%0A%0ANote%20that%20%7Cb%7C%20is%20the%20declaration%20of%20a%20variable%20named%20%27b%27%20and%20that%20%27%3A%3D%27%20assigns%20a%20value%20to%20a%20variable.%0A%0ASelect%20the%20three%20lines%20then%20Print%20It%3A%22%0A%0A%7Cb%7C%0Ab%20%3A%3D%20%5B%3Ax%20%7C%20x+2%5D.%0Ab%20value%3A%2012.%0A%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_conditionals',
smalltalk.method({
selector: 'conditionals',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Conditionals", unescape("%22Conditionals%20are%20just%20messages%20sent%20to%20Boolean%20objects%22%0A%0A1%20%3C%202%0A%20%20ifTrue%3A%20%5B100%5D%0A%20%20ifFalse%3A%20%5B42%5D.%0A%0A%22Here%20the%20message%20is%20ifTrue%3AifFalse%0A%0ATry%20this%3A%22%0A%0ATranscript%20open.%0A%0A3%20%3E%2010%20%0A%09ifTrue%3A%20%5BTranscript%20show%3A%20%27maybe%20there%27%27s%20a%20bug%20....%27%5D%0A%09ifFalse%3A%20%5BTranscript%20show%3A%20%27No%20%3A%203%20is%20less%20than%2010%27%5D.%0A%0A3%20%3D%203%20ifTrue%3A%20%5BProfStef%20next%5D.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_debugger',
smalltalk.method({
selector: 'debugger',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Debugger", unescape("%22The%20Debugger%20may%20be%20the%20most%20famous%20tool%20of%20Smalltalk%20environments.%20It%20will%20open%20as%20soon%20as%20an%20unmanaged%20Exception%20occurs.%20%0A%0AThe%20following%20code%20will%20open%20the%20debugger.%0A%0A***This%20should%20be%20rethought%20completely***%22%0A%0A%0A%20")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_doingVSPrinting',
smalltalk.method({
selector: 'doingVSPrinting',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Doing", unescape("%22Cool%20%21%20%28I%20like%20to%20say%20Cooool%20%3A%29%20%29.%20You%27ve%20just%20executed%20a%20Smalltalk%20expression.%20More%20precisely%2C%20you%20sent%20the%20message%20%27next%27%20to%0AProfStef%20class%20%28it%27s%20me%20%21%29.%0A%0ANote%20you%20can%20run%20this%20tutorial%20again%20by%20evaluating%3A%20%27ProfStef%20go%27.%20%0A%27ProfStef%20previous%27%20returns%20to%20the%20previous%20lesson.%0A%0AYou%20can%20also%20Do%20It%20using%20the%20keyboard%20shortcut%20%27CTRL%20d%27%0A%0ATry%20to%20evaluate%20this%20expression%3A%22%0A%0Awindow%20alert%3A%20%27hello%20world%21%27.%0A%0A%22Then%20go%20to%20the%20next%20lesson%3A%22%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_instanciation',
smalltalk.method({
selector: 'instanciation',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Instanciation", unescape("%22Objects%20are%20instances%20of%20their%20class.%20Usually%2C%20we%20send%20the%20message%20%23new%20to%20a%20class%20for%20creating%20an%20instance%20of%20this%20class.%0A%0AFor%20example%2C%20let%27s%20create%20an%20instance%20of%20the%20class%20Array%3A%22%0A%0AArray%20new%0A%09add%3A%20%27Some%20text%27%3B%0A%09add%3A%203.%3B%0A%09yourself.%0A%0A%22See%20the%20array%20we%27ve%20created%3F%20Actually%2C%20%23%28%27Some%20text%27%203%29%20is%20just%20a%20shorthand%20for%20instantiating%20arrays.%22%0A%0A%22If%20we%20use%20a%20variable%20to%20keep%20track%20of%20this%20object%2C%20we%27ll%20be%20able%20to%20do%20stuff%20with%20it.%22%0A%0A%22The%20following%20code%20must%20be%20ran%20all%20at%20one%2C%20as%20the%20%27anArray%27%20variable%20will%20cease%20to%20exist%20once%20the%20execution%20finishes%3A%22%0A%0A%7CanArray%7C%0A%0AanArray%20%3A%3D%20Array%20new%0A%09add%3A%20%27Some%20text%27%3B%0A%09add%3A%203%3B%0A%09yourself%3B%0A%0ATranscript%20show%3A%20anArray%3B%20cr.%0A%0AanArray%20remove%3A%203.%0A%0ATranscript%20show%3A%20anArray%3B%20cr.%0A%0AanArray%20add%3A%20%27Some%20more%20text%21%27.%0A%0ATranscript%20show%3A%20anArray%3B%20cr.%0A%09%0A%22I%27ll%20put%20myself%20in%20an%20instance%20of%20a%20class%20named%20Dictionary%20and%20go%20to%20the%20next%20lesson%3A%22%0A%0A%28%28Dictionary%20new%20add%3A%20%28%27move%20on%21%27%20-%3E%20ProfStef%29%29%20at%3A%20%27move%20on%21%27%29%20next")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_iterators',
smalltalk.method({
selector: 'iterators',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Iterators", unescape("%22The%20message%20do%3A%20is%20sent%20to%20a%20collection%20of%20objects%20%28Array%2C%20Dictionary%2C%20String%2C%20etc%29%2C%20evaluating%20the%20block%20for%20each%20element.%0A%0AHere%20we%20want%20to%20print%20all%20the%20numbers%20on%20the%20Transcript%20%28a%20console%29%22%0A%0A%23%2811%2038%203%20-2%2010%29%20do%3A%20%5B%3Aeach%20%7C%0A%20%20%20%20%20Transcript%20show%3A%20each%20printString%3B%20cr%5D.%0A%0A%22Some%20other%20really%20nice%20iterators%22%0A%0A%23%2811%2038%203%20-2%2010%29%20collect%3A%20%5B%3Aeach%20%7C%20each%20negated%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20collect%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20select%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20select%3A%20%5B%3Aeach%20%7C%20each%20%3E%2010%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20%3E%2010%5D.%0A%0A%23%2811%2038%203%20-2%2010%29%20%0A%20%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20Transcript%20show%3A%20each%20printString%5D%0A%20%20%20%20%20separatedBy%3A%20%5BTranscript%20show%3A%20%27.%27%5D.%0A%0A%0A%28Smalltalk%20current%20classes%20select%3A%20%5B%3AeachClass%20%7C%20eachClass%20name%20%3D%20%27ProfStef%27%5D%29%20do%3A%20%5B%3AeachProfstef%20%7C%20eachProfstef%20next%5D.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_loops',
smalltalk.method({
selector: 'loops',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Loops", unescape("%22Loops%20are%20high-level%20collection%20iterators%2C%20implemented%20as%20regular%20methods.%22%0A%0A%22Basic%20loops%3A%0A%20%20to%3Ado%3A%0A%20%20to%3Aby%3Ado%22%0A%0A1%20to%3A%20100%20do%3A%0A%20%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%20%5D.%0A%0A1%20to%3A%20100%20by%3A%203%20do%3A%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%5D.%0A%0A100%20to%3A%200%20by%3A%20-2%20do%3A%20%0A%20%20%20%20%5B%3Ai%20%7C%20Transcript%20show%3A%20i%20asString%3B%20cr%5D.%0A%0A1%20to%3A%201%20do%3A%20%5B%3Ai%20%7C%20ProfStef%20next%5D.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_mathematicalPrecedence',
smalltalk.method({
selector: 'mathematicalPrecedence',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Mathematical precedence", unescape("%22Traditional%20precedence%20rules%20from%20mathematics%20do%20not%20follow%20in%20Smalltalk.%22%0A%0A2%20*%2010%20+%202.%0A%0A%22Here%20the%20message%20*%20is%20sent%20to%202%2C%20which%20answers%2020%2C%20then%2020%20receive%20the%20message%20+%0A%0ARemember%20that%20all%20messages%20always%20follow%20a%20simple%20left-to-right%20precedence%20rule%2C%20*%20without%20exceptions%20*.%22%0A%0A2%20+%202%20*%2010.%0A%0A2%20+%20%282%20*%2010%29.%0A%0A8%20-%205%20/%202.%0A%0A%288%20-%205%29%20/%202.%0A%0A8%20-%20%285%20/%202%29.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxBinary',
smalltalk.method({
selector: 'messageSyntaxBinary',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Binary messages", unescape("%22Binary%20messages%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20+%20anotherObject%22%0A%0A3%20*%202.%0A%0ADate%20today%20year%20%3D%202011.%0A%0Afalse%20%7C%20false.%0A%0Atrue%20%26%20true.%0A%0Atrue%20%26%20false.%0A%0A10%20@%20100.%0A%0A10%20%3C%3D%2012.%0A%0A%27ab%27%2C%20%27cd%27.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxCascade',
smalltalk.method({
selector: 'messageSyntaxCascade',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Cascade", unescape("%22%3B%20is%20the%20cascade%20operator.%20It%27s%20useful%20to%20send%20message%20to%20the%20SAME%20receiver%0AOpen%20a%20Transcript%20%28console%29%3A%22%0A%0ATranscript%20open.%0A%0A%22Then%3A%22%0A%0ATranscript%20show%3A%20%27hello%27.%0ATranscript%20show%3A%20%27Smalltalk%27.%0ATranscript%20cr.%0A%0A%22is%20equivalent%20to%3A%22%0A%0ATranscript%20%0A%09%20%20%20show%3A%20%27hello%27%3B%0A%09%20%20%20show%3A%20%27Smalltalk%27%20%3B%0A%09%20%20%20cr.%0A%0A%22You%20can%20close%20the%20development%20tools%20by%20clicking%20on%20the%20red%20circle%20with%20a%20cross%20at%20the%20bottom%20left%20of%20the%20website.%0ATry%20to%20go%20to%20the%20next%20lesson%20with%20a%20cascade%20of%20two%20%27next%27%20messages%3A%22%0A%0AProfStef")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxCascadeShouldNotBeHere',
smalltalk.method({
selector: 'messageSyntaxCascadeShouldNotBeHere',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", [unescape("Lost%20%3F"), unescape("%22Hey%2C%20you%20should%20not%20be%20here%20%21%21%20%0A%0AGo%20back%20and%20use%20a%20cascade%20%21%22%0A%0AProfStef%20previous.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxExecutionOrder',
smalltalk.method({
selector: 'messageSyntaxExecutionOrder',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Execution order", unescape("%22Unary%20messages%20are%20executed%20first%2C%20then%20binary%20messages%20and%20finally%20keyword%20messages%3A%0A%20%20%20%20Unary%20%3E%20Binary%20%3E%20Keywords%22%0A%0A2.5%20+%203.8%20rounded.%0A%0A3%20max%3A%202%20+%202.%0A%20%20%0A%280@0%29%20class.%0A%0A0@0%20x%3A%20100.%0A%0A%280@0%20x%3A%20100%29%20class.%0A%0A%22Between%20messages%20of%20similar%20precedence%2C%20expressions%20are%20executed%20from%20left%20to%20right%22%0A%0A-12345%20negated%20asString%20reversed.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxExecutionOrderParentheses',
smalltalk.method({
selector: 'messageSyntaxExecutionOrderParentheses',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Parentheses", unescape("%22Use%20parentheses%20to%20change%20order%20of%20evaluation%22%0A%0A%282.5%20+%203.8%29%20rounded.%0A%0A%283%20max%3A%202%29%20+%202.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxKeyword',
smalltalk.method({
selector: 'messageSyntaxKeyword',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Keyword messages", unescape("%22Keyword%20Messages%20are%20messages%20with%20arguments.%20They%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20akey%3A%20anotherObject%20akey2%3A%20anotherObject2%22%0A%0A%27Web%20development%20is%20a%20good%20deal%20of%20pain%27%20copyFrom%3A%201%20to%3A%2030%0A%0A%22The%20message%20is%20copyFrom%3Ato%3A%20sent%20to%20the%20String%20%27Web%20development%20is%20a%20good%20deal%20of%20pain%27%22%0A%0A1%20max%3A%203.%0A%0AArray%20with%3A%20%27hello%27%20with%3A%202%20with%3A%20Smalltalk.%0A%0A%22The%20message%20is%20with%3Awith%3Awith%3A%20implemented%20on%20class%20Array.%20Note%20you%20can%20also%20write%22%0A%0AArray%0A%09with%3A%20%27Hi%20there%21%27%0A%09with%3A%202%0A%09with%3A%20Smalltalk.%0A%09%0AProfStef%20perform%3A%20%27next%27.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_messageSyntaxUnary',
smalltalk.method({
selector: 'messageSyntaxUnary',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Message syntax: Unary messages", unescape("%22Messages%20are%20sent%20to%20objects.%20There%20are%20three%20types%20of%20message%3A%20Unary%2C%20Binary%20and%20Keyword.%0A%0AUnary%20messages%20have%20the%20following%20form%3A%0A%20%20%20%20anObject%20aMessage%20%0A%0AYou%27ve%20already%20sent%20unary%20messages.%20For%20example%3A%22%0A%0A1%20class.%0A%0Afalse%20not.%0A%0ADate%20today.%0A%0ANumber%20pi.%0A%0A%22And%20of%20course%3A%20%22%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_pharoEnvironment',
smalltalk.method({
selector: 'pharoEnvironment',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Pharo environment", unescape("%22Every%20Smalltalk%20system%20is%20full%20of%20objects.%20There%20are%20windows%2C%20text%2C%20numbers%2C%20dates%2C%20colors%2C%20points%20and%20much%20more.%20You%20can%20interact%20with%20objects%20in%20a%20much%20more%20direct%20way%20than%20is%20possible%20with%20other%20programming%20languages.%0A%0AEvery%20object%20understands%20the%20message%20%27explore%27.%20As%20a%20result%2C%20you%20get%20an%20Explorer%20window%20that%20shows%20details%20about%20the%20object.%22%0A%0ADate%20today%20explore.%0A%0A%22This%20shows%20that%20the%20date%20object%20consists%20of%20a%20point%20in%20time%20%28start%29%20and%20a%20duration%20%28one%20day%20long%29.%22%0A%0AProfStef%20explore.%0A%0A%22You%20see%2C%20ProfStef%20class%20has%20a%20lot%20of%20objects.%20Let%27s%20take%20a%20look%20at%20my%20code%3A%22%0A%0AProfStef%20browse.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_printing',
smalltalk.method({
selector: 'printing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Doing VS Printing: Printing", unescape("%22Now%20you%27re%20a%20Do%20It%20master%20%21%20Let%27s%20talk%20about%20printing.%20It%27s%20a%20Do%20It%20which%20prints%20the%20result%20next%20to%20the%20expression%20you%27ve%20selected.%0AFor%20example%2C%20select%20the%20text%20below%2C%20and%20click%20on%20%27PrintIt%27%3A%22%0A%0A1%20+%202.%0A%0A%22As%20with%20%27DoIt%27%2C%20there%20is%20also%20a%20shortcut%20to%20execute%20this%20command.%0A%0ATry%20CTRL-p%20on%20the%20following%20expressions%3A%22%0A%0ADate%20today.%0A%0A%22The%20result%20is%20selected%2C%20so%20you%20can%20erase%20it%20using%20the%20backspace%20key.%20Try%20it%20%21%22%0A%0ADate%20today%20asDateString.%0A%0ADate%20today%20asTimeString.%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_reflection',
smalltalk.method({
selector: 'reflection',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection", unescape("%22You%20can%20inspect%20and%20change%20the%20system%20at%20runtime.%0A%0ATake%20a%20look%20at%20the%20source%20code%20of%20the%20method%20%23and%3A%20of%20the%20class%20Boolean%3A%22%0A%0A%28Boolean%20methodDictionary%20at%3A%20%27and%3A%27%29%20source.%0A%0A%22Or%20all%20the%20methods%20it%20sends%3A%22%0A%0A%28Boolean%20methodDictionary%20at%3A%20%27and%3A%27%29%20messageSends.%0A%0A%22Here%27s%20all%20the%20methods%20I%20implement%3A%22%0A%0AProfStef%20methodDictionary.%0A%0A%22Let%27s%20create%20a%20new%20method%20to%20go%20to%20the%20next%20lesson%3A%22%0A%0A%7CnewMethod%7C%0AnewMethod%20%3A%3D%20Compiler%20new%20load%3A%20%27goToNextLesson%20ProfStef%20next.%27%20forClass%3A%20ProfStef.%0AProfStef%20class%20addCompiledMethod%3A%20newMethod%0A%0A%22Wow%21%20I%20can%27t%20wait%20to%20use%20my%20new%20method%21%22%0A%0AProfStef%20goToNextLesson.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_reflectionContinued',
smalltalk.method({
selector: 'reflectionContinued',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Reflection continued", unescape("%22So%20cool%2C%20isn%27t%20it%20%3F%20%20Before%20going%20further%2C%20let%27s%20remove%20this%20method%3A%22%0A%0AProfStef%20class%20methodAt%3A%20%23goToNextLesson.%0A%0AProfStef%20class%20removeCompiledMethod%3A%20%28ProfStef%20class%20methodAt%3A%20%23goToNextLesson%29.%0A%0AProfStef%20class%20methodAt%3A%20%23goToNextLesson.%0A%0A%0A%22Then%20move%20forward%3A%22%0A%0AProfStef%20perform%3A%23next")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_theEnd',
smalltalk.method({
selector: 'theEnd',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", [unescape("Tutorial%20done%20%21"), unescape("%22This%20tutorial%20is%20done.%20Enjoy%20programming%20Smalltalk%20with%20JTalk.%20%0A%0AYou%20can%20run%20this%20tutorial%20again%20by%20evaluating%3A%20ProfStef%20go.%0A%0ASee%20you%20soon%20%21%22%0A")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
'_welcome',
smalltalk.method({
selector: 'welcome',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Lesson || Lesson), "_title_contents_", ["Welcome", unescape("%20%22Hello%21%20I%27m%20Professor%20Stef.%20%0A%0AYou%20must%20want%20me%20to%20help%20you%20learn%20Smalltalk.%0A%0ASo%20let%27s%20go%20to%20the%20first%20lesson.%20%20Select%20the%20text%20below%20and%20click%20on%20the%20%27DoIt%27%20button%22%0A%0AProfStef%20next.")]);
return self;}
}),
smalltalk.SmalltalkSyntaxTutorial);



