import { Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Template from "./pages/Template";
import Customize from "./pages/Customize";
import Finish from "./pages/Finish";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<GetStarted />} />
			<Route path="/template" element={<Template />} />
			<Route path="/customize" element={<Customize />} />
			<Route path="/finish" element={<Finish />} />
		</Routes>
	);
}
