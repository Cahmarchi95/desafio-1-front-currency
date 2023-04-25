import { useState, useContext, useEffect } from "react";
import moment from "moment/moment";
import "moment/locale/pt-br";
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

  const [dataAtual, setDataAtual] = useState(
    moment().locale("pt-br").format("LLL")
  );
  const tempo = useEffect(() => {
    const timer = setInterval(() => {
      setDataAtual(moment().format("LLL"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        dataAtual,
        setDataAtual,tempo
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
