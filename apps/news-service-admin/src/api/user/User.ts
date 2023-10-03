import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  Email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
