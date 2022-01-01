import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props}>Cool</MuiButton>;
};
