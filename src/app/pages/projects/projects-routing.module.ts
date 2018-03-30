import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProjects } from './';

const routes: Routes = [
    { path: '', component: MyProjects, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }

export const ProjectsComponents = [MyProjects];
