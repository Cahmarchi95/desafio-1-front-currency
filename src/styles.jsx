import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  margin-left: 3rem;
`;

export const CurrencyBox = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  gap: 0.25rem;
`;

export const Bar = styled.div`
  margin-top: 4px;
  width: 87px;
  height: 4px;
  background-color: black;
  opacity: 0.32;
  margin-left: 23px;
`;

export const HourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #45505e;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: #8c9cad;
  }
`;

export const InputWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  margin-left: 4rem;
  font-weight: 500;
  font-size: 14px;
  color: #2e3742;
`;

export const InputBox = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
  padding: 1rem;
  gap: 0.6rem;
  width: 8rem;
  height: 2rem;
  background: #ffffff;
  border: 1px solid #d7e0eb;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
