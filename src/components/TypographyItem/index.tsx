import TextInput from "../Form/TextInput";
import { Stack, Typography as MuiTypography } from "@mui/material";
import { FontSize, FontWeight, TextTransform } from "../CssProperties";
import Layout from "../../Sidebar/SidebarItem";

const TypographyItem = ({ variant }: any) => {
  return (
    <Layout title={variant}>
      <Stack spacing={2}>
        <FontSize field={`${variant}.fontSize`} />
        <FontWeight field={`${variant}.fontWeight`} />
        <TextInput field={`${variant}.lineHeight`} label="Line height" />
        <TextInput field={`${variant}.letterSpacing`} label="Letter spacing" />
        <TextTransform field={`${variant}.textTransform`} />
        {/* <Button variant="contained">Add property</Button> */}
      </Stack>
    </Layout>
  );
};

export default TypographyItem;
