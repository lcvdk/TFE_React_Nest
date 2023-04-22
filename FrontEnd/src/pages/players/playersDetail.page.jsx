import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import PlayerDetail from "../../components/players/player-detail";


const PlayerDetailPage = () => {

  const {playerId} = useParams()
  console.log(playerId);
  
  const [player, setPlayer]=useState()


  useEffect(()=> {
    axios.get("http://localhost:5000/api/players/"+playerId) // get + url
    .then((res) => {  // response
      setPlayer(res.data) // setGames change games avec les datas de la response
    })
 },[])
  
  
    


return(
  <>
        <PlayerDetail  {...player}/>
  </>
)


}
export default PlayerDetailPage;