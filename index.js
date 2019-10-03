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
                var copyright = '\n```html\n作者: '+copyrightConfig.author+'\n链接:'+copyrightConfig.site+'\n来源: '+copyrightConfig.website+'\n本文原创发布于'+copyrightConfig.website+',©著作权归作者所有,转载请注明出处,谢谢合作!```\n';
                copyright += `\n![${copyrightConfig.image}](${copyrightConfig.image})`;

                page.content = page.content + '\n' + copyright;
            }

            return page;
        }
    }
};