import { Container, TemplateLine } from "./styles";

interface TemplatesProps {
  background: string
}


export default function Templates({background}: TemplatesProps) {
	return (
		<Container
			style={{
				backgroundImage: `url(${background})`
			}}>
			<TemplateLine />
			<TemplateLine />
			<TemplateLine />
			<TemplateLine />
		</Container>
	);
}
