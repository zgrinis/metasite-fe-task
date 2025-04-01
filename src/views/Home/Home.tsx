import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import DataGridContacts from "../../components/DataGridContacts/DataGridContacts";
import { useContactContext } from "../../contexts/contact";
import Filters from "../../components/FIlters/Filters";

export function Home() {
  const { contact, contactId, isContactLoading } = useContactContext();

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
          <Filters />
        </Container>
      </Box>
      <Container sx={{ mt: -4 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <DataGridContacts />
          </Grid>
          {contactId && (
            <>
              <Grid size={4}>
                <Card>
                  {isContactLoading ? (
                    <>
                      <Skeleton
                        sx={{ height: 190 }}
                        animation="wave"
                        variant="rectangular"
                      />
                    </>
                  ) : (
                    <>
                      <CardMedia
                        component="img"
                        src={"/images/userpic.png"}
                        alt="Anthony H."
                      />
                    </>
                  )}
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {isContactLoading ? (
                      <>
                        <Box sx={{ width: 300 }}>
                          <Skeleton />
                          <Skeleton animation="wave" />
                          <Skeleton animation={false} />
                        </Box>
                      </>
                    ) : (
                      <>
                        <Typography variant="h5" textAlign={"center"}>
                          {contact?.name}
                        </Typography>
                        <Grid container>
                          <Grid size={6}>Name:</Grid>
                          <Grid size={6}>{contact?.name}</Grid>
                        </Grid>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}
