import { useEffect, useState } from 'react'
// import style from './boardgamerow.module.css'
import { Card, Col } from 'react-bootstrap' // import B's Components
 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const BoardGameRow = (props) =>{
  const navigate = useNavigate()
  

  
 
function HandlerSelectedgame() { 
  
  console.log("id :", props.boardgame_id )

  useEffect(()=>{
    navigate(`/creategame/${props.boardgame_id}`)
  },[])
}



return(
        <Card className="md-3 p-3 m-2" onClick={HandlerSelectedgame(props)} style={{ width: '18rem',  minHeight: '15rem' } }>
          <Card.Img src='https://picsum.photos/100/30'/>
          <Card.Body>
              <Card.Title>
                {props.boardgame_title}
              </Card.Title>
              <Card.Text>
                {props.boardgame_genre}
              </Card.Text>  
          </Card.Body>
        </Card>
)

}
export default BoardGameRow;