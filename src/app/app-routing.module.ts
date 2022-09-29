import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './pages/landing/landing.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((o) => LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
