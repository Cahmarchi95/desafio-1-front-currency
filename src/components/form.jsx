import React, { useState } from "react";
import { InputWrapper, InputBox } from "../styles";
function Form() {
  const [dolar, setDolar] = useState("");
  const [taxa, setTaxa] = useState("");

  const handleChange = (event) => {
    setDolar(event.target.value);
  };

  const handleChangeTaxa = (event) => {
    setTaxa(event.target.value);
  };

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
