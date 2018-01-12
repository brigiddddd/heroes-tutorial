import { CrisisListComponent } from './crisis/crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactModule } from './contact/contact.module';


const routes: Routes = [

  { path: 'crisis-center', component: CrisisListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
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
