import { Component } from '@angular/core';
import ScanbotBarcodeSDK, { BarcodeResult, BarcodeScannerConfiguration } from 'cordova-plugin-scanbot-barcode-scanner';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private barcodeSdk = ScanbotBarcodeSDK.promisify();
  public imageFileUri: String = '';
  public barcodes: any;
  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

  }

  async scanBarcode(){
    const config: BarcodeScannerConfiguration = {
      barcodeImageGenerationType: ('FROM_VIDEO_FRAME'), // Use, if you want to receive a full sized image with barcodes.
      barcodeFormats: (['ALL_FORMATS']),
    };

    try {
      const result = await this.barcodeSdk.startBarcodeScanner(config);
      if (result.status === 'OK') {
        this.showBarcodeResults(result);
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }
 
  async showBarcodeResults(result: BarcodeResult) {
    console.log(result);
    const fileUri = result.imageFileUri;
    // see https://ionicframework.com/docs/building/webview/#file-protocol
    const convertedUri = (window as any).Ionic.WebView.convertFileSrc(fileUri);
    // see https://angular.io/guide/security#bypass-security-apis
    this.imageFileUri = this.sanitizer.bypassSecurityTrustUrl(convertedUri) as string;
    this.barcodes = result.barcodes;
  }

}
