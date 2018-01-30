import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up1',
  template: `
    Key Up Input: <input (keyup)="onKey($event)">
    <button (click)="onKey($event)" value="buttonValue"> Click Me!</button>
    <p>values: {{values}}</p>
    <p>events: {{keys}}</p>
  `
})
export class KeyUp1Component {
  values = '';
  keys = '';
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
    this.keys += event.key + ' | ';
  }
}

@Component({
  selector: 'app-key-up4',
  template: `
    Input: <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
    <p>value: {{value}}</p>
    * Component no longer requires knowledge of the $event and its structure.
  `
})
export class KeyUp4Component {
  value = '';
  update(value: string) {
    this.value = value;
  }
}
