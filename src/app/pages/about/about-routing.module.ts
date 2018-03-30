import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMe } from './';

const routes: Routes = [
  { path: '', component: AboutMe, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}

export const AboutComponents = [AboutMe];
