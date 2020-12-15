import { Component,  OnInit,  ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.component.html',
  styleUrls: ['./escanear-qr.component.css']
})

export class EscanearQRComponent implements OnInit {
 
  @ViewChild('scanner', { static: false })  scanner: ZXingScannerComponent;

  ngOnInit(): void {

  }

  constraints = {
    video: {
        facingMode: "environment",
        width: { ideal: 4096 },
        height: { ideal: 2160 }
    }
  };

  qrResultString: string;

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

doSomething(): void {
  alert(this.scanner.scanSuccess);
}



}
