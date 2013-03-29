(function () {
    var inBrowser = typeof amber !== "undefined" && typeof amber.load === "function";
    function init() {
        smalltalk.initialize();

        /* Similar to jQuery(document).ready() */

        if (inBrowser && amber.smalltalkReady) {
            amber.smalltalkReady();
        }
    }

    if (inBrowser) {
        // init is lengthy process done in JavaScript.
        // setTimeout here postpones it, so DOM ready
        // event can occur sooner, thus load process
        // may appear optically faster.
        setTimeout(init, 0);
    } else {
        // In certain configurations, setTimeout is not feasible.
        // It is mainly for `amberc`-produced concatenated
        // node.js programs. There, the actual "main" appears
        // immediately after init, so it must happens synchronously.
        init();
    }
})();