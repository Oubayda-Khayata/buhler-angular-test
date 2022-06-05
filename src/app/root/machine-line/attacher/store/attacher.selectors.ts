import { ATTACHER_MACHINE_STATE_KEY, AttacherState } from './attacher.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAttacher = createFeatureSelector<AttacherState>(ATTACHER_MACHINE_STATE_KEY);

export const selectStatus = createSelector(selectAttacher, (state: AttacherState) => state.status);
