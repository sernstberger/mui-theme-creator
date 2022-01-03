import {
  Grid,
  Typography as MuiTypography,
  Button as MuiButton,
  Stack,
  Divider,
  TextField,
  Container,
  Box,
  Button,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import theme from "./theme";
import dynamicTheme from "./theme/dynamicTheme";
import Sidebar from "./components/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ColorSwatch from "./components/ColorSwatch";
import CodeDialog from "./components/CodeDialog";
import { useFormContext } from "react-hook-form";

const App = () => {
  const { getValues } = useFormContext();
  const foo = getValues();
  return (
    <Box overflow="hidden" height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Sidebar /> */}
            cool
          </ThemeProvider>
        </Grid>
        <Grid item xs={9}>
          <Box height="100vh" overflow="scroll">
            <div>
              <CodeDialog />
              <Divider />
            </div>
            <ThemeProvider theme={dynamicTheme()}>
              <CssBaseline />
              <>
                {/* <MuiTypography variant="h1">Content goes here</MuiTypography>
                <MuiTypography variant="h2">Content goes here</MuiTypography>
                <MuiTypography variant="h3">Content goes here</MuiTypography>
                <MuiTypography variant="h4">Content goes here</MuiTypography>
                <MuiTypography variant="h5">Content goes here</MuiTypography>
                <MuiTypography variant="h6">Content goes here</MuiTypography>
                <MuiTypography variant="subtitle1">
                  Content goes here
                </MuiTypography>
                <MuiTypography variant="subtitle2">
                  Content goes here
                </MuiTypography>
                <MuiTypography variant="body1">Content goes here</MuiTypography>
                <MuiTypography variant="body2">Content goes here</MuiTypography>
                <MuiTypography variant="caption">
                  Content goes here
                </MuiTypography>
                <MuiTypography variant="button">
                  Content goes here
                </MuiTypography>
                <MuiTypography variant="overline">
                  Content goes here
                </MuiTypography> */}
                {/* <MuiButton variant={values.button.variant}>Woot</MuiButton> */}
                {/* <Stack spacing={2} direction="row">
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
                </Stack> */}
                {/* <Stack spacing={2} direction="row">
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
                </Stack> */}
                <br />
                {/* <Divider />
                <br />
                <div>
                  <TextField label="Foooooo" />
                </div>
                <br />
                <Divider />
                <br /> */}
                {/* TODO - make these color swatch code blocks dynamic */}
                {/* primary
                <Stack direction="row">
                  <ColorSwatch fieldName="palette.primary.light" />
                  <ColorSwatch fieldName="palette.primary.main" />
                  <ColorSwatch fieldName="palette.primary.dark" />
                  <ColorSwatch fieldName="palette.primary.contrastText" />
                </Stack>
                secondary
                <Stack direction="row">
                  <ColorSwatch fieldName="palette.secondary.light" />
                  <ColorSwatch fieldName="palette.secondary.main" />
                  <ColorSwatch fieldName="palette.secondary.dark" />
                  <ColorSwatch fieldName="palette.secondary.contrastText" />
                </Stack>
                error
                <Stack direction="row">
                  <ColorSwatch fieldName="palette.error.light" />
                  <ColorSwatch fieldName="palette.error.main" />
                  <ColorSwatch fieldName="palette.error.dark" />
                  <ColorSwatch fieldName="palette.error.contrastText" />
                </Stack>
                warning
                <Stack direction="row">
                  <ColorSwatch fieldName="palette.warning.light" />
                  <ColorSwatch fieldName="palette.warning.main" />
                  <ColorSwatch fieldName="palette.warning.dark" />
                  <ColorSwatch fieldName="palette.warning.contrastText" />
                </Stack>
                success
                <Stack direction="row">
                  <ColorSwatch fieldName="palette.success.light" />
                  <ColorSwatch fieldName="palette.success.main" />
                  <ColorSwatch fieldName="palette.success.dark" />
                  <ColorSwatch fieldName="palette.success.contrastText" />
                </Stack> */}
                beans
              </>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
