import { selectCurrentDate, selectRoot } from './../store/root.selectors';
import { Store } from '@ngrx/store';
import { RootState } from './../store/root.state';
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";

@Injectable()
export abstract class IRootFacade {
  public abstract readonly CurrentDate$: Observable<Date>;
  public abstract readonly State$: Observable<RootState>;
  public abstract GetStateSnapshot(): Promise<RootState>;
}

@Injectable()
export class RootFacade implements IRootFacade {

  constructor(
    private store: Store
  ) {}
  public CurrentDate$ = this.store.select(selectCurrentDate);
  public State$ = this.store.select(selectRoot);
  public async GetStateSnapshot(): Promise<RootState> {
    return await lastValueFrom(this.store.select(selectRoot));
  }
}
