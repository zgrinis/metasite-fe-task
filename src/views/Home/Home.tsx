import { Box, Container, Grid, Typography } from "@mui/material";
import DataGridContacts from "../../components/DataGridContacts/DataGridContacts";
import { useContactContext } from "../../contexts/contact";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useFilteredRows } from "./hooks";

export function Home() {
  const { contact, contactId, isContactLoading } = useContactContext();
  const [filters, setFilters] = useState({} as ContactFilterValues);
  const { rows, isRowsLoading } = useFilteredRows({ filters });

  return (
    <>
      <Box bgcolor="primary.dark" py={2}>
        <Container>
          <Typography
            variant="h4"
            color="white"
            fontWeight={700}
            component="h1"
          >
            CONTACTIFY
          </Typography>
        </Container>
      </Box>
      <Box bgcolor="primary.main" pt={6} pb={10}>
        <Container>
          <Filters {...{ filters, setFilters }} />
        </Container>
      </Box>
      <Container sx={{ mt: -4 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            {isRowsLoading ? (
              <>Loading...</>
            ) : (
              <>
                <DataGridContacts rows={rows} />
              </>
            )}
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
