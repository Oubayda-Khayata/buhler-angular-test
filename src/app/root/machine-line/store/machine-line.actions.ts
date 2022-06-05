import { MachineLine } from './../models/machine-line.model';
import { createAction } from "@ngrx/store";

const setMachineLineAction = createAction('[Machine Line] Set Machine Line Status', (machineLine: MachineLine) => ({ machineLine }));
const fetchMachineLineAction = createAction('[Machine Line] Fetch Machine Line Status');
export const machineLineActions = {
  setMachineLineAction,
  fetchMachineLineAction
}
