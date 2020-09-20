import React from "react";
import styled from "@emotion/styled";

const StatContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #37373f;
  color: white;
  font-size: 13px;
  div {
    margin: 0.2rem;
  }
  h3{
    margin: 0.2rem;
  }
`;

const GreenPercentage = styled.p`
  color: #0e6402;
`;

const RedPercentage = styled.p`
  color: #7a0606;
`;

const BlueText = styled.p`
  color: #66a2fe;
`;

const Stat = ({ cryptCoin, greenColor }) => {
  return (
    <StatContainer>
      <div>
        <h3>{cryptCoin.CoinInfo.Name}</h3>
      </div>
      <div>
        <BlueText>
          {parseFloat(`${cryptCoin.RAW.USD.PRICE}`).toFixed(4)}$
        </BlueText>
      </div>
      <div>
        {greenColor ? (
          <GreenPercentage>
            ▲{parseFloat(`${cryptCoin.RAW.USD.CHANGEPCT24HOUR}`).toFixed(4)}%
          </GreenPercentage>
        ) : (
          <RedPercentage>
            ▼{parseFloat(`${cryptCoin.RAW.USD.CHANGEPCT24HOUR}`).toFixed(4)}%
          </RedPercentage>
        )}
      </div>
    </StatContainer>
  );
};

export default Stat;
