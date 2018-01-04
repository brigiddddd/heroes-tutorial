// Parent and children communicate via a service
// A parent component and its children share a service whose interface enables bi - directional communication within the family.

// The scope of the service instance is the parent component and its children.
// Components outside this component subtree have no access to the service or their communications.

// The MissionControlComponent both provides the instance of the service that it shares with its
// children(through the providers metadata array) and injects that instance into itself through its constructor:

import { MissionService } from './../mission.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut"></app-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon', 'Fly to Mars', 'Fly to Vegas'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
