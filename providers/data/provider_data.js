import React, { useState, createContext, useContext } from "react";

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <DataContext.Provider value={{ data: data, setData: setData }}>
      {children}
    </DataContext.Provider>
  );
};
