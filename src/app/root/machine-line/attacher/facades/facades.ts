import { IAttacherFacade, AttacherFacade } from './attacher.facade';
import { Provider } from "@angular/core";

export const FacadeProviders: Provider[] = [
  { provide: IAttacherFacade, useClass: AttacherFacade, multi: false },
];
