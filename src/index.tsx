import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

ReactDOM.render(
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
    }}
    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
  >
    <Form>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Form>
  </Formik>,

  document.querySelector("#root")
);
