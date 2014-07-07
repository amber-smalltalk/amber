define(["require"], function (require) {
    return  {
        pageUrl: function () {
            var a = document.createElement("a");
            a.href = require.toUrl("..");
            return require.toUrl('./index.html') + "?" + encodeURIComponent(a.href);
        },
        popup: function () {
            window.open(this.pageUrl(), "Helios", "menubar=no, width=1000, height=600");
        },
        go: function () {
            window.location.href = this.pageUrl();
        }
    };
});
