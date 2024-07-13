import {createReducer, on} from '@ngrx/store';
import {reset, selectChat, selectAdId} from '../actions/bril.actions';
import {initialState} from "./bril.state";

export const counterReducer = createReducer(
  initialState,
  on(selectAdId, (state, {id}) => {
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
