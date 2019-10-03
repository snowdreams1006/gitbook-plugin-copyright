var copyrightConfig = {};

module.exports = {
    book: {
        assets: "./assets",
        css: [
            "copyright.css"
        ],
        js: [
            "copyright.js"
        ]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.copyright);

            copyrightConfig = this.options.pluginsConfig.copyright;
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', page.content);

            if (copyrightConfig) {
                var str = '<div id="copyright-container" class="gitbook-plugin-copyright"></div>';
                page.content = page.content + '\n' + str;

                str = `![${copyrightConfig.image}](${copyrightConfig.image})`;
                page.content = page.content + '\n' + str;
            }

            return page;
        }
    }
};