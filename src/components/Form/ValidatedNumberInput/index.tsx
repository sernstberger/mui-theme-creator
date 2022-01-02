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
          value: min as number,
          message: `cannot be below ${min}`,
        },
        max: {
          value: max as number,
          message: `${max} max exceeded`,
        },
      }}
      // type="number"
      inputProps={{ inputMode: "numeric" }}
    />
  );
};
export default ValidatedNumberInput;
