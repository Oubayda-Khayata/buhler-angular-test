import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MachineStatus } from '@libs/machine/enums/machine-status.enum';

@Injectable()
export abstract class ICloserService {
  public abstract GetCloserStatus(): Observable<MachineStatus>;
}

@Injectable()
export class CloserService implements ICloserService {
  public GetCloserStatus(): Observable<MachineStatus> {
    let newStatus = MachineStatus.Unknown;
    if (Math.random() > .8) {
      newStatus = Math.floor(Math.random() * (Object.keys(MachineStatus).length / 2)) as MachineStatus;
    }
    return of(newStatus);
  }
}
