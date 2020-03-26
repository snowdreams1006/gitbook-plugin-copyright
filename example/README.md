# gitbook-plugin-copyright 👋

[![NPM Version](https://img.shields.io/npm/v/gitbook-plugin-copyright.svg)](https://www.npmjs.com/package/gitbook-plugin-copyright)
[![NPM Download](https://img.shields.io/npm/dt/gitbook-plugin-copyright.svg)](https://www.npmjs.com/package/gitbook-plugin-copyright)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-copyright#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-copyright/graphs/commit-activity)
[![License: MIT](https://img.shields.io/npm/l/gitbook-plugin-copyright.svg)](https://github.com/snowdreams1006/gitbook-plugin-copyright/blob/master/LICENSE)
[![Github: snowdreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号: 雪之梦技术驿站](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> `gitbook-plugin-copyright` 是基于Gitbook实现的**版权保护插件**,用于复制内容时**追加版权信息**以及文章末尾**添加版权小尾巴**.

### 🏠 [主页](https://github.com/snowdreams1006/gitbook-plugin-copyright#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-copyright/](https://snowdreams1006.github.io/gitbook-plugin-copyright/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-copyright/](https://snowdreams1006.gitee.io/gitbook-plugin-copyright/)
- Gitlab : [https://snowdreams1006.gitlab.io/gitbook-plugin-copyright/](https://snowdreams1006.gitlab.io/gitbook-plugin-copyright/)

## 效果

![copyright-use-preview.png](copyright-use-preview.png)

## 特色

- 支持复制内容**自动追加**版本保护信息
- 支持文章末尾**自动生成**版本保护尾巴
- 支持自定义小尾巴**版权保护图片**
- 支持 `Gitbook` **多语言环境**

## ✨ 示例

不仅 [gitbook-plugin-copyright](https://github.com/snowdreams1006/gitbook-plugin-copyright) **官方文档**已整合 `copyright` 版权保护插件,此外还提供了示例项目,详情参考 `example` 目录.

- [官方文档](https://github.com/snowdreams1006/gitbook-plugin-copyright/tree/master/docs)
- [官方示例](https://github.com/snowdreams1006/gitbook-plugin-copyright/tree/master/example)

```json
{
    "plugins": ["copyright"],
    "pluginsConfig": {
        "copyright": {
            "site": "https://snowdreams1006.github.io/gitbook-plugin-copyright",
            "author": "雪之梦技术驿站",
            "website": "雪之梦技术驿站",
            "image": "https://snowdreams1006.github.io/snowdreams1006-wechat-open.png",
            "copyProtect": false
        }
    }
}
```

## 🚀 用法

### Step #1 - 更新 `book.json` 配置文件

1. 在 `book.json` 配置文件中,添加 `copyright` 到 `plugins` 列表.
2. 在 `book.json` 配置文件中,配置 `pluginsConfig` 对象.

#### 单语言版简单示例 `book.json` 

```json
{
    "plugins": ["copyright"],
    "pluginsConfig": {
        "copyright": {
            "site": "https://snowdreams1006.github.io/gitbook-plugin-copyright",
            "author": "雪之梦技术驿站",
            "website": "雪之梦技术驿站",
            "image": "https://snowdreams1006.github.io/snowdreams1006-wechat-open.png",
            "copyProtect": false
        }
    }
}
```

#### 多语言版简单示例 `book.json` 

```json
{
    "plugins": ["copyright"],
    "pluginsConfig": {
        "copyright": {
            "site": "https://snowdreams1006.github.io/gitbook-plugin-copyright",
            "author": {
                "en": "snowdreams1006",
                "zh": "雪之梦技术驿站"
            },
            "website": {
                "en": "snowdreams1006's Gitbook",
                "zh": "雪之梦技术驿站"
            },
            "image": {
                "en": "https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg",
                "zh": "https://snowdreams1006.github.io/snowdreams1006-wechat-open.png"
            },
            "copyProtect": false
        }
    }
}
```

其中,配置参数含义如下: 

- `site` : [必选]部署网站基本路径
- `author` : [必选]作者信息
- `website` : [必选]网站名称
- `image` : [可选]版权保护图片
- `copyProtect` : [可选]复制内容是否追加版权保护信息

### Step #2 - 运行 gitbook 相关命令

- 运行 `gitbook install` 命令安装到本地项目

```bash
$ gitbook install
```

- 运行 `gitbook build` 命令构建本地项目或者 `gitbook serve` 启动本地服务.

```bash
$ gitbook build
```

或者

```bash
$ gitbook serve
```

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/snowdreams1006/gitbook-plugin-copyright/issues) 或者拉取 `Pull Request` 请求!

- Fork [gitbook-plugin-copyright](https://github.com/snowdreams1006/gitbook-plugin-copyright/fork)

- 创建功能分支

```bash
$ git checkout -b feature/fooBar
```

- 提交 `commit` 描述

```bash
$ git commit -am 'Add some fooBar'
```

- 推送到远程分支

```bash
$ git push origin feature/fooBar
```

- 创建新的 `Pull Request`

## 作者

👤 **snowdreams1006**

- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [gitbook-plugin-copyright](https://github.com/snowdreams1006/gitbook-plugin-copyright) 项目,感谢你的支持与认可!

![snowdreams1006-wechat-donate.jpg](snowdreams1006-wechat-donate.jpg)

## 📝 版权

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/gitbook-plugin-copyright/blob/master/LICENSE) licensed.
