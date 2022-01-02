import ValidatedInputBase, {
  ValidatedInputBaseProps,
} from "../ValidatedInputBase";

export interface ValidatedTextInputProps
  extends Omit<ValidatedInputBaseProps, "rules"> {
  minLength?: number | undefined;
  maxLength?: number | undefined;
}

const ValidatedTextInput = ({
  maxLength = undefined,
  minLength = undefined,
  ...rest
}: ValidatedTextInputProps) => {
  return (
    <ValidatedInputBase
      {...rest}
      rules={{
        minLength: {
          value: minLength as number,
          message: `cannot be below ${minLength}`,
        },
        maxLength: {
          value: maxLength as number,
          message: `${maxLength} max exceeded`,
        },
      }}
    />
  );
};
export default ValidatedTextInput;
