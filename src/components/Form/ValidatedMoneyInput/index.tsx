import * as React from "react";
import NumberFormat from "react-number-format";
import ValidatedNumberInput, {
  ValidatedNumberInputProps,
} from "../ValidatedNumberInput";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
);

interface ValidatedMoneyInputProps extends ValidatedNumberInputProps {}

export default function ValidatedMoneyInput(props: ValidatedMoneyInputProps) {
  return (
    <ValidatedNumberInput
      {...props}
      InputProps={{
        inputComponent: NumberFormatCustom as any,
      }}
    />
  );
}
