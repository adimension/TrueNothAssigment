import { createReducer, on, Action } from '@ngrx/store';

import { retrievedSearchHistory, retrievedFavList } from './search.actions';
import { Search } from '../search-list/search.model';

export const initialState: ReadonlyArray<Search> = [];

export const searchReducer = createReducer(
  initialState,
  on(retrievedSearchHistory, (state, { Search }) => [...Search]),
  on(retrievedFavList, (state, { Search }) => [...Search])
);
