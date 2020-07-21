import { createAction, props } from '@ngrx/store';

export const loadTitles = createAction(
  '[Title] Load Titles'
);

export const loadTitlesSuccess = createAction(
  '[Title] Load Titles Success',
  props<{ data: any }>()
);

export const loadTitlesFailure = createAction(
  '[Title] Load Titles Failure',
  props<{ error: any }>()
);
