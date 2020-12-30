import { Search } from '../search-list/search.model';

export interface AppState {
  search: ReadonlyArray<Search>;
  collection: ReadonlyArray<Search>;
  favourites:ReadonlyArray<Search>;
}
