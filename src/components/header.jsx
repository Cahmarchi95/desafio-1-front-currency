import { Wrapper, CurrencyBox, Bar, HourWrapper } from "../styles";
import { Logo } from "../assets/logo";
import { useGlobalContext } from "../context";

export function Header() {
  const { dataAtual } = useGlobalContext();

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
