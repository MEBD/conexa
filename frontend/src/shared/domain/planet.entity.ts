export class Planet {
  constructor(
    public id: number,
    public name: string,
    public rotationPeriod: string,
    public orbitalPeriod: string,
    public diameter: string,
    public climate: string,
    public gravity: string,
    public terrain: string,
    public surfaceWater: string,
    public population: string,
    public residents: number[],
    public films: number[],
    public created: string,
    public edited: string,
  ) {}
}
