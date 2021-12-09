import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";
import { Stack, TextField } from "@mui/material";

const TextInput = ({ field, label, type = "text" }: any) => {
  const { values, handleChange, touched, errors } = useFormikContext<any>();
  return (
    <TextField
      {...{ label, type }}
      fullWidth
      id={field}
      name={field}
      value={values[field]}
      onChange={handleChange}
      error={touched[field] && Boolean(errors[field])}
      helperText={touched[field] && errors[field]}
    />
  );
};

export default TextInput;
