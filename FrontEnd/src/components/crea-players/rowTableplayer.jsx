import { useState } from "react";


const RowTablePlayer = ({player, handleSelectPlayers, handleDeSelectPlayers, errorTable}) => {

  const [checked, setCheck] = useState(false)

  const handlecheck = () => {
    setCheck(!checked)
    if (checked){ 
      handleDeSelectPlayers(player.player_id, player.player_pseudo)
    } 
    
    else { 
        handleSelectPlayers(player.player_id, player.player_pseudo)
    }
  }

  console.log(errorTable)
  return (
    <>
    <tr className={!checked? "p-2" : "p-2 table-success"}>
        <td>{player.player_id}</td>
        <td>{player.player_pseudo}</td>
        <td>{player.player_email}</td>
        <td></td>
          <td>
            <button
            className={!checked? "btn btn-sm btn-success" : "btn btn-sm btn-dark"}
            onClick={() => handlecheck()}
            checked={checked}
          >
            {!checked? "Selection" : "Deselection"}
          </button>
          </td>
      </tr>
    </>
  );
}
export default RowTablePlayer;

