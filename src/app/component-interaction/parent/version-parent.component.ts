// Intercept input property changes with ngOnChanges()
// Detect and act upon changes to input property values with the ngOnChanges() method of the OnChanges lifecycle hook interface.

// The VersionParentComponent supplies the minor and major values and binds buttons to methods that change them.
import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
