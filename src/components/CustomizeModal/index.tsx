import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Modal, Overlay } from "./styles";

export default function CustomizeModal() {
	return (
		<Overlay>
			<Modal>
				<h1>Create your link</h1>

				<Input placeholder="Link name"></Input>
				<Input placeholder="Link address"></Input>


				<div>
					<Button>Cancel</Button>
					<Button>Create link</Button>
				</div>
			</Modal>
		</Overlay>
	);
}
