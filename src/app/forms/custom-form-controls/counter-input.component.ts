import { Component, Input, OnChanges } from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';

// export function validateCounterRange(c: FormControl) {
//   let err = {
//     rangeError: {
//       given: c.value,
//       max: 10,
//       min: 0
//     }
//   };

//   return c.value > 10 || c.value < 0 ? err : null;
// }

export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };
    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}

@Component({
  selector: 'opw-counter-input',
  template: `
  <div>
    <button (click)="increment()">+</button>
     {{ counterValue }}
    <button (click)="decrement()">-</button>
  </div>
  `,
  // REGISTER ControlValueAccessor (so Angular picks them up - otherwise, gets lost when code is transpiled).
  // Extend the multi-provicer for NG_VALUE_ACCESSOR with our own value accessor instance
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      // Change provider since the component itself now performs validation.
      // useValue: validateCounterRange,
      useExisting: CounterInputComponent,
      multi: true
    }
  ]
})
// Uses ControlValueAccessor. This interface takes care of writing a value from the form model into the view/DOM, and
//   informing other form directives and controls when the view / DOM changes.
export class CounterInputComponent implements OnChanges, ControlValueAccessor {
  @Input('counterValue') _counterValue = 0;

  @Input() counterRangeMax;
  @Input() counterRangeMin;

  validateFn: any = () => {};
  propagateChange: any = () => {};

  // Use getter and setter so we don't have to call propagateChange in multiple places
  get counterValue() {
    return this._counterValue;
  }
  set counterValue(val) {
    this._counterValue = val;
    // Call propagate change whenever the value changes (triggers the callback registered in registerOnChange)
    this.propagateChange(this._counterValue);
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  constructor() {}

  /* WE DON'T NEED ngOnInit because ngOnChanges happens anyway
  ngOnInit() {
    this.validateFn = createCounterRangeValidator(
      this.counterRangeMax,
      this.counterRangeMin
    );
  }
  */

  // What if max and min change via their bindings? Use ngOnChanges lifecycle hook...
  // ngOnChanges gets called before ngOnInit, so we can get rid of onInit.
  ngOnChanges(inputs): void {
    if (inputs.counterRangeMin || inputs.counterRangeMax) {
      this.validateFn = createCounterRangeValidator(
        this.counterRangeMax,
        this.counterRangeMin
      );
      this.propagateChange(this.counterValue);
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  /**
   * the method that writes a new value from the form model into the view or (if needed) the DOM property.
   * this is where we want to update our counterValue model as that's the thing that is used in this view.
   * This method gets called when the form is initialized, with the form model’s initial value
   * @param value
   */
  writeValue(value: any): void {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  /**
   * the method that registers a handler that should be called when something in the view has changed.
   * gets a function that tells other form directives and form controls to update their values.
   * want to call whenever counterValue changes through the view.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  /**
   * registers a handler specifically for when a control receives a touch event. We don't need that here.
   * @param fn
   */
  registerOnTouched(fn: any): void {}
}
