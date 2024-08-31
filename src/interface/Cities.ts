export interface CitiesCreateInterface {
  nameCity: string;
}

export interface QueryCitiesInterface {
  page?: number;
  limit?: number;
  filter?: string;
}

export interface ParamsCitiesInterface {
  id?: number;
}
