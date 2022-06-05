import { SCALE_MACHINE_STATE_KEY, ScaleState } from './scale.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectScale = createFeatureSelector<ScaleState>(SCALE_MACHINE_STATE_KEY);

export const selectStatus = createSelector(selectScale, (state: ScaleState) => state.status);
