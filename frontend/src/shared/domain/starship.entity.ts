export class Starship {
  constructor(
    public id: number,
    public name: string,
    public model: string,
    public manufacturer: string,
    public costInCredits: number,
    public length: number,
    public maxAtmospheringSpeed: number,
    public crew: string,
    public passengers: number,
    public cargoCapacity: number,
    public consumables: string,
    public hyperdriveRating: string,
    public MGLT: number,
    public starshipClass: string,
    public pilots: number[],
    public films: number[],
    public created: string,
    public edited: string,
  ) {}
}
