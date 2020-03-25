import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full'}, /*WildCart Routing */
  { path : 'home', component : HomeComponent},
  { path : 'about-us', component : AboutUsComponent},
  { path : 'services', component : ServicesOfferedComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
