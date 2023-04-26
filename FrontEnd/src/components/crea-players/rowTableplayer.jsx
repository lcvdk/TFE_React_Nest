import { useState } from "react";


const RowTablePlayer = ({player, handleSelectPlayers}) => {

  const [checked, setCheck] = useState(false)

  const handlecheck = () => {
    handleSelectPlayers(player.player_id, player.player_pseudo)
    setCheck(checked => !checked)
  }

  return (
    <>
    <tr className={!checked? "p-2" : "p-2 table-success"}>
        <td>{player.player_id}</td>
        <td>{player.player_pseudo}</td>
        <td>{player.player_email}</td>
        {/* <td>yo</td> */}
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

