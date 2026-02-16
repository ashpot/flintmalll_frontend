import { createContext } from "react";

export const OpenModalContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const OpenReportModalContext = createContext({
  openReport: false,
  setOpenReport: () => {},
});