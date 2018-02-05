import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnDestroy {
  constructor(private router: Router) {
    console.log('forms component created.');
  }

  ngOnDestroy() {
    console.log('forms component destroyed.');
  }

  redirectToUserInput() {
    console.log('redirectToUserInput');
    this.router.navigate(['forms/user-input']);
  }

  redirectToTemplate() {
    console.log('redirectToTemplate');
    this.router.navigate(['forms/template-driven']);
  }

  redirectToReactive() {
    console.log('redirectToReactive');
    this.router.navigate(['forms/reactive']);
  }

  redirectToValidation() {
    this.router.navigate(['forms/validation']);
  }

  redirectToDynamic() {
    this.router.navigate(['forms/dynamic']);
  }

  redirectToCustom() {
    this.router.navigate(['forms/customFormControls']);
  }
}
