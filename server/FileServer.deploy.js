smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'port', 'basePath', 'sys'], 'FileServer');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
self['@path']=smalltalk.send(self, "_require_", ["path"]);
self['@http']=smalltalk.send(self, "_require_", ["http"]);
self['@fs']=smalltalk.send(self, "_require_", ["fs"]);
self['@sys']=smalltalk.send(self, "_require_", ["sys"]);
self['@url']=smalltalk.send(self, "_require_", ["url"]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_require_',
smalltalk.method({
selector: 'require:',
fn: function (aModuleString){
var self=this;
return smalltalk.send((typeof require == 'undefined' ? nil : require), "_value_", [aModuleString]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_startOn_',
smalltalk.method({
selector: 'startOn:',
fn: function (aPort){
var self=this;
self['@port']=aPort;
smalltalk.send(self, "_start", []);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_basePath',
smalltalk.method({
selector: 'basePath',
fn: function (){
var self=this;
return (($receiver = self['@basePath']) == nil || $receiver == undefined) ? (function(){return unescape("./");})() : $receiver;
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_basePath_',
smalltalk.method({
selector: 'basePath:',
fn: function (aString){
var self=this;
self['@basePath']=aString;
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@http'], "_createServer_", [(function(request, response){return smalltalk.send(self, "_handleRequest_respondTo_", [request, response]);})]), "_listen_", [smalltalk.send(self, "_port", [])]);
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send("Starting file server on port ", "__comma", [smalltalk.send(smalltalk.send(self, "_port", []), "_asString", [])])]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondNotFoundTo_',
smalltalk.method({
selector: 'respondNotFoundTo:',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(404), smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["404 Not found"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handleRequest_respondTo_',
smalltalk.method({
selector: 'handleRequest:respondTo:',
fn: function (aRequest, aResponse){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["PUT"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);})() : (function(){return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);}), (function(){return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);})]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handleGETRequest_respondTo_',
smalltalk.method({
selector: 'handleGETRequest:respondTo:',
fn: function (aRequest, aResponse){
var self=this;
var uri=nil;
var filename=nil;
uri=smalltalk.send(smalltalk.send(self['@url'], "_parse_", [smalltalk.send(aRequest, "_url", [])]), "_pathname", []);
filename=smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]);
smalltalk.send(self['@path'], "_exists_do_", [filename, (function(boolean){return (($receiver = boolean).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);})() : (function(){return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}), (function(){return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);})]);})]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handlePUTRequest_respondTo_',
smalltalk.method({
selector: 'handlePUTRequest:respondTo:',
fn: function (aRequest, aResponse){
var self=this;
var stream=nil;
stream=smalltalk.send(self['@fs'], "_createWriteStream_", [smalltalk.send(".", "__comma", [smalltalk.send(aRequest, "_url", [])])]);
smalltalk.send(aRequest, "_setEncoding_", ["utf8"]);
smalltalk.send(aRequest, "_on_do_", ["data", (function(data){return smalltalk.send(stream, "_write_", [data]);})]);
smalltalk.send(aRequest, "_on_do_", ["end", (function(){smalltalk.send(stream, "_end", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);})]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_port',
smalltalk.method({
selector: 'port',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_port", []);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondFileNamed_to_',
smalltalk.method({
selector: 'respondFileNamed:to:',
fn: function (aFilename, aResponse){
var self=this;
var type=nil;
var filename=nil;
filename=aFilename;
(($receiver = smalltalk.send(smalltalk.send(self['@fs'], "_statSync_", [aFilename]), "_isDirectory", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return filename=smalltalk.send(filename, "__comma", ["index.html"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return filename=smalltalk.send(filename, "__comma", ["index.html"]);})]);
smalltalk.send(self['@fs'], "_readFile_do_", [filename, (function(ex, file){return (($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);})() : (function(){type=smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return (function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);})(aResponse);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}), (function(){type=smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return (function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);})(aResponse);})]);})]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondInternalErrorTo_',
smalltalk.method({
selector: 'respondInternalErrorTo:',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(500), smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["500 Internal server error"]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_writeData_toFileNamed_',
smalltalk.method({
selector: 'writeData:toFileNamed:',
fn: function (data, aFilename){
var self=this;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [aFilename]);
return self;}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondOKTo_',
smalltalk.method({
selector: 'respondOKTo:',
fn: function (aResponse){
var self=this;
(function($rec){smalltalk.send($rec, "_writeHead_options_", [(200), smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);return smalltalk.send($rec, "_end", []);})(aResponse);
return self;}
}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['port','mimeTypes'];
smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_startOn_", [smalltalk.send(self, "_port", [])]);
return self;}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_port',
smalltalk.method({
selector: 'port',
fn: function (){
var self=this;
return (($receiver = self['@port']) == nil || $receiver == undefined) ? (function(){return (4000);})() : $receiver;
return self;}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_port_',
smalltalk.method({
selector: 'port:',
fn: function (aNumber){
var self=this;
self['@port']=aNumber;
return self;}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_defaultMimeTypes',
smalltalk.method({
selector: 'defaultMimeTypes',
fn: function (){
var self=this;
return smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("%25"), "__minus_gt", [unescape("application/x-trash")]),smalltalk.send("323", "__minus_gt", [unescape("text/h323")]),smalltalk.send("abw", "__minus_gt", [unescape("application/x-abiword")]),smalltalk.send("ai", "__minus_gt", [unescape("application/postscript")]),smalltalk.send("aif", "__minus_gt", [unescape("audio/x-aiff")]),smalltalk.send("aifc", "__minus_gt", [unescape("audio/x-aiff")]),smalltalk.send("aiff", "__minus_gt", [unescape("audio/x-aiff")]),smalltalk.send("alc", "__minus_gt", [unescape("chemical/x-alchemy")]),smalltalk.send("art", "__minus_gt", [unescape("image/x-jg")]),smalltalk.send("asc", "__minus_gt", [unescape("text/plain")]),smalltalk.send("asf", "__minus_gt", [unescape("video/x-ms-asf")]),smalltalk.send("asn", "__minus_gt", [unescape("chemical/x-ncbi-asn1-spec")]),smalltalk.send("aso", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]),smalltalk.send("asx", "__minus_gt", [unescape("video/x-ms-asf")]),smalltalk.send("au", "__minus_gt", [unescape("audio/basic")]),smalltalk.send("avi", "__minus_gt", [unescape("video/x-msvideo")]),smalltalk.send("b", "__minus_gt", [unescape("chemical/x-molconn-Z")]),smalltalk.send("bak", "__minus_gt", [unescape("application/x-trash")]),smalltalk.send("bat", "__minus_gt", [unescape("application/x-msdos-program")]),smalltalk.send("bcpio", "__minus_gt", [unescape("application/x-bcpio")]),smalltalk.send("bib", "__minus_gt", [unescape("text/x-bibtex")]),smalltalk.send("bin", "__minus_gt", [unescape("application/octet-stream")]),smalltalk.send("bmp", "__minus_gt", [unescape("image/x-ms-bmp")]),smalltalk.send("book", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("bsd", "__minus_gt", [unescape("chemical/x-crossfire")]),smalltalk.send("c", "__minus_gt", [unescape("text/x-csrc")]),smalltalk.send(unescape("c++"), "__minus_gt", [unescape("text/x-c++src")]),smalltalk.send("c3d", "__minus_gt", [unescape("chemical/x-chem3d")]),smalltalk.send("cac", "__minus_gt", [unescape("chemical/x-cache")]),smalltalk.send("cache", "__minus_gt", [unescape("chemical/x-cache")]),smalltalk.send("cascii", "__minus_gt", [unescape("chemical/x-cactvs-binary")]),smalltalk.send("cat", "__minus_gt", [unescape("application/vnd.ms-pki.seccat")]),smalltalk.send("cbin", "__minus_gt", [unescape("chemical/x-cactvs-binary")]),smalltalk.send("cc", "__minus_gt", [unescape("text/x-c++src")]),smalltalk.send("cdf", "__minus_gt", [unescape("application/x-cdf")]),smalltalk.send("cdr", "__minus_gt", [unescape("image/x-coreldraw")]),smalltalk.send("cdt", "__minus_gt", [unescape("image/x-coreldrawtemplate")]),smalltalk.send("cdx", "__minus_gt", [unescape("chemical/x-cdx")]),smalltalk.send("cdy", "__minus_gt", [unescape("application/vnd.cinderella")]),smalltalk.send("cef", "__minus_gt", [unescape("chemical/x-cxf")]),smalltalk.send("cer", "__minus_gt", [unescape("chemical/x-cerius")]),smalltalk.send("chm", "__minus_gt", [unescape("chemical/x-chemdraw")]),smalltalk.send("chrt", "__minus_gt", [unescape("application/x-kchart")]),smalltalk.send("cif", "__minus_gt", [unescape("chemical/x-cif")]),smalltalk.send("class", "__minus_gt", [unescape("application/java-vm")]),smalltalk.send("cls", "__minus_gt", [unescape("text/x-tex")]),smalltalk.send("cmdf", "__minus_gt", [unescape("chemical/x-cmdf")]),smalltalk.send("cml", "__minus_gt", [unescape("chemical/x-cml")]),smalltalk.send("cod", "__minus_gt", [unescape("application/vnd.rim.cod")]),smalltalk.send("com", "__minus_gt", [unescape("application/x-msdos-program")]),smalltalk.send("cpa", "__minus_gt", [unescape("chemical/x-compass")]),smalltalk.send("cpio", "__minus_gt", [unescape("application/x-cpio")]),smalltalk.send("cpp", "__minus_gt", [unescape("text/x-c++src")]),smalltalk.send("cpt", "__minus_gt", [unescape("image/x-corelphotopaint")]),smalltalk.send("crl", "__minus_gt", [unescape("application/x-pkcs7-crl")]),smalltalk.send("crt", "__minus_gt", [unescape("application/x-x509-ca-cert")]),smalltalk.send("csf", "__minus_gt", [unescape("chemical/x-cache-csf")]),smalltalk.send("csh", "__minus_gt", [unescape("text/x-csh")]),smalltalk.send("csm", "__minus_gt", [unescape("chemical/x-csml")]),smalltalk.send("csml", "__minus_gt", [unescape("chemical/x-csml")]),smalltalk.send("css", "__minus_gt", [unescape("text/css")]),smalltalk.send("csv", "__minus_gt", [unescape("text/comma-separated-values")]),smalltalk.send("ctab", "__minus_gt", [unescape("chemical/x-cactvs-binary")]),smalltalk.send("ctx", "__minus_gt", [unescape("chemical/x-ctx")]),smalltalk.send("cu", "__minus_gt", [unescape("application/cu-seeme")]),smalltalk.send("cub", "__minus_gt", [unescape("chemical/x-gaussian-cube")]),smalltalk.send("cxf", "__minus_gt", [unescape("chemical/x-cxf")]),smalltalk.send("cxx", "__minus_gt", [unescape("text/x-c++src")]),smalltalk.send("dat", "__minus_gt", [unescape("chemical/x-mopac-input")]),smalltalk.send("dcr", "__minus_gt", [unescape("application/x-director")]),smalltalk.send("deb", "__minus_gt", [unescape("application/x-debian-package")]),smalltalk.send("dif", "__minus_gt", [unescape("video/dv")]),smalltalk.send("diff", "__minus_gt", [unescape("text/plain")]),smalltalk.send("dir", "__minus_gt", [unescape("application/x-director")]),smalltalk.send("djv", "__minus_gt", [unescape("image/vnd.djvu")]),smalltalk.send("djvu", "__minus_gt", [unescape("image/vnd.djvu")]),smalltalk.send("dl", "__minus_gt", [unescape("video/dl")]),smalltalk.send("dll", "__minus_gt", [unescape("application/x-msdos-program")]),smalltalk.send("dmg", "__minus_gt", [unescape("application/x-apple-diskimage")]),smalltalk.send("dms", "__minus_gt", [unescape("application/x-dms")]),smalltalk.send("doc", "__minus_gt", [unescape("application/msword")]),smalltalk.send("dot", "__minus_gt", [unescape("application/msword")]),smalltalk.send("dv", "__minus_gt", [unescape("video/dv")]),smalltalk.send("dvi", "__minus_gt", [unescape("application/x-dvi")]),smalltalk.send("dx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]),smalltalk.send("dxr", "__minus_gt", [unescape("application/x-director")]),smalltalk.send("emb", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]),smalltalk.send("embl", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]),smalltalk.send("ent", "__minus_gt", [unescape("chemical/x-pdb")]),smalltalk.send("eps", "__minus_gt", [unescape("application/postscript")]),smalltalk.send("etx", "__minus_gt", [unescape("text/x-setext")]),smalltalk.send("exe", "__minus_gt", [unescape("application/x-msdos-program")]),smalltalk.send("ez", "__minus_gt", [unescape("application/andrew-inset")]),smalltalk.send("fb", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("fbdoc", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("fch", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]),smalltalk.send("fchk", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]),smalltalk.send("fig", "__minus_gt", [unescape("application/x-xfig")]),smalltalk.send("flac", "__minus_gt", [unescape("application/x-flac")]),smalltalk.send("fli", "__minus_gt", [unescape("video/fli")]),smalltalk.send("fm", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("frame", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("frm", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("gal", "__minus_gt", [unescape("chemical/x-gaussian-log")]),smalltalk.send("gam", "__minus_gt", [unescape("chemical/x-gamess-input")]),smalltalk.send("gamin", "__minus_gt", [unescape("chemical/x-gamess-input")]),smalltalk.send("gau", "__minus_gt", [unescape("chemical/x-gaussian-input")]),smalltalk.send("gcd", "__minus_gt", [unescape("text/x-pcs-gcd")]),smalltalk.send("gcf", "__minus_gt", [unescape("application/x-graphing-calculator")]),smalltalk.send("gcg", "__minus_gt", [unescape("chemical/x-gcg8-sequence")]),smalltalk.send("gen", "__minus_gt", [unescape("chemical/x-genbank")]),smalltalk.send("gf", "__minus_gt", [unescape("application/x-tex-gf")]),smalltalk.send("gif", "__minus_gt", [unescape("image/gif")]),smalltalk.send("gjc", "__minus_gt", [unescape("chemical/x-gaussian-input")]),smalltalk.send("gjf", "__minus_gt", [unescape("chemical/x-gaussian-input")]),smalltalk.send("gl", "__minus_gt", [unescape("video/gl")]),smalltalk.send("gnumeric", "__minus_gt", [unescape("application/x-gnumeric")]),smalltalk.send("gpt", "__minus_gt", [unescape("chemical/x-mopac-graph")]),smalltalk.send("gsf", "__minus_gt", [unescape("application/x-font")]),smalltalk.send("gsm", "__minus_gt", [unescape("audio/x-gsm")]),smalltalk.send("gtar", "__minus_gt", [unescape("application/x-gtar")]),smalltalk.send("h", "__minus_gt", [unescape("text/x-chdr")]),smalltalk.send(unescape("h++"), "__minus_gt", [unescape("text/x-c++hdr")]),smalltalk.send("hdf", "__minus_gt", [unescape("application/x-hdf")]),smalltalk.send("hh", "__minus_gt", [unescape("text/x-c++hdr")]),smalltalk.send("hin", "__minus_gt", [unescape("chemical/x-hin")]),smalltalk.send("hpp", "__minus_gt", [unescape("text/x-c++hdr")]),smalltalk.send("hqx", "__minus_gt", [unescape("application/mac-binhex40")]),smalltalk.send("hs", "__minus_gt", [unescape("text/x-haskell")]),smalltalk.send("hta", "__minus_gt", [unescape("application/hta")]),smalltalk.send("htc", "__minus_gt", [unescape("text/x-component")]),smalltalk.send("htm", "__minus_gt", [unescape("text/html")]),smalltalk.send("html", "__minus_gt", [unescape("text/html")]),smalltalk.send("hxx", "__minus_gt", [unescape("text/x-c++hdr")]),smalltalk.send("ica", "__minus_gt", [unescape("application/x-ica")]),smalltalk.send("ice", "__minus_gt", [unescape("x-conference/x-cooltalk")]),smalltalk.send("ico", "__minus_gt", [unescape("image/x-icon")]),smalltalk.send("ics", "__minus_gt", [unescape("text/calendar")]),smalltalk.send("icz", "__minus_gt", [unescape("text/calendar")]),smalltalk.send("ief", "__minus_gt", [unescape("image/ief")]),smalltalk.send("iges", "__minus_gt", [unescape("model/iges")]),smalltalk.send("igs", "__minus_gt", [unescape("model/iges")]),smalltalk.send("iii", "__minus_gt", [unescape("application/x-iphone")]),smalltalk.send("inp", "__minus_gt", [unescape("chemical/x-gamess-input")]),smalltalk.send("ins", "__minus_gt", [unescape("application/x-internet-signup")]),smalltalk.send("iso", "__minus_gt", [unescape("application/x-iso9660-image")]),smalltalk.send("isp", "__minus_gt", [unescape("application/x-internet-signup")]),smalltalk.send("ist", "__minus_gt", [unescape("chemical/x-isostar")]),smalltalk.send("istr", "__minus_gt", [unescape("chemical/x-isostar")]),smalltalk.send("jad", "__minus_gt", [unescape("text/vnd.sun.j2me.app-descriptor")]),smalltalk.send("jar", "__minus_gt", [unescape("application/java-archive")]),smalltalk.send("java", "__minus_gt", [unescape("text/x-java")]),smalltalk.send("jdx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]),smalltalk.send("jmz", "__minus_gt", [unescape("application/x-jmol")]),smalltalk.send("jng", "__minus_gt", [unescape("image/x-jng")]),smalltalk.send("jnlp", "__minus_gt", [unescape("application/x-java-jnlp-file")]),smalltalk.send("jpe", "__minus_gt", [unescape("image/jpeg")]),smalltalk.send("jpeg", "__minus_gt", [unescape("image/jpeg")]),smalltalk.send("jpg", "__minus_gt", [unescape("image/jpeg")]),smalltalk.send("js", "__minus_gt", [unescape("application/javascript")]),smalltalk.send("kar", "__minus_gt", [unescape("audio/midi")]),smalltalk.send("key", "__minus_gt", [unescape("application/pgp-keys")]),smalltalk.send("kil", "__minus_gt", [unescape("application/x-killustrator")]),smalltalk.send("kin", "__minus_gt", [unescape("chemical/x-kinemage")]),smalltalk.send("kpr", "__minus_gt", [unescape("application/x-kpresenter")]),smalltalk.send("kpt", "__minus_gt", [unescape("application/x-kpresenter")]),smalltalk.send("ksp", "__minus_gt", [unescape("application/x-kspread")]),smalltalk.send("kwd", "__minus_gt", [unescape("application/x-kword")]),smalltalk.send("kwt", "__minus_gt", [unescape("application/x-kword")]),smalltalk.send("latex", "__minus_gt", [unescape("application/x-latex")]),smalltalk.send("lha", "__minus_gt", [unescape("application/x-lha")]),smalltalk.send("lhs", "__minus_gt", [unescape("text/x-literate-haskell")]),smalltalk.send("lsf", "__minus_gt", [unescape("video/x-la-asf")]),smalltalk.send("lsx", "__minus_gt", [unescape("video/x-la-asf")]),smalltalk.send("ltx", "__minus_gt", [unescape("text/x-tex")]),smalltalk.send("lzh", "__minus_gt", [unescape("application/x-lzh")]),smalltalk.send("lzx", "__minus_gt", [unescape("application/x-lzx")]),smalltalk.send("m3u", "__minus_gt", [unescape("audio/x-mpegurl")]),smalltalk.send("m4a", "__minus_gt", [unescape("audio/mpeg")]),smalltalk.send("maker", "__minus_gt", [unescape("application/x-maker")]),smalltalk.send("man", "__minus_gt", [unescape("application/x-troff-man")]),smalltalk.send("mcif", "__minus_gt", [unescape("chemical/x-mmcif")]),smalltalk.send("mcm", "__minus_gt", [unescape("chemical/x-macmolecule")]),smalltalk.send("mdb", "__minus_gt", [unescape("application/msaccess")]),smalltalk.send("me", "__minus_gt", [unescape("application/x-troff-me")]),smalltalk.send("mesh", "__minus_gt", [unescape("model/mesh")]),smalltalk.send("mid", "__minus_gt", [unescape("audio/midi")]),smalltalk.send("midi", "__minus_gt", [unescape("audio/midi")]),smalltalk.send("mif", "__minus_gt", [unescape("application/x-mif")]),smalltalk.send("mm", "__minus_gt", [unescape("application/x-freemind")]),smalltalk.send("mmd", "__minus_gt", [unescape("chemical/x-macromodel-input")]),smalltalk.send("mmf", "__minus_gt", [unescape("application/vnd.smaf")]),smalltalk.send("mml", "__minus_gt", [unescape("text/mathml")]),smalltalk.send("mmod", "__minus_gt", [unescape("chemical/x-macromodel-input")]),smalltalk.send("mng", "__minus_gt", [unescape("video/x-mng")]),smalltalk.send("moc", "__minus_gt", [unescape("text/x-moc")]),smalltalk.send("mol", "__minus_gt", [unescape("chemical/x-mdl-molfile")]),smalltalk.send("mol2", "__minus_gt", [unescape("chemical/x-mol2")]),smalltalk.send("moo", "__minus_gt", [unescape("chemical/x-mopac-out")]),smalltalk.send("mop", "__minus_gt", [unescape("chemical/x-mopac-input")]),smalltalk.send("mopcrt", "__minus_gt", [unescape("chemical/x-mopac-input")]),smalltalk.send("mov", "__minus_gt", [unescape("video/quicktime")]),smalltalk.send("movie", "__minus_gt", [unescape("video/x-sgi-movie")]),smalltalk.send("mp2", "__minus_gt", [unescape("audio/mpeg")]),smalltalk.send("mp3", "__minus_gt", [unescape("audio/mpeg")]),smalltalk.send("mp4", "__minus_gt", [unescape("video/mp4")]),smalltalk.send("mpc", "__minus_gt", [unescape("chemical/x-mopac-input")]),smalltalk.send("mpe", "__minus_gt", [unescape("video/mpeg")]),smalltalk.send("mpeg", "__minus_gt", [unescape("video/mpeg")]),smalltalk.send("mpega", "__minus_gt", [unescape("audio/mpeg")]),smalltalk.send("mpg", "__minus_gt", [unescape("video/mpeg")]),smalltalk.send("mpga", "__minus_gt", [unescape("audio/mpeg")]),smalltalk.send("ms", "__minus_gt", [unescape("application/x-troff-ms")]),smalltalk.send("msh", "__minus_gt", [unescape("model/mesh")]),smalltalk.send("msi", "__minus_gt", [unescape("application/x-msi")]),smalltalk.send("mvb", "__minus_gt", [unescape("chemical/x-mopac-vib")]),smalltalk.send("mxu", "__minus_gt", [unescape("video/vnd.mpegurl")]),smalltalk.send("nb", "__minus_gt", [unescape("application/mathematica")]),smalltalk.send("nc", "__minus_gt", [unescape("application/x-netcdf")]),smalltalk.send("nwc", "__minus_gt", [unescape("application/x-nwc")]),smalltalk.send("o", "__minus_gt", [unescape("application/x-object")]),smalltalk.send("oda", "__minus_gt", [unescape("application/oda")]),smalltalk.send("odb", "__minus_gt", [unescape("application/vnd.oasis.opendocument.database")]),smalltalk.send("odc", "__minus_gt", [unescape("application/vnd.oasis.opendocument.chart")]),smalltalk.send("odf", "__minus_gt", [unescape("application/vnd.oasis.opendocument.formula")]),smalltalk.send("odg", "__minus_gt", [unescape("application/vnd.oasis.opendocument.graphics")]),smalltalk.send("odi", "__minus_gt", [unescape("application/vnd.oasis.opendocument.image")]),smalltalk.send("odm", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-master")]),smalltalk.send("odp", "__minus_gt", [unescape("application/vnd.oasis.opendocument.presentation")]),smalltalk.send("ods", "__minus_gt", [unescape("application/vnd.oasis.opendocument.spreadsheet")]),smalltalk.send("odt", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text")]),smalltalk.send("ogg", "__minus_gt", [unescape("application/ogg")]),smalltalk.send("old", "__minus_gt", [unescape("application/x-trash")]),smalltalk.send("oth", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-web")]),smalltalk.send("oza", "__minus_gt", [unescape("application/x-oz-application")]),smalltalk.send("p", "__minus_gt", [unescape("text/x-pascal")]),smalltalk.send("p7r", "__minus_gt", [unescape("application/x-pkcs7-certreqresp")]),smalltalk.send("pac", "__minus_gt", [unescape("application/x-ns-proxy-autoconfig")]),smalltalk.send("pas", "__minus_gt", [unescape("text/x-pascal")]),smalltalk.send("pat", "__minus_gt", [unescape("image/x-coreldrawpattern")]),smalltalk.send("pbm", "__minus_gt", [unescape("image/x-portable-bitmap")]),smalltalk.send("pcf", "__minus_gt", [unescape("application/x-font")]),smalltalk.send("pcf.Z", "__minus_gt", [unescape("application/x-font")]),smalltalk.send("pcx", "__minus_gt", [unescape("image/pcx")]),smalltalk.send("pdb", "__minus_gt", [unescape("chemical/x-pdb")]),smalltalk.send("pdf", "__minus_gt", [unescape("application/pdf")]),smalltalk.send("pfa", "__minus_gt", [unescape("application/x-font")]),smalltalk.send("pfb", "__minus_gt", [unescape("application/x-font")]),smalltalk.send("pgm", "__minus_gt", [unescape("image/x-portable-graymap")]),smalltalk.send("pgn", "__minus_gt", [unescape("application/x-chess-pgn")]),smalltalk.send("pgp", "__minus_gt", [unescape("application/pgp-signature")]),smalltalk.send("pk", "__minus_gt", [unescape("application/x-tex-pk")]),smalltalk.send("pl", "__minus_gt", [unescape("text/x-perl")]),smalltalk.send("pls", "__minus_gt", [unescape("audio/x-scpls")]),smalltalk.send("pm", "__minus_gt", [unescape("text/x-perl")]),smalltalk.send("png", "__minus_gt", [unescape("image/png")]),smalltalk.send("pnm", "__minus_gt", [unescape("image/x-portable-anymap")]),smalltalk.send("pot", "__minus_gt", [unescape("text/plain")]),smalltalk.send("ppm", "__minus_gt", [unescape("image/x-portable-pixmap")]),smalltalk.send("pps", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]),smalltalk.send("ppt", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]),smalltalk.send("prf", "__minus_gt", [unescape("application/pics-rules")]),smalltalk.send("prt", "__minus_gt", [unescape("chemical/x-ncbi-asn1-ascii")]),smalltalk.send("ps", "__minus_gt", [unescape("application/postscript")]),smalltalk.send("psd", "__minus_gt", [unescape("image/x-photoshop")]),smalltalk.send("psp", "__minus_gt", [unescape("text/x-psp")]),smalltalk.send("py", "__minus_gt", [unescape("text/x-python")]),smalltalk.send("pyc", "__minus_gt", [unescape("application/x-python-code")]),smalltalk.send("pyo", "__minus_gt", [unescape("application/x-python-code")]),smalltalk.send("qt", "__minus_gt", [unescape("video/quicktime")]),smalltalk.send("qtl", "__minus_gt", [unescape("application/x-quicktimeplayer")]),smalltalk.send("ra", "__minus_gt", [unescape("audio/x-realaudio")]),smalltalk.send("ram", "__minus_gt", [unescape("audio/x-pn-realaudio")]),smalltalk.send("rar", "__minus_gt", [unescape("application/rar")]),smalltalk.send("ras", "__minus_gt", [unescape("image/x-cmu-raster")]),smalltalk.send("rd", "__minus_gt", [unescape("chemical/x-mdl-rdfile")]),smalltalk.send("rdf", "__minus_gt", [unescape("application/rdf+xml")]),smalltalk.send("rgb", "__minus_gt", [unescape("image/x-rgb")]),smalltalk.send("rm", "__minus_gt", [unescape("audio/x-pn-realaudio")]),smalltalk.send("roff", "__minus_gt", [unescape("application/x-troff")]),smalltalk.send("ros", "__minus_gt", [unescape("chemical/x-rosdal")]),smalltalk.send("rpm", "__minus_gt", [unescape("application/x-redhat-package-manager")]),smalltalk.send("rss", "__minus_gt", [unescape("application/rss+xml")]),smalltalk.send("rtf", "__minus_gt", [unescape("text/rtf")]),smalltalk.send("rtx", "__minus_gt", [unescape("text/richtext")]),smalltalk.send("rxn", "__minus_gt", [unescape("chemical/x-mdl-rxnfile")]),smalltalk.send("sct", "__minus_gt", [unescape("text/scriptlet")]),smalltalk.send("sd", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]),smalltalk.send("sd2", "__minus_gt", [unescape("audio/x-sd2")]),smalltalk.send("sda", "__minus_gt", [unescape("application/vnd.stardivision.draw")]),smalltalk.send("sdc", "__minus_gt", [unescape("application/vnd.stardivision.calc")]),smalltalk.send("sdd", "__minus_gt", [unescape("application/vnd.stardivision.impress")]),smalltalk.send("sdf", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]),smalltalk.send("sdp", "__minus_gt", [unescape("application/vnd.stardivision.impress")]),smalltalk.send("sdw", "__minus_gt", [unescape("application/vnd.stardivision.writer")]),smalltalk.send("ser", "__minus_gt", [unescape("application/java-serialized-object")]),smalltalk.send("sgf", "__minus_gt", [unescape("application/x-go-sgf")]),smalltalk.send("sgl", "__minus_gt", [unescape("application/vnd.stardivision.writer-global")]),smalltalk.send("sh", "__minus_gt", [unescape("text/x-sh")]),smalltalk.send("shar", "__minus_gt", [unescape("application/x-shar")]),smalltalk.send("shtml", "__minus_gt", [unescape("text/html")]),smalltalk.send("sid", "__minus_gt", [unescape("audio/prs.sid")]),smalltalk.send("sik", "__minus_gt", [unescape("application/x-trash")]),smalltalk.send("silo", "__minus_gt", [unescape("model/mesh")]),smalltalk.send("sis", "__minus_gt", [unescape("application/vnd.symbian.install")]),smalltalk.send("sit", "__minus_gt", [unescape("application/x-stuffit")]),smalltalk.send("skd", "__minus_gt", [unescape("application/x-koan")]),smalltalk.send("skm", "__minus_gt", [unescape("application/x-koan")]),smalltalk.send("skp", "__minus_gt", [unescape("application/x-koan")]),smalltalk.send("skt", "__minus_gt", [unescape("application/x-koan")]),smalltalk.send("smf", "__minus_gt", [unescape("application/vnd.stardivision.math")]),smalltalk.send("smi", "__minus_gt", [unescape("application/smil")]),smalltalk.send("smil", "__minus_gt", [unescape("application/smil")]),smalltalk.send("snd", "__minus_gt", [unescape("audio/basic")]),smalltalk.send("spc", "__minus_gt", [unescape("chemical/x-galactic-spc")]),smalltalk.send("spl", "__minus_gt", [unescape("application/x-futuresplash")]),smalltalk.send("src", "__minus_gt", [unescape("application/x-wais-source")]),smalltalk.send("stc", "__minus_gt", [unescape("application/vnd.sun.xml.calc.template")]),smalltalk.send("std", "__minus_gt", [unescape("application/vnd.sun.xml.draw.template")]),smalltalk.send("sti", "__minus_gt", [unescape("application/vnd.sun.xml.impress.template")]),smalltalk.send("stl", "__minus_gt", [unescape("application/vnd.ms-pki.stl")]),smalltalk.send("stw", "__minus_gt", [unescape("application/vnd.sun.xml.writer.template")]),smalltalk.send("sty", "__minus_gt", [unescape("text/x-tex")]),smalltalk.send("sv4cpio", "__minus_gt", [unescape("application/x-sv4cpio")]),smalltalk.send("sv4crc", "__minus_gt", [unescape("application/x-sv4crc")]),smalltalk.send("svg", "__minus_gt", [unescape("image/svg+xml")]),smalltalk.send("svgz", "__minus_gt", [unescape("image/svg+xml")]),smalltalk.send("sw", "__minus_gt", [unescape("chemical/x-swissprot")]),smalltalk.send("swf", "__minus_gt", [unescape("application/x-shockwave-flash")]),smalltalk.send("swfl", "__minus_gt", [unescape("application/x-shockwave-flash")]),smalltalk.send("sxc", "__minus_gt", [unescape("application/vnd.sun.xml.calc")]),smalltalk.send("sxd", "__minus_gt", [unescape("application/vnd.sun.xml.draw")]),smalltalk.send("sxg", "__minus_gt", [unescape("application/vnd.sun.xml.writer.global")]),smalltalk.send("sxi", "__minus_gt", [unescape("application/vnd.sun.xml.impress")]),smalltalk.send("sxm", "__minus_gt", [unescape("application/vnd.sun.xml.math")]),smalltalk.send("sxw", "__minus_gt", [unescape("application/vnd.sun.xml.writer")]),smalltalk.send("t", "__minus_gt", [unescape("application/x-troff")]),smalltalk.send("tar", "__minus_gt", [unescape("application/x-tar")]),smalltalk.send("taz", "__minus_gt", [unescape("application/x-gtar")]),smalltalk.send("tcl", "__minus_gt", [unescape("text/x-tcl")]),smalltalk.send("tex", "__minus_gt", [unescape("text/x-tex")]),smalltalk.send("texi", "__minus_gt", [unescape("application/x-texinfo")]),smalltalk.send("texinfo", "__minus_gt", [unescape("application/x-texinfo")]),smalltalk.send("text", "__minus_gt", [unescape("text/plain")]),smalltalk.send("tgf", "__minus_gt", [unescape("chemical/x-mdl-tgf")]),smalltalk.send("tgz", "__minus_gt", [unescape("application/x-gtar")]),smalltalk.send("tif", "__minus_gt", [unescape("image/tiff")]),smalltalk.send("tiff", "__minus_gt", [unescape("image/tiff")]),smalltalk.send("tk", "__minus_gt", [unescape("text/x-tcl")]),smalltalk.send("tm", "__minus_gt", [unescape("text/texmacs")]),smalltalk.send("torrent", "__minus_gt", [unescape("application/x-bittorrent")]),smalltalk.send("tr", "__minus_gt", [unescape("application/x-troff")]),smalltalk.send("ts", "__minus_gt", [unescape("text/texmacs")]),smalltalk.send("tsp", "__minus_gt", [unescape("application/dsptype")]),smalltalk.send("tsv", "__minus_gt", [unescape("text/tab-separated-values")]),smalltalk.send("txt", "__minus_gt", [unescape("text/plain")]),smalltalk.send("udeb", "__minus_gt", [unescape("application/x-debian-package")]),smalltalk.send("uls", "__minus_gt", [unescape("text/iuls")]),smalltalk.send("ustar", "__minus_gt", [unescape("application/x-ustar")]),smalltalk.send("val", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]),smalltalk.send("vcd", "__minus_gt", [unescape("application/x-cdlink")]),smalltalk.send("vcf", "__minus_gt", [unescape("text/x-vcard")]),smalltalk.send("vcs", "__minus_gt", [unescape("text/x-vcalendar")]),smalltalk.send("vmd", "__minus_gt", [unescape("chemical/x-vmd")]),smalltalk.send("vms", "__minus_gt", [unescape("chemical/x-vamas-iso14976")]),smalltalk.send("vor", "__minus_gt", [unescape("application/vnd.stardivision.writer")]),smalltalk.send("vrm", "__minus_gt", [unescape("x-world/x-vrml")]),smalltalk.send("vrml", "__minus_gt", [unescape("x-world/x-vrml")]),smalltalk.send("vsd", "__minus_gt", [unescape("application/vnd.visio")]),smalltalk.send("wad", "__minus_gt", [unescape("application/x-doom")]),smalltalk.send("wav", "__minus_gt", [unescape("audio/x-wav")]),smalltalk.send("wax", "__minus_gt", [unescape("audio/x-ms-wax")]),smalltalk.send("wbmp", "__minus_gt", [unescape("image/vnd.wap.wbmp")]),smalltalk.send("wbxml", "__minus_gt", [unescape("application/vnd.wap.wbxml")]),smalltalk.send("wk", "__minus_gt", [unescape("application/x-123")]),smalltalk.send("wm", "__minus_gt", [unescape("video/x-ms-wm")]),smalltalk.send("wma", "__minus_gt", [unescape("audio/x-ms-wma")]),smalltalk.send("wmd", "__minus_gt", [unescape("application/x-ms-wmd")]),smalltalk.send("wml", "__minus_gt", [unescape("text/vnd.wap.wml")]),smalltalk.send("wmlc", "__minus_gt", [unescape("application/vnd.wap.wmlc")]),smalltalk.send("wmls", "__minus_gt", [unescape("text/vnd.wap.wmlscript")]),smalltalk.send("wmlsc", "__minus_gt", [unescape("application/vnd.wap.wmlscriptc")]),smalltalk.send("wmv", "__minus_gt", [unescape("video/x-ms-wmv")]),smalltalk.send("wmx", "__minus_gt", [unescape("video/x-ms-wmx")]),smalltalk.send("wmz", "__minus_gt", [unescape("application/x-ms-wmz")]),smalltalk.send("wp5", "__minus_gt", [unescape("application/wordperfect5.1")]),smalltalk.send("wpd", "__minus_gt", [unescape("application/wordperfect")]),smalltalk.send("wrl", "__minus_gt", [unescape("x-world/x-vrml")]),smalltalk.send("wsc", "__minus_gt", [unescape("text/scriptlet")]),smalltalk.send("wvx", "__minus_gt", [unescape("video/x-ms-wvx")]),smalltalk.send("wz", "__minus_gt", [unescape("application/x-wingz")]),smalltalk.send("xbm", "__minus_gt", [unescape("image/x-xbitmap")]),smalltalk.send("xcf", "__minus_gt", [unescape("application/x-xcf")]),smalltalk.send("xht", "__minus_gt", [unescape("application/xhtml+xml")]),smalltalk.send("xhtml", "__minus_gt", [unescape("application/xhtml+xml")]),smalltalk.send("xlb", "__minus_gt", [unescape("application/vnd.ms-excel")]),smalltalk.send("xls", "__minus_gt", [unescape("application/vnd.ms-excel")]),smalltalk.send("xlt", "__minus_gt", [unescape("application/vnd.ms-excel")]),smalltalk.send("xml", "__minus_gt", [unescape("application/xml")]),smalltalk.send("xpi", "__minus_gt", [unescape("application/x-xpinstall")]),smalltalk.send("xpm", "__minus_gt", [unescape("image/x-xpixmap")]),smalltalk.send("xsl", "__minus_gt", [unescape("application/xml")]),smalltalk.send("xtel", "__minus_gt", [unescape("chemical/x-xtel")]),smalltalk.send("xul", "__minus_gt", [unescape("application/vnd.mozilla.xul+xml")]),smalltalk.send("xwd", "__minus_gt", [unescape("image/x-xwindowdump")]),smalltalk.send("xyz", "__minus_gt", [unescape("chemical/x-xyz")]),smalltalk.send("zip", "__minus_gt", [unescape("application/zip")]),smalltalk.send("zmt", "__minus_gt", [unescape("chemical/x-mopac-input")]),smalltalk.send(unescape("%7E"), "__minus_gt", [unescape("application/x-trash")])]);
return self;}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_mimeTypes',
smalltalk.method({
selector: 'mimeTypes',
fn: function (){
var self=this;
return (($receiver = self['@mimeTypes']) == nil || $receiver == undefined) ? (function(){return self['@mimeTypes']=smalltalk.send(self, "_defaultMimeTypes", []);})() : $receiver;
return self;}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_mimeTypeFor_',
smalltalk.method({
selector: 'mimeTypeFor:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_mimeTypes", []), "_at_ifAbsent_", [smalltalk.send(aString, "_replace_with_", [unescape(".*%5B%5C.%5D"), ""]), (function(){return unescape("text/plain");})]);
return self;}
}),
smalltalk.FileServer.klass);


