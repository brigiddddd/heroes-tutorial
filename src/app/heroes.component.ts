import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: 'heroes.component.html',
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  canFly: boolean;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
    this.canFly = false;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name, canFly: this.canFly } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }
}
