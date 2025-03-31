import React from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

type CheckboxWhiteProps = {
  label: string;
} & CheckboxProps;

export default function CheckboxSecondary({
  label,
  ...props
}: CheckboxWhiteProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox color="secondary" {...props} />}
        label={
          <Grid container gap={"1rem"}>
            Show active
            <VisibilityIcon />
          </Grid>
        }
      />
    </FormGroup>
  );
}
