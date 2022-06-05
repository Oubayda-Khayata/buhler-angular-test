import { IScaleService } from './../services/scale.service';
import { switchMap, map } from 'rxjs/operators';
import { scaleActions } from './scale.actions';
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { interval } from 'rxjs';

@Injectable()
export class ScaleEffects {
  constructor(
    private scaleService: IScaleService
  ) {}

  // Mock the change of the internal status of the machine
  setStatus$ = createEffect(() => {
    return interval(1000).pipe(
      switchMap(() => this.scaleService.GetScaleStatus().pipe(
        map(status => scaleActions.setStatusAction(status))
      ))
    );
  });
}
