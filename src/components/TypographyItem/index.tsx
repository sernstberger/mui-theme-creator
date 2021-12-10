import TextInput from "../Form/TextInput";
import { Typography as MuiTypography } from "@mui/material";
import { Box } from "@mui/system";
import { TextTransform } from "../CssProperties";

const TypographyItem = ({ variant }: any) => {
  return (
    <Box>
      <MuiTypography {...{ variant }}>{variant}</MuiTypography>

      <TextInput field={`${variant}FontSize`} label="Font size" />
      <TextInput field={`${variant}FontWeight`} label="Font weight" />
      <TextInput field={`${variant}LineHeight`} label="Line height" />
      <TextInput field={`${variant}LetterSpacing`} label="Letter spacing" />
      <TextTransform field={`${variant}TextTransform`} />
    </Box>
  );
};

export default TypographyItem;
