import { Card, Container } from "react-bootstrap";

const PlayersList = ({ data, onSelectedPlayer }) => {
  return (
    <Container>
      {data.map((player) => (
        <Card
          className="p-2"
          key={player.player_id}
          onClick={() => onSelectedPlayer(player.player_id)}
        >
          <Card.Text>{player.player_pseudo}</Card.Text>
        </Card>
      ))}
    </Container>
  );
};
export default PlayersList;
