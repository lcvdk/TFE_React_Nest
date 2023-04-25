import { Button, Card, Container } from "react-bootstrap";
import ChooseGameMode from "../choosemode/choosemode.page";
import ChoosePlayerPage from "../chooseplayer/chooseplayer-page";
import { useState } from "react";
import CreaBoardGamesIndexPage from "./crea-boardgamesIndex.page";



const ChooseGamePage = () => {
  
  const [showAllGames, setShowAllGames] = useState(false)
  const [showAllPlayers, setShowAllPlayers] = useState(false)
  const [titleSelectedGame, setTitleSelectedGame] = useState("")
  const [idSelectedGame, setIdSelectedGame] = useState(null)
  
  
  const handleClickShowAllGames = () => {
      setShowAllGames(showAllGames => !showAllGames)
    }
  const handleTitleSelectedGame = (title, id) => {
    setTitleSelectedGame(title)
    setIdSelectedGame(id)
    console.log(id)
  }


  const handleClickShowAllPlayers = () => {
    setShowAllPlayers(showAllPlayers => !showAllPlayers)
  }
  



  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title>Choose Your Game</Card.Title>
          <Card.Subtitle><h2>{titleSelectedGame}</h2></Card.Subtitle>
          <Container className="pt-3">
          {showAllGames && <CreaBoardGamesIndexPage handleTitleSelectedGame={handleTitleSelectedGame} handleClickShowAllGames={handleClickShowAllGames}   />}
          
          <Button 
            type="submit" 
            className="btn-success btn-sm mt-3" 
            onClick={handleClickShowAllGames}
            >{!showAllGames? "Show all Games" : "Hide all games"}
          </Button>
          
          
          </Container>
        
        </Card>
      </Container>
      
      <Container fluid="true" >  
      <ChooseGameMode gameSelected={idSelectedGame} />
      </Container>

      <Container fluid="true" >  
      <ChoosePlayerPage handleClickShowAllPlayers={handleClickShowAllPlayers} showAllPlayers={showAllPlayers}/>
      </Container>
    </>
  );
};
export default ChooseGamePage;
