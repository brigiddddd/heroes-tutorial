import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { states } from '../data-model';
import { Address, Hero } from '../../../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  //A FormControl constructor accepts three, optional arguments:
  // - the initial data value
  // - an array of validators
  // - an array of async validators.
  name = new FormControl();

  // REPLACE WITH FORM BUILDER
  // heroForm = new FormGroup({
  //   name: new FormControl()
  // });

  heroForm: FormGroup;
  states = states;

  @Input() hero: Hero;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      // address: this.fb.group({
      //   street: '',
      //   city: '',
      //   state: '',
      //   zip: ''
      // }),
      // address: this.fb.group(new Address()),
      // FORM MODEL DOESN'T HAVE TO MATCH THE DATA MODEL
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  setAddresses(addresses: Address[]) {
    // FormArray contains FormGroups
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    // Here, we are replacing a control. Not the value of a control.
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
  }

  // ngOnChanges is called when the input changes, not when the values change.
  ngOnChanges() {
    // setValue thoroughly checks the data object before assigning any values
    // it can return helpful error messages if you have a typo or if you've nested controls incorrectly.
    // this.heroForm.setValue({
    //   name: this.hero.name,
    //   address: this.hero.addresses[0] || new Address()
    // });

    // can set subset of values, but fails silently
    //  this.heroForm.patchValue({
    //   name: this.hero.name
    // });

    // You should reset so pristine state is restored. Internally it calls setValue.
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  nameChangeLog: string[] = [];
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach((value: string) =>
      this.nameChangeLog.push(value)
    );
  }

  ngOnInit() {}
}
