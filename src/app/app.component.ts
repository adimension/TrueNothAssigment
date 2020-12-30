import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectSearchCollection, selectSearches } from './state/search.selectors';
import {selectFavouritesCollection} from './state/fav.selectors'
import {
  retrievedSearchHistory,
  addToHistory,
  removeFromHistory,
} from './state/search.actions';
import { SearchService } from './search-list/search.service';
import { Search } from './search-list/search.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  search$ = this.store.pipe(select(selectSearches));
  historyCollection$ = this.store.pipe(select(selectSearchCollection));
  favCollection$ = this.store.pipe(select(selectFavouritesCollection));

  onAdd(Search:Search) {
    this.store.dispatch(addToHistory({ Search }));
  }

  onRemove(id) {
    console.log("Reached here...."+id);
    this.store.dispatch(removeFromHistory({ id }));
  }

  constructor(
    private searchService: SearchService,
    private store: Store
  ) {}

  ngOnInit() {
    // this.searchService
    //   .getBooks()
    //   .subscribe((Book) => this.store.dispatch(retrievedSearchHistory({ Book })));
  }
}