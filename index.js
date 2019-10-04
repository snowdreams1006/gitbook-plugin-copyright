var copyrightConfig = {};

module.exports = {
    book: {
        assets: "./assets",
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
            this.log.debug.ln('page:before', JSON.stringify(page.content));

            if (copyrightConfig) {
                var site = copyrightConfig.site;
                if (site.slice(-1) != "/") {
                    site += '/';
                }
                var lang = this.options.language;
                if (lang) {
                    lang += '/';
                }
                var url = page.path;
                var readmeReg = /\/?\bREADME\.md$/;
                if (readmeReg.test(url)) {
                    url = site + lang + (url === 'README.md' ? '' : url.replace(readmeReg, '/'));
                } else {
                    url = site + lang + url.replace(/.md$/, '.html');
                }
                var copyright = '\n\n```html\n作者: ' + copyrightConfig.author + '\n链接: ' + url + '\n来源: ' + copyrightConfig.website + '\n本文原创发布于「' + copyrightConfig.website + '」,转载请注明出处,谢谢合作!\n```\n';
                if (copyrightConfig.image) {
                    copyright += `\n![${copyrightConfig.image}](${copyrightConfig.image})`;
                }

                page.content = page.content + copyright;
            }

            return page;
        }
    }
};