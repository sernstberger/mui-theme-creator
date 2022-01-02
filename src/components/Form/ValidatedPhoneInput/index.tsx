import * as React from "react";
import ValidatedNumberInput, {
  ValidatedNumberInputProps,
} from "../ValidatedNumberInput";
import PhoneIcon from "@mui/icons-material/Phone";
import { InputAdornment } from "@mui/material";
import NumberFormatCustom from "../NumberFormatCustom";
import * as yup from "yup";

export interface ValidatedPhoneInputProps extends ValidatedNumberInputProps {}

const ValidatedPhoneInput = ({ ...rest }: ValidatedPhoneInputProps) => {
  return (
    <ValidatedNumberInput
      {...rest}
      InputProps={{
        inputComponent: React.forwardRef((props, ref) => {
          return (
            <NumberFormatCustom
              {...props}
              // @ts-ignore
              ref={ref}
              allowEmptyFormatting={true}
              format="(###) ###-####"
              mask="_"
            />
          );
        }),
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon
              color="inherit"
              role="img"
              aria-hidden="false"
              aria-label="Phone icon"
            />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      customValidation={yup.string().min(10, "You must enter a valid phone number")}
    />
  );
};
export default ValidatedPhoneInput;
