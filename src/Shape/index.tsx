import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistributiveOmit, OverridableStringUnion } from "@mui/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";

import {
  Button as MuiButton,
  ButtonPropsVariantOverrides,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const Shape = () => {
  const { values, setFieldValue } = useFormikContext<any>();
  return (
    <div>
      <Typography variant="h4">Shape</Typography>

      <label htmlFor={values.borderRadius}>Border radius</label>
      <Field
        id={values.borderRadius}
        name={values.borderRadius}
        type="number"
        value={values.borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFieldValue("borderRadius", parseInt(e.target.value, 10));
        }}
      />

      <Divider />
    </div>
  );
};

export default Shape;
