import { Button, Form, Container, Row, Col } from 'react-bootstrap' // import B's Components
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginUser = () => {


return(
  <>
    <Container fluid>
        <Form>
          <Row>
            <Col md>
            <Form.Group controlId='formEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com"/>
                <Form.Text className=""> Enter your email address</Form.Text>
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            </Col>
          </Row>
                <Button variant="primary" type="submit">Login</Button>
        </Form>
    </Container>

  </>
)

}
export default LoginUser;