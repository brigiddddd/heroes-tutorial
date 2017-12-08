import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';


import { AppRoutingModule }    from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroBirthdayComponent } from './hero-birthday.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterCalculatorComponent } from './power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { SizerComponent } from './sizer.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroBirthdayComponent,
    PowerBoosterCalculatorComponent,
    ExponentialStrengthPipe,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    SizerComponent,
    MessagesComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
