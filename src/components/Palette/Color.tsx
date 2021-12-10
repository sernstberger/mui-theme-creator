import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";
import { Stack, TextField } from "@mui/material";
import TextInput from "../Form/TextInput";

const Color = ({ field, label }: any) => {
  const { values, handleChange, touched, errors } = useFormikContext<any>();
  return (
    <Stack direction="row" spacing={2}>
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} />
      <TextInput {...{ field, label }} />
      {/* <Box style={{ backgroundColor: values[field] }} height={50} width={50} />
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} />
      <Box style={{ backgroundColor: values[field] }} height={50} width={50} /> */}
    </Stack>
  );
};

export default Color;
