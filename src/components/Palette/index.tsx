import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistributiveOmit, OverridableStringUnion } from "@mui/types";

import theme from "../../theme";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";

import {
  Button as MuiButton,
  ButtonPropsVariantOverrides,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Color from "./Color";

const Palette = () => {
  const { values } = useFormikContext<any>();
  return (
    <div>
      <Typography variant="h4">Palette</Typography>
      <Stack spacing={2}>
        <Color field="primaryColor" label="Primary color" />
        <Color field="secondaryColor" label="Secondary color" />
        <Color field="errorColor" label="Error color" />
        <Color field="warningColor" label="Warning color" />
        <Color field="successColor" label="Success color" />
      </Stack>

      <Divider />
    </div>
  );
};

export default Palette;
