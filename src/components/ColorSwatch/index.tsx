import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormikContext } from "formik";

const ColorSwatch = ({ color }: any) => {
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
