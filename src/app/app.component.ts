import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageManipulationService } from './image-manipulation.service';
import { ImageSourceGetterService } from './image-source-getter.service';
import { ResultImageComponent } from './result-image/result-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ImageManipulationService,
    ImageSourceGetterService
  ]
})
export class AppComponent implements OnInit {
  @ViewChild(ResultImageComponent) resultImageInstance: ResultImageComponent;
  title = 'toned-app';
  colorSelectionList: string[];
  unalteredImageCatalog: HTMLImageElement[];
  imageSourceCatalog: string[];
  hiddenCanvas: HTMLCanvasElement;
  unalteredImageData: ImageData;
  constructor(
    readonly _imageManipulationService: ImageManipulationService,
    readonly _imageSourceGetterService: ImageSourceGetterService
  ) { }
  async ngOnInit() {
    this.hiddenCanvas = document.createElement('canvas');
    this.colorSelectionList = ['#ffffff', '#000000'];
    this.imageSourceCatalog = await this._imageSourceGetterService.getImageSources();
    this.unalteredImageCatalog = await this.createUnalteredImageCatalog(this.imageSourceCatalog);
    this.imageSelectFunc(0);
  }
  createUnalteredImageCatalog(imageSourceCatalog: string[]): HTMLImageElement[] {
    const unalteredImageCatalog: HTMLImageElement[] = [];
    for (let i = 0; i < imageSourceCatalog.length; i++) {
      const newImageSource = imageSourceCatalog[i];
      const newImage = new Image();
      newImage.src = newImageSource;
      newImage.alt = newImageSource.match(/(?:.+\/)*(.+)$/)[1];
      newImage.name = newImage.alt.match(/(.+)(?:\..+)$/)[1];
      unalteredImageCatalog.push(newImage);
    }
    return unalteredImageCatalog;
  }
  removeColorFunc(iColor: number): void {
    this.colorSelectionList.splice(iColor, 1);
  }
  addColorFunc(): void {
    this.colorSelectionList.push(this.getRandomColor());
  }
  getRandomColor(): string {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  }
  imageSelectFunc(iImage: number): void {
    const unalteredImage = this.unalteredImageCatalog[iImage];
    const unalteredImageData = this.setUnalteredImageData(unalteredImage);
    this.alterImageData(unalteredImageData);
  }
  setUnalteredImageData(unalteredImage: HTMLImageElement): ImageData {
    const imageWidth = unalteredImage.width;
    const imageHeight = unalteredImage.height;
    const hiddenCanvas = this.hiddenCanvas;
    hiddenCanvas.width = imageWidth;
    hiddenCanvas.height = imageHeight;
    const hiddenCanvasContext = hiddenCanvas.getContext('2d');
    console.log(imageWidth, imageHeight);
    hiddenCanvasContext.drawImage(unalteredImage, 0, 0);
    return this.unalteredImageData = hiddenCanvasContext.getImageData(0, 0, imageWidth, imageHeight);
  }
  alterImageData(imageData: ImageData): void {
    const alteredImageDataArray = this._imageManipulationService.alterImageDataArray(this.colorSelectionList, imageData.data);
    imageData.data.set(alteredImageDataArray);
    this.resultImageInstance.applyAlteredImageCanvas(imageData);
  }
}
