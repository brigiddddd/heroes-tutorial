export class Hero {
  constructor(
    public id: number,
    public name: string,
    public canFly: boolean,
    public addresses: Address[] = [],
    public alterEgo?: string,
    public power?: string,
    public sidekick?: boolean
  ) {}
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}
