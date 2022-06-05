import { CloserComponent } from './components/closer/closer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CloserEffects } from './store/closer.effects';
import { closerReducers } from './store/closer.reducers';
import { CLOSER_MACHINE_STATE_KEY } from './store/closer.state';
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
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/closer/', '.json');
}

@NgModule({
  declarations: [
    CloserComponent
  ],
  imports: [
    CommonModule,
    MachineModule,
    StoreModule.forFeature(CLOSER_MACHINE_STATE_KEY, closerReducers),
    EffectsModule.forFeature([CloserEffects]),
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
    CloserComponent
  ]
})
export class CloserModule {}
