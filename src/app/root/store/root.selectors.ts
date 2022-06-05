import { ROOT_STATE_KEY, RootState } from './root.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectRoot = createFeatureSelector<RootState>(ROOT_STATE_KEY);

export const selectCurrentDate = createSelector(selectRoot, (state: RootState) => state.currentDate);
