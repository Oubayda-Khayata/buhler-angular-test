import { Provider } from "@angular/core";
import { ICloserService, CloserService } from "./closer.service";

export const ServiceProviders: Provider[] = [
  { provide: ICloserService, useClass: CloserService, multi: false },
];
