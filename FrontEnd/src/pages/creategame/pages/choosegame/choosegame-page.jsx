import { Button, Card, Container } from "react-bootstrap";
import ChooseGameMode from "../choosemode/choosemode.page";
import ChoosePlayerPage from "../chooseplayer/chooseplayer-page";
import { useState } from "react";
import CreaBoardGamesIndexPage from "./crea-boardgamesIndex.page";



const ChooseGamePage = () => {
  
  const [showAllGames, setShowAllGames] = useState(false)
  const [titleSelectedGame, setTitleSelectedGame] = useState("")
  
  
  const handleClickShowAllGames = () => {
      setShowAllGames(showAllGames => !showAllGames)
    }
  const handleTitleSelectedGame = (title) => {
    setTitleSelectedGame(title)
  }

  



  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title>Choose Your Game</Card.Title>
          <Card.Subtitle>{titleSelectedGame}</Card.Subtitle>
          <Container className="pt-3">
          {showAllGames && <CreaBoardGamesIndexPage handleTitleSelectedGame={handleTitleSelectedGame}  />}
          
          <Button type="submit" className="btn-success btn-sm mt-3" onClick={handleClickShowAllGames}>All Games</Button>
          
          
          </Container>
        
        </Card>
      </Container>
      
      <Container fluid="true" >  
      <ChooseGameMode/>
      </Container>

      <Container fluid="true" >  
      <ChoosePlayerPage/>
      </Container>
    </>
  );
};
export default ChooseGamePage;
