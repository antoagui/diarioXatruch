import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateInput label="date" source="date" />
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="Summary" multiline source="Summary" />
        <TextInput label="Title" source="Title" />
      </SimpleForm>
    </Edit>
  );
};
