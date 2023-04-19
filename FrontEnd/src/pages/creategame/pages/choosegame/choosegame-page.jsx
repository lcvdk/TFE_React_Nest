import { Card, Container } from "react-bootstrap";
import Boardgames from "../../../../components/boardgames/boargames";


const ChooseGame = () => {





  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title>Choose a Game</Card.Title>
          <Card.Subtitle>this is the choose your game Page</Card.Subtitle>
          <Boardgames/>
        </Card>
      </Container>
    </>
  );
};

export default ChooseGame;
