import { Button, Card, Container } from "react-bootstrap";
import ChoosePlayerIndexPage from "./crea-ChoosePlayerIndex.page";
import { useState } from "react";
import CreaNewPlayerForm from "./crea-newplayerform";


const ChoosePlayerPage = (props) => {

  const [createPlayerForm, setCreatePlayerForm] = useState(false)

  
  // numberPlayers={props.numberPlayers}

  const handlecreatePlayerForm = () => {
    setCreatePlayerForm(!createPlayerForm)
    
  }

  // function NewArray(props.numberPlayers){

  // }

  return (
    <Container fluid="true">
      <Card className="m-1 p-3 d-flex" style={{ justifyContent: "center" }}>
        <Card.Title>Choose Player Page</Card.Title>
        
        <Container>
          {
            props.numberPlayers &&  "yo"
          }
        </Container>
        <Container>
          {props.showAllPlayers && <ChoosePlayerIndexPage 
                    handleSelectPlayers={props.handleSelectPlayers} 
                    errorTable={props.errorTable} 
                    handleDeSelectPlayers={props.handleDeSelectPlayers}
                    numberPlayers={props.numberPlayers}
                    arrayLength={props.arrayLength}  
                    />}
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
