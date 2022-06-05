import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/error/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
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
  declarations: [
    NotfoundComponent,
  ],
})
export class ErrorModule {}
