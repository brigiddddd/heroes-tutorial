import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { CrisisService, Crisis } from './crisis.service';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'crisis-detail',
  templateUrl: './crisis-detail.component.html',
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  @Input() crisis: Crisis;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crisisService
      .getCrisis(+id)
      .subscribe(crisis => (this.crisis = crisis));
  }

  goToCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so thatthe HeroList component can select that crisis.
    // Include a junk 'foo property for fun
    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }

  goBack(): void {
    // TODO: NOT YET USED
    this.location.back();
  }
}
