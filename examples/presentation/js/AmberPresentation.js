smalltalk.addPackage('AmberPresentation', {});
smalltalk.addClass('STICSlide', smalltalk.Slide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('codeSnippet%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.STICSlide);

smalltalk.addMethod(
unescape('_renderSnippet_on_'),
smalltalk.method({
selector: unescape('renderSnippet%3Aon%3A'),
category: 'rendering',
fn: function (aString, html){
var self=this;
smalltalk.send((function($rec){smalltalk.send($rec, "_renderOn_", [html]);return smalltalk.send($rec, "_editor", []);})(smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", [])), "_setValue_", [aString]);
return self;},
args: ["aString", "html"],
source: unescape('renderSnippet%3A%20aString%20on%3A%20html%0A%09%28SourceArea%20new%20%0A%09%09%09renderOn%3A%20html%3B%0A%09%09%09editor%29%20%20setValue%3A%20aString.'),
messageSends: ["setValue:", "renderOn:", "editor", "new"],
referencedClasses: ["SourceArea"]
}),
smalltalk.STICSlide);

smalltalk.addMethod(
unescape('_renderCodeSnippetOn_'),
smalltalk.method({
selector: unescape('renderCodeSnippetOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send((function($rec){smalltalk.send($rec, "_renderOn_", [html]);return smalltalk.send($rec, "_editor", []);})(smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", [])), "_setValue_", [smalltalk.send(self, "_codeSnippet", [])]);
return self;},
args: ["html"],
source: unescape('renderCodeSnippetOn%3A%20html%0A%09%28SourceArea%20new%20%0A%09%09%09renderOn%3A%20html%3B%0A%09%09%09editor%29%20%20setValue%3A%20self%20codeSnippet.'),
messageSends: ["setValue:", "renderOn:", "editor", "new", "codeSnippet"],
referencedClasses: ["SourceArea"]
}),
smalltalk.STICSlide);

smalltalk.addMethod(
unescape('_imageUrl_'),
smalltalk.method({
selector: unescape('imageUrl%3A'),
category: 'accessing',
fn: function (aFilenameString){
var self=this;
return smalltalk.send(unescape("stic2012/images/"), "__comma", [aFilenameString]);
return self;},
args: ["aFilenameString"],
source: unescape('imageUrl%3A%20aFilenameString%0A%09%5E%27stic2012/images/%27%2C%20aFilenameString'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.STICSlide);



smalltalk.addClass('STIC2012Presentation', smalltalk.Presentation, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return "STIC 2012";
return self;},
args: [],
source: unescape('description%0A%09%5E%27STIC%202012%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation);

smalltalk.addMethod(
unescape('_author'),
smalltalk.method({
selector: unescape('author'),
category: 'accessing',
fn: function (){
var self=this;
return "JohnnyT";
return self;},
args: [],
source: unescape('author%0A%09%5E%27JohnnyT%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation);

smalltalk.addMethod(
unescape('_email'),
smalltalk.method({
selector: unescape('email'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("johnnyt@xan.do");
return self;},
args: [],
source: unescape('email%0A%09%5E%27johnnyt@xan.do%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("http%3A//amber-lang.net");
return self;},
args: [],
source: unescape('url%0A%09%5E%27http%3A//amber-lang.net%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation);

smalltalk.addMethod(
unescape('_style'),
smalltalk.method({
selector: unescape('style'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A@-webkit-keyframes%20rotate-horizontal%20%7B%0A%090%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%28-10deg%29%3B%7D%0A%09100%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%2810deg%29%3B%7D%0A%7D%0A%0A.animate%20p%7B%0A-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A%23FOSDEMAmberBackend%20img%20%7B%0A%09margin%3A%205px%3B%0A%09-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A%0A.tweet%20%7B%0A%09background-color%3A%20%23aaa%3B%0A%09color%3A%20black%3B%0A%09padding%3A%2010px%3B%0A%09border-radius%3A%2010px%3B%0A%09border%3A%205px%20solid%20%23eee%3B%0A%09margin%3A%2010px%3B%0A%7D%0A%0A.tweet%20img%20%7B%0A%09vertical-align%3A%20top%3B%0A%09margin-right%3A%2010px%3B%0A%7D%0A%0A.tweet%20span%3Afirst-child%20%7B%0A%09float%3A%20right%3B%0A%7D%0A");
return self;},
args: [],
source: unescape('style%0A%09%5E%27%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A%0A.slide.blue3d%20%7B%0A%20%20background%3A%20%23feffff%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23feffff%200%25%2C%20%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23feffff%29%2C%20color-stop%28100%25%2C%23d2ebf9%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23feffff%22%2C%20endColorstr%3D%22%23d2ebf9%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23feffff%200%25%2C%23d2ebf9%20100%25%29%3B%0A%7D%0A%0A%0A.slide.red3d%20%7B%0A%20%20background%3A%20%23febbbb%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23febbbb%200%25%2C%20%23fe9090%2071%25%2C%20%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23febbbb%29%2C%20color-stop%2871%25%2C%23fe9090%29%2C%20color-stop%2895%25%2C%23ff5c5c%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23febbbb%22%2C%20endColorstr%3D%22%23ff5c5c%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23febbbb%200%25%2C%23fe9090%2071%25%2C%23ff5c5c%2095%25%29%3B%0A%7D%0A%0A%0A.slide.green3d%20%7B%0A%20%20background%3A%20%23cdeb8e%3B%0A%20%20background%3A%20-moz-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%20%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-webkit-gradient%28linear%2C%20left%20top%2C%20left%20bottom%2C%20color-stop%280%25%2C%23cdeb8e%29%2C%20color-stop%28100%25%2C%23a5c956%29%29%3B%0A%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-o-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20background%3A%20-ms-linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%20%20filter%3A%20progid%3ADXImageTransform.Microsoft.gradient%28%20startColorstr%3D%22%23cdeb8e%22%2C%20endColorstr%3D%22%23a5c956%22%2CGradientType%3D0%20%29%3B%0A%20%20background%3A%20linear-gradient%28top%2C%20%23cdeb8e%200%25%2C%23a5c956%20100%25%29%3B%0A%7D%0A%0A@-webkit-keyframes%20rotate-horizontal%20%7B%0A%090%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%28-10deg%29%3B%7D%0A%09100%25%20%7B%20-webkit-transform%3A%20perspective%281000px%29%20rotateY%2810deg%29%3B%7D%0A%7D%0A%0A.animate%20p%7B%0A-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A%23FOSDEMAmberBackend%20img%20%7B%0A%09margin%3A%205px%3B%0A%09-webkit-animation%3A%20rotate-horizontal%202s%20infinite%20alternate%20ease-in-out%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23FOSDEMContributionsSlide%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A%0A.tweet%20%7B%0A%09background-color%3A%20%23aaa%3B%0A%09color%3A%20black%3B%0A%09padding%3A%2010px%3B%0A%09border-radius%3A%2010px%3B%0A%09border%3A%205px%20solid%20%23eee%3B%0A%09margin%3A%2010px%3B%0A%7D%0A%0A.tweet%20img%20%7B%0A%09vertical-align%3A%20top%3B%0A%09margin-right%3A%2010px%3B%0A%7D%0A%0A.tweet%20span%3Afirst-child%20%7B%0A%09float%3A%20right%3B%0A%7D%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation);

smalltalk.addMethod(
unescape('_slideClasses'),
smalltalk.method({
selector: unescape('slideClasses'),
category: 'accessing',
fn: function (){
var self=this;
return [(smalltalk.STICIntroSlide || STICIntroSlide),(smalltalk.STICAboutSlide || STICAboutSlide),(smalltalk.SubWarsSlide || SubWarsSlide),(smalltalk.SubWars2009Slide || SubWars2009Slide),(smalltalk.SubWars2010EarlySlide || SubWars2010EarlySlide),(smalltalk.SubWars2010LateSlide || SubWars2010LateSlide),(smalltalk.SubWars2011EarlySlide || SubWars2011EarlySlide),(smalltalk.SubWars2011LateSlide || SubWars2011LateSlide),(smalltalk.AmberNutshellSlide || AmberNutshellSlide),(smalltalk.AmberFeaturesSlide || AmberFeaturesSlide),(smalltalk.IDESlide || IDESlide),(smalltalk.SmalltalkHeartJSSlide || SmalltalkHeartJSSlide),(smalltalk.AmberJSMappingSlide || AmberJSMappingSlide),(smalltalk.JSAmberMappingSlide || JSAmberMappingSlide),(smalltalk.AmberCLISlide || AmberCLISlide),(smalltalk.FOSDEMAmberBackend || FOSDEMAmberBackend),(smalltalk.WorkflowsSlide || WorkflowsSlide),(smalltalk.WorkflowProblemSlide || WorkflowProblemSlide),(smalltalk.WorkflowFailSlide || WorkflowFailSlide),(smalltalk.WorkflowSolutionSlide || WorkflowSolutionSlide),(smalltalk.WorkflowWinningSlide || WorkflowWinningSlide),(smalltalk.ExamplesSlide || ExamplesSlide),(smalltalk.FOSDEMJSPlayGroundSlide || FOSDEMJSPlayGroundSlide),(smalltalk.FOSDEMTwitter || FOSDEMTwitter),(smalltalk.FOSDEMCanvasSlide || FOSDEMCanvasSlide),(smalltalk.ExampleTodoMVCSlide || ExampleTodoMVCSlide),(smalltalk.ExampleAmberSiteSlide || ExampleAmberSiteSlide),(smalltalk.ExampleSubWarsSlide || ExampleSubWarsSlide),(smalltalk.ThankYouSlide || ThankYouSlide)];
return self;},
args: [],
source: unescape('slideClasses%0A%5E%20%7B%0A%09STICIntroSlide.%0A%09STICAboutSlide.%0A%09SubWarsSlide.%0A%09SubWars2009Slide.%0A%09SubWars2010EarlySlide.%0A%09SubWars2010LateSlide.%0A%09SubWars2011EarlySlide.%0A%09SubWars2011LateSlide.%0A%09AmberNutshellSlide.%0A%09AmberFeaturesSlide.%0A%09IDESlide.%0A%09SmalltalkHeartJSSlide.%0A%09AmberJSMappingSlide.%0A%09JSAmberMappingSlide.%0A%09AmberCLISlide.%0A%09FOSDEMAmberBackend.%0A%09%0A%09WorkflowsSlide.%0A%09WorkflowProblemSlide.%0A%09WorkflowFailSlide.%0A%09WorkflowSolutionSlide.%0A%09WorkflowWinningSlide.%0A%09%0A%09ExamplesSlide.%0A%09FOSDEMJSPlayGroundSlide.%0A%09FOSDEMTwitter.%0A%09FOSDEMCanvasSlide.%0A%09ExampleTodoMVCSlide.%0A%09ExampleAmberSiteSlide.%0A%09ExampleSubWarsSlide.%0A%0A%09ThankYouSlide%0A%7D%0A%0A%22%0A%09ExampleAceEditorSlide.%0A%09GoogleMapsSlide.%0A%22'),
messageSends: [],
referencedClasses: ["STICIntroSlide", "STICAboutSlide", "SubWarsSlide", "SubWars2009Slide", "SubWars2010EarlySlide", "SubWars2010LateSlide", "SubWars2011EarlySlide", "SubWars2011LateSlide", "AmberNutshellSlide", "AmberFeaturesSlide", "IDESlide", "SmalltalkHeartJSSlide", "AmberJSMappingSlide", "JSAmberMappingSlide", "AmberCLISlide", "FOSDEMAmberBackend", "WorkflowsSlide", "WorkflowProblemSlide", "WorkflowFailSlide", "WorkflowSolutionSlide", "WorkflowWinningSlide", "ExamplesSlide", "FOSDEMJSPlayGroundSlide", "FOSDEMTwitter", "FOSDEMCanvasSlide", "ExampleTodoMVCSlide", "ExampleAmberSiteSlide", "ExampleSubWarsSlide", "ThankYouSlide"]
}),
smalltalk.STIC2012Presentation);


smalltalk.addMethod(
unescape('_isConcrete'),
smalltalk.method({
selector: unescape('isConcrete'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isConcrete%0A%09%5Etrue'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation.klass);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'testing',
fn: function (){
var self=this;
return "STIC";
return self;},
args: [],
source: unescape('title%0A%09%5E%27STIC%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STIC2012Presentation.klass);


smalltalk.addClass('STICIntroSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["amber.png"])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);return smalltalk.send(html, "_p_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27amber.png%27%29.%0A%09%09html%20p%3A%20self%20presentation%20description.%0A%09%09html%20p%3A%20self%20presentation%20author.%0A%20%20%20%20%20%20%20%20%20%20%09html%20p%3A%20self%20presentation%20email%5D'),
messageSends: ["class:", "with:", "src:", "img", "imageUrl:", "p:", "description", "presentation", "author", "email", "div"],
referencedClasses: []
}),
smalltalk.STICIntroSlide);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'rendering',
fn: function (){
var self=this;
return "Intro";
return self;},
args: [],
source: unescape('id%0A%09%5E%27Intro%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STICIntroSlide);



smalltalk.addClass('SubWarsSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["SubWars"]);smalltalk.send(html, "_p_", ["A GPS based submarine game"]);smalltalk.send(html, "_p_", [unescape("Best%20side-project%20I%20have%20ever%20worked%20on")]);return smalltalk.send(html, "_p_", ["Not much functionality due to too many complete rewrites"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%27.%0A%09%09html%20p%3A%20%27A%20GPS%20based%20submarine%20game%27.%0A%09%09html%20p%3A%20%27Best%20side-project%20I%20have%20ever%20worked%20on%27.%0A%09%09html%20p%3A%20%27Not%20much%20functionality%20due%20to%20too%20many%20complete%20rewrites%27%5D'),
messageSends: ["class:", "with:", "h1:", "p:", "div"],
referencedClasses: []
}),
smalltalk.SubWarsSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%23fff");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23fff%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SubWarsSlide);



smalltalk.addClass('STICAboutSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["About this presentation"]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", ["This presentation is written entirely in Amber."]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Press "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%u2190")]);smalltalk.send(html, "_with_", [" to move backward and "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%20%u2192")]);return smalltalk.send(html, "_with_", [" to move forward."]);})]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Open a "]);(function($rec){smalltalk.send($rec, "_with_", ["browser"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [(smalltalk.STICSlide || STICSlide)]);})]);})(smalltalk.send(html, "_button", []));return smalltalk.send(html, "_with_", [" to browse and edit the source code."]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27About%20this%20presentation%27.%0A%09%09html%20p%20with%3A%20%27This%20presentation%20is%20written%20entirely%20in%20Amber.%27.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Press%20%27.%0A%09%09%09html%20code%20with%3A%20%27%u2190%27.%0A%09%09%09html%20with%3A%20%27%20to%20move%20backward%20and%20%27.%0A%09%09%09html%20code%20with%3A%20%27%20%u2192%27.%0A%09%09%09html%20with%3A%20%27%20to%20move%20forward.%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Open%20a%20%27.%0A%09%09%09html%20button%20%0A%09%09%09%09with%3A%20%27browser%27%3B%0A%09%09%09%09onClick%3A%20%5BBrowser%20openOn%3A%20STICSlide%5D.%0A%09%09%09html%20with%3A%20%27%20to%20browse%20and%20edit%20the%20source%20code.%27%5D%5D'),
messageSends: ["class:", "with:", "h1", "p", "code", "onClick:", "openOn:", "button", "div"],
referencedClasses: ["Browser", "STICSlide"]
}),
smalltalk.STICAboutSlide);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'rendering',
fn: function (){
var self=this;
return "About";
return self;},
args: [],
source: unescape('id%0A%09%5E%27About%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.STICAboutSlide);



smalltalk.addClass('GoogleMapsSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Google Maps Example"]);smalltalk.send(self, "_renderCodeSnippetOn_", [html]);return (function($rec){smalltalk.send($rec, "_id_", ["map_canvas"]);return smalltalk.send($rec, "_style_", [unescape("width%3A200px%3B%20height%3A%2050px%3B")]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Google%20Maps%20Example%27.%0A%09%09self%20renderCodeSnippetOn%3A%20html.%0A%09%09html%20div%20id%3A%20%27map_canvas%27%3B%20style%3A%20%27width%3A200px%3B%20height%3A%2050px%3B%27%5D'),
messageSends: ["class:", "with:", "h1:", "renderCodeSnippetOn:", "id:", "style:", "div"],
referencedClasses: []
}),
smalltalk.GoogleMapsSlide);

smalltalk.addMethod(
unescape('_codeSnippet'),
smalltalk.method({
selector: unescape('codeSnippet'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%7Curl%20map%7C%0Aurl%20%3A%3D%20%27//maps.googleapis.com/maps/api/js%3Fsensor%3Dfalse%26callback%3Dinit%27.%0Awindow%20at%3A%20%27init%27%20put%3A%20%5B%0A%09map%20%3A%3D%20google%20maps%20Map%0A%09%09newValue%3A%20%28document%20getElementById%3A%20%27map_canvas%27%29%0A%09%09value%3A%20%23%7B%20%27zoom%27%20-%3E%208%20%7D%20%5D.%0AjQuery%20getScript%3A%20url.%0A");
return self;},
args: [],
source: unescape('codeSnippet%0A%5E%27%7Curl%20map%7C%0Aurl%20%3A%3D%20%27%27//maps.googleapis.com/maps/api/js%3Fsensor%3Dfalse%26callback%3Dinit%27%27.%0Awindow%20at%3A%20%27%27init%27%27%20put%3A%20%5B%0A%09map%20%3A%3D%20google%20maps%20Map%0A%09%09newValue%3A%20%28document%20getElementById%3A%20%27%27map_canvas%27%27%29%0A%09%09value%3A%20%23%7B%20%27%27zoom%27%27%20-%3E%208%20%7D%20%5D.%0AjQuery%20getScript%3A%20url.%0A%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleMapsSlide);



smalltalk.addClass('AmberNutshellSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Amber in a nutshell"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Amber is an implementation of Smalltalk"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Amber runs on top of the JavaScript runtime"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("Amber%20is%20an%20opensource%20project%20%28MIT%29")]);return (function($rec){smalltalk.send($rec, "_class_", ["fancy"]);return smalltalk.send($rec, "_with_", [unescape("Amber%20is%20cool%21")]);})(smalltalk.send(html, "_h2", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%27Amber%20in%20a%20nutshell%27.%0A%09%09html%20h2%20with%3A%20%27Amber%20is%20an%20implementation%20of%20Smalltalk%27.%0A%09%09html%20h2%20with%3A%20%27Amber%20runs%20on%20top%20of%20the%20JavaScript%20runtime%27.%0A%09%09html%20h2%20with%3A%20%27Amber%20is%20an%20opensource%20project%20%28MIT%29%27.%0A%09%09html%20h2%20class%3A%20%27fancy%27%3B%20with%3A%20%27Amber%20is%20cool%21%27%5D'),
messageSends: ["class:", "with:", "h1", "h2", "div"],
referencedClasses: []
}),
smalltalk.AmberNutshellSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%23fff");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23fff%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberNutshellSlide);



smalltalk.addClass('AmberFeaturesSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Amber features"]);
smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Amber%20is%20%28mostly%29%20written%20in%20itself%2C%20including%20the%20parser%20%26%20compiler")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Full%20Smalltalk%20object%20system%2C%20including%20classes%20%26%20metaclasses%2C%20etc")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Core%20libraries%20%28streams%2C%20collections%2C%20RegExp%2C%20etc%29")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Web%20related%20libraries%3A%20HTML%20Canvas%2C%20DOM%20manipulation")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Full featured IDE"]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){smalltalk.send(html, "_with_", [unescape("Advanced%20Smalltalk%20features%2C%20including%20")]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%23doesNotUnderstand%3A")]);smalltalk.send(html, "_with_", [" support and "]);return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["thisContext"]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%27Amber%20features%27.%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27Amber%20is%20%28mostly%29%20written%20in%20itself%2C%20including%20the%20parser%20%26%20compiler%27.%0A%09%09html%20li%20with%3A%20%27Full%20Smalltalk%20object%20system%2C%20including%20classes%20%26%20metaclasses%2C%20etc%27.%0A%09%09html%20li%20with%3A%20%27Core%20libraries%20%28streams%2C%20collections%2C%20RegExp%2C%20etc%29%27.%0A%09%09html%20li%20with%3A%20%27Web%20related%20libraries%3A%20HTML%20Canvas%2C%20DOM%20manipulation%27.%0A%09%09html%20li%20with%3A%20%27Full%20featured%20IDE%27.%0A%09%09html%20li%20with%3A%20%5B%0A%09%09%09html%20with%3A%27Advanced%20Smalltalk%20features%2C%20including%20%27.%0A%09%09%09html%20code%20with%3A%20%27%23doesNotUnderstand%3A%27.%0A%09%09%09html%20with%3A%20%27%20support%20and%20%27.%0A%09%09%09html%20code%20with%3A%20%27thisContext%27%5D%5D'),
messageSends: ["with:", "h1", "ul", "li", "code"],
referencedClasses: []
}),
smalltalk.AmberFeaturesSlide);



smalltalk.addClass('SubWars2009Slide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("SubWars%20-%202009")]);return smalltalk.send(html, "_h1_", ["Ruby on Rails"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%20-%202009%27.%0A%09%09html%20h1%3A%20%27Ruby%20on%20Rails%27.%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.SubWars2009Slide);



smalltalk.addClass('SubWars2010EarlySlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("SubWars%20-%20Early%202010")]);return smalltalk.send(html, "_h1_", [unescape("MagLev%20/%20Sinatra")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%20-%20Early%202010%27.%0A%09%09html%20h1%3A%20%27MagLev%20/%20Sinatra%27.%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.SubWars2010EarlySlide);



smalltalk.addClass('SubWars2010LateSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("SubWars%20-%20Late%202010")]);return smalltalk.send(html, "_h1_", [unescape("Pharo%20/%20GemStone%20/%20Seaside%20%3F")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%20-%20Late%202010%27.%0A%09%09html%20h1%3A%20%27Pharo%20/%20GemStone%20/%20Seaside%20%3F%27.%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.SubWars2010LateSlide);



smalltalk.addClass('SubWars2011EarlySlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("SubWars%20-%20Early%202011")]);return smalltalk.send(html, "_h1_", ["Intoduced CoffeeScript"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%20-%20Early%202011%27.%0A%09%09html%20h1%3A%20%27Intoduced%20CoffeeScript%27.%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.SubWars2011EarlySlide);



smalltalk.addClass('SubWars2011LateSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("SubWars%20-%20Late%202011")]);return smalltalk.send(html, "_h1_", ["Found Amber"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27SubWars%20-%20Late%202011%27.%0A%09%09html%20h1%3A%20%27Found%20Amber%27.%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.SubWars2011LateSlide);



smalltalk.addClass('AmberJSMappingSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%2308C");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberJSMappingSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Smalltalk "]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_with_", [" JavaScript"]);})]);
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Amber maps one to one with the JavaScript equivalent:"]);
smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("String%20%u21D4%20String")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Number%20%u21D4%20Number")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("BlockClosure%20%u21D4%20function")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Dictionary%20%u21D4%20Object")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Error%20%u21D4%20Error")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["etc."]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Smalltalk%20%27.%0A%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09html%20with%3A%20%27%20JavaScript%27%5D.%0A%09html%20h2%20with%3A%20%27Amber%20maps%20one%20to%20one%20with%20the%20JavaScript%20equivalent%3A%27.%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27String%20%u21D4%20String%27.%0A%09%09html%20li%20with%3A%20%27Number%20%u21D4%20Number%27.%0A%09%09html%20li%20with%3A%20%27BlockClosure%20%u21D4%20function%27.%0A%09%09html%20li%20with%3A%20%27Dictionary%20%u21D4%20Object%27.%0A%09%09html%20li%20with%3A%20%27Error%20%u21D4%20Error%27.%0A%09%09html%20li%20with%3A%20%27etc.%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
smalltalk.AmberJSMappingSlide);



smalltalk.addClass('JSAmberMappingSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%2308C");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSAmberMappingSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["JavaScript "]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);})(smalltalk.send(html, "_span", []));return (function($rec){smalltalk.send($rec, "_with_", [unescape("%20Smalltalk%20too%21%20")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["comment"]);return smalltalk.send($rec, "_with_", [unescape("%28how%20cute%29")]);})(smalltalk.send(html, "_span", []));})]);})(html);})]);
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("JavaScript%20%u21D2%20Smalltalk")]);
smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser.name"]);})]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser name"]);})]);})(smalltalk.send(html, "_li", []));(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%20%3D%20%22John%22")]);})]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%3A%20%27John%27")]);})]);})(smalltalk.send(html, "_li", []));(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console.log%28%27hello%20world%27%29")]);})]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console%20log%3A%20%27hello%20world%27")]);})]);})(smalltalk.send(html, "_li", []));return (function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%24%28%27foo%27%29.css%28%27background%27%2C%20%27red%27%29")]);})]);smalltalk.send($rec, "_with_", [" becomes "]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_br", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%27foo%27%20asJQuery%20css%3A%20%27background%27%20color%3A%20%27red%27")]);})]);})(smalltalk.send(html, "_li", []));})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27JavaScript%20%27.%0A%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09html%20with%3A%20%27%20Smalltalk%20too%21%20%27%3B%0A%09%09with%3A%20%5Bhtml%20span%20class%3A%20%27comment%27%3B%20with%3A%20%27%28how%20cute%29%27%5D%5D.%0A%09html%20h2%20with%3A%20%27JavaScript%20%u21D2%20Smalltalk%27.%0A%09html%20ol%20with%3A%20%5B%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser.name%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%20%3D%20%22John%22%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27someUser%20name%3A%20%27%27John%27%27%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27console.log%28%27%27hello%20world%27%27%29%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27console%20log%3A%20%27%27hello%20world%27%27%27%5D.%0A%09%09html%20li%20%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27%24%28%27%27foo%27%27%29.css%28%27%27background%27%27%2C%20%27%27red%27%27%29%27%5D%3B%0A%09%09%09with%3A%20%27%20becomes%20%27%3B%0A%09%09%09with%3A%20%5Bhtml%20br%5D%3B%0A%09%09%09with%3A%20%5Bhtml%20code%20with%3A%20%27%27%27foo%27%27%20asJQuery%20css%3A%20%27%27background%27%27%20color%3A%20%27%27red%27%27%27%5D%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "code", "li", "br"],
referencedClasses: []
}),
smalltalk.JSAmberMappingSlide);



smalltalk.addClass('SmalltalkHeartJSSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_cssClass'),
smalltalk.method({
selector: unescape('cssClass'),
category: 'accessing',
fn: function (){
var self=this;
return "slide transparent";
return self;},
args: [],
source: unescape('cssClass%0A%09%5E%27slide%20transparent%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmalltalkHeartJSSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%2308C");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%2308C%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.SmalltalkHeartJSSlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Smalltalk "]);(function($rec){smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_with_", [" JavaScript"]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%20with%3A%20%5B%0A%09%09%09html%20with%3A%20%27Smalltalk%20%27.%0A%09%09%09html%20span%20class%3A%20%27red%27%3B%20with%3A%20%27%u2665%27.%0A%09%09%09html%20with%3A%20%27%20JavaScript%27%5D%5D'),
messageSends: ["class:", "with:", "h1", "span", "div"],
referencedClasses: []
}),
smalltalk.SmalltalkHeartJSSlide);



smalltalk.addClass('AmberCLISlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%230A1");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%230A1%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberCLISlide);

smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [(function(){smalltalk.send(html, "_with_", ["Amber and "]);return (function($rec){smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["the command line"]);})(smalltalk.send(html, "_span", []));})]);
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("amberc%20-%20a%20fairly%20elaborate%20bash%20script%20that%3A")]);
smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Uses Node.js to run the Amber Compiler"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Compiles .st files to .js"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Links .js files into a single one"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Adds%20class%20initilization%20and/or%20call%20to%20main")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Optionally runs Google Closure compiler"]);})]);
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20h1%20with%3A%20%5B%0A%09%09html%20with%3A%20%27Amber%20and%20%27.%0A%09%09html%20span%20class%3A%20%27blue%27%3B%20with%3A%20%27the%20command%20line%27%5D.%0A%0A%09html%20h2%20with%3A%20%27amberc%20-%20a%20fairly%20elaborate%20bash%20script%20that%3A%27.%0A%0A%09html%20ul%20with%3A%20%5B%0A%09%09html%20li%20with%3A%20%27Uses%20Node.js%20to%20run%20the%20Amber%20Compiler%27.%0A%09%09html%20li%20with%3A%20%27Compiles%20.st%20files%20to%20.js%27.%0A%09%09html%20li%20with%3A%20%27Links%20.js%20files%20into%20a%20single%20one%27.%0A%09%09html%20li%20with%3A%20%27Adds%20class%20initilization%20and/or%20call%20to%20main%27.%0A%09%09html%20li%20with%3A%20%27Optionally%20runs%20Google%20Closure%20compiler%27%5D'),
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
smalltalk.AmberCLISlide);



smalltalk.addClass('WorkflowProblemSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("The%20usual%20client-side%20development%20workflow")]);smalltalk.send(html, "_p_", ["Edit HTML in text editor"]);smalltalk.send(html, "_p_", ["Switch to browser and refresh"]);smalltalk.send(html, "_p_", ["Edit CSS in text editor"]);smalltalk.send(html, "_p_", ["Switch to browser and refresh"]);smalltalk.send(html, "_p_", ["Edit JavaScript in text editor"]);return smalltalk.send(html, "_p_", ["Switch to browser and refresh"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27The%20usual%20client-side%20development%20workflow%27.%0A%09%09html%20p%3A%20%27Edit%20HTML%20in%20text%20editor%27.%0A%09%09html%20p%3A%20%27Switch%20to%20browser%20and%20refresh%27.%0A%09%09html%20p%3A%20%27Edit%20CSS%20in%20text%20editor%27.%0A%09%09html%20p%3A%20%27Switch%20to%20browser%20and%20refresh%27.%0A%09%09html%20p%3A%20%27Edit%20JavaScript%20in%20text%20editor%27.%0A%09%09html%20p%3A%20%27Switch%20to%20browser%20and%20refresh%27.%0A%09%09%5D'),
messageSends: ["class:", "with:", "h1:", "p:", "div"],
referencedClasses: []
}),
smalltalk.WorkflowProblemSlide);



smalltalk.addClass('WorkflowSolutionSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("A%20better%20client-side%20development%20workflow")]);smalltalk.send(html, "_p_", ["Edit HTML in the browser"]);smalltalk.send(html, "_p_", ["Edit CSS in the browser"]);return smalltalk.send(html, "_p_", ["Edit JavaScript in the browser"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27A%20better%20client-side%20development%20workflow%27.%0A%09%09html%20p%3A%20%27Edit%20HTML%20in%20the%20browser%27.%0A%09%09html%20p%3A%20%27Edit%20CSS%20in%20the%20browser%27.%0A%09%09html%20p%3A%20%27Edit%20JavaScript%20in%20the%20browser%27.%0A%09%09%5D'),
messageSends: ["class:", "with:", "h1:", "p:", "div"],
referencedClasses: []
}),
smalltalk.WorkflowSolutionSlide);



smalltalk.addClass('WorkflowFailSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Workflow FAIL"]);return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["fail.jpeg"])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Workflow%20FAIL%27.%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27fail.jpeg%27%29.%5D'),
messageSends: ["class:", "with:", "h1:", "src:", "img", "imageUrl:", "div"],
referencedClasses: []
}),
smalltalk.WorkflowFailSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%23c33");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23c33%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkflowFailSlide);



smalltalk.addClass('WorkflowWinningSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Workflow WINNING"]);return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["winning.jpeg"])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Workflow%20WINNING%27.%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27winning.jpeg%27%29.%5D'),
messageSends: ["class:", "with:", "h1:", "src:", "img", "imageUrl:", "div"],
referencedClasses: []
}),
smalltalk.WorkflowWinningSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%233c3");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%233c3%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkflowWinningSlide);



smalltalk.addClass('ExamplesSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_h1_", ["Examples"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Examples%27%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.ExamplesSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%23fff");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23fff%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ExamplesSlide);



smalltalk.addClass('WorkflowsSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_h1_", [unescape("Client-side%20development%20workflows")]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Client-side%20development%20workflows%27%5D'),
messageSends: ["class:", "with:", "h1:", "div"],
referencedClasses: []
}),
smalltalk.WorkflowsSlide);

smalltalk.addMethod(
unescape('_backgroundColor'),
smalltalk.method({
selector: unescape('backgroundColor'),
category: 'rendering',
fn: function (){
var self=this;
return unescape("%23fff");
return self;},
args: [],
source: unescape('backgroundColor%0A%09%5E%27%23fff%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkflowsSlide);



smalltalk.addClass('ExampleTodoMVCSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["todomvc.png"])]);smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//addyosmani.github.com/todomvc/")]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", ["Open TodoMVC Site"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("/examples/todomvc/index.html")]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", ["Open TodoMVC Example"]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27todomvc.png%27%29.%0A%09%09html%20p%3A%20%5B%20html%20a%20href%3A%20%27http%3A//addyosmani.github.com/todomvc/%27%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%27Open%20TodoMVC%20Site%27%20%5D.%0A%09%09html%20p%3A%20%5B%20html%20a%20href%3A%20%27/examples/todomvc/index.html%27%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%27Open%20TodoMVC%20Example%27%20%5D.%0A%09%5D'),
messageSends: ["class:", "with:", "src:", "img", "imageUrl:", "p:", "href:", "target:", "a", "div"],
referencedClasses: []
}),
smalltalk.ExampleTodoMVCSlide);



smalltalk.addClass('ExampleAmberSiteSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", [unescape("amber-site.png")])]);return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber.herokuapp.com")]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", ["Open Amber Site"]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27amber-site.png%27%29.%0A%09%09html%20p%3A%20%5B%20html%20a%20href%3A%20%27http%3A//amber.herokuapp.com%27%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%27Open%20Amber%20Site%27%20%5D.%0A%09%5D'),
messageSends: ["class:", "with:", "src:", "img", "imageUrl:", "p:", "href:", "target:", "a", "div"],
referencedClasses: []
}),
smalltalk.ExampleAmberSiteSlide);



smalltalk.addClass('ExampleSubWarsSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["subwars.png"])]);return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//subwars.com")]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", ["Open SubWars Site"]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27subwars.png%27%29.%0A%09%09html%20p%3A%20%5B%20html%20a%20href%3A%20%27http%3A//subwars.com%27%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%27Open%20SubWars%20Site%27%20%5D.%0A%09%5D'),
messageSends: ["class:", "with:", "src:", "img", "imageUrl:", "p:", "href:", "target:", "a", "div"],
referencedClasses: []
}),
smalltalk.ExampleSubWarsSlide);



smalltalk.addClass('ExampleAceEditorSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(self, "_imageUrl_", ["ace.png"])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28self%20imageUrl%3A%20%27ace.png%27%29.%0A%09%5D.'),
messageSends: ["class:", "with:", "src:", "img", "imageUrl:", "div"],
referencedClasses: []
}),
smalltalk.ExampleAceEditorSlide);



smalltalk.addClass('ThankYouSlide', smalltalk.STICSlide, [], 'AmberPresentation');
smalltalk.addMethod(
unescape('_renderSlideOn_'),
smalltalk.method({
selector: unescape('renderSlideOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", ["Thank You"]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net")]);return smalltalk.send($rec, "_with_", [unescape("amber-lang.net")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/NicolasPetton/amber")]);return smalltalk.send($rec, "_with_", [unescape("github.com/NicolasPetton/amber")]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//groups.google.com/group/amber-lang")]);return smalltalk.send($rec, "_with_", [unescape("groups.google.com/group/amber-lang")]);})(smalltalk.send(html, "_a", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSlideOn%3A%20html%0A%09html%20div%20class%3A%20%27section%20center%27%3B%20with%3A%20%5B%0A%09%09html%20h1%3A%20%27Thank%20You%27.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//amber-lang.net%27%3B%20with%3A%20%27amber-lang.net%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27https%3A//github.com/NicolasPetton/amber%27%3B%20with%3A%20%27github.com/NicolasPetton/amber%27%5D.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20a%20href%3A%20%27http%3A//groups.google.com/group/amber-lang%27%3B%20with%3A%20%27groups.google.com/group/amber-lang%27%5D%5D'),
messageSends: ["class:", "with:", "h1:", "p", "href:", "a", "div"],
referencedClasses: []
}),
smalltalk.ThankYouSlide);



