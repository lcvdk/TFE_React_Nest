import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios'



const CreaNewPlayerForm = () => {

  const [pseudoNewPlayer, setPseudoNewPlayer] = useState('')
  const [emailNewPlayer, setEmailNewPlayer] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();
  console.log(pseudoNewPlayer)
  console.log(emailNewPlayer)

  axios.post("http://localhost:5000/api/players", {
                player_pseudo : pseudoNewPlayer,
                player_email: emailNewPlayer
              })
              .then((res) => {console.log(res)})
              .catch ((error) => {console.log(error)})

  
}



  return (
    <Container>
      <Form className="w-50 p-5 border border-light mx-auto" onSubmit={handleSubmit} >
        <h3> Create Player </h3>
        
        <Form.Group className="mb-3 text-start" controlId="formBasicPseudo">
          <Form.Label>Player's Pseudo</Form.Label>
          <Form.Control type="text" placeholder="Enter Player's Pseudo" value={pseudoNewPlayer} onChange={(e)=> setPseudoNewPlayer(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={emailNewPlayer} onChange={(e)=> setEmailNewPlayer(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        
        
        <Button variant="sm btn-warning" type="submit">
          Create 
          
        </Button>
      </Form>
    </Container>
  );
};
export default CreaNewPlayerForm;
