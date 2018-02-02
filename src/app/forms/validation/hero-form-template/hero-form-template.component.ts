import { Component, OnInit, Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validator,
  Validators,
  ValidatorFn,
  NG_VALIDATORS
} from '@angular/forms';

import { Hero } from '../../../heroes/hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styles: [
    '.ng-valid[required], .ng-valid.required  { border-left: 5px solid #42A948; /* green */ }',
    '.ng-invalid:not(form)  { border-left: 5px solid #a94442; /* red */ }'
  ]
})
export class HeroFormTemplateComponent implements OnInit {
  hero: Hero;
  heroForm: FormGroup;

  constructor() {
    this.hero = new Hero(99, 'Heronomous', false);
  }

  ngOnInit() {
    this.heroForm = new FormGroup({
      nameR: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });
  }

  get nameR() {
    return this.heroForm.get('nameR');
  }

  get power() {
    return this.heroForm.get('power');
  }
}

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[forbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      // You may have noticed that the custom validation directive is instantiated with useExisting rather than useClass.
      // The registered validator must be this instance of the ForbiddenValidatorDirective—the instance in the form with its forbiddenName property bound to “bob".
      // If you were to replace useExisting with useClass, then you’d be registering a new class instance, one that doesn’t have a forbiddenName.
      multi: true
    }
  ]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}
