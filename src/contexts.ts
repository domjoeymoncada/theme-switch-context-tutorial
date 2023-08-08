import { createContext } from "react";

export type CurrentUserContextType = {
  currentUser: string;
  setCurrentUser: (arg1: string) => void;
};

export const ThemeContext = createContext("light");
export const CurrentUserContext = createContext<CurrentUserContextType | {}>(
  {}
);
