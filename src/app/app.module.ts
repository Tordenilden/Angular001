import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { MovieComponent } from './components/movie/movie.component';
import { PersonComponent } from './components/person/person.component';

// API "Access"
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ // this is all our components
    AppComponent,
    MyFirstComponent,
    MovieComponent,
    PersonComponent
  ],
  imports: [ // modules and similar is registrated here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // kinda directives, I think some examples come later
  bootstrap: [AppComponent] // this is what is bootstrapped - what is started
})
export class AppModule { }
