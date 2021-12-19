import { Box, Typography } from "@mui/material";
import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";
import Switch from "../../Form/Switch";
import { useFormikContext } from "formik";

const Button = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("buttonDefaultProps.disabled", event.target.checked);
  };
  return (
    <SidebarItem title="Button">
      <Typography>Prop defaults</Typography>

      <Box sx={{ minWidth: 120 }}>
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
      </Box>
    </SidebarItem>
  );
};

export default Button;
