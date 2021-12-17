import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { alpha, lighten, darken } from "@mui/material";
import { useFormikContext } from "formik";

const theme = () => {
  const { values } = useFormikContext<any>();
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
        // textTransform: values.buttonTextTransform,
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
          // color: values.button.color,
          // size: values.button.size,
          // variant: values.button.variant,
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
    },
  });
};

export default theme;
