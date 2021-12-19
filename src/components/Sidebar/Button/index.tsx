import { Box, Divider, Stack, Typography } from "@mui/material";
import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";
import Switch from "../../Form/Switch";
import { useFormikContext } from "formik";
import TextInput from "../../Form/TextInput";

const Button = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("buttonDefaultProps.disabled", event.target.checked);
  };
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
          <Stack direction="row" spacing={1}>
            <TextInput
              field="buttonStyle.styleOverrides.padding[0]"
              label="Padding"
              type="number"
            />
            <TextInput
              field="buttonStyle.styleOverrides.padding[1]"
              label="Padding"
              type="number"
            />
            <TextInput
              field="buttonStyle.styleOverrides.padding[2]"
              label="Padding"
              type="number"
            />
            <TextInput
              field="buttonStyle.styleOverrides.padding[3]"
              label="Padding"
              type="number"
            />
          </Stack>
        </Stack>
      </Box>
    </SidebarItem>
  );
};

export default Button;
