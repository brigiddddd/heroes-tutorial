import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsComponent } from './forms.component';
import { HeroListComponent } from './hero-form-reactive/hero-list/hero-list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { UserInputComponent } from './user-input.component';

const routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: 'user-input', component: UserInputComponent },
      { path: 'template-driven', component: HeroFormComponent },
      { path: 'reactive', component: HeroListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
