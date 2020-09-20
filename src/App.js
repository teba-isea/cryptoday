import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import MarketStats from "./components/MarketStats";
import Form from "./components/Form";
import Convertion from "./components/Convertion";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  @media (max-width: 992px) {
    .first {
      grid-row: 1;
    }
    .secondary {
      grid-row: 2;
    }
  }
`;

const Heading = styled.div`
  font-family: "Bebas neue", cursive;
  color: #fff;
  text-align: left;
  font-size: 50px;
  margin-top: 1.3rem;
  font-weight: 700;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [convertionValues, setConvertionValues] = useState([]);
  const [currentChangeData, setCurrentChangeData] = useState({});
  const [cryptCoins, setCryptCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultApi = async () => {
      let chances = 0;
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      try {
        const result = await axios.get(url);

        setCryptCoins(result.data.Data);

        setTimeout(() => {
          consultApi();
        }, 30000);

      } catch (e) {
        chances++;

        if (chances > 5) return;

        setTimeout(() => {
          consultApi();
        }, 5000);
        
      }
    };
    consultApi();
  }, []);

  useEffect(() => {
    if (convertionValues.length === 2) {
      const consultActualChange = async () => {
        setLoading(true);

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${convertionValues[1]}&tsyms=${convertionValues[0]}`;

        const res = await axios.get(url);

        setCurrentChangeData(
          res.data.DISPLAY[convertionValues[1]][convertionValues[0]]
        );
      };
      consultActualChange();

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [convertionValues]);

  return (
    <Container>
      <div className="secondary">
        <MarketStats cryptCoins={cryptCoins} />
      </div>

      <div className="first">
        <Heading>CrypToday</Heading>
        <Form
          setConvertionValues={setConvertionValues}
          cryptCoins={cryptCoins}
        />
        {loading ? (
          <Spinner />
        ) : (
          <Convertion currentChangeData={currentChangeData} />
        )}
      </div>
    </Container>
  );
}

export default App;
