import { ICloserFacade, CloserFacade } from './closer.facade';
import { Provider } from "@angular/core";

export const FacadeProviders: Provider[] = [
  { provide: ICloserFacade, useClass: CloserFacade, multi: false },
];
