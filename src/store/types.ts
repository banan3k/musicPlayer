import { Action, Dispatch } from "redux";

export interface AppState {
  albums: Album[];
}

export interface RootState {
  app: AppState;
}

export type AppThunk<ReturnType = void> = (
  dispatch: Dispatch<Action>,
  getState: () => RootState
) => ReturnType;

export interface Song {
  id: number;
  name: string;
  file: string;
}

export interface Album {
  id: number;
  name: string;
  cover: string;
  songs: Song[];
}
