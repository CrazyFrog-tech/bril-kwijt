import {createAction, props} from '@ngrx/store';

export const selectId = createAction('[doesnt matter] selectId', props<{id:string}>());

export const selectChat = createAction('[doesnt matter] selectChat', props<{chatMessageName:string}>());
export const reset = createAction('[Counter Component] Reset');
