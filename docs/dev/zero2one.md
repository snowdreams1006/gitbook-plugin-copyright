# 从零到壹发布插件

## 什么是插件

`Gitbook` 插件是扩展 `Gitbook` 功能的**最佳方式**,如果 `Gitbook` **没有想要的功能**或者说网络上也没有**现成的解决方案**时,那么只剩下自食其力这条道路,让我们一起来**自力更生开发插件**解决问题吧!

幸运的是,`Gitbook` 提供了**插件机制**留给开发者去**扩展自定义功能**,虽然官方开发文档不是特别完善,甚至有时候需要**翻阅相关源码**才能定位到暴露出的 `api`,但是这一切都**不影响开发的热情**,谁让我们一开始就选定了 `Gitbook` 呢!

![copyright-dev-zero2one-gitbook-index.png](../images/copyright-dev-zero2one-gitbook-index.png)

遗憾的是,目前 `Gitbook` 已经**停止了旧版服务**,`gitbook-cli` 脚手架**甚至也早已停止了维护**,但是我心依旧钟爱于轻量级的脚手架,不抛弃不放弃,所以花费了一定心血整理出相关的资料文档.

- [`gitbook` 官方文档](https://snowdreams1006.github.io/gitbook-official/)

> 「雪之梦技术驿站」: `Gitbook` 官方文档移植项目,包括**原版英文和校准中文**,欢迎各位爱好者加入一起维护!

- [`gitbook` 入门教程](https://snowdreams1006.github.io/myGitbook/)

> 「雪之梦技术驿站」: 从入门到熟练运用系列文章,**高级进阶章节**详细介绍了插件开发的基础知识,浅显易懂全是干货!

- [`mygitalk` 评论插件](https://snowdreams1006.github.io/gitbook-plugin-mygitalk/)

> 「雪之梦技术驿站」: 基于 `gitalk` 实现的 `Gitbook` 插件,详细介绍了**从思路到实现的全过程**,二次封装第三方工具时值得借鉴.

- [`readmore` 阅读更多插件](https://snowdreams1006.github.io/gitbook-plugin-readmore/)

> 「雪之梦技术驿站」: 基于 `readmore` 实现的阅读更多插件,基于**模板渲染手段**封装第三方工具,和 `mygitalk` 插件的实现思路**互为补充**!

## 为什么做插件

> 「雪之梦技术驿站」: 因为没有现成插件,所以自力更生,因为力有所及,所以开源!

如果你和我一样**全平台发布**文章的话,估计你也会遇到和我一样的问题: **原创首发个人博客后转载自其他各大平台**,为了吸引流量总是要**添加原创声明小尾巴**,麻烦且费事!

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

当一次又一次重复这种无意义的劳动时,自然要寻求解决之道,**偷懒是促进生产力发展的原始动力**!

现在问题很清楚了,那就是需要开发一款 `Gitbook` 插件**帮助文章自动添加版权保护信息**,来减少人力劳动.

幸运的是,在平时逛的各大平台中慕课网和CSDN自带版权保护,因此不妨来个强强联合,开发出增强版版权保护插件.

- 慕课网版权声明

```
作者：雪之梦技术驿站
链接：https://www.imooc.com/article/293112
来源：慕课网
```

![copyright-dev-zero2one-imooc-copy-and-paste.png](../images/copyright-dev-zero2one-imooc-copy-and-paste.png)

> 「雪之梦技术驿站」: 慕课网手记文章复制内容时会自动追加版权保护信息,包括作者,链接和来源三部分.

- CSDN 版权声明

```
版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
本文链接：https://snowdreams1006.blog.csdn.net/article/details/102077796
————————————————
版权声明：本文为CSDN博主「雪之梦技术驿站」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://snowdreams1006.blog.csdn.net/article/details/102077796
```

![copyright-dev-zero2one-csdn-copyright-protect.png](../images/copyright-dev-zero2one-csdn-copyright-protect.png)

> 「雪之梦技术驿站」: CSDN原创博客开头自动追加版权声明信息,包括版权声明和本文链两部分,复制版权信息时会追加版权保护信息.

- 强强联合的版权保护插件声明

慕课网手记文章全文复制均会追加版权保护信息,而 CSDN原创博客开头显示版权信息复制该信息时才会追加版权保护信息,综合两者,不妨做个增强版版权保护插件.

```
作者: 雪之梦技术驿站
链接: https://snowdreams1006.github.io/myGitbook/advance/plugin-develop.html
来源: 雪之梦技术驿站
本文原创发布于雪之梦技术驿站,转载请注明出处,谢谢合作!
```

![copyright-dev-zero2one-plugin-plus-protect.png](../images/copyright-dev-zero2one-plugin-plus-protect.png)

> 「雪之梦技术驿站」: 文章末尾自动追加版权声明信息,复制任意文章内容时自动追加版权保护信息.

## 怎么快速做插件

根据插件的实现效果,我们暂且将该插件命名为 `copyright` 版权插件,接下来就是赶紧公开注册插件以免名字被抢先一步!

> 「雪之梦技术驿站」: 暂时并不着急于实现插件的作用,抢占先机很重要,小步快跑去注册插件吧!

- `npmjs` [官网](https://www.npmjs.com/)在线注册

> 「雪之梦技术驿站」:注册过程比较简单,用户名和邮箱之类的信息即可,不用付费也可以发布包.

- 命令行运行 `npm adduser` 注册

```bash
$ npm adduser
```

> 「雪之梦技术驿站」: 终端注册和网页版注册基本一致,需要用户名,密码和邮箱.

### 查询插件名称

按照 `Gitbook` 插件命名规范,**实用性插件必须**以 `gitbook-plugin-*` 开头,而我们的插件名为 `copyright` ,因为**完整名称**应该是 `gitbook-plugin-copyright` .

- 命令行中按照**关键字搜索**插件名称

```bash
$ npm search --keyword gitbook-plugin-copyright
```

> 「雪之梦技术驿站」: 如果没有搜索到项目,恭喜你,名称可用,抓紧时间赶紧注册!否则,重新起名,直到可用为止!

- npmjs 官网在线搜索插件名称

按照关键字搜索: [https://www.npmjs.com/search?q=gitbook-plugin-copyright](https://www.npmjs.com/search?q=gitbook-plugin-copyright)

![copyright-dev-zero2one-npmjs-search-no-result.png](../images/copyright-dev-zero2one-npmjs-search-no-result.png)

> 「雪之梦技术驿站」: 如果没有出现精确匹配 `exact match`,恭喜你,名称可用,请抓紧时间注册插件.否则另想新名,直到名称可用为止!

### 创建开源项目

经过上一步查询后确定插件名称暂时可用后,应该立即前往 `github` 创建**与插件同名的开源项目**,以便进行插件的**后续更新维护**.

- 创建开源项目

![copyright-dev-zero2one-github-create-project.png](../images/copyright-dev-zero2one-github-create-project.png)

> 「雪之梦技术驿站」: 创建插件项目时,建议**项目信息尽量补全**,添加 `README` 文件和版权类型.

- 克隆到本地项目

![copyright-dev-zero2one-github-clone-project.png](../images/copyright-dev-zero2one-github-clone-project.png)

> 「雪之梦技术驿站」: 点击**克隆或下载**按钮获取克隆链接,准备下载到本地继续开发插件项目.

```bash
$ git clone git@github.com:snowdreams1006/gitbook-plugin-copyright.git
```

- 初始化 npmjs 项目

克隆到本地工作空间后,**切换到插件项目目录**,运行初始化npm项目命令,生成默认 `package.json` 配置文件.

```bash
$ npm init -y
```

> 「雪之梦技术驿站」: 默认信息基本够用,暂时不必修改,重点是**快速抢占插件名称**!

- 发布 npmjs 项目

```bash
$ npm publish
```

> 「雪之梦技术驿站」: 发布 npmjs 包时应该先登录账号 `npm login`,并设置为 npmjs 官方镜像源,`npm set registry https://registry.npmjs.org/` .

### 成功抢注插件

如果命令行内运行 `npm publish` 命令发布插件没有报错信息,恭喜你!插件应该成功发布到 `npmjs` 包注册中心!

- 验证插件是否发布成功

如果发布插件时命令行没有报错,不论是在命令行内搜索插件还是网站内搜索插件,此时就应该能搜索到刚刚发布成功的插件.

```bash
$ npm search --keyword gitbook-plugin-copyright
```

> 「雪之梦技术驿站」: 命令行内再次运行 `npm search --keyword gitbook-plugin-copyright` 发现插件已成功抢注!

![copyright-dev-zero2one-npmjs-search-have-result.png](../images/copyright-dev-zero2one-npmjs-search-have-result.png)

> 「雪之梦技术驿站」: 搜索到的插件名称正是刚刚发布成功的插件,此时插件名称 `gitbook-plugin-copyright` 已成功抢注!

点击插件名称跳转到**插件介绍页面**,基本框架已初具模样,接下来的工作才是真正的插件开发.

![copyright-dev-zero2one-npmjs-plugin-detail-preview.png](../images/copyright-dev-zero2one-npmjs-plugin-detail-preview.png)

> 「雪之梦技术驿站」: 此时插件已成功发布到 npmjs 包管理中心,任何人都使用 `npm install gitbook-plugin-copyright` 安装插件,只不过暂时并没有任何代码逻辑而已!

现在虽然插件已发布到 `npmjs` 包管理工具,但是源代码还没有上传到远程服务器,无法进行后续的开源维护,因此此时创建一个里程碑,纪念下难忘的时刻并准备同步到 `github`.

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

至此,从创建插件到发布插件以及最后同步插件源码全部流程基本完成,从零到壹开发插件并发布就是这么简单!

## 相关总结和预告

本文主要介绍了**如何从0到1发布自己的插件**,虽然只是骨架,具体什么代码也没有,但是对于完整的开发流程而言已经足够了!

相信你也不会重复开发一个一模一样的 `gitbook-plugin-copyright` 插件,所以具体代码对于读者而言可能没有特别大的用处.

但是通过本文可以了解到开发插件其实并不难,实际开发中**大多数问题网络上基本上都有现成的解决方案**,只需要学会搜索外加拥有一定的学习能力,相信你最终也一定可以开发出自己的插件.

![copyright-dev-zero2one-plugin-plus-protect.png](../images/copyright-dev-zero2one-plugin-plus-protect.png)

### npmjs 相关命令

- 注册账号

```bash
$ npm adduser
```

> 「雪之梦技术驿站」: 命令行内注册信息比较简单,不如网页版注册还可以设置头像之类的,推荐网页版注册.

- 登录账号

```bash
$ npm login
```

> 「雪之梦技术驿站」: 不论哪种注册方式,**发布插件前都要先登录账号**以确认插件作者信息.

- 查看当前用户

```bash
$ npm whoami
```

> 「雪之梦技术驿站」: **显式登陆**后肯定知道刚才已经登录,**一段时间后还记得是谁在登陆吗**?此时,运行该命令就可以查看当前登录用户信息.

- 创建 npmjs 包

```bash
$ npm init -y
```

> 「雪之梦技术驿站」: 默认创建的配置文件 `package.json` 基本够用,也可以自行修改相关配置信息.

- 切换 npmjs 官方镜像源

```bash
$ npm set registry https://registry.npmjs.org/
```

> 「雪之梦技术驿站」: **强制切换成官方镜像源**,主要是针对可能使用[淘宝镜像源](http://npm.taobao.org/)的用户.

- 发布 npmjs 包

```bash
$ npm publish
```

> 「雪之梦技术驿站」: 发布插件前请**确保已经登录并切换到官方镜像源**,否则发布会失败!

- 按关键字搜索 npmjs 包

```bash
$ npm search --keyword gitbook-plugin-<package>
```

> 「雪之梦技术驿站」: 发布前未被注册时是搜不到结果,发布后的插件作者信息应该是当前用户.

### git 相关命令

- 克隆到本地项目

```bash
$ git clone git@github.com:<username>/gitbook-plugin-<package>.git
```

- 提交更改到本地版本库

```bash
$ git commit -am "change log"
```

- 创建本地标签版本

```bash
$ git tag <version> -m "publish log"
```

- 推送标签到远程服务器

```bash
$ git push origin <version>
```

- 推送最新代码到远程主干 `master` 

```bash
$ git push origin master
```

如果你有什么好的灵感或者想法,**赶紧去抢注吧**,毕竟名称可是全局唯一独一无二的呀!

下一节我们将开始**介绍如何给基本骨架注入生命力**,使其变成真正的 `Gitbook` 插件,甚至实现 `gitbook-plugin-copyright` 插件功能!

> 开源项目: [https://github.com/snowdreams1006/gitbook-plugin-copyright](https://github.com/snowdreams1006/gitbook-plugin-copyright)




