import { MachineStatus } from "@libs/machine/enums/machine-status.enum";

export interface PackerState {
  readonly status: MachineStatus;
}

export const PACKER_MACHINE_STATE_KEY = 'packer-machine';
