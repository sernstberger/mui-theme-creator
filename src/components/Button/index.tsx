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
      <Typography>Defaults</Typography>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">variant</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={variant}
            label="variant"
            onChange={handleChange}
          >
            <MenuItem value="contained">contained</MenuItem>
            <MenuItem value="outlined">outlined</MenuItem>
            <MenuItem value="text">text</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </SidebarItem>
  );
};

export default Button;
