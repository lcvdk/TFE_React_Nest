import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import BoardgamesList from "../../components/boardgames/boardgames-list";

const BoardGamesIndexPage = () =>{

  const navigate = useNavigate()
  const [boardgames, setBoardgames] = useState([])// attention on renvoit un tableau []

  useEffect(() => {
    axios.get("http://localhost:5000/api/boardgames")
    .then((res) => {
      setBoardgames(res.data)
    })  
  },[])

  const handleSelectedBoardgame = useCallback((id) => {
    navigate('/boardgames/'+id)
  } )



    return (
      <>
          <h4>This is the Boardgames Index Page</h4>
          <BoardgamesList data={boardgames} onSelectedBoardgame={handleSelectedBoardgame} />
      </>
    )

}
export default BoardGamesIndexPage;