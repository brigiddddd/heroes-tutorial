import {
  Component,
  Input,
  OnInit,
  OnChanges,
  HostBinding
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero, Address } from './hero';
import { slideInDownAnimation } from '../animations';
import { states } from '../shared/states';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit, OnChanges {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;

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
    this.heroService.getHero(+id).subscribe(hero => {
      this.hero = hero;
      this.heroForm.reset({
        name: this.hero.name,
        canFly: this.hero.canFly,
        alterEgo: this.hero.alterEgo,
        power: this.hero.power,
        sidekick: this.hero.sidekick
      });
      this.setAddresses(this.hero.addresses);
    });

    this.createForm();
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      canFly: this.hero.canFly,
      alterEgo: this.hero.alterEgo,
      power: this.hero.power,
      sidekick: this.hero.sidekick
    });
    this.setAddresses(this.hero.addresses);
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: '',
      canFly: '',
      alterEgo: ''
    });
  }

  goToHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo property for fun
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  goBack(): void {
    // TODO: NOT YET USED
    this.location.back();
  }

  // save(): void {
  //   this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  // }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack()); // TODO: ERROR HANDLING
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;
    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing an combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      canFly: formModel.canFly as boolean,
      addresses: secretLairsDeepCopy,
      sidekick: formModel.sidekick as boolean,
      alterEgo: formModel.alterEgo as string,
      power: formModel.power as string
    };
    return saveHero;
  }

  revert() {
    this.ngOnChanges();
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(index: number) {
    this.secretLairs.removeAt(index);
    this.secretLairs.markAsDirty();
  }
}
