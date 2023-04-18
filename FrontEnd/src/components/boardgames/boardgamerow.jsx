import { useState } from 'react'
// import style from './boardgamerow.module.css'
import { Card, Col } from 'react-bootstrap' // import B's Components
 
import 'bootstrap/dist/css/bootstrap.min.css'

const BoardGameRow = (props) =>{
  
  const [value, setValue] = useState()


  const HandlerSelectedgame = (e)=> {
    setValue("vous avez choisi " + e.target.innerText)
  }


return(
  
    <li>
        <Col>
        <Card className="md-3 p-3 m-2" style={{ width: '18rem' }} >
          <Card.Img src='https://picsum.photos/100/30'/>
          <Card.Body>
            <div  onClick={HandlerSelectedgame}>
              <Card.Title>
                <h2>{props.boardgame_title}</h2>
              </Card.Title>
              <Card.Text>
                {props.boardgame_genre}
              </Card.Text>  
            </div>
          </Card.Body>
        </Card>
        </Col>
    </li>
  
)

}
export default BoardGameRow;