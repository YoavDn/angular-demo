export interface ICharacter {
  name: string;
  id: number;
  image: string;
  status: any;
  gender: 'male' | 'female';
  species: string;
  location: {
    id: number;
    name: string;
  };
}

export interface IInfo {
  pages: number;
  count: number;
  next: string | null;
  prev: string | null;
}

export interface IFilter {
  query: string;
  page: number;
  sortBy?: {
    gender: 'male' | 'female';
    status: 'Dead' | 'Alive' | 'Unknown';
  };
}
