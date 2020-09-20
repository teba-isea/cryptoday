import React, { useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useCurrency from "../hooks/useCurrency";
import useCryptCoin from "../hooks/useCryptCoin";


const Button = styled.input`
  margin: 1rem 0.5rem;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  background: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 5px;
  color: #fff;
  transition: background 0.3s ease;
  &:hover {
    background: #8ebbff;
    cursor: pointer;
  }
`;

const Form = ({ setConvertionValues, cryptCoins }) => {
  const [error, setError] = useState(false);

  const currencies = [
    { code: "BSS", name: "Bolivares Soberanos" },
    { code: "USD", name: "United States Dollar" },
  ];

  const [currency, SelectCurrency] = useCurrency(
    "Select your Currency",
    currencies
  );

  const [cryptCoin, SelectCryptCoin] = useCryptCoin(
    "Select a Crypt Coin",
    cryptCoins
  );

  const passToMain = (e) => {
    e.preventDefault();

    if (currency === "" || cryptCoin === "") {
      return setError(true);
    }

    setError(false);

    setConvertionValues([currency, cryptCoin]);
  };

  return (
    <form onSubmit={(e) => passToMain(e)}>
      {error ? <Error message={"Please check the fields"} /> : null}

      <SelectCurrency />

      <SelectCryptCoin />

      <Button type="submit" value="Convert" />
    </form>
  );
};

export default Form;
