import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICharacter, IFilter, IInfo } from 'src/app/types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() customEvent = new EventEmitter();
  @Output() setNewPage = new EventEmitter();
  @Input() filter!: IFilter;
  @Input() info!: IInfo;

  onInputNameChange() {
    this.customEvent.emit();
  }
  handleNewPage(page: number) {
    this.setNewPage.emit(page);
  }
}
