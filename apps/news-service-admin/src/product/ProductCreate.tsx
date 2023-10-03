import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateInput label="date" source="date" />
        <div />
        <TextInput label="location" source="location" />
        <TextInput label="Summary" multiline source="Summary" />
        <TextInput label="Title" source="Title" />
      </SimpleForm>
    </Create>
  );
};
