import React from "react";
import { useField } from "formik";

import MTextField, { TextFieldProps } from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props as any);
  const { error, touched } = meta;

  return (
    <MTextField
      {...field}
      {...props}
      value={field.value ?? ""}
      error={touched && !!error}
      helperText={(touched && error) || " "}
    />
  );
};
