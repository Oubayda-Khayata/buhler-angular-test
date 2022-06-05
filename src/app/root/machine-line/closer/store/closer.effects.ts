import { ICloserService } from './../services/closer.service';
import { switchMap, map } from 'rxjs/operators';
import { closerActions } from './closer.actions';
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { interval } from 'rxjs';

@Injectable()
export class CloserEffects {
  constructor(
    private closerService: ICloserService
  ) {}

  // Mock the change of the internal status of the machine
  setStatus$ = createEffect(() => {
    return interval(1000).pipe(
      switchMap(() => this.closerService.GetCloserStatus().pipe(
        map(status => closerActions.setStatusAction(status))
      ))
    );
  });
}
