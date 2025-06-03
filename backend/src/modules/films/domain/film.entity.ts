export class Film {
  constructor(
    public id: number,
    public title: string,
    public episodeId: number,
    public openingCrawl: string,
    public director: string,
    public producer: string,
    public releaseDate: string,
    public characters: number[],
    public planets: number[],
    public starships: number[],
    public vehicles: number[],
    public species: number[],
    public created: string,
    public edited: string,
  ) {}
}