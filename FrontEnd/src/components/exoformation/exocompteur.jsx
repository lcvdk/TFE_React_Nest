import { useState } from "react";

const ExoCompteur = ({ increment }) => {
  const [value, setValue] = useState(0);
  const [incremente, setIncremente] = useState(increment);
  const [inputValue, setInputValue] = useState(0);

  const HandlerIncrement = () => {
    setValue((value) => value + incremente);
  };

  const HandlerReset = () => {
    setValue(0);
  };

  const HandlerPersoIncrement = (e) => {
    setIncremente(parseInt(e.target.value));
  };

  return (
    <div>
      <p>{value}</p>

      <button type="submit" onClick={HandlerIncrement}>
        {"increment de " + incremente}
      </button>

      {value !== 0 && (
        <button type="reset" onClick={HandlerReset}>
          remise à 0
        </button>
        )}

      <br />
      <label htmlFor="yop">donne une valeur d'increment </label>
      <input id="yop"type="number" onChange={HandlerPersoIncrement}/>
    </div>
  );
};
export default ExoCompteur;
