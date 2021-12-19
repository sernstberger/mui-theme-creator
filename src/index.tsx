import ReactDOM from "react-dom";
import App from "./App";
import { Formik, Form, FormikHelpers } from "formik";
import { createPaletteColor } from "./utils";

interface FontSizeProps {
  number: number;
  unit: string;
}
interface TypographyStyles {
  fontFamily?: string | null;
  fontSize: FontSizeProps;
  fontWeight: number | string;
  lineHeight: number | string;
  letterSpacing: number | string;
}

interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface Values {
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  spacing: number;
  direction: "ltr" | "rtl" | string;
  palette: {
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    success: PaletteColor;
  };

  textPrimaryColor: string;
  borderRadius: number;
  htmlFontSize: number;
  fontFamily: string;
  h1: TypographyStyles;
  h2: TypographyStyles;
  h3: TypographyStyles;
  h4: TypographyStyles;
  h5: TypographyStyles;
  h6: TypographyStyles;
  subtitle1: TypographyStyles;
  subtitle2: TypographyStyles;
  body1: TypographyStyles;
  body2: TypographyStyles;
  button: TypographyStyles;
  caption: TypographyStyles;
  overline: TypographyStyles;

  buttonDefaultProps: {
    color: any;
    disabled: boolean;
    fullWidth: boolean;
    size: any;
    variant: any;
  };

  textFieldDefaultProps: {
    color:
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | string;
    margin: "none" | "dense" | "normal" | string;
    size: "medium" | "small" | string;
    variant: "filled" | "outlined" | "standard" | string;
  };
}

ReactDOM.render(
  <Formik
    // enableReinitialize
    initialValues={{
      breakpoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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

      textPrimaryColor: "#111111",
      borderRadius: 4,
      htmlFontSize: 16,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontFamily: null,
        fontSize: { number: 6, unit: "rem" },
        fontWeight: 300,
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h2: {
        fontFamily: null,
        fontSize: { number: 3.75, unit: "rem" },
        fontWeight: 300,
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
      },
      h3: {
        fontFamily: null,
        fontSize: { number: 3, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: "0em",
      },
      h4: {
        fontFamily: null,
        fontSize: { number: 2.125, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.235,
        letterSpacing: "0.00735em",
      },
      h5: {
        fontFamily: null,
        fontSize: { number: 1.5, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.334,
        letterSpacing: "0em",
      },
      h6: {
        fontFamily: null,
        fontSize: { number: 1.25, unit: "rem" },
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
      subtitle1: {
        fontFamily: null,
        fontSize: { number: 1, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: "0.00938em",
      },
      subtitle2: {
        fontFamily: null,
        fontSize: { number: 0.875, unit: "rem" },
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: "0.00714em",
      },
      body1: {
        fontFamily: null,
        fontSize: { number: 1, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      body2: {
        fontFamily: null,
        fontSize: { number: 0.875, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: "0.01071em",
      },
      button: {
        fontFamily: "inherit",
        fontSize: {
          number: 0.875,
          unit: "rem",
        },
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
      },
      caption: {
        fontFamily: null,
        fontSize: { number: 0.75, unit: "rem" },
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: "0.03333em",
      },
      overline: {
        fontFamily: null,
        fontSize: { number: 0.75, unit: "rem" },
        fontWeight: 400,
        lineHeight: 2.66,
        letterSpacing: "0.08333em",
      },
      buttonDefaultProps: {
        color: "primary",
        disabled: false,
        fullWidth: false,
        size: "medium",
        variant: "contained",
      },
      textFieldDefaultProps: {
        color: "primary",
        margin: "none",
        size: "medium",
        variant: "outlined",
      },
    }}
    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<any>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    <Form>
      <App />
    </Form>
  </Formik>,

  document.querySelector("#root")
);
