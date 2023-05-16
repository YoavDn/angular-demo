import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter } from 'src/app/types';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('150ms ease-in')),
      transition('* => void', animate('150ms ease-out')),
    ]),
    trigger('dialogAnimation', [
      state('void', style({ transform: 'translate(-50% ,-45%)', opacity: 0 })),
      state('*', style({ transform: 'translate(-50% ,-50%)', opacity: 1 })),
      transition('void => *', [animate('150ms ease-in')]),
      transition('* => void', [animate('150ms ease-out')]),
    ]),
  ],
})
export class CharacterViewComponent {
  @Output() customEvent = new EventEmitter();
  @Input() character!: ICharacter;

  handleClick() {
    this.customEvent.emit();
  }
}
