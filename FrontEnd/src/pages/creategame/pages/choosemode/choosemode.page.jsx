import { Card, Container } from "react-bootstrap";

const ChooseGameMode = (props) => {

return (
  <>
    <Container fluid="true" >
      <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
        <Card.Title>Choose a Game Mode</Card.Title>
        <Card.Subtitle>Select a game first</Card.Subtitle>
        { props.gameSelected && <p className="text-success"> game #{props.gameSelected}</p>}

      </Card>
    </Container>
  </>
);

}
export default ChooseGameMode;