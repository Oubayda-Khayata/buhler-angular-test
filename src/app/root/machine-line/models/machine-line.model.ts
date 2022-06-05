import { MachineStatus } from '@libs/machine/enums/machine-status.enum';
export interface MachineLine {
  scale: MachineStatus;
  attacher: MachineStatus;
  packer: MachineStatus;
  closer: MachineStatus;
}
