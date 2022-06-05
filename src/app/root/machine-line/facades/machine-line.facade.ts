import { map } from 'rxjs/operators';
import { machineLineActions } from './../store/machine-line.actions';
import { selectMachineLine, selectMachineLineStatus, selectScaleStatus, selectAttacherStatus, selectPackerStatus, selectCloserStatus } from './../store/machine-line.selectors';
import { Store } from '@ngrx/store';
import { MachineLineState } from './../store/machine-line.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { MachineLine } from '../models/machine-line.model';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class IMachineLineFacade {
  public abstract readonly State$: Observable<MachineLineState>;
  public abstract readonly MachineLine$: Observable<MachineLine>;
  public abstract readonly ScaleStatus$: Observable<MachineStatus>;
  public abstract readonly AttacherStatus$: Observable<MachineStatus>;
  public abstract readonly PackerStatus$: Observable<MachineStatus>;
  public abstract readonly CloserStatus$: Observable<MachineStatus>;
  public abstract FetchMachineLine(): void;
  public abstract GetStateSnapshot(): Promise<MachineLineState>;
}

@Injectable()
export class MachineLineFacade implements IMachineLineFacade {

  constructor(
    private store: Store
  ) {}
  public readonly State$ = this.store.select(selectMachineLine);
  public readonly MachineLine$ = this.store.select(selectMachineLineStatus);
  public readonly ScaleStatus$ = this.store.select(selectScaleStatus);
  public readonly AttacherStatus$ = this.store.select(selectAttacherStatus);
  public readonly PackerStatus$ = this.store.select(selectPackerStatus);
  public readonly CloserStatus$ = this.store.select(selectCloserStatus);

  public FetchMachineLine(): void {
    this.store.dispatch(machineLineActions.fetchMachineLineAction());
  }
  public async GetStateSnapshot(): Promise<MachineLineState> {
    return await lastValueFrom(this.store.select(selectMachineLine));
  }
}
