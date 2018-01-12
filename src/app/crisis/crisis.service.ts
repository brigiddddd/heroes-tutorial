import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MessageService } from './../messages/message.service';
import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

export class Crisis {
  constructor(public id: number, public name: string) {}
}

const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again')
];


/** Simulate a data service that retrieves crises from a server */
@Injectable()
export class CrisisService implements OnDestroy {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) {
    this.log('instance created.');
  }

  ngOnDestroy() {
    this.log('instance destroyed.');
  }

  getCrises(): Observable<Crisis[]> {
    this.log('get crises');
    return this.crises$;
  }

  getCrisis(id: number | string): Observable<Crisis> {
    this.log(`get crisis with id ${id}`);
    return this.getCrises().map(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = new Crisis(CrisisService.nextCrisisId++, name);
      CRISES.push(crisis);
      this.crises$.next(CRISES);
}
  }

  private log(message: string) {
    this.messageService.add('CrisisService: ' + message);
  }
}
