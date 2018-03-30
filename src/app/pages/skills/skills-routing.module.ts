import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySkills } from './';

const routes: Routes = [
  { path: '', component: MySkills, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {}

export const SkillsComponents = [MySkills];
