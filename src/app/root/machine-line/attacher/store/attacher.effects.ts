import { IAttacherService } from './../services/attacher.service';
import { switchMap, map } from 'rxjs/operators';
import { attacherActions } from './attacher.actions';
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { interval } from 'rxjs';

@Injectable()
export class AttacherEffects {
  constructor(
    private attacherService: IAttacherService
  ) {}

  // Mock the change of the internal status of the machine
  setStatus$ = createEffect(() => {
    return interval(1000).pipe(
      switchMap(() => this.attacherService.GetAttacherStatus().pipe(
        map(status => attacherActions.setStatusAction(status))
      ))
    );
  });
}
