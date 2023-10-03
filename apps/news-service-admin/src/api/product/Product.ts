import { JsonValue } from "type-fest";

export type Product = {
  Content: JsonValue;
  createdAt: Date;
  date: Date | null;
  id: string;
  imagenes: JsonValue;
  location: string;
  Summary: string;
  Title: string;
  updatedAt: Date;
};
