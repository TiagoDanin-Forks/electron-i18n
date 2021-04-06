---
title: '每周项目：Voltra'
author:
  - '0x00A'
  - aprileelcich
  - zeke
date: '2017-03-07'
---

本周我们会见了 [Aprile Elcich](https://twitter.com/aprileelcich) and [Paolo Fragemeni](https://twitter.com/0x00A) 谈论Voltra，一个 Electron驱动的音乐播放器。

---

## 什么是 Voltra？

[Voltra](https://voltra.co/) 是想要拥有自己音乐的人的音乐播放器。 它也是一个商店，您可以根据自己已经拥有的东西发现和购买新音乐。 这是无广告的桌面和手机跨平台。 它也没有对你进行间谍活动。

[![伏特-艺人视图](https://cloud.githubusercontent.com/assets/2289/23670061/4db0323c-031b-11e7-81fd-128e714e911c.jpg)](https://voltra.co/)

## 谁是Voltra？

任何听音乐的人。

## 您创建Voltra的动机是什么？

广播电台总是有很大一部分听众。 它正在离开广播波浪，进入互联网。 现在您可以按需租用音乐 — — 这是一个无线电恢复！ 因此，出现了许多新产品和服务。 但流媒体广播仍然让其他人控制着您的音乐和您如何体验音乐。

我们想要一种完全集中在您自己的音乐上的产品。 让我们很容易直接从艺术家或标签中发现和购买新音乐。

## 有免费版本吗？

桌面播放器完全免费。 [出售您的音乐也是免费的！](https://voltra.co/artists) 我们不受广告支持。

由于应用是免费的，我们可以稍后打开源码。 现在我们没有要管理的带宽。 我们还对我们想要做的事情和方向提出了非常具体的想法。 我们有一个积极的beta社区，我们把我们的反馈放在心中。

## 你如何赚钱？

我们有高级功能！

我们的 [Voltra 音频存档](https://voltra.co/premium/) 是专门为音乐设计的云备份服务。 我们不压缩或共享数据块。 您的音乐收藏已经为您提供了物理备份。

对于艺术家和标签，我们的 [Pro 会员](https://voltra.co/artists/pro) 提供工具，帮助他们接触更多相关的观众，例如分析和专业艺术家网页。

## 什么使Voltra不同？

设计和使用对我们来说非常重要。 我们希望给听众一个无干扰的监听体验！ 那里有一些有趣的音乐播放器和商店。 但其中许多国家比创作者更先进，更难使用。 我们想让尽可能多的人能够接近Voltra。

我们也不会从艺术家或标签上进行剪切。 这是我们的一个关键区别。 这是非常重要的，因为它降低了艺术家的屏障，让他们的音乐进入市场。

## 您做了什么设计 & 技术决定？

在设计Voltra时，我们考虑了本地应用和网络的 UI 规程，我们也对我们能够移除的东西作了很多考虑。 我们有一个活跃的私人beta小组，他们在过去几个月里向我们提供了重要的反馈。

我们发现专辑艺术和摄影对人们非常重要。 许多玩家只是文件列表。 关于拥有物理相册的最酷的事情之一是专辑艺术， 我们想要在Voltra桌面应用程序中强调这一点。

[![voltra-albumview](https://cloud.githubusercontent.com/assets/2289/23670056/4b0c18d4-031b-11e7-89e1-539e927a380d.jpg)](https://voltra.co/)

我们还保证不要对人民的档案感到吃惊。 我们使用文件监视，您可以随时随地放置您的文件，我们不会将它们重命名或为您移动。 我们有一个内嵌的数据库来跟踪监视目录的状态，以便我们能够跟踪新的信息。 即使该进程未运行。

## 构建Voltra时面临什么挑战？

我们花了大量时间集中在业绩上。 我们从框架开始，但移动到原版 Javascript。 根据我们的经验，它们所提供的概括性摘要超过了它们提出的业绩惩罚和仪式。

我们目前处理非常大量的收藏。 大型收藏可能意味着数以万计的图像！ 拥有节点。 sh 文件系统模块可直接从渲染过程中获取，使得快速在 DOM 事件的基础上下载和卸载大量图像非常容易。

一般来说， *[设置立即](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate)* 和 *[requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)* 已经成为在保持界面响应的同时进行大量处理的超重要工具。 更具体地说，将受CPU约束的任务分配到单独的进程确实有助于保持用户界面的响应性。 例如，我们将实际音频环境移动到一个单独的过程中。 通过 [IPC](https://electronjs.org/docs/glossary/#ipc) 与它通信，以避免忙碌用户界面可能出现的中断。

## 为什么你选择在Electron上建造Voltra？

浏览器的沙盒对我们的应用过于限制。 但我们也正在开发一个 web 播放器。 所以这是一个巨大的胜利，我们可以在两个实现之间分享几乎100%的代码。

我们实际上是通过使用 Swift 构建本地应用程序开始的。 我们发现的主要问题是，我们正在重新塑造许多东西。 该网络拥有世界上最大的开放源码生态系统。 所以我们很快切换到 Electron。

而且，最重要的是，你可以通过 Electron 开发一次，并且它应该在所有主要平台上使用 WorkTM 。 它没有保证，但是每个平台的本地编码成本肯定超过了电子引入的任何其他成本。

## 您最喜欢的 Electron？

**GTD！**: 拥有Node.js的网络堆栈和 Chromium 的展示层一起打包是一种使事情完成的配方。

**能力**: 这只是网页堆栈, 所以我们整个团队实际上参与了产品的建造。

**社区**: 有一个组织严密的社区知道如何真正地沟通！ 我们非常希望以这种支持来发展。

## 在哪些领域可以改进Electron？

我们希望看到Electron认可单个包装程序。 软件包对Electron 的重要性与软件包管理器对节点的同样重要。 用户土地中有多个软件包，每个软件包都有有趣的功能，但每个软件包都有漏洞。 社区的共识将有助于引导捐助方花费的精力。

## 接下来是什么？

我们目前正在开发一个移动应用，与艺术家和标签合作，将他们的音乐添加到Voltra 商店。 嘿！ 如果您是艺术家或标签， [现在注册](https://admin.voltra.co/signup)！ 当我们达到1 000万条轨道的目标时，我们计划开办这家商店。
