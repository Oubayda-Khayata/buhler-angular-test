import { MachineStatus } from "@libs/machine/enums/machine-status.enum";

export interface ScaleState {
  readonly status: MachineStatus;
}

export const SCALE_MACHINE_STATE_KEY = 'scale-machine';
