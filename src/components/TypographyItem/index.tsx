import TextInput from "../Form/TextInput";
import {
  Button,
  Divider,
  Stack,
  Typography as MuiTypography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FontSize, FontWeight, TextTransform } from "../CssProperties";

const TypographyItem = ({ variant }: any) => {
  return (
    <Box>
      <MuiTypography variant="subtitle2" gutterBottom>{variant}</MuiTypography>
      <Stack spacing={2}>
        <FontSize field={`${variant}FontSize`} />
        <FontWeight field={`${variant}FontWeight`} />
        <TextInput field={`${variant}LineHeight`} label="Line height" />
        <TextInput field={`${variant}LetterSpacing`} label="Letter spacing" />
        <TextTransform field={`${variant}TextTransform`} />
        {/* <Button variant="contained">Add property</Button> */}
        <Divider />
      </Stack>
    </Box>
  );
};

export default TypographyItem;
