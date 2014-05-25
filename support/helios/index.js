define(["require"], function (require) {
    return  {
        popup: function () {
            window.open(require.toUrl('./index.html'), "Helios", "menubar=no, width=1000, height=600");
        },
        go: function () {
            window.location.href = require.toUrl('./index.html');
        }
    };
});
