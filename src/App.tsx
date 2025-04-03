import React from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactContextProvider } from "./contexts/contact";
import Layout from "./components/Layout/Layout";
import theme from "./theme";

export const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: "#F9FAFB" } }} />
        <ThemeProvider theme={theme}>
          <ContactContextProvider>
            <Layout />
          </ContactContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
