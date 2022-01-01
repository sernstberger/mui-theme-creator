import { createTheme } from "@mui/material/styles";
import { alpha, lighten, darken, getContrastRatio } from "@mui/material";
import { useFormikContext } from "formik";
import { createPaletteColor } from "../utils";

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

  const pxToRem = (px: number) => {
    return `${px / 16}rem`;
  };

  return createTheme({
    shape: {
      borderRadius: values.borderRadius,
    },
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: values.breakpoints.xs,
        sm: values.breakpoints.sm,
        md: values.breakpoints.md,
        lg: values.breakpoints.lg,
        xl: values.breakpoints.xl,
      },
    },
    spacing: values.spacing,
    direction: values.direction,
    palette: {
      primary: createPaletteColor(values.palette.primary.main),
      secondary: createPaletteColor(values.palette.secondary.main),
      error: createPaletteColor(values.palette.error.main),
      warning: createPaletteColor(values.palette.warning.main),
      success: createPaletteColor(values.palette.success.main),

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
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false,
        },
      },
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
          color: values.components.Button.defaultProps.color,
          disabled: values.components.Button.defaultProps.disabled,
          fullWidth: values.components.Button.defaultProps.fullWidth,
          size: values.components.Button.defaultProps.size,
          variant: values.components.Button.defaultProps.variant,
        },
        styleOverrides: {
          root: {
            padding: `${pxToRem(
              values.components.Button.styleOverrides.padding[0]
            )} ${pxToRem(
              values.components.Button.styleOverrides.padding[1]
            )} ${pxToRem(
              values.components.Button.styleOverrides.padding[2]
            )} ${pxToRem(values.components.Button.styleOverrides.padding[3])}`,

            margin: `${pxToRem(
              values.components.Button.styleOverrides.margin[0]
            )} ${pxToRem(
              values.components.Button.styleOverrides.margin[1]
            )} ${pxToRem(
              values.components.Button.styleOverrides.margin[2]
            )} ${pxToRem(values.components.Button.styleOverrides.margin[3])}`,
          },

          containedPrimary: {
            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 4px ${alpha(values.palette.primary.main, 0.2)}`,
            },
            // "&:hover": {
            //   boxShadow: `0 0 0 4px ${alpha(values.palette.primary.main, 0.2)}`,
            // },
          },
          containedSecondary: {
            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 4px ${alpha(
                values.palette.secondary.main,
                0.2
              )}`,
            },
            // "&:hover": {
            //   boxShadow: `0 0 0 4px ${alpha(values.primaryColor, 0.2)}`,
            // },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: values.components.TextField.defaultProps.variant,
          color: values.components.TextField.defaultProps.color,
          margin: values.components.TextField.defaultProps.margin,
          size: values.components.TextField.defaultProps.size,
        },
      },
    },
  });
};

export default theme;
