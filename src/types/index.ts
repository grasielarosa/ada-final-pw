export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
  birthdate: Date;
  password: string;
  sessionToken?: string;
};
