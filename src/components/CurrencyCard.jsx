import {
  InputWrapper,
  InputBox,
  OptionWrapper,
  InputOption,
  InputOption1,
  Label,
  Converter,
} from "../styles";
import { useGlobalContext } from "../context";

function CurrencyCard() {
  const {
    dolar,
    setDolar,
    taxa,
    setTaxa,
    handleChange,
    handleChangeTaxa,
    selectedValue,
    setSelectedValue,
    handleOptionChange,
    handleConvertClick,
    arr,
  } = useGlobalContext();

  return (
    <div>
      <InputWrapper>
        <div>
          <label>Dólar</label>
          <InputBox
            type="text"
            placeholder="$1,00"
            value={dolar}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Taxa do Estado</label>
          <InputBox
            type="text"
            placeholder="0 %"
            value={taxa}
            onChange={handleChangeTaxa}
          />
        </div>
      </InputWrapper>
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
    </div>
  );
}

export default CurrencyCard;
