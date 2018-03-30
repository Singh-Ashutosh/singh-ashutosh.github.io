import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { PortfolioHeader } from './portfolio-header/portfolio-header.component';
import { PortfolioFooter } from './portfolio-footer/portfolio-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeader,
    PortfolioFooter
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
