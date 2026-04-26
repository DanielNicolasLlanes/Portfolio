import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ol className='list'>
        <li><Link className='listItem' to="/">Inicio</Link></li>
        <li><Link className='listItem' to="/proyects">Proyectos</Link></li>
        <li><Link className='listItem' to="/contacto">Contacto</Link></li>
    </ol>
  )
}

export default NavBar
