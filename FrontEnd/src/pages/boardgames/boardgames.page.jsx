import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const BoardGamePage = () => {
  
  return (
    <Container className="text-center pt-3">
      <h1>Boardgame</h1>
      <p>This is the BoardGame Page</p>
      <Outlet/>
    </Container>
  )
}

export default BoardGamePage;