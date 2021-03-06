---
title: 网站Hiccups
author: zeke
date: '2018-02-12'
---

上个星期 [electronjs.org](https://electronjs.org) 网站有几分钟的关机 If you were affected by these brief outages, we're sorry for the inconvenience. 经过今天的一些调查，我们已经诊断出 这个根源，并且部署了一个 [修复](https://github.com/electron/electronjs.org/pull/1076)。

---

为了防止将来出现这种故障，我们已经在我们的应用上启用 [Heroku 阈值警报](https://devcenter.heroku.com/articles/metrics#threshold-alerting) 任何时候我们的 web 服务器都会积聚失败的请求或超越某个阈值的缓慢响应。 我们的团队将收到通知，以便我们能够 快速解决这个问题。

## 每种语言的离线文档

下次你在飞机上或在郊区 咖啡店开发Electron应用程序， 您可能想要拿到一份文档以供离线参考。 幸运的是，Electron的文档可用超过20种 语言作为Markdown文件提供。

```sh
git clone https://github.com/electron/electron-i18n
ls electron-i18n/content
```

## 带图形界面的脱机文档

[devdocs. o/electron](https://devdocs.io/electron/) 是一个便捷的网站， 储存文档供离线使用 不仅是 Electron 的项目，而且还有许多其他项目，例如 JavaScript, TypeScript, 节点 s、React、Angular和许多其他人。 当然， 也有一个Electron应用程序。 查看 [devdocs-app](https://electronjs.org/apps/devdocs-app) 在 Electron 站点。

[![](https://user-images.githubusercontent.com/8784712/27121730-11676ba8-511b-11e7-8c01-00444ee8501a.png)](https://electronjs.org/apps/devdocs-app)

如果您想安装应用程序而不使用您的鼠标或Trackpad，请给 [Electron Forge](https://electronforge.io/)的 `安装` 命令尝试：

```sh
npx electron-forge install egoist/devdocs-app
```