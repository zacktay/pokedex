import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./common/assets/theme";
import Pokedex from "./components/Pokedex";
import reportWebVitals from "./reportWebVitals";
import store from "./reducer/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Pokedex />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
