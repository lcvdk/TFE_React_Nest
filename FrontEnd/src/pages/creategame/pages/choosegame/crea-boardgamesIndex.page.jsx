import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CreaBoardgamesList from "../../../../components/crea-boardgames/crea-boardgames-list";

const CreaBoardGamesIndexPage = (props) =>{

  const [boardgames, setBoardgames] = useState([])// attention on renvoit un tableau []

  useEffect(() => {
    axios.get("http://localhost:5000/api/boardgames")
    .then((res) => {
      setBoardgames(res.data)
    })  
  },[])

  
    return (
      <>
          <h4>This is the Boardgames Index Page</h4>
          <CreaBoardgamesList data={boardgames} handleTitleSelectedGame={props.handleTitleSelectedGame} handleClickShowAllGames={props.handleClickShowAllGames}/>
      </>
    )

}
export default CreaBoardGamesIndexPage;