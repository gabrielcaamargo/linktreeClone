import { createContext, useState } from "react";

const TemplateDefaultValues = {
	templateBackground: "",
	setTemplateBackground: () => {},

	isModalOpen: false,
	setIsModalOpen: () => {}
};

interface TemplateInterface {
  templateBackground: string;
  setTemplateBackground: (setState: string) => void;

  isModalOpen: boolean;
	setIsModalOpen: (setState: boolean) => void
}

interface TemplateContextProps {
  children: React.ReactNode
}

export const TemplateContext = createContext<TemplateInterface>(TemplateDefaultValues);

export default function TemplateContextProvider ({children}: TemplateContextProps) {
	const [templateBackground, setTemplateBackground] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<TemplateContext.Provider value={{ templateBackground, setTemplateBackground, isModalOpen, setIsModalOpen }}>
			{children}
		</TemplateContext.Provider>
	);
}
