smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
unescape('_increase'),
smalltalk.method({
selector: unescape('increase'),
category: 'actions',
fn: function (){
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: unescape('increase%0A%20%20%20%20count%20%3A%3D%20count%20+%201.%0A%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D'),
messageSends: [unescape("+"), "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_decrease'),
smalltalk.method({
selector: unescape('decrease'),
category: 'actions',
fn: function (){
var self=this;
self['@count']=((($receiver = self['@count']).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]));
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);})]);
return self;},
args: [],
source: unescape('decrease%0A%20%20%20%20count%20%3A%3D%20count%20-%201.%0A%20%20%20%20header%20contents%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20count%20asString%5D'),
messageSends: [unescape("-"), "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@count']=(0);
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20count%20%3A%3D%200'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@header']=(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@count'], "_asString", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_h1", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%20%20%20%20header%20%3A%3D%20html%20h1%20%0A%09with%3A%20count%20asString%3B%0A%09yourself.%0A%20%20%20%20html%20button%0A%09with%3A%20%27++%27%3B%0A%09onClick%3A%20%5Bself%20increase%5D.%0A%20%20%20%20html%20button%0A%09with%3A%20%27--%27%3B%0A%09onClick%3A%20%5Bself%20decrease%5D'),
messageSends: ["with:", "asString", "yourself", "h1", "onClick:", "increase", "button", "decrease"],
referencedClasses: []
}),
smalltalk.Counter);



smalltalk.addClass('Tetris', smalltalk.Widget, ['renderingContext', 'timer', 'speed', 'score', 'rows', 'movingPiece'], 'Examples');
smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_width", []);
return self;},
args: [],
source: unescape('width%0A%09%5Eself%20class%20width'),
messageSends: ["width", "class"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_height", []);
return self;},
args: [],
source: unescape('height%0A%09%5Eself%20class%20height'),
messageSends: ["height", "class"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_squares'),
smalltalk.method({
selector: unescape('squares'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []);
return self;},
args: [],
source: unescape('squares%0A%09%5Eself%20class%20squares'),
messageSends: ["squares", "class"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_gluePiece_'),
smalltalk.method({
selector: unescape('gluePiece%3A'),
category: 'accessing',
fn: function (aPiece){
var self=this;
smalltalk.send(aPiece, "_glueOn_", [self]);
return self;},
args: ["aPiece"],
source: unescape('gluePiece%3A%20aPiece%0A%09aPiece%20glueOn%3A%20self'),
messageSends: ["glueOn:"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_rows'),
smalltalk.method({
selector: unescape('rows'),
category: 'accessing',
fn: function (){
var self=this;
return self['@rows'];
return self;},
args: [],
source: unescape('rows%0A%09%22An%20array%20of%20rows.%20Each%20row%20is%20a%20collection%20of%20points.%22%0A%09%5Erows'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_addRow_'),
smalltalk.method({
selector: unescape('addRow%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
smalltalk.send(smalltalk.send(self, "_rows", []), "_add_", [aCollection]);
return self;},
args: ["aCollection"],
source: unescape('addRow%3A%20aCollection%0A%09self%20rows%20add%3A%20aCollection'),
messageSends: ["add:", "rows"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_startNewGame'),
smalltalk.method({
selector: unescape('startNewGame'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_newGame", []);
(($receiver = self['@timer']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@timer'], "_clearInterval", []);})() : nil;
self['@timer']=smalltalk.send((function(){return smalltalk.send(self, "_nextStep", []);}), "_valueWithInterval_", [self['@speed']]);
return self;},
args: [],
source: unescape('startNewGame%0A%09self%20newGame.%0A%09timer%20ifNotNil%3A%20%5Btimer%20clearInterval%5D.%0A%09timer%20%3A%3D%20%5Bself%20nextStep%5D%20valueWithInterval%3A%20speed'),
messageSends: ["newGame", "ifNotNil:", "clearInterval", "valueWithInterval:", "nextStep"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_nextStep'),
smalltalk.method({
selector: unescape('nextStep'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@movingPiece']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_newPiece", []);})() : $receiver;
((($receiver = smalltalk.send(self['@movingPiece'], "_canMoveIn_", [self])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@movingPiece'], "_position_", [((($receiver = smalltalk.send(self['@movingPiece'], "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((0), "__at", [(1)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((0), "__at", [(1)])]))]);})() : (function(){return smalltalk.send(self, "_newPiece", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@movingPiece'], "_position_", [((($receiver = smalltalk.send(self['@movingPiece'], "_position", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((0), "__at", [(1)]) : smalltalk.send($receiver, "__plus", [smalltalk.send((0), "__at", [(1)])]))]);}), (function(){return smalltalk.send(self, "_newPiece", []);})]));
smalltalk.send(self, "_redraw", []);
return self;},
args: [],
source: unescape('nextStep%0A%09movingPiece%20ifNil%3A%20%5Bself%20newPiece%5D.%0A%09%28movingPiece%20canMoveIn%3A%20self%29%0A%09%09ifTrue%3A%20%5BmovingPiece%20position%3A%20movingPiece%20position%20+%20%280@1%29%5D%0A%09%09ifFalse%3A%20%5Bself%20newPiece%5D.%0A%09self%20redraw'),
messageSends: ["ifNil:", "newPiece", "ifTrue:ifFalse:", "canMoveIn:", "position:", unescape("+"), "position", unescape("@"), "redraw"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_redraw'),
smalltalk.method({
selector: unescape('redraw'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@renderingContext'], "_clearRect_y_to_y_", [(0), smalltalk.send(self, "_width", []), (0), smalltalk.send(self, "_height", [])]);
(function($rec){smalltalk.send($rec, "_drawMap", []);return smalltalk.send($rec, "_drawPiece", []);})(self);
return self;},
args: [],
source: unescape('redraw%0A%09renderingContext%20clearRect%3A%200%20y%3A%20self%20width%20to%3A%200%20y%3A%20self%20height.%0A%09self%20%0A%09%09drawMap%3B%0A%09%09drawPiece'),
messageSends: ["clearRect:y:to:y:", "width", "height", "drawMap", "drawPiece"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_drawMap'),
smalltalk.method({
selector: unescape('drawMap'),
category: 'actions',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_fillStyle_", [unescape("%23fafafa")]);return smalltalk.send($rec, "_fillRect_y_to_y_", [(0), (0), smalltalk.send(self, "_width", []), smalltalk.send(self, "_height", [])]);})(self['@renderingContext']);
(function($rec){smalltalk.send($rec, "_lineWidth_", [(0.5)]);return smalltalk.send($rec, "_strokeStyle_", [unescape("%23999")]);})(self['@renderingContext']);
smalltalk.send((0), "_to_do_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []), "_x", []), (function(each){var x=nil;
x=((($receiver = each).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", [])]));return smalltalk.send(self, "_drawLineFrom_to_", [smalltalk.send(x, "__at", [(0)]), smalltalk.send(x, "__at", [smalltalk.send(self, "_height", [])])]);})]);
smalltalk.send((0), "_to_do_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_squares", []), "_y", []), (function(each){var y=nil;
y=((($receiver = each).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_class", []), "_squareSize", [])]));return smalltalk.send(self, "_drawLineFrom_to_", [smalltalk.send((0), "__at", [y]), smalltalk.send(smalltalk.send(self, "_width", []), "__at", [y])]);})]);
return self;},
args: [],
source: unescape('drawMap%0A%09renderingContext%20%0A%09%09fillStyle%3A%20%27%23fafafa%27%3B%0A%09%09fillRect%3A%200%20y%3A%200%20to%3A%20self%20width%20y%3A%20self%20height.%0A%09renderingContext%20%0A%09%09lineWidth%3A%200.5%3B%0A%09%09strokeStyle%3A%20%27%23999%27.%0A%090%20to%3A%20self%20class%20squares%20x%20do%3A%20%5B%3Aeach%20%7C%20%7C%20x%20%7C%0A%09%09x%20%3A%3D%20each%20*%20self%20class%20squareSize.%0A%09%09self%20drawLineFrom%3A%20x@0%20to%3A%20x@self%20height%5D.%0A%090%20to%3A%20self%20class%20squares%20y%20do%3A%20%5B%3Aeach%20%7C%20%7C%20y%20%7C%0A%09%09y%20%3A%3D%20each%20*%20self%20class%20squareSize.%0A%09%09self%20drawLineFrom%3A%200@y%20to%3A%20self%20width@y%5D.'),
messageSends: ["fillStyle:", "fillRect:y:to:y:", "width", "height", "lineWidth:", "strokeStyle:", "to:do:", "x", "squares", "class", unescape("*"), "squareSize", "drawLineFrom:to:", unescape("@"), "y"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_drawLineFrom_to_'),
smalltalk.method({
selector: unescape('drawLineFrom%3Ato%3A'),
category: 'actions',
fn: function (aPoint, anotherPoint){
var self=this;
(function($rec){smalltalk.send($rec, "_beginPath", []);smalltalk.send($rec, "_moveTo_y_", [smalltalk.send(aPoint, "_x", []), smalltalk.send(aPoint, "_y", [])]);smalltalk.send($rec, "_lineTo_y_", [smalltalk.send(anotherPoint, "_x", []), smalltalk.send(anotherPoint, "_y", [])]);return smalltalk.send($rec, "_stroke", []);})(self['@renderingContext']);
return self;},
args: ["aPoint", "anotherPoint"],
source: unescape('drawLineFrom%3A%20aPoint%20to%3A%20anotherPoint%0A%09renderingContext%20%0A%09%09beginPath%3B%0A%09%09moveTo%3A%20aPoint%20x%20y%3A%20aPoint%20y%3B%0A%09%09lineTo%3A%20anotherPoint%20x%20y%3A%20anotherPoint%20y%3B%0A%09%09stroke'),
messageSends: ["beginPath", "moveTo:y:", "x", "y", "lineTo:y:", "stroke"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_newGame'),
smalltalk.method({
selector: unescape('newGame'),
category: 'actions',
fn: function (){
var self=this;
self['@rows']=[];
self['@movingPiece']=nil;
self['@speed']=(200);
self['@score']=(0);
return self;},
args: [],
source: unescape('newGame%0A%09rows%20%3A%3D%20%23%28%29.%0A%09movingPiece%20%3A%3D%20nil.%0A%09speed%20%3A%3D%20200.%0A%09score%20%3A%3D%200'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_newPiece'),
smalltalk.method({
selector: unescape('newPiece'),
category: 'actions',
fn: function (){
var self=this;
self['@movingPiece']=smalltalk.send((smalltalk.TetrisPiece || TetrisPiece), "_atRandom", []);
return self;},
args: [],
source: unescape('newPiece%0A%09movingPiece%20%3A%3D%20TetrisPiece%20atRandom'),
messageSends: ["atRandom"],
referencedClasses: ["TetrisPiece"]
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_drawRows'),
smalltalk.method({
selector: unescape('drawRows'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_rows", []), "_do_", [(function(each){return nil;})]);
(($receiver = self['@movingPiece']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@movingPiece'], "_drawOn_", [self['@renderingContext']]);})() : nil;
return self;},
args: [],
source: unescape('drawRows%0A%09self%20rows%20do%3A%20%5B%3Aeach%20%7C%5D.%0A%09movingPiece%20ifNotNil%3A%20%5BmovingPiece%20drawOn%3A%20renderingContext%5D'),
messageSends: ["do:", "rows", "ifNotNil:", "drawOn:"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_drawPiece'),
smalltalk.method({
selector: unescape('drawPiece'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@movingPiece']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@movingPiece'], "_drawOn_", [self['@renderingContext']]);})() : nil;
return self;},
args: [],
source: unescape('drawPiece%0A%09movingPiece%20ifNotNil%3A%20%5B%0A%09%09movingPiece%20drawOn%3A%20renderingContext%5D'),
messageSends: ["ifNotNil:", "drawOn:"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_newGame", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09self%20newGame'),
messageSends: ["initialize", "newGame"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["tetris"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h3", []), "_with_", ["Tetris"]);smalltalk.send(self, "_renderCanvasOn_", [html]);return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27tetris%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20h3%20with%3A%20%27Tetris%27.%0A%09%09%09self%20renderCanvasOn%3A%20html.%0A%09%09%09self%20renderButtonsOn%3A%20html%5D'),
messageSends: ["class:", "with:", "h3", "renderCanvasOn:", "renderButtonsOn:", "div"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_renderCanvasOn_'),
smalltalk.method({
selector: unescape('renderCanvasOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var canvas=nil;
canvas=smalltalk.send(html, "_canvas", []);
smalltalk.send(canvas, "_at_put_", ["width", smalltalk.send(smalltalk.send(self, "_width", []), "_asString", [])]);
smalltalk.send(canvas, "_at_put_", ["height", smalltalk.send(smalltalk.send(self, "_height", []), "_asString", [])]);
self['@renderingContext']=smalltalk.send(smalltalk.send(canvas, "_element", []), "_getContext_", ["2d"]);
smalltalk.send(self, "_redraw", []);
return self;},
args: ["html"],
source: unescape('renderCanvasOn%3A%20html%0A%09%7C%20canvas%20%7C%0A%09canvas%20%3A%3D%20html%20canvas.%0A%09canvas%20at%3A%20%27width%27%20put%3A%20self%20width%20asString.%0A%09canvas%20at%3A%20%27height%27%20put%3A%20self%20height%20asString.%0A%09renderingContext%20%3A%3D%20canvas%20element%20getContext%3A%20%272d%27.%0A%09self%20redraw'),
messageSends: ["canvas", "at:put:", "asString", "width", "height", "getContext:", "element", "redraw"],
referencedClasses: []
}),
smalltalk.Tetris);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["tetris_buttons"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["New game"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_startNewGame", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", [unescape("play/pause")]);return smalltalk.send($rec, "_onClick_", [(function(){return nil;})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09html%20div%20%0A%09%09class%3A%20%27tetris_buttons%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27New%20game%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20startNewGame%5D.%0A%09%09%09html%20button%0A%09%09%09%09with%3A%20%27play/pause%27%3B%0A%09%09%09%09onClick%3A%20%5B%5D%5D'),
messageSends: ["class:", "with:", "onClick:", "startNewGame", "button", "div"],
referencedClasses: []
}),
smalltalk.Tetris);


smalltalk.addMethod(
unescape('_squareSize'),
smalltalk.method({
selector: unescape('squareSize'),
category: 'accessing',
fn: function (){
var self=this;
return (22);
return self;},
args: [],
source: unescape('squareSize%0A%09%5E22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
unescape('_width'),
smalltalk.method({
selector: unescape('width'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_squareSize", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_squares", []), "_x", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_squares", []), "_x", [])]));
return self;},
args: [],
source: unescape('width%0A%09%5Eself%20squareSize%20*%20%28self%20squares%20x%29'),
messageSends: [unescape("*"), "squareSize", "x", "squares"],
referencedClasses: []
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_squareSize", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(smalltalk.send(self, "_squares", []), "_y", []) : smalltalk.send($receiver, "__star", [smalltalk.send(smalltalk.send(self, "_squares", []), "_y", [])]));
return self;},
args: [],
source: unescape('height%0A%09%5Eself%20squareSize%20*%20%28self%20squares%20y%29'),
messageSends: [unescape("*"), "squareSize", "y", "squares"],
referencedClasses: []
}),
smalltalk.Tetris.klass);

smalltalk.addMethod(
unescape('_squares'),
smalltalk.method({
selector: unescape('squares'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((10), "__at", [(15)]);
return self;},
args: [],
source: unescape('squares%0A%09%5E10@15'),
messageSends: [unescape("@")],
referencedClasses: []
}),
smalltalk.Tetris.klass);


smalltalk.addClass('TetrisPiece', smalltalk.Widget, ['rotation', 'position'], 'Examples');
smalltalk.addMethod(
unescape('_rotation'),
smalltalk.method({
selector: unescape('rotation'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@rotation']) == nil || $receiver == undefined) ? (function(){return self['@rotation']=(1);})() : $receiver;
return self;},
args: [],
source: unescape('rotation%0A%09%5Erotation%20ifNil%3A%20%5Brotation%20%3A%3D%201%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_rotation_'),
smalltalk.method({
selector: unescape('rotation%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
self['@rotation']=aNumber;
return self;},
args: ["aNumber"],
source: unescape('rotation%3A%20aNumber%0A%09rotation%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_position'),
smalltalk.method({
selector: unescape('position'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@position']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_x", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "__at", [(0)]);})() : $receiver;
return self;},
args: [],
source: unescape('position%0A%09%5Eposition%20ifNil%3A%20%5B%28Tetris%20squares%20x%20/%202%29%20-1%20@%200%5D'),
messageSends: ["ifNil:", unescape("@"), unescape("-"), unescape("/"), "x", "squares"],
referencedClasses: ["Tetris"]
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_position_'),
smalltalk.method({
selector: unescape('position%3A'),
category: 'accessing',
fn: function (aPoint){
var self=this;
return self['@position']=aPoint;
return self;},
args: ["aPoint"],
source: unescape('position%3A%20aPoint%0A%09%5Eposition%20%3A%3D%20aPoint'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('bounds%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_color'),
smalltalk.method({
selector: unescape('color'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23afa");
return self;},
args: [],
source: unescape('color%0A%09%5E%27%23afa%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('height%0A%09%5E2'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_drawOn_'),
smalltalk.method({
selector: unescape('drawOn%3A'),
category: 'drawing',
fn: function (aRenderingContext){
var self=this;
smalltalk.send(aRenderingContext, "_fillStyle_", [smalltalk.send(self, "_color", [])]);
smalltalk.send(smalltalk.send(self, "_bounds", []), "_do_", [(function(each){var from=nil;
var to=nil;
from=((($receiver = ((($receiver = each).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_position", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_position", [])]))).klass === smalltalk.Number) ? $receiver *smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", [])]));to=((($receiver = smalltalk.send((1), "__at", [(1)])).klass === smalltalk.Number) ? $receiver *smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send((smalltalk.Tetris || Tetris), "_squareSize", [])]));return (function($rec){smalltalk.send($rec, "_fillRect_y_to_y_", [smalltalk.send(from, "_x", []), smalltalk.send(from, "_y", []), smalltalk.send(to, "_x", []), smalltalk.send(to, "_y", [])]);smalltalk.send($rec, "_strokeStyle_", [unescape("%23999")]);smalltalk.send($rec, "_lineWidth_", [(2)]);return smalltalk.send($rec, "_strokeRect_y_to_y_", [smalltalk.send(from, "_x", []), smalltalk.send(from, "_y", []), smalltalk.send(to, "_x", []), smalltalk.send(to, "_y", [])]);})(aRenderingContext);})]);
return self;},
args: ["aRenderingContext"],
source: unescape('drawOn%3A%20aRenderingContext%0A%09aRenderingContext%20fillStyle%3A%20self%20color.%0A%09self%20bounds%20do%3A%20%5B%3Aeach%20%7C%7C%20from%20to%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20from%20%3A%3D%20each%20+%20self%20position*%20Tetris%20squareSize.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20to%20%3A%3D%201@1%20*%20Tetris%20squareSize.%0A%09%09aRenderingContext%20%0A%09%09%09fillRect%3A%20from%20x%20y%3A%20from%20y%20to%3A%20to%20x%20y%3A%20to%20y%3B%0A%09%09%09strokeStyle%3A%20%27%23999%27%3B%0A%09%09%09lineWidth%3A%202%3B%0A%09%09%09strokeRect%3A%20from%20x%20y%3A%20from%20y%20to%3A%20to%20x%20y%3A%20to%20y%5D'),
messageSends: ["fillStyle:", "color", "do:", "bounds", unescape("*"), unescape("+"), "position", "squareSize", unescape("@"), "fillRect:y:to:y:", "x", "y", "strokeStyle:", "lineWidth:", "strokeRect:y:to:y:"],
referencedClasses: ["Tetris"]
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_canMove'),
smalltalk.method({
selector: unescape('canMove'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_position", []), "_y", [])).klass === smalltalk.Number) ? $receiver <((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])])) : smalltalk.send($receiver, "__lt", [((($receiver = smalltalk.send(smalltalk.send((smalltalk.Tetris || Tetris), "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])]))]));
return self;},
args: [],
source: unescape('canMove%0A%09%5Eself%20position%20y%20%3C%20%28Tetris%20squares%20y%20-%20self%20height%29'),
messageSends: [unescape("%3C"), "y", "position", unescape("-"), "squares", "height"],
referencedClasses: ["Tetris"]
}),
smalltalk.TetrisPiece);

smalltalk.addMethod(
unescape('_canMoveIn_'),
smalltalk.method({
selector: unescape('canMoveIn%3A'),
category: 'testing',
fn: function (aTetris){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_position", []), "_y", [])).klass === smalltalk.Number) ? $receiver <((($receiver = smalltalk.send(smalltalk.send(aTetris, "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])])) : smalltalk.send($receiver, "__lt", [((($receiver = smalltalk.send(smalltalk.send(aTetris, "_squares", []), "_y", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(self, "_height", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(self, "_height", [])]))]));
return self;},
args: ["aTetris"],
source: unescape('canMoveIn%3A%20aTetris%0A%09%5Eself%20position%20y%20%3C%20%28aTetris%20squares%20y%20-%20self%20height%29'),
messageSends: [unescape("%3C"), "y", "position", unescape("-"), "squares", "height"],
referencedClasses: []
}),
smalltalk.TetrisPiece);


smalltalk.addMethod(
unescape('_atRandom'),
smalltalk.method({
selector: unescape('atRandom'),
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_subclasses", []), "_at_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_subclasses", []), "_size", []), "_atRandom", [])]), "_new", []);
return self;},
args: [],
source: unescape('atRandom%0A%09%5E%28self%20subclasses%20at%3A%20self%20subclasses%20size%20atRandom%29%20new'),
messageSends: ["new", "at:", "subclasses", "atRandom", "size"],
referencedClasses: []
}),
smalltalk.TetrisPiece.klass);


smalltalk.addClass('TetrisPieceO', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09yourself'),
messageSends: ["add:", unescape("@"), "yourself", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TetrisPieceO);



smalltalk.addClass('TetrisPieceL', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(2)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%200@2%3B%0A%09%09add%3A%201@2%3B%0A%09%09yourself'),
messageSends: ["add:", unescape("@"), "yourself", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
unescape('_color'),
smalltalk.method({
selector: unescape('color'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23ffa");
return self;},
args: [],
source: unescape('color%0A%09%5E%27%23ffa%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceL);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('height%0A%09%5E3'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceL);



smalltalk.addClass('TetrisPieceJ', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
unescape('_color'),
smalltalk.method({
selector: unescape('color'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23aaf");
return self;},
args: [],
source: unescape('color%0A%09%5E%27%23aaf%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09add%3A%201@2%3B%0A%09%09add%3A%200@2%3B%0A%09%09yourself'),
messageSends: ["add:", unescape("@"), "yourself", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TetrisPieceJ);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('height%0A%09%5E3'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceJ);



smalltalk.addClass('TetrisPieceI', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
unescape('_color'),
smalltalk.method({
selector: unescape('color'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23faa");
return self;},
args: [],
source: unescape('color%0A%09%5E%27%23faa%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(1)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(2)])]);smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(3)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%200@1%3B%0A%09%09add%3A%200@2%3B%0A%09%09add%3A%200@3%3B%0A%09%09yourself'),
messageSends: ["add:", unescape("@"), "yourself", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TetrisPieceI);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return (4);
return self;},
args: [],
source: unescape('height%0A%09%5E4'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceI);



smalltalk.addClass('TetrisPieceT', smalltalk.TetrisPiece, [], 'Examples');
smalltalk.addMethod(
unescape('_bounds'),
smalltalk.method({
selector: unescape('bounds'),
category: 'accessing',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_add_", [smalltalk.send((0), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((2), "__at", [(0)])]);smalltalk.send($rec, "_add_", [smalltalk.send((1), "__at", [(1)])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('bounds%0A%09%5EArray%20new%0A%09%09add%3A%200@0%3B%0A%09%09add%3A%201@0%3B%0A%09%09add%3A%202@0%3B%0A%09%09add%3A%201@1%3B%0A%09%09yourself'),
messageSends: ["add:", unescape("@"), "yourself", "new"],
referencedClasses: ["Array"]
}),
smalltalk.TetrisPieceT);

smalltalk.addMethod(
unescape('_color'),
smalltalk.method({
selector: unescape('color'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%23aaf");
return self;},
args: [],
source: unescape('color%0A%09%5E%27%23aaf%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TetrisPieceT);



