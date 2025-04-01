import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CheckboxSecondary from "../CheckboxSecondary/CheckboxSecondary";

export default function Filters() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={3}>
          <TextField name="name" fullWidth variant="outlined" label="Name" />
        </Grid>
        <Grid size={3}>
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select variant="outlined">
              <MenuItem value="labas">krabas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size="auto">
          <CheckboxSecondary label="Show active" />
        </Grid>
        <Grid size="auto">
          <Button color="secondary" variant="contained">
            FILTER
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
