import { InputWrapper, InputBox } from "../styles";
import { useGlobalContext } from "../context";

function Form() {
  const { dolar, setDolar, taxa, setTaxa, handleChange, handleChangeTaxa } =
    useGlobalContext();

  return (
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
  );
}

export default Form;
