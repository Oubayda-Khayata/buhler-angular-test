import { PackerState } from './packer.state';
import { packerActions } from './packer.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

const statusReducer = createReducer(
  MachineStatus.Unknown,
  on(packerActions.setStatusAction, (state, { status }): MachineStatus => status === MachineStatus.Unknown ? state : status)
);
export const packerReducers: ActionReducerMap<PackerState> = {
  status: statusReducer
}
