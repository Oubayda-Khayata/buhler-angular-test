import { map } from 'rxjs/operators';
import { rootActions } from './root.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { interval } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class RootEffects {
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}

  setCurrentDate$ = createEffect(() => {
    return interval(1000).pipe(
      map(() =>
        rootActions.setCurrentDateAction(new Date())
      ));
    });
}
