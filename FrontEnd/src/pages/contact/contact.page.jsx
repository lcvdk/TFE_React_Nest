import { Card, Container } from "react-bootstrap";

const ContactPage = () => {
  
  return (
    <Container >
      
      <Card className="mx-auto mt-5 w-75 text-white">
      <Card.Body>
        <h3 className="text-info" >Laurent Vanderkelen</h3>
        <p><strong >Développeur Javascript full stack</strong> Junior, en reconversion professionelle</p>
        <p>Après plus de 18 ans d'expérience dans le design graphique (publication) et le marketing, j'ai souhaité me reconvertir dans le développement. J'ai suivi deux formations en Javascript chez Digitalcity.Brussels accompagnées de formations en ligne sur Udemy.</p>
        <p>Etant 'junior', je recherche à présent à mettre mes nouvelles compétences au défi et au service d'une équipe qui pourra m'accompagner.</p>
      </Card.Body>
      </Card>
      <Card className="mx-auto mt-5 w-75 text-white">
        <Card.Body>
            <Card.Title>Me Contacter:</Card.Title>
            <Card.Text>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">🌍  <a href="https://www.linkedin.com/in/laurentvdk/">mon LinkedIn</a></li>
                <li className="list-group-item">📩  <a href="mailto: lc.vanderkelen@gmail.com" >lc.vanderkelen@gmail.com</a></li>
                <li className="list-group-item">📞 +32 476 96 96 99</li>
              </ul>
            </Card.Text>

        </Card.Body>

      </Card>
      
    </Container>
  )
}

export default ContactPage;