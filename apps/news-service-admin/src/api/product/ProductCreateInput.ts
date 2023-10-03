import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  Content: InputJsonValue;
  date?: Date | null;
  imagenes: InputJsonValue;
  location: string;
  Summary: string;
  Title: string;
};
