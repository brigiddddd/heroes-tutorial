import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { KeyUp1Component, KeyUp4Component } from './keyup.component';
import { FormsComponent } from './forms.component';
import { LoopBackComponent } from './loop-back.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { HeroDetailComponent } from './hero-form-reactive/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-form-reactive/hero-list/hero-list.component';
import { UserInputComponent } from './user-input.component';

@NgModule({
  imports: [CommonModule, FormsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormsComponent,
    KeyUp1Component,
    LoopBackComponent,
    KeyUp4Component,
    HeroFormComponent,
    HeroFormReactiveComponent,
    HeroDetailComponent,
    HeroListComponent,
    UserInputComponent
  ]
})
export class MyFormsModule {}
