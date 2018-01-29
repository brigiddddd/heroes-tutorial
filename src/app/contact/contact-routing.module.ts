import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';

const routes = [{ path: 'contacts', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
