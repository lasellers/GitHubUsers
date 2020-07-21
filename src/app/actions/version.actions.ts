import { createAction, props } from '@ngrx/store';

export const loadVersions = createAction(
  '[Version] Load Versions'
);

export const loadVersionsSuccess = createAction(
  '[Version] Load Versions Success',
  props<{ data: any }>()
);

export const loadVersionsFailure = createAction(
  '[Version] Load Versions Failure',
  props<{ error: any }>()
);
