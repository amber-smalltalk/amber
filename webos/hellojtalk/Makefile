Program.js: HelloJtalk.st
	../../bin/jtalkc -K -I HelloJtalk.st Program

jtalk.hellojtalk_1.0.0_all.ipk: Program.js
	palm-package .

clean:
	rm -f Program.js HelloJtalk.js jtalk.hellojtalk_1.0.0_all.ipk
	palm-install -r jtalk.hellojtalk

install:jtalk.hellojtalk_1.0.0_all.ipk
	palm-install jtalk.hellojtalk_1.0.0_all.ipk

run:    jtalk.hellojtalk_1.0.0_all.ipk
	palm-install jtalk.hellojtalk_1.0.0_all.ipk
	palm-launch jtalk.hellojtalk
