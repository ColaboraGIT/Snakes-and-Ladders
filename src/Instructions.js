import React from "react"
import "./css/text.css"

class Instructions extends React.Component{
  render(){
    return(
      <div className="text">
        <h1 className="title">Cómo jugar:</h1>
        <p>1. Decide quién va a ser el primer jugador.</p>
        <p>2. Click en el botón que pone "Lanza el Dado". El dado blanco te dice cuantos espacios se va a mover tu ficha.</p>
        <p>3. Si caes en una cabeza de serpiente irás hacia abajo, pero si caes en una escalera subirás.</p>
        <p>4. El primer jugador que llege a 100 ganará el juego</p>
      </div>
    )
  }
}


export default Instructions
