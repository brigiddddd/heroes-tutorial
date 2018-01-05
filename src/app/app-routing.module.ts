import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactModule } from './contact/contact.module';

// import { DashboardComponent } from './dashboard.component';
// import { HeroDetailComponent } from './heroes/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  // LAZY LOADING:
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: 'componentInteraction', loadChildren: 'app/component-interaction/component-interaction.module#ComponentInteractionModule' },

  // TODO:
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'componentInteraction', component: ComponentInteractionComponent }
];

@NgModule({
  imports: [
    ContactModule,
    // forRoot - Configures router for supplied routes, initializes Angular router itself
    // should only be called once in entire app
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] // makes router directives available to companion module that imports it
})
export class AppRoutingModule {}
