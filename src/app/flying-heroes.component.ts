import { HeroService } from './hero.service';
import { Component } from '@angular/core';

@Component({
  selector: 'flying-heroes',
  templateUrl: './flying-heroes.component.html'
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  constructor(private heroService: HeroService) { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }

    const hero = {name, canFly: this.canFly};
    /* Instead of this, just make pipe impure... because the transform is trivial and fast
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object.
      this.heroes = this.heroes.concat(hero);
    }
    */
    this.heroes.push(hero);
  }

  reset() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice());
  }
}
