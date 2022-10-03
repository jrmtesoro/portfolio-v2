import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-me',
      },
      {
        path: 'about-me',
        loadChildren: () =>
          import('./components/about-me/about-me.module').then(
            (m) => m.AboutMeModule
          ),
        data: { state: 'about' },
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./components/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
        data: { state: 'portfolio' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
