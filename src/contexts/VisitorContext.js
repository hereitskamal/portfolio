import { createContext, useContext } from "react";

export const VisitorContext = createContext({
  visitorType: "visitor",
  visitorName: "",
  greeting: "",
});

export const useVisitor = () => useContext(VisitorContext);
