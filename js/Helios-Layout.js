smalltalk.addPackage('Helios-Layout', {});
smalltalk.addClass('HLContainer', smalltalk.Widget, ['splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_id_", ["container"]);
    $2 = smalltalk.send($1, "_with_", [smalltalk.send(self, "_splitter", [])]);
    smalltalk.send(smalltalk.send(window, "_jQuery_", [window]), "_bind_do_", ["resize", function () {return smalltalk.send(smalltalk.send(self, "_splitter", []), "_resize", []);}]);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09id: 'container'; \x0a        with: self splitter.\x0a        \x0a   (window jQuery: window) bind: 'resize' do: [ self splitter resize ]",
messageSends: ["id:", "div", "with:", "splitter", "bind:do:", "resize", "jQuery:"],
referencedClasses: []
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter",
smalltalk.method({
selector: "splitter",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@splitter'];
},
args: [],
source: "splitter\x0a\x09^ splitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter_",
smalltalk.method({
selector: "splitter:",
category: 'accessing',
fn: function (aSplitter) {
    var self = this;
    self['@splitter'] = aSplitter;
    return self;
},
args: ["aSplitter"],
source: "splitter: aSplitter\x0a\x09splitter := aSplitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLContainer);


smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
category: 'instance creation',
fn: function (aSplitter) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_splitter_", [aSplitter]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aSplitter"],
source: "with: aSplitter\x0a\x09^ self new \x0a    \x09splitter: aSplitter; \x0a        yourself",
messageSends: ["splitter:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLContainer.klass);


smalltalk.addClass('HLSplitter', smalltalk.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function () {
    var self = this;
    return "splitter";
},
args: [],
source: "cssClass\x0a\x09^ 'splitter'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget",
smalltalk.method({
selector: "firstWidget",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@firstWidget'];
},
args: [],
source: "firstWidget\x0a\x09^ firstWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget_",
smalltalk.method({
selector: "firstWidget:",
category: 'accessing',
fn: function (aWidget) {
    var self = this;
    self['@firstWidget'] = aWidget;
    return self;
},
args: ["aWidget"],
source: "firstWidget: aWidget\x0a\x09firstWidget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
category: 'testing',
fn: function () {
    var self = this;
    return true;
},
args: [],
source: "isHeliosSplitter\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'rendering',
fn: function () {
    var self = this;
    return "panes";
},
args: [],
source: "panesCssClass\x0a\x09^ 'panes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $6, $2, $7;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", [smalltalk.send(self, "_panesCssClass", [])]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["pane"]);$4 = smalltalk.send($3, "_with_", [smalltalk.send(self, "_firstWidget", [])]);self['@firstPane'] = $4;self['@firstPane'];self['@splitter'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", [smalltalk.send(self, "_cssClass", [])]);self['@splitter'];$5 = smalltalk.send(html, "_div", []);smalltalk.send($5, "_class_", ["pane"]);$6 = smalltalk.send($5, "_with_", [smalltalk.send(self, "_secondWidget", [])]);self['@secondPane'] = $6;return self['@secondPane'];}]);
    smalltalk.send(self, "_setupSplitter", []);
    $7 = smalltalk.send(self, "_resize", []);
    return self;
},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self panesCssClass; with: [\x0a\x09\x09firstPane := html div class: 'pane'; with: self firstWidget.\x0a    \x09splitter := html div class: self cssClass.\x0a    \x09secondPane := html div class: 'pane'; with: self secondWidget ].\x0a        \x0a\x09self \x0a    \x09setupSplitter;\x0a        resize",
messageSends: ["class:", "panesCssClass", "div", "with:", "firstWidget", "cssClass", "secondWidget", "setupSplitter", "resize"],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'rendering',
fn: function () {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(smalltalk.send(self, "_firstWidget", []), "_isHeliosSplitter", []);
    if (smalltalk.assert($1)) {
        smalltalk.send(smalltalk.send(self, "_firstWidget", []), "_resize", []);
    }
    $2 = smalltalk.send(smalltalk.send(self, "_secondWidget", []), "_isHeliosSplitter", []);
    if (smalltalk.assert($2)) {
        smalltalk.send(smalltalk.send(self, "_secondWidget", []), "_resize", []);
    }
    return self;
},
args: [],
source: "resize\x0a\x09self firstWidget isHeliosSplitter ifTrue: [ self firstWidget resize ].\x0a    self secondWidget isHeliosSplitter ifTrue: [ self secondWidget resize ]",
messageSends: ["ifTrue:", "resize", "firstWidget", "isHeliosSplitter", "secondWidget"],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget",
smalltalk.method({
selector: "secondWidget",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@secondWidget'];
},
args: [],
source: "secondWidget\x0a\x09^ secondWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget_",
smalltalk.method({
selector: "secondWidget:",
category: 'accessing',
fn: function (aWidget) {
    var self = this;
    self['@secondWidget'] = aWidget;
    return self;
},
args: ["aWidget"],
source: "secondWidget: aWidget\x0a\x09secondWidget := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "setupSplitter",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSplitter);


smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
category: 'instance creation',
fn: function (aWidget, anotherWidget) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_firstWidget_", [aWidget]);
    smalltalk.send($2, "_secondWidget_", [anotherWidget]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
},
args: ["aWidget", "anotherWidget"],
source: "with: aWidget with: anotherWidget\x0a\x09^ self new\x0a    \x09\x09firstWidget: aWidget;\x0a            secondWidget: anotherWidget;\x0a            yourself",
messageSends: ["firstWidget:", "new", "secondWidget:", "yourself"],
referencedClasses: []
}),
smalltalk.HLSplitter.klass);


smalltalk.addClass('HLHorizontalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_cssClass", [], smalltalk.HLSplitter), "__comma", [" horizontal"]);
    return $1;
},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' horizontal'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_panesCssClass", [], smalltalk.HLSplitter), "__comma", [" horizontal"]);
    return $1;
},
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' horizontal'",
messageSends: [",", "panesCssClass"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_offset", []), "_top", [])]);
    return self;
},
args: [],
source: "resize\x0a\x09self resize: splitter asJQuery offset top",
messageSends: ["resize:", "top", "offset", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
category: 'actions',
fn: function (anInteger) {
    var self = this;
    var container;
    var position;
    container = smalltalk.send(smalltalk.send(self['@firstPane'], "_asJQuery", []), "_parent", []);
    position = smalltalk.send(anInteger, "__minus", [smalltalk.send(smalltalk.send(container, "_offset", []), "_top", [])]);
    smalltalk.send(smalltalk.send(self['@firstPane'], "_asJQuery", []), "_height_", [smalltalk.send(smalltalk.send(position, "_min_", [smalltalk.send(smalltalk.send(container, "_height", []), "__minus", [100])]), "_max_", [100])]);
    smalltalk.send(smalltalk.send(self['@secondPane'], "_asJQuery", []), "_height_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(container, "_height", []), "__minus", [position]), "_min_", [smalltalk.send(smalltalk.send(container, "_height", []), "__minus", [100])]), "_max_", [100]), "__minus", [6])]);
    smalltalk.send(self, "_resize", [], smalltalk.HLSplitter);
    return self;
},
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container position |\x0a    \x0a    container := firstPane asJQuery parent.\x0a    position := anInteger - container offset top.\x0a    \x0a\x09firstPane asJQuery height: ((position min: container height - 100) max: 100).\x0a    secondPane asJQuery height: (((container height - position) min: container height - 100) max: 100) - 6.\x0a    \x0a    super resize",
messageSends: ["parent", "asJQuery", "-", "top", "offset", "height:", "max:", "min:", "height", "resize"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("axis", "__minus_gt", ["y"]), smalltalk.send("containment", "__minus_gt", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_parent", [])]), smalltalk.send("helper", "__minus_gt", ["clone"]), smalltalk.send("start", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_startResizing_", [smalltalk.send(ui, "_helper", [])]);}]), smalltalk.send("drag", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(ui, "_offset", []), "_top", [])]);}])])]);
    return self;
},
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'y'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: ui offset top ] }",
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "top", "offset"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
category: 'actions',
fn: function (aSplitter) {
    var self = this;
    smalltalk.send(aSplitter, "_width_", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_width", [])]);
    return self;
},
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter width: splitter asJQuery width",
messageSends: ["width:", "width", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLHorizontalSplitter);



smalltalk.addClass('HLVerticalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_cssClass", [], smalltalk.HLSplitter), "__comma", [" vertical"]);
    return $1;
},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' vertical'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
category: 'accessing',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_panesCssClass", [], smalltalk.HLSplitter), "__comma", [" vertical"]);
    return $1;
},
args: [],
source: "panesCssClass\x0a\x09^ super panesCssClass, ' vertical'",
messageSends: [",", "panesCssClass"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'actions',
fn: function () {
    var self = this;
    smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_offset", []), "_left", [])]);
    return self;
},
args: [],
source: "resize\x0a\x09self resize: splitter asJQuery offset left",
messageSends: ["resize:", "left", "offset", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
category: 'actions',
fn: function (anInteger) {
    var self = this;
    var container;
    var position;
    container = smalltalk.send(smalltalk.send(self['@firstPane'], "_asJQuery", []), "_parent", []);
    position = smalltalk.send(anInteger, "__minus", [smalltalk.send(smalltalk.send(container, "_offset", []), "_left", [])]);
    smalltalk.send(smalltalk.send(self['@firstPane'], "_asJQuery", []), "_width_", [smalltalk.send(smalltalk.send(position, "_min_", [smalltalk.send(smalltalk.send(container, "_width", []), "__minus", [100])]), "_max_", [100])]);
    smalltalk.send(smalltalk.send(self['@secondPane'], "_asJQuery", []), "_width_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(container, "_width", []), "__minus", [position]), "_min_", [smalltalk.send(smalltalk.send(container, "_width", []), "__minus", [100])]), "_max_", [100]), "__minus", [6])]);
    smalltalk.send(self, "_resize", [], smalltalk.HLSplitter);
    return self;
},
args: ["anInteger"],
source: "resize: anInteger\x0a\x09| container position |\x0a    \x0a    container := firstPane asJQuery parent.\x0a    position := anInteger - container offset left.\x0a    \x0a\x09firstPane asJQuery width: ((position min: container width - 100) max: 100).\x0a    secondPane asJQuery width: (((container width - position) min: container width - 100) max: 100) - 6.\x0a    \x0a    super resize",
messageSends: ["parent", "asJQuery", "-", "left", "offset", "width:", "max:", "min:", "width", "resize"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
category: 'rendering',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("axis", "__minus_gt", ["x"]), smalltalk.send("containment", "__minus_gt", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_parent", [])]), smalltalk.send("helper", "__minus_gt", ["clone"]), smalltalk.send("start", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_startResizing_", [smalltalk.send(ui, "_helper", [])]);}]), smalltalk.send("drag", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(ui, "_offset", []), "_left", [])]);}])])]);
    return self;
},
args: [],
source: "setupSplitter\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'x'. \x0a        'containment' -> splitter asJQuery parent.\x0a        'helper' -> 'clone'.\x0a        'start' -> [ :e :ui | self startResizing: ui helper ].\x0a        'drag' -> [ :e :ui | self resize: ui offset left ] }",
messageSends: ["draggable:", "->", "parent", "asJQuery", "startResizing:", "helper", "resize:", "left", "offset"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
category: 'actions',
fn: function (aSplitter) {
    var self = this;
    smalltalk.send(aSplitter, "_height_", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_height", [])]);
    return self;
},
args: ["aSplitter"],
source: "startResizing: aSplitter\x0a\x09aSplitter height: splitter asJQuery height",
messageSends: ["height:", "height", "asJQuery"],
referencedClasses: []
}),
smalltalk.HLVerticalSplitter);



smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
category: '*Helios-Layout',
fn: function () {
    var self = this;
    return false;
},
args: [],
source: "isHeliosSplitter\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

