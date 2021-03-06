---
title: 停止支持 32 位 Linux
author: 菲克斯里塞堡
date: '2019-03-04'
---

Electron 团队将停止支持 32 位 Linux (ia32 / i386)，从Electron v4.0 开始。 支持基于32位的 Linux 安装的 Electron 最后版本是 Electron v3.1，它将获得支持版本直到Electron v6 被解除。 基于64 位的Linux和 `armv7l` 的支持将继续保持不变。

---

## Electron究竟不再支持什么？

您可能已经看到“64位”和“32位”的描述作为您计算机上的贴纸或下载软件的选项。 该词用来描述特定的计算机结构。 1990年代和2000年代初制造的大多数计算机都是使用基于32位结构的CPU制造的。 后来制造的大多数计算机都是以较新和较强的64位建筑为基础的。 64岁的天堂(得到它吗？ 而PlayStation 2是第一个广泛使用的新建筑的消费装置，2010年以后出售的计算机几乎完全含有64位处理器。 因此，支持一直在减少：谷歌在2016年3月停止为32位 Linux释放Chrome。 Canonical 在 2017 年停止提供 32 位桌面图像，并且与Ubuntu 18.10一起总共放弃了32位支持。 Arch Linux、基本OS和其他著名的Linux发行版已经放弃了对老化处理器架构的支持。

直到现在，Electron一直提供和支持运行在旧的32位架构上的构建。 从发布v4.0 开始，Electron团队将无法再提供32位Linux的二进制文件或支持。

Electron一直是一个充满活力的开源项目，我们继续支持和鼓励有兴趣为外来建筑建造Electron的开发人员。

## 这对开发者意味着什么？

如果您目前没有提供 Linux 应用程序的 32 位分布，不需要任何操作。

运输32位 Linux Electron 应用程序的项目将需要决定如何继续。 Electron 3 [将支持32位 Linux，直到](https://electronjs.org/docs/tutorial/support#supported-versions) Electron 6 发布，这将为决策和计划提供一些时间。

## 这对用户意味着什么？

如果您是 Linux 用户，不确定您是否正在运行一个64位基于系统， 您可能正在运行一个64位基础架构。 您可以在终端中运行 `lscpu` 或 `uname -m` 命令。 要么打印您当前的架构。

如果您在 32 位处理器上使用 Linux ，您可能已经遇到了为您的操作系统找到最近发布的软件的困难。 Electron团队与Linux社区的其他知名成员一道，建议您升级为一个64位基础架构。
