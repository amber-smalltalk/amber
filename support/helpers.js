define("amber/helpers", ["amber_vm/smalltalk", "require"], function (smalltalk, require) {
    return {
        popupHelios: function () {
            window.open(require.toUrl('amber_html/helios.html'), "Helios", "menubar=no, status=no, scrollbars=no, menubar=no, width=1000, height=600");
        },
        get smalltalk() { return smalltalk; }
    };
});
