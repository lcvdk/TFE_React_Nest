import { useState } from 'react'
// import style from './boardgamerow.module.css'
import { Card } from 'react-bootstrap' // import B's Components
 
import 'bootstrap/dist/css/bootstrap.min.css'

const BoardGameRow = (props) =>{
  
  const [value, setValue] = useState()


  const HandlerSelectedgame = (e)=> {
    setValue("vous avez choisi " + e.target.innerText)
  }


return(
  
    <li>
        <Card className="mb-3">
          <Card.Img src='https://picsum.photos/200/80'/>
          <Card.Body>
            <div  onClick={HandlerSelectedgame}>
              <Card.Title>
                <h2>{props.boardgame_title}</h2>
              </Card.Title>
              <Card.Text>
                {/* {value} */}
                {props.boardgame_synopsis}
              </Card.Text>  
            </div>
          </Card.Body>
        </Card>
    </li>
  
)

}
export default BoardGameRow;