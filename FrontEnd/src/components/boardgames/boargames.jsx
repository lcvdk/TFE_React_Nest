import { useEffect, useState } from "react"
import axios from 'axios'
import { nanoid } from 'nanoid'
import BoardGameRow from "./boardgamerow"
import style from './boardgame.module.css'
//model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

const Boardgames = () => {
  const [games, setGames] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:5000/api/boardgames") // get + url
    .then((res) => {  // response
      setGames(res.data) // setGames change games avec les datas de la response
    })
  },[])

  const gamesMap = games.map((game)=> // prends la response [] et fait une boucle sur chaque élément
     // pour chaque élément il fait un <li></li> contenant un key et un contenu dynamique.
        <BoardGameRow key={game.id=nanoid()} {...game}/>
  )
  // le gameMap est affiché à l'aide de {gamesMap}
  return (
    
        <ul>
          {gamesMap} 
        </ul>
  )
}

export default Boardgames