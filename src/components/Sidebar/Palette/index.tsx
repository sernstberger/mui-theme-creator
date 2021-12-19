import { Divider, Stack } from "@mui/material";
import Color from "./Color";
import Layout from "../SidebarItem";

const Palette = () => {
  return (
    <Layout title="Palette">
      <Stack spacing={2}>
        <Color field="palette.primary.main" label="Primary color" />
        <Color field="palette.secondary.main" label="Secondary color" />
        <Color field="errorColor" label="Error color" />
        <Color field="warningColor" label="Warning color" />
        <Color field="successColor" label="Success color" />
        <Color field="textPrimaryColor" label="Text primary color" />
      </Stack>
    </Layout>
  );
};

export default Palette;
