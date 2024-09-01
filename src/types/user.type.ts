export interface TUser {
  key: string;
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone?: string;
  address?: string;
  status?: "active" | "blocked";
}
