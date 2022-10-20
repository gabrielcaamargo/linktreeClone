import { useContext } from "react";

import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.min.css";

import { ToastContainer, toast } from "react-toastify";

export default function GetStarted() {
	const {userName, setUserName} = useContext(UserContext);

	const navigate = useNavigate();

	const handleToggleToast =  () => {
		setTimeout(async () => {
			navigate("/template");
		}, 6000);

		toast.success(`Welcome ${userName}. We are redirecting you`);
	};

	const handleOnEnterUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		event.code === "Enter" && handleToggleToast();
	};

	return (
		<Container>
			<h1>let's get <span>started</span>.</h1>
			<Input
				type="text"
				placeholder="your name here"
				onChange={event => setUserName(event.target.value)}
				onKeyUp={handleOnEnterUp}
			/>
			<ToastContainer />
			<Button
				disabled={userName.length < 2}
				onClick={handleToggleToast}
			>
				get started
			</Button>
		</Container>
	);
}
