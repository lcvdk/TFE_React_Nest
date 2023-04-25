import { useEffect, useState } from "react";
import axios from "axios";
import CreaPlayersList from "../../../../components/crea-players/crea-players-list";

const ChoosePlayerIndexPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/players")
    .then((res) => {
      setPlayers(res.data);
    });
  }, []);
  
    
  return (
    <>
      <h1>this is my Players Index page</h1>
      <CreaPlayersList data={players} />
    </>
  );
};
export default ChoosePlayerIndexPage;
