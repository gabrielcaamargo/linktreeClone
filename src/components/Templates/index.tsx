import { Container, TemplateLine } from "./styles";

interface TemplatesProps {
  children?: React.ReactNode,
  background: string,
  onSelectTemplate?: (event: any) => void;
  isSkeleton: boolean
}

export default function Templates({children, background, onSelectTemplate, isSkeleton}: TemplatesProps) {
	return (
		<Container
			style={{
				backgroundImage: `url(${background})`
			}}
			onClick={onSelectTemplate}
		>
			{isSkeleton &&
				<>
					<TemplateLine />
					<TemplateLine />
					<TemplateLine />
					<TemplateLine />
				</>
			}

			{!isSkeleton && children}
		</Container>
	);
}
