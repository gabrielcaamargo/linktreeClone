import { Container, TemplateLine } from "./styles";

interface TemplatesProps {
  background: string,
  onSelectTemplate?: (event: any) => void;
}

export default function Templates({background, onSelectTemplate}: TemplatesProps) {
	return (
		<Container
			style={{
				backgroundImage: `url(${background})`
			}}
			onClick={onSelectTemplate}
		>
			<TemplateLine />
			<TemplateLine />
			<TemplateLine />
			<TemplateLine />
		</Container>
	);
}
