import {createReducer, on} from '@ngrx/store';
import {  selectId,decrement, reset } from '../actions/counter.actions';
import {initialState} from "./counter.state";

export const counterReducer = createReducer(
  initialState,
  on(selectId, (state, {id}) => {
    return { ...state, id};
  })
,
  on(reset, state => initialState)
);
