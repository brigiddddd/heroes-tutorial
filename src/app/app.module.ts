import { DialogService } from './dialog.service';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import { CrisisCenterModule } from './crisis/crisis-center.module';
import { ComposeMessageComponent } from './compose-message.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    CrisisCenterModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
