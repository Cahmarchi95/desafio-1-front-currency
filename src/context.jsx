import { useState, useContext, useEffect } from "react";
import moment from "moment/moment";
import "moment/locale/pt-br";
import React from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cotacao, setCotacao] = useState(null);

  useEffect(() => {
    async function fetchDollarRate() {
      const response = await axios.get(
        "https://economia.awesomeapi.com.br/last/USD-BRL"
      );
      const {
        data: {
          USDBRL: { ask },
        },
      } = response;
      setCotacao(ask);
    }
    fetchDollarRate();
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleConvertClick = () => {
    alert(`A opção selecionada foi: ${selectedValue} o valor a ser covertido foi de:${dolar} e a taxa é de: ${taxa} e a cotação do dólar está ${cotacao}
  `);

    setDolar("");
    setTaxa("");
    setSelectedValue("");
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
        setDataAtual,
        tempo,
        cotacao,
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
