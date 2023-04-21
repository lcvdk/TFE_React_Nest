import { useState } from "react";
import WeatherRequest from "../../components/meteo/weather-request"

const WeatherApp = () => {
  // useState pour city
  const [city, setCity] = useState(null)

  return(
    <>
    <WeatherRequest city={"Bruxelles"} />

    {city && ( 
      <WeatherRequest city={city} />
    )}
    </>
  )
}
export default WeatherApp;