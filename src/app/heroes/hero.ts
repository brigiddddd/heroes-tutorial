export class Hero {
  constructor(
    public id: number,
    public name: string,
    public canFly: boolean,
    public alterEgo?: string,
    public power?: string,
  ) { }
}
