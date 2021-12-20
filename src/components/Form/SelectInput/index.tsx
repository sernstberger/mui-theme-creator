import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getIn, useFormikContext } from "formik";

interface OptionProps {
  value: string | number;
  label: string;
}
interface SelectInputProps {
  field: string;
  label: string;
  options: string[] | number[] | OptionProps[];
}

const SelectInput = ({
  field,
  label,

  options,
}: SelectInputProps) => {
  const { values, handleChange, touched, errors } = useFormikContext<any>();

  return (
    <FormControl fullWidth>
      <InputLabel id={`${field}-label`}>{label}</InputLabel>
      <Select
        labelId={`${field}-label`}
        id={field}
        name={field}
        value={getIn(values, field)}
        label={label}
        size="small"
        onChange={handleChange}
        // error={touched[field] && Boolean(errors[field])}
        // helperText={touched[field] && errors[field]}
      >
        {options.map((option: string | number | OptionProps) => {
          if (typeof option === "string" || typeof option === "number") {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          }
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
