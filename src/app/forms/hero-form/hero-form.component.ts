import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['really smart', 'super flexible', 'super hot', 'weather changer'];
  model = new Hero(18, 'Dr. IQ', false, 'Chuck Overstreet', this.powers[0]);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', false, '', '');
  }

  constructor() {}

  ngOnInit() {}
}
