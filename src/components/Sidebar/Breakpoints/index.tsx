import { Box, Stack, Typography } from "@mui/material";
import SidebarItem from "../SidebarItem";
import SelectInput from "../../Form/SelectInput";
import TextInput from "../../Form/TextInput";

const Breakpoints = () => {
  return (
    <SidebarItem title="Breakpoints">
      <Stack spacing={2}>
        <TextInput field="breakpoints.xs" label="xs" type="number" />
        <TextInput field="breakpoints.sm" label="sm" type="number" />
        <TextInput field="breakpoints.md" label="md" type="number" />
        <TextInput field="breakpoints.lg" label="lg" type="number" />
        <TextInput field="breakpoints.xl" label="xl" type="number" />
      </Stack>
    </SidebarItem>
  );
};

export default Breakpoints;
