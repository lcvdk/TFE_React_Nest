import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const PlayersPage = () => {
  
  return (
    <Container className="text-center pt-3">
      <h1 className="text-info">Players Page</h1>
            <Outlet />
    </Container>
  )
}

export default PlayersPage;