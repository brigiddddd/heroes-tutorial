import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactModule } from './contact/contact.module';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent }
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
