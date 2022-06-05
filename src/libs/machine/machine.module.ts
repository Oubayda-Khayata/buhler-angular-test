import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MachineComponent } from './components/machine.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/machine-line/machine/', '.json');
}

@NgModule({
  declarations: [
    MachineComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
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
  ],
  exports: [
    MachineComponent
  ]
})
export class MachineModule {}
