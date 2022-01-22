import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LinksComponent } from './top-bar/links/links.component';
import { EducationComponent } from './top-bar/education/education.component';
import { PortfolioComponent } from './top-bar/portfolio/portfolio.component';
import { ContactMeComponent } from './top-bar/contact-me/contact-me.component';
import { FunComponent } from './top-bar/fun/fun.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LinksComponent,
    EducationComponent,
    PortfolioComponent,
    ContactMeComponent,
    FunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
