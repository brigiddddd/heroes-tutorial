import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactModule } from './contact/contact.module';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    ContactModule,
    // forRoot - Configures router for supplied routes, initializes Angular router itself
    // should only be called once in entire app
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], // makes router directives available to companion module that imports it
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {}
