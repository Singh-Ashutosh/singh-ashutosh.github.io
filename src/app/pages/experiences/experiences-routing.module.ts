import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyExperience } from './';

const routes: Routes = [
    { path: '', component: MyExperience, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperiencesRoutingModule { }

export const ExperiencesComponents = [MyExperience];
