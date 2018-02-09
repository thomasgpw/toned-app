import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-result-image',
  templateUrl: './result-image.component.html',
  styleUrls: ['./result-image.component.css']
})
export class ResultImageComponent implements OnInit {
  resultCanvas: HTMLCanvasElement;
  constructor() {
  }
  ngOnInit() {
    this.resultCanvas = document.getElementById('resultCanvas') as HTMLCanvasElement;
  }
  applyAlteredImageCanvas(alteredImageData: ImageData): void {
    this.resultCanvas.width = alteredImageData.width;
    this.resultCanvas.height = alteredImageData.height;
    this.resultCanvas.getContext('2d').putImageData(alteredImageData, 0, 0);
  }
}
