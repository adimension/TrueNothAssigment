import { createAction, props } from '@ngrx/store';

// Foollowing are the actions which are required to get,list,remove list or collection

export const addToHistory = createAction(
  '[History List] Add to history',
  props<{ Search }>()
);

export const addToFavourites = createAction(
  '[Fav List] Add to fav',
  props<{ Search }>()
);

export const removeFromHistory = createAction(
  '[History Collection] Remove from Collection',
  props<{ id }>()
);

export const retrievedSearchHistory = createAction(
  '[History List/API] Retrieve History Success',
  props<{ Search }>()
);
export const retrievedFavList = createAction(
  '[Fav List/API] Retrieve Fav Success',
  props<{ Search }>()
);
