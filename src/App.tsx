import {
  Grid,
  Typography as MuiTypography,
  Button as MuiButton,
  Stack,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import theme from "./theme";
import dynamicTheme from "./theme/dynamicTheme";
import Sidebar from "./Sidebar";
import { useFormikContext } from "formik";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  const { values } = useFormikContext<any>();
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar />
        </ThemeProvider>
      </Grid>
      <Grid item xs={6}>
        <ThemeProvider theme={dynamicTheme()}>
          <CssBaseline />
          <>
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

            <MuiButton variant={values.button.variant}>Woot</MuiButton>

            <Stack spacing={2} direction="row">
              <MuiButton variant="contained">Button CTA</MuiButton>
              <MuiButton variant="contained" className="Mui-hover">
                Button CTA
              </MuiButton>
              <MuiButton variant="contained" className="Mui-focusVisible">
                Button CTA
              </MuiButton>
              <MuiButton variant="contained" disabled>
                Button CTA
              </MuiButton>
            </Stack>

            <Stack spacing={2} direction="row">
              <MuiButton color="secondary" variant="contained">
                Button CTA
              </MuiButton>
              <MuiButton
                color="secondary"
                variant="contained"
                className="Mui-hover"
              >
                Button CTA
              </MuiButton>
              <MuiButton
                color="secondary"
                variant="contained"
                className="Mui-focusVisible"
              >
                Button CTA
              </MuiButton>
              <MuiButton color="secondary" variant="contained" disabled>
                Button CTA
              </MuiButton>
            </Stack>
          </>
        </ThemeProvider>
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
};

export default App;
