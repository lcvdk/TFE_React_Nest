import { useParams } from "react-router-dom";

const OneBoardGamePage = (props) => {
  
  const { boardgame_id, boardgame_title } = useParams();

  console.log("<<<", boardgame_id)
  console.log("props", props)

  // useEffect(()=> {
  //   axios.get(`http://localhost:5000/api/boardgames/${boardgame_id}`) // get + url
  //   .then((res) => {  // response
  //     console.log(res)
  //   })
  // },[])

  return (
    <>
      <h1>Boardgame</h1>
      {<p>This is the BoardGame {boardgame_id} {boardgame_title}</p>}
    </>
  )
}

export default OneBoardGamePage;