import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSelectionFormComponent } from './color-selection-form.component';

describe('ColorSelectionFormComponent', () => {
  let component: ColorSelectionFormComponent;
  let fixture: ComponentFixture<ColorSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
