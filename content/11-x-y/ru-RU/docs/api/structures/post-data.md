# Объект PostData

* `type` String - Один из следующих вариантов:
  * `rawData` - Данные доступны как `Buffer`, в `rawData` поле.
  * `file` - Объект представляет файл. Для описания файла будут использоваться поля `filePath`, `offset`, `length` и `modificationTime`.
  * `blob` - Объект представляет `Blob`. Поле `blobUUID` будет использоваться для описания `Blob`.
* `bytes` String (опционально) - сырые байты данных в `Buffer`. Обязательно для типа `rawData`.
* `filePath` String (опционально) - Путь к загружаемому файлу. Обязательно для типа `file`.
* `blobUUID` String (опционально) - `UUID` загружаемого `Blob`. Обязательно для типа `blob`.
* `offset` Integer (опционально) - Смещение от начала загруженного файла, в байтах. Допустимо только для типа `file`.
* `length` Integer (необязательно) - Длина загружаемого файла в байтах. Если установлено значение `-1`, будет загружен весь файл. Допустимо только для типа `file`.
* `modificationTime` Double (optional) - время модификации файла представленного типом double, это количество секунд c начала `UNIX Эпохи` (01.01.1970). Допустимо только для типа `file`.