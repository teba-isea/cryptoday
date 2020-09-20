import React from "react";
import styled from "@emotion/styled";
import Stat from "./Stat";
const StatsContainer = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:flex-start;
  background-color: #222225;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0.6rem;
  margin: 1rem;
  box-shadow:1px 3px 5px 5px 10px #1b1b1be8;
  
`;

const Title = styled.h2`
  font-family:sans-serif;
  color:#FFF;
  text-align:center;
  margin:0.3rem;
`;

const MarketStats = ({ cryptCoins }) => {
  return (
    <StatsContainer>
      <Title>Actual Market Status</Title>
      {cryptCoins.map((cryptCoin) => {
        var greenColor = true
        
        if(cryptCoin.RAW.USD.CHANGEPCT24HOUR < 0 ) greenColor = false

        return(<Stat cryptCoin={cryptCoin} greenColor = {greenColor} key={cryptCoin.CoinInfo.Name}/>)
}
)}
    </StatsContainer>
  );
};

export default MarketStats;
