import { Alert, Box, Container, Typography } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";

export default function Layout() {
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
      <ErrorBoundary fallback={appErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

const appErrorFallback = (
  <Container sx={{ py: 5 }}>
    <Box>
      <Alert severity="error">Error has occured. Please try again later.</Alert>
    </Box>
  </Container>
);
