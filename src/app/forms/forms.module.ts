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
import {
  HeroFormTemplateComponent,
  ForbiddenValidatorDirective
} from './validation/hero-form-template/hero-form-template.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicFormComponent } from './dynamic/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic/dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from './dynamic/question-control.service';
import { QuestionService } from './dynamic/question.service';

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
    UserInputComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
    DynamicComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ]
})
export class MyFormsModule {}
