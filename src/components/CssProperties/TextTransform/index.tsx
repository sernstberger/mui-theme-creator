import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectInput from "../../Form/SelectInput";

const TextTransform = ({ field }: any) => {
  return (
    <SelectInput
      {...{ field }}
      label="Text transform"
      options={[
        "none",
        "capitalize",
        "uppercase",
        "lowercase",
        "initial",
        "inherit",
      ]}
    />
  );
};

export default TextTransform;
