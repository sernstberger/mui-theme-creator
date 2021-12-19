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
import Spacing from "./Spacing";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" overflow="scroll">
        <Breakpoints />
        <Direction />
        {/* components */}
        <Button />
        <TextField />

        <Palette />
        <Spacing />
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
