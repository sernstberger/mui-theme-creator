import TextInput from "../../../Form/TextInput";
import { Stack, Typography as MuiTypography } from "@mui/material";
import { FontSize, FontWeight, TextTransform } from "../../../CssProperties";
import Layout from "../../SidebarItem";
import { FontFamily } from "../../../CssProperties";
import { getIn, useFormikContext } from "formik";

const TypographyItem = ({ variant }: any) => {
  const { values } = useFormikContext<any>();
  // console.log("!!!", getIn(values, variant).fontFamily);
  return (
    <Layout title={variant}>
      <Stack spacing={2}>
        {getIn(values, variant).fontSize && (
          <FontSize field={`${variant}.fontSize`} />
        )}
        {getIn(values, variant).fontWeight && (
          <FontWeight field={`${variant}.fontWeight`} />
        )}
        {getIn(values, variant).lineHeight && (
          <TextInput field={`${variant}.lineHeight`} label="Line height" />
        )}
        {getIn(values, variant).letterSpacing && (
          <TextInput
            field={`${variant}.letterSpacing`}
            label="Letter spacing"
          />
        )}
        {getIn(values, variant).textTransform && (
          <TextTransform field={`${variant}.textTransform`} />
        )}
        {getIn(values, variant).fontFamily && (
          <FontFamily field={`${variant}.fontFamily`} />
        )}
        {/* <Button variant="contained">Add property</Button> */}
      </Stack>
    </Layout>
  );
};

export default TypographyItem;
