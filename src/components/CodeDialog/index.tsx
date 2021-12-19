import * as React from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Grid,
  Typography as MuiTypography,
  Button as MuiButton,
  Stack,
  Divider,
  TextField,
  Container,
  Box,
  Button,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import dynamicTheme from "../../theme/dynamicTheme";
import { useFormikContext } from "formik";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

export default function CodeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("body")} variant="contained">Generate theme</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Theme</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <SyntaxHighlighter
              language="typescript"
              style={dark}
              wrapLines={true}
            >
              {JSON.stringify(dynamicTheme())}
            </SyntaxHighlighter>
            {JSON.stringify(dynamicTheme())}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
