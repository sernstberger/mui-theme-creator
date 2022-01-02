import ReactDOM from "react-dom";
import App from "./App";
import { Formik, Form, FormikHelpers } from "formik";
import { createPaletteColor } from "./utils";
import { ThemeOptions } from "@mui/material";
import ValidatedForm from "./components/Form/ValidatedForm";

const initialValues: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8,
  direction: "ltr",
  palette: {
    primary: createPaletteColor("#7F56D9"),
    secondary: createPaletteColor("#F50057"),
    error: createPaletteColor("#EB0014"),
    warning: createPaletteColor("#F1A204"),
    success: createPaletteColor("#00C853"),
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      // fontFamily: null,
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      // fontFamily: null,
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      // fontFamily: null,
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      // fontFamily: null,
      fontSize: "2.125rem",
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      // fontFamily: null,
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      // fontFamily: null,
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      // fontFamily: null,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      // fontFamily: null,
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      // fontFamily: null,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      // fontFamily: null,
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: "inherit",
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      // fontFamily: null,
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      // fontFamily: null,
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
    },
  },
  shape: {
    borderRadius: 4,
  },

  // textPrimaryColor: "#111111",

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: [6, 16, 6, 16],
          margin: [0],
        },
      },
      defaultProps: {
        color: "primary",
        disabled: false,
        fullWidth: false,
        size: "medium",
        variant: "contained",
      },
    },
    MuiTextField: {
      defaultProps: {
        color: "primary",
        margin: "none",
        size: "medium",
        variant: "outlined",
      },
    },
  },
};

ReactDOM.render(
  <Formik
    // enableReinitialize
    initialValues={initialValues}
    onSubmit={(values: ThemeOptions, { setSubmitting }: FormikHelpers<any>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    <Form>
      <ValidatedForm>
        <App />
      </ValidatedForm>
    </Form>
  </Formik>,

  document.querySelector("#root")
);
