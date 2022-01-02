import TextInput from "../../Form/TextInput";
import ValidatedNumberInput from "../../Form/ValidatedNumberInput";
import Layout from "../SidebarItem";

const Spacing = () => {
  return (
    <Layout title="Spacing">
      <ValidatedNumberInput fieldName="spacing" label="Spacing" />
    </Layout>
  );
};

export default Spacing;
