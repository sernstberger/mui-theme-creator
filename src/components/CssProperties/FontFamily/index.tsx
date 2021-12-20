import SelectInput from "../../Form/SelectInput";

const FontFamily = ({ field }: any) => {
  return (
    <SelectInput
      {...{ field }}
      label="Font family"
      options={[
        "inherit",
        "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "'Redacted Script', cursive",
        "'Montserrat', sans-serif",
      ]}
    />
  );
};

export default FontFamily;
