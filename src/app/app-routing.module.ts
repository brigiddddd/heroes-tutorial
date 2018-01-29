import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

import { ContactModule } from './contact/contact.module';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { MyFormsModule } from './forms/forms.module';

import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';


const routes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    ComponentInteractionModule,
    ContactModule,
    MyFormsModule,
    // forRoot - Configures router for supplied routes, initializes Angular router itself
    // should only be called once in entire app
    RouterModule.forRoot(routes, {
      enableTracing: true, // debuggin purposes only
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule], // makes router directives available to companion module that imports it
  providers: [CanDeactivateGuard, SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
