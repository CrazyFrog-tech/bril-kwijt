import {createReducer, on} from '@ngrx/store';
import {reset, selectChat, selectId} from '../actions/counter.actions';
import {initialState} from "./counter.state";

export const counterReducer = createReducer(
  initialState,
  on(selectId, (state, {id}) => {
    return {
      brilState: {
        ...state.brilState,
        id: id
      }
    };
  })
  ,
  on(selectChat, (state, {chatMessageName}) => {
    return {
      brilState: {
        ...state.brilState,
        chatMessageName: chatMessageName
      }
    };
  }),
  on(reset, state => initialState)
);
