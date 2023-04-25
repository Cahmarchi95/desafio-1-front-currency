import styled from "styled-components";
import Form from "../components/form";
import { Header } from "../components/header";
import Option from "../components/option";
import { Background } from "../styles";
export function Home() {
  return (
    <Background>
      <Header />
      <Form />
      <Option />
    </Background>
  );
}


