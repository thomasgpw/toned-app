import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-selection-form',
  templateUrl: './image-selection-form.component.html',
  styleUrls: ['./image-selection-form.component.css']
})
export class ImageSelectionFormComponent implements OnInit {
  @Input() unalteredImageCatalog: HTMLImageElement[];
  @Output() imageSelectEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  imageSelectFunc(e: Event) {
    e.preventDefault();
    this.imageSelectEvent.emit((e.target as HTMLImageElement).id);
  }
}
