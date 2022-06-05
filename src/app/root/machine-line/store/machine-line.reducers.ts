import { MachineLine } from './../models/machine-line.model';
import { MachineLineState } from './machine-line.state';
import { machineLineActions } from './machine-line.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

const machineLineReducer = createReducer(
  {
    scale: MachineStatus.Unknown,
    attacher: MachineStatus.Unknown,
    packer: MachineStatus.Unknown,
    closer: MachineStatus.Unknown
  },
  on(machineLineActions.setMachineLineAction, (_, { machineLine }): MachineLine => machineLine)
);
export const machineLineReducers: ActionReducerMap<MachineLineState> = {
  machineLine: machineLineReducer
}
