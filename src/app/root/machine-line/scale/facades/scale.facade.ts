import { scaleActions } from './../store/scale.actions';
import { selectStatus, selectScale } from './../store/scale.selectors';
import { Store } from '@ngrx/store';
import { ScaleState } from './../store/scale.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class IScaleFacade {
  public abstract readonly Status$: Observable<MachineStatus>;
  public abstract readonly State$: Observable<ScaleState>;
  public abstract SetStatus(status: MachineStatus): void;
  public abstract GetStateSnapshot(): Promise<ScaleState>;
}

@Injectable()
export class ScaleFacade implements IScaleFacade {

  constructor(
    private store: Store
  ) {}
  public Status$ = this.store.select(selectStatus);
  public State$ = this.store.select(selectScale);

  public SetStatus(status: MachineStatus): void {
    this.store.dispatch(scaleActions.setStatusAction(status));
  }
  public async GetStateSnapshot(): Promise<ScaleState> {
    return await lastValueFrom(this.store.select(selectScale));
  }
}
