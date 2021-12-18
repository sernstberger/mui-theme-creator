import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Button from "./Button";
import Palette from "./Palette";
import Shape from "./Shape";
import Typography from "../Typography";
import TextField from "./TextField";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" overflow="scroll">
        <Palette />
        <Button />
        <Shape />
        <Typography />
        <TextField />
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
