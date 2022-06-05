import { MachineStatus } from "@libs/machine/enums/machine-status.enum";

export interface CloserState {
  readonly status: MachineStatus;
}

export const CLOSER_MACHINE_STATE_KEY = 'closer-machine';
