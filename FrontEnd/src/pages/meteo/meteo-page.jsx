import { Card, Container } from "react-bootstrap";
import WeatherApp from "../../containers/weather-app/weather-app";

const MeteoPage = () => {
  return (
    <>
      <Container>
        <Card className="p-2 mt-4 text-center">
          <Card.Header>Météo</Card.Header> 
        <WeatherApp />
        </Card>
      </Container>
    </>
  );
};

export default MeteoPage;
