smalltalk.addPackage('Helios-Layout', {});
smalltalk.addClass('HLContainer', smalltalk.Widget, ['splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $2;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_id_", ["container"]);
    $2 = smalltalk.send($1, "_with_", [smalltalk.send(self, "_splitter", [])]);
    smalltalk.send(smalltalk.send(window, "_jQuery_", [window]), "_bind_do_", ["resize", function () {return smalltalk.send(smalltalk.send(self, "_splitter", []), "_resize", []);}]);
    return self;
}
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter",
smalltalk.method({
selector: "splitter",
fn: function () {
    var self = this;
    return self['@splitter'];
}
}),
smalltalk.HLContainer);

smalltalk.addMethod(
"_splitter_",
smalltalk.method({
selector: "splitter:",
fn: function (aSplitter) {
    var self = this;
    self['@splitter'] = aSplitter;
    return self;
}
}),
smalltalk.HLContainer);


smalltalk.addMethod(
"_with_",
smalltalk.method({
selector: "with:",
fn: function (aSplitter) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_splitter_", [aSplitter]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLContainer.klass);


smalltalk.addClass('HLSplitter', smalltalk.Widget, ['firstWidget', 'secondWidget', 'firstPane', 'secondPane', 'splitter'], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function () {
    var self = this;
    return "splitter";
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget",
smalltalk.method({
selector: "firstWidget",
fn: function () {
    var self = this;
    return self['@firstWidget'];
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_firstWidget_",
smalltalk.method({
selector: "firstWidget:",
fn: function (aWidget) {
    var self = this;
    self['@firstWidget'] = aWidget;
    return self;
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
fn: function () {
    var self = this;
    return true;
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function () {
    var self = this;
    return "panes";
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var $1, $3, $4, $5, $6, $2, $7;
    $1 = smalltalk.send(html, "_div", []);
    smalltalk.send($1, "_class_", [smalltalk.send(self, "_panesCssClass", [])]);
    $2 = smalltalk.send($1, "_with_", [function () {$3 = smalltalk.send(html, "_div", []);smalltalk.send($3, "_class_", ["pane"]);$4 = smalltalk.send($3, "_with_", [smalltalk.send(self, "_firstWidget", [])]);self['@firstPane'] = $4;self['@firstPane'];self['@splitter'] = smalltalk.send(smalltalk.send(html, "_div", []), "_class_", [smalltalk.send(self, "_cssClass", [])]);self['@splitter'];$5 = smalltalk.send(html, "_div", []);smalltalk.send($5, "_class_", ["pane"]);$6 = smalltalk.send($5, "_with_", [smalltalk.send(self, "_secondWidget", [])]);self['@secondPane'] = $6;return self['@secondPane'];}]);
    smalltalk.send(self, "_setupSplitter", []);
    $7 = smalltalk.send(self, "_resize", []);
    return self;
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
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
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget",
smalltalk.method({
selector: "secondWidget",
fn: function () {
    var self = this;
    return self['@secondWidget'];
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_secondWidget_",
smalltalk.method({
selector: "secondWidget:",
fn: function (aWidget) {
    var self = this;
    self['@secondWidget'] = aWidget;
    return self;
}
}),
smalltalk.HLSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.HLSplitter);


smalltalk.addMethod(
"_with_with_",
smalltalk.method({
selector: "with:with:",
fn: function (aWidget, anotherWidget) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_firstWidget_", [aWidget]);
    smalltalk.send($2, "_secondWidget_", [anotherWidget]);
    $3 = smalltalk.send($2, "_yourself", []);
    $1 = $3;
    return $1;
}
}),
smalltalk.HLSplitter.klass);


smalltalk.addClass('HLHorizontalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_cssClass", [], smalltalk.HLSplitter), "__comma", [" horizontal"]);
    return $1;
}
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_panesCssClass", [], smalltalk.HLSplitter), "__comma", [" horizontal"]);
    return $1;
}
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_offset", []), "_top", [])]);
    return self;
}
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
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
}
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("axis", "__minus_gt", ["y"]), smalltalk.send("containment", "__minus_gt", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_parent", [])]), smalltalk.send("helper", "__minus_gt", ["clone"]), smalltalk.send("start", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_startResizing_", [smalltalk.send(ui, "_helper", [])]);}]), smalltalk.send("drag", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(ui, "_offset", []), "_top", [])]);}])])]);
    return self;
}
}),
smalltalk.HLHorizontalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter) {
    var self = this;
    smalltalk.send(aSplitter, "_width_", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_width", [])]);
    return self;
}
}),
smalltalk.HLHorizontalSplitter);



smalltalk.addClass('HLVerticalSplitter', smalltalk.HLSplitter, [], 'Helios-Layout');
smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_cssClass", [], smalltalk.HLSplitter), "__comma", [" vertical"]);
    return $1;
}
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_panesCssClass",
smalltalk.method({
selector: "panesCssClass",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.send(self, "_panesCssClass", [], smalltalk.HLSplitter), "__comma", [" vertical"]);
    return $1;
}
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_offset", []), "_left", [])]);
    return self;
}
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
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
}
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_setupSplitter",
smalltalk.method({
selector: "setupSplitter",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("axis", "__minus_gt", ["x"]), smalltalk.send("containment", "__minus_gt", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_parent", [])]), smalltalk.send("helper", "__minus_gt", ["clone"]), smalltalk.send("start", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_startResizing_", [smalltalk.send(ui, "_helper", [])]);}]), smalltalk.send("drag", "__minus_gt", [function (e, ui) {return smalltalk.send(self, "_resize_", [smalltalk.send(smalltalk.send(ui, "_offset", []), "_left", [])]);}])])]);
    return self;
}
}),
smalltalk.HLVerticalSplitter);

smalltalk.addMethod(
"_startResizing_",
smalltalk.method({
selector: "startResizing:",
fn: function (aSplitter) {
    var self = this;
    smalltalk.send(aSplitter, "_height_", [smalltalk.send(smalltalk.send(self['@splitter'], "_asJQuery", []), "_height", [])]);
    return self;
}
}),
smalltalk.HLVerticalSplitter);



smalltalk.addMethod(
"_isHeliosSplitter",
smalltalk.method({
selector: "isHeliosSplitter",
fn: function () {
    var self = this;
    return false;
}
}),
smalltalk.Object);

