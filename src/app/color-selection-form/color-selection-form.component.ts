import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-selection-form',
  templateUrl: './color-selection-form.component.html',
  styleUrls: ['./color-selection-form.component.css']
})
export class ColorSelectionFormComponent implements OnInit {
  @Input() colorSelectionList: string[];
  @Output() removeColorEvent: EventEmitter<number> = new EventEmitter();
  @Output() addColorEvent: EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeColorFunc(e: Event): void {
    this.removeColorEvent.emit(parseInt((e.target as Element).id, 10));
  }
  addColorFunc(): void {
    this.addColorEvent.emit(null);
  }
}
