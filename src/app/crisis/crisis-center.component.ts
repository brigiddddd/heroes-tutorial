import { Component } from '@angular/core';

// Note: there is no selector!
// You won't embed this in a parent template, you use the router to navigate to it.
@Component({
  template: `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent {}
