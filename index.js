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
                var copyright = ` 
                \`\`\`html
作者: ${copyrightConfig.author}
链接: http://snowdreams1006.github.io/
来源:「${copyrightConfig.website}」
本文原创发布于「${copyrightConfig.website}」,©著作权归作者所有,转载请注明出处,谢谢合作!
\`\`\`

![${copyrightConfig.image}](${copyrightConfig.image})
`;

                page.content = page.content + '\n' + copyright;
            }

            return page;
        }
    }
};