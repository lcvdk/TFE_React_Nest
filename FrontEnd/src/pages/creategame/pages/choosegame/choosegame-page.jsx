import { Button, Card, Container, Row } from "react-bootstrap";
import { useState } from "react";

// components & pages
import CreaBoardGamesIndexPage from "./crea-boardgamesIndex.page";
import ChooseGameMode from "../choosemode/choosemode.page";
import ChoosePlayerPage from "../chooseplayer/chooseplayer-page";



const ChooseGamePage = () => {
  
  const [showAllGames, setShowAllGames] = useState(false)
  const [showAllPlayers, setShowAllPlayers] = useState(false)
  const [titleSelectedGame, setTitleSelectedGame] = useState("")
  const [idSelectedGame, setIdSelectedGame] = useState(null)
  const [numberPlayers, setNumberPlayers] = useState(null)
  const [errorTable, setErrorTable] = useState(false)
  const [arrayLength, setArrayLength] = useState(0)
 
  let playerArray = []
  
  
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
  
  // from GameMode page 
  const handleSelectNumberPlayer = (value) => {
    console.log("value players " + value)
    setNumberPlayers(numberPlayers => value)
  }


  // choose player page
  const handleSelectPlayers = (playerId,playerPseudo) => {
    
    if (playerArray.length <= numberPlayers){
      console.log("playerId >>>" + playerId)
      
      

      if (playerArray.find((player) => player.playerId === playerId) ) {
        console.log(`player id ${playerId} found ! `)
        playerArray = playerArray.filter(player => player.playerId != playerId)
        setArrayLength(playerArray.length)
        // playerArray.slice(Index)
        
        
      }
      
      else {
        playerArray.push({playerId,playerPseudo})
        console.log(`${playerPseudo} est validé`)
        setArrayLength(playerArray.length)
      }
      
    }
    else {
      setErrorTable(true)
    } 
    
    
    console.log(playerArray)
    
  }

  const handleDeSelectPlayers = (playerId,playerPseudo) => {
    console.log(`Deselect player ${playerPseudo}`)
  }



  return (
    <>
      <Container fluid="true" >
        <Card className="m-1 p-3 d-flex" style={{justifyContent: "center"}}>
          <Card.Title className="text-info">Choose Your Game</Card.Title>
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
            handleDeSelectPlayers={handleDeSelectPlayers}
            errorTable={errorTable}
            arrayLength={arrayLength}
            />
      </Container>
      <Container>

      </Container>
    </>
  );
};
export default ChooseGamePage;
