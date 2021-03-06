# Экспериментальные API

Некоторые Electrons API отмечены символом `_Experimental_` в документации. Этот тег указывает, что API не может считаться стабильным, и API может быть удален или изменен чаще, чем другие API с меньшим предупреждением.

## Условия для того, чтобы API был помечен как экспериментальные

Каждый может запросить API как экспериментальную функцию PR, disagreements о экспериментальной природе функции можно обсудить в API WG, если они не могут быть разрешены в PR.

## Процесс удаления экспериментальной метки

Once an API has been stable and in at least two major stable release lines it can be nominated to have its experimental tag removed.  Эта дискуссия должна произойти на встрече WG API.  Что нужно учитывать при обсуждении/выдвижении кандидатов:

* Должно быть соблюдено вышеуказанное условие "две основные конюшни для высвобождения"
* За это время никаких серьезных ошибок / проблем было вызвано принятием этой функции
* API достаточно стабилен и не сильно пострадал от обновлений Chromium
* Кто-нибудь использует API?
* Является ли API, выполняющий оригинальные предложенные usecases, имеет ли он какие-либо пробелы?
