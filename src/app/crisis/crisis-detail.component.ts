import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { CrisisService, Crisis } from './crisis.service';
import { slideInDownAnimation } from '../animations';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styles: ['input {width: 20em}'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  // @Input() crisis: Crisis;
  crisis: Crisis;
  editName: string;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.goToCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }

  goToCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so thatthe HeroList component can select that crisis.
    // Include a junk 'foo property for fun
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route
    });
  }
}
