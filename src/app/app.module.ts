import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceInfoCardComponent } from './service-info-card/service-info-card.component';
import { ServicesOffCardComponent } from './services-off-card/services-off-card.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    PageNotFoundComponent,
    FooterComponent,
    ServiceInfoCardComponent,
    ServicesOffCardComponent,
    ServicesOfferedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
