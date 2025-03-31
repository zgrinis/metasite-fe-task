import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import CheckboxSecondary from "./components/CheckboxSecondary/CheckboxSecondary";
import DataGridContacts from "./components/DataGridContacts/DataGridContacts";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565C0",
      dark: "#0D47A1",
      light: "#2196F3",
    },
    secondary: {
      main: "#1DE9B6",
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
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
            <Grid container spacing={2}>
              <Grid size={3}>
                <TextField fullWidth variant="outlined" label="Name" />
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
          </Container>
        </Box>
        <Container sx={{ mt: -4 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <DataGridContacts />
            </Grid>
            <Grid size={4}>
              <Card>
                <CardMedia
                  component="img"
                  src={"/images/userpic.png"}
                  width={20}
                  alt="Anthony H."
                />
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <Typography variant="h5" textAlign={"center"}>
                    Anthony H.
                  </Typography>
                  <Grid container>
                    <Grid size={6}>Name:</Grid>
                    <Grid size={6}>Anthony H.</Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
