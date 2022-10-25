import { useContext  } from "react";
import Templates from "../../components/Templates";
import { UserContext } from "../../contexts/UserContext";
import { Subtitle } from "../GetStarted/styles";
import { Container, TemplateContainer } from "./styles";

import {FlowersImg, PinkImg, StarsImg, TreesImg, SnowImg, EggsImg } from "../../assets/images/templates/index";
import TemplateModal from "../../components/TemplateModal";
import { TemplateContext } from "../../contexts/TemplateContext";

const templatesList = [
	{id: 1, name: "Flowers", background: FlowersImg},
	{id: 2, name: "Pink", background: PinkImg},
	{id: 3, name: "Stars", background: StarsImg},
	{id: 4, name: "Trees", background: TreesImg},
	{id: 5, name: "Snow", background: SnowImg},
	{id: 6, name: "Eggs", background: EggsImg},

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
