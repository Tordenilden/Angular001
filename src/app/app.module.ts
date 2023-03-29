import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { MovieComponent } from './components/movie/movie.component';
import { PersonComponent } from './components/person/person.component';

// API "Access"
import { HttpClientModule } from '@angular/common/http';

import { SeatsComponent } from './components/seats/seats.component';
import { CustomerRequestComponent } from './components/customer-request/customer-request.component';

//reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // this is all our components
    AppComponent,
    MyFirstComponent,
    MovieComponent,
    PersonComponent,
    SeatsComponent,
    CustomerRequestComponent
  ],
  imports: [ // modules and similar is registrated here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  // reactive forms
    ReactiveFormsModule  // reactive forms
  ],
  providers: [], // kinda directives, I think some examples come later
  bootstrap: [AppComponent] // this is what is bootstrapped - what is started
})
export class AppModule { }
