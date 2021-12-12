import TextInput from "../Form/TextInput";
import { Stack, Typography as MuiTypography } from "@mui/material";
import { FontSize, FontWeight, TextTransform } from "../CssProperties";
import Layout from "../../Sidebar/SidebarItem";

const TypographyItem = ({ variant }: any) => {
  return (
    <Layout title={variant}>
      <Stack spacing={2}>
        <FontSize field={`${variant}FontSize`} />
        <FontWeight field={`${variant}FontWeight`} />
        <TextInput field={`${variant}LineHeight`} label="Line height" />
        <TextInput field={`${variant}LetterSpacing`} label="Letter spacing" />
        <TextTransform field={`${variant}TextTransform`} />
        {/* <Button variant="contained">Add property</Button> */}
      </Stack>
    </Layout>
  );
};

export default TypographyItem;
