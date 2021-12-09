import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "./components/Button";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Grid } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import theme from "./theme";
import Palette from "./components/Palette";
import Shape from "./Shape";

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        adfadsfadsf
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ my: 4 }}>
          <Palette />
          <Button />
          <Shape />
          Typography cool
        </Box>
      </Grid>
      <Grid item xs={3}>
        <SyntaxHighlighter language="typescript" style={dark} wrapLines={true}>
          {JSON.stringify(theme)}

          {/* {`${theme}`} */}
        </SyntaxHighlighter>

        {/* {JSON.stringify(theme)} */}
      </Grid>
    </Grid>
  );
}
