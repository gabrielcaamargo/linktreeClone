import Templates from "../../components/Templates";
import { Container, StyleTemplate, TemplateWrapper, UserArea, UserLinksContainer, UserTemplateContainer } from "./styles";

import { useContext } from "react";
import { TemplateContext } from "../../contexts/TemplateContext";
import { Button } from "../../components/common/Button";

export default function Customize() {
	const { templateBackground } = useContext(TemplateContext);

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
							<button>Instagram</button>
							<button>Facebook</button>
							<button>Linkedin</button>
							<button>Add a link</button>
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
		</Container>
	);
}
