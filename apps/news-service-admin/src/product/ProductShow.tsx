import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="Content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="imagenes" source="imagenes" />
        <TextField label="location" source="location" />
        <TextField label="Summary" source="Summary" />
        <TextField label="Title" source="Title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
