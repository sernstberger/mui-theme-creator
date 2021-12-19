import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  useFormikContext,
  getIn,
} from "formik";
import {
  lighten,
  darken,
  Stack,
  TextField,
  getContrastRatio,
  rgbToHex,
  useTheme,
} from "@mui/material";
import TextInput from "../../Form/TextInput";
import ColorSwatch from "../../ColorSwatch";

const Color = ({ field, label }: any) => {
  const { values, handleChange, touched, setFieldValue } =
    useFormikContext<any>();
  const theme = useTheme();

  const bar = (meh: string) => getIn(values, `palette.${field}.${meh}`);
  console.log(
    "%%%%",
    `palette.${field}.light`,
    bar("main"),
    rgbToHex(lighten(bar("main"), 0.5))
  );

  useEffect(() => {
    setFieldValue(
      `palette.${field}.light`,
      rgbToHex(lighten(bar("main"), 0.5))
    );
    setFieldValue(`palette.${field}.dark`, darken(bar("main"), 0.1));
    const contrastRatio = getContrastRatio("#FFF", values.palette[field].main);
    const contrastText = contrastRatio >= 3 ? "#FFF" : "#000";
    console.log("^^^", field, contrastText, contrastRatio);
    setFieldValue("palette.primary.contrastText", contrastText);
  }, [values.palette[field].main]);

  return (
    <Stack direction="row" spacing={2}>
      <ColorSwatch color={getIn(values, `palette.${field}.main`)} />
      <TextInput field={`palette.${field}.main`} {...{ label }} />
    </Stack>
  );
};

export default Color;
