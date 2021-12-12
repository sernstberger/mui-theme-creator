import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistributiveOmit, OverridableStringUnion } from "@mui/types";

import {
  Button as MuiButton,
  ButtonPropsVariantOverrides,
  Stack,
  Typography,
} from "@mui/material";
import SidebarItem from "../../Sidebar/SidebarItem";
import SelectInput from "../Form/SelectInput";

const Button = () => {
  const [variant, setVariant] =
    React.useState<
      OverridableStringUnion<
        "text" | "outlined" | "contained",
        ButtonPropsVariantOverrides
      >
    >("contained");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    const foo: any = event.target.value;
    setVariant(foo);
  };
  return (
    <SidebarItem title="Button">
      <Typography>Prop defaults</Typography>

      <Box sx={{ minWidth: 120 }}>
        <SelectInput
          field="button.color"
          label="Color"
          options={[
            "inherit",
            "primary",
            "secondary",
            "success",
            "error",
            "info",
            "warning",
          ]}
        />
        <SelectInput
          field="button.size"
          label="Size"
          options={["small", "medium", "large"]}
        />
        <SelectInput
          field="button.variant"
          label="Variant"
          options={["contained", "outlined", "text"]}
        />
      </Box>
    </SidebarItem>
  );
};

export default Button;
