import { useEffect, useState } from "react"
import { weatherFetcher } from "../../api/weather.api"
import WeatherDisplay from "./weather-display"

const WeatherRequest = ({city}) => {

  //useState
  const [data, setData] = useState(null) // resultat requete
  const [error, setError] = useState(null) // error handling
  const [isLoading, setLoading] = useState(null) // gestion du temps de loading

  useEffect(() => {
    weatherFetcher(city).then(result =>{
      setData(result)
    }).catch(response => {
      setError(response.message);
    }).finally(() =>{
      setLoading(false)
    });

    return () => {
      setData(null);
      setError(null);
      setLoading(true);
    }


  },[city]) // if "city" change il fait le useEffect


  return isLoading ? (
      console.log("is loading")
  ) : data ? (
    
    <WeatherDisplay {...data} />
  ) : (
    console.log("error ", error)
  )
}
export default WeatherRequest;