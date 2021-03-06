---
title: 'Electron の舞台裏: Chromium をライブラリとしてビルドする'
author: zcbenz
date: '2017-03-03'
---

Electron は、Google のオープンソースプロジェクト Chromium をベースにしています。このプロジェクトは、他のプロジェクトで使用することを想定していません。 この記事では、Electron のライブラリとしての Chromium がどのように構築されているのか、またビルドシステムがどのように進化してきたのかを紹介します。

---

## CEF の利用

Chromium Embedded Framework (CEF) は、Chromium をライブラリ化し、Chromium のコードベースに基づいて安定した API を提供するプロジェクトです。 黎明期の Atom エディタや NW.js では CEF を使用していました。

安定した API を維持するために、CEF は Chromium の詳細をすべて隠蔽し、独自のインターフェースで Chromium の API をラップします。 そのため、Node.js をウェブページに統合するような、内部の Chromium API にアクセスする必要があったとき、CEF の利点が障害になりました。

そのため、結局 Electron も NW.js も Chromium の API を直接使うように切り替えました。

## Chromium を部品としてビルドする

Chromium は公式には外部プロジェクトをサポートしていませんが、コードベースはモジュール化されており、Chromium をベースに小さなブラウザを簡単に構築できます。 ブラウザインターフェイスを提供するコアモジュールは、コンテンツモジュールと呼ばれています。

コンテンツモジュールでプロジェクトを開発する際は、Chromium をプロジェクトの部品としてビルドするのが一番簡単です。 このためには、まず Chromium のソースコードをチェックアウトしてから、プロジェクトを Chromium の `DEPS` ファイルに追加します。

NW.js や Electron の非常に初期のバージョンでは、このようなビルド方法を使用しています。

この欠点は、Chromium がとても大きいコードベースであるため、相応に強力な マシンでビルドする必要があるということです。 一般的なラップトップであれば、5 時間以上かかります。 そのため、貢献できる開発者の数に多大な影響を与え、開発も遅くなりかねません。

## 単一の共有ライブラリとして Chromium をビルドする

コンテンツモジュールのユーザからすれば、ほとんどの場合で Electron が Chromium のコードを修正する必要はないので、Electron のビルドを改善する明白な方法は Chromium を共有ライブラリとしてビルドして Electron 内でそれをリンクすることです。 これにより、開発者は Electron に貢献する際に Chromium すべてをビルドする必要がなくなります。

[libchromiumcontent][] プロジェクトは [@aroben](https://github.com/aroben) によってこのために作成されました。 これは、Chromium のコンテンツモジュールを共有ライブラリとしてビルドし、Chromium のヘッダとビルド済みバイナリをダウンロードできるようにします。 libchromiumcontent の初期バージョンのコードは [こちらのリンクに][libcc-classic] あります。

libchromiumcontent の一部として [brightray][] プロジェクトも生まれました。これはコンテンツモジュールの周りに薄い層を提供します。

libchromiumcontent と brightray を併用することで、開発者は Chromium のビルドの詳細に踏み込まずに素早くブラウザをビルドできます。 そして、プロジェクトをビルドするための高速なネットワークと強力なマシンが必要なくなります。

Electron 以外に、[Breach ブラウザ][breach] のように、この方法でビルドされた Chromium をベースにしたプロジェクトもあります。

## エクスポートしたシンボルのフィルタリング

Windows では、単一の共有ライブラリでエクスポートできるシンボル数に制限があります。 Chromium のコードベースが大きくなるにつれ、libchromiumcontent がエクスポートするシンボル数はすぐに制限を超えてしまいました。

これは、DLL ファイル生成時に不要なシンボルをフィルタリングすることで解決しました。 [リンカに `.def` ファイルを提供し][libcc-def]、[名前空間の中にあるシンボルをエクスポートするかどうか判断する][libcc-filter] スクリプトを使うようにしました。

このアプローチを取ることで、Chromium がエクスポートされたシンボルを新しく追加し続けても、libchromiumcontent はより多くシンボルを削除することで共有ライブラリファイルを生成できるようになりました。

## コンポーネントビルド

libchromiumcontent の次の段階の話をする前に、まずは Chromium におけるコンポーネントビルドの概念を紹介しておきます。

巨大プロジェクトであるため、Chromium ではビルド時のリンクの段階で非常に長い時間がかかってしまいます。 大抵、開発者がちょっとした変更を加えると、最終的な出力が得られるまで 10 分ほどかかります。 これを解決するため、Chromium ではコンポーネントビルドを導入しました。Chromium 内の各モジュールを分離された共有ライブラリとしてビルドすることで、最終的なリンク作業に費やす時間が気にならないようにしました。

## 生バイナリの頒布

Chromium が成長を続ける中で、Chromium のエクスポートされたシンボルがあまりにも多くなり、コンテンツモジュールや Webkit のシンボルですらも制限を超えるようになりました。 シンボルを削減するだけでは、使用可能な共有ライブラリを生成できなくなったのです。

最終的に、単一の共有ライブラリを生成する代わりに [Chromium の生バイナリを頒布][libcc-gyp] しなければなりませんでした。

先ほど紹介したように、Chromium には 2 つのビルドモードがあります。 生のバイナリを頒布した結果、libchromiumcontent ではバイナリに対して 2 種類のディストリビューションを頒布しなければならなくなりました。 1 つは `static_library` ビルドと呼ばれるもので、Chromium の通常ビルドで生成された各モジュールすべての静的ライブラリをインクルードします。 もう 1 つは `shared_library` で、コンポーネントビルドで生成された各モジュールの共有ライブラリすべてをインクルードします。

Electron では、デバッグ版を libchromiumcontent の `shared_library` 版とリンクしています。これは、ダウンロードが少なく、最終的な実行ファイルをリンクする際に時間がかからないためです。 また、リリース版の Electron は libchromiumcontent の `static_library` 版とリンクしています。コンパイラはデバッグに重要なシンボルを完全に生成でき、リンカはどのオブジェクトファイルが必要かそうでないかを知っているため、より良い最適化を行えます。

そのため、通常の開発において開発者はデバッグ版をビルドするだけでよく、良好なネットワークや強力なマシンは不要です。 リリース版では、ビルドにより良いハードウェアを必要としますが、より最適化されたバイナリを生成できます。

## `gn` の更新

世界的に見ても最大級のプロジェクトであるため、通常のビルドシステムはほとんど Chromium のビルドには適していません。Chromium チームは独自のビルドツールを開発しています。

初期バージョンの Chromium はビルドシステムとして `gyp` を使用していましたが、動作が遅く、複雑なプロジェクトでは設定ファイルがわかりづらくなるという問題がありました。 何年もの開発の後に、Chromium はビルドシステムを `gn` に切り替えました。こちらの方がはるかに高速で明確なアーキテクチャとなっています。

`gn` の改良点の一つは、オブジェクトファイルのグループを表す `source_set` を導入したことです。 `gyp` では、各モジュールは `static_library` か `shared_library` のいずれかで表現されます。Chromium の通常のビルドでは、各モジュールの静的ライブラリを生成し、最終的な実行ファイルへリンクしていました。 `gn` を使うと、各モジュールはオブジェクトファイルの集まりだけを生成し、最終的な実行ファイルには全オブジェクトファイルをリンクするだけなので、中間の静的ライブラリファイルは生成されなくなります。

しかし、この改善は libchromiumcontent に大きなお世話でした。なぜなら、中間の静的ライブラリファイルは libchromiumcontent が実際に必要としていたのです。

これを解決する最初の試みは、[静的ライブラリファイルを生成するように `gn` にパッチを当てる][libcc-gn-hack] ことでした、これで問題は解決しましたが、まともな解決策には程遠いものでした。

2 つ目の試みは、[@alespergl](https://github.com/alespergl) による、[オブジェクトファイルのリストからカスタムの静的ライブラリを生成する][libcc-gn] ものでした。 これは、最初にダミービルドを実行して生成されたオブジェクトファイルのリストを収集してから、`gn` にそのリストを与えて静的ライブラリを実際にビルドするという仕掛けでした。 これは Chromium のソースコードを最小限変更しただけで、Electron のビルドアーキテクチャはそのままです。

## 概要

このように、Electron を Chromium の一部として構築するのに比べて、ライブラリとして Chromium を構築するにはより多くの労力と継続的なメンテナンスが必要になります。 しかし、後者は Electron のビルドに強力なハードウェアが不要となるため、より多くの開発者が Electron をビルドして貢献できるようになります。 この努力はそれだけの価値があります。

[libchromiumcontent]: https://github.com/electron/libchromiumcontent
[brightray]: https://github.com/electron/brightray
[breach]: https://www.quora.com/Is-Breach-Browser-still-in-development
[libcc-classic]: https://github.com/electron/libchromiumcontent/tree/873daa8c57efa053d48aa378ac296b0a1206822c
[libcc-def]: https://github.com/electron/libchromiumcontent/pull/11/commits/85ca0f60208eef2c5013a29bb4cf3d21feb5030b
[libcc-filter]: https://github.com/electron/libchromiumcontent/pull/47/commits/d2fed090e47392254f2981a56fe4208938e538cd
[libcc-gyp]: https://github.com/electron/libchromiumcontent/pull/98
[libcc-gn-hack]: https://github.com/electron/libchromiumcontent/pull/239
[libcc-gn]: https://github.com/electron/libchromiumcontent/pull/249

