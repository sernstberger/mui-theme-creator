import { Divider, Stack } from "@mui/material";
import Color from "./Color";
import Layout from "../SidebarItem";

const Palette = () => {
  return (
    <Layout title="Palette">
      <Stack spacing={2}>
        <Color field="primary" label="Primary color" />
        <Color field="secondary" label="Secondary color" />
        <Color field="error" label="Error color" />
        <Color field="warning" label="Warning color" />
        <Color field="success" label="Success color" />
        {/* <Color field="textPrimary" label="Text primary color" /> */}
      </Stack>
    </Layout>
  );
};

export default Palette;
