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
import { ComposeMessageComponent } from './compose-message.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only
  // constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
