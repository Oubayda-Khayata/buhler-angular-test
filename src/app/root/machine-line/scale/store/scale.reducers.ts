import { ScaleState } from './scale.state';
import { scaleActions } from './scale.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

const statusReducer = createReducer(
  MachineStatus.Unknown,
  on(scaleActions.setStatusAction, (state, { status }): MachineStatus => status === MachineStatus.Unknown ? state : status)
);
export const scaleReducers: ActionReducerMap<ScaleState> = {
  status: statusReducer
}
