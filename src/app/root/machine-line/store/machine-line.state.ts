import { MachineLine } from './../models/machine-line.model';

export interface MachineLineState {
  readonly machineLine: MachineLine;
}

export const MACHINE_LINE_STATE_KEY = 'machine-line';
