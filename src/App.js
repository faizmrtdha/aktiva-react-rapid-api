import { useEffect, useState } from "react";
import { coinsAPI, cryptosAPI } from "./hooks/API";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
  const [globals, setGlobals] = useState([]);

  const showCoins = async () => {
    try {
      const response = await coinsAPI;
      const data = await response.data.data.coins;
      data.forEach((element) => {
        element.price = parseFloat(element.price).toFixed(2);
      });
      setCoins(data);
    } catch (e) {
      console.log(e);
    }
  };

  const cryptos = async () => {
    try {
      const response = await cryptosAPI;
      setGlobals(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    showCoins();
    cryptos();
  });
  return (
    <div className="app">
      <Container>
        <h1 className="title-global">Global Crypto Stats</h1>
        <Row className="row-stats">
          <Col>
            <h6 className="title-stats">Total Cryptocurrencies</h6>
            <p className="p-stats">{globals.totalCoins}</p>
            <h6 className="title-stats">Total Market Cap</h6>
            <p className="p-stats">{globals.totalMarketCap}</p>
            <h6 className="title-stats">Total Cryptocurrencies</h6>
            <p className="p-stats">{globals.totalCoins}</p>
          </Col>
          <Col>
            <h6 className="title-stats">Total Exchange</h6>
            <p className="p-stats">{globals.totalExchanges}</p>
            <h6 className="title-stats">Total 24h Volume</h6>
            <p className="p-stats">{globals.total24hVolume}</p>
            <h6 className="title-stats">Total Markets</h6>
            <p className="p-stats">{globals.totalMarkets}</p>
          </Col>
        </Row>
        <h2>Top 10 Cryptos In The World</h2>
        <div className="rank">
          {coins.map((coin, index) => (
            <Card className="card-rank" key={coin.rank}>
              <Card.Body>
                <Card.Title className="title-card">
                  <span>{coin.name}</span>
                  <Image src={coin.iconUrl} fluid width={24} height={24} />
                </Card.Title>
                <Card.Text>Price : ${coin.price}</Card.Text>
                <Card.Text>Market Cap : {coin.marketCap}</Card.Text>
                <Card.Text>Daily Change : {coin.change}%</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
