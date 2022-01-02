import MenuItem from "@mui/material/MenuItem";
import ValidatedInputBase, {
  ValidatedInputBaseProps,
} from "../ValidatedInputBase";

interface OptionProps {
  value: string | number;
  label: string;
}

export interface ValidatedSelectProps
  extends Omit<ValidatedInputBaseProps, "rules"> {
  options: OptionProps[];
}

const ValidatedSelect = ({
  options,
  defaultValue = "",
  ...rest
}: ValidatedSelectProps) => {
  return (
    <ValidatedInputBase {...rest} select {...{ defaultValue }}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </ValidatedInputBase>
  );
};
export default ValidatedSelect;
