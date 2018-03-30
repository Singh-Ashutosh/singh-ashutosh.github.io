import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PageNotFound } from './404/404.component';

@NgModule({
    imports: [CommonModule, PagesRoutingModule],
    declarations: [PageNotFound],
    providers: [],
    exports: [PageNotFound]
})
export class PagesModule { }
