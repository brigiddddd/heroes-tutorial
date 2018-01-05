import { MessageService } from './../messages/message.service';
// Parent and children communicate via a service
// A parent component and its children share a service whose interface enables bi - directional communication within the family.

// The scope of the service instance is the parent component and its children.
// Components outside this component subtree have no access to the service or their communications.

// This MissionService connects the MissionControlComponent to multiple AstronautComponent children.
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {
  constructor(private messageService: MessageService) {}

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
    this.log('mission announced');
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
    this.log('mission confirmed');
  }

  private log(message: string) {
    this.messageService.add('MissionService: ' + message);
  }
}
