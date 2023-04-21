import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const PlayersPage = () => {
  
  return (
    <Container>
      <h1>Player Page</h1>
      <p>This is the players Page</p>
      <Outlet />
    </Container>
  )
}

export default PlayersPage