import React from "react";
import styled from "@emotion/styled"

const Container = styled.div`
  font-family:Arial,Arial, Helvetica, sans-serif;
  color:#FFF;
  text-align:center;
`;

const Price = styled.p`
  font-size:25px;
`;

const Info = styled.p`
  font-size:18px;
`;

const Convertion = ({ currentChangeData }) => {
  if (Object.keys(currentChangeData).length === 0) return null;
  return (
    <Container>

      <Price>
        Actual Price: <span>{currentChangeData.PRICE}</span>
      </Price>

      <Info>
        High Day price: <span>{currentChangeData.HIGHDAY}</span>
      </Info>

      <Info>
        Low Day price: <span>{currentChangeData.LOWDAY}</span>
      </Info>

      <Info>
        Variation in The Last 24 Hours:{" "}
        <span>{currentChangeData.CHANGEPCT24HOUR}%</span>
      </Info>

      <Info>
        Last Update: <span>{currentChangeData.LASTUPDATE}</span>
      </Info>
      
    </Container>
  );
};

export default Convertion;
