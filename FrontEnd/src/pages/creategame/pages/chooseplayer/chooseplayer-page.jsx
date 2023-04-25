import { Button, Card, Container } from "react-bootstrap";
import ChoosePlayerIndexPage from "./crea-ChoosePlayerIndex.page";
import { useState } from "react";
import CreaNewPlayerForm from "./crea-newplayerform";


const ChoosePlayerPage = (props) => {

  const [createPlayerForm, setCreatePlayerForm] = useState(false)

  const handlecreatePlayerForm = () => {
    setCreatePlayerForm(!createPlayerForm)
    console.log(createPlayerForm)
  }


  return (
    <Container fluid="true">
      <Card className="m-1 p-3 d-flex" style={{ justifyContent: "center" }}>
        <Card.Title>Choose Player Page</Card.Title>
        <Card.Subtitle>this is the choose your PLAYER Page</Card.Subtitle>
        <Container>
          {props.showAllPlayers && <ChoosePlayerIndexPage />}
          {createPlayerForm && <CreaNewPlayerForm/>}
          <Button
            type="submit"
            className="btn-success btn-sm mt-3"
            onClick={props.handleClickShowAllPlayers}
          >
            {!props.showAllPlayers? "Show all Players" : "Hide all Players"}
          </Button>
          {props.showAllPlayers && 
            <Button className="btn-warning btn-sm mt-3" 
              onClick={handlecreatePlayerForm}
              > {!createPlayerForm? "create player" : "Hide create player"}
            </Button>}
        </Container>
      </Card>
    </Container>
  );
};
export default ChoosePlayerPage;
