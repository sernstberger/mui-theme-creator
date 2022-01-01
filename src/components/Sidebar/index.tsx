import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Button from "./Button";
import Palette from "./Palette";
import Shape from "./Shape";
import Typography from "./Typography";
import TextField from "./TextField";
import Breakpoints from "./Breakpoints";
import Direction from "./Direction";
import Spacing from "./Spacing";

import {
  Box,
  Divider,
  Stack,
  Typography as MuiTypography,
} from "@mui/material";
import SidebarItem from "./SidebarItem";
import SelectInput from "./../Form/SelectInput";
import Switch from "./../Form/Switch";
import { Padding } from "./../CssProperties";
import _BoxModel from "./../CssProperties/_BoxModel";
import Margin from "./../CssProperties/Margin";

const components = ["Button", "TextField"];

const Foo = ({ name }: any) => {
  console.log(name);
  return (
    <SidebarItem title={name}>
      <MuiTypography variant="subtitle2">Prop defaults</MuiTypography>

      <Box sx={{ minWidth: 120 }}>
        <Stack spacing={2}>
          <SelectInput
            field={`components[${name}].defaultProps.color`}
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
            field={`components[${name}].defaultProps.size`}
            label="Size"
            options={["small", "medium", "large"]}
          />
          <SelectInput
            field={`components[${name}].defaultProps.variant`}
            label="Variant"
            options={["contained", "outlined", "text", "dashed"]}
          />

          <Switch
            field={`components[${name}].defaultProps.disabled`}
            label="Disabled"
          />
          <Switch
            field={`components[${name}].defaultProps.fullWidth`}
            label="Full width"
          />
          <Divider />
          <MuiTypography variant="subtitle2">Style defaults</MuiTypography>
          <Padding field={`components[${name}].styleOverrides.padding`} />
          <Margin field={`components[${name}].styleOverrides.margin`} />
        </Stack>
      </Box>
    </SidebarItem>
  );
};

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" overflow="scroll">
        <Breakpoints />
        <Direction />
        {/* components */}
        {components.map((component) => {
          return <Foo key={component} name={component} />;
        })}

        <Palette />
        <Spacing />
        <Shape />
        {/* mixins */}
        {/* shadows */}
        <Typography />
        {/* transitions */}
        {/* zIndex */}
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
