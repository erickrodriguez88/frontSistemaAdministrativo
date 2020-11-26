import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.component.html',
  styleUrls: ['./escanear-qr.component.css']
})
export class EscanearQRComponent implements OnInit {
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startCamera();
  }

  constraints = {
    video: {
        facingMode: "environment",
        width: { ideal: 4096 },
        height: { ideal: 2160 }
    }
};



  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { 
 navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
        alert('Sorry, camera not available.');
    }
}


handleError(error) {
  console.log('Error: ', error);
}

attachVideo(stream) {
  this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
}



}
