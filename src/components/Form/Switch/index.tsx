import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch as MuiSwitch } from "@mui/material";
import { useFormikContext } from "formik";

const Switch = ({ field, label }: any) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field, event.target.checked);
  };
  return (
    <FormControlLabel
      {...{ label }}
      control={
        <MuiSwitch
          checked={values.components.MuiButton.defaultProps[field]}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      labelPlacement="end"
    />
  );
};

export default Switch;
