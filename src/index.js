import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/router";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
