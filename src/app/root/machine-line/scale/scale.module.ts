import { ScaleComponent } from './components/scale/scale.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ScaleEffects } from './store/scale.effects';
import { scaleReducers } from './store/scale.reducers';
import { SCALE_MACHINE_STATE_KEY } from './store/scale.state';
import { StoreModule } from '@ngrx/store';
import { FacadeProviders } from './facades/facades';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { ServiceProviders } from './services/services';
import { MachineModule } from '@libs/machine/machine.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/scale/', '.json');
}

@NgModule({
  declarations: [
    ScaleComponent
  ],
  imports: [
    CommonModule,
    MachineModule,
    StoreModule.forFeature(SCALE_MACHINE_STATE_KEY, scaleReducers),
    EffectsModule.forFeature([ScaleEffects]),
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
    FacadeProviders,
    ServiceProviders
  ],
  exports: [
    ScaleComponent
  ]
})
export class ScaleModule {}
