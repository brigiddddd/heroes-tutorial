import { UserService } from './../core/user.service';
import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [HeroService]
})
export class HeroesComponent {
  userName = '';
  constructor(private userService: UserService) {
    this.userName = userService.userName;
  }
}
