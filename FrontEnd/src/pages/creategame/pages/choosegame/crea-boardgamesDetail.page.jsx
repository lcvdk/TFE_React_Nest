import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios'
import CreaBoardGameDetail from "../../../../components/crea-boardgames/crea-boardgame-detail";

const CreaBoardGameDetailPage = (props) => {
  
  const gameId = props.gameId

  
  const [boardgame, setBoardgame] = useState()
  

  useEffect(()=> {
    axios.get("http://localhost:5000/api/boardgames/"+gameId) // get + url     +boardgameId
    .then((res) => {  // response
      setBoardgame(res.data)
    })
  },[])

  return (
    <>
      <CreaBoardGameDetail {...boardgame}/>
      
    </>
  )
}

export default CreaBoardGameDetailPage;