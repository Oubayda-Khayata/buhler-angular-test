import { closerActions } from './../store/closer.actions';
import { selectStatus, selectCloser } from './../store/closer.selectors';
import { Store } from '@ngrx/store';
import { CloserState } from './../store/closer.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class ICloserFacade {
  public abstract readonly Status$: Observable<MachineStatus>;
  public abstract readonly State$: Observable<CloserState>;
  public abstract SetStatus(status: MachineStatus): void;
  public abstract GetStateSnapshot(): Promise<CloserState>;
}

@Injectable()
export class CloserFacade implements ICloserFacade {

  constructor(
    private store: Store
  ) {}
  public Status$ = this.store.select(selectStatus);
  public State$ = this.store.select(selectCloser);

  public SetStatus(status: MachineStatus): void {
    this.store.dispatch(closerActions.setStatusAction(status));
  }
  public async GetStateSnapshot(): Promise<CloserState> {
    return await lastValueFrom(this.store.select(selectCloser));
  }
}
