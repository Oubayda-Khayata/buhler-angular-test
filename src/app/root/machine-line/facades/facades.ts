import { Provider } from "@angular/core";
import { IMachineLineFacade, MachineLineFacade } from './machine-line.facade';

export const FacadeProviders: Provider[] = [
  { provide: IMachineLineFacade, useClass: MachineLineFacade, multi: false },
];
