import { createAction, props } from '@ngrx/store';

export const loadUsernames = createAction(
  '[Username] Load Usernames'
);

export const loadUsernamesSuccess = createAction(
  '[Username] Load Usernames Success',
  props<{ data: any }>()
);

export const loadUsernamesFailure = createAction(
  '[Username] Load Usernames Failure',
  props<{ error: any }>()
);
