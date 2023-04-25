const RowTablePlayer = ({player}) => {

  return (
    <>
    <tr className="p-2">
        <td>{player.player_id}</td>
        <td>{player.player_pseudo}</td>
        <td>{player.player_email}</td>
        <td>yo</td>
        <td>yo</td>
      </tr>
    </>
  );
}
export default RowTablePlayer;