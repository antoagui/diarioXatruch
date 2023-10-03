import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "Title";

export const ProductTitle = (record: TProduct): string => {
  return record.Title?.toString() || String(record.id);
};
