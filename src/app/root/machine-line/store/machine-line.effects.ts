import { Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { IMachineLineService } from "../services/machine-line.service";
import { machineLineActions } from './machine-line.actions';

@Injectable()
export class MachineLineEffects {
  constructor(
    private machineLineService: IMachineLineService,
    private actions$: Actions
  ) {}
  fetchMachineLine$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(machineLineActions.fetchMachineLineAction),
      switchMap(() => this.machineLineService.GetMachineLine().pipe(
        map(machineLine => machineLineActions.setMachineLineAction(machineLine))
      ))
    );
  });
}
