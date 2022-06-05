import { IPackerService } from './../services/packer.service';
import { switchMap, map } from 'rxjs/operators';
import { packerActions } from './packer.actions';
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { interval } from 'rxjs';

@Injectable()
export class PackerEffects {
  constructor(
    private packerService: IPackerService
  ) {}

  // Mock the change of the internal status of the machine
  setStatus$ = createEffect(() => {
    return interval(1000).pipe(
      switchMap(() => this.packerService.GetPackerStatus().pipe(
        map(status => packerActions.setStatusAction(status))
      ))
    );
  });
}
