import { useEffect, useState } from "react";
import axios from "axios";
import CreaPlayersList from "../../../../components/crea-players/crea-players-list";

const ChoosePlayerIndexPage = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/players")
    .then((res) => {
      setPlayers(res.data);
    });
  }, []);
  
    
  return (
    <>
          <CreaPlayersList 
          data={players} 
          handleSelectPlayers={props.handleSelectPlayers}
          handleDeSelectPlayers={props.handleDeSelectPlayers} 
          errorTable={props.errorTable} 
          numberPlayers={props.numberPlayers}
          arrayLength={props.arrayLength}  
          />
    </>
  );
};
export default ChoosePlayerIndexPage;
