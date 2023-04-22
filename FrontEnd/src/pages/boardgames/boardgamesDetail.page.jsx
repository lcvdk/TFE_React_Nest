import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardGameDetail from "../../components/boardgames/boardgame-detail";
import axios from 'axios'

const BoardGameDetailPage = () => {
  
  const { boardgameId } = useParams();

  console.log("<<<", boardgameId)

  const [boardgame, setBoardgame] = useState()
  

  useEffect(()=> {
    axios.get("http://localhost:5000/api/boardgames/"+boardgameId) // get + url
    .then((res) => {  // response
      setBoardgame(res.data)
    })
  },[])

  return (
    <>
      <BoardGameDetail {...boardgame}/>
      
    </>
  )
}

export default BoardGameDetailPage;