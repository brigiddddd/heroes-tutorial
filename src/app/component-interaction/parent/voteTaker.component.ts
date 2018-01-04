// Parent listens for child event
// The child component exposes an EventEmitter property with which it emits events when something happens.
// The parent binds to that event property and reacts to those events.

// The parent VoteTakerComponent binds an event handler called onVoted() that responds to the child event payload
// $event and updates a counter.
// The framework passes the event argument—represented by $event—to the handler method, and the method processes it:
import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
  <h2>Should mankind colonize the Universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
  <app-voter *ngFor="let voter of voters"
    [name]="voter"
    (onVoted)="onVoted($event)">
  </app-voter>
`
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
