import { attacherActions } from './../store/attacher.actions';
import { selectStatus, selectAttacher } from './../store/attacher.selectors';
import { Store } from '@ngrx/store';
import { AttacherState } from './../store/attacher.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class IAttacherFacade {
  public abstract readonly Status$: Observable<MachineStatus>;
  public abstract readonly State$: Observable<AttacherState>;
  public abstract SetStatus(status: MachineStatus): void;
  public abstract GetStateSnapshot(): Promise<AttacherState>;
}

@Injectable()
export class AttacherFacade implements IAttacherFacade {

  constructor(
    private store: Store
  ) {}
  public Status$ = this.store.select(selectStatus);
  public State$ = this.store.select(selectAttacher);

  public SetStatus(status: MachineStatus): void {
    this.store.dispatch(attacherActions.setStatusAction(status));
  }
  public async GetStateSnapshot(): Promise<AttacherState> {
    return await lastValueFrom(this.store.select(selectAttacher));
  }
}
