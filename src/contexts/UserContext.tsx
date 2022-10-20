import { createContext, useState } from "react";

export interface UserInfoData {
  userName: string,
  setUserName: (setState: string) => void
}

export const UserInfoDefaultValues = {
	userName: "",
	setUserName: () => {}
};

export const UserContext = createContext<UserInfoData>(UserInfoDefaultValues);

export interface UserInfoProps {
  children: React.ReactNode
}

export function UserInfoProvider({children}: UserInfoProps) {
	const [userName, setUserName] = useState("");

	return (
		<UserContext.Provider value={{userName, setUserName}}>
			{children}
		</UserContext.Provider>
	);
}
