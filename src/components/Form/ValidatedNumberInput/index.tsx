import ValidatedInputBase, {
  ValidatedInputBaseProps,
} from "../ValidatedInputBase";

export interface ValidatedNumberInputProps
  extends Omit<ValidatedInputBaseProps, "rules"> {
  min?: number | undefined;
  max?: number | undefined;
}

const ValidatedNumberInput = ({
  max = undefined,
  min = undefined,
  ...rest
}: ValidatedNumberInputProps) => {
  return (
    <ValidatedInputBase
      {...rest}
      rules={{
        min: {
          value: min || 0,
          message: `cannot be below ${min}`,
        },
        max: {
          value: max || 0,
          message: `${max} max exceeded`,
        },
      }}
      // type="number"
      // pattern="[0-9]*"
      inputProps={{ inputMode: "numeric" }}
    />
  );
};
export default ValidatedNumberInput;
