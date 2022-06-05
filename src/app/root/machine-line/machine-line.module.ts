import { MACHINE_LINE_STATE_KEY } from './store/machine-line.state';
import { machineLineReducers } from './store/machine-line.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FacadeProviders } from './facades/facades';
import { MachineLineComponent } from './components/machine-line/machine-line.component';
import { ServiceProviders } from './services/services';
import { AttacherModule } from './attacher/attacher.module';
import { PackerModule } from './packer/packer.module';
import { ScaleModule } from './scale/scale.module';
import { CloserModule } from './closer/closer.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MachineLineEffects } from './store/machine-line.effects';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/', '.json');
}

@NgModule({
  declarations: [
    MachineLineComponent
  ],
  imports: [
    CommonModule,
    ScaleModule,
    AttacherModule,
    PackerModule,
    CloserModule,
    StoreModule.forFeature(MACHINE_LINE_STATE_KEY, machineLineReducers),
    EffectsModule.forFeature([MachineLineEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
      defaultLanguage: 'en'
    }),
  ],
  providers: [
    ServiceProviders,
    FacadeProviders
  ],
  exports: [
    MachineLineComponent
  ]
})
export class MachineLineModule {}
