import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
  }

  interface PaletteOptions {
    light?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    light: true;
  }
}
declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    light: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565C0",
      dark: "#0D47A1",
      light: "#2196F3",
    },
    light: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#1DE9B6",
    },
  },
});

export default theme;
