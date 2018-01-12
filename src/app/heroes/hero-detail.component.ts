import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  @Input() hero: Hero;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.heroService.getHero(+params.get('id'))
    //   )
    //   .subscribe(hero => (this.hero = hero));

    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(+id).subscribe(hero => (this.hero = hero));
  }

  goToHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so thatthe HeroList component can select that hero.
    // Include a junk 'foo property for fun
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  goBack(): void {
    // TODO: NOT YET USED
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
