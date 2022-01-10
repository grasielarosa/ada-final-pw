export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
  birthdate: Date;
  password: string;
  sessionToken?: string;
};

export type Data = {
  poster_path: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};
