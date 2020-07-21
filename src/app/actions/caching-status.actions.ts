import { createAction, props } from '@ngrx/store';

export const loadCachingStatuss = createAction(
  '[CachingStatus] Load CachingStatuss'
);

export const loadCachingStatussSuccess = createAction(
  '[CachingStatus] Load CachingStatuss Success',
  props<{ data: any }>()
);

export const loadCachingStatussFailure = createAction(
  '[CachingStatus] Load CachingStatuss Failure',
  props<{ error: any }>()
);
