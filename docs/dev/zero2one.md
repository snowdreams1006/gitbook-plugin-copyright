# 从零到壹发布插件

## 什么是插件

`Gitbook` 插件是扩展 `Gitbook` 功能的最佳方式,如果 `Gitbook` 没有提供你想要的功能或者说网络上也没有现成的解决方案时,那么只剩下自食其力这么一条道路,自力更生开发自己的插件解决问题!

幸运的是,`Gitbook` 提供了插件机制留给开发者去扩展更多自定义功能,虽然开发文档不是特别完善,甚至有时候需要翻阅相关源码才能定位到暴露出的 `api`,但是这一切都不影响开发的热情,谁让一开始选定了 `Gitbook` 呢!

![copyright-dev-zero2one-gitbook-index.png](../images/copyright-dev-zero2one-gitbook-index.png)

遗憾的是,`Gitbook` 已经停止了旧版服务,`gitbook-cli` 脚手架甚至也早已停止了维护,但是我心依旧钟爱于轻量级的脚手架,不抛弃不放弃.

- [`gitbook` 官方文档](https://snowdreams1006.github.io/gitbook-official/)
 
> 「雪之梦技术驿站」: `Gitbook` 官方文档移植项目,包括原版英文和校准翻译中文,欢迎各位爱好者加入一起维护!

- [`gitbook` 入门教程](https://snowdreams1006.github.io/myGitbook/)

> 「雪之梦技术驿站」: 从入门到熟练的 `Gitbook` 系列文章,高级进阶章节详细介绍了插件开发的基础知识,浅显易懂全是干货!

- [`mygitalk` 评论插件](https://snowdreams1006.github.io/gitbook-plugin-mygitalk/)

> 「雪之梦技术驿站」: 基于 `gitalk` 实现的 `Gitbook` 插件,详细介绍了从思路到实现的全过程,二次封装第三方工具时值得借鉴.

- [`readmore` 阅读更多插件](https://snowdreams1006.github.io/gitbook-plugin-readmore/)

> 「雪之梦技术驿站」: 基于 `readmore` 实现的阅读更多插件,采用模板渲染手段封装第三方工具,和 `mygitalk` 插件的实现思路互为补充!

## 为什么做插件

> 「雪之梦技术驿站」: 没有现成插件,所以自力更生,力有所及,所以开源!

[![github](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![wechat](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)
[![今日头条](https://img.shields.io/badge/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://www.toutiao.com/c/user/86185341500/#mid=1624534658539532)
[![Bilibili](https://img.shields.io/badge/Bilibili-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://space.bilibili.com/236627025)
[![慕课网](https://img.shields.io/badge/%E6%85%95%E8%AF%BE%E7%BD%91-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://www.imooc.com/u/5224488/articles)
[![简书](https://img.shields.io/badge/%E7%AE%80%E4%B9%A6-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://www.jianshu.com/u/577b0d76ab87)
[![csdn](https://img.shields.io/badge/csdn-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.blog.csdn.net/)
[![博客园](https://img.shields.io/badge/%E5%8D%9A%E5%AE%A2%E5%9B%AD-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://www.cnblogs.com/snowdreams1006/)
[![掘金](https://img.shields.io/badge/%E6%8E%98%E9%87%91-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://juejin.im/user/582d5cb667f356006331e586)
[![思否](https://img.shields.io/badge/%E6%80%9D%E5%90%A6-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://segmentfault.com/u/snowdreams1006)
[![开源中国](https://img.shields.io/badge/%E5%BC%80%E6%BA%90%E4%B8%AD%E5%9B%BD-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://my.oschina.net/snowdreams1006)
[![腾讯云社区](https://img.shields.io/badge/%E8%85%BE%E8%AE%AF%E4%BA%91%E7%A4%BE%E5%8C%BA-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://cloud.tencent.com/developer/user/2952369/activities)

如果你和我一样全平台发布文章的话,估计你也会遇到和我一样的问题: 原创首发个人博客后转载自其他各大平台,为了吸引流量总是要添加原创声明小尾巴,麻烦且费事!

当一次又一次重复这种无意义的劳动时,自然要寻求解决之道,偷懒是促进生产力发展的原始动力!

现在问题很清楚了,那就是需要开发一款 `Gitbook` 插件帮助文章自动添加版权保护信息,来减少人力劳动.

幸运的是,在平时逛的各大平台中慕课网和CSDN自带版权保护,因此不妨来个强强联合,开发出增强版版权保护插件.

![copyright-dev-zero2one-imooc-copy-and-paste.png](../images/copyright-dev-zero2one-imooc-copy-and-paste.png)

```
作者：雪之梦技术驿站
链接：https://www.imooc.com/article/293112
来源：慕课网
```

> 「雪之梦技术驿站」: 慕课网手记文章复制内容时会自动追加版权保护信息,包括作者,链接和来源三部分.

![copyright-dev-zero2one-csdn-copyright-protect.png](../images/copyright-dev-zero2one-csdn-copyright-protect.png)

```
版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
本文链接：https://snowdreams1006.blog.csdn.net/article/details/102077796
————————————————
版权声明：本文为CSDN博主「雪之梦技术驿站」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://snowdreams1006.blog.csdn.net/article/details/102077796
```

> 「雪之梦技术驿站」: CSDN原创博客开头自动追加版权声明信息,包括版权声明和本文链两部分,复制版权信息时会追加版权保护信息.

慕课网手记文章全文复制均会追加版权保护信息,而 CSDN原创博客开头显示版权信息复制该信息时才会追加版权保护信息,综合两者,不妨做个增强版版权保护插件.

![copyright-dev-zero2one-plugin-plus-protect.png](../images/copyright-dev-zero2one-plugin-plus-protect.png)

```
作者: 雪之梦技术驿站
链接: https://snowdreams1006.github.io/myGitbook/advance/plugin-develop.html
来源: 雪之梦技术驿站
本文原创发布于雪之梦技术驿站,转载请注明出处,谢谢合作!
```

> 「雪之梦技术驿站」: 文章末尾自动追加版权声明信息,复制任意文章内容时自动追加版权保护信息,实现效果如下:

## 怎么快速做插件

根据插件的实现效果,我们暂且将该插件命名为 `copyright` 版权插件,接下来就是赶紧公开注册插件以免名字被抢先一步!

### 查询插件名称

按照 `Gitbook` 插件命名规范,实用性插件必须以 `gitbook-plugin-*` 开头,而我们的插件名为 `copyright` ,因为完整名称应该是 `gitbook-plugin-copyright` .

- 命令行中按照关键字搜索插件名称

```bash
$ npm search --keyword gitbook-plugin-copyright
```

> 「雪之梦技术驿站」: 如果没有搜索到项目,恭喜你,名称可用,抓紧时间赶紧注册!否则,重新起名,直到可用为止!

- npmjs 官网在线搜索插件名称

![copyright-dev-zero2one-npmjs-search-no-result.png](../images/copyright-dev-zero2one-npmjs-search-no-result.png)

```
https://www.npmjs.com/search?q=gitbook-plugin-copyright
```

> 「雪之梦技术驿站」: 如果没有出现精确匹配 `exact match`,恭喜你,名称可用,请抓紧时间注册插件.否则另想新名,直到名称可用为止!

### 创建开源项目

经过上一步查询后确定插件名称暂时可用后,应该立即前往 github 创建插件同名的开源项目,以便插件后续更新维护.

- 创建开源项目

![copyright-dev-zero2one-github-create-project.png](../images/copyright-dev-zero2one-github-create-project.png)

> 「雪之梦技术驿站」: 创建插件项目时,建议项目信息尽量补全,添加 `README` 文件和版权类型.

- 克隆到本地项目

![copyright-dev-zero2one-github-clone-project.png](../images/copyright-dev-zero2one-github-clone-project.png)

> 「雪之梦技术驿站」: 点击**克隆或下载**按钮获取克隆链接,准备下载到本地继续开发插件项目.

```bash
$ git clone git@github.com:snowdreams1006/gitbook-plugin-copyright.git
```

- 初始化 npmjs 项目

克隆到本地工作空间后,切换到插件项目,运行初始化项目命令,生成默认 `package.json` 配置文件.

```bash
$ npm init -y
```

> 「雪之梦技术驿站」: 默认信息基本够用,暂时不必修改,重点是快速抢占插件名称!

- 发布 npmjs 项目

```bash
$ npm publish
```

> 「雪之梦技术驿站」: 发布 npmjs 包时应该先登录账号 `npm login`,并设置为 npmjs 官方镜像源,`npm set registry https://registry.npmjs.org/` .

### 成功抢注插件

如果发布插件时命令行没有报错,不论是再次在命令行内搜索插件名称还是网站内搜索插件名称,此时就应该能搜索到刚刚发布成功的插件.

```bash
$ npm search --keyword gitbook-plugin-copyright
```

> 「雪之梦技术驿站」: 命令行内再次运行 `npm search --keyword gitbook-plugin-copyright` 发现插件已成功抢注!

![copyright-dev-zero2one-npmjs-search-have-result.png](../images/copyright-dev-zero2one-npmjs-search-have-result.png)

> 「雪之梦技术驿站」: 搜索到的插件名称正是刚刚发布成功的插件,此时插件名称 `gitbook-plugin-copyright` 已成功抢注!

点击插件跳转到插件介绍页面,基本框架已初具模样,接下来的工作才是真正的插件开发.

![copyright-dev-zero2one-npmjs-plugin-detail-preview.png](../images/copyright-dev-zero2one-npmjs-plugin-detail-preview.png)

> 「雪之梦技术驿站」: 此时插件已成功发布到 npmjs 包管理中心,任何人都使用 `npm install gitbook-plugin-copyright` 安装插件,只不过暂时并没有任何代码逻辑而已!

- 同步推送开源项目

插件已发布到 npmjs 包管理工具,源代码还没有上传到远程服务器,所以此时应立一个里程碑,纪念下难忘的时刻.

- 首先,本地创建 `v0.0.1` 版本

```bash
$ git tag v0.0.1 -m "init"
```

- 然后,推送到远程服务器

```bash
$ git push origin v0.0.1
```

![copyright-dev-zero2one-github-tag-preview.png](../images/copyright-dev-zero2one-github-tag-preview.png)

> 下载地址: [https://github.com/snowdreams1006/gitbook-plugin-copyright/releases](https://github.com/snowdreams1006/gitbook-plugin-copyright/releases)

- 最后,顺便更新主干 `master` 分支

```bash
$ git push origin master
```

## 总结和下节预告









