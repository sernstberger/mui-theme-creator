import { Grid } from "@mui/material";
import SelectInput from "../../Form/SelectInput";
import TextInput from "../../Form/TextInput";

const FontSize = ({ field }: any) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <TextInput field={`${field}.number`} label="Font size number" type="number" />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          field={`${field}.unit`}
          label="Font size unit"
          options={["em", "rem", "px"]}
        />
      </Grid>
    </Grid>
  );
};

export default FontSize;
