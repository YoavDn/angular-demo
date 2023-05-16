import { Component, OnInit, Input } from '@angular/core';
import { ICharacter, IInfo, IFilter } from 'src/app/types';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  characters: ICharacter[] = [];
  info: IInfo | null = null;
  characterSelected: null | ICharacter = null;
  errors: any;
  title = 'angular-app';
  private _filter: IFilter = {
    query: '',
    page: 1,
  };

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  get filter() {
    return this._filter;
  }

  set filter(filter: IFilter) {
    this._filter = filter;
    this.handleFilterChanges();
  }

  handleFilterChanges(): void {
    if (this.filter) this.fetchData();
  }

  fetchData() {
    this.dataService
      .fetchData(this.filter.page, this.filter.query)
      .subscribe((response) => {
        this.characters = response.characters.results;
        this.info = response.characters.info;
      });
  }

  clearSearch() {
    this.filter = {
      ...this.filter,
      query: '',
    };
  }
  onSetNewPage(page: number) {
    this.filter = {
      ...this.filter,
      page,
    };
  }

  selectCharacter(char: ICharacter) {
    this.characterSelected = char;
  }

  closeModal() {
    this.characterSelected = null;
  }
}
