import { AttacherComponent } from './components/attacher/attacher.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AttacherEffects } from './store/attacher.effects';
import { attacherReducers } from './store/attacher.reducers';
import { ATTACHER_MACHINE_STATE_KEY } from './store/attacher.state';
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
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/attacher/', '.json');
}

@NgModule({
  declarations: [
    AttacherComponent
  ],
  imports: [
    CommonModule,
    MachineModule,
    StoreModule.forFeature(ATTACHER_MACHINE_STATE_KEY, attacherReducers),
    EffectsModule.forFeature([AttacherEffects]),
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
    AttacherComponent
  ]
})
export class AttacherModule {}
