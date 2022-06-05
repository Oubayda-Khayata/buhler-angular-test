import { CloserState } from './closer.state';
import { closerActions } from './closer.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

const statusReducer = createReducer(
  MachineStatus.Unknown,
  on(closerActions.setStatusAction, (state, { status }): MachineStatus => status === MachineStatus.Unknown ? state : status)
);
export const closerReducers: ActionReducerMap<CloserState> = {
  status: statusReducer
}
