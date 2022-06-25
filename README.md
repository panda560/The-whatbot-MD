Bot prueba
Una nueva inversión

<p align="center">
<img src="https://telegra.ph/file/06db0eb84b88d11d76e6a.jpg" alt="SHIRAORI BOT" width="500"/>

----           

## HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/ilmanhdyt/ShiraoriBOT-Md
cd ShiraoriBOT-Md
npm install
npm update
npm index
```

---------

## TERMUX
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/ilmanhdyt/ShiraoriBOT-Md
cd ShiraoriBOT-Md
yarn
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Instalación for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ilman](https://github.com/ilmanhdyt.png?size=150)](https://github.com/ilmanhdyt) | [![Istikmal](https://github.com/BochilGaming.png?size=150)](https://github.com/BochilGaming)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ilman](https://github.com/ilmanhdyt) | [Istikmal](https://github.com/BochilGaming)
 Author | yg nambah fitur | yg punya sc

## Donate
- [Saweria](https://saweria.co/ilmanhdyt)
