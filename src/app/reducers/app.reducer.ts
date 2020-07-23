// import { Action, createReducer, on } from '@ngrx/store';
// import packageJson from "../../../package.json";
// import { Gist } from "../gist.model";
// import { Input } from "@angular/core";
//
//
// export const appFeatureKey = 'app';
//
// export interface State {
//   version: string,
//   title: string,
//   filterString: string,
//   gist: Gist,
//   baseUsername: string,
//   cachingStatus: {
//     userWasCached: false,
//     followingsWasCached: false,
//     followersWasCached: false,
//     gistsWasCached: false,
//     gistWasCached: false,
//     useCached: false,
//     users: Array<String>
//   };
//
// }
//
// export const initialState: State = {
//   version: '',
//   title: '',
//   filterString: '',
//   gist: {},
//   baseUsername: '',
//   cachingStatus: {
//     userWasCached: false,
//     followingsWasCached: false,
//     followersWasCached: false,
//     gistsWasCached: false,
//     gistWasCached: false,
//     useCached: false,
//     users: []
//   }
// };
//
// export const reducer = createReducer(
//   initialState,
// );
