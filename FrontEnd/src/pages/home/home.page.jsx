import { Button, Container, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateGamePage = () => {
    navigate("/creategame");
  };

  return (
    <>
      <Container className="pt-5">
        <Card className="p-3  m-2 text-center text-white">
          <Card.Title>Bienvenue sur Board Game Tournament!</Card.Title>
          <Card.Text></Card.Text>
                    
          <Button
            type="button"
            className="btn btn-success"
            onClick={handleCreateGamePage}
          >
            Create Game
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
