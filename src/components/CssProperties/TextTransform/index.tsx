import SelectInput from "../../Form/SelectInput";

const TextTransform = ({ field }: any) => {
  return (
    <SelectInput
      {...{ field }}
      label="Text transform"
      options={[
        "none",
        "capitalize",
        "uppercase",
        "lowercase",
        "initial",
        "inherit",
      ]}
    />
  );
};

export default TextTransform;
