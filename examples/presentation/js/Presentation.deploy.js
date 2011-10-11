smalltalk.addClass('Slide', smalltalk.Widget, ['presentation'], 'Presentation');
smalltalk.addMethod(
'_presentation',
smalltalk.method({
selector: 'presentation',
fn: function () {
    var self = this;
    return self['@presentation'];
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_presentation_',
smalltalk.method({
selector: 'presentation:',
fn: function (aPresentation) {
    var self = this;
    self['@presentation'] = aPresentation;
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function () {
    var self = this;
    return "slide";
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%23555");
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_show',
smalltalk.method({
selector: 'show',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof document == "undefined" ? nil : document, "_location", []), "_hash_", [smalltalk.send(self, "_id", [])]);
    ($receiver = smalltalk.send(self, "_backgroundColor", [])) != nil &&
        $receiver != undefined ? function () {return smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [unescape("%23slides")]), "_css_color_", ["background", smalltalk.send(self, "_backgroundColor", [])]);}() : nil;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [".slide"]), "_hide_options_duration_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_slideTransition", []), [], 300]);
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_id", [])])]), "_show_options_duration_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_slideTransition", []), [], 300]);
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", [smalltalk.send(self, "_cssClass", [])]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(self, "_renderSlideOn_", [html]);return smalltalk.send(self, "_renderMetaOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.Slide);

smalltalk.addMethod(
'_renderMetaOn_',
smalltalk.method({
selector: 'renderMetaOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_id_", ["meta"]);return smalltalk.send($rec, "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_title", [])]);}(smalltalk.send(html, "_p", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["description"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])]);}(smalltalk.send(html, "_p", [])));(function ($rec) {smalltalk.send($rec, "_class_", ["author"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);}(smalltalk.send(html, "_a", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["url"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_url", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_url", [])]);}(smalltalk.send(html, "_a", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Slide);


smalltalk.addMethod(
'_on_',
smalltalk.method({
selector: 'on:',
fn: function (aPresentation) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_presentation_", [aPresentation]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.Slide.klass);


smalltalk.addClass('Presentation', smalltalk.Widget, ['currentSlide', 'slides'], 'Presentation');
smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_title", []);
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_author',
smalltalk.method({
selector: 'author',
fn: function () {
    var self = this;
    return "John Smith";
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_url',
smalltalk.method({
selector: 'url',
fn: function () {
    var self = this;
    return unescape("http%3A//jtalk-project.org");
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_description',
smalltalk.method({
selector: 'description',
fn: function () {
    var self = this;
    return "A presentation written in Jtalk";
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_email',
smalltalk.method({
selector: 'email',
fn: function () {
    var self = this;
    return unescape("john@smith.com");
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_slides',
smalltalk.method({
selector: 'slides',
fn: function () {
    var self = this;
    ($receiver = self['@slides']) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_initSlides", []);}() : $receiver;
    return self['@slides'];
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_slideClasses',
smalltalk.method({
selector: 'slideClasses',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_currentSlide',
smalltalk.method({
selector: 'currentSlide',
fn: function () {
    var self = this;
    return self['@currentSlide'];
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_currentSlide_',
smalltalk.method({
selector: 'currentSlide:',
fn: function (aSlide) {
    var self = this;
    self['@currentSlide'] = aSlide;
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_slideTransition',
smalltalk.method({
selector: 'slideTransition',
fn: function () {
    var self = this;
    return "fade";
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_style',
smalltalk.method({
selector: 'style',
fn: function () {
    var self = this;
    return "";
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_nextSlide',
smalltalk.method({
selector: 'nextSlide',
fn: function () {
    var self = this;
    var next = nil;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {next = smalltalk.send(smalltalk.send(self, "_slides", []), "_at_ifAbsent_", [($receiver = smalltalk.send(smalltalk.send(self, "_slides", []), "_indexOf_", [smalltalk.send(self, "_currentSlide", [])])).klass === smalltalk.Number ? $receiver + 1 : smalltalk.send($receiver, "__plus", [1]), function () {return nil;}]);return ($receiver = next) != nil && $receiver != undefined ? function () {self['@currentSlide'] = next;return smalltalk.send(next, "_show", []);}() : nil;}() : nil;
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_showCurrentSlide',
smalltalk.method({
selector: 'showCurrentSlide',
fn: function () {
    var self = this;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {smalltalk.send(smalltalk.send(".slide", "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(smalltalk.send(self, "_currentSlide", []), "_id", [])]), "_asJQuery", []), "_show", []);return smalltalk.send(smalltalk.send("title", "_asJQuery", []), "_text_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_title", []), "__comma", [unescape("%20-%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentSlide", []), "_id", [])])]);}() : nil;
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_previousSlide',
smalltalk.method({
selector: 'previousSlide',
fn: function () {
    var self = this;
    var next = nil;
    ($receiver = smalltalk.send(self, "_currentSlide", [])) != nil &&
        $receiver != undefined ? function () {next = smalltalk.send(smalltalk.send(self, "_slides", []), "_at_ifAbsent_", [($receiver = smalltalk.send(smalltalk.send(self, "_slides", []), "_indexOf_", [smalltalk.send(self, "_currentSlide", [])])).klass === smalltalk.Number ? $receiver - 1 : smalltalk.send($receiver, "__minus", [1]), function () {return nil;}]);return ($receiver = next) != nil && $receiver != undefined ? function () {self['@currentSlide'] = next;return smalltalk.send(next, "_show", []);}() : nil;}() : nil;
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_checkHash',
smalltalk.method({
selector: 'checkHash',
fn: function () {
    var self = this;
    var hash = nil;
    var slide = nil;
    hash = smalltalk.send(smalltalk.send(smalltalk.send(typeof document == "undefined" ? nil : document, "_location", []), "_hash", []), "_replace_with_", [unescape("%5E%23"), ""]);
    slide = smalltalk.send(smalltalk.send(self, "_slides", []), "_detect_ifNone_", [function (each) {return smalltalk.send(smalltalk.send(each, "_id", []), "__eq", [hash]);}, function () {return nil;}]);
    ($receiver = slide) != nil && $receiver != undefined ? function () {return ($receiver = smalltalk.send(smalltalk.send(self, "_currentSlide", []), "__eq", [slide])).klass === smalltalk.Boolean ? !$receiver ? function () {smalltalk.send(self, "_currentSlide_", [slide]);return smalltalk.send(slide, "_show", []);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {smalltalk.send(self, "_currentSlide_", [slide]);return smalltalk.send(slide, "_show", []);}]);}() : nil;
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_initSlides',
smalltalk.method({
selector: 'initSlides',
fn: function () {
    var self = this;
    self['@slides'] = smalltalk.send(smalltalk.send(self, "_slideClasses", []), "_collect_", [function (each) {return smalltalk.send(each, "_on_", [self]);}]);
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_type_", [unescape("text/css")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_style", [])]);}(smalltalk.send(html, "_style", [])));
    (function ($rec) {smalltalk.send($rec, "_id_", ["slides"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(self, "_renderSlidesOn_", [html]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.Presentation);

smalltalk.addMethod(
'_renderSlidesOn_',
smalltalk.method({
selector: 'renderSlidesOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_slides", []), "_do_", [function (each) {return smalltalk.send(each, "_renderOn_", [html]);}]);
    ($receiver = self['@currentSlide']) == nil ||
        $receiver == undefined ? function () {return self['@currentSlide'] = smalltalk.send(smalltalk.send(self, "_slides", []), "_first", []);}() : $receiver;
    smalltalk.send(self, "_showCurrentSlide", []);
    return self;
}
}),
smalltalk.Presentation);


smalltalk.Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_isConcrete',
smalltalk.method({
selector: 'isConcrete',
fn: function () {
    var self = this;
    return false;
    return self;
}
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
'_concretePresentations',
smalltalk.method({
selector: 'concretePresentations',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_select_", [function (aPresentationClass) {return smalltalk.send(aPresentationClass, "_isConcrete", []);}]);
    return self;
}
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function () {
    var self = this;
    return "Slides";
    return self;
}
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
'_concretePresentationsDo_',
smalltalk.method({
selector: 'concretePresentationsDo:',
fn: function (aBlockWithArg) {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_concretePresentations", []), "_do_", [aBlockWithArg]);
    return self;
}
}),
smalltalk.Presentation.klass);


smalltalk.addClass('ESUG2011Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
'_description',
smalltalk.method({
selector: 'description',
fn: function () {
    var self = this;
    return unescape("ESUG%202011%2C%20Edinburgh");
    return self;
}
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
'_author',
smalltalk.method({
selector: 'author',
fn: function () {
    var self = this;
    return "Nicolas Petton";
    return self;
}
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
'_email',
smalltalk.method({
selector: 'email',
fn: function () {
    var self = this;
    return unescape("nico@objectfusion.fr");
    return self;
}
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
'_url',
smalltalk.method({
selector: 'url',
fn: function () {
    var self = this;
    return unescape("http%3A//jtalk-project.org");
    return self;
}
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
'_slideClasses',
smalltalk.method({
selector: 'slideClasses',
fn: function () {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_add_", [smalltalk.IntroSlide || IntroSlide]);smalltalk.send($rec, "_add_", [smalltalk.AboutSlide || AboutSlide]);smalltalk.send($rec, "_add_", [smalltalk.WhatIsJtalkSlide || WhatIsJtalkSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkFeaturesSlide || JtalkFeaturesSlide]);smalltalk.send($rec, "_add_", [smalltalk.WorkspaceSlide || WorkspaceSlide]);smalltalk.send($rec, "_add_", [smalltalk.IDESlide || IDESlide]);smalltalk.send($rec, "_add_", [smalltalk.CountersSlide || CountersSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide || JtalkAndJavascriptSlide]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide2 || JtalkAndJavascriptSlide2]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide3 || JtalkAndJavascriptSlide3]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndJavascriptSlide4 || JtalkAndJavascriptSlide4]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndCLI || JtalkAndCLI]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode || JtalkAndNode]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode2 || JtalkAndNode2]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndNode3 || JtalkAndNode3]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndWebOS || JtalkAndWebOS]);smalltalk.send($rec, "_add_", [smalltalk.JtalkAndEnyo || JtalkAndEnyo]);smalltalk.send($rec, "_add_", [smalltalk.ContributionsSlide || ContributionsSlide]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(smalltalk.Array || Array, "_new", []));
    return self;
}
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
'_style',
smalltalk.method({
selector: 'style',
fn: function () {
    var self = this;
    return unescape("%0Abody%20%7B%0A%20%20%20%20font-family%3A%20Helvetica%2CArial%2Csans%3B%0A%7D%0A%0A%23slides%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20background%3A%20%23fff%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20font-size%3A%2020px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20height%3A%20500px%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20padding%3A%2060px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-420px%3B%0A%20%20%20%20margin-top%3A%20-320px%3B%0A%20%20%20%20box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%2020px%20%23111%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%2020px%20%23111%3B%0A%7D%0A%0A.slide.transparent%20%7B%0A%20%20%20%20background%3A%20transparent%3B%0A%20%20%20%20box-shadow%3A%200%200%200%20none%3B%0A%20%20%20%20-moz-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20-webkit-box-shadow%3A%200%200%200%20transparent%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20background-image%3A%20-webkit-gradient%28%0A%09linear%2C%0A%09left%20bottom%2C%0A%09left%20top%2C%0A%09color-stop%280.38%2C%20rgb%2879%2C79%2C79%29%29%2C%0A%09color-stop%280.69%2C%20rgb%2833%2C33%2C33%29%29%2C%0A%09color-stop%280.86%2C%20rgb%284%2C4%2C4%29%29%0A%20%20%20%20%29%3B%0A%20%20%20%20background-image%3A%20-moz-linear-gradient%28%0A%09center%20bottom%2C%0A%09rgb%2879%2C79%2C79%29%2038%25%2C%0A%09rgb%2833%2C33%2C33%29%2069%25%2C%0A%09rgb%284%2C4%2C4%29%2086%25%0A%20%20%20%20%29%3B%0A%20%20%20%20color%3A%20%23fff%20%21important%3B%0A%7D%0A%0A.slide.black%20h1%2C%20.slide.black%20h2%2C%20.slide.black%20h3%2C%0A.slide.transparent%20h1%2C%20.slide.transparent%20h2%2C%20.slide.transparent%20h3%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%7D%0A%0A.slide.black%20a%2C%20.slide.transparent%20a%20%7B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%7D%0A%0A.slide.white%20%7B%0A%20%20%20%20color%3A%20%23333%20%21important%3B%0A%7D%0A%0A.slide.white%20h1%2C%20.slide.white%20h2%2C%20.slide.white%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A.slide.white%20a%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%7D%0A%0A%0A.slide%20h1%2C%20.slide%20h2%2C%20.slide%20h3%20%7B%0A%20%20%20%20color%3A%20%23333%3B%0A%20%20%20%20/*%20text-align%3A%20center%3B%20*/%0A%7D%0A%0A.slide%20h1%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2036px%3B%0A%20%20%20%20text-shadow%3A%200%201px%204px%20%23aaa%3B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20margin-bottom%3A%2050px%3B%0A%7D%0A%0A/*%20.slide%20ul%2C%20.slide%20li%20%7B%20*/%0A/*%20%20%20%20%20padding%3A%200%3B%20*/%0A/*%20%20%20%20%20margin%3A%200%3B%20*/%0A/*%20%7D%20*/%0A%0A.slide%20button%20%7B%0A%20%20%20%20font-size%3A%2018px%3B%0A%7D%0A%0A.slide%20a%20%7B%0A%20%20%20%20color%3A%20%23555%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%7D%0A%0A.slide%20a%3Ahover%20%7B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background%3A%20%23555%3B%0A%7D%0A%0A.slide%20.right%20%7B%0A%20%20%20%20text-align%3A%20right%3B%0A%7D%0A%0A.slide%20.section.center%20%7B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20display%3A%20table-cell%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%20700px%3B%0A%20%20%20%20height%3A%20500px%3B%0A%7D%0A%0A.slide%20code%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20border%3A%201px%20solid%20%23ddd%3B%0A%20%20%20%20background%3A%20%23eee%3B%0A%20%20%20%20border-radius%3A%204px%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A.slide%20.code2%20%7B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%20Mono%22%3B%0A%20%20%20%20line-height%3A%201.2em%3B%0A%20%20%20%20color%3A%20%23444%3B%0A%20%20%20%20padding%3A%202px%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%7D%0A%0A%0A.slide%20.CodeMirror%20%7B%0A%20%20%20%20width%3A%20500px%3B%0A%20%20%20%20height%3A%20300px%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.CodeMirror-scroll%20%7B%0A%20%20%20%20text-align%3A%20left%3B%0A%7D%0A%0A.slide%20.fancy%20%7B%0A%20%20%20%20margin-top%3A%2030px%3B%0A%20%20%20%20-webkit-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20-moz-transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20transform%3A%20rotate%28-10deg%29%3B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.comment%20%7B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20font-weight%3A%20normal%3B%0A%7D%0A%0A.slide%20.red%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%7D%0A%0A.slide%20.blue%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%7D%0A%0A.slide%23WhatIsJtalk%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/balloon.jpg%22%29%20650px%2050px%20no-repeat%3B%0A%7D%0A%0A.slide%23ide%20%7B%0A%20%20%20%20background%3A%20black%20url%28%22esug2011/images/ide_star_wars.png%22%29%20center%20center%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndCLI%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/terminal.png%22%29%20620px%2020px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A.slide%23JtalkAndNode2%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndNode3%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/nodejs.png%22%29%20580px%2040px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndWebOS%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/devices.jpg%22%29%20380px%20280px%20no-repeat%3B%0A%7D%0A%0A.slide%23JtalkAndEnyo%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/enyo.png%22%29%20130px%20150px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20%7B%0A%20%20%20%20background%3A%20white%20url%28%22esug2011/images/asterix.png%22%29%2030px%20130px%20no-repeat%3B%0A%7D%0A%0A.slide%23links%20.section%20%7B%0A%20%20%20%20margin-left%3A%20250px%3B%0A%20%20%20%20margin-top%3A%20200px%3B%0A%20%20%20%20font-family%3A%20%22Droid%20Sans%22%3B%0A%20%20%20%20font-size%3A%2026px%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%7D%0A%0A%0A%23meta%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20font-size%3A%2012px%3B%0A%20%20%20%20opacity%3A%200.6%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20z-index%3A%202%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20padding%3A%200%2010px%3B%0A%20%20%20%20line-height%3A%201.8em%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20border-top-left-radius%3A%205px%3B%0A%7D%0A%0A%23meta%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A%0A%23meta%20p%20%7B%0A%20%20%20%20display%3A%20inline%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A%23meta%20a%20%7B%0A%20%20%20%20//background%3A%20%23ccc%3B%0A%20%20%20%20color%3A%20%23ccc%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20padding%3A%200%205px%3B%0A%7D%0A%0A.slide%20%7B%0A%20%20%20%20%0A%7D%0A");
    return self;
}
}),
smalltalk.ESUG2011Presentation);


smalltalk.ESUG2011Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
'_isConcrete',
smalltalk.method({
selector: 'isConcrete',
fn: function () {
    var self = this;
    return true;
    return self;
}
}),
smalltalk.ESUG2011Presentation.klass);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function () {
    var self = this;
    return "Jtalk";
    return self;
}
}),
smalltalk.ESUG2011Presentation.klass);


smalltalk.addClass('IntroSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "intro";
    return self;
}
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function () {
    var self = this;
    return "slide black";
    return self;
}
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [unescape("Jtalk%2C%20the%20Smalltalk%20for%20Web%20developers")]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_presentation", []), "_author", []), "__comma", [unescape("%20%26%20G%F6ran%20Krampe%20-%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_description", [])])]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])]);return smalltalk.send($rec, "_href_", [smalltalk.send("mailto:", "__comma", [smalltalk.send(smalltalk.send(self, "_presentation", []), "_email", [])])]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", [unescape("goran@krampe.se")]);return smalltalk.send($rec, "_href_", [unescape("mailto%3Agoran@krampe.se")]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_with_", ["objectfusion.fr"]);return smalltalk.send($rec, "_href_", [unescape("http%3A//www.objectfusion.fr")]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.IntroSlide);



smalltalk.addClass('WhatIsJtalkSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "WhatIsJtalk";
    return self;
}
}),
smalltalk.WhatIsJtalkSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Jtalk in a nutshell"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk is an implementation of Smalltalk"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk runs on top of the JavaScript runtime"]);smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("Jtalk%20is%20an%20opensource%20project%20%28MIT%29")]);return function ($rec) {smalltalk.send($rec, "_class_", ["fancy"]);return smalltalk.send($rec, "_with_", [unescape("Jtalk%20is%20cool%21")]);}(smalltalk.send(html, "_h2", []));}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.WhatIsJtalkSlide);



smalltalk.addClass('JtalkFeaturesSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "features";
    return self;
}
}),
smalltalk.JtalkFeaturesSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Jtalk features"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Jtalk%20is%20%28mostly%29%20written%20in%20itself%2C%20including%20the%20parser%20%26%20compiler")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Full%20Smalltalk%20object%20system%2C%20including%20classes%20%26%20metaclasses%2C%20etc")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Core%20libraries%20%28streams%2C%20collections%2C%20RegExp%2C%20etc%29")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Web%20related%20libraries%3A%20HTML%20Canvas%2C%20DOM%20manipulation")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Full featured IDE"]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [function () {smalltalk.send(html, "_with_", [unescape("Advanced%20Smalltalk%20features%2C%20including%20")]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%23doesNotUnderstand%3A")]);smalltalk.send(html, "_with_", [" support and "]);return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["thisContext"]);}]);}]);
    return self;
}
}),
smalltalk.JtalkFeaturesSlide);



smalltalk.addClass('AboutSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "about";
    return self;
}
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function () {
    var self = this;
    return "slide transparent white";
    return self;
}
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return "white";
    return self;
}
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["About this presentation"]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [unescape("This%20presentation%20is%20entirely%20written%20in%20Jtalk%20and%20is%20licensed%20under%20CC%20BY-SA.")]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Press "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%u2190")]);smalltalk.send(html, "_with_", [" to move backward and "]);smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%20%u2192")]);return smalltalk.send(html, "_with_", [" to move forward."]);}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Open a "]);(function ($rec) {smalltalk.send($rec, "_with_", ["browser"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.Browser || Browser, "_openOn_", [smalltalk.Presentation || Presentation]);}]);}(smalltalk.send(html, "_button", [])));return smalltalk.send(html, "_with_", [" to edit the source code."]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.AboutSlide);



smalltalk.addClass('JtalkAndJavascriptSlide3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "jtalkAndJs3";
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("Smalltalk%20%u21D2%20JavaScript")]);
    smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["Unary messages begin with an underscore: "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["yourself"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("_yourself%28%29")]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["Binary messages are prefixed with 2 underscores: "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("3@4")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%283%29.__at%284%29")]);}]);}(smalltalk.send(html, "_li", [])));return function ($rec) {smalltalk.send($rec, "_with_", [unescape("Keyword%20message%20follow%20the%20same%20rules%20as%20unary%20messages%2C%20with%20a%20final%20underscore%3A%20")]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["aDictionary at: 3 put: 4"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("aDictionary._at_put_%283%2C%204%29")]);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide3);



smalltalk.addClass('JtalkAndJavascriptSlide2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "jtalkAndJs2";
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Jtalk maps one to one with the JavaScript equivalent:"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("String%20%u21D4%20String")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Number%20%u21D4%20Number")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("BlockClosure%20%u21D4%20function")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Dictionary%20%u21D4%20Object")]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Error%20%u21D4%20Error")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["etc."]);}]);
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide2);



smalltalk.addClass('JtalkAndJavascriptSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "jtalkAndJs";
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function () {
    var self = this;
    return "slide transparent";
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Smalltalk "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return smalltalk.send(html, "_with_", [" JavaScript"]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide);



smalltalk.addClass('WorkspaceSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "workspace";
    return self;
}
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2318bd7d");
    return self;
}
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    var workspace = nil;
    workspace = smalltalk.send(smalltalk.SourceArea || SourceArea, "_new", []);
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [unescape("Give%20Jtalk%20a%20try%21")]);smalltalk.send(workspace, "_renderOn_", [html]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_doIt", []);}]);}(smalltalk.send(html, "_button", [])));(function ($rec) {smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_printIt", []);}]);}(smalltalk.send(html, "_button", [])));return function ($rec) {smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(workspace, "_inspectIt", []);}]);}(smalltalk.send(html, "_button", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.WorkspaceSlide);



smalltalk.addClass('CountersSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "counters";
    return self;
}
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2318bd7d");
    return self;
}
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["The counter example"]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [function () {return smalltalk.send(2, "_timesRepeat_", [function () {return smalltalk.send(smalltalk.send(smalltalk.Counter || Counter, "_new", []), "_renderOn_", [html]);}]);}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.CountersSlide);



smalltalk.addClass('JtalkAndJavascriptSlide4', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "jtalkAndJs4";
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%2308C");
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["JavaScript "]);(function ($rec) {smalltalk.send($rec, "_class_", ["red"]);return smalltalk.send($rec, "_with_", [unescape("%u2665")]);}(smalltalk.send(html, "_span", [])));return function ($rec) {smalltalk.send($rec, "_with_", [unescape("%20Smalltalk%20too%21%20")]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["comment"]);return smalltalk.send($rec, "_with_", [unescape("%28how%20cute%29")]);}(smalltalk.send(html, "_span", []));}]);}(html);}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("JavaScript%20%u21D2%20Smalltalk")]);
    smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser.name"]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", ["someUser name"]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%20%3D%20%22John%22")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("someUser%20name%3A%20%27John%27")]);}]);}(smalltalk.send(html, "_li", [])));(function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console.log%28%27hello%20world%27%29")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("console%20log%3A%20%27hello%20world%27")]);}]);}(smalltalk.send(html, "_li", [])));return function ($rec) {smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("window.jQuery%28%27foo%27%29.css%28%27background%27%2C%20%27red%27%29")]);}]);smalltalk.send($rec, "_with_", [" becomes "]);smalltalk.send($rec, "_with_", [function () {return smalltalk.send(html, "_br", []);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_code", []), "_with_", [unescape("%28window%20jQuery%3A%20%27foo%27%29%20css%3A%20%27background%27%20color%3A%20%27red%27")]);}]);}(smalltalk.send(html, "_li", []));}]);
    return self;
}
}),
smalltalk.JtalkAndJavascriptSlide4);



smalltalk.addClass('IDESlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "ide";
    return self;
}
}),
smalltalk.IDESlide);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return "black";
    return self;
}
}),
smalltalk.IDESlide);

smalltalk.addMethod(
'_cssClass',
smalltalk.method({
selector: 'cssClass',
fn: function () {
    var self = this;
    return "slide transparent";
    return self;
}
}),
smalltalk.IDESlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    return self;
}
}),
smalltalk.IDESlide);



smalltalk.addClass('ContributionsSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "links";
    return self;
}
}),
smalltalk.ContributionsSlide);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//jtalk-project.org")]);return smalltalk.send($rec, "_with_", [unescape("jtalk-project.org")]);}(smalltalk.send(html, "_a", []));}]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("https%3A//github.com/NicolasPetton/jtalk")]);return smalltalk.send($rec, "_with_", [unescape("github.com/NicolasPetton/jtalk")]);}(smalltalk.send(html, "_a", []));}]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_href_", [unescape("http%3A//http%3A//groups.google.com/group/jtalk-project")]);return smalltalk.send($rec, "_with_", [unescape("groups.google.com/group/jtalk-project")]);}(smalltalk.send(html, "_a", []));}]);}]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.ContributionsSlide);



smalltalk.addClass('JtalkAndCLI', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndCLI";
    return self;
}
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["the command line"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("jtalkc%20-%20a%20fairly%20elaborate%20bash%20script%20that%3A")]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Uses Node.js to run the Jtalk Compiler"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Compiles .st files to .js"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Links .js files into a single one"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Adds%20class%20initilization%20and/or%20call%20to%20main")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Optionally runs Google Closure compiler"]);}]);
    return self;
}
}),
smalltalk.JtalkAndCLI);



smalltalk.addClass('JtalkAndNode', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndNode";
    return self;
}
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Hello.st:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("Object%20subclass%3A%20%23Hello%0A%20%20%20%20%20%20%20%20instanceVariableNames%3A%20%27%27%0A%20%20%20%20%20%20%20%20category%3A%20%27Hello%27%21%0A%0A%21Hello%20class%20methodsFor%3A%20%27main%27%21%0Amain%0A%09console%20log%3A%20%27Hello%20world%20from%20JTalk%20in%20Node.js%27%0A%21%20%21")]);}(smalltalk.send(html, "_div", []));}]);
    return self;
}
}),
smalltalk.JtalkAndNode);



smalltalk.addClass('JtalkAndNode2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndNode2";
    return self;
}
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Makefile:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("Program.js%3A%20Hello.st%0A%09../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0A%0Arun%3A%20Program.js%0A%09./hello%0A%0Aclean%3A%0A%09rm%20-f%20Program.js%20Hello.js%0A")]);}(smalltalk.send(html, "_div", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["hello:"]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("node%20Program.js%20%24@")]);}(smalltalk.send(html, "_div", []));}]);
    return self;
}
}),
smalltalk.JtalkAndNode2);



smalltalk.addClass('JtalkAndNode3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndNode3";
    return self;
}
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [unescape("make%20clean%20%26%26%20make%20run%3A")]);
    smalltalk.send(smalltalk.send(html, "_pre", []), "_with_", [function () {(function ($rec) {smalltalk.send($rec, "_class_", ["code2"]);return smalltalk.send($rec, "_with_", [unescape("rm%20-f%20Program.js%20Hello.js%0A../../bin/jtalkc%20-N%20-m%20Hello%20Hello.st%20Program%0ALoading%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%0A/home/gokr/jtalk/js/Parser.js%20/home/gokr/jtalk/js/Compiler.js%0A/home/gokr/jtalk/js/init.js%20/home/gokr/jtalk/nodejs/nodecompile.js%0Aand%20compiling%20...%0ACompiling%20in%20debugMode%3A%20false%0AReading%20file%20Hello.st%0AExporting%20category%20Hello%20as%20Hello.js%0AAdding%20libraries%20%20/home/gokr/jtalk/js/boot.js%20/home/gokr/jtalk/js/Kernel.js%20%20...%0AAdding%20Jtalk%20code%20Hello.js%20...%0AAdding%20initializer%20/home/gokr/jtalk/js/init.js%20...%0AAdding%20call%20to%20Hello%20class%20%3E%3E%20main%20...%0AWriting%20Program.js%20...%0ADone.%0A./hello")]);}(smalltalk.send(html, "_div", [])));return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Hello world from JTalk in Node.js"]);}(smalltalk.send(html, "_span", []));}]);
    return self;
}
}),
smalltalk.JtalkAndNode3);



smalltalk.addClass('JtalkAndWebOS', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndWebOS";
    return self;
}
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["webOS"]);}(smalltalk.send(html, "_span", []));}]);
    smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["A really cool mobile OS based on Linux:"]);
    smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["The primary language in webOS is Javascript"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["The new UI framework for webOS 3.0 is called Enyo"]);smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [unescape("Regular%20apps%20run%20in%20V8%20+%20Webkit")]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", ["Background services run in Node.js"]);}]);
    return self;
}
}),
smalltalk.JtalkAndWebOS);



smalltalk.addClass('JtalkAndEnyo', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function () {
    var self = this;
    return "JtalkAndEnyo";
    return self;
}
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
'_backgroundColor',
smalltalk.method({
selector: 'backgroundColor',
fn: function () {
    var self = this;
    return unescape("%230A1");
    return self;
}
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
'_renderSlideOn_',
smalltalk.method({
selector: 'renderSlideOn:',
fn: function (html) {
    var self = this;
    smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [function () {smalltalk.send(html, "_with_", ["Jtalk and "]);return function ($rec) {smalltalk.send($rec, "_class_", ["blue"]);return smalltalk.send($rec, "_with_", ["Enyo"]);}(smalltalk.send(html, "_span", []));}]);
    return self;
}
}),
smalltalk.JtalkAndEnyo);



smalltalk.addClass('PresentationNavigator', smalltalk.Widget, ['presentationBrush', 'currentPresentation'], 'Presentation');
smalltalk.addMethod(
'_renderToolsOn_',
smalltalk.method({
selector: 'renderToolsOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", ["IDE"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(smalltalk.send(smalltalk.TabManager || TabManager, "_current", []), "_open", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", ["Reload"]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_reload", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", [unescape("%u2190")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}(smalltalk.send(html, "_a", [])));
    (function ($rec) {smalltalk.send($rec, "_with_", [unescape("%u2192")]);return smalltalk.send($rec, "_onClick_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);}(smalltalk.send(html, "_a", [])));
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_setKeybindings',
smalltalk.method({
selector: 'setKeybindings',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_keyup_", [function (e) {var node = nil;node = smalltalk.send(smalltalk.send(smalltalk.send(e, "_target", []), "_nodeName", []), "_asLowercase", []);return ($receiver = smalltalk.send(smalltalk.send(node, "__eq", ["textarea"]), "_or_", [function () {return smalltalk.send(node, "__eq", ["input"]);}])).klass === smalltalk.Boolean ? !$receiver ? function () {($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [39])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_nextSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);return ($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [37])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_previousSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}() : nil : smalltalk.send($receiver, "_ifFalse_", [function () {($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [39])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_nextSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_nextSlide", []);}]);return ($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [37])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_previousSlide", []);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_previousSlide", []);}]);}]);}]);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_checkHash',
smalltalk.method({
selector: 'checkHash',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_checkHash", []);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_checkHashChange',
smalltalk.method({
selector: 'checkHashChange',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof window == "undefined" ? nil : window]), "_bind_do_", ["hashchange", function () {return smalltalk.send(self, "_checkHash", []);}]);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_renderPresentationSelectOn_',
smalltalk.method({
selector: 'renderPresentationSelectOn:',
fn: function (html) {
    var self = this;
    var presentationSelect = nil;
    presentationSelect = smalltalk.send(html, "_select", []);
    (function ($rec) {smalltalk.send($rec, "_onChange_", [function () {return smalltalk.send(self, "_selectPresentationNamed_", [smalltalk.send(smalltalk.send(presentationSelect, "_asJQuery", []), "_val", [])]);}]);return smalltalk.send($rec, "_with_", [function () {return smalltalk.send(smalltalk.Presentation || Presentation, "_concretePresentationsDo_", [function (aPresentationClass) {return function ($rec) {smalltalk.send($rec, "_value_", [smalltalk.send(aPresentationClass, "_name", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(aPresentationClass, "_title", [])]);}(smalltalk.send(html, "_option", []));}]);}]);}(presentationSelect));
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_ready_", [function () {return function ($rec) {smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);smalltalk.send($rec, "_setKeybindings", []);return smalltalk.send($rec, "_checkHashChange", []);}(self);}]);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_type_", [unescape("text/css")]);return smalltalk.send($rec, "_with_", [smalltalk.send(self, "_style", [])]);}(smalltalk.send(html, "_style", [])));
    (function ($rec) {smalltalk.send($rec, "_id_", ["navigator"]);return smalltalk.send($rec, "_with_", [function () {return function ($rec) {smalltalk.send($rec, "_renderToolsOn_", [html]);return smalltalk.send($rec, "_renderPresentationSelectOn_", [html]);}(self);}]);}(smalltalk.send(html, "_div", [])));
    self['@presentationBrush'] = function ($rec) {smalltalk.send($rec, "_id_", ["presentation"]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(html, "_div", []));
    smalltalk.send(self, "_renderCurrentPresentation", []);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_selectPresentation_',
smalltalk.method({
selector: 'selectPresentation:',
fn: function (aPresentationClass) {
    var self = this;
    smalltalk.send(self, "_currentPresentation_", [smalltalk.send(aPresentationClass, "_new", [])]);
    smalltalk.send(self, "_renderCurrentPresentation", []);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_currentPresentation_',
smalltalk.method({
selector: 'currentPresentation:',
fn: function (aPresentation) {
    var self = this;
    self['@currentPresentation'] = aPresentation;
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_currentPresentation',
smalltalk.method({
selector: 'currentPresentation',
fn: function () {
    var self = this;
    return ($receiver = self['@currentPresentation']) == nil ||
        $receiver == undefined ? function () {return self['@currentPresentation'] = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Presentation || Presentation, "_concretePresentations", []), "_first", []), "_new", []);}() : $receiver;
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_selectPresentationNamed_',
smalltalk.method({
selector: 'selectPresentationNamed:',
fn: function (aString) {
    var self = this;
    var presentationClass = nil;
    presentationClass = smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [aString]);
    ($receiver = presentationClass) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_selectPresentation_", [presentationClass]);}() : nil;
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_style',
smalltalk.method({
selector: 'style',
fn: function () {
    var self = this;
    return unescape("%0A%23navigator%20%7B%0A%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20margin-left%3A%20-150px%3B%0A%20%20%20%20padding%3A%205px%3B%0A%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20-moz-border-radius%3A%205px%3B%0A%20%20%20%20-webkit-border-radius%3A%205px%3B%0A%20%20%20%20background%3A%20%23333%3B%0A%20%20%20%20opacity%3A%200.3%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%7D%0A%0A%23navigator%20a%20%7B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20padding%3A%200%202px%3B%0A%20%20%20%20font-size%3A%2014px%3B%0A%7D%0A%0A%23navigator%3Ahover%20%7B%0A%20%20%20%20opacity%3A%200.8%3B%0A%7D%0A");
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_renderCurrentPresentation',
smalltalk.method({
selector: 'renderCurrentPresentation',
fn: function () {
    var self = this;
    smalltalk.send(self['@presentationBrush'], "_contents_", [function (html) {return function ($rec) {smalltalk.send($rec, "_renderOn_", [html]);return smalltalk.send($rec, "_checkHash", []);}(smalltalk.send(self, "_currentPresentation", []));}]);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_previousSlide',
smalltalk.method({
selector: 'previousSlide',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_previousSlide", []);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_nextSlide',
smalltalk.method({
selector: 'nextSlide',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_nextSlide", []);
    return self;
}
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
'_reload',
smalltalk.method({
selector: 'reload',
fn: function () {
    var self = this;
    smalltalk.send(self, "_currentPresentation_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentPresentation", []), "_class", []), "_new", [])]);
    smalltalk.send(self, "_renderCurrentPresentation", []);
    return self;
}
}),
smalltalk.PresentationNavigator);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function () {
    var self = this;
    return smalltalk.send(self, "_open", []);
    return self;
}
}),
smalltalk.PresentationNavigator.klass);

smalltalk.addMethod(
'_open',
smalltalk.method({
selector: 'open',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
    return self;
}
}),
smalltalk.PresentationNavigator.klass);


