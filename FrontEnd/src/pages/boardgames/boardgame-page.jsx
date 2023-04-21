import { Container } from "react-bootstrap";
import Boardgames from "../../components/boardgames/boargames";

const BoardGamePage = () => {
  
  return (
    <Container className="text-center pt-3">
    
      <h1>Boardgame</h1>
      <p>This is the BoardGame Page</p>
      <Boardgames/>
    </Container>
  )
}

export default BoardGamePage;