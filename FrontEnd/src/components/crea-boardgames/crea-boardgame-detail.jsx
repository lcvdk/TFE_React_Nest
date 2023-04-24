import { Card, ListGroup } from "react-bootstrap";

const CreaBoardGameDetail = ({
  boardgame_title,
  boardgame_subtitle,
  boardgame_genre,
  boardgame_difficulty,
  boardgame_playtime,
  boardgame_maxPlayers,
  boardgame_synopsis,
}) => (
  <Card >
    <Card.Body>
      <Card.Header className="fs-3 text-white">
        {boardgame_title}{" "}
        <span className="text-muted">{boardgame_subtitle}</span>
      </Card.Header>
      <Card.Text className="text-start pt-2">
        <span className="text-white">Synopsis:</span> <br /> 
        {boardgame_synopsis}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush text-start">
      <ListGroup.Item>Genre: {boardgame_genre}</ListGroup.Item>
      <ListGroup.Item>Difficulté: {boardgame_difficulty}</ListGroup.Item>
      <ListGroup.Item>Temps estimé: {boardgame_playtime} min</ListGroup.Item>
      <ListGroup.Item>
        Nombre de joueurs Max: {boardgame_maxPlayers}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default CreaBoardGameDetail;
