import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormikContext } from "formik";
import { get } from "lodash";
import { useFormContext, useWatch } from "react-hook-form";

const ColorSwatch = ({ fieldName }: any) => {
  useWatch({ name: fieldName });
  const { getValues } = useFormContext();
  const foo = getValues();
  const color = get(foo, fieldName);
  console.log("***", foo, fieldName, color);

  return (
    <Tooltip title={color} arrow>
      <Box
        sx={{ backgroundColor: color, boxShadow: "0 0 3px black" }}
        height={50}
        width={50}
      />
    </Tooltip>
  );
};

export default ColorSwatch;
