import { createContext, useState } from "react";

const TemplateDefaultValues = {
	templateBackground: "",
	setTemplateBackground: () => {},

	isModalOpen: false,
	setIsModalOpen: () => {},

	isButtonModalOpen: false,
	setIsButtonModalOpen: () => {},

	linkName: "",
	setLinkName: () => {},

	linkAddress: "",
	setLinkAddress: () => {},

	linkList: [],
	setLinkList: () => {}
};

interface LinkInterface {
  name: string;
  link: string;
}

interface TemplateInterface {
  templateBackground: string;
  setTemplateBackground: (setState: string) => void;

  isModalOpen: boolean;
	setIsModalOpen: (setState: boolean) => void;

  isButtonModalOpen: boolean,
	setIsButtonModalOpen: (setState: boolean) => void;

  linkName: string;
  setLinkName: (setState: string) => void;

  linkAddress: string;
  setLinkAddress: (setState: string) => void;

  linkList: LinkInterface[],
  setLinkList: (setState: any) => void;
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
	const [linkList, setLinkList] = useState([]);

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
				setLinkAddress,
				linkAddress,
				linkList,
				setLinkList,
			}}>
			{children}
		</TemplateContext.Provider>
	);
}
