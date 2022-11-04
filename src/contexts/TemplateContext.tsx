import { createContext, useState } from "react";

const TemplateDefaultValues = {
	templateBackground: "",
	setTemplateBackground: () => {},

	isModalOpen: false,
	setIsModalOpen: () => {},

	isButtonModalOpen: false,
	setIsButtonModalOpen: () => {},

	linkAddress: "",
	setLinkAddress: () => {}
};

interface TemplateInterface {
  templateBackground: string;
  setTemplateBackground: (setState: string) => void;

  isModalOpen: boolean;
	setIsModalOpen: (setState: boolean) => void;

  isButtonModalOpen: boolean,
	setIsButtonModalOpen: (setState: boolean) => void;

  linkName: string;
  setLinkName: (setState: any) => void;

  linkAddress: string;
  setLinkAddress: (setState: any) => void;
}

interface TemplateContextProps {
  children: React.ReactNode
}

export const TemplateContext = createContext<TemplateInterface>(TemplateDefaultValues);

export default function TemplateContextProvider ({children}: TemplateContextProps) {
	const [templateBackground, setTemplateBackground] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isButtonModalOpen, setIsButtonModalOpen] = useState(false);
	const [linkName, setLinkName] = useState("");
	const [linkAddress, setLinkAddress] = useState("");

	return (
		<TemplateContext.Provider
			value={{
				templateBackground,
				setTemplateBackground,
				isModalOpen,
				setIsModalOpen,
				setIsButtonModalOpen,
				isButtonModalOpen,
				linkName,
				setLinkName,
				linkAddress,
				setLinkAddress
			}}>
			{children}
		</TemplateContext.Provider>
	);
}
