import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styles: []
})
export class ComponentInteractionComponent implements OnDestroy {
  constructor() {
    console.log('component interaction component created.');
  }

  ngOnDestroy() {
    console.log('component interaction component destroyed.');
  }
}
