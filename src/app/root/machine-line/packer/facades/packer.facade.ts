import { packerActions } from './../store/packer.actions';
import { selectStatus, selectPacker } from './../store/packer.selectors';
import { Store } from '@ngrx/store';
import { PackerState } from './../store/packer.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class IPackerFacade {
  public abstract readonly Status$: Observable<MachineStatus>;
  public abstract readonly State$: Observable<PackerState>;
  public abstract SetStatus(status: MachineStatus): void;
  public abstract GetStateSnapshot(): Promise<PackerState>;
}

@Injectable()
export class PackerFacade implements IPackerFacade {

  constructor(
    private store: Store
  ) {}
  public Status$ = this.store.select(selectStatus);
  public State$ = this.store.select(selectPacker);

  public SetStatus(status: MachineStatus): void {
    this.store.dispatch(packerActions.setStatusAction(status));
  }
  public async GetStateSnapshot(): Promise<PackerState> {
    return await lastValueFrom(this.store.select(selectPacker));
  }
}
