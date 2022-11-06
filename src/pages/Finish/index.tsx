import Templates from "../../components/Templates";
import { useContext } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import { Container, StyledLink, TemplateWrapper, UserArea, UserLinksContainer, UserTemplateContainer } from "../Customize/styles";


export default function Finish() {

	const {
		templateBackground,
		isButtonModalOpen,
		setIsButtonModalOpen,
		linkList
	} = useContext(TemplateContext);

	return (
		<Container>
			<h1>Here's your template</h1>

			<TemplateWrapper>
				<Templates
					background={templateBackground}
					isSkeleton={false}
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
						</UserLinksContainer>
					</UserTemplateContainer>
				</Templates>
			</TemplateWrapper>
		</Container>
	);
}
