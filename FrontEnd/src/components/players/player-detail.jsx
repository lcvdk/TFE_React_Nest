import { Card } from "react-bootstrap";

const PlayerDetail = ({ player_id, player_pseudo, player_email }) => (
  <Card className="p-2">
      <p>Player ID: {player_id}</p>
      <h3 className="text-info">{player_pseudo}</h3>
      <p>{player_email}</p>
  </Card>
);

export default PlayerDetail;
