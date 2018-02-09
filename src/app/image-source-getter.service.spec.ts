import { TestBed, inject } from '@angular/core/testing';

import { ImageSourceGetterService } from './image-source-getter.service';

describe('ImageSourceGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageSourceGetterService]
    });
  });

  it('should be created', inject([ImageSourceGetterService], (service: ImageSourceGetterService) => {
    expect(service).toBeTruthy();
  }));
  describe('ImageSourceGetterService.getImageSources', () => {
    let imageSources: string[];
    it(
      'should be a function that returns a list of image paths in the form of strings',
      inject(
        [ImageSourceGetterService],
        (service: ImageSourceGetterService) => {
          imageSources = service.getImageSources();
          for (const imagePath of imageSources) {
            expect(imagePath).toMatch(/(?:.+\/)*(.+)$/);
          }
        }
      )
    );
    it(
      'should return paths that reference the unaltered-image-catalog folder inside the assets folder',
      inject(
        [ImageSourceGetterService],
        (service: ImageSourceGetterService) => {
          imageSources = service.getImageSources();
          for (const imagePath of imageSources) {
            const folders: string[] = imagePath.split('/');
            expect(folders[folders.length - 2]).toEqual('unaltered-image-catalog');
            expect(folders[folders.length - 3]).toEqual('assets');
          }
        }
      )
    );
  });
});
