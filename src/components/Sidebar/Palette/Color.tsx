import { useEffect } from "react";
import { useFormikContext, getIn } from "formik";
import { Stack } from "@mui/material";
import ColorSwatch from "../../ColorSwatch";
import { createPaletteColor } from "../../../utils";
import ValidatedTextInput from "../../Form/ValidatedTextInput";

const Color = ({ field, label }: any) => {
  const { values, handleChange, touched, setFieldValue } =
    useFormikContext<any>();

  useEffect(() => {
    const getColorString = (meh: string) =>
      getIn(values, `palette.${field}.${meh}`);
    const colorPaletteObj = createPaletteColor(getColorString("main"));
    setFieldValue(`palette.${field}`, colorPaletteObj);
  }, [values.palette[field].main]);

  return (
    <Stack direction="row" spacing={2}>
      <ColorSwatch color={getIn(values, `palette.${field}.main`)} />
      <ValidatedTextInput fieldName={`palette.${field}.main`} {...{ label }} />
    </Stack>
  );
};

export default Color;
