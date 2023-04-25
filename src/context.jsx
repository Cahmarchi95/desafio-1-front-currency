import { useState, useContext } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleConvertClick = () => {
    alert(`A opção selecionada foi: ${selectedValue} o valor a ser covertido foi de:${dolar} e a taxa é de: ${taxa}
  `);
  };
  const [dolar, setDolar] = useState("");
  const [taxa, setTaxa] = useState("");

  const handleChange = (event) => {
    setDolar(event.target.value);
  };

  const handleChangeTaxa = (event) => {
    setTaxa(event.target.value);
  };
  return (
    <AppContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        handleOptionChange,
        handleConvertClick,
        dolar,
        setDolar,
        taxa,
        setTaxa,
        handleChange,
        handleChangeTaxa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
