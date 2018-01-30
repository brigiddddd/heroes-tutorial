import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnDestroy {
  constructor() {
    console.log('forms component created.');
  }

  ngOnDestroy() {
    console.log('forms component destroyed.');
  }
}
