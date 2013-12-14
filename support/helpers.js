define("amber/helpers", ["amber_vm/smalltalk", "require"], function (smalltalk, require) {
    var exports = {
        popupHelios: function () {
            window.open(require.toUrl('amber_helios/html/helios.html'), "Helios", "menubar=no, status=no, scrollbars=no, menubar=no, width=1000, height=600");
        }
    };
    Object.defineProperty(exports, "smalltalk", {
        value: smalltalk,
        enumerable: true, configurable: true, writable: false
    });
    return  exports;
});
