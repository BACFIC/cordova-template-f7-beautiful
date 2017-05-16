![template logo](logo.png "template logo")

# Framework7 - Vue - Webpack Cordova Template
You can start your new cordova project perfectly with this template.

This template uses:
* [Framework7](https://framework7.io)
* [Vue Js 2](https://vuejs.org/)
* [Webpack 2](https://webpack.github.io/)
* [Pug](https://pugjs.org)
* [Stylus](http://stylus-lang.com)
* [Action Comment](https://github.com/PhilippeAssis/actionComment)


## Minimum Requirements
* **Cordova:** _6.0.0_
* **Node.js:** _6.5.0_ (Supports ES6)

## WARNING (For Linux and Mac OS users):

For live-reload i can't find easy way to do fixed version of this. But you can develop your app with this way:

1. `cordova platform add ios browser` (browser needs for development in live-reload mode.)
2. `cordova run ios -- --lr` (wait till app opens in your ios emulator or phone. it will close console output after publish, so live-reload will not work. don't close the app and go to next step.)
3. `cordova run browser -- --lr` (you can use live-reload in your phone-emulator and browser at same time. you can edit your files in live-reload mode now.)

---

## Features

Hooks are smart. They can fix some problems for you. Fix list:
* `npm install` Automatically checks node js dependencies.
* `package.json` Renames `name` variable if it has a space characters and auto saves. (It needed for npm install)
* `www` Automatically manages `www` folder. You don't need to think about www folder. Your target is always `src` folder.
* `static` Static assets automatically sync on live reload!
* `CordovaHtmlOutputPlugin` Automatically adds `cordova.js` to html. You don't need to add to your file manually. It's helpful for webpack.
* `manifest.json` Some cordova plugins needs manifest.json in root folder. If you add manifest.json file to your `src` folder, our smart hooks automagically copy it to `www` folder!

###### Live Reload Related
* `config.xml` Live reload needs `<allow-navigation href="*"/>` in development mode. So our smart hooks manages this too. You don't need to think about it.
* `live-reload` Manages live-reload dependencies automatically. Just write your code, and don't think about dependencies.
* `device_router.html` Smart router in live-reload mode. It searches for best available ip for connect server. if it can't find, you can write ip:port manually.
* `CordovaDeviceRouter.js` In live-reload mode, you can connect to server from multiple devices. This file inject right `cordova.js` file to page. So you can connect to webpack-dev-server from multiple devices at same time.

## Installation
### IMPORTANT: Phonegap build tools not supported currently. I suggest to use cordova with this template.

This template need cordova or phonegap, for more information [cordova installation](https://cordova.apache.org/docs/en/latest/guide/cli/) or [phonegap installation](http://docs.phonegap.com/getting-started/1-install-phonegap/desktop/).

Our Magic words:

``` bash
cordova create myapp com.iam.myapp MyApp --template cordova-template-f7-beautiful
```

## Usage

You can use every cordova | phonegap commands.
You just have one more command option: `-- --lr`. It starts live reload.

### --env.
An alias is also available for --env. Being:
If you want to pass app and pay as environment variable use --env --app myApp --page home

In traditional webpack2 format you would do so:
`--env.app myApp --env.page home //don't work here`

In addition, it is possible to pass using `--wp.`:
`--wp.env.app myApp --wp.env.page home`

52/5000
Você quis dizer: No formato tradicional do webpack 2 você faria assim:
In traditional webpack2 format you would do so:
Example usage:
```
cordova run android -- --lr
cordova run browser -- --live-reload
phonegap run ios -- --lr
```


# Set of webpack banners
To define the tags that will be executed in the web pack use the prefix `--wp.`, Example: `--wp.env.app myApp`

You can check:
* [hookers.js](template_src/hooks/hookers.js),
* [beforedep.js](template_src/hooks/beforedep.js),
* [CordovaDeviceRouter.js](template_src/webpack/dev_helpers/CordovaDeviceRouter.js),
* [device_router.html](template_src/webpack/dev_helpers/device_router.html)

for more information.
