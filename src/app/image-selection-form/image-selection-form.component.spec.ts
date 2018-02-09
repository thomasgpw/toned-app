import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectionFormComponent } from './image-selection-form.component';

describe('ImageSelectionFormComponent', () => {
  let component: ImageSelectionFormComponent;
  let fixture: ComponentFixture<ImageSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
