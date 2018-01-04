// Parent interacts with child via local variable
// The parent component cannot data bind to the child's start and stop methods nor to its seconds property.

// You can place a local variable, #timer, on the tag <countdown-timer> representing the child component.
// That gives you a reference to the child component and the ability to access any of its properties or
// methods from within the parent template.

// This example wires parent buttons to the child's start and stop and uses interpolation to display the child's seconds property.

// Here we see the parent and child working together.
import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../child/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownLocalVarParentComponent {}

// Parent calls an @ViewChild()

// The local variable approach is simple and easy. But it is limited because the parent-child wiring must be done
// entirely within the parent template.The parent component itself has no access to the child.

// You can't use the local variable technique if an instance of the parent component class must read or write child
// component values or must call child component methods.

// When the parent component class requires that kind of access, inject the child component into the parent as a ViewChild.

// The following example illustrates this technique with the same Countdown Timer example.
// Neither its appearance nor its behavior will change. The child CountdownTimerComponent is the same as well.

// The switch from the local variable to the ViewChild technique is solely for the purpose of demonstration.

// It takes a bit more work to get the child view into the parent component class.

// First, you have to import references to the ViewChild decorator and the AfterViewInit lifecycle hook.
//   The ngAfterViewInit() lifecycle hook is an important wrinkle.
//   The timer component isn't available until after Angular displays the parent view. So it displays 0 seconds initially.
//     Then Angular calls the ngAfterViewInit lifecycle hook at which time it is too late to update the parent view's display
//       of the countdown seconds. Angular's unidirectional data flow rule prevents updating the parent view's in the same cycle.
//       The app has to wait one turn before it can display the seconds.
//     Use setTimeout() to wait one tick and then revise the seconds() method so that it takes future values from the timer component.

// Next, inject the child CountdownTimerComponent into the private timerComponent property via the @ViewChild property decoration.

// The #timer local variable is gone from the component metadata.
// Instead, bind the buttons to the parent component's own start and stop methods and present the ticking seconds in an
// interpolation around the parent component's seconds method.
// These methods access the injected timer component directly.

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
