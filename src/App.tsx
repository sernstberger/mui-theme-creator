import Box from "@mui/material/Box";
import Button from "./components/Button";
import {
  Grid,
  ThemeProvider,
  Typography as MuiTypography,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import theme from "./theme";
import Palette from "./components/Palette";
import Shape from "./components/Shape";
import Typography from "./components/Typography";

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Box>
            <Palette />
            <Button />
            <Shape />
            <Typography />
          </Box>
        </ThemeProvider>
      </Grid>
      <Grid item xs={6}>
        <MuiTypography variant="h1">Content goes here</MuiTypography>
        <MuiTypography variant="h2">Content goes here</MuiTypography>
        <MuiTypography variant="h3">Content goes here</MuiTypography>
        <MuiTypography variant="h4">Content goes here</MuiTypography>
        <MuiTypography variant="h5">Content goes here</MuiTypography>
        <MuiTypography variant="h6">Content goes here</MuiTypography>
        <MuiTypography variant="subtitle1">Content goes here</MuiTypography>
        <MuiTypography variant="subtitle2">Content goes here</MuiTypography>
        <MuiTypography variant="body1">Content goes here</MuiTypography>
        <MuiTypography variant="body2">Content goes here</MuiTypography>
        <MuiTypography variant="caption">Content goes here</MuiTypography>
        <MuiTypography variant="button">Content goes here</MuiTypography>
        <MuiTypography variant="overline">Content goes here</MuiTypography>
      </Grid>
      <Grid item xs={3}>
        <SyntaxHighlighter language="typescript" style={dark} wrapLines={true}>
          {JSON.stringify(theme)}

          {/* {`${theme}`} */}
        </SyntaxHighlighter>

        {/* {JSON.stringify(theme)} */}
      </Grid>
    </Grid>
  );
}
