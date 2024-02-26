import {createAction, props} from '@ngrx/store';

export const selectId = createAction('[doesnt matter] Increment', props<{id:string}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
