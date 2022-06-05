import { IPackerFacade, PackerFacade } from './packer.facade';
import { Provider } from "@angular/core";

export const FacadeProviders: Provider[] = [
  { provide: IPackerFacade, useClass: PackerFacade, multi: false },
];
