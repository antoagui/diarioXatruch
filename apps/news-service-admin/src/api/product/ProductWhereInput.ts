import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  Content?: JsonFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  imagenes?: JsonFilter;
  location?: StringFilter;
  Summary?: StringFilter;
  Title?: StringFilter;
};
