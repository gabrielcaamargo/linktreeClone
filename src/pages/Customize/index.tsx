import Templates from "../../components/Templates";
import { Container, StyledLink, StyleTemplate, TemplateWrapper, UserArea, UserLinksContainer, UserTemplateContainer } from "./styles";

import { useContext, useState } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import { Button } from "../../components/common/Button";
import CustomizeModal from "../../components/CustomizeModal";

export default function Customize() {
	const { templateBackground, isButtonModalOpen, setIsButtonModalOpen } = useContext(TemplateContext);

	const templateButtons = [
		{ name: "Instagram", link: "https://instagram.com/gabcamargo"},
		{ name: "LinkedIn", link: "https://linkedin.com/in/gabcamargo"},
	];

	const [linkInfo, setLinkInfo] = useState([]);

	function handleCreateLink() {
		setIsButtonModalOpen(true);
	}

	return (
		<Container>
			<h1>Now, let's <span>customize</span> your template</h1>

			<TemplateWrapper>
				<Templates
					isSkeleton={false}
					background={templateBackground}
				>
					<UserTemplateContainer>
						<UserArea>
							<img src="http://lorempixel.com.br/60/60/" />
						</UserArea>

						<UserLinksContainer>
							{templateButtons.map(link => (
								<StyledLink
									href={link.link}
									target="_blank"
									rel="noreferrer"
									key={Math.random()}
								>
									{link.name}
								</StyledLink>
							))}
							<button onClick={handleCreateLink}>Add a link</button>
						</UserLinksContainer>
					</UserTemplateContainer>
				</Templates>
				<StyleTemplate>
					<h2>Customizing area</h2>

					<Button type="button">Add Instagram</Button>
					<Button type="button">Add Facebook</Button>
					<Button type="button">Add LinkedIn</Button>
					<Button type="button">Add Link</Button>

				</StyleTemplate>
			</TemplateWrapper>
			{ isButtonModalOpen && <CustomizeModal />}
		</Container>
	);
}
