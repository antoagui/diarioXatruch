import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  Content?: InputJsonValue;
  date?: Date | null;
  imagenes?: InputJsonValue;
  location?: string;
  Summary?: string;
  Title?: string;
};
