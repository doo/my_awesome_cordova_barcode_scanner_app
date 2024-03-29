# My Awesome Cordova Ionic Barcode Scanner App

A simple Cordova Ionic demo app based on the tutorial in the blog post 
["Cordova: How to integrate our barcode scanning functionalities"](<https://scanbot.io/blog/cordova-barcode-scanner-tutorial-how-to-integrate-our-scanning-functionalities/>).

For a **full** example project which demonstrates **all** API methods of the Scanbot Barcode Scanner SDK Cordova Plugin
see the repo [scanbot-barcode-scanner-sdk-example-cordova-ionic](https://github.com/doo/scanbot-barcode-scanner-sdk-example-cordova-ionic).

## How to run this app

Install the latest versions of [Cordova](https://cordova.apache.org) and [Ionic](https://ionicframework.com).
Fetch this repository and navigate to the project directory.

```
cd my_awesome_cordova_barcode_scanner_app/
```

Install node modules:

```
npm install
```

Install Cordova platforms and plugins (defined in the config.xml of this app):

```
ionic cordova prepare
```

Connect a device via USB and run the app.

**Android:**

```
ionic cordova run android
```

**iOS:**

1) Prepare the iOS project for Xcode:

```
ionic cordova prepare ios
```

2) Open the project `platforms/ios/my_awesome_cordova_barcode_scanner_app.xcworkspace` in Xcode and adjust the *Signing & Capabilities* settings.

Then run the app in Xcode.
