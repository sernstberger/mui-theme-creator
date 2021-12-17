import { Divider, Stack } from "@mui/material";
import Layout from "../../Sidebar/SidebarItem";
import SelectInput from "../Form/SelectInput";

const TextField = () => {
  return (
    <Layout title="TextField">
      <Stack spacing={2}>
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
