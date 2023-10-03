import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  Content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  imagenes?: SortOrder;
  location?: SortOrder;
  Summary?: SortOrder;
  Title?: SortOrder;
  updatedAt?: SortOrder;
};
