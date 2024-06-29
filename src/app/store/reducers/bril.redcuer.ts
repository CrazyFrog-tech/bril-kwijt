import {createReducer, on} from '@ngrx/store';
import {reset, selectChat, selectId} from '../actions/bril.actions';
import {initialState} from "./bril.state";

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
