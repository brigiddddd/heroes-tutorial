import { Hero } from './hero';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[], flyers: boolean) {
    if (allHeroes === undefined) {
      allHeroes = [];
    }
    return allHeroes.filter(hero => {
      if (flyers === undefined) { flyers = true; }
      return hero.canFly === flyers;
    });
  }
}
