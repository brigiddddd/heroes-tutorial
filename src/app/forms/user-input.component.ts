import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styles: []
})
export class UserInputComponent implements OnDestroy {
  constructor() {
    console.log('user input component created.');
  }

  ngOnDestroy() {
    console.log('user input component destroyed.');
  }
}
