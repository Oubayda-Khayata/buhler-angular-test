import { MachineStatus } from "@libs/machine/enums/machine-status.enum";
import { createAction } from "@ngrx/store";

const setStatusAction = createAction('[Attacher Machine] Set Machine Status', (status: MachineStatus) => ({ status }));
export const attacherActions = {
  setStatusAction
}
