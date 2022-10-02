export class Argument {
  public required = true;

  constructor(
    public name: string,
    public description?: string,
  ) {}
}
