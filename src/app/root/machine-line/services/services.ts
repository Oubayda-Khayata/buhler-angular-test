import { Provider } from '@angular/core';
import { IMachineLineService, MachineLineService } from './machine-line.service';
export const ServiceProviders: Provider[] = [
  { provide: IMachineLineService, useClass: MachineLineService, multi: false },
];
