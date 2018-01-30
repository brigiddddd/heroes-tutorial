import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsComponent } from './forms.component';

const routes = [{ path: 'forms', component: FormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
