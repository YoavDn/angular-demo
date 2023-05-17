import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICharacter, IFilter, IInfo } from 'src/app/types';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  @Output() customEvent = new EventEmitter();
  @Output() setNewPage = new EventEmitter();
  @Output() searchValueChanged = new EventEmitter<string>();
  @Input() filter!: IFilter;
  @Input() info!: IInfo;
  @Input() characters!: ICharacter[];
  searchControl = new FormControl();
  filteredSuggestions: string[] = [];
  autoCompleteFocus = true;

  constructor() {}
  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchValue: string) => {
          this.searchValueChanged.emit(searchValue);
          return of(searchValue);
        })
      )
      .subscribe((searchValue: string) => {
        this.filteredSuggestions = this.filterSuggestions(searchValue);
        this.searchValueChanged.emit(searchValue);
      });
  }

  filterSuggestions(searchValue: string): string[] {
    return this.characters
      .map(({ name }) => name)
      .filter((suggestion: string) =>
        suggestion.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

  handleNewPage(page: number) {
    this.setNewPage.emit(page);
  }
}
