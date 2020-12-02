import React from "react"
import "./css/text.css"

class Home extends React.Component{
  render(){
    return(
      <div className="text">
        <h1 className="title">Welcome to Snakes and Ladders</h1>

        <p>Este es un proyecto de clase de Tania y Vic, de la escuela Flatiron.</p>
        <p>Serpientes y escaleras es una versión interactiva del juego clásico mundialmente conocido. Es un juego de tablero para dos jugadores para jugar con tus amigos y familiares.</p>
        <p>Haz clic en "Juego" para ver el tablero y empezar un juego nuevo, o haz clic en "Instrucciones" para aprender cómo se juega.</p>
        <p>Después de terminar una partida, si quieres jugar de nuevo, haz clic en el botón que dice "Juego Nuevo", y puedes empezar de nuevo.</p>
        <p>¡Buena suerte y que te diviertas!</p>
      </div>
    )
  }
}


export default Home
