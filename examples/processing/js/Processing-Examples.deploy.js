smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingClock', smalltalk.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function () {
    var self = this;
    var drawBlock;
    drawBlock = function () {var now;var hoursPosition;var minutesPosition;var secondsPosition;smalltalk.send(self['@processing'], "_background_", [224]);now = smalltalk.send(smalltalk.Date || Date, "_new", []);hoursPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_hours", []), "_\\\\", [12]), "__plus", [smalltalk.send(now, "_minutes", [])]), "__slash", [60]), "__slash", [12]);smalltalk.send(self, "_drawArm_lengthScale_weight_", [hoursPosition, 0.5, 5]);minutesPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_minutes", []), "__plus", [smalltalk.send(now, "_seconds", [])]), "__slash", [60]), "__slash", [60]);smalltalk.send(self, "_drawArm_lengthScale_weight_", [minutesPosition, 0.8, 3]);secondsPosition = smalltalk.send(smalltalk.send(now, "_seconds", []), "__slash", [60]);return smalltalk.send(self, "_drawArm_lengthScale_weight_", [secondsPosition, 0.9, 1]);};
    return drawBlock;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_drawArm_lengthScale_weight_",
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
fn: function (aPosition, aLengthScale, aWeight) {
    var self = this;
    var myDX;
    var myDY;
    smalltalk.send(self['@processing'], "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(self['@processing'], "_line_y_dX_dy_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@processing'] = Processing.instances[0];
    self['@centerX'] = smalltalk.send(smalltalk.send(self['@processing'], "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(self['@processing'], "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_processing",
smalltalk.method({
selector: "processing",
fn: function () {
    var self = this;
    return self['@processing'];
}
}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function () {
    var self = this;
    var clock;
    var processing;
    var block;
    clock = smalltalk.send(smalltalk.ProcessingClock || ProcessingClock, "_new", []);
    processing = smalltalk.send(clock, "_processing", []);
    block = smalltalk.send(clock, "_draw", []);
    processing.draw = block;
    return self;
}
}),
smalltalk.ProcessingClock.klass);


