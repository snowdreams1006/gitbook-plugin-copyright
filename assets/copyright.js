require([
    "gitbook",
    "jQuery"
], function(gitbook, $) {
    var copyrightConfig = {};

    gitbook.events.bind("start", function(e, config) {
        copyrightConfig = config.copyright || {};

        initCopyright();
    });

    gitbook.events.bind("page.change", initCopyright);

    function initCopyright() {
        window.copyright.initPage();
        window.copyright.initEvent();
    }

    (function(factory) {
        factory();
    })(function() {
        window.copyright = {
            initEvent: initEvent,
            initPage: initPage
        };

        function initPage() {
            initDOMHeight();
        }

        function initEvent() {
            $('body').on('copy', function(e) {
                e.preventDefault();
                var select = getSelection();
                if (!window.clipboardData) {
                    window.clipboardData = e.originalEvent.clipboardData;
                }

                var extraCopyrightInfo = '\n\n作者: ' + copyrightConfig.author + '\n链接: ' + copyrightConfig.site + '\n来源: ' + copyrightConfig.website + '\n本文原创发布于' + copyrightConfig.website + ',转载请注明出处,谢谢合作!\n';
                clipboardData.setData('text/plain', select + extraCopyrightInfo);
            });
        }

        function initDOMHeight() {
            $('body').css('height', document.documentElement.clientHeight + 'px');
        }
    });
});