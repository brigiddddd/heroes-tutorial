import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', canFly: true },
      { id: 11, name: 'Mr. Nice', canFly: false },
      { id: 12, name: 'Narco', canFly: true },
      { id: 13, name: 'Bombasto', canFly: false },
      { id: 14, name: 'Celeritas', canFly: false },
      { id: 15, name: 'Magneta', canFly: true },
      { id: 16, name: 'RubberMan', canFly: true },
      { id: 17, name: 'Dynama', canFly: true },
      { id: 18, name: 'Dr IQ', canFly: false },
      { id: 19, name: 'Magma', canFly: false },
      { id: 20, name: 'Tornado', canFly: true }
    ];
    return {heroes};
  }
}
