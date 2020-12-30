import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Search } from '../search-list/search.model';
import { strict } from 'assert';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearchResult(searchText): Observable<Array<Search>> {
    return this.http
      .get<{ items: Search[] }>(
        'https://api.github.com/search/users?q='+searchText
      )
      .pipe(map((books) => { 
        var resultObject = {
          'id':Number(),
          "time":new Date,
          'items':[]
          
        }
        resultObject.items = books.items;
        var tempVar= [];
        tempVar.push(resultObject);
        return tempVar || [] 
      } 
      ));
  }
}
