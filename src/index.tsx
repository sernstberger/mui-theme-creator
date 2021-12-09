import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { alpha, createTheme, darken, lighten } from "@mui/system";

interface Values {
  primaryColor: string;
  secondaryColor: string;
  errorColor: string;
  warningColor: string;
  successColor: string;
  borderRadius: number;
}

ReactDOM.render(
  <Formik
    initialValues={{
      primaryColor: "#7F56D9",
      secondaryColor: "#f50057",
      errorColor: "red",
      warningColor: "#ffeb3b",
      successColor: "#00c853",
      borderRadius: 4,
    }}
    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    {({ values }) => {
      Object.assign(theme, {
        shape: {
          borderRadius: values.borderRadius,
        },
        palette: {
          ...theme.palette,
          primary: {
            light: lighten(values.primaryColor, 0.5),
            main: values.primaryColor,
            dark: darken(values.primaryColor, 0.1),
            contrastText: "#FFF",
          },
          secondary: {
            light: lighten(values.secondaryColor, 0.5),
            main: values.secondaryColor,
            dark: darken(values.secondaryColor, 0.1),
            contrastText: "#FFF",
          },

          error: {
            main: values.errorColor,
          },
          warning: {
            main: values.warningColor,
          },
          success: {
            main: values.successColor,
          },
        },
        components: {
          // ...theme.components,
          MuiButton: {
            styleOverrides: {
              root: {
                // backgroundColor: palette.palette.primary.main,
                "&.Mui-focusVisible": {
                  boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
                },
                // "&:hover": {
                //   boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
                // },
              },
            },
          },
        },
      });

      return (
        <Form>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Form>
      );
    }}
  </Formik>,

  document.querySelector("#root")
);
