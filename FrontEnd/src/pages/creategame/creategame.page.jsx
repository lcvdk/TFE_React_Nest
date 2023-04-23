import { Card, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const CreateGamePage = () => {
  return (
    <>
      <Container className="mb-3 mt-5 text-center mx-auto">
        <Card className="card-light bg-secondary text-light m m-2 p-3">
          <h1>Create a game</h1>
         
            <Outlet />
            
        </Card>
      </Container>
    </>
  );
};
export default CreateGamePage;
