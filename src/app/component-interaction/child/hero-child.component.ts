// Pass data from parent to child with input binding
// HeroChildComponent has two input properties, typically adorned with @Input decorations.

import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3> {{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero: Hero;

  // The second @Input aliases the child component property name masterName as 'master'.
  @Input('master') masterName: string;
}
