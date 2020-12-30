import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from '../search-list/search.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { selectSearchCollection } from '../state/search.selectors';
import { select } from '@ngrx/store';
import { removeFromHistory } from '../state/search.actions';


@Component({
  selector: 'app-history-collection',
  templateUrl: './history-collection.component.html',
  styleUrls: ['./history-collection.component.css'],
})
export class HistoryCollectionComponent {
  @Input() collection: Array<Search>;
  @Output() remove = new EventEmitter();

  panelOpenState =true;

  constructor(){
    
  }

  furemoveFromHistory(id):void {
    //store.dispatch(removeFromHistory({ id }));
  }
}
