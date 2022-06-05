import { MachineLine } from './../models/machine-line.model';
import { MACHINE_LINE_STATE_KEY, MachineLineState } from './machine-line.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectMachineLine = createFeatureSelector<MachineLineState>(MACHINE_LINE_STATE_KEY);

export const selectMachineLineStatus = createSelector(selectMachineLine, (state: MachineLineState) => state.machineLine);

export const selectScaleStatus = createSelector(selectMachineLineStatus, (machineLine: MachineLine) => machineLine.scale);

export const selectAttacherStatus = createSelector(selectMachineLineStatus, (machineLine: MachineLine) => machineLine.attacher);

export const selectPackerStatus = createSelector(selectMachineLineStatus, (machineLine: MachineLine) => machineLine.packer);

export const selectCloserStatus = createSelector(selectMachineLineStatus, (machineLine: MachineLine) => machineLine.closer);
