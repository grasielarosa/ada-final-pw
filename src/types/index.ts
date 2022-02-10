export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role?: string;
  birthdate: Date;
  password: string;
  sessionToken?: string;
};

export type Data = {
  name?: string;
  poster_path: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  idDB: string;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  media_type?: string;
};

export type ApiResponse = {
  page: number;
  results: Data[];
  total_pages: number;
  total_results: number;
};

export type Movies = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
