import { createContext, useEffect, useState } from "react";

export interface UserInfoData {
  userName: string,
  setUserName: any
}

export const UserInfoDefaultValues = {}

export const UserContext = createContext<UserInfoData>(UserInfoDefaultValues);

export interface UserInfoProps {
  children: React.ReactNode
}

export function UserInfoProvider({children}: UserInfoProps) {
  const [userName, setUserName] = useState('')
  useEffect(() => console.log(userName), [userName])
  return (
    <UserContext.Provider value={{userName, setUserName}}>
      {children}
    </UserContext.Provider>
  )
}
