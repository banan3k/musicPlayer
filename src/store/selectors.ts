import { createSelector } from "reselect";
import { RootState } from "./types";

const selectCounterState = (state: RootState) => state.app;

export const selectAlbums = createSelector(
  [selectCounterState],
  (counterState) => counterState.albums
);

export const selectAlbum = (index: number) =>
  createSelector(
    [selectCounterState],
    (counterState) => counterState.albums[index]
  );
