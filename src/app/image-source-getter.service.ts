import { Injectable } from '@angular/core';

@Injectable()
export class ImageSourceGetterService {
  private readonly IMAGE_SOURCE_PATHS: string[];
  constructor() {
    this.IMAGE_SOURCE_PATHS = [
      'assets/unaltered-image-catalog/rainbowLandscape.jpg',
      'assets/unaltered-image-catalog/2015-08-13.jpg',
      'assets/unaltered-image-catalog/2015-08-15.jpg',
      'assets/unaltered-image-catalog/2015-08-19.jpg',
      'assets/unaltered-image-catalog/carr.jpg',
      'assets/unaltered-image-catalog/download.jpg',
      'assets/unaltered-image-catalog/FACE.png',
      'assets/unaltered-image-catalog/rainbowRaindrops.jpg',
      'assets/unaltered-image-catalog/Thomas.jpg',
      'assets/unaltered-image-catalog/LeSphinx.jpg'
    ];
  }
  getImageSources(): string[] {
    return this.IMAGE_SOURCE_PATHS;
  }
}
