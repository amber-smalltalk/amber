Smalltalk current createPackage: 'AmberCli'!
Object subclass: #AmberCli
	instanceVariableNames: ''
	package: 'AmberCli'!
!AmberCli commentStamp!
I am the Amber CLI (CommandLine Interface) tool which runs on Node.js.

My responsibility is to start different Amber programs like the FileServer or the Repl.
Which program to start is determined by the first commandline parameters passed to the AmberCli executable.
Use `help` to get a list of all available options.
Any further commandline parameters are passed to the specific program.

## Commands

New commands can be added by creating a class side method in the `commands` protocol which takes one parameter.
This parameter is an array of all commandline options + values passed on to the program.
Any `camelCaseCommand` is transformed into a commandline parameter of the form `camel-case-command` and vice versa.!

!AmberCli class methodsFor: 'commandline'!

commandLineSwitches
	"Collect all methodnames from the 'commands' protocol of the class
	 and select the ones with only one parameter.
	 Then remove the ':' at the end of the name.
	 Additionally all uppercase letters are made lowercase and preceded by a '-'.
	 Example: fallbackPage: becomes --fallback-page.
	 Return the Array containing the commandline switches."
	| switches |
	switches := ((self class methodsInProtocol: 'commands') collect: [ :each | each selector]).
	switches := switches select: [ :each | each match: '^[^:]*:$'].
	switches :=switches collect: [ :each |
		(each allButLast replace: '([A-Z])' with: '-$1') asLowercase].
	^switches
!

handleArguments: args
	| selector |

	selector := self selectorForCommandLineSwitch: (args first).
	args remove: args first.
	self perform: selector  withArguments: (Array with: args)
!

selectorForCommandLineSwitch: aSwitch
	"Add ':' at the end and replace all occurences of a lowercase letter preceded by a '-' with the Uppercase letter.
	 Example: fallback-page becomes fallbackPage:.
	 If no correct selector is found return 'help:'"
	 | command selector |

	 (self commandLineSwitches includes: aSwitch)
	 ifTrue: [ selector := (aSwitch replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':']
	 ifFalse: [ selector := 'help:' ].
	^selector
! !

!AmberCli class methodsFor: 'commands'!

help: args
	console log: 'Available Commands:'.
	self commandLineSwitches do: [ :each | console log: each ]
!

repl: args
	^Repl new createInterface
!

serve: args
	^(FileServer createServerWithArguments: args) start
! !

!AmberCli class methodsFor: 'startup'!

main
	"Main entry point for Amber applications.
	Parses commandline arguments and starts the according subprogram."
	| args nodeMinorVersion |

	nodeMinorVersion := ((process version) tokenize: '.') second asNumber.
	nodeMinorVersion < 8 ifTrue: [
		console log: 'You are currently using Node.js ', (process version).
		console log: 'Required is at least Node.js v0.8.x or greater.'.
		^ -1.
	].

	args := process argv.
	"Remove the first args which contain the path to the node executable and the script file."
	args removeFrom: 1 to: 3.
	
	(args isEmpty)
		ifTrue: [self help: nil]
		ifFalse: [^self handleArguments: args]
! !

Object subclass: #FileServer
	instanceVariableNames: 'path http fs url host port basePath util username password fallbackPage'
	package: 'AmberCli'!
!FileServer commentStamp!
I am the Amber Smalltalk FileServer.
My runtime requirement is a functional Node.js executable.

To start a FileServer instance on port `4000` use the following code:

    FileServer new start

A parameterized instance can be created with the following code:

    FileServer createServerWithArguments: options

Here, `options` is an array of commandline style strings each followed by a value e.g. `#('--port', '6000', '--host', '0.0.0.0')`.
A list of all available parameters can be printed to the commandline by passing `--help` as parameter.
See the `Options` section for further details on how options are mapped to instance methods.

After startup FileServer checks if the directory layout required by Amber is present and logs a warning on absence.


## Options

Each option is of the form `--some-option-string` which is transformed into a selector of the format `someOptionString:`.
The trailing `--` gets removed, each `-[a-z]` gets transformed into the according uppercase letter, and a `:` is appended to create a selector which takes a single argument.
Afterwards, the selector gets executed on the `FileServer` instance with the value following in the options array as parameter.

## Adding new commandline parameters

Adding new commandline parameters to `FileServer` is as easy as adding a new single parameter method to the `accessing` protocol.!

!FileServer methodsFor: 'accessing'!

basePath
	^basePath ifNil: ['./']
!

basePath: aString
	basePath := aString
!

fallbackPage
	^fallbackPage
!

fallbackPage: aString
	fallbackPage := aString
!

host
	^host
!

host: hostname
	host := hostname
!

password: aPassword
	password := aPassword.
!

port
	^port
!

port: aNumber
	port := aNumber
!

username: aUsername
	username := aUsername.
! !

!FileServer methodsFor: 'initialization'!

checkDirectoryLayout
	(fs existsSync: self basePath, 'index.html') ifFalse: [
		console warn: 'Warning: project directory does not contain index.html'].
	(fs existsSync: self basePath, 'st') ifFalse: [
		console warn: 'Warning: project directory is missing an "st" directory'].
	(fs existsSync: self basePath, 'js') ifFalse: [
		console warn: 'Warning: project directory is missing a "js" directory'].
!

initialize
	super initialize.
	path := self require: 'path'.
	http := self require: 'http'.
	fs := self require: 'fs'.
	util := self require: 'util'.
	url := self require: 'url'.
	host := self class defaultHost.
	port := self class defaultPort.
	username := nil.
	password := nil.
	fallbackPage := nil.
! !

!FileServer methodsFor: 'private'!

base64Decode: aString
	<return (new Buffer(aString, 'base64').toString())>
!

isAuthenticated: aRequest
	"Basic HTTP Auth: http://stackoverflow.com/a/5957629/293175
	 and https://gist.github.com/1686663"
	| header token auth parts|

	(username isNil and: [password isNil]) ifTrue: [^true].

	"get authentication header"
	header := (aRequest headers at: 'authorization') ifNil:[''].
	(header isEmpty)
	ifTrue: [^false]
	ifFalse: [
		"get authentication token"
		token := (header tokenize: ' ') ifNil:[''].
		"convert back from base64"
		auth := self base64Decode: (token at: 2).
		"split token at colon"
		parts := auth tokenize: ':'.

		((username = (parts at: 1)) and: [password = (parts at: 2)])
			ifTrue: [^true]
			ifFalse: [^false]
	].
!

require: aModuleString
	"call to the require function"
	^require value: aModuleString
!

writeData: data toFileNamed: aFilename
	console log: aFilename
! !

!FileServer methodsFor: 'request handling'!

handleGETRequest: aRequest respondTo: aResponse
	| uri filename |
	uri := (url parse: aRequest url) pathname.
	filename := path join: self basePath with: uri.
	fs exists: filename do: [:aBoolean |
		aBoolean
			ifFalse: [self respondNotFoundTo: aResponse]
			ifTrue: [self respondFileNamed: filename to: aResponse]]
!

handleOPTIONSRequest: aRequest respondTo: aResponse
	aResponse writeHead: 200 options: #{'Access-Control-Allow-Origin' -> '*'.
					'Access-Control-Allow-Methods' -> 'GET, PUT, POST, DELETE, OPTIONS'.
					'Access-Control-Allow-Headers' -> 'Content-Type, Accept'.
					'Content-Length' -> 0.
					'Access-Control-Max-Age' -> 10}.
	aResponse end
!

handlePUTRequest: aRequest respondTo: aResponse
	| file stream |
	(self isAuthenticated: aRequest)
		ifFalse: [self respondAuthenticationRequiredTo: aResponse. ^nil].

	file := '.', aRequest url.
	stream := fs createWriteStream: file.

	stream on: 'error' do: [:error |
		console warn: 'Error creating WriteStream for file ', file.
		console warn: '    Did you forget to create the necessary js/ or st/ directory in your project?'.
		console warn: '    The exact error is: ', error.
		self respondNotCreatedTo: aResponse].

	stream on: 'close' do: [
		self respondCreatedTo: aResponse].

	aRequest setEncoding: 'utf8'.
	aRequest on: 'data' do: [:data |
		stream write: data].

	aRequest on: 'end' do: [
		stream writable ifTrue: [stream end]]
!

handleRequest: aRequest respondTo: aResponse
	aRequest method = 'PUT'
		ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse].
	aRequest method = 'GET'
		ifTrue:[self handleGETRequest: aRequest respondTo: aResponse].
	aRequest method = 'OPTIONS'
		ifTrue:[self handleOPTIONSRequest: aRequest respondTo: aResponse]
!

respondAuthenticationRequiredTo: aResponse
	aResponse
		writeHead: 401 options: #{'WWW-Authenticate' -> 'Basic realm="Secured Developer Area"'};
		write: '<html><body>Authentication needed</body></html>';
		end.
!

respondCreatedTo: aResponse
	aResponse
		writeHead: 201 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};
		end.
!

respondFileNamed: aFilename to: aResponse
	| type filename |

	filename := aFilename.
	(fs statSync: aFilename) isDirectory ifTrue: [
		filename := filename, 'index.html'].

	fs readFile: filename do: [:ex :file |
		ex notNil 
			ifTrue: [
				console log: filename, ' does not exist'.
				self respondInternalErrorTo: aResponse]
			ifFalse: [
				type := self class mimeTypeFor: filename.
				type = 'application/javascript'
					ifTrue: [ type:=type,';charset=utf-8' ].
				aResponse 
					writeHead: 200 options:  #{'Content-Type' -> type};
					write: file encoding: 'binary';
					end]]
!

respondInternalErrorTo: aResponse
	aResponse 
		writeHead: 500 options: #{'Content-Type' -> 'text/plain'};
		write: '500 Internal server error';
		end
!

respondNotCreatedTo: aResponse
	aResponse
		writeHead: 400 options: #{'Content-Type' -> 'text/plain'};
		write: 'File could not be created. Did you forget to create the st/js directories on the server?';
		end.
!

respondNotFoundTo: aResponse
	self fallbackPage isNil ifFalse: [^self respondFileNamed: self fallbackPage to: aResponse].
	aResponse 
		writeHead: 404 options: #{'Content-Type' -> 'text/plain'};
		write: '404 Not found';
		end
!

respondOKTo: aResponse
	aResponse
		writeHead: 200 options: #{'Content-Type' -> 'text/plain'. 'Access-Control-Allow-Origin' -> '*'};
		end.
! !

!FileServer methodsFor: 'starting'!

start
	"Checks if required directory layout is present (issue warning if not).
	 Afterwards start the server."
	self checkDirectoryLayout.
	(http createServer: [:request :response |
	      self handleRequest: request respondTo: response])
	      on: 'error' do: [:error | console log: 'Error starting server: ', error];
	      on: 'listening' do: [console log: 'Starting file server on http://', self host, ':', self port asString];
	      listen: self port host: self host.
!

startOn: aPort
	self port: aPort.
	self start
! !

FileServer class instanceVariableNames: 'mimeTypes'!

!FileServer class methodsFor: 'accessing'!

commandLineSwitches
	"Collect all methodnames from the 'accessing' protocol
	 and select the ones with only one parameter.
	 Then remove the ':' at the end of the name
	 and add a '--' at the beginning.
	 Additionally all uppercase letters are made lowercase and preceded by a '-'.
	 Example: fallbackPage: becomes --fallback-page.
	 Return the Array containing the commandline switches."
	| switches |
	switches := ((self methodsInProtocol: 'accessing') collect: [ :each | each selector]).
	switches := switches select: [ :each | each match: '^[^:]*:$'].
	switches :=switches collect: [ :each |
		(each allButLast replace: '([A-Z])' with: '-$1') asLowercase replace: '^([a-z])' with: '--$1' ].
	^switches
!

defaultHost
	^'127.0.0.1'
!

defaultMimeTypes
	^ #{
		'%' -> 'application/x-trash'.
		'323' -> 'text/h323'.
		'abw' -> 'application/x-abiword'.
		'ai' -> 'application/postscript'.
		'aif' -> 'audio/x-aiff'.
		'aifc' -> 'audio/x-aiff'.
		'aiff' -> 'audio/x-aiff'.
		'alc' -> 'chemical/x-alchemy'.
		'art' -> 'image/x-jg'.
		'asc' -> 'text/plain'.
		'asf' -> 'video/x-ms-asf'.
		'asn' -> 'chemical/x-ncbi-asn1-spec'.
		'aso' -> 'chemical/x-ncbi-asn1-binary'.
		'asx' -> 'video/x-ms-asf'.
		'au' -> 'audio/basic'.
		'avi' -> 'video/x-msvideo'.
		'b' -> 'chemical/x-molconn-Z'.
		'bak' -> 'application/x-trash'.
		'bat' -> 'application/x-msdos-program'.
		'bcpio' -> 'application/x-bcpio'.
		'bib' -> 'text/x-bibtex'.
		'bin' -> 'application/octet-stream'.
		'bmp' -> 'image/x-ms-bmp'.
		'book' -> 'application/x-maker'.
		'bsd' -> 'chemical/x-crossfire'.
		'c' -> 'text/x-csrc'.
		'c++' -> 'text/x-c++src'.
		'c3d' -> 'chemical/x-chem3d'.
		'cac' -> 'chemical/x-cache'.
		'cache' -> 'chemical/x-cache'.
		'cascii' -> 'chemical/x-cactvs-binary'.
		'cat' -> 'application/vnd.ms-pki.seccat'.
		'cbin' -> 'chemical/x-cactvs-binary'.
		'cc' -> 'text/x-c++src'.
		'cdf' -> 'application/x-cdf'.
		'cdr' -> 'image/x-coreldraw'.
		'cdt' -> 'image/x-coreldrawtemplate'.
		'cdx' -> 'chemical/x-cdx'.
		'cdy' -> 'application/vnd.cinderella'.
		'cef' -> 'chemical/x-cxf'.
		'cer' -> 'chemical/x-cerius'.
		'chm' -> 'chemical/x-chemdraw'.
		'chrt' -> 'application/x-kchart'.
		'cif' -> 'chemical/x-cif'.
		'class' -> 'application/java-vm'.
		'cls' -> 'text/x-tex'.
		'cmdf' -> 'chemical/x-cmdf'.
		'cml' -> 'chemical/x-cml'.
		'cod' -> 'application/vnd.rim.cod'.
		'com' -> 'application/x-msdos-program'.
		'cpa' -> 'chemical/x-compass'.
		'cpio' -> 'application/x-cpio'.
		'cpp' -> 'text/x-c++src'.
		'cpt' -> 'image/x-corelphotopaint'.
		'crl' -> 'application/x-pkcs7-crl'.
		'crt' -> 'application/x-x509-ca-cert'.
		'csf' -> 'chemical/x-cache-csf'.
		'csh' -> 'text/x-csh'.
		'csm' -> 'chemical/x-csml'.
		'csml' -> 'chemical/x-csml'.
		'css' -> 'text/css'.
		'csv' -> 'text/comma-separated-values'.
		'ctab' -> 'chemical/x-cactvs-binary'.
		'ctx' -> 'chemical/x-ctx'.
		'cu' -> 'application/cu-seeme'.
		'cub' -> 'chemical/x-gaussian-cube'.
		'cxf' -> 'chemical/x-cxf'.
		'cxx' -> 'text/x-c++src'.
		'dat' -> 'chemical/x-mopac-input'.
		'dcr' -> 'application/x-director'.
		'deb' -> 'application/x-debian-package'.
		'dif' -> 'video/dv'.
		'diff' -> 'text/plain'.
		'dir' -> 'application/x-director'.
		'djv' -> 'image/vnd.djvu'.
		'djvu' -> 'image/vnd.djvu'.
		'dl' -> 'video/dl'.
		'dll' -> 'application/x-msdos-program'.
		'dmg' -> 'application/x-apple-diskimage'.
		'dms' -> 'application/x-dms'.
		'doc' -> 'application/msword'.
		'dot' -> 'application/msword'.
		'dv' -> 'video/dv'.
		'dvi' -> 'application/x-dvi'.
		'dx' -> 'chemical/x-jcamp-dx'.
		'dxr' -> 'application/x-director'.
		'emb' -> 'chemical/x-embl-dl-nucleotide'.
		'embl' -> 'chemical/x-embl-dl-nucleotide'.
		'ent' -> 'chemical/x-pdb'.
		'eps' -> 'application/postscript'.
		'etx' -> 'text/x-setext'.
		'exe' -> 'application/x-msdos-program'.
		'ez' -> 'application/andrew-inset'.
		'fb' -> 'application/x-maker'.
		'fbdoc' -> 'application/x-maker'.
		'fch' -> 'chemical/x-gaussian-checkpoint'.
		'fchk' -> 'chemical/x-gaussian-checkpoint'.
		'fig' -> 'application/x-xfig'.
		'flac' -> 'application/x-flac'.
		'fli' -> 'video/fli'.
		'fm' -> 'application/x-maker'.
		'frame' -> 'application/x-maker'.
		'frm' -> 'application/x-maker'.
		'gal' -> 'chemical/x-gaussian-log'.
		'gam' -> 'chemical/x-gamess-input'.
		'gamin' -> 'chemical/x-gamess-input'.
		'gau' -> 'chemical/x-gaussian-input'.
		'gcd' -> 'text/x-pcs-gcd'.
		'gcf' -> 'application/x-graphing-calculator'.
		'gcg' -> 'chemical/x-gcg8-sequence'.
		'gen' -> 'chemical/x-genbank'.
		'gf' -> 'application/x-tex-gf'.
		'gif' -> 'image/gif'.
		'gjc' -> 'chemical/x-gaussian-input'.
		'gjf' -> 'chemical/x-gaussian-input'.
		'gl' -> 'video/gl'.
		'gnumeric' -> 'application/x-gnumeric'.
		'gpt' -> 'chemical/x-mopac-graph'.
		'gsf' -> 'application/x-font'.
		'gsm' -> 'audio/x-gsm'.
		'gtar' -> 'application/x-gtar'.
		'h' -> 'text/x-chdr'.
		'h++' -> 'text/x-c++hdr'.
		'hdf' -> 'application/x-hdf'.
		'hh' -> 'text/x-c++hdr'.
		'hin' -> 'chemical/x-hin'.
		'hpp' -> 'text/x-c++hdr'.
		'hqx' -> 'application/mac-binhex40'.
		'hs' -> 'text/x-haskell'.
		'hta' -> 'application/hta'.
		'htc' -> 'text/x-component'.
		'htm' -> 'text/html'.
		'html' -> 'text/html'.
		'hxx' -> 'text/x-c++hdr'.
		'ica' -> 'application/x-ica'.
		'ice' -> 'x-conference/x-cooltalk'.
		'ico' -> 'image/x-icon'.
		'ics' -> 'text/calendar'.
		'icz' -> 'text/calendar'.
		'ief' -> 'image/ief'.
		'iges' -> 'model/iges'.
		'igs' -> 'model/iges'.
		'iii' -> 'application/x-iphone'.
		'inp' -> 'chemical/x-gamess-input'.
		'ins' -> 'application/x-internet-signup'.
		'iso' -> 'application/x-iso9660-image'.
		'isp' -> 'application/x-internet-signup'.
		'ist' -> 'chemical/x-isostar'.
		'istr' -> 'chemical/x-isostar'.
		'jad' -> 'text/vnd.sun.j2me.app-descriptor'.
		'jar' -> 'application/java-archive'.
		'java' -> 'text/x-java'.
		'jdx' -> 'chemical/x-jcamp-dx'.
		'jmz' -> 'application/x-jmol'.
		'jng' -> 'image/x-jng'.
		'jnlp' -> 'application/x-java-jnlp-file'.
		'jpe' -> 'image/jpeg'.
		'jpeg' -> 'image/jpeg'.
		'jpg' -> 'image/jpeg'.
		'js' -> 'application/javascript'.
		'kar' -> 'audio/midi'.
		'key' -> 'application/pgp-keys'.
		'kil' -> 'application/x-killustrator'.
		'kin' -> 'chemical/x-kinemage'.
		'kpr' -> 'application/x-kpresenter'.
		'kpt' -> 'application/x-kpresenter'.
		'ksp' -> 'application/x-kspread'.
		'kwd' -> 'application/x-kword'.
		'kwt' -> 'application/x-kword'.
		'latex' -> 'application/x-latex'.
		'lha' -> 'application/x-lha'.
		'lhs' -> 'text/x-literate-haskell'.
		'lsf' -> 'video/x-la-asf'.
		'lsx' -> 'video/x-la-asf'.
		'ltx' -> 'text/x-tex'.
		'lzh' -> 'application/x-lzh'.
		'lzx' -> 'application/x-lzx'.
		'm3u' -> 'audio/x-mpegurl'.
		'm4a' -> 'audio/mpeg'.
		'maker' -> 'application/x-maker'.
		'man' -> 'application/x-troff-man'.
		'mcif' -> 'chemical/x-mmcif'.
		'mcm' -> 'chemical/x-macmolecule'.
		'mdb' -> 'application/msaccess'.
		'me' -> 'application/x-troff-me'.
		'mesh' -> 'model/mesh'.
		'mid' -> 'audio/midi'.
		'midi' -> 'audio/midi'.
		'mif' -> 'application/x-mif'.
		'mm' -> 'application/x-freemind'.
		'mmd' -> 'chemical/x-macromodel-input'.
		'mmf' -> 'application/vnd.smaf'.
		'mml' -> 'text/mathml'.
		'mmod' -> 'chemical/x-macromodel-input'.
		'mng' -> 'video/x-mng'.
		'moc' -> 'text/x-moc'.
		'mol' -> 'chemical/x-mdl-molfile'.
		'mol2' -> 'chemical/x-mol2'.
		'moo' -> 'chemical/x-mopac-out'.
		'mop' -> 'chemical/x-mopac-input'.
		'mopcrt' -> 'chemical/x-mopac-input'.
		'mov' -> 'video/quicktime'.
		'movie' -> 'video/x-sgi-movie'.
		'mp2' -> 'audio/mpeg'.
		'mp3' -> 'audio/mpeg'.
		'mp4' -> 'video/mp4'.
		'mpc' -> 'chemical/x-mopac-input'.
		'mpe' -> 'video/mpeg'.
		'mpeg' -> 'video/mpeg'.
		'mpega' -> 'audio/mpeg'.
		'mpg' -> 'video/mpeg'.
		'mpga' -> 'audio/mpeg'.
		'ms' -> 'application/x-troff-ms'.
		'msh' -> 'model/mesh'.
		'msi' -> 'application/x-msi'.
		'mvb' -> 'chemical/x-mopac-vib'.
		'mxu' -> 'video/vnd.mpegurl'.
		'nb' -> 'application/mathematica'.
		'nc' -> 'application/x-netcdf'.
		'nwc' -> 'application/x-nwc'.
		'o' -> 'application/x-object'.
		'oda' -> 'application/oda'.
		'odb' -> 'application/vnd.oasis.opendocument.database'.
		'odc' -> 'application/vnd.oasis.opendocument.chart'.
		'odf' -> 'application/vnd.oasis.opendocument.formula'.
		'odg' -> 'application/vnd.oasis.opendocument.graphics'.
		'odi' -> 'application/vnd.oasis.opendocument.image'.
		'odm' -> 'application/vnd.oasis.opendocument.text-master'.
		'odp' -> 'application/vnd.oasis.opendocument.presentation'.
		'ods' -> 'application/vnd.oasis.opendocument.spreadsheet'.
		'odt' -> 'application/vnd.oasis.opendocument.text'.
		'ogg' -> 'application/ogg'.
		'old' -> 'application/x-trash'.
		'oth' -> 'application/vnd.oasis.opendocument.text-web'.
		'oza' -> 'application/x-oz-application'.
		'p' -> 'text/x-pascal'.
		'p7r' -> 'application/x-pkcs7-certreqresp'.
		'pac' -> 'application/x-ns-proxy-autoconfig'.
		'pas' -> 'text/x-pascal'.
		'pat' -> 'image/x-coreldrawpattern'.
		'pbm' -> 'image/x-portable-bitmap'.
		'pcf' -> 'application/x-font'.
		'pcf.Z' -> 'application/x-font'.
		'pcx' -> 'image/pcx'.
		'pdb' -> 'chemical/x-pdb'.
		'pdf' -> 'application/pdf'.
		'pfa' -> 'application/x-font'.
		'pfb' -> 'application/x-font'.
		'pgm' -> 'image/x-portable-graymap'.
		'pgn' -> 'application/x-chess-pgn'.
		'pgp' -> 'application/pgp-signature'.
		'pk' -> 'application/x-tex-pk'.
		'pl' -> 'text/x-perl'.
		'pls' -> 'audio/x-scpls'.
		'pm' -> 'text/x-perl'.
		'png' -> 'image/png'.
		'pnm' -> 'image/x-portable-anymap'.
		'pot' -> 'text/plain'.
		'ppm' -> 'image/x-portable-pixmap'.
		'pps' -> 'application/vnd.ms-powerpoint'.
		'ppt' -> 'application/vnd.ms-powerpoint'.
		'prf' -> 'application/pics-rules'.
		'prt' -> 'chemical/x-ncbi-asn1-ascii'.
		'ps' -> 'application/postscript'.
		'psd' -> 'image/x-photoshop'.
		'psp' -> 'text/x-psp'.
		'py' -> 'text/x-python'.
		'pyc' -> 'application/x-python-code'.
		'pyo' -> 'application/x-python-code'.
		'qt' -> 'video/quicktime'.
		'qtl' -> 'application/x-quicktimeplayer'.
		'ra' -> 'audio/x-realaudio'.
		'ram' -> 'audio/x-pn-realaudio'.
		'rar' -> 'application/rar'.
		'ras' -> 'image/x-cmu-raster'.
		'rd' -> 'chemical/x-mdl-rdfile'.
		'rdf' -> 'application/rdf+xml'.
		'rgb' -> 'image/x-rgb'.
		'rm' -> 'audio/x-pn-realaudio'.
		'roff' -> 'application/x-troff'.
		'ros' -> 'chemical/x-rosdal'.
		'rpm' -> 'application/x-redhat-package-manager'.
		'rss' -> 'application/rss+xml'.
		'rtf' -> 'text/rtf'.
		'rtx' -> 'text/richtext'.
		'rxn' -> 'chemical/x-mdl-rxnfile'.
		'sct' -> 'text/scriptlet'.
		'sd' -> 'chemical/x-mdl-sdfile'.
		'sd2' -> 'audio/x-sd2'.
		'sda' -> 'application/vnd.stardivision.draw'.
		'sdc' -> 'application/vnd.stardivision.calc'.
		'sdd' -> 'application/vnd.stardivision.impress'.
		'sdf' -> 'chemical/x-mdl-sdfile'.
		'sdp' -> 'application/vnd.stardivision.impress'.
		'sdw' -> 'application/vnd.stardivision.writer'.
		'ser' -> 'application/java-serialized-object'.
		'sgf' -> 'application/x-go-sgf'.
		'sgl' -> 'application/vnd.stardivision.writer-global'.
		'sh' -> 'text/x-sh'.
		'shar' -> 'application/x-shar'.
		'shtml' -> 'text/html'.
		'sid' -> 'audio/prs.sid'.
		'sik' -> 'application/x-trash'.
		'silo' -> 'model/mesh'.
		'sis' -> 'application/vnd.symbian.install'.
		'sit' -> 'application/x-stuffit'.
		'skd' -> 'application/x-koan'.
		'skm' -> 'application/x-koan'.
		'skp' -> 'application/x-koan'.
		'skt' -> 'application/x-koan'.
		'smf' -> 'application/vnd.stardivision.math'.
		'smi' -> 'application/smil'.
		'smil' -> 'application/smil'.
		'snd' -> 'audio/basic'.
		'spc' -> 'chemical/x-galactic-spc'.
		'spl' -> 'application/x-futuresplash'.
		'src' -> 'application/x-wais-source'.
		'stc' -> 'application/vnd.sun.xml.calc.template'.
		'std' -> 'application/vnd.sun.xml.draw.template'.
		'sti' -> 'application/vnd.sun.xml.impress.template'.
		'stl' -> 'application/vnd.ms-pki.stl'.
		'stw' -> 'application/vnd.sun.xml.writer.template'.
		'sty' -> 'text/x-tex'.
		'sv4cpio' -> 'application/x-sv4cpio'.
		'sv4crc' -> 'application/x-sv4crc'.
		'svg' -> 'image/svg+xml'.
		'svgz' -> 'image/svg+xml'.
		'sw' -> 'chemical/x-swissprot'.
		'swf' -> 'application/x-shockwave-flash'.
		'swfl' -> 'application/x-shockwave-flash'.
		'sxc' -> 'application/vnd.sun.xml.calc'.
		'sxd' -> 'application/vnd.sun.xml.draw'.
		'sxg' -> 'application/vnd.sun.xml.writer.global'.
		'sxi' -> 'application/vnd.sun.xml.impress'.
		'sxm' -> 'application/vnd.sun.xml.math'.
		'sxw' -> 'application/vnd.sun.xml.writer'.
		't' -> 'application/x-troff'.
		'tar' -> 'application/x-tar'.
		'taz' -> 'application/x-gtar'.
		'tcl' -> 'text/x-tcl'.
		'tex' -> 'text/x-tex'.
		'texi' -> 'application/x-texinfo'.
		'texinfo' -> 'application/x-texinfo'.
		'text' -> 'text/plain'.
		'tgf' -> 'chemical/x-mdl-tgf'.
		'tgz' -> 'application/x-gtar'.
		'tif' -> 'image/tiff'.
		'tiff' -> 'image/tiff'.
		'tk' -> 'text/x-tcl'.
		'tm' -> 'text/texmacs'.
		'torrent' -> 'application/x-bittorrent'.
		'tr' -> 'application/x-troff'.
		'ts' -> 'text/texmacs'.
		'tsp' -> 'application/dsptype'.
		'tsv' -> 'text/tab-separated-values'.
		'txt' -> 'text/plain'.
		'udeb' -> 'application/x-debian-package'.
		'uls' -> 'text/iuls'.
		'ustar' -> 'application/x-ustar'.
		'val' -> 'chemical/x-ncbi-asn1-binary'.
		'vcd' -> 'application/x-cdlink'.
		'vcf' -> 'text/x-vcard'.
		'vcs' -> 'text/x-vcalendar'.
		'vmd' -> 'chemical/x-vmd'.
		'vms' -> 'chemical/x-vamas-iso14976'.
		'vor' -> 'application/vnd.stardivision.writer'.
		'vrm' -> 'x-world/x-vrml'.
		'vrml' -> 'x-world/x-vrml'.
		'vsd' -> 'application/vnd.visio'.
		'wad' -> 'application/x-doom'.
		'wav' -> 'audio/x-wav'.
		'wax' -> 'audio/x-ms-wax'.
		'wbmp' -> 'image/vnd.wap.wbmp'.
		'wbxml' -> 'application/vnd.wap.wbxml'.
		'wk' -> 'application/x-123'.
		'wm' -> 'video/x-ms-wm'.
		'wma' -> 'audio/x-ms-wma'.
		'wmd' -> 'application/x-ms-wmd'.
		'wml' -> 'text/vnd.wap.wml'.
		'wmlc' -> 'application/vnd.wap.wmlc'.
		'wmls' -> 'text/vnd.wap.wmlscript'.
		'wmlsc' -> 'application/vnd.wap.wmlscriptc'.
		'wmv' -> 'video/x-ms-wmv'.
		'wmx' -> 'video/x-ms-wmx'.
		'wmz' -> 'application/x-ms-wmz'.
		'wp5' -> 'application/wordperfect5.1'.
		'wpd' -> 'application/wordperfect'.
		'wrl' -> 'x-world/x-vrml'.
		'wsc' -> 'text/scriptlet'.
		'wvx' -> 'video/x-ms-wvx'.
		'wz' -> 'application/x-wingz'.
		'xbm' -> 'image/x-xbitmap'.
		'xcf' -> 'application/x-xcf'.
		'xht' -> 'application/xhtml+xml'.
		'xhtml' -> 'application/xhtml+xml'.
		'xlb' -> 'application/vnd.ms-excel'.
		'xls' -> 'application/vnd.ms-excel'.
		'xlt' -> 'application/vnd.ms-excel'.
		'xml' -> 'application/xml'.
		'xpi' -> 'application/x-xpinstall'.
		'xpm' -> 'image/x-xpixmap'.
		'xsl' -> 'application/xml'.
		'xtel' -> 'chemical/x-xtel'.
		'xul' -> 'application/vnd.mozilla.xul+xml'.
		'xwd' -> 'image/x-xwindowdump'.
		'xyz' -> 'chemical/x-xyz'.
		'zip' -> 'application/zip'.
		'zmt' -> 'chemical/x-mopac-input'.
		'~' -> 'application/x-trash'
	}
!

defaultPort
	^4000
!

mimeTypeFor: aString
	^self mimeTypes at: (aString replace: '.*[\.]' with: '') ifAbsent: ['text/plain']
!

mimeTypes
	^mimeTypes ifNil: [mimeTypes := self defaultMimeTypes]
!

printHelp
	console log: 'Available commandline options are:'.
	console log: '--help'.
	self commandLineSwitches do: [ :each |
		console log: each, ' <parameter>']
!

selectorForCommandLineSwitch: aSwitch
	"Remove the trailing '--', add ':' at the end
	 and replace all occurences of a lowercase letter preceded by a '-' with
	 the Uppercase letter.
	 Example: --fallback-page becomes fallbackPage:"
	^((aSwitch replace: '^--' with: '')
		replace: '-[a-z]' with: [ :each | each second asUppercase ]), ':'
! !

!FileServer class methodsFor: 'initialization'!

createServerWithArguments: options
	"If options are empty return a default FileServer instance.
	 If options are given loop through them and set the passed in values
	 on the FileServer instance.
	 
	 Commanline options map directly to methods in the 'accessing' protocol
	 taking one parameter.
	 Adding a method to this protocol makes it directly settable through
	 command line options.
	 "
	| server popFront front optionName optionValue switches |

	switches := self commandLineSwitches.

	server := self new.

	options ifEmpty: [^server].

	(options size even) ifFalse: [
		console log: 'Using default parameters.'.
		console log: 'Wrong commandline options or not enough arguments for: ' , options.
		console log: 'Use any of the following ones: ', switches.
		^server].

	popFront := [:args |
		front := args first.
		args remove: front.
		front].

	[options notEmpty] whileTrue: [
		optionName  := popFront value: options.
		optionValue := popFront value: options.

		(switches includes: optionName) ifTrue: [
			optionName := self selectorForCommandLineSwitch: optionName.
			server perform: optionName withArguments: (Array with: optionValue)]
			ifFalse: [
				console log: optionName, ' is not a valid commandline option'.
				console log: 'Use any of the following ones: ', switches ]].
	^server.
!

main
	"Main entry point for Amber applications.
	 Creates and starts a FileServer instance."
	| fileServer args |
	args := process argv.
	"Remove the first args which contain the path to the node executable and the script file."
	args removeFrom: 1 to: 3.

	args detect: [ :each |
		(each = '--help') ifTrue: [FileServer printHelp]]
	ifNone: [
		fileServer := FileServer createServerWithArguments: args.
		^fileServer start]
! !

Object subclass: #Repl
	instanceVariableNames: 'readline interface util session resultCount commands'
	package: 'AmberCli'!
!Repl commentStamp!
I am a class representing a REPL (Read Evaluate Print Loop) and provide a command line interface to Amber Smalltalk.
On the prompt you can type Amber statements which will be evaluated after pressing <Enter>.
The evaluation is comparable with executing a 'DoIt' in a workspace.

My runtime requirement is a functional Node.js executable with working Readline support.!

!Repl methodsFor: 'accessing'!

prompt
	^'amber >> '
!

commands
	^ commands
! !

!Repl methodsFor: 'actions'!

close
	process stdin destroy
!

createInterface
	interface := readline createInterface: process stdin stdout: process stdout.
	interface on: 'line' do: [:buffer | self processLine: buffer].
	interface on: 'close' do: [self close].
	self printWelcome; setupHotkeys; setPrompt.
	interface prompt
!

eval: buffer
	^ self eval: buffer on: DoIt new.
!

eval: buffer on: anObject
	| result |
	buffer isEmpty ifFalse: [
		self try: [
			result := Compiler new evaluateExpression: buffer on: anObject]
		catch: [:e |
			e isSmalltalkError
			    ifTrue: [ErrorHandler new handleError: e]
			    ifFalse: [process stdout write: e jsStack]]].
	^ result
!

setPrompt
	interface setPrompt: self prompt
! !

!Repl methodsFor: 'initialization'!

initialize
	super initialize.
	session := DoIt new.
	readline := require value: 'readline'.
	util := require value: 'util'.
	self setupCommands
!

setupHotkeys
	process stdin on: 'keypress' do: [:s :key | key ifNotNil: [self onKeyPress: key]].
!

setupCommands
	commands := Dictionary from: {
		{':q'} -> [process exit].
		{''} -> [interface prompt]}
! !

!Repl methodsFor: 'private'!

addVariableNamed: aString to: anObject
	| newClass newObject |
	newClass := self subclass: anObject class withVariable: aString.
	self encapsulateVariable: aString withValue: anObject in: newClass.
	newObject := newClass new.
	self setPreviousVariablesFor: newObject from: anObject.
	^ newObject
!

assignNewVariable: buffer do: aBlock
	"Assigns a new variable and calls the given block with the variable's name and value
	 if buffer contains an assignment expression. If it doesn't the block is called with nil for
	 both arguments."
	^ self parseAssignment: buffer do: [ :name :expr || varName value |
		varName := name ifNil: [self nextResultName].
		session := self addVariableNamed: varName to: session.
		value := self eval: varName, ' := ', (expr ifNil: [buffer]) on: session.
		aBlock value: varName value: value]
!

encapsulateVariable: aString withValue: anObject in: aClass
	"Add getter and setter for given variable to session."
	| compiler |
	compiler := Compiler new.
	compiler install: aString, ': anObject ^ ', aString, ' := anObject' forClass: aClass category: 'session'.
	compiler install: aString, ' ^ ', aString forClass: aClass category: 'session'.
!

executeCommand: aString
	"Tries to process the given string as a command. Returns true if it was a command, false if not."
	self commands keysAndValuesDo: [:names :cmd |
		(names includes: aString) ifTrue: [
			cmd value.
			^ true]].
	^ false
!

instanceVariableNamesFor: aClass
	"Yields all instance variable names for the given class, including inherited ones."
	^ aClass superclass
		ifNotNil: [
			aClass instanceVariableNames copyWithAll: (self instanceVariableNamesFor: aClass superclass)]
		ifNil: [
			aClass instanceVariableNames]
!

isIdentifier: aString
	^ aString match: '^[a-z_]\w+$' asRegexp
!

isVariableDefined: aString
	^ (self instanceVariableNamesFor: session class) includes: aString
!

nextResultName
	resultCount := resultCount
    	ifNotNil: [resultCount + 1]
    	ifNil: [1].
    ^ 'res', resultCount asString
!

onKeyPress: key
	(key ctrl and: [key name = 'l'])
		ifTrue: [self clearScreen]
!

clearScreen
	| esc cls |
	esc := String fromCharCode: 27.
	cls := esc, '[2J', esc, '[0;0f'.
	process stdout write: cls.
	interface prompt
!

parseAssignment: aString do: aBlock
	"Assigns a new variable if the given string is an assignment expression. Calls the given block with name and value.
	 If the string is not one no variable will be assigned and the block will be called with nil for both arguments."
	| assignment |
	assignment := (aString tokenize: ':=') collect: [:s | s trimBoth].
	^ (assignment size = 2 and: [self isIdentifier: assignment first])
		ifTrue: [aBlock value: assignment first value: assignment last]
		ifFalse: [aBlock value: nil value: nil]
!

presentResultNamed: varName withValue: value
	Transcript show: varName, ': ', value class name, ' = ', value asString; cr.
	interface prompt
!

printWelcome
	Transcript show: 'Welcome to Amber version ', Smalltalk current version, ' (NodeJS ', process versions node, ').'.
	Transcript show: 'Type :q to exit.'; cr.
!

processLine: buffer
	"Processes lines entered through the readline interface."
	| show |
	show := [:varName :value | self presentResultNamed: varName withValue: value].
	(self executeCommand: buffer) ifFalse: [
		(self isVariableDefined: buffer)
			ifTrue: [show value: buffer value: (session perform: buffer)]
			ifFalse: [self assignNewVariable: buffer do: show]]
!

setPreviousVariablesFor: newObject from: oldObject
	(self instanceVariableNamesFor: oldObject class) do: [:each |
		newObject perform: each, ':' withArguments: {oldObject perform: each}].
!

subclass: aClass withVariable: varName
	"Create subclass with new variable."
	^ ClassBuilder new
		addSubclassOf: aClass
		named: (self subclassNameFor: aClass) asSymbol
		instanceVariableNames: {varName}
		package: 'Compiler-Core'
!

subclassNameFor: aClass
	^ (aClass name matchesOf: '\d+$')
		ifNotNil: [ | counter |
			counter := (aClass name matchesOf: '\d+$') first asNumber + 1.
			aClass name replaceRegexp: '\d+$' asRegexp with: counter asString]
		ifNil: [
			aClass name, '2'].
! !

!Repl class methodsFor: 'initialization'!

main
	self new createInterface
! !

