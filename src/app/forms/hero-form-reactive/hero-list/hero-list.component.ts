import { HeroService } from './../../../heroes/hero.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Hero } from '../../../heroes/hero';
import { heroes } from '../data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: []
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log('ReactiveForms: hero list component loaded');
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService
      .getHeroes()
      //TODO: Error handling
      .finally(() => (this.isLoading = false));
    this.selectedHero = undefined;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}
