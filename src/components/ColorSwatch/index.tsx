import { Tooltip } from "@mui/material";
import { SketchPicker } from "react-color";
import Box from "@mui/material/Box";
import { get } from "lodash";
import { useFormContext, useWatch } from "react-hook-form";
import { createPaletteColor } from "../../utils";

const ColorSwatch = ({ fieldName }: any) => {
  useWatch({ name: fieldName });
  const { getValues, setValue } = useFormContext();
  const foo = getValues();
  const color = get(foo, fieldName);
  const baz = fieldName.split(".");
  console.log("***", fieldName);
  const handleColorChange = ({ hex }: any) => {
    const bar = createPaletteColor(hex);
    // setValue(fieldName, hex);
    setValue(`${baz[0]}.${baz[1]}`, bar);
  };

  return (
    <Tooltip
      title={
        <SketchPicker {...{ color }} onChangeComplete={handleColorChange} />
      }
      arrow
    >
      <Box
        sx={{ backgroundColor: color, boxShadow: "0 0 3px black" }}
        height={50}
        width={50}
      />
    </Tooltip>
  );
};

export default ColorSwatch;
