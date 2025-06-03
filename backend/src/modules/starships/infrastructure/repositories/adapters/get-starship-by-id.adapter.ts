import { getIDFromURL } from '@application/infrastructure/adapters/get-id-from-url';
import { Starship } from '@starships/domain/starship.entity';

export interface StarshipByIdRaw {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const getStarshipByIdAdapter = (data: StarshipByIdRaw): Starship => {
  return new Starship(
    getIDFromURL(data.url),
    data.name,
    data.model,
    data.manufacturer,
    parseInt(data.cost_in_credits),
    parseInt(data.length),
    parseInt(data.max_atmosphering_speed),
    data.crew,
    parseInt(data.passengers),
    parseInt(data.cargo_capacity),
    data.consumables,
    data.hyperdrive_rating,
    parseInt(data.MGLT),
    data.starship_class,
    data.pilots.map((item) => getIDFromURL(item)),
    data.films.map((item) => getIDFromURL(item)),
    data.created,
    data.edited,
  );
};
