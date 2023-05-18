import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilter, IInfo } from 'src/app/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Output() setNewPage = new EventEmitter<number>();
  @Input() info!: IInfo;
  @Input() filter!: IFilter;

  get pagination(): number[] {
    if (this.info.prev === null) {
      return [this.filter.page + 2, this.filter.page + 1, this.filter.page];
    } else if (this.info.next === null) {
      return [this.filter.page, this.filter.page - 1, this.filter.page - 2];
    }
    return [this.filter.page + 1, this.filter.page, this.filter.page - 1];
  }

  handleNewPage(page: number) {
    this.setNewPage.emit(page);
  }
}
