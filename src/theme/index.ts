import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { alpha } from "@mui/material";

const purple = "#7F56D9";

const theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
  },
  shape: { borderRadius: 0 },
  typography: { subtitle1: { fontWeight: 700 } },
});

export default theme;
