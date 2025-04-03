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
import React, { useState } from "react";
import { useCitySelectOptions } from "./hooks";

type FiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<ContactFilterValues>>;
};

export default function Filters({ setFilters }: FiltersProps) {
  const [filterValues, setFilterValues] = useState({} as ContactFilterValues);

  const options = useCitySelectOptions();

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setFilters(filterValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid size={3}>
          <TextField
            value={filterValues?.name || ""}
            onChange={(ev) => {
              handleOnChangeFilter("name", ev.target.value);
            }}
            color="light"
            fullWidth
            variant="outlined"
            label="Name"
            focused
            sx={nameStyle}
          />
        </Grid>
        <Grid size={3}>
          <FormControl color="light" focused fullWidth sx={selectStyle}>
            <InputLabel>City</InputLabel>
            <Select
              value={filterValues?.city || ""}
              onChange={(ev) => {
                handleOnChangeFilter("city", ev.target.value);
              }}
              variant="outlined"
            >
              <MenuItem value={""}>None</MenuItem>
              {options.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size="auto">
          <CheckboxSecondary
            checked={!!filterValues?.isActive}
            onChange={(ev) => {
              handleOnChangeFilter("isActive", ev.target.checked);
            }}
            label="Show active"
          />
        </Grid>
        <Grid size="auto">
          <Button type="submit" color="secondary" variant="contained">
            FILTER
          </Button>
        </Grid>
      </Grid>
    </form>
  );

  function handleOnChangeFilter(
    name: ContactFilterName,
    value: string | boolean,
  ) {
    setFilterValues((prev) => {
      const copy = { ...prev };
      if (!value) {
        delete copy[name];
      } else {
        copy[name] = value;
      }
      return copy;
    });
  }
}

const nameStyle = {
  "& input": {
    color: "#fff",
  },
};

const selectStyle = {
  ".MuiSelect-select, .MuiSvgIcon-root": {
    color: "#fff",
  },
  ".MuiFormLabel-root": {
    bgcolor: "primary.main",
    px: 1,
  },
};
