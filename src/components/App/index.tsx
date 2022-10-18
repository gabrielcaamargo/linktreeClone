import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Router from "../../routes";

import { ThemeProvider } from "styled-components";

import dark from "../../assets/styles/themes/dark";

interface ThemeInterface {
  background: string,
  textColor:string
}

export default function App() {
	return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
          <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
