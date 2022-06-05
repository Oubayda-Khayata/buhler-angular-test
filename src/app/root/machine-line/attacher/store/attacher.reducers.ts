import { AttacherState } from './attacher.state';
import { attacherActions } from './attacher.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

const statusReducer = createReducer(
  MachineStatus.Unknown,
  on(attacherActions.setStatusAction, (state, { status }): MachineStatus => status === MachineStatus.Unknown ? state : status)
);
export const attacherReducers: ActionReducerMap<AttacherState> = {
  status: statusReducer
}
