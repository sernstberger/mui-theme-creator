import { lighten, darken, getContrastRatio } from "@mui/material";

const createPaletteColor = (color: string) => {
  const contrastRatio = getContrastRatio("#FFF", color);
  const contrastText = contrastRatio >= 3 ? "#FFF" : "#000";
  return {
    light: lighten(color, 0.5),
    main: color,
    dark: darken(color, 0.1),
    contrastText,
  };
};

export { createPaletteColor }
