// Parent and children communicate via a service
// A parent component and its children share a service whose interface enables bi-directional communication within the family.

// The scope of the service instance is the parent component and its children.
// Components outside this component subtree have no access to the service or their communications.

// The AstronautComponent also injects the service in its constructor.
// Each AstronautComponent is a child of the MissionControlComponent and therefore receives its parent's service instance:
import { MissionService } from './../mission.service';
import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-astronaut',
  template: `
  <p>
    {{astronaut}}: <strong>{{mission}}</strong>
    <button (click)="confirm()" [disabled]="!announced || confirmed"> Confirm</button>
  </p>
  `
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(mission => {
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
