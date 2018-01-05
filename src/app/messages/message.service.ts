import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class MessageService implements OnDestroy {
  messages: string[] = [];

  constructor() {
    this.log('instance created.');
  }

  ngOnDestroy() {
    this.log('instance destroyed.');
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  log(msg: string) {
    this.messages.push('MessageService; ' + msg);
  }
}
