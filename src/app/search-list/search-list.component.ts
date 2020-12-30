import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from '../search-list/search.model'
import { SearchService } from './search.service';
import { Store } from '@ngrx/store';
import { retrievedSearchHistory, addToFavourites } from '../state/search.actions';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent {
  @Input() search: Array<Search>;
  @Output() add = new EventEmitter();
 
  searchText : String;
  constructor(
    private searchService: SearchService,
    private store: Store
  ) {}


  searchUsers():void {
    this.searchService
    .getSearchResult(this.searchText)
    .subscribe((Search) => { 
      this.store.dispatch(retrievedSearchHistory({ Search }));
      //console.log("Book Data :"+JSON.stringify(Book));
      this.add.emit(Search);
    });
  }
  addToFav(Search):void {
    this.store.dispatch(addToFavourites({ Search }));
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/