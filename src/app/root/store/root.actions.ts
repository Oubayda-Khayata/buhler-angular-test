import { createAction } from "@ngrx/store";

const setCurrentDateAction = createAction('[Root] Set Current Date', (currentDate: Date) => ({ currentDate }));
export const rootActions = {
  setCurrentDateAction
}
