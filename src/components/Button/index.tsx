import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistributiveOmit, OverridableStringUnion } from "@mui/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import theme from "../../theme";

import {
  Button as MuiButton,
  ButtonPropsVariantOverrides,
  Stack,
  Typography,
} from "@mui/material";

const Button = () => {
  const [variant, setVariant] =
    React.useState<
      OverridableStringUnion<
        "text" | "outlined" | "contained",
        ButtonPropsVariantOverrides
      >
    >("contained");

  const codeString = `${theme}`;
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    const foo: any = event.target.value;
    setVariant(foo);
  };
  return (
    <div>
      <Stack spacing={2} direction="row">
        <MuiButton variant={variant}>Button CTA</MuiButton>
        <MuiButton variant={variant} className="Mui-hover">
          Button CTA
        </MuiButton>
        <MuiButton variant={variant} className="Mui-focusVisible">
          Button CTA
        </MuiButton>
        <MuiButton variant={variant} disabled>
          Button CTA
        </MuiButton>
      </Stack>

      <Typography>Defaults</Typography>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">variant</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={variant}
            label="variant"
            onChange={handleChange}
          >
            <MenuItem value="contained">contained</MenuItem>
            <MenuItem value="outlined">outlined</MenuItem>
            <MenuItem value="text">text</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <SyntaxHighlighter language="typescript" style={dark} wrapLines={true}>
        {JSON.stringify(theme)}

        {/* {`${theme}`} */}
      </SyntaxHighlighter>

      {JSON.stringify(theme)}
    </div>
  );
};

export default Button;
