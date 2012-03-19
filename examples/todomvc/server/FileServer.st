Object subclass: #FileServer
	instanceVariableNames: 'path http fs url port basePath sys'
	category: 'FileServer'!

!FileServer methodsFor: 'accessing'!

basePath
	^basePath ifNil: ['./']
!

basePath: aString
	basePath := aString
!

port
	^self class port
! !

!FileServer methodsFor: 'initialization'!

initialize
	super initialize.
	path := self require: 'path'.
	http := self require: 'http'.
	fs := self require: 'fs'.
	sys := self require: 'sys'.
	url := self require: 'url'
! !

!FileServer methodsFor: 'private'!

require: aModuleString
	"call to the require function"
	^require value: aModuleString
!

writeData: data toFileNamed: aFilename
	console log: aFilename
! !

!FileServer methodsFor: 'request handling'!

respondNotFoundTo: aResponse
	aResponse 
		writeHead: 404 options: #{'Content-Type' -> 'text/plain'};
		write: '404 Not found';
		end
!

handleRequest: aRequest respondTo: aResponse
	aRequest method = 'PUT'
		ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse]
		ifFalse: [self handleGETRequest: aRequest respondTo: aResponse]
!

handleGETRequest: aRequest respondTo: aResponse
	| uri filename |
	uri := (url parse: aRequest url) pathname.
	filename := path join: self basePath with: uri.
	path exists: filename do: [:boolean | 
		boolean 
			ifFalse: [self respondNotFoundTo: aResponse]
			ifTrue: [self respondFileNamed: filename to: aResponse]]
!

handlePUTRequest: aRequest respondTo: aResponse
	| stream |
	stream := fs createWriteStream: '.', aRequest url.

	aRequest setEncoding: 'utf8'.
	aRequest on: #data do: [:data | stream write: data].

	aRequest on: #end do: [
		stream end.
		self respondOKTo: aResponse]
!

respondFileNamed: aFilename to: aResponse
	| type filename |

	filename := aFilename.
	(fs statSync: aFilename) isDirectory ifTrue: [
        	filename := filename, 'index.html'].

	fs readFile: filename do: [:ex :file |
		ex notNil 
			ifTrue: [self respondInternalErrorTo: aResponse]
			ifFalse: [
        			type := self class mimeTypeFor: filename.
				aResponse 
                          		writeHead: 200 options:  #{'Content-Type' -> type};
					write: file binary: 'binary';
                          		end]]
!

respondInternalErrorTo: aResponse
	aResponse 
		writeHead: 500 options: #{'Content-Type' -> 'text/plain'};
		write: '500 Internal server error';
		end
!

respondOKTo: aResponse
	aResponse 
		writeHead: 200 options: #{'Content-Type' -> 'text/plain'};
		end
! !

!FileServer methodsFor: 'starting'!

startOn: aPort
	port := aPort.
	self start
!

start
	(http createServer: [:request :response |
	 	self handleRequest: request respondTo: response]) listen: self port.
	console log: 'Starting file server on port ', self port asString
! !

FileServer class instanceVariableNames: 'port mimeTypes'!

!FileServer class methodsFor: 'accessing'!

port
	^port ifNil: [4000]
!

port: aNumber
	port := aNumber
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

mimeTypes
	^mimeTypes ifNil: [mimeTypes := self defaultMimeTypes]
!

mimeTypeFor: aString
	^self mimeTypes at: (aString replace: '.*[\.]' with: '') ifAbsent: ['text/plain']
! !

!FileServer class methodsFor: 'initialization'!

main
	^self new startOn: self port
! !

