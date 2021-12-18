import { createTheme } from "@mui/material/styles";
import { alpha, lighten, darken } from "@mui/material";
import { useFormikContext } from "formik";

const theme = () => {
  const { values } = useFormikContext<any>();

  const fontObject = (fontName: string) => {
    return {
      fontFamily: values[fontName].fontFamily,
      fontSize: `${values[fontName].fontSize.number}${values[fontName].fontSize.unit}`,
      fontWeight: values[fontName].fontWeight,
      lineHeight: values[fontName].lineHeight,
      letterSpacing: values[fontName].letterSpacing,
    };
  };

  return createTheme({
    shape: {
      borderRadius: values.borderRadius,
    },
    palette: {
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
      htmlFontSize: values.htmlFontSize,
      fontFamily: values.fontFamily,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: fontObject("h1"),
      h2: fontObject("h2"),
      h3: fontObject("h3"),
      h4: fontObject("h4"),
      h5: fontObject("h5"),
      h6: fontObject("h6"),
      subtitle1: fontObject("subtitle1"),
      subtitle2: fontObject("subtitle2"),
      body1: fontObject("body1"),
      body2: fontObject("body2"),
      button: fontObject("button"),
      caption: fontObject("caption"),
      overline: fontObject("overline"),
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "dashed" },
            style: {
              textTransform: "none",
              border: `2px dashed #000`,
            },
          },
        ],
        defaultProps: {
          color: values.buttonDefaultProps.color,
          size: values.buttonDefaultProps.size,
          variant: values.buttonDefaultProps.variant,
        },
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
      MuiTextField: {
        defaultProps: {
          variant: values.textFieldDefaultProps.variant,
          color: values.textFieldDefaultProps.color,
          margin: values.textFieldDefaultProps.margin,
          size: values.textFieldDefaultProps.size,
        },
      },
    },
  });
};

export default theme;
