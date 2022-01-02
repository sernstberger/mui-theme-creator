import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, CheckboxProps } from "@mui/material";
import { useController } from "react-hook-form";

export interface ValidatedCheckbox extends CheckboxProps {
  fieldName: string;
  label: string;
  // customValidation?: any; // TODO - this needs to be a yup schema
}

export default function ValidatedCheckbox({
  fieldName,
  label,
  ...rest
}: ValidatedCheckbox) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, errors, isSubmitting },
  } = useController({
    name: fieldName,
    // defaultValue,
  });
  return (
    <FormControlLabel
      {...{ label }}
      control={
        <Checkbox {...rest} checked={value || false} {...{ onChange }} />
      }
    />
  );
}
