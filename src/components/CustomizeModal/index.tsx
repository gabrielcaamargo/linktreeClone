import { useContext, useState, useEffect } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";

import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Modal, Overlay } from "./styles";

import { isURLValid } from "../../utils/isURLValid";

export default function CustomizeModal() {
	const {
		setIsButtonModalOpen,
		linkName,
		setLinkName,
		linkAddress,
		setLinkAddress
	} = useContext(TemplateContext);

	const [isModalValid, setIsModalValid] = useState(false);


	useEffect(() => {
		isURLValid(linkAddress) ? setIsModalValid(true) : setIsModalValid(false);
	}, [linkAddress]);

	function handleCancelCreateLink() {
		setIsButtonModalOpen(false);
	}

	function handleCreateLink() {


		console.log(linkName);
	}

	return (
		<Overlay>
			<Modal>
				<h1>Create your link</h1>

				<Input
					placeholder="Link name *"
					onChange={(event) => setLinkName(event.target.value)}
				/>
				<Input
					placeholder="Link address *"
					onChange={(event) => setLinkAddress(event.target.value)}
				/>

				<div>
					<Button onClick={handleCancelCreateLink}>Cancel</Button>
					<Button onClick={handleCreateLink} disabled={!isModalValid}>Create link</Button>
				</div>
			</Modal>
		</Overlay>
	);
}
