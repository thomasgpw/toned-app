import { Injectable } from '@angular/core';

@Injectable()
export class ImageManipulationService {
  constructor() {
  }
  alterImageDataArray(colorSelectionList: string[], imageDataArray: Uint8ClampedArray): Uint8ClampedArray {
    const colorSelectionListLength = colorSelectionList.length;
    if (colorSelectionListLength > 0) {
      for (let iPixel = 0; iPixel < imageDataArray.length; iPixel += 4) {
        const pixelR = imageDataArray[iPixel];
        const pixelG = imageDataArray[iPixel + 1];
        const pixelB = imageDataArray[iPixel + 2];
        let bestColor: {
          score: number,
          rgbValues: number[]
        };
        for (let iColor = 0; iColor < colorSelectionListLength; iColor++) {
          const color = colorSelectionList[iColor];
          const colorR = parseInt(color.slice(1, 3), 16);
          const colorG = parseInt(color.slice(3, 5), 16);
          const colorB = parseInt(color.slice(5), 16);
          const colorScore = Math.abs(pixelR - colorR) + Math.abs(pixelG - colorG) + Math.abs(pixelB - colorB);
          if (bestColor === undefined || colorScore < bestColor.score) {
            bestColor = {
              score: colorScore,
              rgbValues: [colorR, colorG, colorB]
            };
          }
        }
        imageDataArray[iPixel] = bestColor.rgbValues[0];
        imageDataArray[iPixel + 1] = bestColor.rgbValues[1];
        imageDataArray[iPixel + 2] = bestColor.rgbValues[2];
        // Image data represents each pixel in rgba. Here I set every opacity pixel to full;
        imageDataArray[iPixel + 3] = 255;
      }
    }
    return imageDataArray;
  }
}
