import { Wrapper, CurrencyBox, Bar, HourWrapper } from "../styles";
import { Logo } from "../assets/logo";
import moment from "moment/moment";
import "moment/locale/pt-br";
import { useState, useEffect } from "react";

export function Header() {
  const [dataAtual, setDataAtual] = useState(
    moment().locale("pt-br").format("LLL")
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setDataAtual(moment().format("LLL"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <div>
        <Logo />
        <CurrencyBox>
          <Bar></Bar>
          <div>Currency</div>
        </CurrencyBox>
      </div>
      <HourWrapper>
        <h2>{dataAtual}</h2>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </HourWrapper>
    </Wrapper>
  );
}
