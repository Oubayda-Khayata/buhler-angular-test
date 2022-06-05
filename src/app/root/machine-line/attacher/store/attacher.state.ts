import { MachineStatus } from "@libs/machine/enums/machine-status.enum";

export interface AttacherState {
  readonly status: MachineStatus;
}

export const ATTACHER_MACHINE_STATE_KEY = 'attacher-machine';
