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

const Component = ({ name }: any) => {
  const componentName = `components[Mui${name}]`;
  console.log("!!!***", componentName, `${componentName}.defaultProps.color`);
  return (
    <SidebarItem title={name}>
      <MuiTypography variant="subtitle2">Prop defaults</MuiTypography>

      <Box sx={{ minWidth: 120 }}>
        <Stack spacing={2}>
          <SelectInput
            field={`${componentName}.defaultProps.color`}
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
            field={`${componentName}.defaultProps.size`}
            label="Size"
            options={["small", "medium", "large"]}
          />
          <SelectInput
            field={`${componentName}.defaultProps.variant`}
            label="Variant"
            options={["contained", "outlined", "text", "dashed"]}
          />

          <Switch
            field={`${componentName}.defaultProps.disabled`}
            label="Disabled"
          />
          <Switch
            field={`${componentName}.defaultProps.fullWidth`}
            label="Full width"
          />
          <Divider />
          <MuiTypography variant="subtitle2">Style defaults</MuiTypography>
          <Padding field={`${componentName}.styleOverrides.root.padding`} />
          <Margin field={`${componentName}.styleOverrides.root.margin`} />
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

        {components.map((component) => {
          return <Component key={component} name={component} />;
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
