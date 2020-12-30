import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Search } from '../search-list/search.model';

export const selectSearches = createSelector(
  (state: AppState) => state.search,
  (favourites: Array<Search>) => favourites
);

export const selectFavouritesState = createFeatureSelector<
  AppState,
  ReadonlyArray<Search>>("favourites");

export const selectFavouritesCollection = createSelector(
  selectSearches,
  selectFavouritesState,
  (search: Array<Search>,favourites: Array<Search>) => {
    return favourites;
  }
);

