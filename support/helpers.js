define("amber/helpers", ["amber_vm/smalltalk", "require"], function (smalltalk, require) {
    var exports = {
        popupHelios: function () {
            window.open(require.toUrl('amber_html/helios.html'), "Helios", "menubar=no, status=no, scrollbars=no, menubar=no, width=1000, height=600");
        }
    };
    Object.defineProperty(exports, "smalltalk", {
        get: function () { return smalltalk; },
        enumerable: true, configurable: true
    });
    return  exports;
});
