import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'power-boost-calculator',
  template: `
  <h4>Power Boost Calculator</h4>
  <div>Normal power: <input [(ngModel)]="power"></div>
  <div>Boost factor: <input [(ngModel)]="factor"></div>
  <p>Super Hero Power: {{ power | exponentialStrength: factor }}</p>
  `
})
export class PowerBoosterCalculatorComponent {
  power = 5;
  factor = 1;
}
