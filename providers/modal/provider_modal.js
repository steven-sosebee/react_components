import React, { useState, createContext, useContext, useEffect } from "react";
import { useUserContext } from "../user/provider_user";

export const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState("closed");
  const {loading}=useUserContext();
  
  useEffect(()=>{
    loading? setModal("waiting"):setModal("closed");
  },[loading])
  return (
    <ModalContext.Provider value={{ modal: modal, setModal: setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
