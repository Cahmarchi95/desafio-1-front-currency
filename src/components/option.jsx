import {
  OptionWrapper,
  InputOption,
  InputOption1,
  Label,
  Converter,
} from "../styles";
import { useGlobalContext } from "../context";

function Option() {
  const {
    selectedValue,
    setSelectedValue,
    handleOptionChange,
    handleConvertClick,taxa,dolar
  } = useGlobalContext();
  
  return (
    <OptionWrapper>
      <p>Tipo de compra</p>
      <InputOption
        type="radio"
        name="options"
        value="dinheiro"
        checked={selectedValue === "dinheiro"}
        onChange={handleOptionChange}
      ></InputOption>
      <Label className="label">Dinheiro</Label>
      <InputOption1
        type="radio"
        name="options"
        value="cartao"
        checked={selectedValue === "cartao"}
        onChange={handleOptionChange}
      ></InputOption1>
      <Label>Cartão</Label>
      <Converter onClick={handleConvertClick}>⇄ Converter</Converter>
    </OptionWrapper>
  );
}

export default Option;
