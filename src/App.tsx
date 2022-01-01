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
import { useFormikContext } from "formik";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ColorSwatch from "./components/ColorSwatch";
import CodeDialog from "./components/CodeDialog";

const App = () => {
  const { values } = useFormikContext<any>();
  return (
    <Box overflow="hidden" height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Sidebar />
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
                <MuiTypography variant="h1">Content goes here</MuiTypography>
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
                </MuiTypography>
                
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
                <Divider />
                <br />
                <div>
                  <TextField label="Foooooo" />
                </div>
                <br />
                <Divider />
                <br />
                {/* TODO - make these color swatch code blocks dynamic */}
                primary
                <Stack direction="row">
                  <ColorSwatch color={values.palette.primary.light} />
                  <ColorSwatch color={values.palette.primary.main} />
                  <ColorSwatch color={values.palette.primary.dark} />
                  <ColorSwatch color={values.palette.primary.contrastText} />
                </Stack>
                secondary
                <Stack direction="row">
                  <ColorSwatch color={values.palette.secondary.light} />
                  <ColorSwatch color={values.palette.secondary.main} />
                  <ColorSwatch color={values.palette.secondary.dark} />
                  <ColorSwatch color={values.palette.secondary.contrastText} />
                </Stack>
                error
                <Stack direction="row">
                  <ColorSwatch color={values.palette.error.light} />
                  <ColorSwatch color={values.palette.error.main} />
                  <ColorSwatch color={values.palette.error.dark} />
                  <ColorSwatch color={values.palette.error.contrastText} />
                </Stack>
                warning
                <Stack direction="row">
                  <ColorSwatch color={values.palette.warning.light} />
                  <ColorSwatch color={values.palette.warning.main} />
                  <ColorSwatch color={values.palette.warning.dark} />
                  <ColorSwatch color={values.palette.warning.contrastText} />
                </Stack>
                success
                <Stack direction="row">
                  <ColorSwatch color={values.palette.success.light} />
                  <ColorSwatch color={values.palette.success.main} />
                  <ColorSwatch color={values.palette.success.dark} />
                  <ColorSwatch color={values.palette.success.contrastText} />
                </Stack>
              </>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
