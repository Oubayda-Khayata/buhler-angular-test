import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MachineLine } from '../models/machine-line.model';


@Injectable()
export abstract class IMachineLineService {
  public abstract GetMachineLine(): Observable<MachineLine>;
}

@Injectable()
export class MachineLineService implements IMachineLineService {

  constructor(
    private httpClient: HttpClient
  ) { }
  public GetMachineLine(): Observable<MachineLine> {
    return this.httpClient.get<MachineLine>('assets/data/machine-line.json');
  }
}
