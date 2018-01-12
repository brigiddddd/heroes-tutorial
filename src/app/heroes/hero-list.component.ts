import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./hero-list.component.css'],
  templateUrl: 'hero-list.component.html',
  providers: []
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  canFly: boolean;
  selectedHero: Hero;
  private selectedId: number; // TODO: COMBINE selectedId and selectedHero

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.canFly = false;
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before params.get() turns the string into a number
        this.selectedId = +params.get('id'); // TODO: THIS ISN"T FULLY UTILIZED
        return this.heroService.getHeroes();
      })
      .subscribe(heroes => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedId = hero.id;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  goToDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
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
        this.selectedId = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
        this.selectedId = null;
      }
    });
  }
}
