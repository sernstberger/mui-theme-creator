import React from "react";
import ValidatedNumberInput, {
  ValidatedNumberInputProps,
} from "../ValidatedNumberInput";
import NumberFormatCustom from "../NumberFormatCustom";
import * as yup from "yup";

export interface ValidatedFeinInputProps extends ValidatedNumberInputProps {}

const ValidatedFeinInput = ({ ...rest }: ValidatedFeinInputProps) => {
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
              format="##-#######"
              mask="_"
            />
          );
        }),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      customValidation={yup.string().min(9, "You must enter a valid FEIN")}
    />
  );
};
export default ValidatedFeinInput;
