export class Person {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public birthYear: string,
    public height: number,
    public eyeColor: string,
    public hairColor: string,
    public skinColor: string,
    public mass: string,
    public homeworldId: number,
    public films: number[],
    public species: number[],
    public starships: number[],
    public vehicles: number[],
    public created: string,
    public edited: string,
  ) {}
}
