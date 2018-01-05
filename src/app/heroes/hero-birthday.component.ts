import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `
  <p>The hero's birthday is {{ birthday | date:format | uppercase }}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
  `
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15);
  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
