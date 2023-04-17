import Boardgames from "./components/boardgames/boargames";
import ChooseBoardgame from "./components/boardgames/chooseboardgame";
import Exobienvenu from "./components/exoformation/exobienvenue";
import ExoCompteur from "./components/exoformation/exocompteur";
import RenduCondi from "./components/exoformation/renduconditionnel";
//BOOTSTRAP
import {Button , Alert, Breadcrumb, Card, Form } from 'react-bootstrap' // import B's Components
import 'bootstrap/dist/css/bootstrap.min.css' // Import B's CSS
import LoginUser from "./components/user/registred/loginuser";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar/>
      {/* <LoginUser/> */}
      {/* <RenduCondi  msg =" Youpla Boum!" visible = {false} error = {true} /> */}
      {/* <ChooseBoardgame /> */}
      
      {/* <Form>
          <Form.Group>Email Address</Form.Group>
      </Form>
      
      <Card className="mb-3" style={{ color: "#000"}}>
          <Card.Img src='https://picsum.photos/200/80'/>
          <Card.Body>
            <Card.Title>
                My card
            </Card.Title>
            <Card.Text>
                Tralalalalalalalalalalalalla Tralalalalalalalalla
            </Card.Text>
              <Button variant="primary">Read More</Button>
          </Card.Body>

      </Card>
      
      
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
      </Breadcrumb>
      
      <Alert>This is a button</Alert>
      <Button>Test button Bootstrap</Button> */}
      
      {/* <ExoCompteur increment={5}/> */}
      
      {/* <Exobienvenu name="Laurent" age={46} /> */}
    </div>
  );
}

export default App;
