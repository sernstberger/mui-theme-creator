import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "./components/Button";
import { Formik, Field, Form, FormikHelpers } from "formik";

export default function App() {
  return (
    <Container maxWidth="sm">
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="John" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field id="email" name="email" placeholder="john@acme.com" type="email" />

      <button type="submit">Submit</button>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Button />
      </Box>
    </Container>
  );
}
