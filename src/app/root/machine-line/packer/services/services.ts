import { Provider } from "@angular/core";
import { IPackerService, PackerService } from "./packer.service";

export const ServiceProviders: Provider[] = [
  { provide: IPackerService, useClass: PackerService, multi: false },
];
