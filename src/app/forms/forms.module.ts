import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { KeyUp1Component, KeyUp4Component } from './keyup.component';
import { FormsComponent } from './forms.component';
import { LoopBackComponent } from './loop-back.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [CommonModule, FormsRoutingModule, FormsModule],
  declarations: [
    FormsComponent,
    KeyUp1Component,
    LoopBackComponent,
    KeyUp4Component,
    HeroFormComponent
  ]
})
export class MyFormsModule {}
