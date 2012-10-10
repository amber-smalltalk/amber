smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingClock', smalltalk.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function () {
    var self = this;
    var drawBlock;
    drawBlock = function () {var now;var hoursPosition;var minutesPosition;var secondsPosition;smalltalk.send(self['@processing'], "_background_", [224]);now = smalltalk.send(smalltalk.Date || Date, "_new", []);hoursPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_hours", []), "_\\\\", [12]), "__plus", [smalltalk.send(now, "_minutes", [])]), "__slash", [60]), "__slash", [12]);smalltalk.send(self, "_drawArm_lengthScale_weight_", [hoursPosition, 0.5, 5]);minutesPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_minutes", []), "__plus", [smalltalk.send(now, "_seconds", [])]), "__slash", [60]), "__slash", [60]);smalltalk.send(self, "_drawArm_lengthScale_weight_", [minutesPosition, 0.8, 3]);secondsPosition = smalltalk.send(smalltalk.send(now, "_seconds", []), "__slash", [60]);return smalltalk.send(self, "_drawArm_lengthScale_weight_", [secondsPosition, 0.9, 1]);};
    return drawBlock;
},
args: [],
source: "draw\x0a| drawBlock |\x0a\x0adrawBlock := [\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  processing background: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now hours \x5c\x5c 12 + now minutes / 60 / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now minutes + now seconds / 60 / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a  ].\x0a\x0a^drawBlock",
messageSends: ["background:", "new", "/", "+", "minutes", "\x5c\x5c\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"],
referencedClasses: ["Date"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_drawArm_lengthScale_weight_",
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
category: 'not yet classified',
fn: function (aPosition, aLengthScale, aWeight) {
    var self = this;
    var myDX;
    var myDY;
    smalltalk.send(self['@processing'], "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(self['@processing'], "_line_y_dX_dy_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a| myDX myDY |\x0aprocessing strokeWeight: aWeight.\x0amyDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0amyDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x0aprocessing line: centerX y: centerY dX: myDX dy: myDY.",
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "line:y:dX:dy:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@processing'] = Processing.instances[0];
    self['@centerX'] = smalltalk.send(smalltalk.send(self['@processing'], "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(self['@processing'], "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
},
args: [],
source: "initialize\x0aprocessing := <Processing.instances[0]>.\x0acenterX := processing width / 2.\x0acenterY := processing height / 2.\x0amaxArmLength := Math min: centerX or: centerY.",
messageSends: ["/", "width", "height", "min:or:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_processing",
smalltalk.method({
selector: "processing",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@processing'];
},
args: [],
source: "processing\x0a^processing",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
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
},
args: [],
source: "init\x0a| clock processing block |\x0aclock := ProcessingClock new .\x0aprocessing := clock processing.\x0ablock := clock draw.\x0a<processing.draw=block>\x0a ",
messageSends: ["new", "processing", "draw"],
referencedClasses: ["ProcessingClock"]
}),
smalltalk.ProcessingClock.klass);


