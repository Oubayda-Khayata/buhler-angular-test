import { PackerComponent } from './components/packer/packer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PackerEffects } from './store/packer.effects';
import { packerReducers } from './store/packer.reducers';
import { PACKER_MACHINE_STATE_KEY } from './store/packer.state';
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
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/packer/', '.json');
}

@NgModule({
  declarations: [
    PackerComponent
  ],
  imports: [
    CommonModule,
    MachineModule,
    StoreModule.forFeature(PACKER_MACHINE_STATE_KEY, packerReducers),
    EffectsModule.forFeature([PackerEffects]),
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
    PackerComponent
  ]
})
export class PackerModule {}
