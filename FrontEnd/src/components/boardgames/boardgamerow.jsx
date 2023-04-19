import { useState } from 'react'
// import style from './boardgamerow.module.css'
import { Card, Col } from 'react-bootstrap' // import B's Components
 
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const BoardGameRow = (props) =>{
  const navigate = useNavigate()
  const [value, setValue] = useState()


  const HandlerSelectedgame = (e)=> {
    setValue("vous avez choisi " + e.target.innerText)
  }

const handleSelect = ()=>{
  // navigate('/contact')
  console.log("handleSelect");
}
return(
  
    
        
        <Card className="md-3 p-3 m-2" onClick={handleSelect} style={{ width: '18rem' } }>
          <Card.Img src='https://picsum.photos/100/30'/>
          <Card.Body>
            
              <Card.Title>
                {props.boardgame_title}
              </Card.Title>
              <Card.Text>
                {props.boardgame_genre}
                {value}
              </Card.Text>  
            
          </Card.Body>
        </Card>
        
    
  
)

}
export default BoardGameRow;