import { Provider } from "@angular/core";
import { IRootFacade, RootFacade } from "./root.facade";

export const FacadeProviders: Provider[] = [
  { provide: IRootFacade, useClass: RootFacade, multi: false },
];
