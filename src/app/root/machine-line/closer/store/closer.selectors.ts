import { CLOSER_MACHINE_STATE_KEY, CloserState } from './closer.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCloser = createFeatureSelector<CloserState>(CLOSER_MACHINE_STATE_KEY);

export const selectStatus = createSelector(selectCloser, (state: CloserState) => state.status);
