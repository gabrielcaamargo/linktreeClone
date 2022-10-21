import Templates from "../Templates";
import { Modal, Overlay } from "./styles";

export default function TemplateModal() {
	return (
		<Overlay>
			<Modal>
				<h1>Do you wanna select this template?</h1>
				<div className="template-area">
					<Templates
						background="#CCC"
					/>
				</div>

				<div className="button-area">
					<button type="button">Cancel</button>
					<button type="button">Confirm</button>
				</div>
			</Modal>
		</Overlay>
	);
}
