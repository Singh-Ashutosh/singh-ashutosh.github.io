import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactMe } from './';

const routes: Routes = [
  { path: '', component: ContactMe, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

export const ContactComponents = [ContactMe];
