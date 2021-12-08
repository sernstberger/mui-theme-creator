import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { alpha } from "@mui/material";

const purple = "#7F56D9";

let theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    text: {
      // primary: palette.palette.primary.main,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: palette.palette.primary.main,
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
          },
        },
      },
    },
  },
});

export default theme;
