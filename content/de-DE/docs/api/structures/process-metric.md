# ProcessMetric Objekt

* `pid` Integer - Prozess Id des Prozesses.
* `Typ` String - Prozess-Typ. Einer der folgenden Werte:
  * `Browser`
  * `Tab`
  * `Utility`
  * `Zygote`
  * `Sandbox helper`
  * `GPU`
  * `Pepper Plugin`
  * `Pepper Plugin Broker`
  * `Unknown`
* `serviceName` String (optional) - The non-localized name of the process.
* `name` String (optional) - The name of the process. Examples for utility: `Audio Service`, `Content Decryption Module Service`, `Network Service`, `Video Capture`, etc.
* `cpu` [CPUUsage](cpu-usage.md) - CPU-Auslastung des Prozesses.
* `CreationTime` Number - Erstellungszeit für diesen Prozess. Die Zeit wird seit der Epoche als Anzahl von Millisekunden dargestellt. Da die `pid` wiederverwendet werden kann, nachdem ein Prozess stirbt, ist es nützlich, sowohl `pid` als auch `creationTime` zu verwenden, um einen Prozess eindeutig zu identifizieren.
* `memory` [MemoryInfo](memory-info.md) - Speicherinformationen für den Prozess.
* `sandboxed` Boolean (optional) _macOS_ _Windows_ - Whether the process is sandboxed on OS level.
* `integrityLevel` String (optional) _Windows_ - One of the following values:
  * `untrusted`
  * `niedrig`
  * `medium`
  * `hoch`
  * `unknown`
