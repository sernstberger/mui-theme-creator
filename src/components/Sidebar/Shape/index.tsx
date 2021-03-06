import TextInput from "../../Form/TextInput";
import Layout from "../SidebarItem";

const Shape = () => {
  return (
    <Layout title="Shape">
      <TextInput field="borderRadius" type="number" label="Border radius" />
    </Layout>
  );
};

export default Shape;
