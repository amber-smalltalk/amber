smalltalk.addPackage('Documentation', {});
smalltalk.addClass('DocumentationBuilder', smalltalk.Object, ['chapters', 'announcer', 'widget'], 'Documentation');
smalltalk.addMethod(
'_chapters',
smalltalk.method({
selector: 'chapters',
fn: function (){
var self=this;
return (($receiver = self['@chapters']) == nil || $receiver == undefined) ? (function(){return (self['@chapters']=smalltalk.send(self, "_buildChapters", []));})() : $receiver;
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_announcer',
smalltalk.method({
selector: 'announcer',
fn: function (){
var self=this;
return (($receiver = self['@announcer']) == nil || $receiver == undefined) ? (function(){return (self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_widget',
smalltalk.method({
selector: 'widget',
fn: function (){
var self=this;
return (($receiver = self['@widget']) == nil || $receiver == undefined) ? (function(){return (self['@widget']=smalltalk.send((smalltalk.DocumentationWidget || DocumentationWidget), "_on_", [self]));})() : $receiver;
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_buildChapters',
smalltalk.method({
selector: 'buildChapters',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_values", []), "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_selector", [])]));})]), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", ["chapters"]);})]), "_collect_", [(function(each){return smalltalk.send(self, "_perform_", [smalltalk.send(each, "_selector", [])]);})]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_buildOn_',
smalltalk.method({
selector: 'buildOn:',
fn: function (aCanvas){
var self=this;
smalltalk.send(aCanvas, "_with_", [smalltalk.send(self, "_widget", [])]);
(function($rec){smalltalk.send($rec, "_checkHashChange", []);return smalltalk.send($rec, "_checkHash", []);})(self);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_buildOnJQuery_',
smalltalk.method({
selector: 'buildOnJQuery:',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_buildOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery])]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_build',
smalltalk.method({
selector: 'build',
fn: function (){
var self=this;
smalltalk.send(self, "_buildOnJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch1introduction',
smalltalk.method({
selector: 'ch1introduction',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", ["Introduction"]);return smalltalk.send($rec, "_contents_", [unescape("%0A%0A%23%23Amber%20Smalltalk%20in%20a%20nutshell%0A%0AAmber%20is%20an%20implementation%20of%20the%20Smalltalk-80%20language.%20It%20is%20designed%20to%20make%20client-side%20web%20development%20**faster%2C%20easier%20and%20more%20fun**%20as%20it%20allows%20developers%20to%20write%20HTML5%20applications%20in%20a%20live%20Smalltalk%20environment%21%0A%0AAmber%20is%20written%20in%20itself%2C%20including%20the%20IDE%20and%20the%20compiler%20and%20it%20runs%20**directly%20inside%20your%20browser**.%20The%20IDE%20is%20fairly%20complete%20with%20a%20class%20browser%2C%20workspace%2C%20transcript%2C%20unit%20test%20runner%2C%20object%20inspectors%2C%20cross%20reference%20tools%20and%20even%20a%20debugger.%0A%0ANoteworthy%20features%3A%0A%0A-%20Amber%20is%20semantically%20and%20syntactically%20very%20close%20to%20%5BPharo%20Smalltalk%5D%28http%3A//www.pharo-project.org%29.%20Pharo%20is%20considered%20the%20reference%20implementation.%0A-%20Amber%20**seamlessly%20interacts%20with%20JavaScript**%20and%20can%20use%20its%20full%20eco%20system%20of%20libraries%20without%20any%20glue%20code%20needed.%0A-%20Amber%20**has%20no%20dependencies**%20and%20can%20be%20used%20in%20any%20JavaScript%20runtime%2C%20not%20only%20inside%20browsers.%20An%20important%20example%20is%20%5BNode.js%5D%28http%3A//nodejs.org%29.%0A-%20Amber%20is%20a%20live%20Smalltalk%20that%20**compiles%20incrementally%20into%20efficient%20JavaScript**%20often%20mapping%20one-to-one%20with%20JavaScript%20equivalents.%0A-%20Amber%20has%20a%20**Seaside%20influenced%20canvas%20library**%20to%20dynamically%20generate%20HTML.%0A%0A%23%23%20Arguments%20for%20using%20Amber%0AIn%20our%20humble%20opinion%20the%20main%20arguments%20for%20using%20Amber%20are%3A%0A%0A-%20JavaScript%20is%20quite%20a%20broken%20language%20with%20lots%20of%20traps%20and%20odd%20quirks.%20It%20is%20the%20assembler%20of%20the%20Internet%20which%20is%20cool%2C%20but%20we%20don%27t%20want%20to%20write%20in%20it.%0A-%20Smalltalk%20as%20a%20language%20is%20immensely%20cleaner%20and%20more%20mature%2C%20both%20syntactically%20and%20semantically.%0A-%20Smalltalk%20has%20a%20simple%20class%20model%20with%20a%20lightweight%20syntax%20for%20closures%2C%20it%20is%20in%20many%20ways%20a%20perfect%20match%20for%20the%20Good%20Parts%20of%20JavaScript.%0A-%20Having%20a%20true%20live%20interactive%20incremental%20development%20environment%20where%20you%20can%20build%20your%20application%20directly%20in%20the%20browser%20is%20unbeatable.%0A%0A%23%23%20Disclaimer%0A%0AThis%20documentation%20doesn%27t%20aim%20to%20teach%20Smalltalk.%20%0AKnowledge%20of%20Smalltalk%20is%20needed%20to%20understand%20the%20topics%20covered%20in%20this%20documentation.%20%0AIf%20you%20want%20to%20learn%20the%20Smalltalk%20language%2C%20you%20can%20read%20the%20excellent%20%5BPharo%20By%20Example%5D%28http%3A//www.pharobyexample.org%29%20book.%0A")]);})(smalltalk.send((smalltalk.DocChapter || DocChapter), "_new", []));
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch2differencesWithOtherSmalltalks',
smalltalk.method({
selector: 'ch2differencesWithOtherSmalltalks',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", ["Differences with other Smalltalks"]);return smalltalk.send($rec, "_contents_", [unescape("%0AAmber%20has%20some%20differences%20with%20other%20Smalltalk%20implementations.%20This%20makes%20porting%20code%20a%20non-trivial%20thing%2C%20but%20still%20quite%20manageable.%0ABecause%20it%20maps%20Smalltalk%20constructs%20one-to-one%20with%20the%20JavaScript%20equivalent%2C%20including%20Smalltalk%20classes%20to%20JavaScript%20constructors%2C%20the%20core%20class%20library%20is%20simplified%20compared%20to%20Pharo%20Smalltalk.%0AAnd%20since%20we%20want%20Amber%20to%20be%20useful%20in%20building%20lean%20browser%20apps%20we%20can%27t%20let%20it%20bloat%20too%20much.%0A%0ABut%20apart%20from%20missing%20things%20other%20Smalltalks%20may%20have%2C%20there%20are%20also%20things%20that%20are%20plain%20different%3A%0A%0A-%20The%20collection%20class%20hierarchy%20is%20much%20simpler%20compared%20to%20most%20Smalltalk%20implementations.%0A-%20As%20of%20today%2C%20there%20is%20no%20SortedCollection.%20The%20size%20of%20arrays%20is%20dynamic%2C%20and%20they%20behave%20like%20an%20ordered%20collection.%20They%20can%20also%20be%20sorted%20with%20the%20%60%23sort*%60%20methods.%0A-%20The%20%60Date%60%20class%20behaves%20like%20the%20%60Date%60%20and%20%60TimeStamp%60%20classes%20in%20Pharo%20Smalltalk.%20Therefore%20both%20%60Date%20today%60%20and%20%60Date%20now%60%20are%20valid%20in%20Amber.%0A-%20Amber%20does%20not%20have%20class%20Character%2C%20but%20%60String%60%20does%20implement%20some%20of%20Character%20behavior.%0A-%20Amber%20does%20support%20class%20instance%20variables%2C%20but%20not%20class%20variables.%0A-%20Amber%20only%20has%20global%20classes%20and%20packages%2C%20but%20not%20arbitrary%20objects.%20Use%20classes%20instead%20like%20%60Smalltalk%20current%60%20instead%20of%20%60Smalltalk%60%20etc.%0A-%20Amber%20does%20not%20support%20pool%20dictionaries.%0A-%20Amber%20uses%20**%3C%20...javascript%20code...%20%3E**%20to%20inline%20JavaScript%20code%20and%20does%20not%20have%20pragmas.%0A-%20Amber%20does%20not%20have%20class%20categories.%20The%20left%20side%20in%20the%20browser%20lists%20real%20Packages%2C%20but%20they%20feel%20much%20the%20same.%0A")]);})(smalltalk.send((smalltalk.DocChapter || DocChapter), "_new", []));
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch3GettingStarted',
smalltalk.method({
selector: 'ch3GettingStarted',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", ["Getting started"]);return smalltalk.send($rec, "_contents_", [unescape("%0ATo%20get%20started%20hacking%20in%20Amber%20you%20can%20basically%20take%20three%20routes%2C%20independent%20of%20your%20platform%3A%0A%0A1.%20Just%20try%20it%20out%20at%20http%3A//www.amber-lang.net%20%28click%20the%20%22Class%20browser%22%20button%29%20-%20but%20you%20will%20**not%20be%20able%20to%20save%20any%20code%20you%20write**%21%20%0A%20%20%20%20Still%2C%20it%20works%20fine%20for%20looking%20at%20the%20IDE%20and%20playing%20around.%20Just%20don%27t%20press%20F5/reload%20-%20it%20will%20bring%20you%20back%20to%20zero.%20%0A%20%20%20%20%28Well%2C%20if%20you%20still%20want%20to%20develop%20and%20save%20code%20online%20someone%20has%20set%20up%20this%20site%20seems%20for%20free%20use%3A%20https%3A//www.screwtopdb.com/amberstore/topics%3Fname%3Damberstore/amber.html%20%29%0A2.%20Download%20an%20Amber%20zip-ball%2C%20install%20Nodejs%2C%20fire%20up%20the%20Amber%20server%20and%20then%20open%20Amber%20from%20localhost%20-%20then%20you%20**can%20save%20code**.%20Detailed%20instructions%20are%20below%21%0A3.%20Same%20as%20above%20but%20install%20git%20first%20and%20get%20a%20proper%20clone%20from%20http%3A//github.com/NicolasPetton/amber%20instead%20of%20a%20zip/tar-ball.%20%0A%20%20%20%20If%20you%20want%20to%20**contribute%20to%20Amber%20itself**%20this%20is%20really%20what%20you%20want%20to%20do.%20It%20requires%20installing%20git%20first%2C%20but%20it%20is%20quite%20simple%20-%20although%20we%20leave%20this%20bit%20as%20an%20%22exercise%20to%20the%20reader%22%20%3A%29%0A%0A**PLEASE%20NOTE%3A**%20Amber%20core%20developers%20use%20Linux.%20%0AWe%20do%20not%20want%20to%20introduce%20dependencies%20that%20aren%27t%20cross%20platform%20-%20but%20currently%20amberc%20%28the%20command%20line%20compiler%29%20is%20a%20bash%20script%20and%20we%20also%20use%20Makefiles%20%0A%28for%20building%20Amber%20itself%20and%20server%20side%20examples%29%20written%20on%20Linux/Unix.%20So%20using%20Windows%20is%20currently%20a%20bit%20limited%20-%20you%20can%27t%20run%20%22make%22%20in%20the%20.st%20directory%20to%20rebuild%20whole%20of%20Amber%20for%20example.%0A%20BUT...%20if%20you%20only%20want%20to%20use%20Amber%20to%20build%20web%20client%20apps%20and%20not%20really%20get%20involved%20in%20hacking%20Amber%20itself%20-%20then%20you%20should%20be%20fine%21%0A%0A%23%23%20Downloading%20Amber%0ACurrently%20you%20can%20download%20in%20zip%20or%20tar-ball%20format%2C%20either%20cutting%20edge%20or%20a%20release.%20%5BDownloads%20are%20available%20here%5D%28https%3A//github.com/NicolasPetton/amber/archives/amber%29.%20%0AAt%20the%20moment%20of%20writing%20you%20have%20release%20%5B0.9%20as%20zip%5D%28https%3A//github.com/NicolasPetton/amber/zipball/0.9%29%20or%20%5Btar%5D%28https%3A//github.com/NicolasPetton/amber/tarball/0.9%29%2C%20%0Aor%20%5Bcutting%20edge%20as%20zip%5D%28https%3A//github.com/NicolasPetton/amber/zipball/amber%29%20or%20%5Btar%5D%28https%3A//github.com/NicolasPetton/amber/tarball/amber%29.%0A%0AAt%20the%20moment%20this%20is%20just%20a%20**1.5Mb%20download**%2C%20so%20its%20very%20small.%20Unpack%20wherever%20you%20like%2C%20but%20I%20would%20rename%20the%20directory%20that%20is%20unpacked%20to%20something%20slightly%20shorter%20-%20like%20say%20%22amber-0.9%22%20or%20just%20%22amber%22.%20%0AAnd%20yes%2C%20at%20this%20point%20you%20can%20double%20click%20the%20index.html%20file%20in%20the%20amber%20directory%20to%20get%20the%20IDE%20up%2C%20but%20again%2C%20**you%20will%20not%20be%20able%20to%20save%20code**.%20So%20please%20continue%20below%20%3A%29%0A%0A%23%23%20Installing%20Node.js%0A%5BNode%5D%28http%3A//www.nodejs.org%29%20%28for%20short%29%20is%20simply%20the%20V8%20Javascript%20VM%20from%20Google%20%28used%20in%20Chrome%29%20hooked%20together%20with%20some%20hard%20core%20C-libraries%20for%20doing%20%22evented%20I/O%22.%0A%20Basically%20it%27s%20Javascript%20for%20the%20server%20-%20on%20asynch%20steroids.%20Amber%20runs%20fine%20in%20Node%20and%20we%20use%20it%20for%20several%20Amber%20tools%2C%20like%20amberc%20%28the%20command%20line%20Amber%20compiler%29%20or%20the%20Amber%20server%20%28see%20below%29.%20%0AThere%20are%20also%20several%20Amber-Node%20example%20to%20look%20at%20if%20you%20want%20to%20play%20with%20running%20Amber%20programs%20server%20side.%20**In%20short%20-%20you%20really%20want%20to%20install%20Nodejs.%20%3A%29**%0A%0A-%20Installing%20Node%20on%20Linux%20can%20be%20done%20using%20your%20package%20tool%20of%20choice%20%28%22apt-get%20install%20nodejs%22%20for%20example%29%20or%20any%20other%20way%20described%20at%20%5Bthe%20download%20page%5D%28http%3A//nodejs.org/%23download%29.%0A-%20Installing%20Node%20on%20MacOS%20seems%20to%20be%20easiest%20by%20getting%20it%20from%20%5Bhere%5D%28https%3A//sites.google.com/site/nodejsmacosx/%29.%0A-%20Installing%20Node%20on%20Windows%20is%20probably%20done%20best%20by%20using%20the%20%5Bdownload%20from%20Nodejs.org%5D%28http%3A//nodejs.org/%23download%29.%20This%20is%20not%20an%20installer%2C%20it%20is%20instead%20simply%20the%20node%20executable%20-%20**node.exe**.%0A%20%20%20%20-%20Put%20node.exe%20somewhere%20in%20your%20path.%20In%20Windows7%20I%20can%20run%20a%20command%20prompt%20%22As%20administrator%22%20%28right%20click%20the%20command%20prompt%20in%20Start%20menu%29%20and%20then%20just%20%22copy%20node.exe%20c%3A%5Cwindows%5C%22%20or%20such.%0A%0A%23%23%20Starting%20Amber%20server%0ANicolas%20has%20written%20a%20minimal%20webDAV%20server%20that%20is%20the%20easiest%20way%20to%20get%20up%20and%20running%20Amber%20with%20the%20ability%20to%20save%20code.%20This%20little%20server%20is%20written%20in...%20Amber%21%20%0AAnd%20it%20runs%20on%20top%20of%20Node.%20So%20to%20start%20it%20up%20serving%20your%20brand%20new%20directory%20tree%20of%20sweet%20Amber%20you%20do%3A%0A%0A%20%20%20%20cd%20amber%20%20%20%20%20%20%28or%20whatever%20you%20called%20the%20directory%20you%20unpackaged%29%0A%20%20%20%20./bin/server%20%20%28in%20windows%20you%20type%20%22node%20server%5Cserver.js%22%20instead%29%0A%0AIt%20should%20say%20it%20is%20listening%20on%20port%204000.%20If%20it%20does%2C%20hooray%21%20That%20means%20both%20Node%20and%20Amber%20are%20good.%20In%20Windows%20you%20might%20get%20a%20question%20about%20opening%20that%20port%20in%20the%20local%20firewall%20-%20yep%2C%20do%20it%21%0A%0A%23%23%20Firing%20up%20Amber%0AThe%20Amber%20IDE%20is%20written%20in...%20Amber.%20It%20uses%20JQuery%20and%20runs%20right%20in%20your%20browser%20as%20a%20...%20well%2C%20a%20web%20page.%20%0AWe%20could%20open%20it%20up%20just%20using%20a%20file%20url%20-%20but%20the%20reason%20we%20performed%20the%20previous%20steps%20is%20so%20that%20we%20can%20load%20the%20IDE%20web%20page%20from%20a%20server%20that%20can%20handle%20PUTs%20%28webDAV%29%20of%20source%20code.%20%0AAccording%20to%20web%20security%20Amber%20can%20only%20do%20PUT%20back%20to%20the%20same%20server%20it%20was%20loaded%20from.%20Thus%20we%20instead%20want%20to%20open%20it%20through%20our%20little%20server%20now%20listening%20on%20port%204000%3A%0A%0A%20%20%20%20http%3A//localhost%3A4000/index.html%0A%0AClicking%20the%20above%20link%20should%20get%20your%20Amber%20running.%0A%0ATo%20verify%20that%20you%20can%20indeed%20commit%20-%20just%20select%20a%20Package%20in%20the%20browser%2C%20like%20say%20%22Examples%22%20and%20press%20%22Commit%20package%22%20button.%20**If%20all%20goes%20well%20nothing%20happens%20%3A%29**.%20%0ASo%20in%20order%20to%20really%20know%20if%20it%20worked%20we%20can%20check%20the%20modified%20date%20on%20the%20files%20**amber/st/Examples.st**%2C%20**amber/js/Examples.js**%20and%20**amber/js/Examples.deploy.js**%20-%20they%20should%20be%20brand%20new.%0A%0ANOTE%3A%20We%20can%20use%20any%20webDAV%20server%20and%20Apache2%20has%20been%20used%20earlier%20and%20works%20fine.%20But%20the%20Amber%20server%20is%20smaller%20and%20simpler%20to%20start.%0A%0A")]);})(smalltalk.send((smalltalk.DocChapter || DocChapter), "_new", []));
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch5Index',
smalltalk.method({
selector: 'ch5Index',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.ClassesIndexChapter || ClassesIndexChapter), "_new", []);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch6KernelObjects',
smalltalk.method({
selector: 'ch6KernelObjects',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PackageDocChapter || PackageDocChapter), "_on_", [smalltalk.send((smalltalk.Package || Package), "_named_", [unescape("Kernel-Objects")])]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch7KernelClasses',
smalltalk.method({
selector: 'ch7KernelClasses',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.PackageDocChapter || PackageDocChapter), "_on_", [smalltalk.send((smalltalk.Package || Package), "_named_", [unescape("Kernel-Classes")])]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_ch4Tutorials',
smalltalk.method({
selector: 'ch4Tutorials',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.TutorialsChapter || TutorialsChapter), "_new", []);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_checkHashChange',
smalltalk.method({
selector: 'checkHashChange',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof window == 'undefined' ? nil : window)]), "_bind_do_", ["hashchange", (function(){return smalltalk.send(self, "_checkHash", []);})]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_checkHash',
smalltalk.method({
selector: 'checkHash',
fn: function (){
var self=this;
var hash=nil;
var presentation=nil;
(hash=smalltalk.send(smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash", []), "_replace_with_", [unescape("%5E%23"), ""]));
smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [(function($rec){smalltalk.send($rec, "_id_", [hash]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ChapterSelectionAnnouncement || ChapterSelectionAnnouncement), "_new", []))]);
return self;}
}),
smalltalk.DocumentationBuilder);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
(self['@chapters']=nil);
(self['@announcer']=nil);
(self['@widget']=nil);
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [".documentation"]), "_remove", []);
smalltalk.send(self, "_build", []);
return self;}
}),
smalltalk.DocumentationBuilder);


smalltalk.DocumentationBuilder.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_current',
smalltalk.method({
selector: 'current',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", []));})() : $receiver;
return self;}
}),
smalltalk.DocumentationBuilder.klass);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_current", []), "_build", []);
return self;}
}),
smalltalk.DocumentationBuilder.klass);


smalltalk.addClass('DocChapter', smalltalk.Widget, ['title', 'contents', 'parent'], 'Documentation');
smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return (($receiver = self['@title']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_title_',
smalltalk.method({
selector: 'title:',
fn: function (aString){
var self=this;
(self['@title']=aString);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return (($receiver = self['@contents']) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver;
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
fn: function (aString){
var self=this;
(self['@contents']=aString);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_htmlContents',
smalltalk.method({
selector: 'htmlContents',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Showdown || Showdown), "_at_", [smalltalk.symbolFor("converter")]), "_new", []), "_makeHtml_", [smalltalk.send(self, "_contents", [])]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_chapters',
smalltalk.method({
selector: 'chapters',
fn: function (){
var self=this;
return [];
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function (){
var self=this;
return "doc_chapter";
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_level',
smalltalk.method({
selector: 'level',
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_parent", [])) == nil || $receiver == undefined) ? (function(){return (1);})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_parent", []), "_level", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));})();
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_level_',
smalltalk.method({
selector: 'level:',
fn: function (anInteger){
var self=this;
(level=anInteger);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_parent',
smalltalk.method({
selector: 'parent',
fn: function (){
var self=this;
return self['@parent'];
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_parent_',
smalltalk.method({
selector: 'parent:',
fn: function (aChapter){
var self=this;
(self['@parent']=aChapter);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_title", []), "_replace_with_", [" ", unescape("-")]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_announcer',
smalltalk.method({
selector: 'announcer',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.DocumentationBuilder || DocumentationBuilder), "_current", []), "_announcer", []);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_selectClass_',
smalltalk.method({
selector: 'selectClass:',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.DocumentationBuilder || DocumentationBuilder), "_current", []), "_announcer", []), "_announce_", [smalltalk.send((smalltalk.ClassSelectionAnnouncement || ClassSelectionAnnouncement), "_on_", [aClass])]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_selectChapter_',
smalltalk.method({
selector: 'selectChapter:',
fn: function (aChapter){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", [smalltalk.send(aChapter, "_id", [])]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_displayChapter_',
smalltalk.method({
selector: 'displayChapter:',
fn: function (aChapter){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.DocumentationBuilder || DocumentationBuilder), "_current", []), "_widget", []), "_displayChapter_", [aChapter]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_subscribe", []);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(self, "_cssClass", [])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderDocOn_", [html]);return smalltalk.send(self, "_renderLinksOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_renderDocOn_',
smalltalk.method({
selector: 'renderDocOn:',
fn: function (html){
var self=this;
var div=nil;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(self, "_title", [])]);
smalltalk.send(self, "_renderNavigationOn_", [html]);
(div=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["contents"]));
smalltalk.send(smalltalk.send(div, "_asJQuery", []), "_html_", [smalltalk.send(self, "_htmlContents", [])]);
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_renderNavigationOn_',
smalltalk.method({
selector: 'renderNavigationOn:',
fn: function (html){
var self=this;
(($receiver = smalltalk.send(self, "_parent", [])) != nil && $receiver != undefined) ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["navigation"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%u2190%20back%20to%20"), "__comma", [smalltalk.send(smalltalk.send(self, "_parent", []), "_title", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectChapter_", [smalltalk.send(self, "_parent", [])]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));})() : nil;
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_renderLinksOn_',
smalltalk.method({
selector: 'renderLinksOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["links"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_chapters", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_title", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectChapter_", [each]);})]);})(smalltalk.send(html, "_a", []));})]);})]);})]);})(smalltalk.send(html, "_ul", []));
return self;}
}),
smalltalk.DocChapter);

smalltalk.addMethod(
'_subscribe',
smalltalk.method({
selector: 'subscribe',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [(smalltalk.ChapterSelectionAnnouncement || ChapterSelectionAnnouncement), (function(ann){return ((($receiver = smalltalk.send(smalltalk.send(ann, "_id", []), "__eq", [smalltalk.send(self, "_id", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_displayChapter_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_displayChapter_", [self]);})]));})]);
return self;}
}),
smalltalk.DocChapter);



smalltalk.addClass('PackageDocChapter', smalltalk.DocChapter, ['package', 'chapters'], 'Documentation');
smalltalk.addMethod(
'_package',
smalltalk.method({
selector: 'package',
fn: function (){
var self=this;
return self['@package'];
return self;}
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return smalltalk.send("Package ", "__comma", [smalltalk.send(smalltalk.send(self, "_package", []), "_name", [])]);
return self;}
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
'_chapters',
smalltalk.method({
selector: 'chapters',
fn: function (){
var self=this;
return self['@chapters'];
return self;}
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send("Classes in package ", "__comma", [smalltalk.send(smalltalk.send(self, "_package", []), "_name", [])]), "__comma", [":"]);
return self;}
}),
smalltalk.PackageDocChapter);

smalltalk.addMethod(
'_initializeWithPackage_',
smalltalk.method({
selector: 'initializeWithPackage:',
fn: function (aPackage){
var self=this;
(self['@package']=aPackage);
(self['@chapters']=smalltalk.send(smalltalk.send(smalltalk.send(aPackage, "_classes", []), "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]), "_collect_", [(function(each){return (function($rec){smalltalk.send($rec, "_parent_", [self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassDocChapter || ClassDocChapter), "_on_", [each]));})]));
return self;}
}),
smalltalk.PackageDocChapter);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aPackage){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeWithPackage_", [aPackage]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.PackageDocChapter.klass);


smalltalk.addClass('ClassDocChapter', smalltalk.DocChapter, ['theClass'], 'Documentation');
smalltalk.addMethod(
'_theClass',
smalltalk.method({
selector: 'theClass',
fn: function (){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", []), "__comma", [" is not documented yet."]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", []), "__comma", [" is not documented yet."]);}), (function(){return smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []);})]));
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function (){
var self=this;
return smalltalk.send("doc_class ", "__comma", [smalltalk.send(self, "_cssClass", [], smalltalk.DocChapter)]);
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", []);
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_initializeWithClass_',
smalltalk.method({
selector: 'initializeWithClass:',
fn: function (aClass){
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_renderLinksOn_',
smalltalk.method({
selector: 'renderLinksOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["links"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", ["Browse this class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_theClass", [])]);})]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_ul", []));
return self;}
}),
smalltalk.ClassDocChapter);

smalltalk.addMethod(
'_subscribe',
smalltalk.method({
selector: 'subscribe',
fn: function (){
var self=this;
smalltalk.send(self, "_subscribe", [], smalltalk.DocChapter);
smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [(smalltalk.ClassSelectionAnnouncement || ClassSelectionAnnouncement), (function(ann){return ((($receiver = smalltalk.send(smalltalk.send(ann, "_theClass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_selectChapter_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_selectChapter_", [self]);})]));})]);
return self;}
}),
smalltalk.ClassDocChapter);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aClass){
var self=this;
return (function($rec){smalltalk.send($rec, "_initializeWithClass_", [aClass]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.ClassDocChapter.klass);


smalltalk.addClass('DocumentationWidget', smalltalk.Widget, ['builder', 'selectedChapter', 'chapterDiv'], 'Documentation');
smalltalk.addMethod(
'_builder',
smalltalk.method({
selector: 'builder',
fn: function (){
var self=this;
return self['@builder'];
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_builder_',
smalltalk.method({
selector: 'builder:',
fn: function (aDocumentationBuilder){
var self=this;
(self['@builder']=aDocumentationBuilder);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_chapters',
smalltalk.method({
selector: 'chapters',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_builder", []), "_chapters", []);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_selectedChapter',
smalltalk.method({
selector: 'selectedChapter',
fn: function (){
var self=this;
return (($receiver = self['@selectedChapter']) == nil || $receiver == undefined) ? (function(){return (self['@selectedChapter']=smalltalk.send(smalltalk.send(self, "_chapters", []), "_first", []));})() : $receiver;
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_selectedChapter_',
smalltalk.method({
selector: 'selectedChapter:',
fn: function (aChapter){
var self=this;
return (self['@selectedChapter']=aChapter);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_displayChapter_',
smalltalk.method({
selector: 'displayChapter:',
fn: function (aChapter){
var self=this;
smalltalk.send(self, "_selectedChapter_", [aChapter]);
smalltalk.send(self, "_updateChapterDiv", []);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_selectChapter_',
smalltalk.method({
selector: 'selectChapter:',
fn: function (aChapter){
var self=this;
smalltalk.send(smalltalk.send((typeof document == 'undefined' ? nil : document), "_location", []), "_hash_", [smalltalk.send(aChapter, "_id", [])]);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["documentation"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderMenuOn_", [html]);(self['@chapterDiv']=smalltalk.send(html, "_div", []));return smalltalk.send(self, "_updateChapterDiv", []);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_renderMenuOn_',
smalltalk.method({
selector: 'renderMenuOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["menu"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_chapters", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return smalltalk.send(self, "_renderChapterMenu_on_", [each, html]);})]);})]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_renderChapterMenu_on_',
smalltalk.method({
selector: 'renderChapterMenu:on:',
fn: function (aChapter, html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(aChapter, "_title", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectChapter_", [aChapter]);})]);})(smalltalk.send(html, "_a", []));
smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(aChapter, "_chapters", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return smalltalk.send(self, "_renderChapterMenu_on_", [each, html]);})]);})]);})]);
return self;}
}),
smalltalk.DocumentationWidget);

smalltalk.addMethod(
'_updateChapterDiv',
smalltalk.method({
selector: 'updateChapterDiv',
fn: function (){
var self=this;
smalltalk.send(self['@chapterDiv'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self, "_selectedChapter", [])]);})]);
return self;}
}),
smalltalk.DocumentationWidget);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aBuilder){
var self=this;
return (function($rec){smalltalk.send($rec, "_builder_", [aBuilder]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.DocumentationWidget.klass);


smalltalk.addClass('ClassesIndexChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function (){
var self=this;
return smalltalk.send("index_doc ", "__comma", [smalltalk.send(self, "_cssClass", [], smalltalk.DocChapter)]);
return self;}
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Smalltalk classes by index";
return self;}
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
'_alphabet',
smalltalk.method({
selector: 'alphabet',
fn: function (){
var self=this;
return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return self;}
}),
smalltalk.ClassesIndexChapter);

smalltalk.addMethod(
'_renderDocOn_',
smalltalk.method({
selector: 'renderDocOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(self, "_title", [])]);
smalltalk.send(smalltalk.send(self, "_alphabet", []), "_do_", [(function(letter){var classes=nil;
(classes=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_name", []), "_first", []), "__eq", [letter]);})]));smalltalk.send(classes, "_ifNotEmpty_", [(function(){return smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [letter]);})]);return smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(classes, "_sorted_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectClass_", [each]);})]);})(smalltalk.send(html, "_a", []));})]);})]);})]);})]);
return self;}
}),
smalltalk.ClassesIndexChapter);



smalltalk.addClass('ClassSelectionAnnouncement', smalltalk.Object, ['theClass'], 'Documentation');
smalltalk.addMethod(
'_theClass',
smalltalk.method({
selector: 'theClass',
fn: function (){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassSelectionAnnouncement);

smalltalk.addMethod(
'_theClass_',
smalltalk.method({
selector: 'theClass:',
fn: function (aClass){
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.ClassSelectionAnnouncement);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aClass){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassSelectionAnnouncement.klass);


smalltalk.addClass('ChapterSelectionAnnouncement', smalltalk.Object, ['id'], 'Documentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return self['@id'];
return self;}
}),
smalltalk.ChapterSelectionAnnouncement);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
fn: function (aString){
var self=this;
(self['@id']=aString);
return self;}
}),
smalltalk.ChapterSelectionAnnouncement);



smalltalk.addClass('TutorialsChapter', smalltalk.DocChapter, [], 'Documentation');
smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Tutorials";
return self;}
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
'_contents',
smalltalk.method({
selector: 'contents',
fn: function (){
var self=this;
return unescape("Here%27s%20a%20serie%20of%20tutorials.%20If%20you%20are%20new%20to%20Smalltalk%2C%20you%20can%20also%20learn%20Amber%20online%20with%20%5BProfStef%5D%28http%3A//www.amber-lang.net/learn.html%29");
return self;}
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
'_chapters',
smalltalk.method({
selector: 'chapters',
fn: function (){
var self=this;
return [smalltalk.send(self, "_firstAppChapter", []),smalltalk.send(self, "_counterChapter", [])];
return self;}
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
'_firstAppChapter',
smalltalk.method({
selector: 'firstAppChapter',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", ["A first application"]);return smalltalk.send($rec, "_contents_", [unescape("%0A%0ALet%27s%20make%20Hello%20World%20in%20Amber.%0A%0AFirst%2C%20you%20need%20a%20place%20for%20your%20new%20project.%20I%20made%20a%20new%20directory%20under%20amber%3A%0A%0A%20%20%20%20amber/projects/hello%0A%0AThis%20will%20store%20your%20project%20files.%20To%20get%20started%2C%20add%20a%20new%20index.html%20file%20to%20this%20folder%2C%20as%20well%20as%20empty%20js%20and%20st%20folders.%0A%0AYour%20index.html%20can%20be%20really%20basic.%20The%20most%20important%20thing%20it%20does%20is%20include%20amber.js%20and%20run%20loadAmber.%20Here%20is%20a%20basic%20index.html%20you%20can%20use%3A%0A%0A%0A%20%20%20%20%3C%21DOCTYPE%20html%3E%0A%20%20%20%20%3Chtml%3E%0A%20%20%20%20%20%20%3Chead%3E%0A%20%20%20%20%20%20%20%20%3Ctitle%3EMy%20First%20Amber%20Project%3C/title%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22../../js/amber.js%22%20type%3D%22text/javascript%22%3E%3C/script%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%3E%0A%20%20%20%20%20%20%20%20%20%20loadAmber%28%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20files%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20prefix%3A%20%27projects/hello/js%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20ready%3A%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%29%3B%20%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%20%20%3C/head%3E%0A%20%20%20%20%20%20%3Cbody%3E%0A%20%20%20%20%20%20%20%20%3Carticle%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%3EMy%20First%20Amber%20Project%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20onclick%3D%22smalltalk.Browser._open%28%29%22%3Eclass%20browser%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22sayHello%22%3Esay%20hello%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/article%3E%0A%20%20%20%20%20%20%3C/body%3E%0A%20%20%20%20%3C/html%3E%0A%0ANow%20start%20up%20amber%20with%20node.js%20and%20navigate%20to%20%20http%3A//localhost%3A4000/projects/hello/index.html%0A%0AIt%27s%20boring%20so%20far%2C%20so%20lets%20write%20some%20code.%20Click%20the%20button%20to%20open%20the%20class%20browser.%20Find%20an%20existing%20class%20and%20change%20its%20name%20to%20Hello%20and%20its%20package%20to%20HelloApp.%20%0AThen%20click%20save.%20This%20creates%20a%20new%20class%20and%20leaves%20the%20old%20one%20intact%2C%20it%20doesn%27t%20overwrite%20it.%20Your%20class%20will%20look%20like%20this%3A%0A%0A%20%20%20%20Object%20subclass%3A%20%23Hello%0A%20%20%20%20%20%20%20%20instanceVariableNames%3A%20%27%27%0A%20%20%20%20%20%20%20%20package%3A%20%27HelloApp%27%0A%0ANow%20click%20save%20and%20navigate%20to%20your%20new%20class%20in%20its%20new%20package.%0A%20Then%20click%20%27commit%20package%27.%20You%20just%20created%20a%20new%20class%20and%20saved%20your%20work.%20%0AOn%20your%20file%20system%20check%20out%20your%20js%20and%20st%20folders.%20Your%20new%20class%20is%20now%20saved%20in%20both%20JavaScript%20and%20Smalltalk.%0A%0ANow%2C%20refresh%20your%20browser%20page%20and%20reopen%20the%20class%20browser.%20Oh%20no%2C%20your%20new%20class%20is%20gone%21%20To%20load%20your%20new%20class%20automatically%2C%20you%20have%20to%20add%20it%20in%20index.html.%20Make%20your%20JavaScript%20look%20like%20this%3A%0A%0A%0A%20%20%20%20loadAmber%28%7B%0A%20%20%20%20%20%20%20%20files%3A%20%5B%27HelloApp.js%27%5D%2C%0A%20%20%20%20%20%20%20%20prefix%3A%20%27projects/hello/js%27%2C%0A%20%20%20%20%20%20%20%20ready%3A%20function%28%29%20%7B%20%20%20%20%20%20%0A%20%20%20%20%7D%7D%29%3B%20%0A%0ASave%20and%20refresh%20again.%20Now%20your%20class%20is%20loaded%20and%20shows%20up%20in%20the%20class%20browser.%0A%0ANow%2C%20let%27s%20make%20this%20class%20do%20something.%20Create%20a%20new%20message%20in%20the%20class%20browser%20by%20navigating%20to%20your%20class%2C%20then%20clicking%20%27not%20yet%20classified%27%20and%20fill%20in%20a%20simple%20message.%20Try%20this%20for%20example%3A%0A%0A%20%20%20%20begin%0A%09%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%09%7C%20msg%20button%20%7C%0A%09msg%20%3A%3D%20%27Hello%20world%21%27.%0A%09button%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0A%09button%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20msg%20%2C%20%27%3C/p%3E%27%5D.%0A%0AYour%20message%20isn%27t%20too%20helpful%20if%20it%20doesn%27t%20get%20called.%20Save%20it%2C%20commit%20the%20package%2C%20then%20edit%20index.html%20again.%20You%20can%20write%20JavaScript%20code%20that%20sends%20a%20message%20to%20Smalltalk%3A%0A%0A%20%20%20%20loadAmber%28%7B%0A%20%20%20%20%20%20%20%20files%3A%20%5B%27HelloApp.js%27%5D%2C%0A%20%20%20%20%20%20%20%20prefix%3A%20%27projects/hello/js%27%2C%20//%20path%20for%20js%20files%20i%20think%0A%20%20%20%20%20%20%20%20ready%3A%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%24%28function%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20smalltalk.Hello._new%28%29._begin%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%7D%29%3B%20%0A%0AFrom%20there%2C%20you%20can%20create%20new%20Smalltalk%20classes%20and%20messages%20to%20build%20up%20your%20app.%20Enjoy%21%0A")]);})(smalltalk.send((smalltalk.DocChapter || DocChapter), "_new", []));
return self;}
}),
smalltalk.TutorialsChapter);

smalltalk.addMethod(
'_counterChapter',
smalltalk.method({
selector: 'counterChapter',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_title_", ["The counter application"]);return smalltalk.send($rec, "_contents_", [unescape("%0A%0AThis%20tutorial%20will%20teach%20you%20how%20to%20build%20HTML%20with%20Amber%20using%20jQuery%20and%20the%20HTMLCanvas%20API.%20It%20is%20freely%20adapted%20from%20%0Athe%20%5BSeaside%20counter%20example%5D%28http%3A//www.seaside.st/about/examples/counter%29%0A%0A%23%23The%20counter%20widget%0A%0AThe%20counter%20is%20the%20most%20basic%20example%20of%20a%20widget.%20It%20allows%20to%20increment%20and%20decrement%20a%20number%20by%20clicking%20a%20button.%0A%0AAmber%20already%20comes%20with%20a%20counter%20example%20in%20the%20%60Examples%60%20package.%20To%20avoid%20class%20name%20conflict%2C%20we%27ll%20name%20our%20counter%20class%20%60TCounter%60.%0A%0A%20%20%20%20Widget%20subclass%3A%20%23TCounter%0A%20%20%20%20%20%20%20%20instanceVariableNames%3A%20%27count%20header%27%0A%20%20%20%20%20%20%20%20package%3A%20%27Tutorials%27%0A%0AThe%20first%20method%20is%20used%20to%20initialize%20the%20component%20with%20the%20default%20state%2C%20in%20this%20case%20we%20set%20the%20counter%20to%200%3A%0A%0A%20%20%20%20initialize%0A%20%20%20%20%20%20%20%20super%20initialize.%0A%20%20%20%20%20%20%20%20count%20%3A%3D%200%0A%0AThe%20method%20used%20for%20rendering%20a%20widget%20is%20%60%23renderOn%3A%60.%20It%20takes%20an%20instance%20of%20HTMLCanvas%20as%20parameter.%20%0AThe%20%60header%60%20h1%20kept%20as%20an%20instance%20variable%2C%20so%20when%20the%20count%20value%20change%2C%20we%20can%20update%20it%27s%20contents%20accordingly.%0A%0A%20%20%20%20renderOn%3A%20html%0A%20%20%20%20%20%20%20%20header%20%3A%3D%20html%20h1%20%0A%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20count%20asString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20yourself.%0A%20%20%20%20%20%20%20%20html%20button%0A%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27++%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5Bself%20increase%5D.%0A%20%20%20%20%20%20%20%20html%20button%0A%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27--%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5Bself%20decrease%5D%0A%0AThe%20counter%20is%20almost%20ready.%20All%20we%20need%20now%20is%20to%20implement%20the%20two%20action%20methods%20%60%23increase%60%20and%20%60%23decrease%60%20to%20change%20the%20state%20%0Aof%20our%20counter%20and%20update%20its%20header.%0A%0A%20%20%20%20increase%0A%20%20%20%20%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%20%20%20%20%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D%0A%0A%20%20%20%20decrease%0A%20%20%20%20%20%20%20%20count%20%3A%3D%20count%20-%201.%0A%20%20%20%20%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D%0A%0A%0AThat%27s%20it%21%20We%20can%20now%20display%20an%20instance%20of%20TCounter%20by%20rendering%20it%20on%20the%20page%20using%20jQuery%3A%0A%0A%20%20%20%20TCounter%20new%20appendToJQuery%3A%20%27body%27%20asJQuery%0A%0A")]);})(smalltalk.send((smalltalk.DocChapter || DocChapter), "_new", []));
return self;}
}),
smalltalk.TutorialsChapter);



