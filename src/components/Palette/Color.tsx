import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistributiveOmit, OverridableStringUnion } from "@mui/types";

import theme from "../../theme";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";

const Color = ({ field, label }: any) => {
  const { values } = useFormikContext<any>();
  return (
    <div>
      <Box style={{ backgroundColor: values[field] }} height={100} width={100} />
      <label htmlFor={field}>{label}</label>
      <Field id={field} name={field} placeholder="John" />
    </div>
  );
};

export default Color;
