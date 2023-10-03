import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="Content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="imagenes" source="imagenes" />
        <TextField label="location" source="location" />
        <TextField label="Summary" source="Summary" />
        <TextField label="Title" source="Title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
