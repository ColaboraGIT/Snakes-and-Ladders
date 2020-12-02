import React from "react"
import "./css/text.css"

class Instructions extends React.Component{
  render(){
    return(
      <div className="text">
        <h1 className="title">How to play:</h1>
        <p>1. Decide quien será el primer jugador.</p>
        <p>2. Haz click en el botón que dice "Lanza el dado". Entonces el dado te indicará cuantos espacios se moverá tu ficha.</p>
        <p>3. Si caes en la casilla de una cabeza de serpiente irás hacia abajo, pero si caes en una escalera, subirás.</p>
        <p>4. El primer jugador en alcanzar el 100 gana el juego.</p>
      </div>
    )
  }
}


export default Instructions
