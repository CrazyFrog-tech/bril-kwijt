export interface BrilState {
  id: string;
  chatMessageName: string;
}

export interface AppState {
  brilState: BrilState;
}

export const initialState: AppState = {
  brilState: {
    id: '',
    chatMessageName: '',
  },
};
