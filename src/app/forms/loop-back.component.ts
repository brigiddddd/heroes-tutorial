import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
    <div>Input has #box (template reference variable)</div>
    <input #box (keyup)="0">
    <p>box.value = {{box.value}}</p>
    *Note: This won't work at all unless you bind to an event.
    <p>Angular updates the bindings (and therefore the screen) only if the app does something in
    response to asynchronous events, such as keystrokes. This example code binds the keyup event
    to the number 0, the shortest template statement possible. While the statement does nothing
    useful, it satisfies Angular's requirement so that Angular will update the screen.</p>
  `,
  styles: []
})
export class LoopBackComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
