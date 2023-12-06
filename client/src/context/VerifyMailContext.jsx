import { createContext, useState } from "react";

export const EmailContext = createContext({});

export const EmailContextProvider = ({ children }) => {
  const [email, setEmail] = useState();

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
