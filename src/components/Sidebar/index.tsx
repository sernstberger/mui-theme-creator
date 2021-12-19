import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Button from "./Button";
import Palette from "./Palette";
import Shape from "./Shape";
import Typography from "./Typography";
import TextField from "./TextField";
import Breakpoints from "./Breakpoints";
import Direction from "./Direction";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" overflow="scroll">
        <Breakpoints />
        <Direction />
        {/* direction */}
        {/* components */}
        <Button />
        <TextField />

        <Palette />
        {/* spacing */}
        <Shape />
        {/* mixins */}
        {/* shadows */}
        <Typography />
        {/* transitions */}
        {/* zIndex */}
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
