import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import Button from "../components/Button";
import Palette from "../components/Palette";
import Shape from "../components/Shape";
import Typography from "../components/Typography";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" overflow="scroll">
        <Palette />
        <Button />
        <Shape />
        <Typography />
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;