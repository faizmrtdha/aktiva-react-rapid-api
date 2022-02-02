import { useEffect, useState } from "react";
import { coinsAPI } from "./hooks/API";
import { Card, Container } from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
  const showCoins = async () => {
    try {
      const response = await coinsAPI;
      setCoins(response.data.data.coins);
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
        <div className="rank">
          {coins.map((coin, index) => (
            <Card className="card-rank">
              <Card.Body>
                <Card.Title key={coin.rank}>{coin.name}</Card.Title>
                <Card.Text>Price : {coin.price}</Card.Text>
                <Card.Text>Market Cap : {coin.marketCap}</Card.Text>
                <Card.Text>Daily Change : {coin.change}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
