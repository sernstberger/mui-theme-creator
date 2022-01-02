import {
  InputAdornment,
  TextField,
  OutlinedTextFieldProps,
} from "@mui/material";
import { useController, useForm, UseControllerProps } from "react-hook-form";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import * as yup from "yup";

interface RulesProps {
  max?: {
    value: number;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

export interface ValidatedInputBaseProps
  extends Omit<OutlinedTextFieldProps, "variant"> {
  fieldName: string;
  customValidation?: any; // TODO - this needs to be a yup schema
  rules?: RulesProps;
  pattern?: any
}

const ValidatedInputBase = ({
  fieldName,
  label,
  InputProps = undefined,
  required = false,
  type = "text",
  rules = undefined,
  defaultValue = undefined,
  customValidation = null,
  helperText = undefined,
  pattern = undefined,
  ...rest
}: ValidatedInputBaseProps) => {
  const validate = (_value: any) => {
    const validator = () => {
      try {
        customValidation.validateSync(_value); // validateSync comes from yup
      } catch (e) {
        // @ts-ignore
        return e.errors;
      }
    };

    const isValid = validator();
    return !isValid || isValid[0]; // if the input is valid, do nothing. If the input is invalid, return the error message.
  };

  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, errors, isSubmitting },
  } = useController({
    name: fieldName,
    rules: {
      required: {
        value: required,
        message: `${label} is required!`,
      },
      min: rules?.min,
      max: rules?.max,
      minLength: rules?.minLength,
      maxLength: rules?.maxLength,
      validate: {
        custom: validate,
      },
    },

    defaultValue,
  });

  return (
    <TextField
      {...rest}
      {...{ value, onChange, type, pattern }}
      label={`${label} RHF`}
      // onBlur={field.onBlur} // notify when input is touched/blur
      disabled={isSubmitting}
      name={fieldName} 
      id={fieldName}
      inputRef={ref} // send input ref, so we can focus on input when error appear
      error={invalid}
      helperText={(invalid && error?.message) || helperText}
      InputProps={{
        ...InputProps,
        endAdornment: invalid ? (
          <InputAdornment position="end">
            <WarningRoundedIcon
              color="error"
              fontSize="large"
              role="img"
              aria-hidden="false"
              aria-label="warning icon"
            />
          </InputAdornment>
        ) : (
          InputProps?.endAdornment
        ),
      }}
    />
  );
};
export default ValidatedInputBase;
