# Variabel Lingkungan

> Kontrol konfigurasi dan perilaku aplikasi tanpa mengubah kode.

Perilaku Elektron tertentu dikendalikan oleh variabel lingkungan karena diinisialisasi lebih awal dari pada baris perintah dan kode aplikasi.

Contoh kulit POSIX:

```sh
$ export ELECTRON _memungkinkan_LOGGING = benar $ electron
```

Contoh konsol jendela :

```powershell
& gt; atur ELECTRON _memungkinkan_LOGGING = benar
 & gt;  elektron
```

## Variabel Produksi

Variabel lingkungan berikut ditujukan terutama untuk digunakan pada saat runtime dalam aplikasi Elektron yang dikemas .

### `NODE_OPTIONS`

Electron includes support for a subset of Node's [`NODE_OPTIONS`](https://nodejs.org/api/cli.html#cli_node_options_options). The majority are supported with the exception of those which conflict with Chromium's use of BoringSSL.

Contoh:

```sh
export NODE_OPTIONS="--no-warnings --max-old-space-size=2048"
```

Unsupported options are:

```sh
--use-bundled-ca
--force-fips
--enable-fips
--openssl-config
--use-openssl-ca
```

`NODE_OPTIONS` are explicitly disallowed in packaged apps, except for the following:

```sh
--max-http-header-size
--http-parser
```

### `GOOGLE_API_kunci`

Geolocation support in Electron requires the use of Google Cloud Platform's geolocation webservice. To enable this feature, acquire a [Google API key](https://developers.google.com/maps/documentation/geolocation/get-api-key) and place the following code in your main process file, before opening any browser windows that will make geolocation requests:

```javascript
proses.env.GOOGLE_API_kunci = 'kamu_kunci_di sini'
```

By default, a newly generated Google API key may not be allowed to make geolocation requests. To enable the geolocation webservice for your project, enable it through the [API library](https://console.cloud.google.com/apis/library).

N.B. You will need to add a [Billing Account](https://cloud.google.com/billing/docs/how-to/payment-methods#add_a_payment_method) to the project associated to the API key for the geolocation webservice to work.

### `ELEKTRON_tidak_ASAR`

Disables ASAR support. This variable is only supported in forked child processes and spawned child processes that set `ELECTRON_RUN_AS_NODE`.

### `ELECTRON_menjalankan_sebagai_NODE`

Mulai proses sebagai proses Node.js normal.

In this mode, you will be able to pass [cli options](https://nodejs.org/api/cli.html) to Node.js as you would when running the normal Node.js executable, with the exception of the following flags:

* "--openssl-config"
* "--use-bundled-ca"
* "--use-openssl-ca",
* "--force-fips"
* "--enable-fips"

These flags are disabled owing to the fact that Electron uses BoringSSL instead of OpenSSL when building Node.js' `crypto` module, and so will not work as designed.

### ` ELECTRON_tidak_melapirkan_menghibur </ 0>  <em x-id="4"> jendela</ 1></h3>

<p spaces-before="0">Jangan lampirkan sesi konsol saat ini.</p>

<h3 spaces-before="0"><code> ELECTRON_memaksa_jendela_MENU_BAR </ 0>  <em x-id="4"> Linux </ 1></h3>

<p spaces-before="0">Jangan gunakan menu bar global di Linux.</p>

<h3 spaces-before="0"><code>ELECTRON_TRASH` _Linux_

Set the trash implementation on Linux. Default is `gio`.

Options:

* `gvfs-trash`
* `trash-cli`
* `kioclient5`
* `kioclient`

## Variabel Pembangunan

Variabel lingkungan berikut ditujukan terutama untuk keperluan pengembangan dan debugging.

### `ELECTRON_memungkinkan_LOGGING`

Mencetak log internal Chrome ke konsol.

### `ELECTRON_LOG_ASAR_READS`

When Electron reads from an ASAR file, log the read offset and file path to the system `tmpdir`. The resulting file can be provided to the ASAR module to optimize file ordering.

### `ELECTRON_memungkinkan_tumpuka _DUMPING`

Mencetak tumpukan jejak ke konsol saat Electron crash.

Variabel lingkungan ini tidak akan bekerja jika ` crashReporter </ 0> dimulai.</p>

<h3 spaces-before="0"><code> ELECTRON_DEFAULT_kesalahan_mode </ 0>  <em x-id="4"> jendela </ 1></h3>

<p spaces-before="0">Menunjukkan dialog crash Windows saat Electron crash.</p>

<p spaces-before="0">Variabel lingkungan ini tidak akan bekerja jika <code> crashReporter </ 0> dimulai.</p>

<h3 spaces-before="0"><code>ELECTRON_OVERRIDE_DIST_PATH`</h3>

When running from the `electron` package, this variable tells the `electron` command to use the specified build of Electron instead of the one downloaded by `npm install`. Pemakaian:

```sh
export ELECTRON_OVERRIDE_DIST_PATH=/Users/username/projects/electron/out/Testing
```

## Set By Electron

Electron sets some variables in your environment at runtime.

### `ORIGINAL_XDG_CURRENT_DESKTOP`

This variable is set to the value of `XDG_CURRENT_DESKTOP` that your application originally launched with.  Electron sometimes modifies the value of `XDG_CURRENT_DESKTOP` to affect other logic within Chromium so if you want access to the _original_ value you should look up this environment variable instead.