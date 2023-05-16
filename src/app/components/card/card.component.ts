import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter } from 'src/app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Output() customEvent = new EventEmitter();
  @Input() character!: ICharacter;

  selectCharacter(char: ICharacter) {
    this.customEvent.emit(char);
  }
}
