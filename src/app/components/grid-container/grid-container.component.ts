import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter, IInfo } from 'src/app/types';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
})
export class GridContainerComponent {
  @Output() customEvent = new EventEmitter();
  @Input() characters!: ICharacter[];
  @Input() info!: IInfo;

  selectCharacter(char: ICharacter) {
    this.customEvent.emit(char);
  }
}
