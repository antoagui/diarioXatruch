import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "nombre";

export const CompanyTitle = (record: TCompany): string => {
  return record.nombre?.toString() || String(record.id);
};
