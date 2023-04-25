import { useState } from "react";
import { Table } from "react-bootstrap";
import CreaBoardGameDetailPage from "../../pages/creategame/pages/choosegame/crea-boardgamesDetail.page";

// onSelectedBoardgame

const CreaBoardgamesList = ({ data, handleTitleSelectedGame, handleClickShowAllGames }) => {

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
          <RowTable 
            key={boardgame.boardgame_id} 
            boardgame={boardgame} 
            handleTitleSelectedGame={handleTitleSelectedGame} 
            handleClickShowAllGames={handleClickShowAllGames}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default CreaBoardgamesList;

const RowTable = ({ boardgame, handleTitleSelectedGame, handleClickShowAllGames }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  
  const handleMoreInfo = () => {
    setMoreInfo((moreInfo) => !moreInfo);
  };
  
  const onSelectedBoardgame = (id, title) => {
    handleTitleSelectedGame(title,id)
    handleClickShowAllGames()
  }



  return (
    <>
      <tr className="p-2">
        <td>{boardgame.boardgame_id}</td>
        <td>{boardgame.boardgame_title}</td>
        <td>{boardgame.boardgame_subtitle}</td>
        <td>
          <button
            className="btn btn-sm btn-info"
            onClick={() => handleMoreInfo(boardgame.boardgame_id)}
          >
            More info
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-success"
            onClick={() => onSelectedBoardgame(boardgame.boardgame_id, boardgame.boardgame_title)}
          >
            validation
          </button>
        </td>
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
