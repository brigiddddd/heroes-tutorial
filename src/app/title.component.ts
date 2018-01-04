import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent {
  title = 'Heroes';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
