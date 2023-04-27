import { Card, Container } from "react-bootstrap";

const BoardgamesList = ({ data, onSelectedBoardgame }) => {
  return (
    <Container>
      {data.map((boardgame) => (
        <Card
          className="p-2"
          key={boardgame.boardgame_id}
          onClick={() => onSelectedBoardgame(boardgame.boardgame_id)}
        >
          <Card.Text className="text-light">
            {boardgame.boardgame_title} {boardgame.boardgame_subtitle}
          </Card.Text>
        </Card>
      ))}
    </Container>
  );
};
export default BoardgamesList;
