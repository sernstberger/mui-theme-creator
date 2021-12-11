import SelectInput from "../../Form/SelectInput";

const FontWeight = ({ field }: any) => {
  return (
    <SelectInput
      {...{ field }}
      label="Font weight"
      options={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
    />
  );
};

export default FontWeight;
