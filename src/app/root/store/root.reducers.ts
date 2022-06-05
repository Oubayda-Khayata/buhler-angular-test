import { rootActions } from './root.actions';
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { RootState } from "./root.state";

const currentDateReducer = createReducer(
  new Date(),
  on(rootActions.setCurrentDateAction, (_, { currentDate }): Date => currentDate)
);
export const rootReducers: ActionReducerMap<RootState> = {
  currentDate: currentDateReducer
}
