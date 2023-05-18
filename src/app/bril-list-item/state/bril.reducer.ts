import { createReducer, on } from '@ngrx/store';
import { setId } from './bril.actions';

export interface AppState {
  id: string;
}

export const initialState: AppState = {
  id: '',
};

export const brilReducer = createReducer(
  initialState,
  on(setId, (state, { id }) => {
    console.log('did the thing');
    return {
      ...state,
      id,
    };
  })
);
