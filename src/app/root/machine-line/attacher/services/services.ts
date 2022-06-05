import { Provider } from "@angular/core";
import { IAttacherService, AttacherService } from "./attacher.service";

export const ServiceProviders: Provider[] = [
  { provide: IAttacherService, useClass: AttacherService, multi: false },
];
