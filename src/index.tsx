import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { alpha, createTheme, darken, lighten } from "@mui/system";

interface TypographyStyles {
  fontFamily: string;
  fontSize: number | string;
  fontWeight: number | string;
  lineHeight: number | string;
  letterSpacing: number | string;
}

interface FontSizeProps {
  number: number;
  unit: string;
}
interface Values {
  primaryColor: string;
  secondaryColor: string;
  errorColor: string;
  warningColor: string;
  successColor: string;
  textPrimaryColor: string;
  borderRadius: number;
  htmlFontSize: number;
  fontFamily: string;
  h1FontFamily: any;
  h1FontSize: FontSizeProps;
  h1FontWeight: any;
  h1LineHeight: any;
  h1LetterSpacing: any;
  h2FontFamily: any;
  h2FontSize: FontSizeProps;
  h2FontWeight: any;
  h2LineHeight: any;
  h2LetterSpacing: any;
  h3FontFamily: any;
  h3FontSize: FontSizeProps;
  h3FontWeight: any;
  h3LineHeight: any;
  h3LetterSpacing: any;
  h4FontFamily: any;
  h4FontSize: FontSizeProps;
  h4FontWeight: any;
  h4LineHeight: any;
  h4LetterSpacing: any;
  h5FontFamily: any;
  h5FontSize: FontSizeProps;
  h5FontWeight: any;
  h5LineHeight: any;
  h5LetterSpacing: any;
  h6FontFamily: any;
  h6FontSize: FontSizeProps;
  h6FontWeight: any;
  h6LineHeight: any;
  h6LetterSpacing: any;
  subtitle1FontFamily: any;
  subtitle1FontSize: FontSizeProps;
  subtitle1FontWeight: any;
  subtitle1LineHeight: any;
  subtitle1LetterSpacing: any;
  subtitle2FontFamily: any;
  subtitle2FontSize: FontSizeProps;
  subtitle2FontWeight: any;
  subtitle2LineHeight: any;
  subtitle2LetterSpacing: any;
  body1FontFamily: any;
  body1FontSize: FontSizeProps;
  body1FontWeight: any;
  body1LineHeight: any;
  body1LetterSpacing: any;
  body2FontFamily: any;
  body2FontSize: FontSizeProps;
  body2FontWeight: any;
  body2LineHeight: any;
  body2LetterSpacing: any;
  buttonFontFamily: any;
  buttonFontSize: FontSizeProps;
  buttonFontWeight: any;
  buttonLineHeight: any;
  buttonLetterSpacing: any;
  buttonTextTransform: any;
  captionFontFamily: any;
  captionFontSize: FontSizeProps;
  captionFontWeight: any;
  captionLineHeight: any;
  captionLetterSpacing: any;
  overlineFontFamily: any;
  overlineFontSize: FontSizeProps;
  overlineFontWeight: any;
  overlineLineHeight: any;
  overlineLetterSpacing: any;
}

ReactDOM.render(
  <Formik
    // enableReinitialize
    initialValues={{
      primaryColor: "#7F56D9",
      secondaryColor: "#F50057",
      errorColor: "#EB0014",
      warningColor: "#F1A204",
      successColor: "#1DB45A",
      textPrimaryColor: '#111111',
      borderRadius: 4,
      htmlFontSize: 16,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1FontSize: { number: 6, unit: "rem" },
      h1FontWeight: 300,
      h1LineHeight: 1.167,
      h1LetterSpacing: "-0.01562em",
      h2FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h2FontSize: { number: 3.75, unit: "rem" },
      h2FontWeight: 300,
      h2LineHeight: 1.2,
      h2LetterSpacing: "-0.00833em",
      h3FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h3FontSize: { number: 3, unit: "rem" },
      h3FontWeight: 400,
      h3LineHeight: 1.167,
      h3LetterSpacing: "0em",
      h4FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h4FontSize: { number: 2.125, unit: "rem" },
      h4FontWeight: 400,
      h4LineHeight: 1.235,
      h4LetterSpacing: "0.00735em",
      h5FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h5FontSize: { number: 1.5, unit: "rem" },
      h5FontWeight: 400,
      h5LineHeight: 1.334,
      h5LetterSpacing: "0em",
      h6FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h6FontSize: { number: 1.25, unit: "rem" },
      h6FontWeight: 500,
      h6LineHeight: 1.6,
      h6LetterSpacing: "0.0075em",
      subtitle1FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      subtitle1FontSize: { number: 1, unit: "rem" },
      subtitle1FontWeight: 400,
      subtitle1LineHeight: 1.75,
      subtitle1LetterSpacing: "0.00938em",
      subtitle2FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      subtitle2FontSize: { number: 0.875, unit: "rem" },
      subtitle2FontWeight: 500,
      subtitle2LineHeight: 1.57,
      subtitle2LetterSpacing: "0.00714em",
      body1FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      body1FontSize: { number: 1, unit: "rem" },
      body1FontWeight: 400,
      body1LineHeight: 1.5,
      body1LetterSpacing: "0.00938em",
      body2FontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      body2FontSize: { number: 0.875, unit: "rem" },
      body2FontWeight: 400,
      body2LineHeight: 1.43,
      body2LetterSpacing: "0.01071em",
      buttonFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      buttonFontSize: {
        number: 0.875,
        unit: "rem",
      },
      buttonFontWeight: 500,
      buttonLineHeight: 1.75,
      buttonLetterSpacing: "0.02857em",
      buttonTextTransform: "uppercase",
      captionFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      captionFontSize: { number: 0.75, unit: "rem" },
      captionFontWeight: 400,
      captionLineHeight: 1.66,
      captionLetterSpacing: "0.03333em",
      overlineFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      overlineFontSize: { number: 0.75, unit: "rem" },
      overlineFontWeight: 400,
      overlineLineHeight: 2.66,
      overlineLetterSpacing: "0.08333em",
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
          text: {
            primary: values.textPrimaryColor,
          },
        },
        typography: {
          ...theme.typography,
          htmlFontSize: values.htmlFontSize,
          fontFamily: values.fontFamily,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
          h1: {
            fontFamily: values.h1FontFamily,
            fontSize: `${values.h1FontSize.number}${values.h1FontSize.unit}`,
            fontWeight: values.h1FontWeight,
            lineHeight: values.h1LineHeight,
            letterSpacing: values.h1LetterSpacing,
          },
          h2: {
            fontFamily: values.h2FontFamily,
            fontSize: `${values.h2FontSize.number}${values.h2FontSize.unit}`,
            fontWeight: values.h2FontWeight,
            lineHeight: values.h2LineHeight,
            letterSpacing: values.h2LetterSpacing,
          },
          h3: {
            fontFamily: values.h3FontFamily,
            fontSize: `${values.h3FontSize.number}${values.h3FontSize.unit}`,
            fontWeight: values.h3FontWeight,
            lineHeight: values.h3LineHeight,
            letterSpacing: values.h3LetterSpacing,
          },
          h4: {
            fontFamily: values.h4FontFamily,
            fontSize: `${values.h4FontSize.number}${values.h4FontSize.unit}`,
            fontWeight: values.h4FontWeight,
            lineHeight: values.h4LineHeight,
            letterSpacing: values.h4LetterSpacing,
          },
          h5: {
            fontFamily: values.h5FontFamily,
            fontSize: `${values.h5FontSize.number}${values.h5FontSize.unit}`,
            fontWeight: values.h5FontWeight,
            lineHeight: values.h5LineHeight,
            letterSpacing: values.h5LetterSpacing,
          },
          h6: {
            fontFamily: values.h6FontFamily,
            fontSize: `${values.h6FontSize.number}${values.h6FontSize.unit}`,
            fontWeight: values.h6FontWeight,
            lineHeight: values.h6LineHeight,
            letterSpacing: values.h6LetterSpacing,
          },
          subtitle1: {
            fontFamily: values.subtitle1FontFamily,
            fontSize: `${values.subtitle1FontSize.number}${values.subtitle1FontSize.unit}`,
            fontWeight: values.subtitle1FontWeight,
            lineHeight: values.subtitle1LineHeight,
            letterSpacing: values.subtitle1LetterSpacing,
          },
          subtitle2: {
            fontFamily: values.subtitle2FontFamily,
            fontSize: `${values.subtitle2FontSize.number}${values.subtitle2FontSize.unit}`,
            fontWeight: values.subtitle2FontWeight,
            lineHeight: values.subtitle2LineHeight,
            letterSpacing: values.subtitle2LetterSpacing,
          },
          body1: {
            fontFamily: values.body1FontFamily,
            fontSize: `${values.body1FontSize.number}${values.body1FontSize.unit}`,
            fontWeight: values.body1FontWeight,
            lineHeight: values.body1LineHeight,
            letterSpacing: values.body1LetterSpacing,
          },
          body2: {
            fontFamily: values.body2FontFamily,
            fontSize: `${values.body2FontSize.number}${values.body2FontSize.unit}`,
            fontWeight: values.body2FontWeight,
            lineHeight: values.body2LineHeight,
            letterSpacing: values.body2LetterSpacing,
          },
          button: {
            fontFamily: values.buttonFontFamily,
            fontSize: `${values.buttonFontSize.number}${values.buttonFontSize.unit}`,
            fontWeight: values.buttonFontWeight,
            lineHeight: values.buttonLineHeight,
            letterSpacing: values.buttonLetterSpacing,
            textTransform: values.buttonTextTransform,
          },
          caption: {
            fontFamily: values.captionFontFamily,
            fontSize: `${values.captionFontSize.number}${values.captionFontSize.unit}`,
            fontWeight: values.captionFontWeight,
            lineHeight: values.captionLineHeight,
            letterSpacing: values.captionLetterSpacing,
          },
          overline: {
            fontFamily: values.overlineFontFamily,
            fontSize: `${values.overlineFontSize.number}${values.overlineFontSize.unit}`,
            fontWeight: values.overlineFontWeight,
            lineHeight: values.overlineLineHeight,
            letterSpacing: values.overlineLetterSpacing,
          },
        },
        components: {
          // ...theme.components,
          MuiButton: {
            styleOverrides: {
              containedPrimary: {
                "&.Mui-focusVisible": {
                  boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
                },
                // "&:hover": {
                //   boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
                // },
              },
              containedSecondary: {
                "&.Mui-focusVisible": {
                  boxShadow: `0 0 0 4px ${alpha(values.secondaryColor, 0.2)}`,
                },
                // "&:hover": {
                //   boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
                // },
              },
            },
          },
        },
      });

      console.log(theme);

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
