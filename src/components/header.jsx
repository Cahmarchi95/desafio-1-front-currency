import { Wrapper, CurrencyBox, Bar, HourWrapper } from "../styles";
import { Logo } from "../assets/logo";

export function Header() {
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
        <h2>20 de março 2023 | 22:00 UTC</h2>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </HourWrapper>
    </Wrapper>
  );
}
