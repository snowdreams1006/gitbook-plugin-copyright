# 从零到壹发布插件

## 什么是插件

`Gitbook` 插件是扩展 `Gitbook` 功能的最佳方式,如果 `Gitbook` 没有提供你想要的功能或者说网络上也没有现成的解决方案时,那么只剩下自食其力这么一条道路,自力更生开发自己的插件解决问题!

幸运的是,`Gitbook` 提供了插件机制留给开发者去扩展更多自定义功能,虽然开发文档不是特别完善,甚至有时候需要翻阅相关源码才能定位到暴露出的 `api`,但是这一切都不影响开发的热情,谁让一开始选定了 `Gitbook` 呢!

遗憾的是,`Gitbook` 已经停止了旧版服务,`gitbook-cli` 脚手架甚至也早已停止了维护,但是我心依旧钟爱于轻量级的脚手架,不抛弃不放弃.

- [gitbook官方文档](https://snowdreams1006.github.io/gitbook-official/)
 
> `Gitbook` 官方文档移植项目,原版英文文档和校准翻译中文文档,欢迎各位爱好者加入一起维护!

- [gitbook 入门教程](https://snowdreams1006.github.io/myGitbook/)

> 从入门到熟练的 `Gitbook` 系列文章,高级进阶章节详细介绍了插件开发的基础知识,浅显易懂全是干货!

## 为什么做插件

## 怎么快速做插件

## 总结和下节预告

## 克隆到本地

```bash
$ git clone git@github.com:snowdreams1006/gitbook-plugin-readmore.git
```

## 初始化 npm项目

```bash
$ npm init -y
```

## 发布npm项目

```bash
$ npm publish
```

```bash
$ git tag v0.0.1 -m "init"
```

```bash
$ npm search --keyword gitbook-plugin-copyright
```

```bash
$ git push origin master
```

```bash
$ npm version patch
```

```bash
$ git tag
```

```bash
$ git push origin v0.0.2
```

```bash
$ git push origin master
```

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

> https://johnnyting.github.io/posts/%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90readmegitignore%E6%96%87%E4%BB%B6/

```bash
readme
```

> https://github.com/kefranabg/readme-md-generator

- https://github.com/github/gitignore/
- http://www.gitignore.io/

```json
"engines": {
    "gitbook": ">=2.4.3"
  },
  "gitbook": {
    "properties": {
      "blogId": {
        "type": "string",
        "required": true,
        "description": "Openwrite blogId."
      },
      "name": {
        "type": "string",
        "required": true,
        "description": "Blog name."
      },
      "qrcode": {
        "type": "string",
        "required": true,
        "description": "Wechat qrcode."
      },
      "keyword": {
        "type": "string",
        "required": true,
        "description": "Wechat keyword."
      }
    }
  }
```
