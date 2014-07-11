require(
    ["helios/set"],
    function (smalltalk) {
        smalltalk.initialize({'transport.defaultAmdNamespace': "amber_core"});
		smalltalk.globals.HLManager._setup();
    }
);
