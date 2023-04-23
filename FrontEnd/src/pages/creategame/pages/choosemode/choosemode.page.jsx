import { Card, Container } from "react-bootstrap";

const ChooseGameMode = () => {

return (
  <>
    <Container fluid="true" >
      <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
        <Card.Title>Choose a Game Mode</Card.Title>
        <Card.Subtitle>this is the choose your Game mode Page</Card.Subtitle>
        

        {/* <Boardgames/> */}
      
      </Card>
    </Container>
  </>
);

}
export default ChooseGameMode;