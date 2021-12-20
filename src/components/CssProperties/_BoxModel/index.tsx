import { Box, Stack, Typography } from "@mui/material";
import TextInput from "../../Form/TextInput";

const _BoxModel = ({ field, label }: any) => {
  return (
    <Box>
      <Typography>{label}</Typography>
      <Stack direction="row" spacing={1}>
        <TextInput field={`${field}[0]`} label="Top" type="number" />
        <TextInput field={`${field}[1]`} label="Right" type="number" />
        <TextInput field={`${field}[2]`} label="Bottom" type="number" />
        <TextInput field={`${field}[3]`} label="Left" type="number" />
      </Stack>
    </Box>
  );
};

export default _BoxModel;
