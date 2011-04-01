smalltalk.addClass('CanvasRenderingContext', smalltalk.Object, [], 'Canvas');
smalltalk.addMethod(
'_fillStyle_',
smalltalk.method({
selector: 'fillStyle:',
category: 'drawing paths',
fn: function (aString) {
    var self = this;
    (function () {self.fillStyle = String(aString);}());
    return self;
},
source: unescape('fillStyle%3A%20aString%0A%09%7B%27self.fillStyle%20%3D%20String%28aString%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_beginPath',
smalltalk.method({
selector: 'beginPath',
category: 'drawing paths',
fn: function () {
    var self = this;
    (function () {self.beginPath();}());
    return self;
},
source: unescape('beginPath%0A%09%7B%27self.beginPath%28%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_closePath',
smalltalk.method({
selector: 'closePath',
category: 'drawing paths',
fn: function () {
    var self = this;
    (function () {self.closePath();}());
    return self;
},
source: unescape('closePath%0A%09%7B%27self.closePath%28%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_fill',
smalltalk.method({
selector: 'fill',
category: 'drawing paths',
fn: function () {
    var self = this;
    (function () {self.fill();}());
    return self;
},
source: unescape('fill%0A%09%7B%27self.fill%28%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_stroke',
smalltalk.method({
selector: 'stroke',
category: 'drawing paths',
fn: function () {
    var self = this;
    (function () {self.stroke();}());
    return self;
},
source: unescape('stroke%0A%09%7B%27self.stroke%28%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_moveTo_',
smalltalk.method({
selector: 'moveTo:',
category: 'drawing paths',
fn: function (aPoint) {
    var self = this;
    (function () {self.moveTo(aPoint._x(), aPoint._y());}());
    return self;
},
source: unescape('moveTo%3A%20aPoint%0A%09%7B%27self.moveTo%28aPoint._x%28%29%2C%20aPoint._y%28%29%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_lineTo_',
smalltalk.method({
selector: 'lineTo:',
category: 'drawing paths',
fn: function (aPoint) {
    var self = this;
    (function () {self.lineTo(aPoint._x(), aPoint._y());}());
    return self;
},
source: unescape('lineTo%3A%20aPoint%0A%09%7B%27self.lineTo%28aPoint._x%28%29%2C%20aPoint._y%28%29%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_arcTo_radius_startAngle_endAngle_anticlockwise_',
smalltalk.method({
selector: 'arcTo:radius:startAngle:endAngle:anticlockwise:',
category: 'drawing arcs',
fn: function (aPoint, aNumber, aNumber2, aNumber3, aBoolean) {
    var self = this;
    (function () {self.arc(aPoint._x(), aPoint._y(), aNumber, aNumber2, aNumber3, aBoolean);}());
    return self;
},
source: unescape('arcTo%3A%20aPoint%20radius%3A%20aNumber%20startAngle%3A%20aNumber2%20endAngle%3A%20aNumber3%20anticlockwise%3A%20aBoolean%0A%09%7B%27self.arc%28aPoint._x%28%29%2C%20aPoint._y%28%29%2C%20aNumber%2C%20aNumber2%2C%20aNumber3%2C%20aBoolean%29%27%7D%20')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_arcTo_radius_',
smalltalk.method({
selector: 'arcTo:radius:',
category: 'drawing arcs',
fn: function (aPoint, aNumber) {
    var self = this;
    self._arcTo_radius_startAngle_endAngle_anticlockwise_(aPoint, aNumber, 0, smalltalk.Number._pi().__star(2), false);
    return self;
},
source: unescape('arcTo%3A%20aPoint%20radius%3A%20aNumber%0A%09self%20arcTo%3A%20aPoint%20radius%3A%20aNumber%20startAngle%3A%200%20endAngle%3A%20Number%20pi%20*%202%20anticlockwise%3A%20false')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_fillRectFrom_to_',
smalltalk.method({
selector: 'fillRectFrom:to:',
category: 'drawing rectangles',
fn: function (aPoint, anotherPoint) {
    var self = this;
    (function () {self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());}());
    return self;
},
source: unescape('fillRectFrom%3A%20aPoint%20to%3A%20anotherPoint%0A%09%7B%27self.fillRect%28aPoint._x%28%29%2C%20aPoint._y%28%29%2C%20anotherPoint._x%28%29%2C%20anotherPoint._y%28%29%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_strokeRectFrom_to_',
smalltalk.method({
selector: 'strokeRectFrom:to:',
category: 'drawing rectangles',
fn: function (aPoint, anotherPoint) {
    var self = this;
    (function () {self.strokeRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());}());
    return self;
},
source: unescape('strokeRectFrom%3A%20aPoint%20to%3A%20anotherPoint%0A%09%7B%27self.strokeRect%28aPoint._x%28%29%2C%20aPoint._y%28%29%2C%20anotherPoint._x%28%29%2C%20anotherPoint._y%28%29%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_clearRectFrom_to_',
smalltalk.method({
selector: 'clearRectFrom:to:',
category: 'drawing rectangles',
fn: function (aPoint, anotherPoint) {
    var self = this;
    (function () {self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y());}());
    return self;
},
source: unescape('clearRectFrom%3A%20aPoint%20to%3A%20anotherPoint%0A%09%7B%27self.fillRect%28aPoint._x%28%29%2C%20aPoint._y%28%29%2C%20anotherPoint._x%28%29%2C%20anotherPoint._y%28%29%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_strokeStyle_',
smalltalk.method({
selector: 'strokeStyle:',
category: 'drawing paths',
fn: function (aString) {
    var self = this;
    (function () {self.strokeStyle = String(aString);}());
    return self;
},
source: unescape('strokeStyle%3A%20aString%0A%09%7B%27self.strokeStyle%20%3D%20String%28aString%29%27%7D')}),
smalltalk.CanvasRenderingContext);

smalltalk.addMethod(
'_lineWidth_',
smalltalk.method({
selector: 'lineWidth:',
category: 'drawing paths',
fn: function (aNumber) {
    var self = this;
    (function () {self.lineWidth = aNumber;}());
    return self;
},
source: unescape('lineWidth%3A%20aNumber%0A%09%7B%27self.lineWidth%20%3D%20aNumber%27%7D')}),
smalltalk.CanvasRenderingContext);


smalltalk.addMethod(
'_tagBrush_',
smalltalk.method({
selector: 'tagBrush:',
category: 'instance creation',
fn: function (aTagBrush) {
    var self = this;
    return function () {return aTagBrush._element().getContext("2d");}();
    return self;
},
source: unescape('tagBrush%3A%20aTagBrush%0A%09%5E%7B%27return%20aTagBrush._element%28%29.getContext%28%27%272d%27%27%29%27%7D')}),
smalltalk.CanvasRenderingContext.klass);


smalltalk.addClass('HTMLCanvas', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
'_root_',
smalltalk.method({
selector: 'root:',
category: 'accessing',
fn: function (aTagBrush) {
    var self = this;
    self['@root'] = aTagBrush;
    return self;
},
source: unescape('root%3A%20aTagBrush%0A%20%20%20%20root%20%3A%3D%20aTagBrush%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_root',
smalltalk.method({
selector: 'root',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@root'];
    return self;
},
source: unescape('root%0A%20%20%20%20%5Eroot%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function () {
    var self = this;
    self.klass.superclass.fn.prototype._initialize.apply(self, []);
    self['@root'] = smalltalk.TagBrush._fromString_canvas_("div", self);
    return self;
},
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20root%20%3A%3D%20TagBrush%20fromString%3A%20%27div%27%20canvas%3A%20self%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    return self._root()._with_(anObject);
    return self;
},
source: unescape('with%3A%20anObject%0A%20%20%20%20%5Eself%20root%20with%3A%20anObject%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_newTag_',
smalltalk.method({
selector: 'newTag:',
category: 'tags',
fn: function (aString) {
    var self = this;
    return smalltalk.TagBrush._fromString_canvas_(aString, self);
    return self;
},
source: unescape('newTag%3A%20aString%0A%20%20%20%20%5ETagBrush%20fromString%3A%20aString%20canvas%3A%20self%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tag_',
smalltalk.method({
selector: 'tag:',
category: 'tags',
fn: function (aString) {
    var self = this;
    return self['@root']._addBrush_(self._newTag_(aString));
    return self;
},
source: unescape('tag%3A%20aString%0A%20%20%20%20%5Eroot%20addBrush%3A%20%28self%20newTag%3A%20aString%29%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h1',
smalltalk.method({
selector: 'h1',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h1");
    return self;
},
source: unescape('h1%0A%20%20%20%20%5Eself%20tag%3A%20%27h1%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h2',
smalltalk.method({
selector: 'h2',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h2");
    return self;
},
source: unescape('h2%0A%20%20%20%20%5Eself%20tag%3A%20%27h2%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h3',
smalltalk.method({
selector: 'h3',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h3");
    return self;
},
source: unescape('h3%0A%20%20%20%20%5Eself%20tag%3A%20%27h3%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h4',
smalltalk.method({
selector: 'h4',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h4");
    return self;
},
source: unescape('h4%0A%20%20%20%20%5Eself%20tag%3A%20%27h4%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h5',
smalltalk.method({
selector: 'h5',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h5");
    return self;
},
source: unescape('h5%0A%20%20%20%20%5Eself%20tag%3A%20%27h5%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_h6',
smalltalk.method({
selector: 'h6',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("h6");
    return self;
},
source: unescape('h6%0A%20%20%20%20%5Eself%20tag%3A%20%27h6%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_p',
smalltalk.method({
selector: 'p',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("p");
    return self;
},
source: unescape('p%0A%20%20%20%20%5Eself%20tag%3A%20%27p%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_div',
smalltalk.method({
selector: 'div',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("div");
    return self;
},
source: unescape('div%0A%20%20%20%20%5Eself%20tag%3A%20%27div%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_span',
smalltalk.method({
selector: 'span',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("span");
    return self;
},
source: unescape('span%0A%20%20%20%20%5Eself%20tag%3A%20%27span%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_img',
smalltalk.method({
selector: 'img',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("img");
    return self;
},
source: unescape('img%0A%20%20%20%20%5Eself%20tag%3A%20%27img%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ul',
smalltalk.method({
selector: 'ul',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("ul");
    return self;
},
source: unescape('ul%0A%20%20%20%20%5Eself%20tag%3A%20%27ul%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_ol',
smalltalk.method({
selector: 'ol',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("ol");
    return self;
},
source: unescape('ol%0A%20%20%20%20%5Eself%20tag%3A%20%27ol%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_li',
smalltalk.method({
selector: 'li',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("li");
    return self;
},
source: unescape('li%0A%20%20%20%20%5Eself%20tag%3A%20%27li%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_table',
smalltalk.method({
selector: 'table',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("table");
    return self;
},
source: unescape('table%0A%20%20%20%20%5Eself%20tag%3A%20%27table%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_tr',
smalltalk.method({
selector: 'tr',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("tr");
    return self;
},
source: unescape('tr%0A%20%20%20%20%5Eself%20tag%3A%20%27tr%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_td',
smalltalk.method({
selector: 'td',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("td");
    return self;
},
source: unescape('td%20%0A%20%20%20%20%5Eself%20tag%3A%20%27td%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_th',
smalltalk.method({
selector: 'th',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("th");
    return self;
},
source: unescape('th%0A%20%20%20%20%5Eself%20tag%3A%20%27th%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_form',
smalltalk.method({
selector: 'form',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("form");
    return self;
},
source: unescape('form%0A%20%20%20%20%5Eself%20tag%3A%20%27form%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_input',
smalltalk.method({
selector: 'input',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("input");
    return self;
},
source: unescape('input%0A%20%20%20%20%5Eself%20tag%3A%20%27input%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_button',
smalltalk.method({
selector: 'button',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("button");
    return self;
},
source: unescape('button%0A%20%20%20%20%5Eself%20tag%3A%20%27button%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_select',
smalltalk.method({
selector: 'select',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("select");
    return self;
},
source: unescape('select%0A%20%20%20%20%5Eself%20tag%3A%20%27select%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_option',
smalltalk.method({
selector: 'option',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("option");
    return self;
},
source: unescape('option%0A%20%20%20%20%5Eself%20tag%3A%20%27option%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_textarea',
smalltalk.method({
selector: 'textarea',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("textarea");
    return self;
},
source: unescape('textarea%0A%20%20%20%20%5Eself%20tag%3A%20%27textarea%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_a',
smalltalk.method({
selector: 'a',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("a");
    return self;
},
source: unescape('a%0A%20%20%20%20%5Eself%20tag%3A%20%27a%27%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: '*JQuery',
fn: function (aJQuery) {
    var self = this;
    aJQuery._appendElement_(self['@root']._element());
    return self;
},
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20appendElement%3A%20root%20element%0A')}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
'_canvas',
smalltalk.method({
selector: 'canvas',
category: 'tags',
fn: function () {
    var self = this;
    return self._tag_("canvas");
    return self;
},
source: unescape('canvas%0A%09%5Eself%20tag%3A%20%27canvas%27%0A')}),
smalltalk.HTMLCanvas);



smalltalk.addClass('TagBrush', smalltalk.Object, ['canvas', 'element'], 'Canvas');
smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    self._asJQuery()._empty();
    self._append_(anObject);
    return self;
},
source: unescape('contents%3A%20anObject%0A%20%20%20%20self%20asJQuery%20empty.%0A%20%20%20%20self%20append%3A%20anObject%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_addBrush_',
smalltalk.method({
selector: 'addBrush:',
category: 'adding',
fn: function (aTagBrush) {
    var self = this;
    self._appendChild_(aTagBrush._element());
    return aTagBrush;
    return self;
},
source: unescape('addBrush%3A%20aTagBrush%0A%20%20%20%20self%20appendChild%3A%20aTagBrush%20element.%0A%20%20%20%20%5EaTagBrush%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_with_',
smalltalk.method({
selector: 'with:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    self._append_(anObject);
    return self;
},
source: unescape('with%3A%20anObject%0A%20%20%20%20self%20append%3A%20anObject%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_append_',
smalltalk.method({
selector: 'append:',
category: 'adding',
fn: function (anObject) {
    var self = this;
    anObject._appendToBrush_(self);
    return self;
},
source: unescape('append%3A%20anObject%0A%20%20%20%20anObject%20appendToBrush%3A%20self%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: 'adding',
fn: function (aTagBrush) {
    var self = this;
    aTagBrush._addBrush_(self);
    return self;
},
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20aTagBrush%20addBrush%3A%20self%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendBlock_',
smalltalk.method({
selector: 'appendBlock:',
category: 'adding',
fn: function (aBlock) {
    var self = this;
    var root = nil;
    root = canvas._root();
    canvas._root_(self);
    aBlock._value_(canvas);
    canvas._root_(root);
    return self;
},
source: unescape('appendBlock%3A%20aBlock%0A%20%20%20%20%7C%20root%20%7C%0A%20%20%20%20root%20%3A%3D%20canvas%20root.%0A%20%20%20%20canvas%20root%3A%20self.%0A%20%20%20%20aBlock%20value%3A%20canvas.%0A%20%20%20%20canvas%20root%3A%20root%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendChild_',
smalltalk.method({
selector: 'appendChild:',
category: 'adding',
fn: function (anElement) {
    var self = this;
    (function () {self['@element'].appendChild(anElement);}());
    return self;
},
source: unescape('appendChild%3A%20anElement%0A%20%20%20%20%7B%27self%5B%27%27@element%27%27%5D.appendChild%28anElement%29%27%7D%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_appendString_',
smalltalk.method({
selector: 'appendString:',
category: 'adding',
fn: function (aString) {
    var self = this;
    self._appendChild_(self._createTextNodeFor_(aString));
    return self;
},
source: unescape('appendString%3A%20aString%0A%20%20%20%20self%20appendChild%3A%20%28self%20createTextNodeFor%3A%20aString%29%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
category: 'attributes',
fn: function (aString, aValue) {
    var self = this;
    (function () {self['@element'].setAttribute(aString, aValue);}());
    return self;
},
source: unescape('at%3A%20aString%20put%3A%20aValue%0A%20%20%20%20%7B%27self%5B%27%27@element%27%27%5D.setAttribute%28aString%2C%20aValue%29%27%7D%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_removeAt_',
smalltalk.method({
selector: 'removeAt:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    (function () {self['@element'].removeAttribute(aString);}());
    return self;
},
source: unescape('removeAt%3A%20aString%0A%20%20%20%20%7B%27self%5B%27%27@element%27%27%5D.removeAttribute%28aString%29%27%7D%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_class_',
smalltalk.method({
selector: 'class:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("class", aString);
    return self;
},
source: unescape('class%3A%20aString%0A%20%20%20%20self%20at%3A%20%27class%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("id", aString);
    return self;
},
source: unescape('id%3A%20aString%0A%20%20%20%20self%20at%3A%20%27id%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_src_',
smalltalk.method({
selector: 'src:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("src", aString);
    return self;
},
source: unescape('src%3A%20aString%0A%20%20%20%20self%20%20at%3A%20%27src%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_href_',
smalltalk.method({
selector: 'href:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("href", aString);
    return self;
},
source: unescape('href%3A%20aString%0A%20%20%20%20self%20at%3A%20%27href%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_title_',
smalltalk.method({
selector: 'title:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("title", aString);
    return self;
},
source: unescape('title%3A%20aString%0A%20%20%20%20self%20at%3A%20%27title%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_style_',
smalltalk.method({
selector: 'style:',
category: 'attributes',
fn: function (aString) {
    var self = this;
    self._at_put_("style", aString);
    return self;
},
source: unescape('style%3A%20aString%0A%20%20%20%20self%20at%3A%20%27style%27%20put%3A%20aString%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_initializeFromString_canvas_',
smalltalk.method({
selector: 'initializeFromString:canvas:',
category: 'initialization',
fn: function (aString, aCanvas) {
    var self = this;
    self['@element'] = self._createElementFor_(aString);
    canvas = aCanvas;
    return self;
},
source: unescape('initializeFromString%3A%20aString%20canvas%3A%20aCanvas%0A%20%20%20%20element%20%3A%3D%20self%20createElementFor%3A%20aString.%0A%20%20%20%20canvas%20%3A%3D%20aCanvas%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_element',
smalltalk.method({
selector: 'element',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@element'];
    return self;
},
source: unescape('element%0A%20%20%20%20%5Eelement%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQuery',
smalltalk.method({
selector: 'asJQuery',
category: 'converting',
fn: function () {
    var self = this;
    return function () {return smalltalk.JQuery._from_(jQuery(self['@element']));}();
    return self;
},
source: unescape('asJQuery%0A%20%20%20%20%5E%7B%27return%20smalltalk.JQuery._from_%28jQuery%28self%5B%27%27@element%27%27%5D%29%29%27%7D%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_asJQueryDo_',
smalltalk.method({
selector: 'asJQueryDo:',
category: 'converting',
fn: function (aBlock) {
    var self = this;
    aBlock._value_(self._asJQuery());
    return self;
},
source: unescape('asJQueryDo%3A%20aBlock%0A%20%20%20%20aBlock%20value%3A%20self%20asJQuery%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyDown_',
smalltalk.method({
selector: 'onKeyDown:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("keydown", aBlock);
    return self;
},
source: unescape('onKeyDown%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keydown%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyPress_',
smalltalk.method({
selector: 'onKeyPress:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("keypress", aBlock);
    return self;
},
source: unescape('onKeyPress%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keypress%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onKeyUp_',
smalltalk.method({
selector: 'onKeyUp:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("keyup", aBlock);
    return self;
},
source: unescape('onKeyUp%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27keyup%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onFocus_',
smalltalk.method({
selector: 'onFocus:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("focus", aBlock);
    return self;
},
source: unescape('onFocus%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27focus%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onBlur_',
smalltalk.method({
selector: 'onBlur:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("blur", aBlock);
    return self;
},
source: unescape('onBlur%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27blur%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onChange_',
smalltalk.method({
selector: 'onChange:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("change", aBlock);
    return self;
},
source: unescape('onChange%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27change%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_onClick_',
smalltalk.method({
selector: 'onClick:',
category: 'events',
fn: function (aBlock) {
    var self = this;
    self._asJQuery()._on_do_("click", aBlock);
    return self;
},
source: unescape('onClick%3A%20aBlock%0A%20%20%20%20self%20asJQuery%20on%3A%20%27click%27%20do%3A%20aBlock%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createElementFor_',
smalltalk.method({
selector: 'createElementFor:',
category: 'private',
fn: function (aString) {
    var self = this;
    return function () {return document.createElement(String(aString));}();
    return self;
},
source: unescape('createElementFor%3A%20aString%0A%20%20%20%20%5E%7B%27return%20document.createElement%28String%28aString%29%29%27%7D%0A')}),
smalltalk.TagBrush);

smalltalk.addMethod(
'_createTextNodeFor_',
smalltalk.method({
selector: 'createTextNodeFor:',
category: 'private',
fn: function (aString) {
    var self = this;
    return function () {return document.createTextNode(String(aString));}();
    return self;
},
source: unescape('createTextNodeFor%3A%20aString%0A%20%20%20%20%5E%7B%27return%20document.createTextNode%28String%28aString%29%29%27%7D%0A')}),
smalltalk.TagBrush);


smalltalk.addMethod(
'_fromString_canvas_',
smalltalk.method({
selector: 'fromString:canvas:',
category: 'instance creation',
fn: function (aString, aCanvas) {
    var self = this;
    return function ($rec) {$rec._initializeFromString_canvas_(aString, aCanvas);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('fromString%3A%20aString%20canvas%3A%20aCanvas%0A%20%20%20%20%5Eself%20new%0A%09initializeFromString%3A%20aString%20canvas%3A%20aCanvas%3B%0A%09yourself%0A')}),
smalltalk.TagBrush.klass);


smalltalk.addClass('Widget', smalltalk.Object, ['root'], 'Canvas');
smalltalk.addMethod(
'_root',
smalltalk.method({
selector: 'root',
category: 'accessing',
fn: function () {
    var self = this;
    return self['@root'];
    return self;
},
source: unescape('root%0A%20%20%20%20%5Eroot%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToBrush_',
smalltalk.method({
selector: 'appendToBrush:',
category: 'adding',
fn: function (aTagBrush) {
    var self = this;
    self._appendToJQuery_(aTagBrush._asJQuery());
    return self;
},
source: unescape('appendToBrush%3A%20aTagBrush%0A%20%20%20%20self%20appendToJQuery%3A%20aTagBrush%20asJQuery%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: 'adding',
fn: function (aJQuery) {
    var self = this;
    self._render();
    aJQuery._append_(self._root()._asJQuery());
    return self;
},
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20self%20render.%0A%20%20%20%20aJQuery%20append%3A%20self%20root%20asJQuery%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_alert_',
smalltalk.method({
selector: 'alert:',
category: 'actions',
fn: function (aString) {
    var self = this;
    (function () {alert(aString);}());
    return self;
},
source: unescape('alert%3A%20aString%0A%20%20%20%20%7B%27alert%28aString%29%27%7D%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_confirm_',
smalltalk.method({
selector: 'confirm:',
category: 'actions',
fn: function (aString) {
    var self = this;
    return function () {return window.confirm(aString);}();
    return self;
},
source: unescape('confirm%3A%20aString%0A%20%20%20%20%5E%7B%27return%20window.confirm%28aString%29%27%7D%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_',
smalltalk.method({
selector: 'prompt:',
category: 'actions',
fn: function (aString) {
    var self = this;
    return self._prompt_default_(aString, "");
    return self;
},
source: unescape('prompt%3A%20aString%0A%20%20%20%20%5Eself%20prompt%3A%20aString%20default%3A%20%27%27%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_prompt_default_',
smalltalk.method({
selector: 'prompt:default:',
category: 'actions',
fn: function (aString, anotherString) {
    var self = this;
    return function () {return window.prompt(aString, anotherString);}();
    return self;
},
source: unescape('prompt%3A%20aString%20default%3A%20anotherString%0A%20%20%20%20%5E%7B%27return%20window.prompt%28aString%2C%20anotherString%29%27%7D%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
category: 'actions',
fn: function () {
    var self = this;
    var canvas = nil;
    canvas = smalltalk.HTMLCanvas._new();
    canvas._root_(self._root());
    self._root()._asJQuery()._empty();
    self._renderOn_(canvas);
    return self;
},
source: unescape('update%0A%20%20%20%20%7C%20canvas%20%7C%0A%20%20%20%20canvas%20%3A%3D%20HTMLCanvas%20new.%0A%20%20%20%20canvas%20root%3A%20self%20root.%0A%20%20%20%20self%20root%20asJQuery%20empty.%0A%20%20%20%20self%20renderOn%3A%20canvas%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_render',
smalltalk.method({
selector: 'render',
category: 'rendering',
fn: function () {
    var self = this;
    var canvas = nil;
    canvas = smalltalk.HTMLCanvas._new();
    self['@root'] = canvas._root();
    self._renderOn_(canvas);
    return self;
},
source: unescape('render%0A%20%20%20%20%7C%20canvas%20%7C%0A%20%20%20%20canvas%20%3A%3D%20HTMLCanvas%20new.%0A%20%20%20%20root%20%3A%3D%20canvas%20root.%0A%20%20%20%20self%20renderOn%3A%20canvas%0A')}),
smalltalk.Widget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
category: 'rendering',
fn: function (html) {
    var self = this;
    return self;
},
source: unescape('renderOn%3A%20html%0A%20%20%20%20self%0A')}),
smalltalk.Widget);



smalltalk.addClass('CanvasBrush', smalltalk.TagBrush, [], 'Canvas');
smalltalk.addMethod(
'_createElement',
smalltalk.method({
selector: 'createElement',
category: 'private',
fn: function () {
    var self = this;
    return function () {return document.createElement("canvas");}();
    return self;
},
source: unescape('createElement%0A%20%20%20%20%5E%7B%27return%20document.createElement%28%27%27canvas%27%27%29%27%7D%0A')}),
smalltalk.CanvasBrush);

smalltalk.addMethod(
'_initializeWithCanvas_',
smalltalk.method({
selector: 'initializeWithCanvas:',
category: 'initialization',
fn: function (aCanvas) {
    var self = this;
    canvas = aCanvas;
    return self;
},
source: unescape('initializeWithCanvas%3A%20aCanvas%0A%09canvas%20%3A%3D%20aCanvas')}),
smalltalk.CanvasBrush);


smalltalk.addMethod(
'_canvas_',
smalltalk.method({
selector: 'canvas:',
category: 'instance creation',
fn: function (aCanvas) {
    var self = this;
    return function ($rec) {$rec._initializeWithCanvas_(aCanvas);return $rec._yourself();}(self._new());
    return self;
},
source: unescape('canvas%3A%20aCanvas%0A%09%5Eself%20new%0A%09%09initializeWithCanvas%3A%20aCanvas%3B%0A%09%09yourself')}),
smalltalk.CanvasBrush.klass);


