import { useContext, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Router from "../../routes";

import { ThemeProvider } from "styled-components";
import { ThemeSwitcher } from "./styles";

import darkTheme from "../../assets/styles/themes/dark";
import lightTheme from "../../assets/styles/themes/light";
import { UserInfoProvider } from "../../contexts/UserContext";
import TemplateContextProvider from "../../contexts/TemplateContext";

export default function App() {
	const [theme, setTheme] = useState("dark");
	const handleSwitchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	return (
		<BrowserRouter>
			<ThemeProvider
				theme={
					theme === "dark"
						? darkTheme : lightTheme
				}
			>
				<GlobalStyles />
				<ThemeSwitcher>
					<button onClick={handleSwitchTheme}>
						{theme === "dark" ? "🌞" : "🌚"}
					</button>
				</ThemeSwitcher>
				<UserInfoProvider>
					<TemplateContextProvider>
						<Router />
					</TemplateContextProvider>
				</UserInfoProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}
