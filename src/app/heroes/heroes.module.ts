import { SizerComponent } from './sizer.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterCalculatorComponent } from './power-boost-calculator.component';
import { HeroSearchComponent } from './hero-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroBirthdayComponent } from './hero-birthday.component';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroService } from './hero.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    HeroesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    // TODO: The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroListComponent,
    HeroBirthdayComponent,
    PowerBoosterCalculatorComponent,
    ExponentialStrengthPipe,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    SizerComponent,
    DashboardComponent
  ],
  exports: [],
  providers: [HeroService]
})
export class HeroesModule {}
