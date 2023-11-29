import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  resultado : any
  constructor() { }
 
  

  ngOnInit() {
  }
  async escanear(){
    await BarcodeScanner.checkPermission({ force: true});
    
    BarcodeScanner.hideBackground();
    document.querySelector('body')!.classList.add('scanner-active');
    const result = await BarcodeScanner.startScan();

    if (result.hasContent){
      this.resultado = result.content;
    }
  }
  async detenerScanner(){
    BarcodeScanner.hideBackground();
    document.querySelector('body')!.classList.add('scanner-active');
    BarcodeScanner.stopScan();
  }
}