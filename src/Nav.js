import React, { Component } from "react"
import  { Link, NavLink } from "react-router-dom"
import "./css/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li><NavLink to="/" activeClassName="active">Inicio</NavLink>  </li>
          <li><NavLink to="/game" activeClassName="active">Juego</NavLink>  </li>
          <li><NavLink to="/instructions" activeClassName="active">Instrucciones</NavLink>  </li>
        </ul>
      </div>
    )
  }
}


export default NavBar
