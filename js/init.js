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
        setTimeout(init, 0);
    } else {
        init();
    }
})();