import { Box, Typography } from "@mui/material";
import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";

const Button = () => {
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
      </Box>
    </SidebarItem>
  );
};

export default Button;
