import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Search } from '../search-list/search.model';

export const selectSearches = createSelector(
  (state: AppState) => state.search,
  (search: Array<Search>) => search
);

export const selectCollectionState = createFeatureSelector<
  AppState,
  ReadonlyArray<Search>
>("collection");

export const selectSearchCollection = createSelector(
  selectSearches,
  selectCollectionState,
  (search: Array<Search>, collection: Array<Search>) => {
    return collection;
   // return collection.map((id) => search.find((search) => {search.id === id}));
  }
);

