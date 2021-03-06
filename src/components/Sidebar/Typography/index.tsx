import { Stack } from "@mui/material";
import TextInput from "../../Form/TextInput";
import Layout from "../SidebarItem";
import TypographyItem from "./TypographyItem";
import { FontFamily } from "../../CssProperties";

const Typography = () => {
  return (
    <Layout title="Typography">
      <Stack spacing={2}>
        <TextInput field="htmlFontSize" type="number" label="HTML font size" />
        <FontFamily field="fontFamily" />
      </Stack>
      <br />
      <TypographyItem variant="h1" />
      <TypographyItem variant="h2" />
      <TypographyItem variant="h3" />
      <TypographyItem variant="h4" />
      <TypographyItem variant="h5" />
      <TypographyItem variant="h6" />
      <TypographyItem variant="subtitle1" />
      <TypographyItem variant="subtitle2" />
      <TypographyItem variant="body1" />
      <TypographyItem variant="body2" />
      <TypographyItem variant="caption" />
      <TypographyItem variant="button" />
      <TypographyItem variant="overline" />
    </Layout>
  );
};

export default Typography;
