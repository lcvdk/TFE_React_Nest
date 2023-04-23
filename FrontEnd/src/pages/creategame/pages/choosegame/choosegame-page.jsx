import { Button, Card, Container } from "react-bootstrap";
import ChooseGameMode from "../choosemode/choosemode.page";
import ChoosePlayerPage from "../chooseplayer/chooseplayer-page";
import Bouton from "../../../../components/boutons/bouton";
import Boardgames from "../../../../components/boardgames/boardgames";
import { useState } from "react";
import BoardGamesIndexPage from "../../../boardgames/boardgamesIndex.page";



const ChooseGamePage = () => {
  
  const [showAllGames, setShowAllGames] = useState(true)
  const [selectedGame, setSelectedGame] = useState("")

  const handleClickShowAllGames = () => {
      setShowAllGames(showAllGames => !showAllGames)
    }
  const handleSelectedGame = () => {
    setSelectedGame(selectedGame)
  }

  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title>Choose Your Game</Card.Title>
          <Card.Subtitle>{selectedGame}</Card.Subtitle>
          <Container className="pt-3">
          {showAllGames && <BoardGamesIndexPage handleselectedgame={handleSelectedGame}/>}
          
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
