import { Hero } from './../../heroes/hero';

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    canFly: true,
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    canFly: false,
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    canFly: false,
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
