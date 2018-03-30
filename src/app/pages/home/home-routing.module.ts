import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioHome } from './';

const routes: Routes = [
  { path: '', component: PortfolioHome, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

export const HomeComponents = [PortfolioHome];
