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
import { useContactListQuery } from "../../queries/contacts";
import React, { useMemo, useState } from "react";

type FiltersProps = {
  filters: ContactFilterValues;
  setFilters: React.Dispatch<React.SetStateAction<ContactFilterValues>>;
};

export default function Filters({ filters, setFilters }: FiltersProps) {
  const { data, isFetching } = useContactListQuery();
  const [filterValues, setFilterValues] = useState({} as ContactFilterValues);

  const options = useMemo(() => {
    if (isFetching || !data) return [];

    return Array.from(new Set(data.map((contact) => contact.city)));
  }, [data, isFetching]);

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    console.log(filterValues);
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
            sx={{
              "& input": {
                color: "#fff",
              },
            }}
          />
        </Grid>
        <Grid size={3}>
          <FormControl
            color="light"
            focused
            fullWidth
            sx={{
              ".MuiSelect-select, .MuiSvgIcon-root": {
                color: "#fff",
              },
              ".MuiFormLabel-root": {
                bgcolor: "primary.main",
                px: 1,
              },
            }}
          >
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
