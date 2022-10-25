import { useContext  } from "react";
import Templates from "../../components/Templates";
import { UserContext } from "../../contexts/UserContext";
import { Subtitle } from "../GetStarted/styles";
import { Container, TemplateContainer } from "./styles";

import TemplateModal from "../../components/TemplateModal";
import { TemplateContext } from "../../contexts/TemplateContext";

const templatesList = [
	{id: 1, name: "Orange", background: "#C26B5B"},
	{id: 2, name: "Purple", background: "#645DD7"},
	{id: 3, name: "Blue", background: "#40B7F2"},
	{id: 4, name: "Green", background: "#39D073"},
	{id: 5, name: "Pink", background: "#FF99C8"},
	{id: 6, name: "Black", background: "#000"},

];

export default function Template() {

	const { userName } = useContext(UserContext);
	const { setTemplateBackground, isModalOpen, setIsModalOpen } = useContext(TemplateContext);

	const handleSelectTemplate = (event: any) => {
		setTemplateBackground(event.background);
		setIsModalOpen(true);
	};

	return (
		<Container>
			<h1>Hey, <span>{userName}</span>!</h1>
			<Subtitle>Now, let's choose a template</Subtitle>

			<TemplateContainer>
				{templatesList.map(template => (
					<Templates
						key={template.id}
						background={template.background}
						onSelectTemplate={() => handleSelectTemplate(template)}
						isSkeleton={true}
					/>
				))}
			</TemplateContainer>
			{isModalOpen && <TemplateModal />}
		</Container>
	);
}
