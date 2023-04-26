import { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";

const ChooseGameMode = (props) => {

  const [choice,setChoice] = useState("")

  const handleChoice = (e) => {
    setChoice(e.target.value)
    props.handleSelectNumberPlayer(e.target.value)

  }

  return (
    <>
      <Container fluid="true">
        <Card className="m-1 p-3 d-flex" style={{ justifyContent: "center" }}>
          <Card.Title>Choose a Game Mode</Card.Title>
          <Card.Subtitle>Select a game first</Card.Subtitle>
          {props.gameSelected && (
            <p className="text-success"> game #{props.gameSelected}</p>
          )}
          <Form>
            <Form.Group>
              <Form.Label htmlFor="selectNumberPlayer" className="form-label mt-4">
                Number of players {choice && `${choice}`}
              </Form.Label>
              <Form.Select
                className="form-select form-select-sm w-50 mx-auto"
                id="selectNumberPlayer"
                onChange={(e) =>  handleChoice(e)}
              >
                <option defaultValue>choose a number of player</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
};
export default ChooseGameMode;
