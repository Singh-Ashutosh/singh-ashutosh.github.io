import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule, ExperiencesComponents } from './experiences-routing.module';

@NgModule({
    imports: [CommonModule, ExperiencesRoutingModule],
    declarations: ExperiencesComponents
})
export class ExperiencesModule { }
