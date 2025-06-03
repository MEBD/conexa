export class Planet {
  constructor(
    public id: number,
    public name: string,
    public rotationPeriod: number,
    public orbitalPeriod: number,
    public diameter: number,
    public climate: string,
    public gravity: string,
    public terrain: string,
    public surfaceWater: number,
    public population: number,
    public residents: number[],
    public films: number[],
    public created: string,
    public edited: string,
  ) {}
}
