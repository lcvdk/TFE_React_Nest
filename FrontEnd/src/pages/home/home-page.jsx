import { Button, Container, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateGamePage = () => {
    navigate("/creategame");
  };

  return (
    <>
      <Container>
        <Card className="p-3 m-2">
          <Card.Title>Bienvenue sur Board Game Tournament!</Card.Title>
          <Card.Text>This is the Home Page</Card.Text>
                    
          <Button
            type="button"
            className="btn btn-light"
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
