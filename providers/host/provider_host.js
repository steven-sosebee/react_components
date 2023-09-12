import React, { useState, createContext, useContext } from "react";

export const HostContext = createContext();

export const useHostContext = () => useContext(HostContext);

export const HostProvider = ({ children }) => {
  const [host, setHost] = useState();

  return (
    <HostContext.Provider value={{ host: host, setHost: setHost }}>
      {children}
    </HostContext.Provider>
  );
};
