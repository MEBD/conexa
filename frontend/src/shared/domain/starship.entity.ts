export class Starship {
  constructor(
    public id: number,
    public name: string,
    public model: string,
    public manufacturer: string,
    public costInCredits: string,
    public length: string,
    public maxAtmospheringSpeed: string,
    public crew: string,
    public passengers: string,
    public cargoCapacity: string,
    public consumables: string,
    public hyperdriveRating: string,
    public MGLT: string,
    public starshipClass: string,
    public pilots: number[],
    public films: number[],
    public created: string,
    public edited: string,
  ) {}
}
