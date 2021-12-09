import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";
import { Stack, TextField } from "@mui/material";

const Color = ({ field, label }: any) => {
  const { values, handleChange, touched, errors } = useFormikContext<any>();
  return (
    <Stack direction="row" spacing={2}>
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} />

      <TextField
        {...{ label }}
        fullWidth
        id={field}
        name={field}
        value={values[field]}
        onChange={handleChange}
        error={touched[field] && Boolean(errors[field])}
        helperText={touched[field] && errors[field]}
      />
      {/* <Box style={{ backgroundColor: values[field] }} height={50} width={50} />
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} />
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} /> */}
    </Stack>
  );
};

export default Color;
