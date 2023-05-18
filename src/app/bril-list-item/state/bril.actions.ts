import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  setId = '[Id Component] Set',
}

export const setId = createAction(ActionTypes.setId, props<{ id: string }>());
