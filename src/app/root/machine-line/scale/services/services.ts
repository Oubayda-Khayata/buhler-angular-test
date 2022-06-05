import { Provider } from "@angular/core";
import { IScaleService, ScaleService } from "./scale.service";

export const ServiceProviders: Provider[] = [
  { provide: IScaleService, useClass: ScaleService, multi: false },
];
