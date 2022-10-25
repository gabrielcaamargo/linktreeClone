import Templates from "../Templates";
import { Modal, Overlay } from "./styles";

import { useContext } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import { Link } from "react-router-dom";

export default function TemplateModal() {
	const { templateBackground, isModalOpen, setIsModalOpen } = useContext(TemplateContext);

	return (
		<Overlay>
			<Modal>
				<h1>Do you wanna select this template?</h1>
				<div className="template-area">
					<Templates
						background={templateBackground}
						isSkeleton={true}
					/>
				</div>

				<div className="button-area">
					<button
						type="button"
						onClick={
							() => isModalOpen
								? setIsModalOpen(false)
								: setIsModalOpen(true)
						}
						title="Confirm"
					>
              Cancel
					</button>
					<button type="button" title="Confirm">
						<Link to="/customize">Confirm</Link>
					</button>
				</div>
			</Modal>
		</Overlay>
	);
}
