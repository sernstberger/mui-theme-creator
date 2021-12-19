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
} from "@mui/material";
import TextInput from "../../Form/TextInput";
import ColorSwatch from "../../ColorSwatch";

const Color = ({ field, label }: any) => {
  const { values, handleChange, touched, setFieldValue } =
    useFormikContext<any>();

  useEffect(() => {
    setFieldValue(
      "palette.primary.light",
      lighten(values.palette.primary.main, 0.5)
    );
    setFieldValue(
      "palette.primary.dark",
      darken(values.palette.primary.main, 0.1)
    );
    const foo =
      getContrastRatio(values.palette.primary.main, "#000") >= 3
        ? "#000"
        : "#fff";
    setFieldValue("palette.primary.contrastText", foo);
    console.log("^^^", foo);
  }, [getIn(values, field)]);

  return (
    <Stack direction="row" spacing={2}>
      <ColorSwatch color={getIn(values, field)} />
      <TextInput {...{ field, label }} />
    </Stack>
  );
};

export default Color;
