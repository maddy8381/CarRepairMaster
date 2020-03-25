import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full'}, /*WildCart Routing */
  { path : 'home', component : HomeComponent},
  { path : 'about-us', component : AboutUsComponent},
  { path : 'services', component : ServicesComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : 'login', component : LoginComponent},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
