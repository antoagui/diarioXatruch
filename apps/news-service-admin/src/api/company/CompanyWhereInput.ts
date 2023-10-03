import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CompanyWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringFilter;
  reference?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
