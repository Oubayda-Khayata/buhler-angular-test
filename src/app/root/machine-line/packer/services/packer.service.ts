import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class IPackerService {
  public abstract GetPackerStatus(): Observable<MachineStatus>;
}

@Injectable()
export class PackerService implements IPackerService {
  public GetPackerStatus(): Observable<MachineStatus> {
    let newStatus = MachineStatus.Unknown;
    if (Math.random() > .8) {
      newStatus = Math.floor(Math.random() * (Object.keys(MachineStatus).length / 2)) as MachineStatus;
    }
    return of(newStatus);
  }
}
