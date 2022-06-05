import { PACKER_MACHINE_STATE_KEY, PackerState } from './packer.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectPacker = createFeatureSelector<PackerState>(PACKER_MACHINE_STATE_KEY);

export const selectStatus = createSelector(selectPacker, (state: PackerState) => state.status);
