import CurrencyCard from "../components/currencyCard";
import { Header } from "../components/header";
import { Background } from "../styles";


export function Home() {
  return (
    <Background>
      <Header />
      <CurrencyCard/>
    </Background>
  );
}


