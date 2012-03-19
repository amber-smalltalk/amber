smalltalk.addPackage('HTML5', {});
smalltalk.addClass('IndexedDatabase', smalltalk.Object, ['req', 'db', 'version'], 'HTML5');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_put_", [smalltalk.symbolFor("indexedDB"), smalltalk.send((typeof window == 'undefined' ? nil : window), "_webkitIndexedDB", [])]);
(self['@req']=smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_indexedDB", []), "_open_", ["RulesDB"]));
smalltalk.send(self['@req'], "_addEventListener_do_", ["success", (function(event){(self['@db']=smalltalk.send(smalltalk.send(event, "_target", []), "_result", []));smalltalk.send(self['@db'], "_setVersion_", ["1.0"]);return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Created DB"]);})]);
smalltalk.send(self['@req'], "_addEventListener_do_", ["error", (function(event){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Error: ", "__comma", [smalltalk.send(smalltalk.send(event, "_message", []), "_asString", [])]), "__comma", [unescape("%20%28")]), "__comma", [smalltalk.send(smalltalk.send(event, "_code", []), "_asString", [])]), "__comma", [unescape("%29")])]);})]);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09window%20at%3A%20%23indexedDB%20put%3A%20window%20webkitIndexedDB.%0A%09%22window%20at%3A%20%23IDBTransaction%20put%3A%20window%20webkitIDBTransaction.%22%0A%0A%09req%20%3A%3D%20window%20indexedDB%20open%3A%20%27RulesDB%27.%0A%09req%09addEventListener%3A%20%27success%27%20do%3A%20%5B%20%3Aevent%20%7C%0A%09%09db%20%3A%3D%20event%20target%20result.%0A%09%09db%20setVersion%3A%20%271.0%27.%0A%09%09console%20log%3A%20%27Created%20DB%27%20%5D.%0A%09req%20addEventListener%3A%20%27error%27%20do%3A%20%5B%20%3Aevent%20%7C%0A%09%09console%20log%3A%20%27Error%3A%20%27%2C%20event%20message%20asString%2C%20%27%20%28%27%2C%20event%20code%20asString%2C%20%27%29%27%20%5D'),
messageSends: ["initialize", "at:put:", "webkitIndexedDB", "open:", "indexedDB", "addEventListener:do:", "result", "target", "setVersion:", "log:", unescape("%2C"), "asString", "message", "code"],
referencedClasses: []
}),
smalltalk.IndexedDatabase);



smalltalk.addClass('FileSystem', smalltalk.Object, ['fs'], 'HTML5');
smalltalk.FileSystem.comment=unescape('Wrapper%20around%20HTML5%20FileSystem%0Ahttp%3A//playground.html5rocks.com/%23filesystem_apis')
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
category: 'error-handling',
fn: function (anError){
var self=this;
var msg=nil;

switch (anError.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Error: ", "__comma", [msg])]);
return self;},
args: ["anError"],
source: unescape('handleError%3A%20anError%0A%09%7C%20msg%20%7C%0A%3C%0Aswitch%20%28anError.code%29%20%7B%0A%20%20%20%20case%20FileError.QUOTA_EXCEEDED_ERR%3A%0A%20%20%20%20%20%20msg%20%3D%20%27QUOTA_EXCEEDED_ERR%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20FileError.NOT_FOUND_ERR%3A%0A%20%20%20%20%20%20msg%20%3D%20%27NOT_FOUND_ERR%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20FileError.SECURITY_ERR%3A%0A%20%20%20%20%20%20msg%20%3D%20%27SECURITY_ERR%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20FileError.INVALID_MODIFICATION_ERR%3A%0A%20%20%20%20%20%20msg%20%3D%20%27INVALID_MODIFICATION_ERR%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%20FileError.INVALID_STATE_ERR%3A%0A%20%20%20%20%20%20msg%20%3D%20%27INVALID_STATE_ERR%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20default%3A%0A%20%20%20%20%20%20msg%20%3D%20%27Unknown%20Error%27%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%7D%3B%3E.%0A%09console%20log%3A%20%27Error%3A%20%27%2C%20msg'),
messageSends: ["log:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.FileSystem);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
(($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["requestFileSystem"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_requestFileSystem_size_onSuccess_onError_", [smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["TEMPORARY"]), (1024) * (1024), (function(filesystem){return smalltalk.send(self, "_initializeFileSystem_", [filesystem]);}), (function(error){return smalltalk.send(self, "_handleError_", [error]);})]);})() : nil;
return self;},
args: [],
source: unescape('initialize%0A%09%3Cwindow.requestFileSystem%20%3D%20window.requestFileSystem%20%7C%7C%20window.webkitRequestFileSystem%3E.%0A%09%28window%20at%3A%20%27requestFileSystem%27%29%20ifNotNil%3A%20%5B%0A%09%09window%20requestFileSystem%3A%20%28window%20at%3A%20%27TEMPORARY%27%29%0A%09%09%09size%3A%201024*1024%0A%09%09%09onSuccess%3A%20%5B%20%3Afilesystem%20%7C%20self%20initializeFileSystem%3A%20filesystem%20%5D%0A%09%09%09onError%3A%20%5B%20%3Aerror%20%7C%20self%20handleError%3A%20error%20%5D%5D.'),
messageSends: ["ifNotNil:", "at:", "requestFileSystem:size:onSuccess:onError:", unescape("*"), "initializeFileSystem:", "handleError:"],
referencedClasses: []
}),
smalltalk.FileSystem);

smalltalk.addMethod(
unescape('_initializeFileSystem_'),
smalltalk.method({
selector: unescape('initializeFileSystem%3A'),
category: 'initialization',
fn: function (aDOMFileSystem){
var self=this;
(self['@fs']=aDOMFileSystem);
return self;},
args: ["aDOMFileSystem"],
source: unescape('initializeFileSystem%3A%20aDOMFileSystem%0A%09fs%20%3A%3D%20aDOMFileSystem.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FileSystem);



smalltalk.addClass('GeoLocation', smalltalk.Object, ['trackingWatchId', 'geo', 'onSuccess', 'onError'], 'HTML5');
smalltalk.GeoLocation.comment=unescape('Wrapper%20around%20HTML5%20GeoLocation%0Ahttp%3A//playground.html5rocks.com/%23get_current_position%0A%0AYou%20can%20set%20the%20default%20onSuccess%20and%20onError%20callbacks%3A%0A%0A%7C%20geo%20%7C%0Ageo%20%3A%3D%20GeoLocation%20new%0A%09onSuccess%3A%20%5B%20%3Aposition%20%7C%20window%20alert%3A%20position%20%5D%3B%0A%09onError%3A%20%5B%20%3Aerror%20%7C%20window%20alert%3A%20error%20%5D.%0Ageo%20getCurrentPosition%0A%0AOr%20you%20can%20provide%20a%20custom%20block%3A%0A%0A%7C%20geo%20%7C%0Ageo%20%3A%3D%20GeoLocation%20new.%0Ageo%20getCurrentPosition%3A%20%5B%20%3Aposition%20%7C%20window%20alert%3A%20position%20%5D%0A')
smalltalk.addMethod(
unescape('_getCurrentPosition'),
smalltalk.method({
selector: unescape('getCurrentPosition'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [(function(position){return smalltalk.send(self['@onSuccess'], "_value_", [position]);}), (function(error){return smalltalk.send(self['@onError'], "_value_", [error]);})]);
return self;},
args: [],
source: unescape('getCurrentPosition%0A%09geo%0A%09%09getCurrentPosition%3A%20%5B%20%3Aposition%20%7C%20onSuccess%20value%3A%20position%20%5D%0A%09%09onError%3A%20%5B%20%3Aerror%20%7C%20onError%20value%3A%20error%20%5D'),
messageSends: ["getCurrentPosition:onError:", "value:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
self['@geo']=smalltalk.send((typeof navigator == 'undefined' ? nil : navigator), "_geolocation", []);
self['@onSuccess']=(function(position){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [position]);});
self['@onError']=(function(error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);});
return self;},
args: [],
source: unescape('initialize%0A%09geo%20%3A%3D%20navigator%20geolocation.%0A%09onSuccess%20%3A%3D%20%5B%20%3Aposition%20%7C%20console%20log%3A%20position%20%5D.%0A%09onError%20%3A%3D%20%5B%20%3Aerror%20%7C%20console%20log%3A%20error%20%5D.'),
messageSends: ["geolocation", "log:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_watchPosition'),
smalltalk.method({
selector: unescape('watchPosition'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_watchPosition_", [self['@onSuccess']]);
return self;},
args: [],
source: unescape('watchPosition%0A%09self%20watchPosition%3A%20onSuccess.'),
messageSends: ["watchPosition:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onSuccess_'),
smalltalk.method({
selector: unescape('onSuccess%3A'),
category: 'callbacks',
fn: function (aBlock){
var self=this;
self['@onSuccess']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('onSuccess%3A%20aBlock%0A%09onSuccess%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onError_'),
smalltalk.method({
selector: unescape('onError%3A'),
category: 'callbacks',
fn: function (aBlock){
var self=this;
self['@onError']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('onError%3A%20aBlock%0A%09onError%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_clearWatch'),
smalltalk.method({
selector: unescape('clearWatch'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@trackingWatchId']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@geo'], "_clearWatch_", [self['@trackingWatchId']]);})() : nil;
self['@trackingWatchId']=nil;
return self;},
args: [],
source: unescape('clearWatch%0A%09trackingWatchId%20ifNotNil%3A%20%5B%20geo%20clearWatch%3A%20trackingWatchId%20%5D.%0A%09trackingWatchId%20%3A%3D%20nil.'),
messageSends: ["ifNotNil:", "clearWatch:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onError'),
smalltalk.method({
selector: unescape('onError'),
category: 'callbacks',
fn: function (){
var self=this;
return self['@onError'];
return self;},
args: [],
source: unescape('onError%0A%09%5EonError'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_onSuccess'),
smalltalk.method({
selector: unescape('onSuccess'),
category: 'callbacks',
fn: function (){
var self=this;
return self['@onSuccess'];
return self;},
args: [],
source: unescape('onSuccess%0A%09%5EonSuccess'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_getCurrentPosition_'),
smalltalk.method({
selector: unescape('getCurrentPosition%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [aBlock, self['@onError']]);
return self;},
args: ["aBlock"],
source: unescape('getCurrentPosition%3A%20aBlock%0A%09geo%20getCurrentPosition%3A%20aBlock%20onError%3A%20onError'),
messageSends: ["getCurrentPosition:onError:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_getCurrentPosition_onError_'),
smalltalk.method({
selector: unescape('getCurrentPosition%3AonError%3A'),
category: 'actions',
fn: function (aBlock, anErrorBlock){
var self=this;
smalltalk.send(self['@geo'], "_getCurrentPosition_onError_", [aBlock, anErrorBlock]);
return self;},
args: ["aBlock", "anErrorBlock"],
source: unescape('getCurrentPosition%3A%20aBlock%20onError%3A%20anErrorBlock%0A%09geo%20getCurrentPosition%3A%20aBlock%20onError%3A%20anErrorBlock'),
messageSends: ["getCurrentPosition:onError:"],
referencedClasses: []
}),
smalltalk.GeoLocation);

smalltalk.addMethod(
unescape('_watchPosition_'),
smalltalk.method({
selector: unescape('watchPosition%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_clearWatch", []);
self['@trackingWatchId']=smalltalk.send(self['@geo'], "_watchPosition_onError_", [aBlock, self['@onError']]);
return self;},
args: ["aBlock"],
source: unescape('watchPosition%3A%20aBlock%0A%09self%20clearWatch.%0A%09trackingWatchId%20%3A%3D%20geo%0A%09%09watchPosition%3A%20aBlock%0A%09%09onError%3A%20onError'),
messageSends: ["clearWatch", "watchPosition:onError:"],
referencedClasses: []
}),
smalltalk.GeoLocation);



smalltalk.addClass('WebDatabase', smalltalk.Object, ['name', 'description', 'request', 'db', 'version'], 'HTML5');
smalltalk.WebDatabase.comment=unescape('HTML5%20Web%20SQL%20Database%0A%0Ahttp%3A//www.html5rocks.com/en/features/storage')
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(($receiver = self['@name']) == nil || $receiver == undefined) ? (function(){return self['@name']="default";})() : $receiver;
(($receiver = self['@description']) == nil || $receiver == undefined) ? (function(){return self['@description']="Default DB";})() : $receiver;
self['@version']="";
self['@db']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_openDatabase_version_description_size_", [self['@name'], self['@version'], self['@description'], (1024)]);
return self;},
args: [],
source: unescape('initialize%0A%09name%20ifNil%3A%20%5B%20name%20%3A%3D%20%27default%27%20%5D.%0A%09description%20ifNil%3A%20%5B%20description%20%3A%3D%20%27Default%20DB%27%20%5D.%0A%09version%20%3A%3D%20%27%27.%0A%09db%20%3A%3D%20window%20openDatabase%3A%20name%20version%3A%20version%20description%3A%20description%20size%3A%201024.'),
messageSends: ["ifNil:", "openDatabase:version:description:size:"],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_db'),
smalltalk.method({
selector: unescape('db'),
category: 'accessing',
fn: function (){
var self=this;
return self['@db'];
return self;},
args: [],
source: unescape('db%0A%09%5Edb'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@name']=aString;
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09name%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%09%5Ename'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return self['@description'];
return self;},
args: [],
source: unescape('description%0A%09%5Edescription'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_description_'),
smalltalk.method({
selector: unescape('description%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@description']=aString;
return self;},
args: ["aString"],
source: unescape('description%3A%20aString%0A%09description%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_version_'),
smalltalk.method({
selector: unescape('version%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@version']=aString;
return self;},
args: ["aString"],
source: unescape('version%3A%20aString%0A%09version%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_version'),
smalltalk.method({
selector: unescape('version'),
category: 'accessing',
fn: function (){
var self=this;
return self['@version'];
return self;},
args: [],
source: unescape('version%0A%09%5Eversion'),
messageSends: [],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_args_onSuccess_onError_'),
smalltalk.method({
selector: unescape('executeSql%3Aargs%3AonSuccess%3AonError%3A'),
category: 'api',
fn: function (aSqlString, anArray, aSuccessBlock, anErrorBlock){
var self=this;
smalltalk.send(self['@db'], "_transaction_", [(function(tx){return smalltalk.send(tx, "_executeSql_args_onSuccess_onError_", [aSqlString, anArray, aSuccessBlock, anErrorBlock]);})]);
return self;},
args: ["aSqlString", "anArray", "aSuccessBlock", "anErrorBlock"],
source: unescape('executeSql%3A%20aSqlString%20args%3A%20anArray%20onSuccess%3A%20aSuccessBlock%20onError%3A%20anErrorBlock%0A%09db%20transaction%3A%20%5B%20%3Atx%20%7C%0A%09%09tx%20executeSql%3A%20aSqlString%0A%09%09%09args%3A%20anArray%0A%09%09%09onSuccess%3A%20aSuccessBlock%0A%09%09%09onError%3A%20anErrorBlock%20%5D'),
messageSends: ["transaction:", "executeSql:args:onSuccess:onError:"],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_args_'),
smalltalk.method({
selector: unescape('executeSql%3Aargs%3A'),
category: 'api',
fn: function (aSqlString, anArray){
var self=this;
smalltalk.send(self, "_executeSql_args_onSuccess_onError_", [aSqlString, anArray, (function(){return nil;}), (function(tx, error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);})]);
return self;},
args: ["aSqlString", "anArray"],
source: unescape('executeSql%3A%20aSqlString%20args%3A%20anArray%0A%09self%20executeSql%3A%20aSqlString%0A%09%09args%3A%20anArray%0A%09%09onSuccess%3A%20%5B%5D%0A%09%09onError%3A%20%5B%20%3Atx%20%3Aerror%20%7C%20console%20log%3A%20error%20%5D'),
messageSends: ["executeSql:args:onSuccess:onError:", "log:"],
referencedClasses: []
}),
smalltalk.WebDatabase);

smalltalk.addMethod(
unescape('_executeSql_'),
smalltalk.method({
selector: unescape('executeSql%3A'),
category: 'api',
fn: function (aSqlString){
var self=this;
smalltalk.send(self, "_executeSql_args_onSuccess_onError_", [aSqlString, (function(){return nil;}), (function(){return nil;}), (function(tx, error){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [error]);})]);
return self;},
args: ["aSqlString"],
source: unescape('executeSql%3A%20aSqlString%0A%09self%20executeSql%3A%20aSqlString%0A%09%09args%3A%20%5B%5D%0A%09%09onSuccess%3A%20%5B%5D%0A%09%09onError%3A%20%5B%20%3Atx%20%3Aerror%20%7C%20console%20log%3A%20error%20%5D'),
messageSends: ["executeSql:args:onSuccess:onError:", "log:"],
referencedClasses: []
}),
smalltalk.WebDatabase);


smalltalk.addMethod(
unescape('_named_description_'),
smalltalk.method({
selector: unescape('named%3Adescription%3A'),
category: 'instance creation',
fn: function (aName, aDescription){
var self=this;
return (function($rec){smalltalk.send($rec, "_name_", [aName]);smalltalk.send($rec, "_description_", [aDescription]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["aName", "aDescription"],
source: unescape('named%3A%20aName%20description%3A%20aDescription%0A%09%5Eself%20basicNew%0A%09%09name%3A%20aName%3B%0A%09%09description%3A%20aDescription%3B%0A%09%09initialize%3B%0A%09%09yourself.'),
messageSends: ["name:", "description:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.WebDatabase.klass);

smalltalk.addMethod(
unescape('_named_'),
smalltalk.method({
selector: unescape('named%3A'),
category: 'instance creation',
fn: function (aName){
var self=this;
return (function($rec){smalltalk.send($rec, "_name_", [aName]);smalltalk.send($rec, "_description_", [""]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["aName"],
source: unescape('named%3A%20aName%0A%09%5Eself%20basicNew%0A%09%09name%3A%20aName%3B%0A%09%09description%3A%20%27%27%3B%0A%09%09initialize%3B%0A%09%09yourself.'),
messageSends: ["name:", "description:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.WebDatabase.klass);


smalltalk.addClass('LocalStorage', smalltalk.Object, ['scope'], 'HTML5');
smalltalk.LocalStorage.comment=unescape('LocalStorage%20is%20a%20wrapper%20around%20HTML5%20Local%20Storage.%0ATake%20a%20look%20at%3A%20http%3A//diveintohtml5.org/storage.html%0A%0AExample%0A%0A%09%7C%20local%20%7C%0A%09local%20%3A%3D%20LocalStorage%20new.%0A%09local%20at%3A%20%27message%27%20put%3A%20%27Hello%20World%21%27.%0A%09Transcript%20show%3A%20%28local%20at%3A%20%27message%27%29%3B%20cr.')
smalltalk.addMethod(
unescape('_keys'),
smalltalk.method({
selector: unescape('keys'),
category: 'accessing',
fn: function (){
var self=this;
var keysArray=nil;
keysArray=[];
smalltalk.send((0), "_to_do_", [((($receiver = smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_length", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), (function(idx, key){key=smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_key_", [idx]);return ((($receiver = smalltalk.send(key, "_match_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(keysArray, "_add_", [smalltalk.send(key, "_replace_with_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']]), ""])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(keysArray, "_add_", [smalltalk.send(key, "_replace_with_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']]), ""])]);})]));})]);
return keysArray;
return self;},
args: [],
source: unescape('keys%0A%09%7C%20keysArray%20%7C%0A%09keysArray%20%3A%3D%20%23%28%29.%0A%090%20to%3A%20%28localStorage%20length%20-%201%29%20do%3A%20%5B%20%3Aidx%20%3Akey%20%7C%0A%09%09key%20%3A%3D%20localStorage%20key%3A%20idx.%0A%09%09%28key%20match%3A%20%27%5E%27%2C%20scope%29%0A%09%09%09ifTrue%3A%20%5B%20keysArray%20add%3A%20%28key%20replace%3A%20%28%27%5E%27%2C%20scope%29%20with%3A%20%27%27%29%20%5D%5D.%0A%09%5EkeysArray'),
messageSends: ["to:do:", unescape("-"), "length", "key:", "ifTrue:", "match:", unescape("%2C"), "add:", "replace:with:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_scopedKey_'),
smalltalk.method({
selector: unescape('scopedKey%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
try{((($receiver = smalltalk.send(aString, "_match_", [smalltalk.send(unescape("%5E"), "__comma", [self['@scope']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return aString}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return smalltalk.send(self['@scope'], "__comma", [aString])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return aString}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_scopedKey_', fn: function(){return smalltalk.send(self['@scope'], "__comma", [aString])}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_scopedKey_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('scopedKey%3A%20aString%0A%09%28aString%20match%3A%20%27%5E%27%20%2C%20scope%29%0A%09%09ifTrue%3A%20%5B%20%5EaString%20%5D%0A%09%09ifFalse%3A%20%5B%20%5Escope%20%2C%20aString%20%5D'),
messageSends: ["ifTrue:ifFalse:", "match:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_values'),
smalltalk.method({
selector: unescape('values'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_collect_", [(function(each){return smalltalk.send(self, "_at_", [each]);})]);
return self;},
args: [],
source: unescape('values%0A%09%5Eself%20keys%20collect%3A%20%5B%20%3Aeach%20%7C%20self%20at%3A%20each%20%5D'),
messageSends: ["collect:", "keys", "at:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(($receiver = self['@scope']) == nil || $receiver == undefined) ? (function(){return self['@scope']="";})() : $receiver;
return self;},
args: [],
source: unescape('initialize%0A%09scope%20ifNil%3A%20%5B%20scope%20%3A%3D%20%27%27%20%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_initializeWithScope_'),
smalltalk.method({
selector: unescape('initializeWithScope%3A'),
category: 'initialization',
fn: function (aString){
var self=this;
self['@scope']=smalltalk.send(aString, "__comma", ["."]);
smalltalk.send(self, "_initialize", []);
return self;},
args: ["aString"],
source: unescape('initializeWithScope%3A%20aString%0A%09scope%20%3A%3D%20aString%20%2C%20%27.%27.%0A%09self%20initialize.'),
messageSends: [unescape("%2C"), "initialize"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_getItem_", [smalltalk.send(self, "_scopedKey_", [aString])]);
return self;},
args: ["aString"],
source: unescape('at%3A%20aString%0A%09%5ElocalStorage%20getItem%3A%20%28self%20scopedKey%3A%20aString%29'),
messageSends: ["getItem:", "scopedKey:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_setItem_value_", [smalltalk.send(self, "_scopedKey_", [aString]), anObject]);
return self;},
args: ["aString", "anObject"],
source: unescape('at%3A%20aString%20put%3A%20anObject%0A%09localStorage%0A%09%09setItem%3A%20%28self%20scopedKey%3A%20aString%29%20%0A%09%09value%3A%20anObject'),
messageSends: ["setItem:value:", "scopedKey:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_delete_'),
smalltalk.method({
selector: unescape('delete%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send((typeof localStorage == 'undefined' ? nil : localStorage), "_removeItem_", [smalltalk.send(self, "_scopedKey_", [aString])]);
return self;},
args: ["aString"],
source: unescape('delete%3A%20aString%0A%09localStorage%20removeItem%3A%20%28self%20scopedKey%3A%20aString%29'),
messageSends: ["removeItem:", "scopedKey:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_keys", []), "_includes_", [aString]);
return self;},
args: ["aString"],
source: unescape('includesKey%3A%20aString%0A%09%5Eself%20keys%20includes%3A%20aString'),
messageSends: ["includes:", "keys"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_includesKey_", [aKey]), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_at_", [aKey]);}), aBlock]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%09%5E%28self%20includesKey%3A%20aKey%29%0A%09%09ifTrue%3A%20%5B%20self%20at%3A%20aKey%20%5D%0A%09%09ifFalse%3A%20aBlock'),
messageSends: ["ifTrue:ifFalse:", "includesKey:", "at:"],
referencedClasses: []
}),
smalltalk.LocalStorage);

smalltalk.addMethod(
unescape('_at_ifAbsentPut_'),
smalltalk.method({
selector: unescape('at%3AifAbsentPut%3A'),
category: 'accessing',
fn: function (aKey, anObject){
var self=this;
return smalltalk.send(self, "_at_ifAbsent_", [aKey, (function(){return smalltalk.send(self, "_at_put_", [aKey, anObject]);})]);
return self;},
args: ["aKey", "anObject"],
source: unescape('at%3A%20aKey%20ifAbsentPut%3A%20anObject%0A%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%0A%09%09self%20at%3A%20aKey%20put%3A%20anObject%20%5D'),
messageSends: ["at:ifAbsent:", "at:put:"],
referencedClasses: []
}),
smalltalk.LocalStorage);


smalltalk.LocalStorage.klass.iVarNames = ['root'];
smalltalk.addMethod(
unescape('_withScope_'),
smalltalk.method({
selector: unescape('withScope%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithScope_", [aString]);
return self;},
args: ["aString"],
source: unescape('withScope%3A%20aString%0A%09%5Eself%20new%20initializeWithScope%3A%20aString'),
messageSends: ["initializeWithScope:", "new"],
referencedClasses: []
}),
smalltalk.LocalStorage.klass);



