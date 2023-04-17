import PropTypes from 'prop-types';
import style from './exobienvenue.module.css'

const Exobienvenu = (props) =>{


  Exobienvenu.defaultProps = {
    name: "Riri",
    age: 18
  }

  Exobienvenu.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
  }  



return (
    <>
      <p className={style.title}>Bienvenue {props.name} sur l'application React!</p>
      <p className={style.subtitle}>Vous avez {props.age} ans!</p>
    </>
)




}
export default Exobienvenu