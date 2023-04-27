import { useNavigate } from "react-router-dom"
import PlayersList from "../../components/players/players-list"
import { useCallback, useEffect, useState } from "react"
import axios from 'axios'

const PlayerIndexPage = () => {

    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
  
    useEffect(()=> {
      axios.get("http://localhost:5000/api/players") // get + url
      .then((res) => {  // response
        setPlayers(res.data) // setGames change games avec les datas de la response
      })
    },[])

    const handleSelectedPlayer = useCallback((id) => {
      navigate('/players/'+id)
    }) 



return(
  <>
    <PlayersList data={players} onSelectedPlayer={handleSelectedPlayer}/>
  </>
)
}
export default PlayerIndexPage;