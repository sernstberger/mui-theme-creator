import Box from "@mui/material/Box";
import { useFormikContext } from "formik";

const ColorSwatch = ({ color }: any) => {
  return (
    <>
      <Box
        sx={{ backgroundColor: color, boxShadow: "0 0 3px black" }}
        height={50}
        width={50}
      />
      {color}
    </>
  );
};

export default ColorSwatch;
