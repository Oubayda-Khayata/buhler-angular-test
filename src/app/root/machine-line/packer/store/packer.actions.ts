import { MachineStatus } from "@libs/machine/enums/machine-status.enum";
import { createAction } from "@ngrx/store";

const setStatusAction = createAction('[Packer Machine] Set Machine Status', (status: MachineStatus) => ({ status }));
export const packerActions = {
  setStatusAction
}
