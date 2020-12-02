import React, {Component} from "react";
import "./css/buttons.css"

const Dice = ( props ) =>{
  return(
    <div>
      <button  className="button roll-dice" type="button" onClick={props.diceValue} >Lanza el dado</button>
    </div>
  )
}


export default Dice;
