import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Router from "../../routes";

export default function App() {
	return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
}
