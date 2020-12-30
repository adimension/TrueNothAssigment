import { createReducer, on, Action } from '@ngrx/store';
import { addToHistory, removeFromHistory, addToFavourites } from './search.actions';
import { Search } from '../search-list/search.model'

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  //This is initial state which is returned if other state does not match to input data into store
  initialState,
  //This is  when search needed to be added to search history
  on(removeFromHistory, (state, { id }) => state.filter((id) => id !== id)),
  on(addToHistory, (state, { Search }) => {
    if (state.indexOf(Search) > -1) return state;
      return [...state, Search];
  })
);