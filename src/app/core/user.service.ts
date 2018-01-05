import { MessageService } from './../messages/message.service';
import { Injectable, Optional, OnDestroy } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService implements OnDestroy {
  id = nextId++;
  private _userName = 'Sherlock Holmes';

  constructor(
    @Optional() config: UserServiceConfig,
    private messageService: MessageService
  ) {
    this.log('instance created.');
    if (config) {
      this._userName = config.userName;
    }
  }

  ngOnDestroy() {
    this.log('instance destroyed.');
  }

  get userName() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }

  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }
}
