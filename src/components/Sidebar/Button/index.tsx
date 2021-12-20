import { Box, Divider, Stack, Typography } from "@mui/material";
import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";
import Switch from "../../Form/Switch";
import { Padding } from "../../CssProperties";
import _BoxModel from "../../CssProperties/_BoxModel";
import Margin from "../../CssProperties/Margin";

const Button = () => {
  return (
    <SidebarItem title="Button">
      <Typography variant="subtitle2">Prop defaults</Typography>

      <Box sx={{ minWidth: 120 }}>
        <Stack spacing={2}>
          <SelectInput
            field="buttonDefaultProps.color"
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
            field="buttonDefaultProps.size"
            label="Size"
            options={["small", "medium", "large"]}
          />
          <SelectInput
            field="buttonDefaultProps.variant"
            label="Variant"
            options={["contained", "outlined", "text", "dashed"]}
          />

          <Switch field="buttonDefaultProps.disabled" label="Disabled" />
          <Switch field="buttonDefaultProps.fullWidth" label="Full width" />
          <Divider />
          <Typography variant="subtitle2">Style defaults</Typography>
          <Padding field="buttonStyle.styleOverrides.padding" />
          <Margin field="buttonStyle.styleOverrides.margin" />
        </Stack>
      </Box>
    </SidebarItem>
  );
};

export default Button;
