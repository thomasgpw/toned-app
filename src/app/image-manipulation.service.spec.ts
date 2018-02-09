import { TestBed, inject } from '@angular/core/testing';

import { ImageManipulationService } from './image-manipulation.service';

describe('ImageManipulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageManipulationService]
    });
  });

  it('should be created', inject([ImageManipulationService], (service: ImageManipulationService) => {
    expect(service).toBeTruthy();
  }));
});
