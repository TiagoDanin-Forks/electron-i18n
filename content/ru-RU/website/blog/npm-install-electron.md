---
title: npm install electron
author: zeke
date: '2016-08-16'
---

Начиная с версии Electron 1.3.1, вы можете выполнить `npm install electron --save-dev` для установки последней скомпилированной версии Electron в ваше приложение.

---

![npm install electron](https://cloud.githubusercontent.com/assets/378023/17259327/3e3196be-55cb-11e6-8156-525e9c45e66e.png)

## Предстроенный двоичный файл Electron

Если вы когда-либо работали в приложении Electron, то скорее всего вы столкнетесь с `сбором` npm пакета. Этот пакет является неотъемлемой частью почти каждого проекта Electron. После установки она обнаруживает вашу операционную систему и загружает готовый бинарный файл, который компилируется для работы на системной архитектуре.

## Новое имя

Процесс установки Electron часто был блоком преткновения для новых разработчиков. Многие люди смело пытались начать разработку Electron, запустив `npm install electron` вместо `npm install electron-prebuilt`, только для того, чтобы обнаружить (часто после много путаницы), что это не электрон `` они искали.

Это было потому, что существовал проект `электрон` на npm, созданный до того, как был реализован проект GitHub's Electron. Чтобы помочь сделать развитие Electron проще и более интуитивно понятным для новых разработчиков, мы дошли до владельца существующего `электрона` npm пакета, чтобы спросить, будет ли он готов использовать название. К счастью, он был фанатом нашего проекта и согласился помочь нам перестроить название.

## Предпостроил жизни на

Начиная с версии 1.3.1, мы начали публиковать [`, электрон`](https://www.npmjs.com/package/electron) и `электронные предварительно собранные` пакеты до npm в тандеме. Эти два пакета идентичны. Мы решили продолжить публикацию пакета под обоими именами, чтобы не помешать тысячам разработчиков, использующих в своих проектах `электрон предсборочный`. Мы рекомендуем обновить пакет `. сын` файлов, чтобы использовать новую зависимость `electron` , но мы продолжим выпуск новых версий `электро-предустановленных` до конца 2016 года.

[Электрон-пользователь/электронное хранилище](https://github.com/electron-userland/electron-prebuilt) будет оставаться каноническим домом `электронов` пакета npm.

## Большое спасибо

Мы обязаны особой благодарность [@mafintosh](https://github.com/mafintosh), [@maxogden](https://github.com/maxogden), и многие другие [разработчики](https://github.com/electron-userland/electron-prebuilt/graphs/contributors) для создания и поддержания `электронных предустановленных`, и за их неустанное обслуживание JavaScript, Node. и сообществ Electron.

And thanks to [@logicalparadox](https://github.com/logicalparadox) for allowing us to take over the `electron` package on npm.

## Обновление ваших проектов

Мы работали с сообществом над обновлением популярных пакетов, затрагиваемых этим изменением. Пакеты типа [электрон-упаковщика](https://github.com/electron-userland/electron-packager), [электро-пересборщика](https://github.com/electron/electron-rebuild), и [](https://github.com/electron-userland/electron-builder) уже были обновлены для работы с новым именем, продолжая поддерживать старое имя.

Если у вас возникли какие-либо проблемы с установкой этого нового пакета, сообщите нам о том, что открыл проблему в репозитории [electron-userland/electron-prebuilt](https://github.com/electron-userland/electron-prebuilt/issues) .

Для любых других проблем с Electron, пожалуйста, используйте репозиторий [electron/electron](https://github.com/electron/electron/issues) .

