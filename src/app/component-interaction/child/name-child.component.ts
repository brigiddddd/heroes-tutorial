// Intercept input property changes with a setter
// Use an input property setter to intercept and act upon a value from the parent.

// The setter of the name input property in the child NameChildComponent trims the whitespace
// from a name and replaces an empty value with default text.
import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})

export class NameChildComponent {
  private _name = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string {
    return this._name;
  }
}
