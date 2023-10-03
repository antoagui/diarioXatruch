import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  Email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
