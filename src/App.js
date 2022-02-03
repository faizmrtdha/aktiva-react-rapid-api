import { useEffect, useState } from "react";
import { coinsAPI } from "./hooks/API";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
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

  useEffect(() => {
    showCoins();
  });
  return (
    <div className="app">
      <Container>
        <h1>Global Crypto Stats</h1>
        <Row>
          <Col>
            <span>Total Cryptocurrencies</span>
          </Col>
          <Col>Total Exchange</Col>
        </Row>
        <div className="rank">
          {coins.map((coin, index) => (
            <Card className="card-rank">
              <Card.Body>
                <Card.Title key={coin.rank} className="title-card">
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
