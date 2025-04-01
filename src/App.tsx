import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./views/Home/Home";
import { ContactContextProvider } from "./contexts/contact";

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

export const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <ContactContextProvider>
            <Home />
          </ContactContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
