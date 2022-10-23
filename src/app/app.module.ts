import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogginComponent } from './component/user/loggin/loggin.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { EditMovieComponent } from './component/edit-movie/edit-movie.component';
import { NewMovieComponent } from './component/new-movie/new-movie.component';
import { MovieComponent } from './component/movie/movie.component';
import { HeaderComponent } from './component/header/header.component';
import { SpinnerComponent } from './component/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    RegistrationComponent,
    HomeComponent,
    NotFoundComponent,
    EditMovieComponent,
    NewMovieComponent,
    MovieComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
