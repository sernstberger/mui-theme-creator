import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";

const Direction = () => {
  return (
    <SidebarItem title="Direction">
      <SelectInput
        field="direction"
        label="Direction"
        options={["ltr", "rtl"]}
      />
    </SidebarItem>
  );
};

export default Direction;
