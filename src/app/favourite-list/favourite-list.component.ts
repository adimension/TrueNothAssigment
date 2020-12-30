import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search-list/search.model';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  @Input() favourites: Array<Search>;

  constructor() { 
    console.log("Favvvvvvv :"+this.favourites);
  }

  ngOnInit(): void {
  }

}
