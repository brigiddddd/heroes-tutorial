import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { createCounterRangeValidator } from './counter-input.component';

@Component({
  selector: 'app-custom-form-controls',
  template: `
  <div>
    From <a href="https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html">THOUGHTRAM Blog: Custom Form Controls in Angular</a>
  </div>
  <h3>Set Max and Min values</h3>
  <div> max value:
    <input  type="number" [(ngModel)]="max">
  </div>
  <div> min value:
    <input  type="number" [(ngModel)]="min">
  </div>
  Max Value: {{ max }}
  Min Value: {{ min }}

  <h3>Inside Template-driven Form</h3>
  <form #formT="ngForm">
    <opw-counter-input name="counter" [(ngModel)]="counterValue" [counterRangeMax]="max" [counterRangeMin]="min"></opw-counter-input>
    <!-- <button type="submit">Submit</button> -->
  </form>
  <p *ngIf="!formT.valid" style="color: red;">Counter is invalid!</p>
  <pre>formT.value: {{ formT.value | json}}</pre>
  <pre>formT.valid: {{ formT.valid }}</pre>


  <h3>Inside Model-driven Form (reactive)</h3>
  <form [formGroup]="form">
      <p>Control value: {{ form.controls.counter.value }}</p>
      <p>Min Value: {{min}}</p>
      <p>Max Value: {{max}}</p>
      <p>Form Value:</p>
      <pre>{{ form.value | json }}</pre>
      <pre>form.valid: {{ form.valid }}</pre>
    <opw-counter-input
      formControlName="counter"
      [counterRangeMax]="max"
      [counterRangeMin]="min"
      [counterValue]="50"
      ></opw-counter-input>
  </form>
  <p *ngIf="!form.valid" style="color: red;">Counter is invalid!</p>
  `,
  styles: []
})
export class CustomFormControlsComponent implements OnInit {
  counterValue = 5;
  max = 6;
  min = 4;

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      // TODO: Apparently you can't (or I can't) have the max and min be dynamic when doing the validator this way.
      // Okay, actually what apparently is happening is that the initial max/min values are always restricted.
      //   Then if you change them to be less than the max or greater than the min, those new controls hold.
      //   So, to truly fix it, we need to figure out how to get rid of that initial validation.
      //    e.g. Start out with them set at 4 and 6, and you can change either (or both to 5) and it will work.
      //         But you can never then set it to 7 or 3.
      counter: [this.counterValue, createCounterRangeValidator(this.max, this.min)]
    });
  }
}
