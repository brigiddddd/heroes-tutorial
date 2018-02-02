import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 0,
        name: 'Zero',
        canFly: true,
        addresses: [
          { street: '123 Overlook', city: 'KC', state: 'KS', zip: 66222 },
          { city: 'NY', state: 'NY', zip: '1234567890', street: 'sesame' }
        ],
        alterEgo: 'Hector Zeroni',
        sidekick: true,
        power: 'strength'
      },
      { id: 11, name: 'Mr. Nice', canFly: false, addresses: [] },
      { id: 12, name: 'Narco', canFly: true, addresses: [] },
      { id: 13, name: 'Bombasto', canFly: false, addresses: [] },
      { id: 14, name: 'Celeritas', canFly: false, addresses: [] },
      { id: 15, name: 'Magneta', canFly: true, addresses: [] },
      { id: 16, name: 'RubberMan', canFly: true, addresses: [] },
      { id: 17, name: 'Dynama', canFly: true, addresses: [] },
      { id: 18, name: 'Dr IQ', canFly: false, addresses: [] },
      { id: 19, name: 'Magma', canFly: false, addresses: [] },
      { id: 20, name: 'Tornado', canFly: true, addresses: [] }
    ];
    return { heroes };
  }
}
