import { MachineLineModule } from './machine-line/machine-line.module';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RootEffects } from './store/root.effects';
import { rootReducers } from './store/root.reducers';
import { ROOT_STATE_KEY } from './store/root.state';
import { StoreModule } from '@ngrx/store';
import { FacadeProviders } from './facades/facades';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/root/', '.json');
}

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MachineLineModule,
    StoreModule.forFeature(ROOT_STATE_KEY, rootReducers),
    EffectsModule.forFeature([RootEffects]),
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
    FacadeProviders
  ],
})
export class RootModule {}
