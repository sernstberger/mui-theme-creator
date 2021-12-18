import { Divider, Stack } from "@mui/material";
import Layout from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";

const TextField = () => {
  return (
    <Layout title="TextField">
      <Stack spacing={2}>
        <SelectInput
          field="textFieldDefaultProps.color"
          label="Color"
          options={[
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
          ]}
        />
        <SelectInput
          field="textFieldDefaultProps.margin"
          label="Margin"
          options={["none", "dense", "normal"]}
        />
        <SelectInput
          field="textFieldDefaultProps.size"
          label="Size"
          options={["medium", "small"]}
        />
        <SelectInput
          field="textFieldDefaultProps.variant"
          label="Variant"
          options={["filled", "outlined", "standard"]}
        />
      </Stack>
    </Layout>
  );
};

export default TextField;
