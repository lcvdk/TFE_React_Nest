import { Button, Card, Container, Row } from "react-bootstrap";
import ChooseGameMode from "../choosemode/choosemode.page";
import ChoosePlayerPage from "../chooseplayer/chooseplayer-page";
import { useState } from "react";
import CreaBoardGamesIndexPage from "./crea-boardgamesIndex.page";



const ChooseGamePage = () => {
  
  const [showAllGames, setShowAllGames] = useState(false)
  const [showAllPlayers, setShowAllPlayers] = useState(false)
  const [titleSelectedGame, setTitleSelectedGame] = useState("")
  const [idSelectedGame, setIdSelectedGame] = useState(null)
  const [numberPlayers, setNumberPlayers] = useState(null)
  const [errorTable, setErrorTable] = useState(false)
 
  const playerArray = []
  
  
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
  
  const handleSelectNumberPlayer = (value) => {
    console.log("value players " + value)
    setNumberPlayers(numberPlayers => value)
  }

  const handleSelectPlayers = (playerId,playerPseudo) => {
    
    if (playerArray.length < numberPlayers){
      
      if (playerArray.includes(playerPseudo)) {
        setErrorTable(true)
      }
      
      else {
        playerArray.push(playerPseudo)
        console.log(`${playerPseudo} est validé`)
      }
      
    }
    else {
      setErrorTable(true)
    } 
    
    console.log(playerArray)

  }


  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title>Choose Your Game</Card.Title>
          <Card.Subtitle className="text-success"><h2>{titleSelectedGame}</h2></Card.Subtitle>
          <Container className="pt-3">
            {numberPlayers && `Number of players: ${numberPlayers}` }
          <Row>
            {showAllGames && <CreaBoardGamesIndexPage 
                  handleTitleSelectedGame={handleTitleSelectedGame} 
                  handleClickShowAllGames={handleClickShowAllGames}   
                  />
            }
          </Row>
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
      <ChooseGameMode gameSelected={idSelectedGame} handleSelectNumberPlayer={handleSelectNumberPlayer}/>
      </Container>

      <Container fluid="true" >  
      <ChoosePlayerPage 
            handleClickShowAllPlayers={handleClickShowAllPlayers} 
            showAllPlayers={showAllPlayers} 
            numberPlayers={numberPlayers}
            handleSelectPlayers={handleSelectPlayers}
            errorTable={errorTable}
            />
      </Container>
    </>
  );
};
export default ChooseGamePage;
