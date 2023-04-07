import { useEffect, useState } from "react"
import axios from 'axios'

const Boardgames = () => {
  const [games, setGames] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:5000/api/boardgames")
    .then((res) => {
      setGames(res.data)
    })
  },[])

  const gamesMap = games.map((game)=>(
    <li>{game.boardgame_title}</li>

  ))

  return (
    <>
        <h1>COUCOU</h1>
        <ul>
          {gamesMap}
        </ul>
    </>
  )
}

export default Boardgames