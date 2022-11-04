import Templates from "../../components/Templates";
import { Container, StyledLink, TemplateWrapper, UserArea, UserLinksContainer, UserTemplateContainer } from "./styles";

import { useContext } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import CustomizeModal from "../../components/CustomizeModal";

export default function Customize() {
	const {
		templateBackground,
		isButtonModalOpen,
		setIsButtonModalOpen,
		linkList
	} = useContext(TemplateContext);

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
							{linkList.map(link => (
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
			</TemplateWrapper>
			{ isButtonModalOpen && <CustomizeModal />}
		</Container>
	);
}
