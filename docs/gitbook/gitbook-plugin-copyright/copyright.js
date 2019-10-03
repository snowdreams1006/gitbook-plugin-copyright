require([
    "gitbook"
], function(gitbook, $) {
    var copyrightConfig = {};

    gitbook.events.bind("start", function(e, config) {
        copyrightConfig = config.copyright || {};

        initMygitalk();
    });

    gitbook.events.bind("page.change", initCopyright);

    function initCopyright() {
        // var copyright = new Copyright(copyrightConfig);
        // copyright.render("copyright-container");

        console.log(copyrightConfig);
    }
});