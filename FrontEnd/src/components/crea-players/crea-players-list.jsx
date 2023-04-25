import { Table } from "react-bootstrap";
import RowTablePlayer from "./rowTableplayer";


const CreaPlayersList = ({ data }) => {
  console.log(data);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Pseudo</th>
          <th>email</th>
          <th colSpan={2}>tralala</th>
        </tr>
      </thead>
      
      <tbody>
        
        {data.map((player) => (
          
          <RowTablePlayer key={player.player_id} player={player}/>
          
          ))}
      </tbody>
    </Table>
  );
};
export default CreaPlayersList;





