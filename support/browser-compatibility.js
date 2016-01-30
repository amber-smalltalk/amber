// This file is injected dependencies by amber-compat-xxx modules.
// Therefore it is important that it _does_not_have_ define call.

/* Make sure that console is defined */
if(typeof console === "undefined") {
	this.console = {
		log: function() {},
		warn: function() {},
		info: function() {},
		debug: function() {},
		error: function() {}
	};
}
