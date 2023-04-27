import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const BoardGamePage = () => {
  
  return (
    <Container className="text-center pt-3">
      <h1 className="text-info">Boardgames</h1>
      <Outlet/>
    </Container>
  )
}

export default BoardGamePage;