import { createReducer, on, Action } from '@ngrx/store';
import { addToHistory, removeFromHistory, addToFavourites } from './search.actions';
import { Search } from '../search-list/search.model'

export const initialState: ReadonlyArray<string> = [];

export const favReducer = createReducer(
  //This is initial state which is returned if other state does not match to input data into store
  initialState,
  //This is called whben stored need to be updated by Fav Data
  on(addToFavourites, (state, { Search }) => {
    if (state.indexOf(Search) > -1) return state;
      return [...state, Search];
  }),
  
);