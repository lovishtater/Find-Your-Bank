import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#5367FF",
      contrastText: "#fff",
      light: "#5367FF",
    },
    secondary: {
      main: "#00D09C",
      contrastText: "#fff",
      light: "#E5FAF5",
    },
    error: {
      main: "#FF5252",
      contrastText: "#fff",
      light: "#FF5252",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#fff",
      hint: "#fff",
      icon: "#fff",
      divider: "#fff",
    },
  },
});

export default theme;