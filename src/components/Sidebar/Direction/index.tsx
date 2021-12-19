import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";
import { useEffect } from "react";
import { useFormikContext } from "formik";

const Direction = () => {
  const { values } = useFormikContext<any>();
  useEffect(() => {
    document.body.dir = values.direction;
  }, [values.direction]);
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
