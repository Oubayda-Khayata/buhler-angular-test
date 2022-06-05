import { IScaleFacade, ScaleFacade } from './scale.facade';
import { Provider } from "@angular/core";

export const FacadeProviders: Provider[] = [
  { provide: IScaleFacade, useClass: ScaleFacade, multi: false },
];
