import { Table } from "react-bootstrap";
import RowTablePlayer from "./rowTableplayer";


const CreaPlayersList = ({ data, handleSelectPlayers, handleDeSelectPlayers, errorTable, numberPlayers, arrayLength }) => {
  console.log(data);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Pseudo</th>
          <th>email</th>
          <th colSpan={2}> {arrayLength}/{numberPlayers}</th>
        </tr>
      </thead>
      
      <tbody>
        
        {errorTable && <span className="text-danger">"Number of Player Reached"</span>}
        {data.map((player) => (
          
          <RowTablePlayer 
            key={player.player_id} 
            player={player} 
            handleSelectPlayers={handleSelectPlayers}
            handleDeSelectPlayers={handleDeSelectPlayers}
            errorTable={errorTable}/>
          
          ))}
      </tbody>
    </Table>
  );
};
export default CreaPlayersList;





