import { useState } from "react";
import { Table } from "react-bootstrap";
import CreaBoardGameDetailPage from "../../pages/creategame/pages/choosegame/crea-boardgamesDetail.page";

// onSelectedBoardgame

const CreaBoardgamesList = ({ data, handleTitleSelectedGame }) => {
  const [boardgame, setBoardgame] = useState("");
  const [gameId, setGameId] = useState(null);

  // const onSelectedBoardgame = () => {
  //setSelectedGameId(selectedGameId => boardgame.boardgame_id)

  // }
  console.log(data);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Subtitle</th>
          <th colSpan={2}> </th>
        </tr>
      </thead>
      <tbody>
        {data.map((boardgame) => (
          <RowTable key={boardgame.boardgame_id} boardgame={boardgame} handleTitleSelectedGame={handleTitleSelectedGame}/>
        ))}
      </tbody>
    </Table>
  );
};
export default CreaBoardgamesList;

const RowTable = ({ boardgame, handleTitleSelectedGame }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  
  const handleMoreInfo = () => {
    setMoreInfo((moreInfo) => !moreInfo);
  };
  
  const onSelectedBoardgame = (id, title) => {
    console.log("click me" + id);
    console.log(title );
    handleTitleSelectedGame(title)

  }



  return (
    <>
      <tr className="p-2">
        <th>{boardgame.boardgame_id}</th>
        <th>{boardgame.boardgame_title}</th>
        <th>{boardgame.boardgame_subtitle}</th>
        <th>
          <button
            className="btn btn-sm btn-info"
            onClick={() => handleMoreInfo(boardgame.boardgame_id)}
          >
            More info
          </button>
        </th>
        <th>
          <button
            className="btn btn-sm btn-success"
            onClick={() => onSelectedBoardgame(boardgame.boardgame_id, boardgame.boardgame_title)}
          >
            validation
          </button>
        </th>
      </tr>

      {moreInfo && (
        <tr>
          <th colSpan={5}>
            <CreaBoardGameDetailPage gameId={boardgame.boardgame_id} />
          </th>
        </tr>
      )}
    </>
  );
};
