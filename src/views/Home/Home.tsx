import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import DataGridContacts from "../../components/DataGridContacts/DataGridContacts";
import { useContactContext } from "../../contexts/contact";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useFilteredRows } from "./hooks";
import LoadingBoundary from "../../components/LoadingBoundary/LoadingBoundary";

export default function Home() {
  const { contact, contactId, isContactLoading } = useContactContext();
  const [filters, setFilters] = useState({} as ContactFilterValues);
  const { rows, isRowsLoading } = useFilteredRows({ filters });

  return (
    <>
      <Box bgcolor="primary.main" pt={6} pb={10}>
        <Container>
          <Filters {...{ filters, setFilters }} />
        </Container>
      </Box>
      <Container sx={{ mt: -4 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <LoadingBoundary fallback={gridFallback} isLoading={isRowsLoading}>
              <DataGridContacts rows={rows} />
            </LoadingBoundary>
          </Grid>
          {contactId && (
            <>
              <Grid size={4}>
                <ContactCard {...{ isContactLoading, contact }} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

const gridFallback = (
  <>
    <Skeleton variant="rectangular" width={"100%"} height={576} />
  </>
);
