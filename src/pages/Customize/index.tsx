import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import { Link } from "react-router-dom";

import Templates from "../../components/Templates";
import { Container, StyledLink, TemplateWrapper, UserArea, UserLinksContainer, UserTemplateContainer } from "./styles";

import CustomizeModal from "../../components/CustomizeModal";
import { Button } from "../../components/common/Button";

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

	const [isEmpty, setIsEmpty] = useState(true);

	useEffect(() => {
		if(linkList.length < 1) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
		}
	}, [linkList]);

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
			<Button className="finish" disabled={isEmpty}>
				<Link to="/finish">
          Finish my template
				</Link>
			</Button>
			{ isButtonModalOpen && <CustomizeModal />}
		</Container>
	);
}
