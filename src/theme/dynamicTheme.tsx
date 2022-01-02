import { createTheme } from "@mui/material/styles";
import { alpha, lighten, darken, getContrastRatio } from "@mui/material";
import { useFormikContext } from "formik";
import { createPaletteColor } from "../utils";
import { useForm, useFormContext } from "react-hook-form";

const theme = () => {
  const { values } = useFormikContext<any>();
  const { getValues } = useFormContext();
  const foo = getValues();
  console.log("!!!hit", foo);

  const fontObject = (fontName: string) => {
    return {
      // fontFamily: values[fontName].fontFamily,
      fontSize: values.typography[fontName].fontSize,
      fontWeight: values.typography[fontName].fontWeight,
      lineHeight: values.typography[fontName].lineHeight,
      letterSpacing: values.typography[fontName].letterSpacing,
    };
  };

  const pxToRem = (px: number) => {
    return `${px / 16}rem`;
  };

  return createTheme({
    shape: {
      borderRadius: values.shape.borderRadius,
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
    spacing: foo.spacing,
    direction: values.direction,
    palette: {
      primary: createPaletteColor(foo.palette.primary.main),
      secondary: createPaletteColor(foo.palette.secondary.main),
      error: createPaletteColor(foo.palette.error.main),
      warning: createPaletteColor(foo.palette.warning.main),
      success: createPaletteColor(foo.palette.success.main),

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
          color: values.components.MuiButton.defaultProps.color,
          disabled: values.components.MuiButton.defaultProps.disabled,
          fullWidth: values.components.MuiButton.defaultProps.fullWidth,
          size: values.components.MuiButton.defaultProps.size,
          variant: values.components.MuiButton.defaultProps.variant,
        },
        styleOverrides: {
          root: {
            padding: `${pxToRem(
              values.components.MuiButton.styleOverrides.root.padding[0]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.padding[1]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.padding[2]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.padding[3]
            )}`,

            margin: `${pxToRem(
              values.components.MuiButton.styleOverrides.root.margin[0]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.margin[1]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.margin[2]
            )} ${pxToRem(
              values.components.MuiButton.styleOverrides.root.margin[3]
            )}`,
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
          variant: values.components.MuiTextField.defaultProps.variant,
          color: values.components.MuiTextField.defaultProps.color,
          margin: values.components.MuiTextField.defaultProps.margin,
          size: values.components.MuiTextField.defaultProps.size,
        },
      },
    },
  });
};

export default theme;
