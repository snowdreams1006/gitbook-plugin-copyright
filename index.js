var copyrightConfig = {};
module.exports = {
    book: {
        assets: "./assets",
        js: [
            "plugin.js"
        ]
    },
    hooks: {
        "init": function() {
            copyrightConfig = this.options.pluginsConfig.copyright;
        },
        "page:before": function(page) {
            if (copyrightConfig) {
                var author = copyrightConfig.author;
                var website = copyrightConfig.website;
                var image = copyrightConfig.image;
                var lang = '';
                if (this.isLanguageBook()) {
                    lang = this.options.language;
                    if (typeof author === 'object') author = author[lang];
                    if (typeof website === 'object') website = website[lang];
                    if (typeof image === 'object') image = image[lang];
                    if (lang) {
                        lang += '/';
                    }
                }
                var copyright = '\n\n```html\nAuthor: ' + author + '\nSource: ' + website + '\nThis article was originally published in「' + website + '」,Reproduced please indicate the source, thank you for cooperation!\n```\n';
                if (/^zh.*/.test(this.options.language)) {
                    copyright = '\n\n```html\n作者: ' + author + '\n来源: ' + website + '\n本文原创发布于「' + website + '」,转载请注明出处,谢谢合作!\n```\n';
                }
                if (image) {
                    copyright += `\n![${image}](${image})`;
                }

                page.content = page.content + copyright;
            }

            return page;
        }
    }
};