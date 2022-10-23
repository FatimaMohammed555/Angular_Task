import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieComponent } from './component/edit-movie/edit-movie.component';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { NewMovieComponent } from './component/new-movie/new-movie.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LogginComponent } from './component/user/loggin/loggin.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import {AuthGaurdService}from'./services/auth-gaurd.service';

const routes: Routes = [
  {path:'' ,redirectTo:'/Home',pathMatch:'full'},
  {path:'Home' , component:HomeComponent , canActivate:[AuthGaurdService]},
  {path:'movie' , component:MovieComponent , canActivate:[AuthGaurdService]},
  {path:'Loggin' , component:LogginComponent},
  {path:'Register' , component:RegistrationComponent},
  {path:'NewMovie' , component:NewMovieComponent , canActivate:[AuthGaurdService]},
  {path:'EditMovie/:pid' , component:EditMovieComponent , canActivate:[AuthGaurdService]},
  {path:'**' , component:NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
