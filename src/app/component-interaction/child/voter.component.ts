// Parent listens for child event
// The child component exposes an EventEmitter property with which it emits events when something happens.
// The parent binds to that event property and reacts to those events.

// The child's EventEmitter property is an output property, typically adorned with an
// @Output decoration as seen in this VoterComponent:
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterComponent {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}
