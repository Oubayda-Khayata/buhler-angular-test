import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
    ],
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: '/error/notfound',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
