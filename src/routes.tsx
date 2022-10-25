import { Routes, Route } from "react-router-dom";
import Customize from "./pages/Customize";
import GetStarted from "./pages/GetStarted";
import Template from "./pages/Template";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<GetStarted />} />
			<Route path="/template" element={<Template />} />
			<Route path="/customize" element={<Customize />} />
		</Routes>
	);
}
