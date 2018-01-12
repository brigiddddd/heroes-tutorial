import { PageNotFoundComponent } from './not-found.component';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { CrisisModule } from './crisis/crisis.module';
import { CrisisListComponent } from './crisis/crisis-list.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    // CrisisModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
