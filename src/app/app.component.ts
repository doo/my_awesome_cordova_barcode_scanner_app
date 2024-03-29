import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import ScanbotBarcodeSDK, { ScanbotBarcodeSDKConfiguration } from 'cordova-plugin-scanbot-barcode-scanner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private barcodeSDK = ScanbotBarcodeSDK.promisify();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initializeScanbotBarcodeSdk();
    });
  }
  
  private async initializeScanbotBarcodeSdk(){
    try {
      const config: ScanbotBarcodeSDKConfiguration = {
        licenseKey: '',
        enableNativeLogging: true,
        loggingEnabled: true, 
      };
      console.log(this.barcodeSDK);
      await this.barcodeSDK.initializeSdk(config);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }
}

